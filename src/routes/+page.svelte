<script>
	import HeaderWrapper from '$lib/HeaderWrapper.svelte';
	import ContentWrapper from '$lib/ContentWrapper.svelte';
	import Footer from '$lib/Footer.svelte';
	import ActivityBox from '$lib//ActivityBox.svelte';
	import Card from '$lib/Card.svelte';
	import HomeMap from '$lib/maps/HomeMap.svelte';
	import FramedButton from '$lib/FramedButton.svelte';
</script>

<svelte:head>
	<title>EUROPE FIXERS</title>
</svelte:head>

<HeaderWrapper hideMedia={true}>
	<HomeMap />
	<div class="map-overlay-container mx-0 mx-md-3">
		<h2 class="display-4 unbounded">CENTRAL EU</h2>
		<h1 class="display-1 unbounded fw-bold pt-0 pt-md-3 pb-4">LOCAL<br />FIXER</h1>
		<FramedButton hideOnSm={true} href="#info"
			>FIND OUT
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="32"
				height="16"
				fill="currentColor"
				class="bi bi-arrow-right ms-2"
				viewBox="0 4 16 8"
			>
				<path
					fill-rule="evenodd"
					d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
				/>
			</svg></FramedButton
		>
	</div>
	<div class="powered-by-container d-none d-md-inline">
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
			desc="Nestled in the heart of Europe, with a rich history and diverse landscape, filming locations are easily accessible due to their central location. Cities showcase well-preserved historical sites, UNESCO-listed castles, and modern architecture."
			id="0"
		/>
		<Card
			label="SLOVAKIA"
			thumbnail="sk.jpg"
			last="col-md-6"
			desc="Presents a rich variety of filming locations, Slovakia features the breathtaking High Tatras, medieval castles, quaint villages, and modern urban areas. The country's diverse landscapes, including rolling hills, pristine lakes, and dense forests, offer filmmakers a range of options for their creative vision."
			id="1"
		/>
		<Card
			label="AUSTRIA"
			thumbnail="au.jpg"
			last="col-md-6"
			desc="Unfolds a spectacular array of film locations to productions of all scales. The dramatic allure of its mountain peaks and alpine forests sets the stage for breathtaking scenes, while serene lakes and captivating cityscapes add to the diversity of options. Vienna, the capital, stands out as a filmmaker's dream, combining classic baroque architecture with modern design and a unique cultural blend."
			id="2"
		/>
		<Card
			label="HUNGARY"
			thumbnail="hu.jpg"
			last="col-md-6"
			desc="We're currently in progress and gearing up to open our new office soon. Please contact us directly if you need a fixer in Hungary."
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
	<Footer />
</ContentWrapper>

<style>
	.grid-container {
		display: grid;
		grid-template-columns: repeat(4, minmax(15rem, 1fr));
		gap: 1rem;
	}

	.map-overlay-container {
		position: absolute;
		z-index: 2;
		color: var(--white);
		top: 200px;
		pointer-events: none;
	}

	.powered-by-container {
		position: absolute;
		z-index: 2;
		color: var(--white);
		top: 110px;
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

	/* Media query for screens smaller than 768px (e.g., smartphones) */
	@media screen and (max-width: 767px) {
		.grid-container {
			grid-template-columns: repeat(1, 1fr);
		}

		.map-overlay-container {
			top: 150px;
		}
	}

	/* Media query for screens between 768px and 991px (e.g., tablets) */
	@media screen and (min-width: 768px) and (max-width: 991px) {
		.grid-container {
			grid-template-columns: repeat(2, 1fr);
		}
	}
</style>
