<script lang="ts">
	import { sidebarOpen } from '#lib/sidebar.ts';
	import NavbarButton from './navbarButton.svelte';

	const newMap = () => console.log('New map');
	const save = () => console.log('Save');
	const load = () => console.log('Load');
	const toggleSidebar = () => sidebarOpen.update((v) => !v);

	const onKeyDown = (e: KeyboardEvent) => {
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
			case 'e':
				toggleSidebar();
				break;
		}
	};
</script>

<nav class="border-2">
	<NavbarButton title="[N] New map" onClick={newMap} />
	<NavbarButton title="[S] Save" onClick={save} />
	<NavbarButton title="[L] Load" onClick={load} />
	<NavbarButton title="[E] Toggle sidebar" onClick={toggleSidebar} />
</nav>

<svelte:window on:keydown={onKeyDown} />
