<script>
	export let top = 0;
	export let left = 0;
    export let label;
	export let labelTop = 0;
	export let labelLeft = 0;
</script>

<div>
	<svg
		xmlns="http://www.w3.org/2000/svg"
		class="country"
		style="top:{top}px; left:{left}px;"
		width="100"
		height="100"
		viewBox="0 0 6000 4000"
	>
		<slot />
	</svg>
	<p class="label unbounded" style="top:{labelTop}px; left:{labelLeft}px;">{label}</p>
</div>

<style>
	.country {
		position: absolute;
		transform: scale(1);
		display: block;
		padding: 0;
		margin: 0;

		fill: var(--grey);
		stroke: #767676;
		stroke-width: 0.1rem;
		stroke-linejoin: arcs;
		z-index: 7;
		pointer-events: none;

		transition: all 0.2s ease-in-out;
	}

	:global(.country > path, .country > polygon) {
		pointer-events: all;
	}

	.country:hover {
		fill: var(--yellow);
        stroke: var(--yellow);
        stroke-width: .2rem;
	}

    .label{
        position: absolute;
        top: 10px;
        left: 0px;
        font-size: .1rem;
        z-index: 8;
    }
</style>
