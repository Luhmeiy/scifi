<script lang="ts">
	import { exportGalaxy } from '#lib/export.ts';
	import { galaxy, regenerateGalaxy } from '#lib/galaxy.ts';
	import { isGalaxy } from '#lib/import.ts';
	import { sidebarOpen } from '#lib/sidebar.ts';
	import NavbarButton from './navbarButton.svelte';

	let fileInput = $state<HTMLInputElement>();

	const newMap = () => regenerateGalaxy();
	const save = () => exportGalaxy($galaxy);
	const load = () => fileInput?.click();
	const toggleSidebar = () => sidebarOpen.update((v) => !v);

	const onFileChange = async (e: Event) => {
		const input = e.currentTarget as HTMLInputElement;
		const file = input.files?.[0];
		if (!file) return;

		try {
			const parsed = JSON.parse(await file.text());

			if (isGalaxy(parsed)) {
				galaxy.set(parsed);
			} else {
				throw new Error();
			}
		} catch {
			console.error('Invalid galaxy file');
		} finally {
			input.value = '';
		}
	};

	const onKeyDown = (e: KeyboardEvent) => {
		const target = e.target as HTMLElement | null;
		if (
			target instanceof HTMLInputElement ||
			target instanceof HTMLTextAreaElement ||
			target?.isContentEditable
		) {
			return;
		}

		switch (e.key) {
			case 'n':
				newMap();
				break;
			case 's':
				save();
				break;
			case 'l':
				load();
				break;
			case 't':
				toggleSidebar();
				break;
		}
	};
</script>

<nav class="border-2">
	<input
		type="file"
		accept=".json,application/json"
		hidden
		bind:this={fileInput}
		onchange={onFileChange}
	/>
	<NavbarButton title="[N] New map" onClick={newMap} />
	<NavbarButton title="[S] Save" onClick={save} />
	<NavbarButton title="[L] Load" onClick={load} />
	<NavbarButton title="[T] Toggle sidebar" onClick={toggleSidebar} />
</nav>

<svelte:window on:keydown={onKeyDown} />
