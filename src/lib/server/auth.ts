import type { User } from '@supabase/supabase-js';
import { supabase } from './supabase';

export const getCurrentUser = async (): Promise<User | undefined> =>
  (await supabase.auth.getSession()).data.session?.user;
