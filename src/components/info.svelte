<script lang="ts">
	import { deleteLocation, updateLocation } from '#lib/galaxy.ts';
	import { LOCATION_TYPES, type Location, type LocationType } from '../interfaces/location';

	let { location }: { location: Location } = $props();
	let { name, details, type } = $derived(location);

	let editMode = $state(false);
	let editName = $state('');
	let editDetails = $state('');
	let editType = $state<LocationType>('star');

	const onDelete = () => deleteLocation(location.id);

	const onEdit = () => {
		if (!location) return;
		if (!editMode) {
			editName = location.name;
			editDetails = location.details;
			editType = location.type;
		}
		editMode = !editMode;
	};

	const cycleType = () => {
		editType = LOCATION_TYPES[(LOCATION_TYPES.indexOf(editType) + 1) % LOCATION_TYPES.length];
	};

	const isTargetInput = (e: KeyboardEvent) => {
		const target = e.target as HTMLElement | null;
		if (
			target instanceof HTMLInputElement ||
			target instanceof HTMLTextAreaElement ||
			target?.isContentEditable
		) {
			return true;
		}
	};

	const onKeyDown = (e: KeyboardEvent) => {
		switch (e.key) {
			case 'd':
				if (location && !isTargetInput(e)) onDelete();
				break;
			case 'e':
				if (location && !isTargetInput(e)) onEdit();
				break;
			case 'Escape':
				if (editMode) editMode = false;
				break;
			case 'Enter':
				if (editMode && location) {
					updateLocation(location.id, {
						name: editName,
						details: editDetails,
						type: editType
					});
					editMode = false;
				}
				break;
		}
	};
</script>

<div class="relative flex min-w-80 flex-col gap-1 border-2 border-red-700 bg-black p-3">
	<p class="mb-1 font-bold text-red-700">
		LOCATION INFO

		{#if editMode}
			<span class="text-green-700">[EDITING]</span>
		{/if}
	</p>

	<hr class="border text-red-700" />

	{#if location}
		{#if editMode}
			<button
				class="w-fit cursor-pointer border-b border-dashed border-zinc-700 font-mono text-sm tracking-wider text-zinc-500 uppercase duration-200 hover:border-red-500 hover:text-red-500"
				onclick={cycleType}
			>
				{editType}
			</button>

			<input
				class="w-full border-b border-dashed border-zinc-700 bg-transparent font-mono
         focus:border-red-500 focus:outline-none"
				bind:value={editName}
			/>

			<input
				class="w-full border-b border-dashed border-zinc-700 bg-transparent font-mono
         focus:border-red-500 focus:outline-none"
				bind:value={editDetails}
			/>
		{:else}
			<div class="mb-3">
				<span class="font-mono text-sm tracking-wider text-zinc-500 uppercase">{type}</span>
				<h1 class="text-2xl leading-none font-bold">{name}</h1>
			</div>

			<hr />

			<p>{details}</p>
		{/if}

		<div class="flex flex-1 items-end gap-3">
			<button
				class="flex-1 cursor-pointer border-2 border-yellow-600 px-3 py-2 font-bold text-yellow-600 duration-200 hover:border-yellow-500 hover:text-yellow-500"
				onclick={onEdit}
			>
				[E] Edit
			</button>

			<button
				class="flex-1 cursor-pointer border-2 border-red-700 px-3 py-2 font-bold text-red-700 duration-200 hover:border-red-500 hover:text-red-500"
				onclick={onDelete}
			>
				[D] Delete
			</button>
		</div>
	{:else}
		<span class="font-mono text-sm tracking-wider text-zinc-500 uppercase">
			Select location to start
		</span>
	{/if}
</div>

<svelte:window on:keydown={onKeyDown} />
