<script>
	export let last, label, thumbnail, desc, thumbnailFolder;
</script>

<div class="{last} col-12 p-0">
	<div
		class="card-background"
		style="background-image: url('/locations/{thumbnailFolder}/{thumbnail}.jpg');"
	>
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
		pointer-events: auto;
		color: var(--black);
	}

	.card-content-holder {
		pointer-events: none;
		position: relative;
		height: 50vh;
		background-color: rgba(0, 0, 0, 0.4);
		transition: all 0.5s;
	}

	@media screen and (max-width: 767px) {
		.card-content-holder,
		.card-background {
			height: 30vh;
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
