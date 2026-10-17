<script lang="ts">
	import { generateGalaxy } from '#lib/generate.ts';
	import Info from '../components/info.svelte';
	import Map from '../components/map.svelte';

	const { map, locations } = generateGalaxy();

	let openId = $state<string | undefined>(undefined);
</script>

<Map {map} {locations} bind:openId />

{#if openId}
	<Info location={locations.find((l) => l.id === openId)!} onClose={() => (openId = undefined)} />
{/if}
