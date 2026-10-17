<script lang="ts">
	import type { Location } from '../interfaces/location';
	import type { IMap } from '../interfaces/map';
	import Block from './block.svelte';

	let {
		map,
		locations,
		openId = $bindable()
	}: {
		map: IMap;
		locations: Location[];
		openId: string | undefined;
	} = $props();

	const locationMap = $derived(
		new Map(locations.map((l) => [`${l.position.x},${l.position.y}`, l]))
	);
</script>

<div class="flex flex-1 border-2">
	<div class="flex flex-col">
		<div class="h-10 w-10"></div>

		{#each { length: map.height }, y}
			<div class="mx-1 flex h-8 w-8 items-center justify-center">
				{y.toString().padStart(2, '0')}
			</div>
		{/each}
	</div>

	<div class="pr-4 pb-4">
		<div class="flex">
			{#each { length: map.width }, x}
				<div class="my-1 flex h-8 w-8 items-center justify-center">
					{x.toString().padStart(2, '0')}
				</div>
			{/each}
		</div>

		<div class="border">
			{#each { length: map.height }, y}
				<div class="flex">
					{#each { length: map.width }, x}
						<Block location={locationMap.get(`${x},${y}`)} bind:openId />
					{/each}
				</div>
			{/each}
		</div>
	</div>
</div>
