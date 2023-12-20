<script>
	import HeaderWrapper from '$lib/HeaderWrapper.svelte';
	import ContentWrapper from '$lib/ContentWrapper.svelte';
	import Footer from '$lib/Footer.svelte';
	import ActivityBox from '$lib//ActivityBox.svelte';
	import Card from '$lib/Card.svelte';
	import HomeMap from '$lib/maps/HomeMap.svelte';
	import MoreButton from '$lib/MoreButton.svelte';
</script>

<svelte:head>
	<title>EUROPE FIXERS</title>
</svelte:head>

<HeaderWrapper hideMedia={true}>
	<HomeMap />
	<div class="map-overlay-container mx-5">
		<h2 class="display-4 unbounded">CENTRAL EU</h2>
		<h1 class="display-1 unbounded fw-bold pt-3 pb-4">LOCAL<br />FIXER</h1>
		<MoreButton />
	</div>
	<div class="powered-by-container">
		<p class="unbounded lead me-3">POWERED BY</p>
		<img alt="butwedoit logo" src="/logo_bwd.png" />
	</div>
</HeaderWrapper>
<ContentWrapper gradient={true}>
	<div class="row mt-5 py-5 px-3 px-md-0" id="info">
		<div class="col-md-6 col-12">
			<p class="lead fw-bold unbounded text-uppercase" style="font-size:1.9rem;">
				we can Find the perfect spots for your shoots right in the heart of Europe!
			</p>
		</div>
		<div class="col-md-6 col-12 roboto">
			<p>
				Interested? From beautiful mountain peaks, to green valleys, fairylike chateaux and castles,
				historical towns, industrial complexes or contemporary architecture, all just a quick drive
				from each other.
			</p>
			<p>
				We can help you find the right locations while securing all permits, equipment, services,
				translations and staff you might need at your shoot. Contact us and let the production
				begin!
			</p>
		</div>
	</div>
	<div class="row" id="countries">
		<Card
			label="CZECH REPUBLIC"
			thumbnail="cz.jpg"
			last="col-md-6"
			desc="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aliquam in lorem sit amet leo accumsan lacinia. Sed elit dui, pellentesque a, faucibus vel, interdum nec, diam. Etiam bibendum elit eget erat. In laoreet, magna id viverra tincidunt, sem odio bibendum justo, vel imperdiet sapien wisi sed libero."
			id="0"
		/>
		<Card
			label="SLOVAKIA"
			thumbnail="sk.jpg"
			last="col-md-6"
			desc="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aliquam in lorem sit amet leo accumsan lacinia. Sed elit dui, pellentesque a, faucibus vel, interdum nec, diam. Etiam bibendum elit eget erat. In laoreet, magna id viverra tincidunt, sem odio bibendum justo, vel imperdiet sapien wisi sed libero."
			id="1"
		/>
		<Card
			label="AUSTRIA"
			thumbnail="au.jpg"
			last="col-md-6"
			desc="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aliquam in lorem sit amet leo accumsan lacinia. Sed elit dui, pellentesque a, faucibus vel, interdum nec, diam. Etiam bibendum elit eget erat. In laoreet, magna id viverra tincidunt, sem odio bibendum justo, vel imperdiet sapien wisi sed libero."
			id="2"
		/>
		<Card
			label="HUNGARY"
			thumbnail="hu.jpg"
			last="col-md-6"
			desc="Work in progress"
			id="3"
			wip={true}
		/>
	</div>
	<h2 class="unbounded text-center display-4 mt-5 pt-5" id="offer">WHAT WE OFFER AS FIXERS</h2>
	<p class="roboto text-center py-4 fw-light">
		Local production service on Czech Republic / Slovakia / Austria & throughout Europe
	</p>
	<div class="grid-container pb-5 px-3 px-md-0">
		<ActivityBox value="HIRING HIGH QUALITY CREWS" />
		<ActivityBox value="LOCATION SCOUTING AND RESEARCH" />
		<ActivityBox value="LOCATION CLEARANCES AND RELEASES" />
		<ActivityBox value="SECURING SHOOTING PERMITS" />
		<ActivityBox value="COMMUNICATIONS WITH " />
		<ActivityBox value="LOCAL AUTHORITIES" />
		<ActivityBox value="PRODUCTION SCHEDULING, BUDGETING & LOGISTICS " />
		<ActivityBox value="STUDIOS" />
		<ActivityBox value="GEAR RENTAL" />
		<ActivityBox value="DRONE RENTAL" />
		<ActivityBox value="VEHICLE RENTAL AND INSURANCE" />
		<ActivityBox value="CATERING SERVICES" />
		<ActivityBox value="CASTING AND BOOKING" />
		<ActivityBox value="HOTEL BOOKINGS" />
		<ActivityBox value="ON SET TRANSLATION" />
		<ActivityBox value="SECURING ART DEPARTMENT, HAIR MAKEUP ETC" />
	</div>
</ContentWrapper>
<ContentWrapper blackOnWhite={true}>
	<div class="row py-5 px-3 px-md-0" id="who">
		<div class="col-md-4 col-12">
			<h2 class="unbounded">WHO WE ARE</h2>
		</div>
		<div class="col-md-8 col-12">
			<p class="roboto fw-light">
				Lorem ipsum dolor sit amet, consectetuer adipiscing elit. In convallis. Fusce aliquam
				vestibulum ipsum. Maecenas ipsum velit, consectetuer eu lobortis ut, dictum at dui. Nullam
				dapibus fermentum ipsum. Vestibulum erat nulla, ullamcorper nec, rutrum non, nonummy ac,
				erat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis
				egestas. Integer pellentesque quam vel velit. Nullam dapibus fermentum ipsum. Etiam quis
				quam. Duis condimentum augue id magna semper rutrum. Proin pede metus, vulputate nec,
				fermentum fringilla, vehicula vitae, justo. Nulla non lectus sed nisl molestie malesuada.
				Nullam sit amet magna in magna gravida vehicula. Duis condimentum augue id magna semper
				rutrum. Nulla turpis magna, cursus sit amet, suscipit a, interdum id, felis. Et harum quidem
				rerum facilis est et expedita distinctio. Etiam quis quam. Curabitur ligula sapien, pulvinar
				a vestibulum quis, facilisis vel sapien. Pellentesque ipsum.
			</p>
			<p class="roboto fw-light">
				Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos hymenaeos.
				Nam sed tellus id magna elementum tincidunt. Et harum quidem rerum facilis est et expedita
				distinctio. Aliquam erat volutpat. Curabitur ligula sapien, pulvinar a vestibulum quis,
				facilisis vel sapien. Nullam dapibus fermentum ipsum. Duis ante orci, molestie vitae
				vehicula venenatis, tincidunt ac pede. Aliquam ante. Pellentesque habitant morbi tristique
				senectus et netus et malesuada fames ac turpis egestas. Duis aute irure dolor in
				reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Class aptent
				taciti sociosqu ad litora torquent per conubia nostra, per inceptos hymenaeos. Aliquam erat
				volutpat.
			</p>
		</div>
	</div>
	<div id="contact" />
	<Footer />
</ContentWrapper>

<style>
	.grid-container {
		display: grid;
		grid-template-columns: repeat(4, minmax(15rem, 1fr));
		gap: 1rem;
	}

	/* Media query for screens smaller than 768px (e.g., smartphones) */
	@media screen and (max-width: 767px) {
		.grid-container {
			grid-template-columns: repeat(1, 1fr);
		}
	}

	/* Media query for screens between 768px and 991px (e.g., tablets) */
	@media screen and (min-width: 768px) and (max-width: 991px) {
		.grid-container {
			grid-template-columns: repeat(2, 1fr);
		}
	}

	.map-overlay-container {
		position: absolute;
		z-index: 2;
		color: var(--white);
		top: 200px;
	}

	.powered-by-container {
		position: absolute;
		z-index: 2;
		color: var(--white);
		bottom: 30px;
		right: 70px;
	}

	.powered-by-container p {
		display: inline-block;
	}

	.powered-by-container img {
		display: inline-block;
		height: 100px;
		width: auto;
	}
</style>
