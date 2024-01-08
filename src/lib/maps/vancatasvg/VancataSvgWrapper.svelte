<script>
	export let top = 0;
	export let left = 0;
	export let label;
	export let labelLine = null;
	export let labelTop = 0;
	export let labelLeft = 0;
	export let labelInverted = false;
	export let text = '';
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
	<div class="label unbounded" class:labelInverted style="top:{labelTop}px; left:{labelLeft}px;">
		<p>
			{label}{#if labelLine}
				<br />{labelLine}
			{/if}
		</p>
	</div>
	<div class="info-box" style="top:{labelTop + 2}px; left:{labelLeft - 1}px;"><p>{text}</p></div>
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
		stroke-width: 0.2rem;
	}

	.country:hover ~ .label {
		opacity: 1;
	}

	.label {
		position: absolute;
		font-size: 0.1rem;
		z-index: 8;
		pointer-events: none;
		color: var(--black);
		opacity: 0;
		font-size: 0.08rem;
		transition: all 0.35s ease-in-out;
	}

	.labelInverted {
		color: var(--white);
	}

    .country:hover ~ .info-box{
        opacity: 1;
    }

	.info-box {
		position: absolute;
        font-size: .1rem;
		max-width: 40px;
		width: max-content;
		height: auto;
		background-color: red;
		z-index: 8;
		pointer-events: none;
        opacity: 0;
        transition: all .3s ease-in-out;
	}
</style>
