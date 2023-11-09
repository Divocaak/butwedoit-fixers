<script>
	import HeaderWrapper from '$lib/HeaderWrapper.svelte';
	import ContentWrapper from '$lib/ContentWrapper.svelte';
	import Footer from '$lib/Footer.svelte';
	import LocationCard from '$lib/fixers/LocationCard.svelte';

	// TODO add countries locations to json
	export let data;
</script>

<HeaderWrapper title={data.name} imagePath="/images/thumbnails/{data.thumbnail}" />
<ContentWrapper blackOnWhite={true}>
	<!-- TODO parallax effect over image and black -->
	<div class="text-center">
		<h2 class="unbounded display-4 my-5 pt-5 px-3">OUR SERVICES</h2>
	</div>
	<!-- <div class="gal-cont px-md-5 mx-md-5"> -->
	<div class="row">
		{#each data.services as service}
			<div class="col-3">
				<h4>{service.label}</h4>
				<ul class="ps-2">
					{#each service.values as value}
						<li class="roboto fw-light"><span>{value}</span></li>
					{/each}
				</ul>
			</div>
		{/each}
	</div>
</ContentWrapper>
<ContentWrapper>
	<div class="row m-5">
		<div class="col-6">
			<h2 class="unbounded display-4">ACCESS</h2>
			<p class="lead unbounded">ARE YOU CONSIDERING FILMING IN {data.name}</p>
			{#each data.access as access}
				<p class="fw-light roboto">{access}</p>
			{/each}
		</div>
		<div class="col-6">
			<div class="accordion" id="visaAccordion">
				{#each data.policies as policy, i}
					<div class="accordion-item">
						<h2 class="accordion-header" id="heading-{i}">
							<button
								class="accordion-button unbounded collapsed"
								type="button"
								data-bs-toggle="collapse"
								data-bs-target="#collapse-{i}"
								aria-expanded="false"
								aria-controls="collapse-{i}"
							>
								{policy.name}
							</button>
						</h2>
						<div
							id="collapse-{i}"
							class="accordion-collapse collapse"
							aria-labelledby="heading-{i}"
							data-bs-parent="#visaAccordion"
						>
							<div class="accordion-body roboto fw-light">
								{policy.text}
							</div>
						</div>
					</div>
				{/each}
			</div>
		</div>
	</div>
</ContentWrapper>
<ContentWrapper>
	<!-- TODO <img src="/images/{img}" alt={img} loading="lazy" /> -->
	<h2 class="unbounded display-4">LOCATIONS</h2>
	<div class="row">

		{#each data.locations as location}
		<LocationCard
		label={location.label}
		thumbnail={location.img}
		last="col-md-6"
		desc={location.text}
		/>
		{/each}
	</div>
	DISCOVER MORE UNIQUE LOCATIONS WITH US! HELLO@EUROPEFIXER.COM
	<Footer />
</ContentWrapper>

<style>
	.accordion-button {
		background-color: var(--yellow) !important;
	}

	.accordion-collapse {
		background-color: var(--black) !important;
		color: var(--white) !important;
	}

	.accordion-item {
		border-color: var(--black) !important;
		border-left: 1px solid var(--yellow) !important;
		border-right: 1px solid var(--yellow) !important;
	}

	.accordion-item:last-of-type {
		border-bottom: 1px solid var(--yellow) !important;
	}

	.accordion-button:focus {
		box-shadow: none !important;
		background-color: var(--white) !important;
		color: var(--black) !important;
	}

	.gal-cont {
		display: flex;
		flex-wrap: wrap;
		padding: 0 4px;
	}

	.gal-col {
		flex: 33%;
		max-width: 33%;
		padding: 0 4px;
	}

	.gal-col img {
		margin-top: 8px;
		vertical-align: middle;
		width: 100%;
	}

	@media screen and (max-width: 800px) {
		.gal-col {
			flex: 100%;
			max-width: 100%;
		}
	}

	li {
		font-size: 0.5rem;
		padding: 0;
		margin: 0;
	}

	li span {
		position: relative;
		top: 0.2rem;
		font-size: 1rem;
	}
</style>
