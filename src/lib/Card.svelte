<script>
	import { goto } from '$app/navigation';
	import LazyImage from './LazyImage.svelte';
	export let last = '';
	export let label = '';
	export let thumbnail = '';
	export let desc = '';
	export let id = '';
	export let noClick = false;

	function resolveClick() {
		if (!noClick) goto('/detail/' + id);
	}
</script>

<div
	class="{last} col-12 p-0"
	tabindex="0"
	role="button"
	on:click={resolveClick}
	on:keypress={resolveClick}
>
	<div class="card-background" class:cursor-default={noClick}>
		<!-- style="background-image: url('{thumbnail}');" -->
		<LazyImage path={thumbnail} />
		<div class="card-content-holder d-flex align-items-center w-100">
			<div class="text-center w-100">
				<h3 class="unbounded">{label}</h3>
				<p class="roboto px-5">{desc}</p>
			</div>
		</div>
	</div>
</div>

<style>
	.card-background {
		background-size: cover;
		background-position: center;
		background-repeat: no-repeat;
		cursor: pointer;
		pointer-events: auto;
		color: var(--black);
		position: relative;
		width: 100%;
		height: 50vh;
	}

	.cursor-default {
		cursor: default;
	}

	.card-content-holder {
		pointer-events: none;
		position: relative;
		height: 50vh;
		background: rgba(0, 0, 0, 0.4);
		transition: all 0.5s;
		z-index: 2;
	}

	/* Media query for screens smaller than 768px (e.g., smartphones) */
	@media screen and (max-width: 767px) {
		.card-content-holder,
		.card-background {
			height: 30vh;
		}
	}
	/* Media query for screens between 768px and 991px (e.g., tablets) */
	@media screen and (min-width: 768px) and (max-width: 1080px) {
		.card-content-holder,
		.card-background {
			height: 20vh;
		}
	}

	.card-content-holder h3 {
		position: absolute;
		width: 100%;
		top: 45%;
		color: var(--white);
		transition: top 0.3s, color 0.5s;
	}

	.card-content-holder p {
		position: absolute;
		width: 100%;
		top: 45%;
		opacity: 0;
		color: var(--black);
		transition: all 0.5s;
	}

	@media screen and (min-width: 767px) {
		.card-background:hover .card-content-holder {
			background-color: var(--yellow);
			opacity: 0.9;
		}

		.card-background:hover .card-content-holder h3 {
			color: var(--black);
			top: 35%;
		}

		.card-background:hover .card-content-holder p {
			opacity: 1;
		}
	}
</style>
