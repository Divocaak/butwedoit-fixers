<script>
	import Africa from '$lib/maps/vancatasvg/Africa.svelte';
	import Asia from '$lib/maps/vancatasvg/Asia.svelte';
	import Australia from '$lib/maps/vancatasvg/Australia.svelte';
	import Canada from '$lib/maps/vancatasvg/Canada.svelte';
	import Europe from '$lib/maps/vancatasvg/Europe.svelte';
	import India from '$lib/maps/vancatasvg/India.svelte';
	import Japan from '$lib/maps/vancatasvg/Japan.svelte';
	import Mexico from '$lib/maps/vancatasvg/Mexico.svelte';
	import MiddleEast from '$lib/maps/vancatasvg/MiddleEast.svelte';
	import Russia from '$lib/maps/vancatasvg/Russia.svelte';
	import SouthAmerica from '$lib/maps/vancatasvg/SouthAmerica.svelte';
	import UnitedKingdom from '$lib/maps/vancatasvg/UnitedKingdom.svelte';
	import UnitedStates from '$lib/maps/vancatasvg/UnitedStates.svelte';
</script>

<div class="map-parent">
	<div class="map-container">
		<Africa classes="country" />
		<Asia classes="country" />
		<Australia classes="country" />
		<Canada classes="country" />
		<Europe classes="country" />
		<India classes="country" />
		<Japan classes="country" />
		<Mexico classes="country" />
		<MiddleEast classes="country" />
		<Russia classes="country" />
		<SouthAmerica classes="country" />
		<UnitedKingdom classes="country" />
		<UnitedStates classes="country" />
	</div>
</div>

<style>
	.map-parent {
		position: relative;
		width: 100vw;
		height: 75vh;
		background-color: blue;
	}

	.map-container {
		position: absolute;
		transform: scale(10);
		/* BUG responsive */
		top: -200px;
		left: 100px;
	}

	:global(.country) {
		position: absolute;
		transform: scale(1);
		display: block;
		padding: 0;
		margin: 0;

		fill: var(--grey);
		stroke: #767676;
		stroke-width: 0.1rem;
		stroke-linejoin: arcs;
		z-index: 1;
		pointer-events: none;
	}

    /* URGENT wrap every country in div with .country class to be able to hover fx (hope so)
    same as homemap */
</style>
