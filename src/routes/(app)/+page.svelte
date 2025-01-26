<script lang="ts">
  import { pushState } from '$app/navigation';
  import { page } from '$app/state';
  import ActivityClockDisplay from '$lib/components/ActivityClockDisplay.svelte';
  import UpdateClockDialog from '$lib/components/dialogs/UpdateClockDialog.svelte';
  import { formatHoursRelativeToNow } from '$lib/datetime';
  import { petActivityDisplayName, type ClockData } from '$lib/model';
  import type { PageData } from './$types';
  const { data }: { data: PageData } = $props();

  const onClickUpdate = (clock: ClockData) => {
    pushState('', {
      updateClock: clock
    });
  };
</script>

{#snippet list_item(clock: ClockData, datetime?: Date)}
  <div class="flex w-full flex-col gap-y-2">
    <div class="text-lg">
      <strong>
        {petActivityDisplayName(clock.activity)}
      </strong>
      <span class="font-light italic"
        >{datetime ? formatHoursRelativeToNow(datetime) : ''}</span>
    </div>
    <div class="flex justify-between gap-x-5 rounded bg-neutral pr-5">
      <ActivityClockDisplay activity={clock.activity} {datetime} />
      <button
        class="dsy-btn dsy-btn-primary self-center"
        onclick={() => onClickUpdate(clock)}>
        Update
      </button>
    </div>
    {#if !!clock.email}
      <p class="text-sm text-gray-500">
        Updated by: {clock.email}
      </p>
    {/if}
  </div>
{/snippet}

<div class="flex flex-col items-center gap-y-10 px-10 py-5">
  <ul class="max-lg:w-full lg:w-1/2">
    {#each data.clocks as clock}
      <li class="mb-5">
        {@render list_item(
          clock,
          clock.latest_datetime ? new Date(clock.latest_datetime) : undefined
        )}
      </li>
    {/each}
  </ul>
</div>

{#if page.state.updateClock}
  <UpdateClockDialog
    onclose={() => history.back()}
    clock={page.state.updateClock} />
{/if}
