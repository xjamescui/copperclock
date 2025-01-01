<script lang="ts">
  import { pushState } from '$app/navigation';
  import { page } from '$app/state';
  import ActivityClockDisplay from '$lib/components/ActivityClockDisplay.svelte';
  import { formatHoursRelativeToNow } from '$lib/datetime';
  import { petActivityDisplayName, type PetActivity } from '$lib/model';
  import UpdateClockForm from '../lib/components/dialogs/UpdateClockDialogForm.svelte';
  import type { PageData } from './$types';
  const { data }: { data: PageData } = $props();

  let dialog: HTMLDialogElement;

  const onClickUpdate = (activity: PetActivity, _activityDate: Date) => {
    pushState('', {
      updateActivityTime: activity
    });
  };
</script>

{#snippet list_item(activity: PetActivity, date: Date)}
  <div class="flex w-full flex-col">
    <h3>
      {petActivityDisplayName(activity)}:
      <span class="font-light italic">{formatHoursRelativeToNow(date)}</span>
    </h3>
    <div class="flex justify-between gap-x-5">
      <ActivityClockDisplay {activity} datetime={date} />
      <button
        class="primary self-center"
        onclick={() => onClickUpdate(activity, date)}>
        Update
      </button>
    </div>
  </div>
{/snippet}

<div class="flex flex-col items-center gap-y-10 p-10">
  <h1>Copper Clock</h1>
  <ul class="gap-y-2 max-lg:w-full lg:w-1/2">
    <li>
      {@render list_item('food', data.clockData.lastFedDatetime)}
    </li>
    <li><hr class="w-full" /></li>
    <li>
      {@render list_item('pee', data.clockData.lastPeedDatetime)}
    </li>
    <li><hr class="w-full" /></li>
    <li>
      {@render list_item('poop', data.clockData.lastPoopedDatetime)}
    </li>
    <li><hr class="w-full" /></li>
    <li>
      {@render list_item('exercise', data.clockData.lastExercisedDatetime)}
    </li>
  </ul>
</div>

{#if page.state.updateActivityTime}
  <dialog bind:this={dialog} open onclose={() => history.back()}>
    <UpdateClockForm
      oncancel={() => dialog.close()}
      activity={page.state.updateActivityTime} />
  </dialog>
{/if}

<style lang="postcss">
  ul li {
    @apply mb-5 list-none;
  }
</style>
