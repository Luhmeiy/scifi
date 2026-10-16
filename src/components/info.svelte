<script lang="ts">
	let { toggleOpen }: { toggleOpen: () => void } = $props();
</script>

<div
	class="absolute top-2 right-2 z-10 flex min-w-80 flex-col gap-1 border-2 border-red-700 bg-black px-8 py-4"
>
	<span class="font-mono text-sm tracking-wider text-zinc-500 uppercase">Info Category</span>

	<h1 class="text-2xl font-bold">Info Title</h1>
	<p>Info body</p>

	<button
		class="absolute top-1 right-3 cursor-pointer font-mono font-bold text-zinc-500 duration-300 hover:text-zinc-100"
		onclick={toggleOpen}>x</button
	>
</div>
