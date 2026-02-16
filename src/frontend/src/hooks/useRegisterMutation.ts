import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useActor } from './useActor';

interface RegisterParams {
  fullName: string;
  normalizedWhatsAppNumber: string;
  email: string;
}

export function useRegisterMutation() {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ fullName, normalizedWhatsAppNumber, email }: RegisterParams) => {
      if (!actor) {
        throw new Error('Service temporarily unavailable. Please refresh the page and try again.');
      }

      try {
        await actor.register(fullName, normalizedWhatsAppNumber, email);
        return { success: true };
      } catch (error: unknown) {
        // Normalize backend errors into user-friendly messages
        if (error && typeof error === 'object' && 'message' in error) {
          const errorMessage = (error as { message: string }).message;
          
          // Preserve duplicate detection signals
          if (errorMessage.toLowerCase().includes('already registered')) {
            throw new Error(errorMessage);
          }
          
          // Map authorization/permission errors to neutral message
          if (
            errorMessage.toLowerCase().includes('unauthorized') ||
            errorMessage.toLowerCase().includes('permission') ||
            errorMessage.toLowerCase().includes('access denied') ||
            errorMessage.toLowerCase().includes('sign in')
          ) {
            throw new Error('Registration service is temporarily unavailable. Please try again.');
          }
          
          // Pass through other specific errors
          throw new Error(errorMessage);
        }
        
        // Generic fallback for unknown errors
        throw new Error('Unable to complete registration. Please check your connection and try again.');
      }
    },
    onSuccess: () => {
      // Invalidate any relevant queries if needed
      queryClient.invalidateQueries({ queryKey: ['registrations'] });
    },
  });
}
