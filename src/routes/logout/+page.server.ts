import { supabase } from '$lib/server/supabase';
import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from '../$types';

export const load: PageServerLoad = async () => {
  await supabase.auth.signOut();
  redirect(302, '/login');
};
