<script>
	import HeaderWrapper from '$lib/HeaderWrapper.svelte';
	import ContentWrapper from '$lib/ContentWrapper.svelte';
	import Footer from '$lib/Footer.svelte';

	// TODO add countries locations to json
	export let data;
</script>

<HeaderWrapper title={data.name} imagePath="/images/thumbnails/{data.thumbnail}" />
<ContentWrapper blackOnWhite={true}>
	<!-- TODO parallax effect over image and black -->
	<div class="text-center">
		<h2 class="unbounded display-4 my-5 pt-5 px-3 mx-md-5">OUR SERVICES</h2>
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
		<!-- {#each imgs as galCol}
			<div class="gal-col">
				{#each galCol as img}
					<img src="/images/{img}" alt={img} loading="lazy" />
				{/each}
			</div>
		{/each} -->
	</div>
	<Footer />
</ContentWrapper>

<style>
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

	li{
		font-size: .5rem;
		padding: 0;
		margin: 0;
	}
	
	li span{
		position: relative;
		top: .2rem;
		font-size: 1rem;

	}
</style>
