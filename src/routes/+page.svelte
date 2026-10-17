<script lang="ts">
	import { generateGalaxy } from '#lib/generate.ts';
	import Block from '../components/block.svelte';
	import Info from '../components/info.svelte';

	const { map, locations } = generateGalaxy();

	const locationMap = new Map(locations.map((l) => [`${l.position.x},${l.position.y}`, l]));

	let openId = $state<string | undefined>(undefined);
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

		{#if openId}
			<Info
				location={locations.find((l) => l.id === openId)!}
				onClose={() => (openId = undefined)}
			/>
		{/if}
	</div>
</div>
