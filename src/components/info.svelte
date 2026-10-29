<script lang="ts">
	import { deleteLocation } from '#lib/galaxy.ts';
	import type { Location } from '../interfaces/location';

	let { location }: { location: Location } = $props();

	const onDelete = () => deleteLocation(location.id);

	const onKeyDown = (e: KeyboardEvent) => {
		switch (e.key) {
			case 'd':
				if (location) onDelete();
				break;
		}
	};
</script>

<div class="relative flex min-w-80 flex-col gap-1 border-2 border-red-700 bg-black p-3">
	<p class="mb-1 font-bold text-red-700">LOCATION INFO</p>

	<hr class="border text-red-700" />

	{#if location}
		<div class="mb-3">
			<span class="font-mono text-sm tracking-wider text-zinc-500 uppercase">{location?.type}</span>
			<h1 class="text-2xl leading-none font-bold">{location?.name}</h1>
		</div>

		<hr />

		<p>{location?.details}</p>

		<div class="flex flex-1 items-end">
			<button
				class="flex-1 cursor-pointer border-2 border-red-700 px-3 py-2 duration-200 hover:border-red-500 hover:font-bold"
				onclick={onDelete}
			>
				[D] Delete
			</button>
		</div>
	{:else}
		<span class="font-mono text-sm tracking-wider text-zinc-500 uppercase">
			Select location to start
		</span>
	{/if}
</div>

<svelte:window on:keydown={onKeyDown} />
