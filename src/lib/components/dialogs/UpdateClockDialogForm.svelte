<script lang="ts">
  import { page } from '$app/state';
  import {
    iconForPetActivity,
    petActivityDisplayName,
    type PetActivity
  } from '$lib/model';
  import { format } from 'date-fns';

  const {
    activity,
    oncancel
  }: { activity: PetActivity; oncancel: () => void } = $props();

  const activityName = petActivityDisplayName(activity);
  const nowValue = format(new Date(), 'yyyy-MM-dd HH:mm');
</script>

<form method="POST">
  <article>
    <p>
      Please record a new time for <strong>{activityName}</strong>
      {iconForPetActivity(activity)}:
    </p>
    {#if !!page.form?.errorMsg}
      <p class="rounded border border-red-300 bg-red-100 p-2 text-red-500">
        Error: {page.form.errorMsg}
      </p>
    {/if}
    <input hidden name="activity" value={activity} />
    <input
      type="datetime-local"
      name="event_datetime"
      max={nowValue}
      value={nowValue} />
    <footer>
      <input type="submit" value="Update" />
      <input
        type="button"
        class="outline"
        onclick={() => oncancel()}
        value="Cancel" />
    </footer>
  </article>
</form>
