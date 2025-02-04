export const validateEmail = (
  text: string
): { valid: boolean; error?: string } => {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!text) {
    return { valid: false, error: 'Email is required' };
  }
  if (!emailPattern.test(text)) {
    return { valid: false, error: 'Invalid email format' };
  }
  return { valid: true };
};

export const validatePassword = (
  text: string
): { valid: boolean; error?: string } => {
  if (!text) {
    return { valid: false, error: 'Password is required' };
  }
  return { valid: true };
};
