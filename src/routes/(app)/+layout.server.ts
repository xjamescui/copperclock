import { getCurrentUser } from '$lib/server/auth';
import { redirect } from '@sveltejs/kit';
import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async () => {
  const currentUser = await getCurrentUser();
  if (!currentUser) {
    throw redirect(302, '/login');
  }
  return {
    currentUser: await getCurrentUser()
  };
};
