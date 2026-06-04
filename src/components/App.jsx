import React, { useState, useEffect } from 'react';
import emailjs from 'emailjs-com'
import portfolioheader from '../photos/portfolioheader.png'
import bobbyimage from '../photos/bobbyimage.jpg'
import bobbyheadshot from '../photos/bobbyheadshot.png'
import link from '../photos/link.png'
import github from '../photos/github.png'
import Logo from '../photos/Logo.png'
import youtube from '../photos/youtube.png'
import grandcanyon from '../photos/GrandCanyon.jpg'
import Bailey from '../photos/Bailey.jpg'
import bobbyandjasmine from '../photos/bobbyandjasmine.png'
import wordpress from '../photos/wordpress.png'
import portrait from '../photos/Portrait.jpg'
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







<header class="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-gray-200">
  <div class="mx-auto max-w-7xl px-6">
    <div class="flex h-16 items-center justify-between">


  <a href="#" class="flex items-center gap-3">
    <img
      class="h-10 w-auto"
      src={Logo}
      alt="Bobby Whitacre"
    />

    <div class="hidden sm:block">
      <p class="font-bold text-gray-900">
        Bobby Whitacre
      </p>

      <p class="text-xs text-gray-500">
        AWS Certified • IT Support Specialist
      </p>
    </div>
  </a>

  
<nav aria-label="Main Navigation">
  <ul class="flex items-center gap-3 text-xs sm:gap-4 sm:text-sm md:gap-8 md:text-base">


      <li>
        <a
          href="#certifications"
          class="text-gray-600 hover:text-blue-600 transition"
        >
          Certifications
        </a>
      </li>

      <li>
        <a
          href="#skills"
          class="text-gray-600 hover:text-blue-600 transition"
        >
          Skills
        </a>
      </li>

      <li>
        <a
          href="#projects"
          class="text-gray-600 hover:text-blue-600 transition"
        >
          Projects
        </a>
      </li>


      <li>
        <a
          href="#education"
          class="text-gray-600 hover:text-blue-600 transition"
        >
          Education
        </a>
      </li>

      <li>
        <a
          href="#about"
          class="text-gray-600 hover:text-blue-600 transition"
        >
          About
        </a>
      </li>


    </ul>
  </nav>

</div>


  </div>
</header>






			{/* <header class="bg-white">
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

								


								</ul>
							</nav>

							<div class="flex items-center gap-4">

							</div>
						</div>
					</div>
				</div>
			</header> */}

<section class="overflow-hidden bg-gray-100">
  <div class="max-w-7xl mx-auto px-6 py-16 lg:py-24">
    <div class="grid lg:grid-cols-2 gap-12 items-center">

  
  <div class="text-center lg:text-left">

    <p class="text-blue-600 font-semibold mb-2">
      AWS SAA Certified • Security+ • Network+
    </p>

    <h1 class="text-5xl md:text-6xl font-bold text-gray-900">
      Bobby Whitacre
    </h1>

    <h2 class="mt-4 text-2xl md:text-3xl text-gray-700">
      IT Support Specialist & Aspiring Cloud Professional
    </h2>

    <p class="mt-6 text-lg text-gray-600 max-w-xl">
      IT professional with experience supporting enterprise users,
      Microsoft 365 environments, endpoint devices, and cloud technologies.
      AWS Solutions Architect Associate certified with a passion for
      infrastructure, automation, and continuous learning.
    </p>

    <div class="mt-8 flex flex-wrap justify-center lg:justify-start gap-4">

      <a
        href="https://www.linkedin.com/in/bobby-whitacre/"
        target="_blank"
        rel="noreferrer"
        class="px-5 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
      >
        LinkedIn
      </a>

      <a
        href="https://github.com/BobbyWhitacre27"
        target="_blank"
        rel="noreferrer"
        class="px-5 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition"
      >
        GitHub
      </a>

    </div>

  </div>

  
  <div class="flex justify-center">
    <img
      src={portrait}
      alt="Bobby Whitacre"
      class="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover shadow-xl"
    />
  </div>

</div>


  </div>
</section>




			{/* <section class="overflow-hidden bg-gray-100 sm:grid sm:grid-cols-2">
				<div class="p-8 md:p-12 m-auto lg:px-16 lg:py-24">
					<div
						class="mx-auto max-w-xl text-center ltr:sm:text-left rtl:sm:text-right"
					>
						<h2 class="text-4xl font-bold text-gray-900 sm:text-4xl md:text-6xl">BOBBY WHITACRE</h2>


						<p class="mt-4 text-gray-600 sm:text-xl md:text-3xl">
							An <span class="font-bold text-black">IT Support Specialist</span>  in the Washington D.C. area.
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

<div class="max-w-md mx-auto">
  <img
    alt="Computer"
	src={portrait}
    class="w-full h-auto object-cover"
  />
</div>


		
			</section> */}


<section id="certifications" class="py-16">
  <div class="max-w-5xl mx-auto px-6">
    <h2 class="text-3xl font-bold text-center mb-10">
      Certifications
    </h2>


<div class="grid md:grid-cols-3 gap-6">


  <div class="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition">
    <img
      class="h-28 mx-auto mb-4"
      src="https://images.credly.com/images/0e284c3f-5164-4b21-8660-0d84737941bc/image.png"
      alt="AWS Solutions Architect Associate"
    />

    <h3 class="font-semibold text-lg">
      AWS Solutions Architect Associate
    </h3>

    <p class="text-sm text-gray-500 mb-3">
      Earned May 2026
    </p>

    <a
      href="https://www.credly.com/badges/d2e702c9-f3c9-403c-bb37-be87ffc930ff/public_url"
      target="_blank"
      class="text-blue-600 hover:underline"
    >
      View Credential
    </a>
  </div>

  
  <div class="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition">
    <img
      class="h-28 mx-auto mb-4"
      src="https://images.credly.com/size/160x160/images/c70ba73e-3c8a-46fa-9d60-4a9af94ad662/blob"
      alt="CompTIA Network+"
    />

    <h3 class="font-semibold text-lg">
      CompTIA Network+
    </h3>

    <p class="text-sm text-gray-500 mb-3">
      Earned February 2026
    </p>

    <a
      href="https://www.credly.com/badges/dec564ae-d9e3-45c4-9672-7f5a32da203e/public_url"
      target="_blank"
      class="text-blue-600 hover:underline"
    >
      View Credential
    </a>
  </div>


  <div class="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition">
    <img
      class="h-28 mx-auto mb-4"
      src="https://images.credly.com/size/160x160/images/80d8a06a-c384-42bf-ad36-db81bce5adce/blob"
      alt="CompTIA Security+"
    />

    <h3 class="font-semibold text-lg">
      CompTIA Security+
    </h3>

    <p class="text-sm text-gray-500 mb-3">
      Earned July 2025
    </p>

    <a
      href="https://www.credly.com/badges/96acc44c-631a-42a6-a616-958b10588374/public_url"
      target="_blank"
      class="text-blue-600 hover:underline"
    >
      View Credential
    </a>
  </div>

</div>


  </div>
</section>





{/* <section id="Certifications">
				<div
					class="mx-auto max-w-screen-xl px-4 py-4 sm:py-4 sm:px-6 lg:py-4 lg:px-8"
				>
					<div class="text-center">


						<div class="lg:py-6">

							<h2 class="text-3xl font-bold py-8 sm:text-4xl">Certifications</h2>


							<div class="grid grid-cols-3 md:grid-cols-3 gap-2 justify-evenly">

								<div>
									<h1 class="text-md text-gray-500 font-bold">AWS Solutions Architect Associate</h1>
									<h1 class="text-sm text-gray-500 italic">May 2026</h1>
									<a target="_blank" class="underline text-sm text-blue-500 italic" href="https://www.credly.com/badges/d2e702c9-f3c9-403c-bb37-be87ffc930ff/public_url">Digital Badge</a>
									<img id="AWS SAA" class="h-20 m-auto" src="https://images.credly.com/images/0e284c3f-5164-4b21-8660-0d84737941bc/image.png"></img>
								</div>

								<div>
									<h1 class="text-md text-gray-500 font-bold">CompTIA Network+</h1>
									<h1 class="text-sm text-gray-500 italic">February 2026</h1>
									<a target="_blank" class="underline text-sm text-blue-500 italic" href="https://www.credly.com/badges/dec564ae-d9e3-45c4-9672-7f5a32da203e/public_url">Digital Badge</a>
									<img id="Network+" class="h-20 m-auto" src="https://images.credly.com/size/160x160/images/c70ba73e-3c8a-46fa-9d60-4a9af94ad662/blob"></img>
								</div>

								<div>
									<h1 class="text-md text-gray-500 font-bold">CompTIA Security+</h1>
									<h1 class="text-sm text-gray-500 italic">July 2025</h1>
									<a target="_blank" class="underline text-sm text-blue-500 italic" href="https://www.credly.com/badges/96acc44c-631a-42a6-a616-958b10588374/public_url">Digital Badge</a>
									<img id="Security+" class="h-20 m-auto" src="https://images.credly.com/size/160x160/images/80d8a06a-c384-42bf-ad36-db81bce5adce/blob"></img>
								</div>

								
							</div>








						</div>
					</div>
				</div>
			</section> */}




<section id="skills" class="py-16">
  <div class="max-w-5xl mx-auto px-6">
    <h2 class="text-3xl font-bold text-center mb-10">
      Technical Skills
    </h2>


<div class="grid md:grid-cols-2 gap-8">

  
  <div class="bg-white rounded-lg shadow-md p-6">
    <h3 class="text-xl font-semibold mb-4">
      Cloud & Infrastructure
    </h3>
    <div class="flex flex-wrap gap-2">
      <span class="px-3 py-1 bg-gray-100 rounded-full">AWS EC2</span>
      <span class="px-3 py-1 bg-gray-100 rounded-full">AWS S3</span>
      <span class="px-3 py-1 bg-gray-100 rounded-full">AWS IAM</span>
      <span class="px-3 py-1 bg-gray-100 rounded-full">AWS VPC</span>
      <span class="px-3 py-1 bg-gray-100 rounded-full">AWS CloudWatch</span>
    </div>
  </div>

 
  <div class="bg-white rounded-lg shadow-md p-6">
    <h3 class="text-xl font-semibold mb-4">
      Endpoint Support
    </h3>
    <div class="flex flex-wrap gap-2">
      <span class="px-3 py-1 bg-gray-100 rounded-full">Windows 11</span>
      <span class="px-3 py-1 bg-gray-100 rounded-full">macOS</span>
      <span class="px-3 py-1 bg-gray-100 rounded-full">VDI</span>
      <span class="px-3 py-1 bg-gray-100 rounded-full">Endpoint Support</span>
    </div>
  </div>


  <div class="bg-white rounded-lg shadow-md p-6">
    <h3 class="text-xl font-semibold mb-4">
      Identity & Collaboration
    </h3>
    <div class="flex flex-wrap gap-2">
      <span class="px-3 py-1 bg-gray-100 rounded-full">Active Directory</span>
      <span class="px-3 py-1 bg-gray-100 rounded-full">Microsoft 365</span>
      <span class="px-3 py-1 bg-gray-100 rounded-full">Microsoft Teams</span>
      <span class="px-3 py-1 bg-gray-100 rounded-full">MFA</span>
    </div>
  </div>

  
  <div class="bg-white rounded-lg shadow-md p-6">
    <h3 class="text-xl font-semibold mb-4">
      Networking & Automation
    </h3>
    <div class="flex flex-wrap gap-2">
      <span class="px-3 py-1 bg-gray-100 rounded-full">VPN Troubleshooting</span>
      <span class="px-3 py-1 bg-gray-100 rounded-full">Networking Fundamentals</span>
      <span class="px-3 py-1 bg-gray-100 rounded-full">Power Apps</span>
      <span class="px-3 py-1 bg-gray-100 rounded-full">Power Automate</span>
      <span class="px-3 py-1 bg-gray-100 rounded-full">Service Desk Operations</span>
    </div>
  </div>

</div>


  </div>
</section>




			{/* <section id="Technical Skills">
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
			</section> */}





			<section id="projects">
				<div class="max-w-screen-xl px-4 py-6 mx-auto sm:px-6 sm:py-6 lg:px-8">
					<header>
						<div class="mx-auto max-w-lg text-center">
							<h2 class="text-3xl font-bold text-center mb-10">
      Web Development Projects
    </h2>
							
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
  <div class="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8">

    <div class="text-center mb-8">
      <h2 class="text-4xl font-bold">Education</h2>
    </div>

   
    <article class="flex bg-white shadow-xl md:w-2/3 mx-auto mt-8">
      
      <div class="hidden sm:block sm:basis-56">
        <img
          src="https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="Coding"
          class="aspect-square h-full w-full object-cover"
        />
      </div>

      <div class="flex flex-1 flex-col justify-center p-6 border-l border-gray-900/10 sm:border-l-transparent">

        <div class="flex gap-3 mb-4">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Virginia_Tech_Hokies_logo.svg/1280px-Virginia_Tech_Hokies_logo.svg.png"
            class="h-12"
            alt="Virginia Tech"
          />
          <img
            src="https://s3.us-east-1.amazonaws.com/fsa2-assets/assets/Logos/fullstack-academy-logo-full-color-rgb.jpg"
            class="h-12"
            alt="Fullstack Academy"
          />
        </div>

        <h3 class="font-bold uppercase text-xl text-gray-900">
          Virginia Tech Coding Bootcamp
        </h3>

        <p class="mt-2 text-sm text-gray-700">
          Software Engineering Certificate — Powered by Fullstack Academy
        </p>

        <p class="mt-2 text-sm text-gray-500">
          March 2023
        </p>

      </div>
    </article>

    
    <article class="flex bg-white shadow-xl md:w-2/3 mx-auto mt-8">

      <div class="hidden sm:block sm:basis-56">
        <img
          src="https://images.pexels.com/photos/2138126/pexels-photo-2138126.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="Construction"
          class="aspect-square h-full w-full object-cover"
        />
      </div>

      <div class="flex flex-1 flex-col justify-center p-6 border-l border-gray-900/10 sm:border-l-transparent">

        <div class="flex mb-4">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Virginia_Tech_Hokies_logo.svg/1280px-Virginia_Tech_Hokies_logo.svg.png"
            class="h-12"
            alt="Virginia Tech"
          />
        </div>

        <h3 class="font-bold uppercase text-xl text-gray-900">
          Virginia Tech
        </h3>

        <p class="mt-2 text-sm text-gray-700">
          Bachelor of Science Degree, Building Construction
        </p>

        <p class="mt-2 text-sm text-gray-500">
          December 2017
        </p>

      </div>
    </article>

  </div>
</section>




			{/* <section id="education" class="bg-white">
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


						


		
					</div>
				</div>
			</section> */}


			<section id="about">
				<div class="max-w-screen-xl px-4 py-4 mx-auto sm:py-8 sm:px-6 lg:px-8">
					<div class="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:items-stretch">
						<div class="grid p-6 bg-gray-100 rounded place-content-center sm:p-8">
							<div class="max-w-md mx-auto text-center  lg:text-left">
								<header>
									<h2 class="text-4xl font-bold sm:text-4xl">About</h2>

									<p class="mt-4">
										IT professional who is passionate about troubleshooting, problem solving, and learning new technologies.
									</p>
									<p class="mt-4">
										Certifications include AWS Certified Solutions Architect – Associate, CompTIA Security+, and CompTIA Network+.
									</p>
									<p class="mt-4">
											Outside of work you would find me spending time with my wife, our dog and our cat. We enjoy travelling, DIY projects, exploring nature and walks!
									</p>
								</header>
							</div>
						</div>

						<div class="lg:col-span-2 lg:py-8">
							<ul class="grid grid-cols-2 gap-4">
								<li>

									<img
										src={grandcanyon}
										alt=""
										class="object-cover w-full rounded aspect-square"
									/>



								</li>

								<li>

									<img
										src={Bailey}
										alt=""
										class="object-cover w-full rounded aspect-square"
									/>



								</li>
							</ul>
						</div>
					</div>
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
									src={Logo}
									class="h-16"

								/>
							</div>

							<p
								class="mx-auto mt-6 max-w-md text-center leading-relaxed text-gray-500 lg:text-left"
							>
								Webpage created by Bobby Whitacre. Thanks for visitng.
							</p>

						


						</div>

						
					</div>


				</div>
			</footer>


		</div>
	);
};

export default App;
