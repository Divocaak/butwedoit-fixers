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
	import VancataSvgWrapper from '$lib/maps/vancatasvg/VancataSvgWrapper.svelte';

	/* TODO cleanup to separate js file (redundant as its the same as HomeMap) */
	import { onMount } from 'svelte';

	export let texts = {};

	let mapParent;
	let mapContainer;

	function transformMap() {
		// ::before = center
		const mapParentBefore = window.getComputedStyle(mapParent, ':before');
		// ::after = end of visible part
		const mapParentAfter = window.getComputedStyle(mapParent, ':after');

		const mapContainerBefore = window.getComputedStyle(mapContainer, ':before');
		const mapContainerAfter = window.getComputedStyle(mapContainer, ':after');

		const mapParentBeforeLeft = parseFloat(mapParentBefore.left);
		const mapContainerBeforeLeft = parseFloat(mapContainerBefore.left);
		const mapParentAfterLeft = parseFloat(mapParentAfter.left);
		const mapContainerAfterLeft = parseFloat(mapContainerAfter.left);

		const mapParentBeforeTop = parseFloat(mapParentBefore.top);
		const mapContainerBeforeTop = parseFloat(mapContainerBefore.top);

		const mapParentWidth = mapParentAfterLeft - mapParentBeforeLeft;
		const mapContainerWidth = mapContainerAfterLeft - mapContainerBeforeLeft;
		const scale = mapParentWidth / mapContainerWidth;

		const xOffset = mapParentBeforeLeft - mapContainerBeforeLeft;
		const yOffset = mapParentBeforeTop - mapContainerBeforeTop;

		mapContainer.style.transform = `scale(${scale}) translate(${xOffset}px, ${yOffset}px)`;
	}

	onMount(() => {
		transformMap();
		window.addEventListener('resize', debounce(transformMap, 200, false), false);
		return () => {
			window.removeEventListener('resize', transformMap);
		};
	});

	function debounce(func, delay) {
		let timeoutId;

		return function () {
			const context = this;
			const args = arguments;

			clearTimeout(timeoutId);

			timeoutId = setTimeout(function () {
				func.apply(context, args);
			}, delay);
		};
	}
</script>

<div class="map-parent" bind:this={mapParent}>
	<!-- TODO choose your living area to learn about visa policy rules -->
	<div class="map-container" bind:this={mapContainer}>
		<VancataSvgWrapper label="Russia" labelTop={40} labelLeft={70} text={texts.rus}
			><Russia /></VancataSvgWrapper
		>
		<VancataSvgWrapper label="Africa" labelTop={60} labelLeft={50} text={texts.afr}
			><Africa /></VancataSvgWrapper
		>
		<VancataSvgWrapper label="Asia" labelTop={51} labelLeft={70} text={texts.asi}
			><Asia /></VancataSvgWrapper
		>
		<VancataSvgWrapper label="Australia" labelTop={69.5} labelLeft={78} text={texts.aus}
			><Australia /></VancataSvgWrapper
		>
		<VancataSvgWrapper label="Canada" labelTop={42} labelLeft={13} text={texts.can}
			><Canada /></VancataSvgWrapper
		>
		<VancataSvgWrapper label="Europe" labelTop={47.5} labelLeft={48} text={texts.eur}
			><Europe /></VancataSvgWrapper
		>
		<VancataSvgWrapper
			label="India"
			labelTop={59}
			labelLeft={68.6}
			labelInverted={true}
			text={texts.ind}><India /></VancataSvgWrapper
		>
		<VancataSvgWrapper
			label="Japan"
			labelTop={51}
			labelLeft={85}
			labelInverted={true}
			text={texts.jap}><Japan /></VancataSvgWrapper
		>
		<VancataSvgWrapper
			label="Mexico"
			labelTop={59}
			labelLeft={17}
			labelInverted={true}
			text={texts.mex}><Mexico /></VancataSvgWrapper
		>
		<VancataSvgWrapper
			label="Middle"
			labelLine="East"
			labelTop={52.8}
			labelLeft={56.6}
			text={texts.mea}><MiddleEast /></VancataSvgWrapper
		>
		<VancataSvgWrapper
			label="South"
			labelLine="America"
			labelTop={63}
			labelLeft={28}
			text={texts.sam}><SouthAmerica /></VancataSvgWrapper
		>
		<VancataSvgWrapper
			label="UK"
			labelTop={44.5}
			labelLeft={43}
			labelInverted={true}
			text={texts.uk}><UnitedKingdom /></VancataSvgWrapper
		>
		<VancataSvgWrapper label="USA" labelTop={51} labelLeft={18} text={texts.usa}
			><UnitedStates /></VancataSvgWrapper
		>
	</div>
</div>

<style>
	.map-parent {
		position: relative;
		width: 100vw;
		height: 75vh;
	}

	/* position anchor point */
	.map-parent::before {
		content: '';
		position: absolute;
		top: 50%;
		left: 50vw;
	}

	/* scale point */
	.map-parent::after {
		content: '';
		position: absolute;
		top: 50%;
		right: 5vw;
	}

	.map-container {
		position: absolute;
		width: 100%;
		height: 100%;
		transform: scale(1);
	}

	/* position anchor point */
	.map-container::before {
		content: '';
		position: absolute;
		top: 50px;
		left: 50px;
	}

	/* scale point */
	.map-container::after {
		content: '';
		position: absolute;
		top: 50px;
		left: 110px;
	}
</style>
