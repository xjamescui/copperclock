import { type ClockData } from '$lib/model';
import { failWithMessage } from '$lib/server/utils';
import { redirect, type Actions } from '@sveltejs/kit';
import { supabase } from '$lib/server/supabase';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
  const { data, error } = await supabase
    .from('time_record')
    .select('*')
    .order('activity', { ascending: true })
    .returns<ClockData[]>();

  if (error) {
    failWithMessage(400, error.details);
  }

  return {
    clocks: data ?? []
  };
};

export const actions = {
  default: async ({ request }) => {
    const data = await request.formData();
    const clockId = Number(data.get('clockId'));
    const datetime = data.get('eventDatetime')?.toString();

    if (!clockId) {
      return failWithMessage(400, 'Bad form: missing clock id.');
    }
    if (!datetime) {
      return failWithMessage(
        400,
        'Bad form: pleae make sure date value is valid.'
      );
    }

    const { error } = await supabase
      .from('time_record')
      .update({ latest_datetime: new Date(datetime).toISOString() })
      .eq('id', clockId);

    if (error) {
      return failWithMessage(400, error.details);
    }

    return redirect(302, '/');
  }
} satisfies Actions;
