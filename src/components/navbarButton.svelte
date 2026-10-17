<script lang="ts">
	let { title, onClick }: { title: string; onClick: () => void } = $props();
</script>

<button
	class="cursor-pointer border-r-2 px-4 py-2 transition-all duration-200 hover:font-bold"
	onclick={onClick}
>
	{title}
</button>
