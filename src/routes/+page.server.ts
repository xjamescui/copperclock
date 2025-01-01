import { readClockData, saveClockData } from '$lib/server/repo';
import { fail, redirect, type Actions } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import type { PetActivity } from '$lib/model';

export const load: PageServerLoad = async () => {
  return {
    clockData: await readClockData()
  };
};

export const actions = {
  default: async ({ request }) => {
    const data = await request.formData();
    const activity = data.get('activity') as PetActivity;
    const eventDatetime = data.get('event_datetime')?.toString();

    if (!eventDatetime) {
      return failWithMessage(422, 'Invalid date');
    }

    const clockData = await readClockData();
    const datetime = new Date(eventDatetime);

    switch (activity) {
      case 'pee':
        clockData.lastPeedDatetime = datetime;
        break;
      case 'poop':
        clockData.lastPoopedDatetime = datetime;
        break;
      case 'food':
        clockData.lastFedDatetime = datetime;
        break;
      case 'exercise':
        clockData.lastExercisedDatetime = datetime;
        break;
      default:
        return failWithMessage(422, 'Unknown activity. Is the URL correct?');
    }

    await saveClockData(clockData);
    return redirect(302, '/');
  }
} satisfies Actions;

const failWithMessage = (status: number, message: string) =>
  fail(status, { errorMsg: message });
