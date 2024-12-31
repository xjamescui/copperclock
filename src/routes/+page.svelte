<script lang="ts">
	const onClockItemClick = (type: 'pee' | 'poop' | 'feed') => () => {
		console.log(type);
	};

	const timeDisplayText = (date: Date) =>
		date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

	const dateDisplayText = (date: Date) => date.toLocaleDateString();
</script>

{#snippet list_item(icon: string, title: string, date: Date, onClick: () => void)}
	<div class="flex w-full flex-col gap-y-2">
		<div class="text-2xl">{title}</div>
		<div class="flex justify-between gap-x-5">
			<div class="rounded bg-black px-5 py-2 text-white max-md:text-2xl lg:text-4xl">
				<div class="flex items-center gap-x-2">
					<p class="text-5xl">{icon}</p>
					<div class="flex flex-col items-center">
						{timeDisplayText(date)}
						<div class="text-gray-400 max-md:text-lg lg:text-xl">{dateDisplayText(date)}</div>
					</div>
				</div>
			</div>
			<button
				class="self-center rounded bg-yellow-300 px-5 py-1 hover:bg-yellow-400"
				on:click={onClick}>Edit</button
			>
		</div>
	</div>
{/snippet}

<div class="flex flex-col items-center gap-y-10 p-10">
	<h1 class="text-5xl font-semibold">Copper Clock</h1>
	<ul class="gap-y-2 max-md:w-full lg:w-1/2">
		<li>{@render list_item('🧆', 'Last fed at:', new Date(), onClockItemClick('feed'))}</li>
		<li><hr class="w-full" /></li>
		<li>{@render list_item('🌊', 'Last peed at:', new Date(), onClockItemClick('pee'))}</li>
		<li><hr class="w-full" /></li>
		<li>{@render list_item('💩', 'Last pooped at:', new Date(), onClockItemClick('poop'))}</li>
	</ul>
</div>

<style lang="postcss">
	ul li {
		@apply mb-5;
	}
</style>
