import { validateEmail, validatePassword } from './utils';
import { describe, test, expect } from 'vitest';

describe('validateEmail', () => {
  test('should return valid: false and error: "Email is required" when email is empty', () => {
    const result = validateEmail('');
    expect(result).toEqual({ valid: false, error: 'Email is required' });
  });

  test('should return valid: false and error: "Invalid email format" when email is invalid', () => {
    const result = validateEmail('invalid-email');
    expect(result).toEqual({ valid: false, error: 'Invalid email format' });
  });

  test('should return valid: true when email is valid', () => {
    const result = validateEmail('test@example.com');
    expect(result).toEqual({ valid: true });
  });
});

describe('validatePassword', () => {
  test('should return valid: false and error: "Password is required" when password is empty', () => {
    const result = validatePassword('');
    expect(result).toEqual({ valid: false, error: 'Password is required' });
  });

  test('should return valid: true when password is valid', () => {
    const result = validatePassword('password');
    expect(result).toEqual({ valid: true });
  });
});
