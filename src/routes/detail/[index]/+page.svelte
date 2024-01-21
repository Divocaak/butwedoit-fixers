<script>
	import HeaderWrapper from '$lib/HeaderWrapper.svelte';
	import ContentWrapper from '$lib/ContentWrapper.svelte';
	import Footer from '$lib/Footer.svelte';
	import Card from '$lib/Card.svelte';
	import AccessMap from '$lib/maps/AccessMap.svelte';
	import VisaMap from '$lib/maps/VisaMap.svelte';
	import { onMount } from 'svelte';

	export let data;
	const countryData = data.countryData;

	const visaPolicyTranslations = {
		usa: 'USA',
		can: 'CANADA',
		mex: 'MEXICO',
		aus: 'AUSTRALIA',
		ind: 'INDIA',
		rus: 'RUSSIA',
		uk: 'UNITED KINGDOM',
		afr: 'AFRICA',
		sam: 'SOUTH AMERICA',
		mea: 'MIDDLE EAST',
		asi: 'ASIA',
		jap: 'JAPAN',
		eur: 'EUROPE'
	};

	let screenWidth = 0;

	onMount(() => {
		screenWidth = window.innerWidth;

		const updateScreenWidth = () => {
			screenWidth = window.innerWidth;
		};

		window.addEventListener('resize', updateScreenWidth);

		return () => {
			window.removeEventListener('resize', updateScreenWidth);
		};
	});
</script>

<svelte:head>
	<title>{countryData.name}, EUROPE FIXERS</title>
</svelte:head>

<HeaderWrapper
	title={countryData.name}
	isCountry={true}
	imagePath="/countries/{countryData.thumbnail}"
	iconName={countryData.locationParent}
/>
<ContentWrapper blackOnWhite={true}>
	<div class="text-center">
		<h2 class="unbounded display-4 my-5 pt-5 px-3">OUR SERVICES</h2>
	</div>
	<div class="row px-3 px-md-0">
		{#each countryData.services as service}
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
		{#if screenWidth >= 1150}
			<div class="col-md-6 col-12">
				<h2 class="unbounded display-4">ACCESS</h2>
				<p class="lead unbounded">ARE YOU CONSIDERING FILMING IN {countryData.name}</p>
				{#each countryData.access as access}
					<p class="fw-light roboto">{access}</p>
				{/each}
			</div>
			<div class="col-md-6 col-12">
				<AccessMap selectedId={data.id} />
			</div>
		{:else}
			<div class="col-12" style="position: relative; z-index:10; background: var(--black);">
				<h2 class="unbounded display-4">ACCESS</h2>
				<p class="lead unbounded">ARE YOU CONSIDERING FILMING IN {countryData.name}</p>
				{#each countryData.access as access}
					<p class="fw-light roboto">{access}</p>
				{/each}
			</div>
			{#if screenWidth >= 550}
				<div class="col-12 map-parent-small">
					<AccessMap selectedId={data.id} />
				</div>
			{/if}
		{/if}
	</div>
</ContentWrapper>
<ContentWrapper>
	<div>
		<h2 class="unbounded display-4 ps-3 ps-md-0">ACCESS</h2>
		{#if screenWidth >= 1150}
			<VisaMap texts={countryData.policies} />
		{:else}
			<div class="accordion p-3" id="visaAccordion">
				{#each Object.entries(countryData.policies) as [key, value], i}
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
								{visaPolicyTranslations[key]}
							</button>
						</h2>
						<div
							id="collapse-{i}"
							class="accordion-collapse collapse"
							aria-labelledby="heading-{i}"
							data-bs-parent="#visaAccordion"
						>
							<div class="accordion-body roboto fw-light">
								{value}
							</div>
						</div>
					</div>
				{/each}
			</div>
		{/if}
		<div class="row px-3 px-md-0 pt-5">
			<div class="col-md-6 col-12">
				<p class="fw-light roboto">{countryData.visa[0]}</p>
			</div>
			<div class="col-md-6 col-12">
				<p class="fw-light roboto">{countryData.visa[1]}</p>
				<p class="fw-light roboto">{countryData.visa[2]}</p>
			</div>
		</div>
	</div>
</ContentWrapper>
<ContentWrapper noPadding={true}>
	<h2 class="unbounded display-4 ps-5">LOCATIONS</h2>
	<div class="row">
		{#each countryData.locations as location, i}
			<Card
				label={location.label}
				thumbnail={`/locations/${countryData.locationParent}/${location.img}.jpg`}
				last={i == countryData.locations.length - 1 ? '' : 'col-md-6'}
				desc={location.text}
				noClick={true}
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
	.map-parent-small {
		min-height: 600px;
	}

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
