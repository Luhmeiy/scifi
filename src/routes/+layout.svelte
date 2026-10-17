<script lang="ts">
	import './layout.css';
	import favicon from '#lib/assets/favicon.svg';
	import type { LayoutProps } from './$types';
	import Navbar from '../components/navbar.svelte';

	let { children }: LayoutProps = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<div
	class="flex min-h-dvh w-fit min-w-dvw flex-col gap-3 bg-zinc-950 p-3 text-zinc-100 transition-all"
>
	<Navbar />

	{@render children()}
</div>
