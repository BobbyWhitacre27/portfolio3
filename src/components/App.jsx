import React, { useState, useEffect } from 'react';
import emailjs from 'emailjs-com'
import portfolioheader from '../photos/portfolioheader.png'
import bobbyimage from '../photos/bobbyimage.jpg'
import bobbyheadshot from '../photos/bobbyheadshot.png'
import link from '../photos/link.png'
import github from '../photos/github.png'
import youtube from '../photos/youtube.png'
import bobbyanddogs from '../photos/bobbyanddogs.png'
import bobbyandjasmine from '../photos/bobbyandjasmine.png'
import wordpress from '../photos/wordpress.png'
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




			<header class="bg-white">
				<div class="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
					<div class="flex h-16 items-center justify-center sm:justify-between">
						<div class="hidden flex-1 sm:flex md:items-center md:gap-12">
							<img class="h-14" src={portfolioheader} />
						</div>

						<div class="md:flex md:items-center md:gap-12">
							<nav aria-label="Global" class="md:block">
								<ul class="flex items-center gap-6 text-sm">
									<li>
										<a
											class="text-gray-500 transition hover:text-gray-500/75 scroll-smooth"
											href="#projects"
										>
											Projects
										</a>
									</li>

									<li>
										<a
											class="text-gray-500 transition hover:text-gray-500/75"
											href="#education"
										>
											Education
										</a>
									</li>

									<li>
										<a
											class="text-gray-500 transition hover:text-gray-500/75"
											href="#about"
										>
											About
										</a>
									</li>

									<li>
										<a
											class="text-gray-500 transition hover:text-gray-500/75"
											href="#contact"
										>
											Contact
										</a>
									</li>


								</ul>
							</nav>

							<div class="flex items-center gap-4">

							</div>
						</div>
					</div>
				</div>
			</header>





			<section class="overflow-hidden bg-gray-100 sm:grid sm:grid-cols-2">
				<div class="p-8 md:p-12 m-auto lg:px-16 lg:py-24">
					<div
						class="mx-auto max-w-xl text-center ltr:sm:text-left rtl:sm:text-right"
					>
						<h2 class="text-4xl font-bold text-gray-900 sm:text-4xl md:text-6xl">BOBBY WHITACRE</h2>


						<p class="mt-4 text-gray-600 sm:text-xl md:text-3xl">
							A <span class="font-bold text-black">Full-Stack Developer</span>  in the Washington D.C. area.
						</p>

						<div class="mx-auto max-w-5xl px-4 py- sm:px-6 lg:px-8 text-xl">
							<ul class="mt-4 mb-4  flex justify-center align-center gap-6 md:gap-8">
								<li>
									<a
										href="https://www.linkedin.com/in/bobby-whitacre/"
										rel="noreferrer"
										target="_blank"
										class="text-white underline"
									>
										<img class="h-12 sm:h-16" src="https://img.icons8.com/?size=512&id=8808&format=png"></img>

									</a>
								</li>

								<li>
									<a
										href="mailto: bobby.whitacre27@gmail.com"
										rel="noreferrer"
										target="_blank"
										class="text-white underline"
									>
										<img class="h-12 sm:h-16" src="https://img.icons8.com/?size=512&id=12623&format=png"></img>

									</a>
								</li>



								<li>
									<a
										href="https://github.com/BobbyWhitacre27"
										rel="noreferrer"
										target="_blank"
										class="text-white underline"
									>

										<img class="h-12 sm:h-16" src="https://img.icons8.com/?size=512&id=12599&format=png"></img>

									</a>
								</li>

							</ul>
						</div>

					</div>
				</div>

				<img
					alt="Computer"
					src="https://images.pexels.com/photos/2312369/pexels-photo-2312369.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
					class="h-56 w-full object-cover sm:h-full"
				/>
			</section>




			<section>
				<div
					class="mx-auto max-w-screen-xl px-4 py-4 sm:py-4 sm:px-6 lg:py-4 lg:px-8"
				>
					<div class="text-center">


						<div class="lg:py-6">

							<h2 class="text-3xl font-bold py-8 sm:text-4xl">Technical Skills</h2>


							<div class="grid grid-cols-3 md:grid-cols-6 gap-2 justify-evenly">

								<div>
									<h1 class="text-sm text-gray-500 italic">JavaScript</h1>
									<img id="javascript" class="h-20 m-auto" src="https://img.icons8.com/?size=512&id=108784&format=png"></img>
								</div>

								<div>
									<h1 class="text-sm text-gray-500 italic">React</h1>
									<img id="react" class="h-20 m-auto" src="https://img.icons8.com/?size=512&id=NfbyHexzVEDk&format=png"></img>
								</div>

								<div>
									<h1 class="text-sm text-gray-500 italic">HTML</h1>
									<img id="HTML" class="p-2 h-20 m-auto" src="https://img.icons8.com/?size=512&id=20909&format=png"></img>
								</div>

								<div>
									<h1 class="text-sm text-gray-500 italic">CSS</h1>
									<img id="CSS" class="p-2 h-20 m-auto" src="https://img.icons8.com/?size=512&id=21278&format=png"></img>
								</div>

								<div>
									<h1 class="text-sm text-gray-500 italic">TailwindCSS</h1>
									<img id="TailwindCSS" class="p-5 h-20 m-auto" src="data:image/png;base64,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"></img>
								</div>

								<div>
									<h1 class="text-sm text-gray-500 italic">WordPress</h1>
									<img id="sql" class="p-3 h-20 m-auto" src="https://cdn-icons-png.flaticon.com/128/174/174881.png"></img>
								</div>

								<div>
									<h1 class="text-sm text-gray-500 italic">Postgres</h1>
									<img id="postgres" class="p-2 h-20 m-auto" src="https://img.icons8.com/?size=512&id=36440&format=png"></img>
								</div>

								<div>
									<h1 class="text-sm text-gray-500 italic">SQL</h1>
									<img id="sql" class="p-3 h-20 m-auto" src="https://media.istockphoto.com/id/1298834585/vector/sql-icon-major-database-format-vector-icon-illustration.jpg?s=612x612&w=0&k=20&c=GibfLwPw_hjsQMVQUMf-GQIzrp3Bkh_KWOoN5WpOiPI="></img>
								</div>

								<div>
									<h1 class="text-sm text-gray-500 italic">Node.js</h1>
									<img id="sql" class="p-3 h-20 m-auto" src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg"></img>
								</div>

								<div>
									<h1 class="text-sm text-gray-500 italic">Express</h1>
									<img id="sql" class="p-3 h-20 m-auto" src="https://ajeetchaulagain.com/static/7cb4af597964b0911fe71cb2f8148d64/87351/express-js.png"></img>
								</div>


								<div>
									<h1 class="text-sm text-gray-500 italic">GitHub</h1>
									<img id="GitHub" class="p-2 h-20 m-auto" src="https://img.icons8.com/?size=512&id=12599&format=png"></img>
								</div>

								<div>
									<h1 class="text-sm text-gray-500 italic">VS Code</h1>
									<img id="VSCode" class="p-2 h-20 m-auto" src="https://img.icons8.com/?size=512&id=9OGIyU8hrxW5&format=png"></img>
								</div>

							</div>








						</div>
					</div>
				</div>
			</section>





			<section id="projects">
				<div class="max-w-screen-xl px-4 py-6 mx-auto sm:px-6 sm:py-6 lg:px-8">
					<header>
						<div class="mx-auto max-w-lg text-center">
							<h2 class="text-3xl font-bold sm:text-4xl">Recent Work</h2>
						</div>
					</header>

					<ul class="grid gap-4 mt-8 sm:grid-cols-2 lg:grid-cols-3">



						<li>
							<a
								href="https://turn-key.netlify.app/"
								target="_blank"
								class="relative block overflow-hidden group">
								<img
									src="https://images.pexels.com/photos/2128329/pexels-photo-2128329.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
									alt=""
									class="relative h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px] brightness-75 group-hover:brightness-50"
								/>
								<h1 class="absolute top-1/2 left-1/2 transition duration-500 transform -translate-x-1/2 -translate-y-1/2 text-white text-5xl font-bold group-hover:hidden">
									TurnKey
								</h1>
								<div class="absolute top-1/3 left-1/3 transition duration-500 transform -translate-x-1/3 -translate-y-1/3 text-white invisible group-hover:visible">

									<h1 class="text-3xl font-bold mt-4">TurnKey</h1>
									<p class="text-xl ">An online real estate website.</p>

									<div class="flex">
										<a
											href="https://turn-key.netlify.app/"
											target="_blank"
										>
											<img class="h-8 pr-2" src={link}></img>
										</a>
										<a
											href="https://github.com/BobbyWhitacre27/TurnKey"
											target="_blank"
										>
											<img class="h-9 pl-2" src={github}></img>
										</a>
									</div>

									<ul class="mt-2">
										<li>Full-Stack Project</li>
										<li>JavaScript</li>
										<li>React</li>
										<li>SQL</li>
										<li>Express</li>
										<li>HTML</li>
										<li>CSS</li>
										<li>TailwindCSS</li>
									</ul>
								</div>

							</a>
						</li>




						<li>
							<a
								href="https://leasinglad.netlify.app/"
								target="_blank"
								class="relative block overflow-hidden group">
								<img
									src="https://images.pexels.com/photos/7641842/pexels-photo-7641842.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
									alt=""
									class="relative h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px] brightness-75 group-hover:brightness-50"
								/>
								<h1 class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-5xl font-bold group-hover:hidden">
									LeasingLad.
								</h1>

								<div class="absolute top-1/3 left-1/3 transition duration-500 transform -translate-x-1/3 -translate-y-1/3 text-white invisible group-hover:visible">

									<h1 class="text-3xl font-bold mt-4">LeasingLad.</h1>
									<p class="text-xl ">Property management software.</p>

									<div class="flex">
										<a
											href="https://leasinglad.netlify.app/"
											target="_blank"
										>
											<img class="h-8 pr-2" src={link}></img>
										</a>
										<a
											href="https://github.com/BobbyWhitacre27/leasing_lad"
											target="_blank"
										>
											<img class="h-9 pl-2" src={github}></img>
										</a>
										<a
											href="https://www.youtube.com/watch?v=Nwsp7YmKuJM"
											target="_blank"
										>
											<img class="h-9 pl-4" src={youtube}></img>
										</a>
									</div>

									<ul class="mt-2">
										<li>Full-Stack Project</li>
										<li>JavaScript</li>
										<li>React</li>
										<li>SQL</li>
										<li>Express</li>
										<li>HTML</li>
										<li>CSS</li>
										<li>TailwindCSS</li>
									</ul>
								</div>




							</a>
						</li>


						<li>
							<a
								href="https://ride-stack.netlify.app/"
								target="_blank"
								class="relative block overflow-hidden group">
								<img
									src="https://images.pexels.com/photos/9800029/pexels-photo-9800029.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
									alt=""
									class="relative h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px] brightness-75 group-hover:brightness-50"
								/>
								<h1 class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-5xl font-bold group-hover:hidden">
									RideStack
								</h1>
								<div class="absolute top-1/3 left-1/3 transition duration-500 transform -translate-x-1/3 -translate-y-1/3 text-white invisible group-hover:visible">

									<h1 class="text-3xl font-bold mt-4">RideStack</h1>
									<p class="text-xl ">Electric vehicle sales website.</p>

									<div class="flex">
										<a
											href="https://ride-stack.netlify.app/"
											target="_blank"
										>
											<img class="h-8 pr-2" src={link}></img>
										</a>
										<a
											href="https://github.com/rideStack/RideStack"
											target="_blank"
										>
											<img class="h-9 pl-2" src={github}></img>
										</a>
										<a
											href="https://www.youtube.com/watch?v=sx_Pr8Szygk"
											target="_blank"
										>
											<img class="h-9 pl-4" src={youtube}></img>
										</a>
									</div>

									<ul class="mt-2">
										<li>Full-Stack Project</li>
										<li>JavaScript</li>
										<li>React</li>
										<li>SQL</li>
										<li>Express</li>
										<li>HTML</li>
										<li>CSS</li>
										<li>TailwindCSS</li>
									</ul>
								</div>



							</a>
						</li>



						<li>
							<a
								href="https://masala-house.netlify.app/"
								target="_blank"
								class="relative block overflow-hidden group">
								<img
									src="https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
									alt=""
									class="relative h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px] brightness-75 group-hover:brightness-50"
								/>
								<h1 class="absolute text-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-5xl font-bold group-hover:hidden">
									Masala House
								</h1>
								<div class="absolute top-1/3 left-1/3 transition duration-500 transform -translate-x-1/3 -translate-y-1/3 text-white invisible group-hover:visible">

									<h1 class="text-3xl font-bold mt-4">Masala House</h1>
									<p class="text-xl ">Fictional Indian restaurant website.</p>

									<div class="flex">
										<a
											href="https://masala-house.netlify.app/"
											target="_blank"
										>
											<img class="h-8 pr-2" src={link}></img>
										</a>
										<a
											href="https://github.com/BobbyWhitacre27/masala_house"
											target="_blank"
										>
											<img class="h-9 pl-2" src={github}></img>
										</a>
									</div>

									<ul class="mt-2">
										<li>Front-End Project</li>
										<li>JavaScript</li>
										<li>React</li>
										<li>HTML</li>
										<li>CSS</li>
										<li>TailwindCSS</li>
									</ul>
								</div>

							</a>
						</li>



						<li>
							<a
								href="https://rent-specials-calculator.netlify.app/"
								target="_blank"
								class="relative block overflow-hidden group">
								<img
									src="https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
									alt=""
									class="relative h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px] brightness-75 group-hover:brightness-50"
								/>
								<h1 class="absolute text-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-5xl font-bold group-hover:hidden">
									Rent Specials Calculator
								</h1>
								<div class="absolute top-1/3 left-1/3 transition duration-500 transform -translate-x-1/3 -translate-y-1/3 text-white invisible group-hover:visible">

									<h1 class="text-3xl font-bold mt-4">Rent Specials Calculator</h1>
									<p class="text-xl ">Calculates average rent when provided a special.</p>

									<div class="flex">
										<a
											href="https://rent-specials-calculator.netlify.app/"
											target="_blank"
										>
											<img class="h-8 pr-2" src={link}></img>
										</a>
										<a
											href="https://github.com/BobbyWhitacre27/rent_specials_calculator"
											target="_blank"
										>
											<img class="h-9 pl-2" src={github}></img>
										</a>
									</div>

									<ul class="mt-2">
										<li>Front-End Project</li>
										<li>JavaScript</li>
										<li>React</li>
										<li>HTML</li>
										<li>CSS</li>
										<li>TailwindCSS</li>
									</ul>
								</div>

							</a>
						</li>



						<li>
							<a
								href="https://prorationcalculator.netlify.app/"
								target="_blank"
								class="relative block overflow-hidden group">
								<img
									src="https://images.pexels.com/photos/53621/calculator-calculation-insurance-finance-53621.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
									alt=""
									class="relative h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px] brightness-75 group-hover:brightness-50"
								/>
								<h1 class="absolute text-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-5xl font-bold group-hover:hidden">
									Proration Calculator
								</h1>
								<div class="absolute top-1/3 left-1/3 transition duration-500 transform -translate-x-1/3 -translate-y-1/3 text-white invisible group-hover:visible">

									<h1 class="text-3xl font-bold mt-4">Proration Calculator</h1>
									<p class="text-xl ">Calculates prorated rent costs.</p>

									<div class="flex">
										<a
											href="https://prorationcalculator.netlify.app/"
											target="_blank"
										>
											<img class="h-8 pr-2" src={link}></img>
										</a>
										<a
											href="https://github.com/BobbyWhitacre27/proration_calculator"
											target="_blank"
										>
											<img class="h-9 pl-2" src={github}></img>
										</a>
									</div>

									<ul class="mt-2">
										<li>Front-End Project</li>
										<li>JavaScript</li>
										<li>React</li>
										<li>HTML</li>
										<li>CSS</li>
										<li>TailwindCSS</li>
									</ul>
								</div>


							</a>
						</li>

					</ul>

					<ul class="mt-4">
							<a
								href="https://bobbywhitacre3.wordpress.com/"
								target="_blank"
								class="relative block overflow-hidden group m-auto w-fulll">
								<img
									src="https://images.pexels.com/photos/4452380/pexels-photo-4452380.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
									alt=""
									class="relative h-[140px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[160px] brightness-75 group-hover:brightness-50"
								/>
								<h1 class="absolute text-center m-auto sm:whitespace-nowrap top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-3xl sm:text-5xl font-bold transition duration-500 group-hover:scale-105">
								  <div class="flex"><img class="h-14 hidden sm:block m-auto sm:h-12 sm:pr-2" src={wordpress}></img>WordPress Portfolio</div>
								</h1>
								


							</a>
						</ul>

				</div>
			</section>










			<section id="education" class="bg-white">
				<div class="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 md:py-6 lg:px-8">


					<div class="mt-0 sm:mt-6 mb-4 sm:mb-6">


						<div class="mx-auto max-w-xl text-center">
							<h2 class="text-4xl font-bold sm:text-4xl">
								Education
							</h2>
						</div>




						<article class="flex bg-white shadow-xl md:w-2/3 m-auto transition mt-8">


							<div class="hidden sm:block sm:basis-56">
								<img
									alt="Code"
									src="https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
									class="aspect-square h-full w-full object-cover"
								/>
							</div>

							<div class="flex flex-1 flex-col justify-between">
								<div class="border-s border-gray-900/10 p-4 sm:border-l-transparent my-auto justify- sm:p-6">



									<div class="flex"><img class="h-14 mb-4" src={'https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Virginia_Tech_Hokies_logo.svg/1280px-Virginia_Tech_Hokies_logo.svg.png'}></img><img class="h-14 mb-4" src={'https://s3.us-east-1.amazonaws.com/fsa2-assets/assets/Logos/fullstack-academy-logo-full-color-rgb.jpg'}></img></div>

									<h3 class="font-bold uppercase text-xl text-gray-900">
										Virginia Tech Coding Bootcamp
									</h3>


									<p class="mt-2 line-clamp-3 text-sm/relaxed text-gray-700">
										Powered by Fullstack Academy, Software Engineering Certificate
									</p>
									<p class="mt-2 line-clamp-3 text-sm/relaxed text-gray-700">
										March 2023
									</p>
								</div>


							</div>
						</article>

						<article class="flex bg-white shadow-xl md:w-2/3 m-auto transition mt-8">


							<div class="hidden sm:block sm:basis-56">
								<img
									alt="Construction"
									src="https://images.pexels.com/photos/2138126/pexels-photo-2138126.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
									class="aspect-square h-full w-full object-cover"
								/>
							</div>

							<div class="flex flex-1 flex-col justify-between">
								<div class="border-s border-gray-900/10 p-4 sm:border-l-transparent my-auto justify- sm:p-6">



									<div class="flex"><img class="h-14 mb-4" src={'https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Virginia_Tech_Hokies_logo.svg/1280px-Virginia_Tech_Hokies_logo.svg.png'}></img></div>

									<h3 class="font-bold uppercase text-xl text-gray-900">
										Virginia Tech
									</h3>


									<p class="mt-2 line-clamp-3 text-sm/relaxed text-gray-700">
										Bachelor of Science Degree, Building Construction
									</p>
									<p class="mt-2 line-clamp-3 text-sm/relaxed text-gray-700">
										December 2017
									</p>
								</div>


							</div>
						</article>


						


						{/* <dl class=" grid-cols-1 gap-4 sm:grid-cols-2">

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
						</dl> */}
					</div>
				</div>
			</section>


			<section id="about">
				<div class="max-w-screen-xl px-4 py-4 mx-auto sm:py-8 sm:px-6 lg:px-8">
					<div class="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:items-stretch">
						<div class="grid p-6 bg-gray-100 rounded place-content-center sm:p-8">
							<div class="max-w-md mx-auto text-center  lg:text-left">
								<header>
									<h2 class="text-4xl font-bold sm:text-4xl">About</h2>

									<p class="mt-4">
										Over 5 years of professional experience in the real estate and construction management industries.
									</p>
									<p class="mt-4">
										Began learning to code in 2022. Have always had a nack for building things and now love creating my own websites.
									</p>
									<p class="mt-4">
										Outside of work you will likely find me working out at my favorite boxing gym, watching Netflix's latest reality show, eating sushi or traveling the world!
									</p>
								</header>
							</div>
						</div>

						<div class="lg:col-span-2 lg:py-8">
							<ul class="grid grid-cols-2 gap-4">
								<li>

									<img
										src={bobbyanddogs}
										alt=""
										class="object-cover w-full rounded aspect-square"
									/>



								</li>

								<li>

									<img
										src={bobbyandjasmine}
										alt=""
										class="object-cover w-full rounded aspect-square"
									/>



								</li>
							</ul>
						</div>
					</div>
				</div>
			</section>









			<section id="contact" class="bg-gray-100 mt-16">
				<div class="lg:grid lg:min-h-1/2 lg:grid-cols-12">
					<section
						class="relative flex h-32 items-end bg-gray-900 lg:col-span-5 lg:h-full xl:col-span-6"
					>
						<img
							alt="Computer"
							src="https://images.pexels.com/photos/792199/pexels-photo-792199.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
							class="absolute inset-0 h-full w-full object-cover opacity-80"
						/>

					</section>

					<main
						class="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6"
					>

						<div class="rounded-lg  p-8 lg:col-span-3 lg:p-12">

							<h2 class="text-4xl font-bold text-center mb-4 sm:text-4xl">
								Contact
							</h2>
							<p class="text-gray-600 text-center mb-4">Like what you see? Reach out to me, I'd love to connect!</p>

							<form action="" class="space-y-4">
								<div>
									<label class="sr-only" for="name">Name</label>
									<input
										class="w-full rounded-lg border-gray-200 bg-white shadow-sm p-3 text-sm"
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
											class="w-full rounded-lg border-gray-200 bg-white shadow-sm p-3 text-sm"
											placeholder="Email address"
											type="email"
											id="email"
											onChange={handleEmail}
										/>
									</div>


								</div>



								<div>
									<label class="sr-only" for="message">Message</label>

									<textarea
										class="w-full rounded-lg border-gray-200 bg-white shadow-sm p-3 text-sm"
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

					</main>
				</div>
			</section>



			<footer class="">
				<div
					class="relative mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8 lg:pt-16"
				>


					<div class="lg:flex lg:items-end lg:justify-between">
						<div>
							<div class="flex justify-center text-teal-600 lg:justify-start">
								<img
									src={portfolioheader}
									class="h-16"

								/>
							</div>

							<p
								class="mx-auto mt-6 max-w-md text-center leading-relaxed text-gray-500 lg:text-left"
							>
								Webpage created by Bobby Whitacre. Thanks for visitng.
							</p>

							<ul class="mt-4 justify-center lg:justify-start flex gap-6 md:gap-8">
								<li>
									<a
										href="https://www.linkedin.com/in/bobby-whitacre/"
										rel="noreferrer"
										target="_blank"
										class="text-white underline"
									>
										<img class="h-8" src="https://img.icons8.com/?size=512&id=8808&format=png"></img>

									</a>
								</li>

								<li>
									<a
										href="mailto: bobby.whitacre27@gmail.com"
										rel="noreferrer"
										target="_blank"
										class="text-white underline"
									>
										<img class="h-8" src="https://img.icons8.com/?size=512&id=12623&format=png"></img>

									</a>
								</li>



								<li>
									<a
										href="https://github.com/BobbyWhitacre27"
										rel="noreferrer"
										target="_blank"
										class="text-white underline"
									>

										<img class="h-8" src="https://img.icons8.com/?size=512&id=12599&format=png"></img>

									</a>
								</li>
							</ul>


						</div>

						<ul
							class="mt-12 mb-8 flex flex-wrap justify-center gap-6 md:gap-8 lg:mt-0 lg:justify-end lg:gap-12"
						>
							<li>
								<a class="text-gray-700 transition hover:text-gray-700/75" href="#projects">
									Projects
								</a>
							</li>

							<li>
								<a class="text-gray-700 transition hover:text-gray-700/75" href="#education">
									Education
								</a>
							</li>

							<li>
								<a class="text-gray-700 transition hover:text-gray-700/75" href="#about">
									About
								</a>
							</li>

							<li>
								<a class="text-gray-700 transition hover:text-gray-700/75" href="#contact">
									Contact
								</a>
							</li>
						</ul>
					</div>


				</div>
			</footer>


		</div>
	);
};

export default App;
