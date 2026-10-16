<script lang="ts">
	import Block from '../components/block.svelte';
	import Info from '../components/info.svelte';
	import type { Location } from '../interfaces/location';

	const map = {
		height: 20,
		width: 20
	};

	const locations: Location[] = [
		{
			id: 'star1',
			name: 'Star One',
			details: 'Lorem ipsum',
			type: 'star',
			position: { x: 10, y: 10 }
		},
		{
			id: 'planet1',
			name: 'Planet One',
			details: 'Lorem ipsum',
			type: 'planet',
			position: { x: 12, y: 10 }
		}
	];

	const locationMap = new Map(locations.map((l) => [`${l.position.x},${l.position.y}`, l]));

	let openId = $state<string | undefined>(undefined);
</script>

<div class="w-fit border-2">
	{#each { length: map.height }, y}
		<div class="flex flex-row">
			{#each { length: map.width }, x}
				<Block location={locationMap.get(`${x},${y}`)} bind:openId />
			{/each}
		</div>
	{/each}

	{#if openId}
		<Info location={locations.find((l) => l.id === openId)!} onClose={() => (openId = undefined)} />
	{/if}
</div>
