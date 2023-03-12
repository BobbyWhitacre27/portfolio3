import React, { useEffect } from 'react';

import '../style/App.css';

const App = () => {


  useEffect(() => {

  }, []);

  return (
    <div>

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
                Hello! I'm Bobby Whitacre, a Full-Stack Web Developer in the Washington D.C. area.
              </p>


              <h2 class="text-3xl font-bold py-8 sm:text-4xl">Skills</h2>
              <h2 class="text-3xl font-bold sm:text-xl">JavaScript, React, Express, SQL, HTML, CSS, Node & GitHub</h2>







            </div>
          </div>
        </div>
      </section>


      <section class="bg-gray-700 text-white">
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


              <h2><a href="https://remarkable-crumble-2115b5.netlify.app/" target='_blank' class="mt-4 text-xl font-bold text-white underline">RideStack - Work in Progress</a></h2>
              <a href="https://github.com/rideStack/RideStack" target="_blank" class="mt-1 text-sm text-gray-300 underline">GitHub Link</a>

              <p class="mt-1 text-sm text-gray-300">
                RideStack is a luxury all-electric vehicle sales website. Users can create accounts and select electric vehicles to purchase.
              </p>
            </div>

            <div
              class="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-stone-50 hover:shadow-stone-50"
              href="/services/digital-campaigns"
            >


              <h2><a href="https://calm-taiyaki-b6ef03.netlify.app/" target='_blank' class="mt-4 text-xl font-bold text-white underline">Fitness Tracker</a></h2>
              <a href="https://github.com/BobbyWhitacre27/UNIV_FitnessTrackr_Starter" target="_blank" class="mt-1 text-sm text-gray-300 underline">GitHub Link</a>


              <p class="mt-1 text-sm text-gray-300">
                Fitness Tracker is a fitness website where users can create accounts and make there own workout routines to share with others.
              </p>
            </div>

            <div
              class="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-stone-50 hover:shadow-stone-50"
              href="/services/digital-campaigns"
            >


              <h2><a href="https://stellar-klepon-e9797a.netlify.app" target='_blank' class="mt-4 text-xl font-bold text-white underline">Stranger's Things</a></h2>
              <a href="https://github.com/BobbyWhitacre27/Strangers_Things" target="_blank" class="mt-1 text-sm text-gray-300 underline">GitHub Link</a>

              <p class="mt-1 text-sm text-gray-300">
                Strangers Things is a marketplace like website similar to craigslist where users can post items for sale and message other users.
              </p>
            </div>

            <div
              class="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-stone-50 hover:shadow-stone-50"
              href="/services/digital-campaigns"
            >



              <h2><a href="https://bobbywhitacre27.github.io/cv/" target='_blank' class="mt-4 text-xl font-bold text-white underline">My Very First Site</a></h2>
              <a href="https://github.com/BobbyWhitacre27/cv" target="_blank" class="mt-1 text-sm text-gray-300 underline">GitHub Link</a>

              <p class="mt-1 text-sm text-gray-300">
                Est. July 2021 this was my very first website attempt. While not pretty, it shows how far I've come!
              </p>
            </div>


          </div>


        </div>
      </section>


      <section class="bg-white">
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

      <footer aria-label="Site Footer" class="bg-gray-100">
        <div class="mx-auto max-w-5xl px-4 py-8 sm:px-6 lg:px-8">
          <div class="flex justify-center text-l font-extrabold">Reach out!</div>
          <ul class="mt-6  flex justify-center align-center gap-6 md:gap-8">
            <li>
              <a
                href="https://www.linkedin.com/in/bobby-whitacre/"
                rel="noreferrer"
                target="_blank"
                class="text-gray-700 transition hover:text-gray-700/75"
              >

                <img class="h-12 w-12" src='https://cdn-icons-png.flaticon.com/128/3536/3536569.png' ></img>

              </a>
            </li>

            <li>
              <a
                href="mailto: bobby.whitacre27@gmail.com"
                rel="noreferrer"
                target="_blank"
                class="text-gray-700 transition hover:text-gray-700/75"
              >

                <img class="h-12 w-12" src='https://cdn-icons-png.flaticon.com/128/542/542689.png' ></img>

              </a>
            </li>



            <li>
              <a
                href="https://github.com/BobbyWhitacre27"
                rel="noreferrer"
                target="_blank"
                class="text-gray-700 transition hover:text-gray-700/75"
              >

                <img class="h-12 w-12" src='https://cdn-icons-png.flaticon.com/128/3291/3291695.png' ></img>
                
              </a>
            </li>

          </ul>
        </div>
      </footer>



    </div>
  );
};

export default App;
