<script lang="ts">
	import { generateGalaxy } from '#lib/generate.ts';
	import { sidebarOpen } from '#lib/sidebar.ts';
	import Info from '../components/info.svelte';
	import Map from '../components/map.svelte';

	const { map, locations } = generateGalaxy();

	let openId = $state<string | undefined>(undefined);
</script>

<div class="flex flex-1 gap-3">
	<Map {map} {locations} bind:openId />

	{#if $sidebarOpen}
		<Info location={locations.find((l) => l.id === openId)!} />
	{/if}
</div>
