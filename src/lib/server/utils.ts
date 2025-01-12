import { fail } from '@sveltejs/kit';

export const failWithMessage = (status: number, message: string) =>
  fail(status, { errorMsg: message });
