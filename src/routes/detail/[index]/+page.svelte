<script>
	import HeaderWrapper from '$lib/HeaderWrapper.svelte';
	import ContentWrapper from '$lib/ContentWrapper.svelte';
	import Footer from '$lib/Footer.svelte';
	import LocationCard from '$lib/LocationCard.svelte';

	export let data;
</script>

<svelte:head>
	<title>{data.name}, EUROPE FIXERS</title>
</svelte:head>

<HeaderWrapper title={data.name} imagePath="/countries/{data.thumbnail}" />
<ContentWrapper blackOnWhite={true}>
	<div class="text-center">
		<h2 class="unbounded display-4 my-5 pt-5 px-3">OUR SERVICES</h2>
	</div>
	<div class="row px-3 px-md-0">
		{#each data.services as service}
			<div class="col-md-3 col-6">
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
	<div class="row px-3 px-md-0 mt-5">
		<div class="col-md-6 col-12">
			<h2 class="unbounded display-4">ACCESS</h2>
			<p class="lead unbounded">ARE YOU CONSIDERING FILMING IN {data.name}</p>
			{#each data.access as access}
				<p class="fw-light roboto">{access}</p>
			{/each}
		</div>
		<div class="col-md-6 col-12">
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
	<h2 class="unbounded display-4">LOCATIONS</h2>
	<div class="row px-3 px-md-0">
		{#each data.locations as location}
			<LocationCard
				label={location.label}
				thumbnail={location.img}
				last="col-md-6"
				desc={location.text}
			/>
		{/each}
	</div>
	<p class="text-center unbounded lead py-5">
		DISCOVER MORE UNIQUE LOCATIONS WITH US! <a
			class="email-href-subtle"
			href="mailto:hello@europefixer.cz">HELLO@EUROPEFIXER.COM</a
		>
	</p>
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

	.email-href-subtle {
		color: var(--yellow);
		text-decoration: none;
		transition: all 0.2s ease-in-out;
	}

	.email-href-subtle:hover {
		font-size: 1.4rem;
	}
</style>
