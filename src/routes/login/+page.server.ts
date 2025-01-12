import { getCurrentUser } from '$lib/server/auth';
import { failWithMessage } from '$lib/server/utils';
import { supabase } from '$lib/server/supabase';
import { redirect, type Actions } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
  const user = await getCurrentUser();
  if (user) {
    throw redirect(302, '/');
  }
};

export const actions: Actions = {
  default: async ({ request }) => {
    const formData = await request.formData();
    const email = formData.get('email')?.toString();
    const password = formData.get('password')?.toString();

    if (!email || !password) {
      return failWithMessage(400, 'Invalid email or password');
    }

    const { error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password
    });

    if (error) {
      return failWithMessage(400, error.message);
    }

    return redirect(302, '/');
  }
};
