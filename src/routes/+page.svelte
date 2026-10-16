<script lang="ts">
	import { generateGalaxy } from '#lib/generate.ts';
	import Block from '../components/block.svelte';
	import Info from '../components/info.svelte';

	const { map, locations } = generateGalaxy();

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
