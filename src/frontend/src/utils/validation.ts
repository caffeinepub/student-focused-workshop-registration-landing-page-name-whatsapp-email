export function validateFullName(name: string): string | null {
  const trimmed = name.trim();
  if (!trimmed) {
    return 'Full name is required';
  }
  if (trimmed.length < 2) {
    return 'Name must be at least 2 characters';
  }
  if (trimmed.length > 100) {
    return 'Name is too long';
  }
  return null;
}

export function validateEmail(email: string): string | null {
  const trimmed = email.trim();
  if (!trimmed) {
    return 'Email is required';
  }
  
  // Basic email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(trimmed)) {
    return 'Please enter a valid email address';
  }
  
  return null;
}

export interface WhatsAppValidationResult {
  valid: boolean;
  normalized?: string;
  error?: string;
}

export function normalizeWhatsAppNumber(input: string): WhatsAppValidationResult {
  // Remove all non-digit characters
  const digitsOnly = input.replace(/\D/g, '');
  
  if (!digitsOnly) {
    return { valid: false, error: 'WhatsApp number is required' };
  }
  
  // Handle Indian formats:
  // 9876543210 (10 digits)
  // 919876543210 (12 digits with country code)
  // +919876543210 (with + prefix, already stripped)
  // 09876543210 (11 digits with leading 0)
  
  let normalized = digitsOnly;
  
  // Remove leading 0 if present (09876543210 -> 9876543210)
  if (normalized.startsWith('0') && normalized.length === 11) {
    normalized = normalized.substring(1);
  }
  
  // Remove country code if present (919876543210 -> 9876543210)
  if (normalized.startsWith('91') && normalized.length === 12) {
    normalized = normalized.substring(2);
  }
  
  // Validate final format (must be exactly 10 digits starting with 6-9)
  if (normalized.length !== 10) {
    return { valid: false, error: 'WhatsApp number must be 10 digits' };
  }
  
  if (!/^[6-9]\d{9}$/.test(normalized)) {
    return { valid: false, error: 'Please enter a valid Indian mobile number' };
  }
  
  return { valid: true, normalized };
}
