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

{#snippet list_item(clock: ClockData, datetime: Date)}
  <div class="flex w-full flex-col gap-y-2">
    <div class="text-lg">
      <strong>
        {petActivityDisplayName(clock.activity)}:
      </strong>
      <span class="font-light italic"
        >{formatHoursRelativeToNow(datetime)}</span>
    </div>
    <div class="flex justify-between gap-x-5">
      <ActivityClockDisplay activity={clock.activity} {datetime} />
      <button class="dsy-btn self-center" onclick={() => onClickUpdate(clock)}>
        Update
      </button>
    </div>
  </div>
{/snippet}

<div class="flex flex-col items-center gap-y-10 p-10">
  <ul class="max-lg:w-full lg:w-1/2">
    {#each data.clocks as clock}
      <li class="mb-5">
        {@render list_item(clock, new Date(clock.latest_datetime))}
      </li>
    {/each}
  </ul>
</div>

{#if page.state.updateClock}
  <UpdateClockDialog
    onclose={() => history.back()}
    clock={page.state.updateClock} />
{/if}
