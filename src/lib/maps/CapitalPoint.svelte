<script>
	export let title, top, left, canvasFunction;
	export let hidden = false;

	let element;
</script>

<!-- TODO warning -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div class="capital-wrapper" style="top:{top - 119}px; left:{left - 100}px" class:hidden>
	<p class="unbounded capital-title">{title}</p>
	<div class="point" bind:this={element} on:mouseup={() => canvasFunction(element)} />
</div>

<style>
	.capital-wrapper {
		position: absolute;
		width: fit-content;
		pointer-events: none;
	}

	.point {
		position: relative;
		left: 50%;
		width: 5px;
		height: 5px;
		border-radius: 50%;
		background-color: var(--yellow);
		-webkit-box-shadow: 0px 0px 0px 2.5px rgba(249, 210, 4, 0.5);
		-moz-box-shadow: 0px 0px 0px 2.5px rgba(249, 210, 4, 0.5);
		box-shadow: 0px 0px 0px 2.5px rgba(249, 210, 4, 0.5);
		z-index: 2;
		pointer-events: all;
	}

	.capital-title {
		position: relative;
		opacity: 0;
		z-index: 2;
		top: 0px;
		pointer-events: none;
		transition: all 0.15s ease-in-out;
		font-size: 0.75rem;
	}

	.capital-wrapper:hover .capital-title {
		opacity: 1;
		top: 10px;
	}

	.hidden {
		opacity: 0 !important;
		pointer-events: none !important;
	}
</style>
