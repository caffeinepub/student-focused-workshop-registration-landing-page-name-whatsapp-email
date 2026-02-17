import { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { useRegisterMutation } from '../hooks/useRegisterMutation';
import { validateFullName, validateEmail, normalizeWhatsAppNumber } from '../utils/validation';
import { CheckCircle2, Loader2, Flame } from 'lucide-react';
import { attemptWhatsAppRedirect } from '../utils/whatsappRedirect';

const WHATSAPP_GROUP_URL = 'https://chat.whatsapp.com/FYWmvGKZUWTEZEK6aXxZTF?mode=gi_t';

export default function RegistrationForm() {
  const [fullName, setFullName] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [email, setEmail] = useState('');
  const [errors, setErrors] = useState<{ fullName?: string; whatsapp?: string; email?: string }>({});

  const { mutate, isPending, isSuccess, isError, error } = useRegisterMutation();

  // Attempt WhatsApp redirect once after successful registration
  useEffect(() => {
    if (isSuccess) {
      attemptWhatsAppRedirect(WHATSAPP_GROUP_URL);
    }
  }, [isSuccess]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Clear previous errors
    setErrors({});

    // Validate all fields
    const nameError = validateFullName(fullName);
    const emailError = validateEmail(email);
    const whatsappResult = normalizeWhatsAppNumber(whatsapp);

    const newErrors: { fullName?: string; whatsapp?: string; email?: string } = {};

    if (nameError) {
      newErrors.fullName = nameError;
    }
    if (emailError) {
      newErrors.email = emailError;
    }
    if (!whatsappResult.valid) {
      newErrors.whatsapp = whatsappResult.error || 'Invalid WhatsApp number';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Submit to backend
    mutate({
      fullName: fullName.trim(),
      normalizedWhatsAppNumber: whatsappResult.normalized!,
      email: email.trim().toLowerCase(),
    });
  };

  // Success state without any WhatsApp button
  if (isSuccess) {
    return (
      <div className="rounded-lg border-2 border-primary bg-primary/5 p-6 text-center sm:p-8">
        <CheckCircle2 className="mx-auto mb-4 h-16 w-16 text-primary" />
        <h3 className="mb-2 text-2xl font-bold text-primary">Seat Reserved Successfully! 🎉</h3>
        <p className="mb-4 text-base font-medium">
          You're registered for the <span className="font-bold text-primary">FREE</span> live workshop.
        </p>
        <p className="text-sm text-muted-foreground">
          <span className="font-semibold text-foreground">Free live workshop for students | Limited seats</span>
        </p>
      </div>
    );
  }

  // Check if error is duplicate registration
  const isDuplicate = error?.message?.toLowerCase().includes('already registered');

  return (
    <div className="rounded-lg border-2 border-primary/30 bg-card p-6 shadow-lg sm:p-8">
      <h3 className="mb-6 text-center text-xl font-bold sm:text-2xl">
        Register for <span className="text-primary">Free</span> Live Workshop
      </h3>

      {isDuplicate && (
        <div className="mb-4 rounded-lg border-2 border-primary/30 bg-primary/10 p-4 text-center">
          <p className="font-semibold text-primary">You're already registered! ✓</p>
          <p className="mt-2 text-sm text-muted-foreground">
            Your seat is confirmed for the workshop.
          </p>
        </div>
      )}

      {isError && !isDuplicate && (
        <div className="mb-4 rounded-lg border-2 border-destructive/30 bg-destructive/10 p-4 text-center">
          <p className="font-semibold text-destructive">Registration failed</p>
          <p className="mt-1 text-sm text-muted-foreground">
            Please check your details and try again. If the problem persists, refresh the page.
          </p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <Label htmlFor="fullName" className="text-base font-semibold">
            Full Name <span className="text-destructive">*</span>
          </Label>
          <Input
            id="fullName"
            type="text"
            placeholder="Enter your full name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            className={`mt-1.5 ${errors.fullName ? 'border-destructive' : ''}`}
            disabled={isPending}
          />
          {errors.fullName && <p className="mt-1 text-sm font-medium text-destructive">{errors.fullName}</p>}
        </div>

        <div>
          <Label htmlFor="whatsapp" className="text-base font-semibold">
            WhatsApp Number <span className="text-destructive">*</span>
          </Label>
          <Input
            id="whatsapp"
            type="tel"
            placeholder="9876543210 or +919876543210"
            value={whatsapp}
            onChange={(e) => setWhatsapp(e.target.value)}
            className={`mt-1.5 ${errors.whatsapp ? 'border-destructive' : ''}`}
            disabled={isPending}
          />
          {errors.whatsapp && <p className="mt-1 text-sm font-medium text-destructive">{errors.whatsapp}</p>}
        </div>

        <div>
          <Label htmlFor="email" className="text-base font-semibold">
            Email Address <span className="text-destructive">*</span>
          </Label>
          <Input
            id="email"
            type="email"
            placeholder="your.email@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={`mt-1.5 ${errors.email ? 'border-destructive' : ''}`}
            disabled={isPending}
          />
          {errors.email && <p className="mt-1 text-sm font-medium text-destructive">{errors.email}</p>}
        </div>

        <Button type="submit" size="lg" className="w-full text-base font-bold sm:text-lg" disabled={isPending}>
          {isPending ? (
            <>
              <Loader2 className="mr-2 h-5 w-5 animate-spin" />
              Registering...
            </>
          ) : (
            'Register Now for Free'
          )}
        </Button>

        {/* FOMO Trust Indicator */}
        <div className="flex items-center justify-center gap-2 rounded-md bg-yellow-100 px-3 py-2 dark:bg-yellow-900/30">
          <Flame className="h-4 w-4 text-orange-600 dark:text-orange-500" />
          <p className="text-sm font-semibold text-gray-900 dark:text-gray-100">
            3,000+ students have already registered
          </p>
        </div>
      </form>
    </div>
  );
}
