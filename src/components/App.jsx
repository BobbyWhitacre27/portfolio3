import React, { useState, useEffect } from 'react';
import emailjs from 'emailjs-com'

import '../style/App.css';

const App = () => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [message, setMessage] = useState('');

	var templateParams = {
		name: name,
		email: email,
		message: message,
	};




	const handleName = event => {
		setName(event.target.value)
	}

	const handleEmail = event => {
		setEmail(event.target.value)
	}

	const handleMessage = event => {
		setMessage(event.target.value)
	}

	const handleSubmit = event => {
		event.preventDefault();

		emailjs.send('service_cznbhyj', 'template_nwfszks', templateParams, 'wv6Rc5vSz8dJCkLk0')
			.then(function (response) {
				console.log('SUCCESS!', response.status, response.text);
			}, function (error) {
				console.log('FAILED...', error);
			});

		window.alert("Thank you for your message! I will respond to you soon!")

	}

	useEffect(() => {

	}, []);

	return (
		<div>


			<nav
				aria-label="Site Nav"
				class=" flex text-sm md:text-2xl items-center justify-center bg-gray-100"
			>

				<ul class="flex items-center gap-2 font-bold">
					<li class="hover:bg-black hover:text-white py-4">
						<a class="rounded-lg px-3 py-2" href="#projects"> Projects </a>
					</li>

					<li class="hover:bg-black hover:text-white py-4">
						<a class="rounded-lg px-3 py-2" href="#education"> Education </a>
					</li>

					<li class="hover:bg-black hover:text-white py-4">
						<a class="rounded-lg px-3 py-2" href="#about"> About </a>
					</li>

					<li class="hover:bg-black hover:text-white py-4">
						<a class="rounded-lg px-3 py-2" href="#contact"> Contact </a>
					</li>
				</ul>
			</nav>


			<section>
				<div
					class="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8"
				>
					<div class="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-16">
						<div
							class="relative h-64 overflow-hidden rounded-lg sm:h-80 md:order-last md:h-full"
						>
							<img
								alt="Bobby"
								src="https://avatars.githubusercontent.com/u/111461443?v=4"
								class="absolute inset-0 h-full w-full object-cover"
							/>
						</div>

						<div class="lg:py-24">
							<h2 class="text-3xl font-bold sm:text-8xl">Welcome to my Portfolio</h2>

							<p class="mt-4 text-gray-600 sm:text-xl">
								👋 Hello! I'm Bobby Whitacre, a <span class="font-bold italic text-black">Full-Stack Developer</span> 👨‍💻 in the Washington D.C. area 🏛️.
							</p>



							<h2 class="text-3xl font-bold py-8 sm:text-4xl">Skills</h2>
							<h2 class="text-3xl font-bold sm:text-xl">JavaScript, React, Express, PostgreSQL, SQL, HTML, CSS, Tailwind CSS, Node.js, GitHub, Netlify & Render</h2>

							{/* 							
							<div class="grid grid-cols-5 gap-2">
								<img id="javascript" class="h-20" src="https://img.icons8.com/?size=512&id=108784&format=png"></img>
								<img id="react" class="h-20" src="https://img.icons8.com/?size=512&id=NfbyHexzVEDk&format=png"></img>
								<img id="postgres" class=" h-20" src="https://img.icons8.com/?size=512&id=36440&format=png"></img>
								<img id="sql" class=" h-20" src="https://media.istockphoto.com/id/1298834585/vector/sql-icon-major-database-format-vector-icon-illustration.jpg?s=612x612&w=0&k=20&c=GibfLwPw_hjsQMVQUMf-GQIzrp3Bkh_KWOoN5WpOiPI="></img>
								<img id="HTML" class="h-20" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/640px-HTML5_logo_and_wordmark.svg.png"></img>
								<img id="CSS" class=" h-20" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1200px-CSS3_logo_and_wordmark.svg.png"></img>
								<img id="TailwindCSS" class=" h-20 p-2" src="data:image/png;base64,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"></img>
							</div> */}







						</div>
					</div>
				</div>
			</section>


			<section id="projects" class="bg-gray-100">
				<div
					class="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8"
				>
					<div class="mx-auto max-w-lg text-center">
						<h2 class="text-3xl font-bold sm:text-4xl">Check out some of my work!</h2>
					</div>


					{/* <section class="shadow-2xl border border-black rounded-xl bg-white mt-6 sm:mt-16">
						<div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 sm:py-16 lg:px-8">
							<div class="max-w-3xl">
								<a class="text-4xl font-bold sm:text-5xl italic"
									href="https://turn-key.netlify.app/" 
									target='_blank'
								>
									TurnKey
								</a>

							</div>
							<hr class="border-1 border-black mt-2"></hr>
							<div class="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-16">
								<div class="relative h-64 overflow-hidden md:h-80 md:h-80">
									<a href="https://turn-key.netlify.app/" target='_blank'>
										<img
											alt="TurnKey"
											src="https://i.ibb.co/6HtWSF5/Screenshot-2023-06-26-at-2-56-09-PM-2.png"
											class="absolute inset-0 h-full w-full object-cover rounded-xl opacity-100 hover:opacity-0 border border-black"

										/>
										<img
											alt="TurnKey"
											src="https://i.ibb.co/1K914P2/Screenshot-2023-06-26-at-6-44-39-PM.png"
											class="absolute inset-0 h-full w-full object-cover rounded-xl opacity-0 hover:opacity-100 border border-black"

										/>
									</a>
								</div>

								<div class="lg:py-0">
									<article class="space-y-4">

									<h1 class="font-bold text-2xl">Full-Stack Developer - June 2023</h1>

										<div class="flex text-white">
											<a href="https://turn-key.netlify.app/" target='_blank' class="p-2 bg-blue-600 rounded-xl mr-2 hover:bg-blue-400 transition text-2xl">Website 🌐 </a>
											<a href="https://github.com/BobbyWhitacre27/TurnKey" target='_blank' class="flex p-2 bg-blue-600 rounded-xl ml-2 hover:bg-blue-400 transition text-2xl">Github<img class="h-8 pl-1" src="https://img.icons8.com/?size=512&id=62856&format=png"></img></a>

										</div>

										

										<p>
											TurnKey is an online real estate website where users can post properties for sale or for rent. Users may also add photos or edit any of their postings and add comments to any other postings on the site.
										</p>
										<p>
											<div class="grid grid-cols-2">
												<ul>
													<li>Javascript</li>
													<li>React</li>
													<li>Tailwind CSS</li>
													<li>Express</li>
													<li>SQL</li>
												</ul>
												<ul>
													<li>PostgreSQL</li>
													<li>Node.js</li>
													<li>GitHub</li>
													<li>Front-end hosted on Netlify</li>
													<li>Database hosted on Render</li>
												</ul>
											</div>
										</p>
									</article>
								</div>
							</div>
						</div>
					</section>





					<section class="shadow-2xl border border-black rounded-xl bg-white mt-6 sm:mt-16">
						<div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 sm:py-16 lg:px-8">
							<div class="max-w-3xl">
								<a class="text-4xl font-bold sm:text-5xl italic"
									href="https://leasinglad.netlify.app/" 
									target='_blank'
								>
									LeasingLad.
								</a>

							</div>
							<hr class="border-1 border-black mt-2"></hr>
							<div class="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-16">
								<div class="relative h-64 overflow-hidden md:h-80 md:h-80">
									<a href="https://leasinglad.netlify.app/" target='_blank'>
										<img
											alt="Leasing Lad"
											src="https://i.ibb.co/X5nP2cB/Screenshot-2023-04-25-at-5-33-25-PM-2.png"
											class="absolute inset-0 h-full w-full object-cover rounded-xl opacity-100 hover:opacity-0 border border-black"

										/>
										<img
											alt="LeasingLad"
											src="https://i.ibb.co/qnjTMRX/Screenshot-2023-06-26-at-6-39-07-PM.png"
											class="absolute inset-0 h-full w-full object-cover rounded-xl opacity-0 hover:opacity-100 border border-black"

										/>
									</a>
								</div>

								<div class="lg:py-0">
									<article class="space-y-4">

									<h1 class="font-bold text-2xl">Full-Stack Developer - May 2023</h1>

										<div class="flex text-white">
											<a href="https://leasinglad.netlify.app/" target='_blank' class="p-2 bg-blue-600 rounded-xl mr-2 hover:bg-blue-400 transition text-2xl">Website 🌐 </a>
											<a href="https://github.com/BobbyWhitacre27/leasing_lad" target='_blank' class="flex p-2 bg-blue-600 rounded-xl ml-2 hover:bg-blue-400 transition text-2xl">Github<img class="h-8 pl-1" src="https://img.icons8.com/?size=512&id=62856&format=png"></img></a>
											<a href="https://www.youtube.com/watch?v=Nwsp7YmKuJM" target='_blank' class="flex p-2 bg-blue-600 rounded-xl ml-2 hover:bg-blue-400 transition text-2xl">YouTube<img class="h-8 pl-1" src="https://img.icons8.com/?size=512&id=19318&format=png"></img></a>
										</div>

										<p>
										Leasing Lad is a property management software that helps leasing agents keep track of their leasing paperwork. I created this to help myself keep track of my paperwork in my current role.
										</p>
										<p>
											<div class="grid grid-cols-2">
												<ul>
													<li>Javascript</li>
													<li>React</li>
													<li>Tailwind CSS</li>
													<li>Express</li>
													<li>SQL</li>
												</ul>
												<ul>
													<li>PostgreSQL</li>
													<li>Node.js</li>
													<li>GitHub</li>
													<li>Front-end hosted on Netlify</li>
													<li>Database hosted on Render</li>
												</ul>
											</div>
										</p>
									</article>
								</div>
							</div>
						</div>
					</section>



					<section class="shadow-2xl border border-black rounded-xl bg-white mt-6 sm:mt-16">
						<div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 sm:py-16 lg:px-8">
							<div class="max-w-3xl">
								<a class="text-4xl font-bold sm:text-5xl italic"
									href="https://leasinglad.netlify.app/" 
									target='_blank'
								>
									RideStack
								</a>

							</div>
							<hr class="border-1 border-black mt-2"></hr>
							<div class="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-16">
								<div class="relative h-64 overflow-hidden md:h-80 md:h-80">
									<a href="https://leasinglad.netlify.app/" target='_blank'>
										<img
											alt="RideStack"
											src="https://i.ibb.co/526Zbjs/Screenshot-2023-04-14-at-11-59-33-PM-2.png"
											class="absolute inset-0 h-full w-full object-cover rounded-xl opacity-100 hover:opacity-0 border border-black"

										/>
										<img
											alt="RideStack"
											src="https://i.ibb.co/qnjTMRX/Screenshot-2023-06-26-at-6-39-07-PM.png"
											class="absolute inset-0 h-full w-full object-cover rounded-xl opacity-0 hover:opacity-100 border border-black"

										/>
									</a>
								</div>

								<div class="lg:py-0">
									<article class="space-y-4">

									<h1 class="font-bold text-2xl">Full-Stack Developer - March 2023</h1>

										<div class="flex text-white">
											<a href="https://leasinglad.netlify.app/" target='_blank' class="p-2 bg-blue-600 rounded-xl mr-2 hover:bg-blue-400 transition text-2xl">Website 🌐 </a>
											<a href="https://github.com/BobbyWhitacre27/leasing_lad" target='_blank' class="flex p-2 bg-blue-600 rounded-xl ml-2 hover:bg-blue-400 transition text-2xl">Github<img class="h-8 pl-1" src="https://img.icons8.com/?size=512&id=62856&format=png"></img></a>
											<a href="https://www.youtube.com/watch?v=Nwsp7YmKuJM" target='_blank' class="flex p-2 bg-blue-600 rounded-xl ml-2 hover:bg-blue-400 transition text-2xl">YouTube<img class="h-8 pl-1" src="https://img.icons8.com/?size=512&id=19318&format=png"></img></a>
										</div>

										<p>
										Leasing Lad is a property management software that helps leasing agents keep track of their leasing paperwork. I created this to help myself keep track of my paperwork in my current role.
										</p>
										<p>
											<div class="grid grid-cols-2">
												<ul>
													<li>Javascript</li>
													<li>React</li>
													<li>Tailwind CSS</li>
													<li>Express</li>
													<li>SQL</li>
												</ul>
												<ul>
													<li>PostgreSQL</li>
													<li>Node.js</li>
													<li>GitHub</li>
													<li>Front-end hosted on Netlify</li>
													<li>Database hosted on Render</li>
												</ul>
											</div>
										</p>
									</article>
								</div>
							</div>
						</div>
					</section> */}


					<div class="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2">







						<div
							class="block text-white bg-gray-600 rounded-xl p-8 shadow-xl transition hover:shadow-stone-50"
						>

						
							<h2><a href="https://turn-key.netlify.app/" target='_blank' class="flex justify-center text-xl font-bold underline">TurnKey</a></h2>
							<div class="flex justify-center gap-4">
								<a href="https://github.com/BobbyWhitacre27/TurnKey" target="_blank" class="flex justify-center mt-1 text-sm  underline">GitHub Link</a>
							</div>
							<p class="mt-1 text-sm  text-center">
								TurnKey is an online real estate website where users can post properties for sale or for rent.
							</p>
							<a href="https://turn-key.netlify.app/" target='_blank' class="min-w-fit">
								<img href="https://turn-key.netlify.app/" target='_blank' class="m-auto mt-4 h-40 rounded" src='https://i.ibb.co/6HtWSF5/Screenshot-2023-06-26-at-2-56-09-PM-2.png'></img>
							</a>
						</div>





						<div
							class="block rounded-xl text-white bg-gray-600 p-8 shadow-xl transition  hover:shadow-stone-50"
						>


							<h2><a href="https://leasinglad.netlify.app/" target='_blank' class="flex justify-center text-xl font-bold underline">Leasing Lad.</a></h2>
							<div class="flex justify-center gap-4">
								<a href="https://www.youtube.com/watch?v=Nwsp7YmKuJM" target="_blank" class="flex justify-center mt-1 text-sm underline">YouTube Demo</a>
								<a href="https://github.com/BobbyWhitacre27/leasing_lad" target="_blank" class="flex justify-center mt-1 text-sm underline">GitHub Link</a>
							</div>
							<p class="mt-1 text-sm text-center">
								Leasing Lad is a property management software tool I deisgned to help keep leasing paperwork organized.
							</p>
							<a href="https://leasinglad.netlify.app/" target='_blank' class="min-w-fit">
								<img href="https://leasinglad.netlify.app/" target='_blank' class="m-auto mt-4 h-40 rounded" src='https://i.ibb.co/X5nP2cB/Screenshot-2023-04-25-at-5-33-25-PM-2.png'></img>
							</a>
						</div>



						<div
							class="block rounded-xl text-white bg-gray-600 p-8 shadow-xl hover:shadow-stone-50"
						>


							<h2><a href="https://ride-stack.netlify.app/" target='_blank' class="flex justify-center text-xl font-bold underline">RideStack</a></h2>

							<div class="flex justify-center gap-4">
								<a href="https://www.youtube.com/watch?v=sx_Pr8Szygk" target="_blank" class="flex justify-center mt-1 text-sm underline">YouTube Demo</a>
								<a href="https://github.com/rideStack/RideStack" target="_blank" class="flex justify-center mt-1 text-sm  underline">GitHub Link</a>
							</div>

							<p class="mt-1 text-sm text-center">
								RideStack is a luxury all-electric vehicle sales website. Users can create accounts and select electric vehicles to purchase.
							</p>
							<a href="https://ride-stack.netlify.app/" target='_blank' class="min-w-fit">
								<img class="m-auto mt-4 h-40 rounded" src='https://i.ibb.co/526Zbjs/Screenshot-2023-04-14-at-11-59-33-PM-2.png'></img>
							</a>
						</div>




						<div
							class="block rounded-xl text-white bg-gray-600 p-8 shadow-xl transition  hover:shadow-stone-50"
						>


							<h2><a href="https://masala-house.netlify.app/" target='_blank' class="flex justify-center text-xl font-bold underline">Masala House</a></h2>

							<div class="flex justify-center gap-4">

								<a href="https://github.com/BobbyWhitacre27/masala_house" target="_blank" class="flex justify-center mt-1 text-sm underline">GitHub Link</a>
							</div>

							<p class="mt-1 text-sm text-center">
								Masala House is a made up indian resturant. Created to practice front-end skills with JavaScript and React.
							</p>
							<a href="https://masala-house.netlify.app/" target='_blank' class="min-w-fit">
								<img class="m-auto mt-4 h-40 rounded" src='https://i.ibb.co/7Q7y57v/Masala-House-Web-Page.png'></img>
							</a>
						</div>




						<div
							class="block rounded-xl text-white bg-gray-600 p-8 shadow-xl transition hover:shadow-stone-50"
						>


							<h2><a href="https://rent-specials-calculator.netlify.app/" target='_blank' class="flex justify-center text-xl font-bold underline">Rent Specials Calculator</a></h2>
							<a href="https://github.com/BobbyWhitacre27/rent_specials_calculator" target="_blank" class="flex justify-center mt-1 text-sm underline">GitHub Link</a>

							<p class="mt-1 text-sm text-center">
								This app was created to assist in my current property management role and quickly calculates rent specials for when I meet with clients.
							</p>
							<a href="https://rent-specials-calculator.netlify.app/" target='_blank' class="min-w-fit">
								<img class="m-auto mt-4 h-40 rounded" src='https://i.ibb.co/zrFRq23/Screenshot-2023-04-14-at-11-35-37-PM-2.png'></img>
							</a>
						</div>



						<div
							class="block rounded-xl text-white bg-gray-600 p-8 shadow-xl transition hover:shadow-stone-50"
						>


							<h2><a href="https://prorationcalculator.netlify.app/" target='_blank' class="flex justify-center text-xl font-bold underline">Rent Proration Calculator</a></h2>
							<a href="https://github.com/BobbyWhitacre27/proration_calculator" target="_blank" class="flex justify-center mt-1 text-sm underline">GitHub Link</a>

							<p class="mt-1 text-sm text-center">
								This app assists in my current property management role to calculate prorated costs for when I put together lease paperwork.
							</p>
							<a href="https://prorationcalculator.netlify.app/" target='_blank' class="min-w-fit">
								<img class="m-auto mt-4 h-40 rounded" src='https://i.ibb.co/THrt68v/Screenshot-2023-04-15-at-12-18-36-AM-2.png'></img>
							</a>
						</div>


						{/* <div
              class="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-stone-50 hover:shadow-stone-50"
              href="/services/digital-campaigns"
            >


              <h2><a href="https://calm-taiyaki-b6ef03.netlify.app/" target='_blank' class="flex justify-center text-xl font-bold text-white underline">Fitness Tracker</a></h2>
              <a href="https://github.com/BobbyWhitacre27/UNIV_FitnessTrackr_Starter" target="_blank" class="flex justify-center mt-1 text-sm text-gray-300 underline">GitHub Link</a>


              <p class="mt-1 text-sm text-gray-300 text-center">
                Fitness Tracker is a fitness website where users can create accounts and create there own workout routines to share with others.
              </p>
              <a href="https://calm-taiyaki-b6ef03.netlify.app/" target='_blank' class="min-w-fit">
                <img class="m-auto mt-4 h-40 rounded" src='https://i.ibb.co/hyXM17N/Screenshot-2023-04-15-at-12-21-40-AM-2.png'></img>
              </a>
            </div> */}



						{/* <div
              class="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-stone-50 hover:shadow-stone-50"
              href="/services/digital-campaigns"
            >


              <h2><a href="https://strangersthings-bobbywhitacre.netlify.app/" target='_blank' class="flex justify-center text-xl font-bold text-white underline">Stranger's Things</a></h2>
              <a href="https://github.com/BobbyWhitacre27/Strangers_Things" target="_blank" class="flex justify-center mt-1 text-sm text-gray-300 underline">GitHub Link</a>

              <p class="mt-1 text-sm text-gray-300 text-center">
                Strangers Things is a marketplace like website similar to craigslist where users can post items for sale and message other users.
              </p>
              <a href="https://strangersthings-bobbywhitacre.netlify.app/" target='_blank' class="min-w-fit">
                <img class="m-auto mt-4 h-40 rounded" src='https://i.ibb.co/MG4Zr4M/Screenshot-2023-04-15-at-12-24-38-AM-2.png'></img>
              </a>
            </div> */}


						{/* <div
              class="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-stone-50 hover:shadow-stone-50"
              href="/services/digital-campaigns"
            >



              <h2><a href="https://bobbywhitacre27.github.io/TicTacToe_finalsubmission/" target='_blank' class="flex justify-center text-xl font-bold text-white underline">Tic Tac Toe</a></h2>
              <a href="https://github.com/BobbyWhitacre27/TicTacToe_finalsubmission" target="_blank" class="flex justify-center mt-1 text-sm text-gray-300 underline">GitHub Link</a>

              <p class="mt-1 text-sm text-gray-300 text-center">
                This tic tac toe game allows two players to enter their names and play against one another.
              </p>
              <a href="https://bobbywhitacre27.github.io/TicTacToe_finalsubmission/" target='_blank' class="min-w-fit">
                <img class="m-auto mt-4 h-40 rounded" src='https://i.ibb.co/9n11jBj/Screenshot-2023-04-15-at-12-27-04-AM-2.png'></img>
              </a>
            </div> */}



						{/* <div
							class="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-stone-50 hover:shadow-stone-50"
							href="/services/digital-campaigns"
						>



							<h2><a href="https://bobbywhitacre27.github.io/cv/" target='_blank' class="flex justify-center text-xl font-bold text-white underline">My Very First Site... Ever!</a></h2>
							<a href="https://github.com/BobbyWhitacre27/cv" target="_blank" class="flex justify-center mt-1 text-sm text-gray-300 underline">GitHub Link</a>

							<p class="mt-1 text-sm text-gray-300 text-center">
								Est. August 2022 this was my very first website attempt. While not pretty, it shows how far I've come!
							</p>
							<a href="https://bobbywhitacre27.github.io/cv/" target='_blank' class="min-w-fit">
								<img class="m-auto mt-4 h-40 rounded" src='https://i.ibb.co/VJLtspT/Screenshot-2023-04-15-at-12-30-06-AM-2.png'></img>
							</a>
						</div> */}


					</div>


				</div>
			</section>


			<section id="education" class="bg-white">
				<div class="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 md:py-6 lg:px-8">


					<div class="mt-8 sm:mt-12">


						<div class="mx-auto max-w-xl text-center">
							<h2 class="text-3xl font-bold italic sm:text-6xl">
								Education
							</h2>
						</div>


						<dl class=" grid-cols-1 gap-4 sm:grid-cols-2">

							<div
								class="flex flex-col rounded-lg px-4 py-8 text-center"
							>
								<dt class="order-last text-2xl font-medium ">
									Powered by FullStack Academy
								</dt>
								<dt class="order-last text-lg font-medium text-gray-600">
									Software Engineering Certificate - March 2023
								</dt>

								<dd class="text-4xl font-extrabold  md:text-4xl">Virginia Tech Coding Bootcamp</dd>
							</div>

							<div className="logoDiv"><img className='schoolLogos' src={'https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Virginia_Tech_Hokies_logo.svg/1280px-Virginia_Tech_Hokies_logo.svg.png'}></img><img className='schoolLogos' id='fullstackLogo' src={'https://s3.us-east-1.amazonaws.com/fsa2-assets/assets/Logos/fullstack-academy-logo-full-color-rgb.jpg'}></img></div>

							<div
								class="flex flex-col rounded-lg  px-4 py-8 text-center"
							>
								<dt class="order-last text-lg font-medium text-gray-600">
									Bachelor of Science, Construction Management - December 2017
								</dt>


								<dd class="text-4xl font-extrabold md:text-4xl">Virginia Tech</dd>


							</div>

							<div className="logoDiv"><img className='schoolLogos' src={'https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Virginia_Tech_Hokies_logo.svg/1280px-Virginia_Tech_Hokies_logo.svg.png'}></img></div>
						</dl>
					</div>
				</div>
			</section>


			<section id="about">
				<div class="max-w-screen-xl px-4 py-4 mx-auto sm:py-8 sm:px-6 lg:px-8">
					<div class="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:items-stretch">
						<div class="grid p-6 bg-gray-100 rounded place-content-center sm:p-8">
							<div class="max-w-md mx-auto text-center lg:text-left">
								<header>
									<h2 class="text-xl font-bold sm:text-5xl">About me</h2>

									<p class="mt-4">
										Over 5 years of professional experience in the real estate and construction management industries.
									</p>
									<p class="mt-4">
										Began learning to code in 2022. Have always had a nack for building things and now love creating my own apps.
									</p>
									<p class="mt-4">
										Outside of work you will likely find me working out at my favorite boxing gym, watching Netlix's latest reality show, eating sushi or traveling the world!
									</p>
								</header>
							</div>
						</div>

						<div class="lg:col-span-2 lg:py-8">
							<ul class="grid grid-cols-2 gap-4">
								<li>
									<a href="#" class="block group">
										<img
											src="https://i.ibb.co/nMRfmK1/IMG-7139.jpg"
											alt=""
											class="object-cover w-full rounded aspect-square"
										/>


									</a>
								</li>

								<li>
									<a href="#" class="block group">
										<img
											src="https://i.ibb.co/Rhq7Rzj/IMG-1672.jpg"
											alt=""
											class="object-cover w-full rounded aspect-square"
										/>


									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</section>







			<section id="contact">
				<div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 lg:w-1/2">



					<div class="rounded-lg bg-white p-8 shadow-lg border-2 border-bg-gray-100 bg-gray-100 lg:col-span-3 lg:p-12">

						<h2 class="text-2xl font-bold text-center mb-4 sm:text-5xl">
							Contact me:
						</h2>
						<p class="text-gray-600 text-center mb-4">Like what you see? Reach out to me, I'd love to connect!</p>

						<form action="" class="space-y-4">
							<div>
								<label class="sr-only" for="name">Name</label>
								<input
									class="w-full rounded-lg border-black p-3 text-sm"
									placeholder="Name"
									type="text"
									id="name"
									onChange={handleName}
								/>
							</div>

							<div class="grid grid-cols-1 gap-4">
								<div>
									<label class="sr-only" for="email">Email</label>
									<input
										class="w-full rounded-lg border-black p-3 text-sm"
										placeholder="Email address"
										type="email"
										id="email"
										onChange={handleEmail}
									/>
								</div>

								{/* <div>
              <label class="sr-only" for="phone">Phone</label>
              <input
                class="w-full rounded-lg border-black p-3 text-sm"
                placeholder="Phone Number"
                type="tel"
                id="phone"
              />
            </div> */}
							</div>



							<div>
								<label class="sr-only" for="message">Message</label>

								<textarea
									class="w-full rounded-lg border-black p-3 text-sm"
									placeholder="Message"
									rows="8"
									id="message"
									onChange={handleMessage}
								></textarea>
							</div>

							<div class="mt-4 text-center">
								<button
									type="submit"
									class="inline-block w-full rounded-lg bg-black px-5 py-3 font-medium text-white sm:w-auto"
									onClick={handleSubmit}
								>
									Send
								</button>
							</div>
						</form>

					</div>
				</div>
			</section>






			<footer aria-label="Site Footer" class="bg-gray-100 mt-12">
				<div class="mx-auto max-w-5xl px-4 py-8 sm:px-6 lg:px-8 text-xl">
					<ul class="mt-4 mb-4  flex justify-center align-center gap-6 md:gap-8">
						<li>
							<a
								href="https://www.linkedin.com/in/bobby-whitacre/"
								rel="noreferrer"
								target="_blank"
								class="text-white underline"
							>
								<img class="h-16" src="https://img.icons8.com/?size=512&id=8808&format=png"></img>

							</a>
						</li>

						<li>
							<a
								href="mailto: bobby.whitacre27@gmail.com"
								rel="noreferrer"
								target="_blank"
								class="text-white underline"
							>
								<img class="h-16" src="https://img.icons8.com/?size=512&id=12623&format=png"></img>

							</a>
						</li>



						<li>
							<a
								href="https://github.com/BobbyWhitacre27"
								rel="noreferrer"
								target="_blank"
								class="text-white underline"
							>

								<img class="h-16" src="https://img.icons8.com/?size=512&id=12599&format=png"></img>

							</a>
						</li>

					</ul>
				</div>
			</footer>



		</div>
	);
};

export default App;
