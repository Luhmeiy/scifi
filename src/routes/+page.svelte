<script>
	import Block from '../components/block.svelte';
</script>

<div class="flex flex-row flex-wrap">
	{#each { length: 8000 }}
		<Block />
	{/each}
</div>
