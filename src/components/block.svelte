<script lang="ts">
	import Info from './info.svelte';

	let isOpen = $state(false);

	const toggleOpen = () => (isOpen = !isOpen);
</script>

<button
	class="h-6 w-6 duration-200 hover:border-2"
	class:border-2={isOpen}
	class:border-red-500={isOpen}
	onclick={toggleOpen}
	aria-label="block"
></button>

{#if isOpen}
	<Info {toggleOpen} />
{/if}
