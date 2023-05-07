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
    .then(function(response) {
       console.log('SUCCESS!', response.status, response.text);
    }, function(error) {
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
  class=" flex text-sm md:text-2xl items-center justify-center p-4 bg-gray-700"
>

  <ul class="flex items-center gap-2 font-bold text-white">
    <li class="">
      <a class="rounded-lg px-3 py-2" href="#projects"> Projects </a>
    </li>

    <li><a class="rounded-lg px-3 py-2" href="#education"> Education </a></li>

    <li><a class="rounded-lg px-3 py-2" href="#about"> About </a></li>  

    <li><a class="rounded-lg px-3 py-2" href="#contact"> Contact </a></li>  
  </ul>
</nav>


      <section>
        <div
          class="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8"
        >
          <div class="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
            <div
              class="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full"
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
                Hello! I'm Bobby Whitacre, a Full-Stack Developer in the Washington D.C. area.
              </p>



              <h2 class="text-3xl font-bold py-8 sm:text-4xl">Skills</h2>
              <h2 class="text-3xl font-bold sm:text-xl">JavaScript, React, Express, PostgreSQL, SQL, HTML, CSS, Tailwind CSS, Node.js, GitHub, Netlify & Render</h2>







            </div>
          </div>
        </div>
      </section>


      <section id="projects" class="bg-gray-700 text-white">
        <div
          class="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8"
        >
          <div class="mx-auto max-w-lg text-center">
            <h2 class="text-3xl font-bold sm:text-4xl">Check out some of my work</h2>
          </div>

          <div class="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2">

            <div
              class="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-stone-50 hover:shadow-stone-50"
            >


              <h2><a href="https://leasinglad.netlify.app/" target='_blank' class="flex justify-center text-xl font-bold text-white underline">Leasing Lad.</a></h2>
              <div class="flex justify-center gap-4">
              <a href="https://www.youtube.com/watch?v=Nwsp7YmKuJM" target="_blank" class="flex justify-center mt-1 text-sm text-gray-300 underline">YouTube Demo</a>
              <a href="https://github.com/BobbyWhitacre27/leasing_lad" target="_blank" class="flex justify-center mt-1 text-sm text-gray-300 underline">GitHub Link</a>
              </div>
              <p class="mt-1 text-sm text-gray-300 text-center">
                Leasing Lad is a property management software tool I deisgned to help keep leasing paperwork organized.
              </p>
              <a href="https://leasinglad.netlify.app/" target='_blank' class="min-w-fit">
                <img href="https://leasinglad.netlify.app/" target='_blank' class="m-auto mt-4 h-40 rounded" src='https://i.ibb.co/X5nP2cB/Screenshot-2023-04-25-at-5-33-25-PM-2.png'></img>
              </a>
            </div>



            <div
              class="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-stone-50 hover:shadow-stone-50"
            >


              <h2><a href="https://ride-stack.netlify.app/" target='_blank' class="flex justify-center text-xl font-bold text-white underline">RideStack</a></h2>
              
              <div class="flex justify-center gap-4">
              <a href="https://www.youtube.com/watch?v=sx_Pr8Szygk" target="_blank" class="flex justify-center mt-1 text-sm text-gray-300 underline">YouTube Demo</a>
              <a href="https://github.com/rideStack/RideStack" target="_blank" class="flex justify-center mt-1 text-sm text-gray-300 underline">GitHub Link</a>
              </div>

              <p class="mt-1 text-sm text-gray-300 text-center">
                RideStack is a luxury all-electric vehicle sales website. Users can create accounts and select electric vehicles to purchase.
              </p>
              <a href="https://ride-stack.netlify.app/" target='_blank' class="min-w-fit">
                <img class="m-auto mt-4 h-40 rounded" src='https://i.ibb.co/526Zbjs/Screenshot-2023-04-14-at-11-59-33-PM-2.png'></img>
              </a>
            </div>




			<div
              class="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-stone-50 hover:shadow-stone-50"
            >


              <h2><a href="https://masala-house.netlify.app/" target='_blank' class="flex justify-center text-xl font-bold text-white underline">Masala House</a></h2>
              
              <div class="flex justify-center gap-4">
   
              <a href="https://github.com/BobbyWhitacre27/masala_house" target="_blank" class="flex justify-center mt-1 text-sm text-gray-300 underline">GitHub Link</a>
              </div>

              <p class="mt-1 text-sm text-gray-300 text-center">
                Masala House is a made up indian resturant. Created to practice front-end skills with JavaScript and React.
              </p>
              <a href="https://masala-house.netlify.app//" target='_blank' class="min-w-fit">
                <img class="m-auto mt-4 h-40 rounded" src='https://i.ibb.co/7Q7y57v/Masala-House-Web-Page.png'></img>
              </a>
            </div>




            <div
              class="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-stone-50 hover:shadow-stone-50"
            >


              <h2><a href="https://rent-specials-calculator.netlify.app/" target='_blank' class="flex justify-center text-xl font-bold text-white underline">Rent Specials Calculator</a></h2>
              <a href="https://github.com/BobbyWhitacre27/rent_specials_calculator" target="_blank" class="flex justify-center mt-1 text-sm text-gray-300 underline">GitHub Link</a>

              <p class="mt-1 text-sm text-gray-300 text-center">
                This app was created to assist in my current property management role and quickly calculates rent specials for when I meet with clients.
              </p>
              <a href="https://rent-specials-calculator.netlify.app/" target='_blank' class="min-w-fit">
                <img class="m-auto mt-4 h-40 rounded" src='https://i.ibb.co/zrFRq23/Screenshot-2023-04-14-at-11-35-37-PM-2.png'></img>
              </a>
            </div>



            <div
              class="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-stone-50 hover:shadow-stone-50"
            >


              <h2><a href="https://prorationcalculator.netlify.app/" target='_blank' class="flex justify-center text-xl font-bold text-white underline">Rent Proration Calculator</a></h2>
              <a href="https://github.com/BobbyWhitacre27/proration_calculator" target="_blank" class="flex justify-center mt-1 text-sm text-gray-300 underline">GitHub Link</a>

              <p class="mt-1 text-sm text-gray-300 text-center">
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



            <div
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
            </div>


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
            <div class="grid p-6 bg-gray-700 rounded place-content-center sm:p-8">
              <div class="max-w-md mx-auto text-center lg:text-left">
                <header>
                  <h2 class="text-xl font-bold text-white sm:text-5xl">About me</h2>

                  <p class="mt-4 text-white">
                    Over 5 years of professional experience in the real estate and construction management industries.
                  </p>
                  <p class="mt-4 text-white">
                    Began learning to code in 2022. Have always had a nack for building things and now love creating my own apps.
                  </p>
                  <p class="mt-4 text-white">
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






      <footer aria-label="Site Footer" class="bg-gray-700 mt-12">
        <div class="mx-auto max-w-5xl px-4 py-8 sm:px-6 lg:px-8">
          <ul class="mt-4 mb-4  flex justify-center align-center gap-6 md:gap-8">
            <li>
              <a
                href="https://www.linkedin.com/in/bobby-whitacre/"
                rel="noreferrer"
                target="_blank"
                class="text-white underline"
              >
                LinkedIn

              </a>
            </li>

            <li>
              <a
                href="mailto: bobby.whitacre27@gmail.com"
                rel="noreferrer"
                target="_blank"
                class="text-white underline"
              >
                Email
  
              </a>
            </li>



            <li>
              <a
                href="https://github.com/BobbyWhitacre27"
                rel="noreferrer"
                target="_blank"
                class="text-white underline"
              >

                GitHub

              </a>
            </li>

          </ul>
        </div>
      </footer>



    </div>
  );
};

export default App;
