<script>
	export let title, top, left, canvasFunction;
	export let hidden = false;

	let element;

	let isHovered = false;
	let isClicked = false;

	export const resetToDefault = () => {
		isHovered = isClicked = false;
	}

	function handleMouseInOut(isMouseOver) {
		if (!isClicked) isHovered = isMouseOver;
	}

	function handleClick() {
		isClicked = !isClicked;
		isHovered = isClicked;
		canvasFunction(element);
	}
</script>

<div class="capital-wrapper" style="top:{top - 119}px; left:{left - 100}px" class:hidden>
	<p
		class="unbounded capital-title"
		style="opacity: {isHovered || isClicked ? 1 : 0}; top: {isHovered || isClicked ? '10px' : '0'}"
	>
		{title}
	</p>
	<!-- svelte-ignore a11y-mouse-events-have-key-events -->
	<div
		class="point"
		role="button"
		tabindex="0"
		bind:this={element}
		on:mouseover={() => handleMouseInOut(true)}
		on:mouseout={() => handleMouseInOut(false)}
		on:mouseup={handleClick}
	/>
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

	.hidden {
		opacity: 0 !important;
		pointer-events: none !important;
	}
</style>
