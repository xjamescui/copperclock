<script lang="ts">
  import { format } from 'date-fns';
  import { iconForPetActivity, type PetActivity } from '../model';

  const {
    activity,
    datetime
  }: { activity?: PetActivity | null; datetime?: Date | string } = $props();

  const icon = iconForPetActivity(activity);
  const title = datetime ? format(datetime, 'hh:mm a') : '--:--';
  const subtitle = datetime ? format(datetime, 'MM/dd/yyyy') : 'MM/dd/yyyy';
</script>

<div class="rounded bg-neutral px-3 py-2 text-white">
  <div class="flex items-center gap-x-2">
    <span class="text-5xl">{icon}</span>
    <div class="flex flex-col items-center">
      <div class="text-2xl">{title}</div>
      <div class="text-lg text-gray-400">
        {subtitle}
      </div>
    </div>
  </div>
</div>
