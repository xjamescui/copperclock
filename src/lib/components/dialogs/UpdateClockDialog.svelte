<script lang="ts">
  import { page } from '$app/state';
  import {
    iconForPetActivity,
    petActivityDisplayName,
    type ClockData
  } from '$lib/model';
  import { format } from 'date-fns';
  import type { EventHandler } from 'svelte/elements';

  let dialog: HTMLDialogElement;
  const {
    clock,
    onclose
  }: {
    clock: ClockData;
    onclose?: EventHandler<Event, HTMLDialogElement>;
  } = $props();

  const open = $state(true);
  const activityName = petActivityDisplayName(clock.activity);
  const nowValue = format(new Date(), 'yyyy-MM-dd HH:mm');

  const onCancel = () => {
    dialog.close();
  };
</script>

<dialog
  bind:this={dialog}
  class="dsy-modal"
  class:dsy-modal-open={open}
  {open}
  {onclose}>
  <div class="dsy-modal-box">
    <form method="POST">
      <article class="flex flex-col gap-y-5">
        <p>
          Please record a new time for <strong>{activityName}</strong>
          {iconForPetActivity(clock.activity)}:
        </p>
        {#if !!page.form?.errorMsg}
          <p class="rounded border border-red-300 bg-red-100 p-2 text-red-500">
            Error: {page.form.errorMsg}
          </p>
        {/if}
        <input hidden name="clockId" value={clock.id} />
        <input
          type="datetime-local"
          class="dsy-input dsy-input-bordered"
          name="eventDatetime"
          max={nowValue}
          value={nowValue} />
        <footer class="flex justify-end gap-x-5">
          <input
            type="button"
            class="dsy-btn"
            onclick={() => onCancel()}
            value="Cancel" />
          <input type="submit" class="dsy-btn dsy-btn-primary" value="Update" />
        </footer>
      </article>
    </form>
  </div>
</dialog>
