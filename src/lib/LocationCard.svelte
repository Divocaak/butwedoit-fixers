<script>
	export let last, label, thumbnail, desc, thumbnailFolder;
</script>

<div class="{last} col-12 p-0">
	<div
		class="card-background d-none d-md-flex"
		style="background-image: url('/locations/{thumbnailFolder}/{thumbnail}.jpg');"
	>
		<div class="card-content-holder d-flex align-items-center w-100">
			<div class="text-center w-100">
				<h3 class="unbounded">{label}</h3>
				<p class="roboto px-5">{desc}</p>
			</div>
		</div>
	</div>
	<div
		class="card-background card-background-small d-block d-md-none"
		style="background-image: url('/cards/{thumbnail}');"
	>
		<div class="card-content-holder-small text-center px-2">
			<h3 class="unbounded pt-1 mb-1 lh-sm" style="font-size: .6em;">{label}</h3>
			<p class="roboto pb-1 lh-sm" style="font-size: .6em;">{desc}</p>
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

	.card-background-small {
		height: 30vh;
	}

	.card-content-holder,
	.card-content-holder-small {
		pointer-events: none;
		position: relative;
		height: 50vh;
	}

	.card-content-holder-small {
		background-color: var(--yellow);
		left: 2.5%;
		max-width: 40%;
		width: max-content;
		height: auto;
	}

	.card-content-holder {
		background-color: rgba(0, 0, 0, 0.4);
		transition: all 0.5s;
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
</style>
