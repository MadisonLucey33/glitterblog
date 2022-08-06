/*
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/typography'),
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/


/*


Blog 1
https://media.graphassets.com/wfPq1WYMQUuoWnVRTCeg

Blog 2
https://media.graphassets.com/OVgidt1hRLqYg5HpdxMK
https://media.graphassets.com/Z2HgIMy0TAWn0ghW4DHY
https://media.graphassets.com/3YkQYJNiQPqnaFSxIyRC
https://media.graphassets.com/CV7EZSxMRmKyTH8ynbuy




Photos:
Blog #1 An Instagam Worthy Road Trip
  * Red car 
  * Fence

Blog #2: The Windy City Chicago
  * 


*/




import { useState, useEffect } from 'react'
import { Disclosure, RadioGroup, Tab } from '@headlessui/react'
import { StarIcon } from '@heroicons/react/solid'
import { HeartIcon, MinusSmIcon, PlusSmIcon } from '@heroicons/react/outline'
import { getPostDetails } from '../services';
var getYouTubeID = require('get-youtube-id');

import YouTube from "react-youtube";

const product = {
 
  images: [
    {
      id: 1,
      name: 'blog-1',
      src: 'https://media.graphassets.com/wfPq1WYMQUuoWnVRTCeg',
     
    },
    {
        id: 2,
        name: 'blog-2',
        src: 'https://media.graphassets.com/OVgidt1hRLqYg5HpdxMK',
       
      },
      {
        id: 3,
        name: 'blog-2',
        src: 'https://media.graphassets.com/Z2HgIMy0TAWn0ghW4DHY',
       
      },
      {
        id: 4,
        name: 'blog-2',
        src: 'https://media.graphassets.com/3YkQYJNiQPqnaFSxIyRC',
       
      },
      {
        id: 5,
        name: 'blog-2',
        src: 'https://media.graphassets.com/CV7EZSxMRmKyTH8ynbuy',
       
      },
      // {
      //   id: 3,
      //   name: 'Angled view',
      //   src: 'https://media.graphassets.com/Z2HgIMy0TAWn0ghW4DHY',
      //  
      // },
      // {
      //   id: 3,
      //   name: 'Angled view',
      //   src: 'https://media.graphassets.com/Z2HgIMy0TAWn0ghW4DHY',
      //  
      // },
    // More images...
  ],
  colors: [
    { name: 'Washed Black', bgColor: 'bg-gray-700', selectedColor: 'ring-gray-700' },
    { name: 'White', bgColor: 'bg-white', selectedColor: 'ring-gray-400' },
    { name: 'Washed Gray', bgColor: 'bg-gray-500', selectedColor: 'ring-gray-500' },
  ],
  description: `
    <p>The Zip Tote Basket is the perfect midpoint between shopping tote and comfy backpack. With convertible straps, you can hand carry, should sling, or backpack this convenient and spacious bag. The zip top and durable canvas construction keeps your goods protected for all-day use.</p>
  `,
  details: [
    {
      name: 'Features',
      items: [
        'Multiple strap configurations',
        'Spacious interior with top zip',
        'Leather handle and tabs',
        'Interior dividers',
        'Stainless strap loops',
        'Double stitched construction',
        'Water-resistant',
      ],
    },
    // More sections...
  ],
}






function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example({slug}) {

  const [id, setId] = useState("https://youtube.com/shorts/mT8BIuKrzks");
  const [id2, setId2] = useState("https://youtube.com/shorts/sEt4PLfmnA8");
  const [id3, setId3] = useState("https://youtube.com/shorts/PC3uo8SwJTs");

  function handleChange(e) {
    // console.log(e.target.value);

    setId(getYouTubeID("https://youtube.com/shorts/mT8BIuKrzks"));
    setId2(getYouTubeID("https://youtube.com/shorts/mT8BIuKrzks"));
    setId3(getYouTubeID("https://youtube.com/shorts/PC3uo8SwJTs"));
  }
  const opts = {
    height: "390",
    width: "640",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1
    }
  };

  const getUpdatedPhoto = () => {
    // let slug = post.slug;
   
     switch(slug) {

/**
 * 
 *    
 *     1     _____________                           _________
 *          |             |       |\          |     |
 *          |             |       | \         |     |
 *          |             |       |  \        |     |
 *          |             |       |   \       |     |________
 *          |             |       |     \     |     |
 *          |             |       |       \   |     |
 *          |_____________|       |         \ |     |__________
 *        
 * 
 */

       case 'blog-1': // May 20, 2021
       return (
        <div className="bg-white ">
          <div className="max-w-2xl mx-auto   px-4 sm:pt-12 sm:pb-6 sm:px-6 lg:max-w-7xl lg:px-8">
            <div className="grid grid-cols-1 gap-x-8 items-start">
              {/* Image gallery */}
              <Tab.Group as="div" className="flex flex-col-reverse">
                {/* Image selector */}
                <div className="visible mt-6 w-full max-w-2xl mx-auto sm:block lg:max-w-none">
                  <Tab.List className="grid grid-cols-4 gap-6">
                    {/* {product.images.map((image) => ( */}
                      <Tab
                        // key={image.id}
                        className="relative h-52 bg-white rounded-md flex items-center justify-center text-sm font-medium uppercase text-gray-900 cursor-pointer hover:bg-gray-50 focus:outline-none focus:ring focus:ring-offset-4 focus:ring-opacity-50"
                      >
                        {({ selected }) => (
                          <>
                            
                            <span className="absolute inset-0 rounded-md overflow-hidden">
                              <img src={"https://media.graphassets.com/wfPq1WYMQUuoWnVRTCeg"} alt="" className="w-full h-full object-center object-cover" />
                            </span>
                            <span
                              className={classNames(
                                selected ? 'ring-indigo-500' : 'ring-transparent',
                                'absolute inset-0 rounded-md ring-2 ring-offset-2 pointer-events-none'
                              )}
                              aria-hidden="true"
                            />
                          </>
                        )}
                      </Tab>


                      <Tab
                        // key={image.id}
                        className="relative h-52 bg-white rounded-md flex items-center justify-center text-sm font-medium uppercase text-gray-900 cursor-pointer hover:bg-gray-50 focus:outline-none focus:ring focus:ring-offset-4 focus:ring-opacity-50"
                      >
                        {({ selected }) => (
                          <>
                            
                            <span className="absolute inset-0 rounded-md overflow-hidden">
                              <img src={"https://media.graphassets.com/zES9BuMvQzuj2tLuvlbd"} alt="" className="w-full h-full object-center object-cover" />
                            </span>
                            <span
                              className={classNames(
                                selected ? 'ring-indigo-500' : 'ring-transparent',
                                'absolute inset-0 rounded-md ring-2 ring-offset-2 pointer-events-none'
                              )}
                              aria-hidden="true"
                            />
                          </>
                        )}
                      </Tab>

                      
                  
                  </Tab.List>
                </div>
    
                <Tab.Panels className="w-full aspect-w-1 aspect-h-1">
                 
                    <Tab.Panel key={1}>
                      <img
                        src={"https://media.graphassets.com/wfPq1WYMQUuoWnVRTCeg"}
                        alt={"hey"}
                        className="w-full h-full object-center object-cover sm:rounded-lg"
                      />
                      
                    </Tab.Panel>

                    <Tab.Panel key={1}>
                      <img
                        src={"https://media.graphassets.com/zES9BuMvQzuj2tLuvlbd"}
                        alt={"hey"}
                        className="w-full h-full object-center object-cover sm:rounded-lg"
                      />
                      
                    </Tab.Panel>
                 
                </Tab.Panels>
              </Tab.Group>
    
           
            </div>
          </div>
        </div>
      )




















































      






















      






















      






















      






















      






















      






















      






















      


       case 'blog-2': // Sat May 22, 2021 CHICAGO
       return (
        <div className="bg-white">
          <div className="max-w-2xl mx-auto   px-4 sm:pt-12 sm:pb-6 sm:px-6 lg:max-w-7xl lg:px-8">
            <div className="grid grid-cols-1 gap-x-8 items-start">
              {/* Image gallery */}
              <Tab.Group as="div" className="flex flex-col-reverse">
                {/* Image selector */}
                <div className="visible mt-6 w-full max-w-2xl mx-auto sm:block lg:max-w-none">
                  <Tab.List className="grid grid-cols-4 gap-6">
                    {/* {product.images.map((image) => ( */}
                      <Tab
                        // key={image.id}
                        className="relative h-52 bg-white rounded-md flex items-center justify-center text-sm font-medium uppercase text-gray-900 cursor-pointer hover:bg-gray-50 focus:outline-none focus:ring focus:ring-offset-4 focus:ring-opacity-50"
                      >
                        {({ selected }) => (
                          <>
                            
                            <span className="absolute inset-0 rounded-md overflow-hidden">
                              <img src={"https://media.graphassets.com/KypzsaBOREuO7uiMEhvc"} alt="" className="w-full h-full object-center object-cover" />
                            </span>
                            <span
                              className={classNames(
                                selected ? 'ring-indigo-500' : 'ring-transparent',
                                'absolute inset-0 rounded-md ring-2 ring-offset-2 pointer-events-none'
                              )}
                              aria-hidden="true"
                            />
                          </>
                        )}
                      </Tab>


                      <Tab
                        // key={image.id}
                        className="relative h-52 bg-white rounded-md flex items-center justify-center text-sm font-medium uppercase text-gray-900 cursor-pointer hover:bg-gray-50 focus:outline-none focus:ring focus:ring-offset-4 focus:ring-opacity-50"
                      >
                        {({ selected }) => (
                          <>
                            
                            <span className="absolute inset-0 rounded-md overflow-hidden">
                              <img src={"https://media.graphassets.com/hxfalxbUTJmIIvO4Untc"} alt="" className="w-full h-full object-center object-cover" />
                            </span>
                            <span
                              className={classNames(
                                selected ? 'ring-indigo-500' : 'ring-transparent',
                                'absolute inset-0 rounded-md ring-2 ring-offset-2 pointer-events-none'
                              )}
                              aria-hidden="true"
                            />
                          </>
                        )}
                      </Tab>


                      <Tab
                        // key={image.id}
                        className="relative h-52 bg-white rounded-md flex items-center justify-center text-sm font-medium uppercase text-gray-900 cursor-pointer hover:bg-gray-50 focus:outline-none focus:ring focus:ring-offset-4 focus:ring-opacity-50"
                      >
                        {({ selected }) => (
                          <>
                            
                            <span className="absolute inset-0 rounded-md overflow-hidden">
                              <img src={"https://media.graphassets.com/kue5AuzASl2DpvSrMfTQ"} alt="" className="w-full h-full object-center object-cover" />
                            </span>
                            <span
                              className={classNames(
                                selected ? 'ring-indigo-500' : 'ring-transparent',
                                'absolute inset-0 rounded-md ring-2 ring-offset-2 pointer-events-none'
                              )}
                              aria-hidden="true"
                            />
                          </>
                        )}
                      </Tab>

                      <Tab
                        // key={image.id}
                        className="relative h-52 bg-white rounded-md flex items-center justify-center text-sm font-medium uppercase text-gray-900 cursor-pointer hover:bg-gray-50 focus:outline-none focus:ring focus:ring-offset-4 focus:ring-opacity-50"
                      >
                        {({ selected }) => (
                          <>
                            
                            <span className="absolute inset-0 rounded-md overflow-hidden">
                              <img src={"https://media.graphassets.com/NC4vc4sJTSKZd3F0hQRo"} alt="" className="w-full h-full object-center object-cover" />
                            </span>
                            <span
                              className={classNames(
                                selected ? 'ring-indigo-500' : 'ring-transparent',
                                'absolute inset-0 rounded-md ring-2 ring-offset-2 pointer-events-none'
                              )}
                              aria-hidden="true"
                            />
                          </>
                        )}
                      </Tab>

                      <Tab
                        // key={image.id}
                        className="relative h-52 bg-white rounded-md flex items-center justify-center text-sm font-medium uppercase text-gray-900 cursor-pointer hover:bg-gray-50 focus:outline-none focus:ring focus:ring-offset-4 focus:ring-opacity-50"
                      >
                        {({ selected }) => (
                          <>
                            
                            <span className="absolute inset-0 rounded-md overflow-hidden">
                              <img src={"https://media.graphassets.com/F6UAEPMeRrGKWWRfMoqW"} alt="" className="w-full h-full object-center object-cover" />
                            </span>
                            <span
                              className={classNames(
                                selected ? 'ring-indigo-500' : 'ring-transparent',
                                'absolute inset-0 rounded-md ring-2 ring-offset-2 pointer-events-none'
                              )}
                              aria-hidden="true"
                            />
                          </>
                        )}
                      </Tab>


                      <Tab
                        // key={image.id}
                        className="relative h-52 bg-white rounded-md flex items-center justify-center text-sm font-medium uppercase text-gray-900 cursor-pointer hover:bg-gray-50 focus:outline-none focus:ring focus:ring-offset-4 focus:ring-opacity-50"
                      >
                        {({ selected }) => (
                          <>
                            
                            <span className="absolute inset-0 rounded-md overflow-hidden">
                              <img src={"https://media.graphassets.com/UM7Q9uhRLmcHBFUcZ5j3"} alt="" className="w-full h-full object-center object-cover" />
                            </span>
                            <span
                              className={classNames(
                                selected ? 'ring-indigo-500' : 'ring-transparent',
                                'absolute inset-0 rounded-md ring-2 ring-offset-2 pointer-events-none'
                              )}
                              aria-hidden="true"
                            />
                          </>
                        )}
                      </Tab>


                      {/* <Tab chicago river walk could add back
                        // key={image.id}
                        className="relative h-52 bg-white rounded-md flex items-center justify-center text-sm font-medium uppercase text-gray-900 cursor-pointer hover:bg-gray-50 focus:outline-none focus:ring focus:ring-offset-4 focus:ring-opacity-50"
                      >
                        {({ selected }) => (
                          <>
                            
                            <span className="absolute inset-0 rounded-md overflow-hidden">
                              <img src={"https://media.graphassets.com/N0ha1ajSTlCHGBh776ia"} alt="" className="w-full h-full object-center object-cover" />
                            </span>
                            <span
                              className={classNames(
                                selected ? 'ring-indigo-500' : 'ring-transparent',
                                'absolute inset-0 rounded-md ring-2 ring-offset-2 pointer-events-none'
                              )}
                              aria-hidden="true"
                            />
                          </>
                        )}
                      </Tab> */}


                      <Tab
                        // key={image.id}
                        className="relative h-52 bg-white rounded-md flex items-center justify-center text-sm font-medium uppercase text-gray-900 cursor-pointer hover:bg-gray-50 focus:outline-none focus:ring focus:ring-offset-4 focus:ring-opacity-50"
                      >
                        {({ selected }) => (
                          <>
                            
                            <span className="absolute inset-0 rounded-md overflow-hidden">
                              <img src={"https://media.graphassets.com/gHFpq3q7Qu2vrai0adKQ"} alt="" className="w-full h-full object-center object-cover" />
                            </span>
                            <span
                              className={classNames(
                                selected ? 'ring-indigo-500' : 'ring-transparent',
                                'absolute inset-0 rounded-md ring-2 ring-offset-2 pointer-events-none'
                              )}
                              aria-hidden="true"
                            />
                          </>
                        )}
                      </Tab>



                      <Tab
                        // key={image.id}
                        className="relative h-52 bg-white rounded-md flex items-center justify-center text-sm font-medium uppercase text-gray-900 cursor-pointer hover:bg-gray-50 focus:outline-none focus:ring focus:ring-offset-4 focus:ring-opacity-50"
                      >
                        {({ selected }) => (
                          <>
                            
                            <span className="absolute inset-0 rounded-md overflow-hidden">
                              <img src={"https://media.graphassets.com/qwI12PZuQ50S4Sdh6yxA"} alt="" className="w-full h-full object-center object-cover" />
                            </span>
                            <span
                              className={classNames(
                                selected ? 'ring-indigo-500' : 'ring-transparent',
                                'absolute inset-0 rounded-md ring-2 ring-offset-2 pointer-events-none'
                              )}
                              aria-hidden="true"
                            />
                          </>
                        )}
                      </Tab>


                      <Tab
                        // key={image.id}
                        className="relative h-52 bg-white rounded-md flex items-center justify-center text-sm font-medium uppercase text-gray-900 cursor-pointer hover:bg-gray-50 focus:outline-none focus:ring focus:ring-offset-4 focus:ring-opacity-50"
                      >
                        {({ selected }) => (
                          <>
                            
                            <span className="absolute inset-0 rounded-md overflow-hidden">
                              <img src={"https://media.graphassets.com/AxUeSB4oRAqRvNzukckM"} alt="" className="w-full h-full object-center object-cover" />
                            </span>
                            <span
                              className={classNames(
                                selected ? 'ring-indigo-500' : 'ring-transparent',
                                'absolute inset-0 rounded-md ring-2 ring-offset-2 pointer-events-none'
                              )}
                              aria-hidden="true"
                            />
                          </>
                        )}
                      </Tab>


                      <Tab
                        // key={image.id}
                        className="relative h-52 bg-white rounded-md flex items-center justify-center text-sm font-medium uppercase text-gray-900 cursor-pointer hover:bg-gray-50 focus:outline-none focus:ring focus:ring-offset-4 focus:ring-opacity-50"
                      >
                        {({ selected }) => (
                          <>
                            
                            <span className="absolute inset-0 rounded-md overflow-hidden">
                              <img src={"https://media.graphassets.com/jTPgaOYYTgqmRs5xE3DZ"} alt="" className="w-full h-full object-center object-cover" />
                            </span>
                            <span
                              className={classNames(
                                selected ? 'ring-indigo-500' : 'ring-transparent',
                                'absolute inset-0 rounded-md ring-2 ring-offset-2 pointer-events-none'
                              )}
                              aria-hidden="true"
                            />
                          </>
                        )}
                      </Tab>


                      <Tab
                        // key={image.id}
                        className="relative h-52 bg-white rounded-md flex items-center justify-center text-sm font-medium uppercase text-gray-900 cursor-pointer hover:bg-gray-50 focus:outline-none focus:ring focus:ring-offset-4 focus:ring-opacity-50"
                      >
                        {({ selected }) => (
                          <>
                            
                            <span className="absolute inset-0 rounded-md overflow-hidden">
                              <img src={"https://media.graphassets.com/wJVz66YmR92e9nPoFHz8"} alt="" className="w-full h-full object-center object-cover" />
                            </span>
                            <span
                              className={classNames(
                                selected ? 'ring-indigo-500' : 'ring-transparent',
                                'absolute inset-0 rounded-md ring-2 ring-offset-2 pointer-events-none'
                              )}
                              aria-hidden="true"
                            />
                          </>
                        )}
                      </Tab>


                      <Tab
                        // key={image.id}
                        className="relative h-52 bg-white rounded-md flex items-center justify-center text-sm font-medium uppercase text-gray-900 cursor-pointer hover:bg-gray-50 focus:outline-none focus:ring focus:ring-offset-4 focus:ring-opacity-50"
                      >
                        {({ selected }) => (
                          <>
                            
                            <span className="absolute inset-0 rounded-md overflow-hidden">
                              <img src={"https://media.graphassets.com/BYZeL4MPQdOpDX43AWfh"} alt="" className="w-full h-full object-center object-cover" />
                            </span>
                            <span
                              className={classNames(
                                selected ? 'ring-indigo-500' : 'ring-transparent',
                                'absolute inset-0 rounded-md ring-2 ring-offset-2 pointer-events-none'
                              )}
                              aria-hidden="true"
                            />
                          </>
                        )}
                      </Tab>




                     
                  
                  </Tab.List>
                </div>
    
                <Tab.Panels className="w-full aspect-w-1 aspect-h-1">
                 
                <Tab.Panel key={1}>
                      <img
                        src={"https://media.graphassets.com/KypzsaBOREuO7uiMEhvc"} // cotton candy
                        alt={"hey"}
                        className="w-full h-full object-center object-cover sm:rounded-lg"
                      />
                      
                    </Tab.Panel>

                    <Tab.Panel key={1}>
                      <img
                        src={"https://media.graphassets.com/hxfalxbUTJmIIvO4Untc"} // cotton candy
                        alt={"hey"}
                        className="w-full h-full object-center object-cover sm:rounded-lg"
                      />
                      
                    </Tab.Panel>

                    <Tab.Panel key={1}>
                      <img
                        src={"https://media.graphassets.com/kue5AuzASl2DpvSrMfTQ"} // cotton candy
                        alt={"hey"}
                        className="w-full h-full object-center object-cover sm:rounded-lg"
                      />
                      
                    </Tab.Panel>


                    <Tab.Panel key={1}>
                      <img
                        src={"https://media.graphassets.com/NC4vc4sJTSKZd3F0hQRo"} // cotton candy
                        alt={"hey"}
                        className="w-full h-full object-center object-cover sm:rounded-lg"
                      />
                      
                    </Tab.Panel>

                    <Tab.Panel key={1}>
                      <img
                        src={"https://media.graphassets.com/F6UAEPMeRrGKWWRfMoqW"} // cotton candy
                        alt={"hey"}
                        className="w-full h-full object-center object-cover sm:rounded-lg"
                      />
                      
                    </Tab.Panel>


                    <Tab.Panel key={1}>
                      <img
                        src={"https://media.graphassets.com/UM7Q9uhRLmcHBFUcZ5j3"} // cotton candy
                        alt={"hey"}
                        className="w-full h-full object-center object-cover sm:rounded-lg"
                      />
                      
                    </Tab.Panel>


                    {/* <Tab.Panel key={1}>
                      <img
                        src={"https://media.graphassets.com/N0ha1ajSTlCHGBh776ia"} // cotton candy
                        alt={"hey"}
                        className="w-full h-full object-center object-cover sm:rounded-lg"
                      />
                      
                    </Tab.Panel> */}


                    <Tab.Panel key={1}>
                      <img
                        src={"https://media.graphassets.com/gHFpq3q7Qu2vrai0adKQ"} // cotton candy
                        alt={"hey"}
                        className="w-full h-full object-center object-cover sm:rounded-lg"
                      />
                      
                    </Tab.Panel>


                    <Tab.Panel key={1}>
                      <img
                        src={"https://media.graphassets.com/qwI12PZuQ50S4Sdh6yxA"} // cotton candy
                        alt={"hey"}
                        className="w-full h-full object-center object-cover sm:rounded-lg"
                      />
                      
                    </Tab.Panel>


                    <Tab.Panel key={1}>
                      <img
                        src={"https://media.graphassets.com/AxUeSB4oRAqRvNzukckM"} // cotton candy
                        alt={"hey"}
                        className="w-full h-full object-center object-cover sm:rounded-lg"
                      />
                      
                    </Tab.Panel>

                    <Tab.Panel key={1}>
                      <img
                        src={"https://media.graphassets.com/jTPgaOYYTgqmRs5xE3DZ"} // cotton candy
                        alt={"hey"}
                        className="w-full h-full object-center object-cover sm:rounded-lg"
                      />
                      
                    </Tab.Panel>


                    <Tab.Panel key={1}>
                      <img
                        src={"https://media.graphassets.com/wJVz66YmR92e9nPoFHz8"} // cotton candy
                        alt={"hey"}
                        className="w-full h-full object-center object-cover sm:rounded-lg"
                      />
                      
                    </Tab.Panel>


                    
                    <Tab.Panel key={1}>
                      <img
                        src={"https://media.graphassets.com/BYZeL4MPQdOpDX43AWfh"} // cotton candy
                        alt={"hey"}
                        className="w-full h-full object-center object-cover sm:rounded-lg"
                      />
                      
                    </Tab.Panel>



                  

            
                 
                </Tab.Panels>
              </Tab.Group>
    
           
            </div>
          </div>
        </div>
      )

























      






















      






















      






















      






















      






















      






















      


       case 'blog-3': // Sun May 24, 2021 Chicago #2
       return (
        <div className="bg-white">
          <div className="max-w-2xl mx-auto   px-4 sm:pt-12 sm:pb-6 sm:px-6 lg:max-w-7xl lg:px-8">
            <div className="grid grid-cols-1 gap-x-8 items-start">
              {/* Image gallery */}
              <Tab.Group as="div" className="flex flex-col-reverse">
                {/* Image selector */}
                <div className="visible mt-6 w-full max-w-2xl mx-auto sm:block lg:max-w-none">
                  <Tab.List className="grid grid-cols-4 gap-6">
                    {/* {product.images.map((image) => ( */}
                      <Tab
                        // key={image.id}
                        className="relative h-52 bg-white rounded-md flex items-center justify-center text-sm font-medium uppercase text-gray-900 cursor-pointer hover:bg-gray-50 focus:outline-none focus:ring focus:ring-offset-4 focus:ring-opacity-50"
                      >
                        {({ selected }) => (
                          <>
                            
                            <span className="absolute inset-0 rounded-md overflow-hidden">
                              <img src={"https://media.graphassets.com/7l2QPMQJR0u7kztxdVn7"} alt="" className="w-full h-full object-center object-cover" />
                            </span>
                            <span
                              className={classNames(
                                selected ? 'ring-indigo-500' : 'ring-transparent',
                                'absolute inset-0 rounded-md ring-2 ring-offset-2 pointer-events-none'
                              )}
                              aria-hidden="true"
                            />
                          </>
                        )}
                      </Tab>

                      <Tab
                        // key={image.id}
                        className="relative h-52 bg-white rounded-md flex items-center justify-center text-sm font-medium uppercase text-gray-900 cursor-pointer hover:bg-gray-50 focus:outline-none focus:ring focus:ring-offset-4 focus:ring-opacity-50"
                      >
                        {({ selected }) => (
                          <>
                            
                            <span className="absolute inset-0 rounded-md overflow-hidden">
                              <img src={"https://media.graphassets.com/G7ezVnyYRcONI938hsBE"} alt="" className="w-full h-full object-center object-cover" />
                            </span>
                            <span
                              className={classNames(
                                selected ? 'ring-indigo-500' : 'ring-transparent',
                                'absolute inset-0 rounded-md ring-2 ring-offset-2 pointer-events-none'
                              )}
                              aria-hidden="true"
                            />
                          </>
                        )}
                      </Tab>


                      <Tab
                        // key={image.id}
                        className="relative h-52 bg-white rounded-md flex items-center justify-center text-sm font-medium uppercase text-gray-900 cursor-pointer hover:bg-gray-50 focus:outline-none focus:ring focus:ring-offset-4 focus:ring-opacity-50"
                      >
                        {({ selected }) => (
                          <>
                            
                            <span className="absolute inset-0 rounded-md overflow-hidden">
                              <img src={"https://media.graphassets.com/GYpl30q6Rmdmzoh07fBQ"} alt="" className="w-full h-full object-center object-cover" />
                            </span>
                            <span
                              className={classNames(
                                selected ? 'ring-indigo-500' : 'ring-transparent',
                                'absolute inset-0 rounded-md ring-2 ring-offset-2 pointer-events-none'
                              )}
                              aria-hidden="true"
                            />
                          </>
                        )}
                      </Tab>


                      <Tab
                        // key={image.id}
                        className="relative h-52 bg-white rounded-md flex items-center justify-center text-sm font-medium uppercase text-gray-900 cursor-pointer hover:bg-gray-50 focus:outline-none focus:ring focus:ring-offset-4 focus:ring-opacity-50"
                      >
                        {({ selected }) => (
                          <>
                            
                            <span className="absolute inset-0 rounded-md overflow-hidden">
                              <img src={"https://media.graphassets.com/KvYYsjx6TDGvZUrdYGmp"} alt="" className="w-full h-full object-center object-cover" />
                            </span>
                            <span
                              className={classNames(
                                selected ? 'ring-indigo-500' : 'ring-transparent',
                                'absolute inset-0 rounded-md ring-2 ring-offset-2 pointer-events-none'
                              )}
                              aria-hidden="true"
                            />
                          </>
                        )}
                      </Tab>


                      <Tab
                        // key={image.id}
                        className="relative h-52 bg-white rounded-md flex items-center justify-center text-sm font-medium uppercase text-gray-900 cursor-pointer hover:bg-gray-50 focus:outline-none focus:ring focus:ring-offset-4 focus:ring-opacity-50"
                      >
                        {({ selected }) => (
                          <>
                            
                            <span className="absolute inset-0 rounded-md overflow-hidden">
                              <img src={"https://media.graphassets.com/KDOkDNvmTMGjbh278tyM"} alt="" className="w-full h-full object-center object-cover" />
                            </span>
                            <span
                              className={classNames(
                                selected ? 'ring-indigo-500' : 'ring-transparent',
                                'absolute inset-0 rounded-md ring-2 ring-offset-2 pointer-events-none'
                              )}
                              aria-hidden="true"
                            />
                          </>
                        )}
                      </Tab>


                      <Tab 
                        // key={image.id}
                        className="relative h-52 bg-white rounded-md flex items-center justify-center text-sm font-medium uppercase text-gray-900 cursor-pointer hover:bg-gray-50 focus:outline-none focus:ring focus:ring-offset-4 focus:ring-opacity-50"
                      >
                        {({ selected }) => (
                          <>
                            
                            <span className="absolute inset-0 rounded-md overflow-hidden">
                              <img src={"https://media.graphassets.com/gJXxNS6THStrKPxVb4cA"} alt="" className="w-full h-full object-center object-cover" />
                            </span>
                            <span
                              className={classNames(
                                selected ? 'ring-indigo-500' : 'ring-transparent',
                                'absolute inset-0 rounded-md ring-2 ring-offset-2 pointer-events-none'
                              )}
                              aria-hidden="true"
                            />
                          </>
                        )}
                      </Tab>

                      <Tab
                        // key={image.id}
                        className="relative h-52 bg-white rounded-md flex items-center justify-center text-sm font-medium uppercase text-gray-900 cursor-pointer hover:bg-gray-50 focus:outline-none focus:ring focus:ring-offset-4 focus:ring-opacity-50"
                      >
                        {({ selected }) => (
                          <>
                            
                            <span className="absolute inset-0 rounded-md overflow-hidden">
                              <img src={"https://media.graphassets.com/lyOGenBBS6c7vUDUYluw"} alt="" className="w-full h-full object-center object-cover" />
                            </span>
                            <span
                              className={classNames(
                                selected ? 'ring-indigo-500' : 'ring-transparent',
                                'absolute inset-0 rounded-md ring-2 ring-offset-2 pointer-events-none'
                              )}
                              aria-hidden="true"
                            />
                          </>
                        )}
                      </Tab>


                      <Tab
                        // key={image.id}
                        className="relative h-52 bg-white rounded-md flex items-center justify-center text-sm font-medium uppercase text-gray-900 cursor-pointer hover:bg-gray-50 focus:outline-none focus:ring focus:ring-offset-4 focus:ring-opacity-50"
                      >
                        {({ selected }) => (
                          <>
                            
                            <span className="absolute inset-0 rounded-md overflow-hidden">
                              <img src={"https://media.graphassets.com/9Fb9lX7HSBSvK98omxY9"} alt="" className="w-full h-full object-center object-cover" />
                            </span>
                            <span
                              className={classNames(
                                selected ? 'ring-indigo-500' : 'ring-transparent',
                                'absolute inset-0 rounded-md ring-2 ring-offset-2 pointer-events-none'
                              )}
                              aria-hidden="true"
                            />
                          </>
                        )}
                      </Tab>


                      <Tab
                        // key={image.id}
                        className="relative h-52 bg-white rounded-md flex items-center justify-center text-sm font-medium uppercase text-gray-900 cursor-pointer hover:bg-gray-50 focus:outline-none focus:ring focus:ring-offset-4 focus:ring-opacity-50"
                      >
                        {({ selected }) => (
                          <>
                            
                            <span className="absolute inset-0 rounded-md overflow-hidden">
                              <img src={"https://media.graphassets.com/9fGjSgnSSC6WzXXE1eRu"} alt="" className="w-full h-full object-center object-cover" />
                            </span>
                            <span
                              className={classNames(
                                selected ? 'ring-indigo-500' : 'ring-transparent',
                                'absolute inset-0 rounded-md ring-2 ring-offset-2 pointer-events-none'
                              )}
                              aria-hidden="true"
                            />
                          </>
                        )}
                      </Tab>


                      <Tab
                        // key={image.id}
                        className="relative h-52 bg-white rounded-md flex items-center justify-center text-sm font-medium uppercase text-gray-900 cursor-pointer hover:bg-gray-50 focus:outline-none focus:ring focus:ring-offset-4 focus:ring-opacity-50"
                      >
                        {({ selected }) => (
                          <>
                            
                            <span className="absolute inset-0 rounded-md overflow-hidden">
                              <img src={"https://media.graphassets.com/9asQBhRSxuBAdlDan91l"} alt="" className="w-full h-full object-center object-cover" />
                            </span>
                            <span
                              className={classNames(
                                selected ? 'ring-indigo-500' : 'ring-transparent',
                                'absolute inset-0 rounded-md ring-2 ring-offset-2 pointer-events-none'
                              )}
                              aria-hidden="true"
                            />
                          </>
                        )}
                      </Tab>


                      <Tab
                        // key={image.id}
                        className="relative h-52 bg-white rounded-md flex items-center justify-center text-sm font-medium uppercase text-gray-900 cursor-pointer hover:bg-gray-50 focus:outline-none focus:ring focus:ring-offset-4 focus:ring-opacity-50"
                      >
                        {({ selected }) => (
                          <>
                            
                            <span className="absolute inset-0 rounded-md overflow-hidden">
                              <img src={"https://media.graphassets.com/qTol7suTJShH9TokOZ6L"} alt="" className="w-full h-full object-center object-cover" />
                            </span>
                            <span
                              className={classNames(
                                selected ? 'ring-indigo-500' : 'ring-transparent',
                                'absolute inset-0 rounded-md ring-2 ring-offset-2 pointer-events-none'
                              )}
                              aria-hidden="true"
                            />
                          </>
                        )}
                      </Tab>


                      <Tab
                        // key={image.id}
                        className="relative h-52 bg-white rounded-md flex items-center justify-center text-sm font-medium uppercase text-gray-900 cursor-pointer hover:bg-gray-50 focus:outline-none focus:ring focus:ring-offset-4 focus:ring-opacity-50"
                      >
                        {({ selected }) => (
                          <>
                            
                            <span className="absolute inset-0 rounded-md overflow-hidden">
                              <img src={"https://media.graphassets.com/iGbFx9ZRRDKetDmCwMz0"} alt="" className="w-full h-full object-center object-cover" />
                            </span>
                            <span
                              className={classNames(
                                selected ? 'ring-indigo-500' : 'ring-transparent',
                                'absolute inset-0 rounded-md ring-2 ring-offset-2 pointer-events-none'
                              )}
                              aria-hidden="true"
                            />
                          </>
                        )}
                      </Tab>


                      <Tab
                        // key={image.id}
                        className="relative h-52 bg-white rounded-md flex items-center justify-center text-sm font-medium uppercase text-gray-900 cursor-pointer hover:bg-gray-50 focus:outline-none focus:ring focus:ring-offset-4 focus:ring-opacity-50"
                      >
                        {({ selected }) => (
                          <>
                            
                            <span className="absolute inset-0 rounded-md overflow-hidden">
                              <img src={"https://media.graphassets.com/n7a47ULfQzewUuR86OIv"} alt="" className="w-full h-full object-center object-cover" />
                            </span>
                            <span
                              className={classNames(
                                selected ? 'ring-indigo-500' : 'ring-transparent',
                                'absolute inset-0 rounded-md ring-2 ring-offset-2 pointer-events-none'
                              )}
                              aria-hidden="true"
                            />
                          </>
                        )}
                      </Tab>
                  
                  </Tab.List>
                </div>
    
                <Tab.Panels className="w-full aspect-w-1 aspect-h-1">
                 
                    <Tab.Panel key={1}>
                      <img
                        src={"https://media.graphassets.com/7l2QPMQJR0u7kztxdVn7"}
                        alt={"hey"}
                        className="w-full h-full object-center object-cover sm:rounded-lg"
                      />
                      
                    </Tab.Panel>


                    <Tab.Panel key={1}>
                      <img
                        src={"https://media.graphassets.com/G7ezVnyYRcONI938hsBE"}
                        alt={"hey"}
                        className="w-full h-full object-center object-cover sm:rounded-lg"
                      />
                      
                    </Tab.Panel>


                    <Tab.Panel key={1}>
                      <img
                        src={"https://media.graphassets.com/GYpl30q6Rmdmzoh07fBQ"}
                        alt={"hey"}
                        className="w-full h-full object-center object-cover sm:rounded-lg"
                      />
                      
                    </Tab.Panel>


                    <Tab.Panel key={1}>
                      <img
                        src={"https://media.graphassets.com/KvYYsjx6TDGvZUrdYGmp"}
                        alt={"hey"}
                        className="w-full h-full object-center object-cover sm:rounded-lg"
                      />
                      
                    </Tab.Panel>

                    <Tab.Panel key={1}>
                      <img
                        src={"https://media.graphassets.com/KDOkDNvmTMGjbh278tyM"}
                        alt={"hey"}
                        className="w-full h-full object-center object-cover sm:rounded-lg"
                      />
                      
                    </Tab.Panel>


                    <Tab.Panel key={1}>
                      <img
                        src={"https://media.graphassets.com/gJXxNS6THStrKPxVb4cA"}
                        alt={"hey"}
                        className="w-full h-full object-center object-cover sm:rounded-lg"
                      />
                      
                    </Tab.Panel>



                    <Tab.Panel key={1}>
                      <img
                        src={"https://media.graphassets.com/lyOGenBBS6c7vUDUYluw"}
                        alt={"hey"}
                        className="w-full h-full object-center object-cover sm:rounded-lg"
                      />
                      
                    </Tab.Panel>

                    <Tab.Panel key={1}>
                      <img
                        src={"https://media.graphassets.com/9Fb9lX7HSBSvK98omxY9"}
                        alt={"hey"}
                        className="w-full h-full object-center object-cover sm:rounded-lg"
                      />
                      
                    </Tab.Panel>

                    <Tab.Panel key={1}>
                      <img
                        src={"https://media.graphassets.com/9fGjSgnSSC6WzXXE1eRu"}
                        alt={"hey"}
                        className="w-full h-full object-center object-cover sm:rounded-lg"
                      />
                      
                    </Tab.Panel>


                    <Tab.Panel key={1}>
                      <img
                        src={"https://media.graphassets.com/9asQBhRSxuBAdlDan91l"}
                        alt={"hey"}
                        className="w-full h-full object-center object-cover sm:rounded-lg"
                      />
                      
                    </Tab.Panel>


                    <Tab.Panel key={1}>
                      <img
                        src={"https://media.graphassets.com/qTol7suTJShH9TokOZ6L"}
                        alt={"hey"}
                        className="w-full h-full object-center object-cover sm:rounded-lg"
                      />
                      
                    </Tab.Panel>


                    <Tab.Panel key={1}>
                      <img
                        src={"https://media.graphassets.com/iGbFx9ZRRDKetDmCwMz0"}
                        alt={"hey"}
                        className="w-full h-full object-center object-cover sm:rounded-lg"
                      />
                      
                    </Tab.Panel>


                    <Tab.Panel key={1}>
                      <img
                        src={"https://media.graphassets.com/n7a47ULfQzewUuR86OIv"}
                        alt={"hey"}
                        className="w-full h-full object-center object-cover sm:rounded-lg"
                      />
                      
                    </Tab.Panel>
                 
                </Tab.Panels>
              </Tab.Group>
    
           
            </div>
          </div>
        </div>
      )
      


















      


















      


















      


















      


















      


















      


















      


















      


















      


















      


















      

















                                
      
       case 'blog-4': // Tue May 25, 2021 Missouri // removed py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8    from   <div className="max-w-2xl mx-auto  ">
       return (   // px-4 makes the image unnecessarily smaller in width
        <div className="bg-white ">
          <div className="max-w-2xl mx-auto   px-4 sm:pt-12 sm:pb-6 sm:px-6 lg:max-w-7xl lg:px-8">
            <div className="grid grid-cols-1 gap-x-8 items-start">
              {/* Image gallery */}
              <Tab.Group as="div" className="flex flex-col-reverse">
                {/* Image selector */}
                <div className="visible mt-6 w-full max-w-2xl mx-auto sm:block lg:max-w-none">
                  <Tab.List className="grid grid-cols-4 gap-6">
                    {/* {product.images.map((image) => ( */}
                     

                      {/* <Tab
                        // key={image.id}
                        className="relative h-52 bg-white rounded-md flex items-center justify-center text-sm font-medium uppercase text-gray-900 cursor-pointer hover:bg-gray-50 focus:outline-none focus:ring focus:ring-offset-4 focus:ring-opacity-50"
                      >
                        {({ selected }) => (
                          <>
                            
                            <span className="absolute inset-0 rounded-md overflow-hidden">
                              <img src={"https://media.graphassets.com/Fl9aEcaVS42OEL4CiEIw"} alt="" className="w-full h-full object-center object-cover" />
                            </span>
                            <span
                              className={classNames(
                                selected ? 'ring-indigo-500' : 'ring-transparent',
                                'absolute inset-0 rounded-md ring-2 ring-offset-2 pointer-events-none'
                              )}
                              aria-hidden="true"
                            />
                          </>
                        )}
                      </Tab> */}

                      <Tab
                        // key={image.id}
                        className="relative h-52 bg-white rounded-md flex items-center justify-center text-sm font-medium uppercase text-gray-900 cursor-pointer hover:bg-gray-50 focus:outline-none focus:ring focus:ring-offset-4 focus:ring-opacity-50"
                      >
                        {({ selected }) => (
                          <>
                            
                            <span className="absolute inset-0 rounded-md overflow-hidden">
                              <img src={"https://media.graphassets.com/QyRpu9wTWGXaPl1SNSIn"} alt="" className="w-full h-full object-center object-cover" />
                            </span>
                            <span
                              className={classNames(
                                selected ? 'ring-indigo-500' : 'ring-transparent',
                                'absolute inset-0 rounded-md ring-2 ring-offset-2 pointer-events-none'
                              )}
                              aria-hidden="true"
                            />
                          </>
                        )}
                      </Tab>


                      <Tab
                        // key={image.id}
                        className="relative h-52 bg-white rounded-md flex items-center justify-center text-sm font-medium uppercase text-gray-900 cursor-pointer hover:bg-gray-50 focus:outline-none focus:ring focus:ring-offset-4 focus:ring-opacity-50"
                      >
                        {({ selected }) => (
                          <>
                            
                            <span className="absolute inset-0 rounded-md overflow-hidden">
                              <img src={"https://media.graphassets.com/EDTYwfpQcybMVEsnXGdi"} alt="" className="w-full h-full object-center object-cover" />
                            </span>
                            <span
                              className={classNames(
                                selected ? 'ring-indigo-500' : 'ring-transparent',
                                'absolute inset-0 rounded-md ring-2 ring-offset-2 pointer-events-none'
                              )}
                              aria-hidden="true"
                            />
                          </>
                        )}
                      </Tab>


                      <Tab
                        // key={image.id}
                        className="relative h-52 bg-white rounded-md flex items-center justify-center text-sm font-medium uppercase text-gray-900 cursor-pointer hover:bg-gray-50 focus:outline-none focus:ring focus:ring-offset-4 focus:ring-opacity-50"
                      >
                        {({ selected }) => (
                          <>
                            
                            <span className="absolute inset-0 rounded-md overflow-hidden">
                              <img src={"https://media.graphassets.com/p9JuaAioQHvpzXUtw9yA"} alt="" className="w-full h-full object-center object-cover" />
                            </span>
                            <span
                              className={classNames(
                                selected ? 'ring-indigo-500' : 'ring-transparent',
                                'absolute inset-0 rounded-md ring-2 ring-offset-2 pointer-events-none'
                              )}
                              aria-hidden="true"
                            />
                          </>
                        )}
                      </Tab>

                      <Tab
                        // key={image.id}
                        className="relative h-52 bg-white rounded-md flex items-center justify-center text-sm font-medium uppercase text-gray-900 cursor-pointer hover:bg-gray-50 focus:outline-none focus:ring focus:ring-offset-4 focus:ring-opacity-50"
                      >
                        {({ selected }) => (
                          <>
                            
                            <span className="absolute inset-0 rounded-md overflow-hidden">
                              <img src={"https://media.graphassets.com/03gmGFGQjiG2xuySk4Xg"} alt="" className="w-full h-full object-center object-cover" />
                            </span>
                            <span
                              className={classNames(
                                selected ? 'ring-indigo-500' : 'ring-transparent',
                                'absolute inset-0 rounded-md ring-2 ring-offset-2 pointer-events-none'
                              )}
                              aria-hidden="true"
                            />
                          </>
                        )}
                      </Tab>

                      <Tab
                        // key={image.id}
                        className="relative h-52 bg-white rounded-md flex items-center justify-center text-sm font-medium uppercase text-gray-900 cursor-pointer hover:bg-gray-50 focus:outline-none focus:ring focus:ring-offset-4 focus:ring-opacity-50"
                      >
                        {({ selected }) => (
                          <>
                            
                            <span className="absolute inset-0 rounded-md overflow-hidden">
                              <img src={"https://media.graphassets.com/EJmQwtMTb2JcgI4x7PUw"} alt="" className="w-full h-full object-center object-cover" />
                            </span>
                            <span
                              className={classNames(
                                selected ? 'ring-indigo-500' : 'ring-transparent',
                                'absolute inset-0 rounded-md ring-2 ring-offset-2 pointer-events-none'
                              )}
                              aria-hidden="true"
                            />
                          </>
                        )}
                      </Tab>

                      <Tab
                        // key={image.id}
                        className="relative h-52 bg-white rounded-md flex items-center justify-center text-sm font-medium uppercase text-gray-900 cursor-pointer hover:bg-gray-50 focus:outline-none focus:ring focus:ring-offset-4 focus:ring-opacity-50"
                      >
                        {({ selected }) => (
                          <>
                            
                            <span className="absolute inset-0 rounded-md overflow-hidden">
                              <img src={"https://media.graphassets.com/1X4GToUNRmuNrmvwvvOf"} alt="" className="w-full h-full object-center object-cover" />
                            </span>
                            <span
                              className={classNames(
                                selected ? 'ring-indigo-500' : 'ring-transparent',
                                'absolute inset-0 rounded-md ring-2 ring-offset-2 pointer-events-none'
                              )}
                              aria-hidden="true"
                            />
                          </>
                        )}
                      </Tab>

                      <Tab
                        // key={image.id}
                        className="relative h-52 bg-white rounded-md flex items-center justify-center text-sm font-medium uppercase text-gray-900 cursor-pointer hover:bg-gray-50 focus:outline-none focus:ring focus:ring-offset-4 focus:ring-opacity-50"
                      >
                        {({ selected }) => (
                          <>
                            
                            <span className="absolute inset-0 rounded-md overflow-hidden">
                              <img src={"https://media.graphassets.com/LfYmX77FSFOXYJ6cUZIs"} alt="" className="w-full h-full object-center object-cover" />
                            </span>
                            <span
                              className={classNames(
                                selected ? 'ring-indigo-500' : 'ring-transparent',
                                'absolute inset-0 rounded-md ring-2 ring-offset-2 pointer-events-none'
                              )}
                              aria-hidden="true"
                            />
                          </>
                        )}
                      </Tab>
                  
                  </Tab.List>
                </div>
    
                <Tab.Panels className="w-full aspect-w-1 aspect-h-1">
                 
                  

                    {/* <Tab.Panel key={1}>
                      <img
                        src={"https://media.graphassets.com/Fl9aEcaVS42OEL4CiEIw"}
                        alt={"hey"}
                        className="w-full h-full object-center object-cover sm:rounded-lg"
                      />
                      
                    </Tab.Panel> */}

                    <Tab.Panel key={1}>
                      <img
                        src={"https://media.graphassets.com/QyRpu9wTWGXaPl1SNSIn"}
                        alt={"hey"}
                        className="w-full h-full object-center object-cover sm:rounded-lg"
                      />
                      
                    </Tab.Panel>

                    <Tab.Panel key={1}>
                      <img
                        src={"https://media.graphassets.com/VUn46ZXyRqaWKsz8kgBS"}
                        alt={"hey"}
                        className="w-full h-full object-center object-cover sm:rounded-lg"
                      />
                      
                    </Tab.Panel>
                    <Tab.Panel key={1}>
                      <img
                        src={"https://media.graphassets.com/p9JuaAioQHvpzXUtw9yA"}
                        alt={"hey"}
                        className="w-full h-full object-center object-cover sm:rounded-lg"
                      />
                      
                    </Tab.Panel>


                    

                    <Tab.Panel key={1}>
                      <img
                        src={"https://media.graphassets.com/03gmGFGQjiG2xuySk4Xg"}
                        alt={"hey"}
                        className="w-full h-full object-center object-cover sm:rounded-lg"
                      />
                      
                    </Tab.Panel>


                    <Tab.Panel key={1} >
{/*                       
                      <input
                        type="text"
                      
                        required
                        placeholder="URL..."
                      /> */}

                      <YouTube videoId={id2} opts={opts} />
                      </Tab.Panel>

                      <Tab.Panel key={1}>
                      <img
                        src={"https://media.graphassets.com/1X4GToUNRmuNrmvwvvOf"}
                        alt={"hey"}
                        className="w-full h-full object-center object-cover sm:rounded-lg"
                      />
                      
                    </Tab.Panel>

                    <Tab.Panel key={1}>
                      <img
                        src={"https://media.graphassets.com/LfYmX77FSFOXYJ6cUZIs"}
                        alt={"hey"}
                        className="w-full h-full object-center object-cover sm:rounded-lg"
                      />
                      
                    </Tab.Panel>
                 
                </Tab.Panels>
              </Tab.Group>
    
           
            </div>
          </div>
        </div>
      )





















      


















      


















      


















      


















      


















      


















      


















      


















      


















      


















      


















      


















      


















      


















      


















      


















      


















      


















      


















      


















      


















      


















      


















      


















      


















      


















      


















      


















      


















      


















      


















      


















      


















      


















      


















      


















      


















      


















      


















      


















      


















      


















      


















      
       case 'blog-5': // Wed May 26, 2021 Texas
       return (
        <div className="bg-white">
          <div className="max-w-2xl mx-auto   px-4 sm:pt-12 sm:pb-6 sm:px-6 lg:max-w-7xl lg:px-8">
            <div className="grid grid-cols-1 gap-x-8 items-start">
              {/* Image gallery */}
              <Tab.Group as="div" className="flex flex-col-reverse">
                {/* Image selector */}
                <div className="visible mt-6 w-full max-w-2xl mx-auto sm:block lg:max-w-none">
                  <Tab.List className="grid grid-cols-4 gap-6">
                    {/* {product.images.map((image) => ( */}
                      {/* <Tab
                        // key={image.id}
                        className="relative h-52 bg-white rounded-md flex items-center justify-center text-sm font-medium uppercase text-gray-900 cursor-pointer hover:bg-gray-50 focus:outline-none focus:ring focus:ring-offset-4 focus:ring-opacity-50"
                      >
                        {({ selected }) => (
                          <>
                            
                            <span className="absolute inset-0 rounded-md overflow-hidden">
                              <img src={"https://media.graphassets.com/ySyObKo1SGislGJ8gtxS"} alt="" className="w-full h-full object-center object-cover" />
                            </span>
                            <span
                              className={classNames(
                                selected ? 'ring-indigo-500' : 'ring-transparent',
                                'absolute inset-0 rounded-md ring-2 ring-offset-2 pointer-events-none'
                              )}
                              aria-hidden="true"
                            />
                          </>
                        )}
                      </Tab> */}

                      <Tab
                        // key={image.id}
                        className="relative h-52 bg-white rounded-md flex items-center justify-center text-sm font-medium uppercase text-gray-900 cursor-pointer hover:bg-gray-50 focus:outline-none focus:ring focus:ring-offset-4 focus:ring-opacity-50"
                      >
                        {({ selected }) => (
                          <>
                            
                            <span className="absolute inset-0 rounded-md overflow-hidden">
                              <img src={"https://media.graphassets.com/5WMqWIvjQXu4QiJrrnzr"} alt="" className="w-full h-full object-center object-cover" />
                            </span>
                            <span
                              className={classNames(
                                selected ? 'ring-indigo-500' : 'ring-transparent',
                                'absolute inset-0 rounded-md ring-2 ring-offset-2 pointer-events-none'
                              )}
                              aria-hidden="true"
                            />
                          </>
                        )}
                      </Tab>

                      <Tab
                        // key={image.id}
                        className="relative h-52 bg-white rounded-md flex items-center justify-center text-sm font-medium uppercase text-gray-900 cursor-pointer hover:bg-gray-50 focus:outline-none focus:ring focus:ring-offset-4 focus:ring-opacity-50"
                      >
                        {({ selected }) => (
                          <>
                            
                            <span className="absolute inset-0 rounded-md overflow-hidden">
                              <img src={"https://media.graphassets.com/eNxruNuQRJmOid4XVNsG"} alt="" className="w-full h-full object-center object-cover" />
                            </span>
                            <span
                              className={classNames(
                                selected ? 'ring-indigo-500' : 'ring-transparent',
                                'absolute inset-0 rounded-md ring-2 ring-offset-2 pointer-events-none'
                              )}
                              aria-hidden="true"
                            />
                          </>
                        )}
                      </Tab>

                      <Tab
                        // key={image.id}
                        className="relative h-52 bg-white rounded-md flex items-center justify-center text-sm font-medium uppercase text-gray-900 cursor-pointer hover:bg-gray-50 focus:outline-none focus:ring focus:ring-offset-4 focus:ring-opacity-50"
                      >
                        {({ selected }) => (
                          <>
                            
                            <span className="absolute inset-0 rounded-md overflow-hidden">
                              <img src={"https://media.graphassets.com/rKLH6yKyRriQnuDt50kX"} alt="" className="w-full h-full object-center object-cover" />
                            </span>
                            <span
                              className={classNames(
                                selected ? 'ring-indigo-500' : 'ring-transparent',
                                'absolute inset-0 rounded-md ring-2 ring-offset-2 pointer-events-none'
                              )}
                              aria-hidden="true"
                            />
                          </>
                        )}
                      </Tab>

                      <Tab
                        // key={image.id}
                        className="relative h-52 bg-white rounded-md flex items-center justify-center text-sm font-medium uppercase text-gray-900 cursor-pointer hover:bg-gray-50 focus:outline-none focus:ring focus:ring-offset-4 focus:ring-opacity-50"
                      >
                        {({ selected }) => (
                          <>
                            
                            <span className="absolute inset-0 rounded-md overflow-hidden">
                              <img src={"https://media.graphassets.com/CNsHT4ELToSW7WxbBJMg"} alt="" className="w-full h-full object-center object-cover" />
                            </span>
                            <span
                              className={classNames(
                                selected ? 'ring-indigo-500' : 'ring-transparent',
                                'absolute inset-0 rounded-md ring-2 ring-offset-2 pointer-events-none'
                              )}
                              aria-hidden="true"
                            />
                          </>
                        )}
                      </Tab>

                      <Tab
                        // key={image.id}
                        className="relative h-52 bg-white rounded-md flex items-center justify-center text-sm font-medium uppercase text-gray-900 cursor-pointer hover:bg-gray-50 focus:outline-none focus:ring focus:ring-offset-4 focus:ring-opacity-50"
                      >
                        {({ selected }) => (
                          <>
                            
                            <span className="absolute inset-0 rounded-md overflow-hidden">
                              <img src={"https://media.graphassets.com/Ko9NhFy1RHOcTfiWrqzq"} alt="" className="w-full h-full object-center object-cover" />
                            </span>
                            <span
                              className={classNames(
                                selected ? 'ring-indigo-500' : 'ring-transparent',
                                'absolute inset-0 rounded-md ring-2 ring-offset-2 pointer-events-none'
                              )}
                              aria-hidden="true"
                            />
                          </>
                        )}
                      </Tab>


                      <Tab
                        // key={image.id}
                        className="relative h-52 bg-white rounded-md flex items-center justify-center text-sm font-medium uppercase text-gray-900 cursor-pointer hover:bg-gray-50 focus:outline-none focus:ring focus:ring-offset-4 focus:ring-opacity-50"
                      >
                        {({ selected }) => (
                          <>
                            
                            <span className="absolute inset-0 rounded-md overflow-hidden">
                              <img src={"https://media.graphassets.com/pJ8AIeGfT26ttMkENcX8"} alt="" className="w-full h-full object-center object-cover" />
                            </span>
                            <span
                              className={classNames(
                                selected ? 'ring-indigo-500' : 'ring-transparent',
                                'absolute inset-0 rounded-md ring-2 ring-offset-2 pointer-events-none'
                              )}
                              aria-hidden="true"
                            />
                          </>
                        )}
                      </Tab>


                      <Tab
                        // key={image.id}
                        className="relative h-52 bg-white rounded-md flex items-center justify-center text-sm font-medium uppercase text-gray-900 cursor-pointer hover:bg-gray-50 focus:outline-none focus:ring focus:ring-offset-4 focus:ring-opacity-50"
                      >
                        {({ selected }) => (
                          <>
                            
                            <span className="absolute inset-0 rounded-md overflow-hidden">
                              <img src={"https://media.graphassets.com/X8FEEhETqm1Ks7ENs5HZ"} alt="" className="w-full h-full object-center object-cover" />
                            </span>
                            <span
                              className={classNames(
                                selected ? 'ring-indigo-500' : 'ring-transparent',
                                'absolute inset-0 rounded-md ring-2 ring-offset-2 pointer-events-none'
                              )}
                              aria-hidden="true"
                            />
                          </>
                        )}
                      </Tab>


                      <Tab
                        // key={image.id}
                        className="relative h-52 bg-white rounded-md flex items-center justify-center text-sm font-medium uppercase text-gray-900 cursor-pointer hover:bg-gray-50 focus:outline-none focus:ring focus:ring-offset-4 focus:ring-opacity-50"
                      >
                        {({ selected }) => (
                          <>
                            
                            <span className="absolute inset-0 rounded-md overflow-hidden">
                              <img src={"https://media.graphassets.com/BpjfCxxlQBqNmdavdIOg"} alt="" className="w-full h-full object-center object-cover" />
                            </span>
                            <span
                              className={classNames(
                                selected ? 'ring-indigo-500' : 'ring-transparent',
                                'absolute inset-0 rounded-md ring-2 ring-offset-2 pointer-events-none'
                              )}
                              aria-hidden="true"
                            />
                          </>
                        )}
                      </Tab>

                      <Tab
                        // key={image.id}
                        className="relative h-52 bg-white rounded-md flex items-center justify-center text-sm font-medium uppercase text-gray-900 cursor-pointer hover:bg-gray-50 focus:outline-none focus:ring focus:ring-offset-4 focus:ring-opacity-50"
                      >
                        {({ selected }) => (
                          <>
                            
                            <span className="absolute inset-0 rounded-md overflow-hidden">
                              <img src={"https://media.graphassets.com/jcjdHg3gQ4Cq12PTRFHB"} alt="" className="w-full h-full object-center object-cover" />
                            </span>
                            <span
                              className={classNames(
                                selected ? 'ring-indigo-500' : 'ring-transparent',
                                'absolute inset-0 rounded-md ring-2 ring-offset-2 pointer-events-none'
                              )}
                              aria-hidden="true"
                            />
                          </>
                        )}
                      </Tab>


                      <Tab
                        // key={image.id}
                        className="relative h-52 bg-white rounded-md flex items-center justify-center text-sm font-medium uppercase text-gray-900 cursor-pointer hover:bg-gray-50 focus:outline-none focus:ring focus:ring-offset-4 focus:ring-opacity-50"
                      >
                        {({ selected }) => (
                          <>
                            
                            <span className="absolute inset-0 rounded-md overflow-hidden">
                              <img src={"https://media.graphassets.com/Bv2GC2fkSXeYBvOznZaC"} alt="" className="w-full h-full object-center object-cover" />
                            </span>
                            <span
                              className={classNames(
                                selected ? 'ring-indigo-500' : 'ring-transparent',
                                'absolute inset-0 rounded-md ring-2 ring-offset-2 pointer-events-none'
                              )}
                              aria-hidden="true"
                            />
                          </>
                        )}
                      </Tab>
                  
                  
                  </Tab.List>
                </div>
    
                <Tab.Panels className="w-full aspect-w-1 aspect-h-1">
                 
                    {/* <Tab.Panel key={1}>
                      <img
                        src={"https://media.graphassets.com/ySyObKo1SGislGJ8gtxS"}
                        alt={"hey"}
                        className="w-full h-full object-center object-cover sm:rounded-lg"
                      />
                      
                    </Tab.Panel> */}

                    <Tab.Panel key={1}>
                      <img
                        src={"https://media.graphassets.com/5WMqWIvjQXu4QiJrrnzr"}
                        alt={"hey"}
                        className="w-full h-full object-center object-cover sm:rounded-lg"
                      />
                      
                    </Tab.Panel>

                    <Tab.Panel key={1}>
                      <img
                        src={"https://media.graphassets.com/eNxruNuQRJmOid4XVNsG"}
                        alt={"hey"}
                        className="w-full h-full object-center object-cover sm:rounded-lg"
                      />
                      
                    </Tab.Panel>

                    <Tab.Panel key={1}>
                      <img
                        src={"https://media.graphassets.com/rKLH6yKyRriQnuDt50kX"}
                        alt={"hey"}
                        className="w-full h-full object-center object-cover sm:rounded-lg"
                      />
                      
                    </Tab.Panel>

                    <Tab.Panel key={1}>
                      <img
                        src={"https://media.graphassets.com/CNsHT4ELToSW7WxbBJMg"}
                        alt={"hey"}
                        className="w-full h-full object-center object-cover sm:rounded-lg"
                      />
                      
                    </Tab.Panel>
                 

                    <Tab.Panel key={1}>
                      <img
                        src={"https://media.graphassets.com/Ko9NhFy1RHOcTfiWrqzq"}
                        alt={"hey"}
                        className="w-full h-full object-center object-cover sm:rounded-lg"
                      />
                      
                    </Tab.Panel>


                    <Tab.Panel key={1}>
                      <img
                        src={"https://media.graphassets.com/pJ8AIeGfT26ttMkENcX8"}
                        alt={"hey"}
                        className="w-full h-full object-center object-cover sm:rounded-lg"
                      />
                      
                    </Tab.Panel>


                    <Tab.Panel key={1}>
                      <img
                        src={"https://media.graphassets.com/X8FEEhETqm1Ks7ENs5HZ"}
                        alt={"hey"}
                        className="w-full h-full object-center object-cover sm:rounded-lg"
                      />
                      
                    </Tab.Panel>

                    <Tab.Panel key={1}>
                      <img
                        src={"https://media.graphassets.com/BpjfCxxlQBqNmdavdIOg"}
                        alt={"hey"}
                        className="w-full h-full object-center object-cover sm:rounded-lg"
                      />
                      
                    </Tab.Panel>
                    <Tab.Panel key={1}>
                      <img
                        src={"https://media.graphassets.com/jcjdHg3gQ4Cq12PTRFHB"}
                        alt={"hey"}
                        className="w-full h-full object-center object-cover sm:rounded-lg"
                      />
                      
                    </Tab.Panel>


                    <Tab.Panel key={1}>
                      <img
                        src={"https://media.graphassets.com/Bv2GC2fkSXeYBvOznZaC"}
                        alt={"hey"}
                        className="w-full h-full object-center object-cover sm:rounded-lg"
                      />
                      
                    </Tab.Panel>

                </Tab.Panels>
              </Tab.Group>
    
           
            </div>
          </div>
        </div>
      )
































































































































































































       case 'blog-6': // Thurs May 27, 2021 NEW MEXICO
       return (
        <div className="bg-white">
          <div className="max-w-2xl mx-auto   px-4 sm:pt-12 sm:pb-6 sm:px-6 lg:max-w-7xl lg:px-8">
            <div className="grid grid-cols-1 gap-x-8 items-start">
              {/* Image gallery */}
              <Tab.Group as="div" className="flex flex-col-reverse">
                {/* Image selector */}
                <div className="visible mt-6 w-full max-w-2xl mx-auto sm:block lg:max-w-none">
                  <Tab.List className="grid grid-cols-4 gap-6">
                    {/* {product.images.map((image) => ( */}
                      <Tab
                        // key={image.id}
                        className="relative h-52 bg-white rounded-md flex items-center justify-center text-sm font-medium uppercase text-gray-900 cursor-pointer hover:bg-gray-50 focus:outline-none focus:ring focus:ring-offset-4 focus:ring-opacity-50"
                      >
                        {({ selected }) => (
                          <>
                            
                            <span className="absolute inset-0 rounded-md overflow-hidden">
                              <img src={"https://media.graphassets.com/wyp2IYD1QRGkWa0mheWs"} alt="" className="w-full h-full object-center object-cover" />
                            </span>
                            <span
                              className={classNames(
                                selected ? 'ring-indigo-500' : 'ring-transparent',
                                'absolute inset-0 rounded-md ring-2 ring-offset-2 pointer-events-none'
                              )}
                              aria-hidden="true"
                            />
                          </>
                        )}
                      </Tab>

                      {/* <Tab
                        // key={image.id}
                        className="relative h-52 bg-white rounded-md flex items-center justify-center text-sm font-medium uppercase text-gray-900 cursor-pointer hover:bg-gray-50 focus:outline-none focus:ring focus:ring-offset-4 focus:ring-opacity-50"
                      >
                        {({ selected }) => (
                          <>
                            
                            <span className="absolute inset-0 rounded-md overflow-hidden">
                              <img src={"https://media.graphassets.com/XRdpF2bGRCW33f1wuREd"} alt="" className="w-full h-full object-center object-cover" />
                            </span>
                            <span
                              className={classNames(
                                selected ? 'ring-indigo-500' : 'ring-transparent',
                                'absolute inset-0 rounded-md ring-2 ring-offset-2 pointer-events-none'
                              )}
                              aria-hidden="true"
                            />
                          </>
                        )}
                      </Tab> */}


                    


                      <Tab
                        // key={image.id}
                        className="relative h-52 bg-white rounded-md flex items-center justify-center text-sm font-medium uppercase text-gray-900 cursor-pointer hover:bg-gray-50 focus:outline-none focus:ring focus:ring-offset-4 focus:ring-opacity-50"
                      >
                        {({ selected }) => (
                          <>
                            
                            <span className="absolute inset-0 rounded-md overflow-hidden">
                              <img src={"https://media.graphassets.com/yyswp96ST5yta7k1GQJS"} alt="" className="w-full h-full object-center object-cover" />
                            </span>
                            <span
                              className={classNames(
                                selected ? 'ring-indigo-500' : 'ring-transparent',
                                'absolute inset-0 rounded-md ring-2 ring-offset-2 pointer-events-none'
                              )}
                              aria-hidden="true"
                            />
                          </>
                        )}
                      </Tab>

                      <Tab
                        // key={image.id}
                        className="relative h-52 bg-white rounded-md flex items-center justify-center text-sm font-medium uppercase text-gray-900 cursor-pointer hover:bg-gray-50 focus:outline-none focus:ring focus:ring-offset-4 focus:ring-opacity-50"
                      >
                        {({ selected }) => (
                          <>
                            
                            <span className="absolute inset-0 rounded-md overflow-hidden">
                              <img src={"https://media.graphassets.com/aTDb5xVbQDuFffIKuuOo"} alt="" className="w-full h-full object-center object-cover" />
                            </span>
                            <span
                              className={classNames(
                                selected ? 'ring-indigo-500' : 'ring-transparent',
                                'absolute inset-0 rounded-md ring-2 ring-offset-2 pointer-events-none'
                              )}
                              aria-hidden="true"
                            />
                          </>
                        )}
                      </Tab>

                    
                      <Tab
                        // key={image.id}
                        className="relative h-52 bg-white rounded-md flex items-center justify-center text-sm font-medium uppercase text-gray-900 cursor-pointer hover:bg-gray-50 focus:outline-none focus:ring focus:ring-offset-4 focus:ring-opacity-50"
                      >
                        {({ selected }) => (
                          <>
                            
                            <span className="absolute inset-0 rounded-md overflow-hidden">
                              <img src={"https://media.graphassets.com/wJtvnLVFQiWF32j7pJnA"} alt="" className="w-full h-full object-center object-cover" />
                            </span>
                            <span
                              className={classNames(
                                selected ? 'ring-indigo-500' : 'ring-transparent',
                                'absolute inset-0 rounded-md ring-2 ring-offset-2 pointer-events-none'
                              )}
                              aria-hidden="true"
                            />
                          </>
                        )}
                      </Tab>

                   
                      


                      <Tab
                        // key={image.id}
                        className="relative h-52 bg-white rounded-md flex items-center justify-center text-sm font-medium uppercase text-gray-900 cursor-pointer hover:bg-gray-50 focus:outline-none focus:ring focus:ring-offset-4 focus:ring-opacity-50"
                      >
                        {({ selected }) => (
                          <>
                            
                            <span className="absolute inset-0 rounded-md overflow-hidden">
                              <img src={"https://media.graphassets.com/oQuE1v1TmiRAygYx6BLY"} alt="" className="w-full h-full object-center object-cover" />
                            </span>
                            <span
                              className={classNames(
                                selected ? 'ring-indigo-500' : 'ring-transparent',
                                'absolute inset-0 rounded-md ring-2 ring-offset-2 pointer-events-none'
                              )}
                              aria-hidden="true"
                            />
                          </>
                        )}
                      </Tab>



                   



                      {/* <Tab
                        // key={image.id}
                        className="relative h-52 bg-white rounded-md flex items-center justify-center text-sm font-medium uppercase text-gray-900 cursor-pointer hover:bg-gray-50 focus:outline-none focus:ring focus:ring-offset-4 focus:ring-opacity-50"
                      >
                        {({ selected }) => (
                          <>
                            
                            <span className="absolute inset-0 rounded-md overflow-hidden">
                              <img src={"https://media.graphassets.com/ro7IC6YDQAeEhPcnM3Sb"} alt="" className="w-full h-full object-center object-cover" />
                            </span>
                            <span
                              className={classNames(
                                selected ? 'ring-indigo-500' : 'ring-transparent',
                                'absolute inset-0 rounded-md ring-2 ring-offset-2 pointer-events-none'
                              )}
                              aria-hidden="true"
                            />
                          </>
                        )}
                      </Tab> */}

                      {/* <Tab
                        // key={image.id}
                        className="relative h-52 bg-white rounded-md flex items-center justify-center text-sm font-medium uppercase text-gray-900 cursor-pointer hover:bg-gray-50 focus:outline-none focus:ring focus:ring-offset-4 focus:ring-opacity-50"
                      >
                        {({ selected }) => (
                          <>
                            
                            <span className="absolute inset-0 rounded-md overflow-hidden">
                              <img src={"https://media.graphassets.com/FvGfwaPyRPGkDz2uWdLQ"} alt="" className="w-full h-full object-center object-cover" />
                            </span>
                            <span
                              className={classNames(
                                selected ? 'ring-indigo-500' : 'ring-transparent',
                                'absolute inset-0 rounded-md ring-2 ring-offset-2 pointer-events-none'
                              )}
                              aria-hidden="true"
                            />
                          </>
                        )}
                      </Tab> */}

             


                      {/*
                      <Tab
                        // key={image.id}
                        className="relative h-52 bg-white rounded-md flex items-center justify-center text-sm font-medium uppercase text-gray-900 cursor-pointer hover:bg-gray-50 focus:outline-none focus:ring focus:ring-offset-4 focus:ring-opacity-50"
                      >
                        {({ selected }) => (
                          <>
                            
                            <span className="absolute inset-0 rounded-md overflow-hidden">
                              <img src={"https://media.graphassets.com/5RYQssvdRIeBGZRfFM9y"} alt="" className="w-full h-full object-center object-cover" />
                            </span>
                            <span
                              className={classNames(
                                selected ? 'ring-indigo-500' : 'ring-transparent',
                                'absolute inset-0 rounded-md ring-2 ring-offset-2 pointer-events-none'
                              )}
                              aria-hidden="true"
                            />
                          </>
                        )}
                      </Tab> */}


                   

                      <Tab
                        // key={image.id}
                        className="relative h-52 bg-white rounded-md flex items-center justify-center text-sm font-medium uppercase text-gray-900 cursor-pointer hover:bg-gray-50 focus:outline-none focus:ring focus:ring-offset-4 focus:ring-opacity-50"
                      >
                        {({ selected }) => (
                          <>
                            
                            <span className="absolute inset-0 rounded-md overflow-hidden">
                              <img src={"https://media.graphassets.com/iWn3YfZHTDGA1Xz6N5Z8"} alt="" className="w-full h-full object-center object-cover" />
                            </span>
                            <span
                              className={classNames(
                                selected ? 'ring-indigo-500' : 'ring-transparent',
                                'absolute inset-0 rounded-md ring-2 ring-offset-2 pointer-events-none'
                              )}
                              aria-hidden="true"
                            />
                          </>
                        )}
                      </Tab>

                      <Tab
                        // key={image.id}
                        className="relative h-52 bg-white rounded-md flex items-center justify-center text-sm font-medium uppercase text-gray-900 cursor-pointer hover:bg-gray-50 focus:outline-none focus:ring focus:ring-offset-4 focus:ring-opacity-50"
                      >
                        {({ selected }) => (
                          <>
                            
                            <span className="absolute inset-0 rounded-md overflow-hidden">
                              <img src={"https://media.graphassets.com/dpeb0XbcQOK3Xes8qUUX"} alt="" className="w-full h-full object-center object-cover" />
                            </span>
                            <span
                              className={classNames(
                                selected ? 'ring-indigo-500' : 'ring-transparent',
                                'absolute inset-0 rounded-md ring-2 ring-offset-2 pointer-events-none'
                              )}
                              aria-hidden="true"
                            />
                          </>
                        )}
                      </Tab>

                   
                  
                  </Tab.List>
                </div>
    






                <Tab.Panels className="w-full aspect-w-1 aspect-h-1">

                    <Tab.Panel key={1}>
                      <img
                        src={"https://media.graphassets.com/wyp2IYD1QRGkWa0mheWs"}
                        alt={"hey"}
                        className="w-full h-full object-center object-cover sm:rounded-lg"
                      />
                      
                    </Tab.Panel>

                    {/* <Tab.Panel key={1}>
                      <img
                        src={"https://media.graphassets.com/XRdpF2bGRCW33f1wuREd"}
                        alt={"hey"}
                        className="w-full h-full object-center object-cover sm:rounded-lg"
                      />
                      
                    </Tab.Panel> */}
                   
                    
                    <Tab.Panel key={1}>
                      <img
                        src={"https://media.graphassets.com/yyswp96ST5yta7k1GQJS"}
                        alt={"hey"}
                        className="w-full h-full object-center object-cover sm:rounded-lg"
                      />
                      
                    </Tab.Panel>

                    <Tab.Panel key={1}>
                      <img
                        src={"https://media.graphassets.com/aTDb5xVbQDuFffIKuuOo"}
                        alt={"hey"}
                        className="w-full h-full object-center object-cover sm:rounded-lg"
                      />
                      
                    </Tab.Panel>

                  

                    <Tab.Panel key={1}>
                      <img
                        src={"https://media.graphassets.com/wJtvnLVFQiWF32j7pJnA"}
                        alt={"hey"}
                        className="w-full h-full object-center object-cover sm:rounded-lg"
                      />
                      
                    </Tab.Panel>

                 

                 
                    <Tab.Panel key={1}>
                      <img
                        src={"https://media.graphassets.com/oQuE1v1TmiRAygYx6BLY"}
                        alt={"hey"}
                        className="w-full h-full object-center object-cover sm:rounded-lg"
                      />
                      
                    </Tab.Panel>


                


               

                    {/* <Tab.Panel key={1}>
                      <img
                        src={"https://media.graphassets.com/ro7IC6YDQAeEhPcnM3Sb"}
                        alt={"hey"}
                        className="w-full h-full object-center object-cover sm:rounded-lg"
                      />
                      
                    </Tab.Panel> */}

                    {/* <Tab.Panel key={1}>
                      <img
                        src={"https://media.graphassets.com/FvGfwaPyRPGkDz2uWdLQ"}
                        alt={"hey"}
                        className="w-full h-full object-center object-cover sm:rounded-lg"
                      />
                      
                    </Tab.Panel> */}


                    {/* 
                    
                    <Tab.Panel key={1}>
                      <img
                        src={"https://media.graphassets.com/5RYQssvdRIeBGZRfFM9y"}
                        alt={"hey"}
                        className="w-full h-full object-center object-cover sm:rounded-lg"
                      />
                      
                    </Tab.Panel> */}




                    <Tab.Panel key={1}>
                      <img
                        src={"https://media.graphassets.com/iWn3YfZHTDGA1Xz6N5Z8"}
                        alt={"hey"}
                        className="w-full h-full object-center object-cover sm:rounded-lg"
                      />
                      
                    </Tab.Panel>


                  

                    <Tab.Panel key={1}>
                      <img
                        src={"https://media.graphassets.com/dpeb0XbcQOK3Xes8qUUX"}
                        alt={"hey"}
                        className="w-full h-full object-center object-cover sm:rounded-lg"
                      />
                      
                    </Tab.Panel>
                  



                    
                 
                </Tab.Panels>
              </Tab.Group>
    
           
            </div>
          </div>
        </div>
      )















































































































































































































































       case 'blog-7': //  Sat May 29, 2021    CALIFORNIA
       return (
        <div className="bg-white">
          <div className="max-w-2xl mx-auto py-16 px-4 sm:py-8 sm:px-6 lg:max-w-7xl lg:px-8">
            <div className="grid grid-cols-1 gap-x-8 items-start">
              {/* Image gallery */}
              <Tab.Group as="div" className="flex flex-col-reverse">
                {/* Image selector */}
                <div className="visible mt-6 w-full max-w-2xl mx-auto sm:block lg:max-w-none">
                  <Tab.List className="grid grid-cols-4 gap-6">
                    {/* {product.images.map((image) => ( */}


                    <Tab
                        // key={image.id}
                        className="relative h-52 bg-white rounded-md flex items-center justify-center text-sm font-medium uppercase text-gray-900 cursor-pointer hover:bg-gray-50 focus:outline-none focus:ring focus:ring-offset-4 focus:ring-opacity-50"
                      >
                        {({ selected }) => (
                          <>
                            
                            <span className="absolute inset-0 rounded-md overflow-hidden">
                              <img src={"https://media.graphassets.com/CjMXk56hRyy8dhp4GXDb"} alt="" className="w-full h-full object-center object-cover" />
                            </span>
                            <span
                              className={classNames(
                                selected ? 'ring-indigo-500' : 'ring-transparent',
                                'absolute inset-0 rounded-md ring-2 ring-offset-2 pointer-events-none'
                              )}
                              aria-hidden="true"
                            />
                          </>
                        )}
                      </Tab>


                            <Tab
                              // key={image.id}
                              className="relative h-52 bg-white rounded-md flex items-center justify-center text-sm font-medium uppercase text-gray-900 cursor-pointer hover:bg-gray-50 focus:outline-none focus:ring focus:ring-offset-4 focus:ring-opacity-50"
                            >
                              {({ selected }) => (
                                <>
                                  
                                  <span className="absolute inset-0 rounded-md overflow-hidden">
                                    <img src={"https://media.graphassets.com/aJ34hX5qTHeMR91WJ9Ds"} alt="" className="w-full h-full object-center object-cover" />
                                  </span>
                                  <span
                                    className={classNames(
                                      selected ? 'ring-indigo-500' : 'ring-transparent',
                                      'absolute inset-0 rounded-md ring-2 ring-offset-2 pointer-events-none'
                                    )}
                                    aria-hidden="true"
                                  />
                                </>
                              )}
                            </Tab>
                        
                      {/* <Tab
                        // key={image.id}
                        className="relative h-52 bg-white rounded-md flex items-center justify-center text-sm font-medium uppercase text-gray-900 cursor-pointer hover:bg-gray-50 focus:outline-none focus:ring focus:ring-offset-4 focus:ring-opacity-50"
                      >
                        {({ selected }) => (
                          <>
                            
                            <span className="absolute inset-0 rounded-md overflow-hidden">
                              <img src={"https://media.graphassets.com/gmEv6vHMSXaRmxeReEgN"} alt="" className="w-full h-full object-center object-cover" />
                            </span>
                            <span
                              className={classNames(
                                selected ? 'ring-indigo-500' : 'ring-transparent',
                                'absolute inset-0 rounded-md ring-2 ring-offset-2 pointer-events-none'
                              )}
                              aria-hidden="true"
                            />
                          </>
                        )}
                      </Tab>


                      <Tab
                        // key={image.id}
                        className="relative h-52 bg-white rounded-md flex items-center justify-center text-sm font-medium uppercase text-gray-900 cursor-pointer hover:bg-gray-50 focus:outline-none focus:ring focus:ring-offset-4 focus:ring-opacity-50"
                      >
                        {({ selected }) => (
                          <>
                            
                            <span className="absolute inset-0 rounded-md overflow-hidden">
                              <img src={"https://media.graphassets.com/DTZCgg7fQ6oV4ur44aU7"} alt="" className="w-full h-full object-center object-cover" />
                            </span>
                            <span
                              className={classNames(
                                selected ? 'ring-indigo-500' : 'ring-transparent',
                                'absolute inset-0 rounded-md ring-2 ring-offset-2 pointer-events-none'
                              )}
                              aria-hidden="true"
                            />
                          </>
                        )}
                      </Tab>


                      <Tab
                        // key={image.id}
                        className="relative h-52 bg-white rounded-md flex items-center justify-center text-sm font-medium uppercase text-gray-900 cursor-pointer hover:bg-gray-50 focus:outline-none focus:ring focus:ring-offset-4 focus:ring-opacity-50"
                      >
                        {({ selected }) => (
                          <>
                            
                            <span className="absolute inset-0 rounded-md overflow-hidden">
                              <img src={"https://media.graphassets.com/tTwDtVo3TyCB1AHYre0N"} alt="" className="w-full h-full object-center object-cover" />
                            </span>
                            <span
                              className={classNames(
                                selected ? 'ring-indigo-500' : 'ring-transparent',
                                'absolute inset-0 rounded-md ring-2 ring-offset-2 pointer-events-none'
                              )}
                              aria-hidden="true"
                            />
                          </>
                        )}
                      </Tab>




                      <Tab
                        // key={image.id}
                        className="relative h-52 bg-white rounded-md flex items-center justify-center text-sm font-medium uppercase text-gray-900 cursor-pointer hover:bg-gray-50 focus:outline-none focus:ring focus:ring-offset-4 focus:ring-opacity-50"
                      >
                        {({ selected }) => (
                          <>
                            
                            <span className="absolute inset-0 rounded-md overflow-hidden">
                              <img src={"https://media.graphassets.com/NfyXKCaS3umiZ8LO4vnK"} alt="" className="w-full h-full object-center object-cover" />
                            </span>
                            <span
                              className={classNames(
                                selected ? 'ring-indigo-500' : 'ring-transparent',
                                'absolute inset-0 rounded-md ring-2 ring-offset-2 pointer-events-none'
                              )}
                              aria-hidden="true"
                            />
                          </>
                        )}
                      </Tab> */}



                      <Tab
                        // key={image.id}
                        className="relative h-52 bg-white rounded-md flex items-center justify-center text-sm font-medium uppercase text-gray-900 cursor-pointer hover:bg-gray-50 focus:outline-none focus:ring focus:ring-offset-4 focus:ring-opacity-50"
                      >
                        {({ selected }) => (
                          <>
                            
                            <span className="absolute inset-0 rounded-md overflow-hidden">
                              <img src={"https://media.graphassets.com/wOYXxGQSauWNw7KeTFLl"} alt="" className="w-full h-full object-center object-cover" />
                            </span>
                            <span
                              className={classNames(
                                selected ? 'ring-indigo-500' : 'ring-transparent',
                                'absolute inset-0 rounded-md ring-2 ring-offset-2 pointer-events-none'
                              )}
                              aria-hidden="true"
                            />
                          </>
                        )}
                      </Tab>


                      <Tab
                        // key={image.id}
                        className="relative h-52 bg-white rounded-md flex items-center justify-center text-sm font-medium uppercase text-gray-900 cursor-pointer hover:bg-gray-50 focus:outline-none focus:ring focus:ring-offset-4 focus:ring-opacity-50"
                      >
                        {({ selected }) => (
                          <>
                            
                            <span className="absolute inset-0 rounded-md overflow-hidden">
                              <img src={"https://media.graphassets.com/3ZVIRYhSyKgMLtkoPaDd"} alt="" className="w-full h-full object-center object-cover" />
                            </span>
                            <span
                              className={classNames(
                                selected ? 'ring-indigo-500' : 'ring-transparent',
                                'absolute inset-0 rounded-md ring-2 ring-offset-2 pointer-events-none'
                              )}
                              aria-hidden="true"
                            />
                          </>
                        )}
                      </Tab>


                      {/* <Tab
                        // key={image.id}
                        className="relative h-52 bg-white rounded-md flex items-center justify-center text-sm font-medium uppercase text-gray-900 cursor-pointer hover:bg-gray-50 focus:outline-none focus:ring focus:ring-offset-4 focus:ring-opacity-50"
                      >
                        {({ selected }) => (
                          <>
                            
                            <span className="absolute inset-0 rounded-md overflow-hidden">
                              <img src={"https://media.graphassets.com/VJ8jD0ZvTheQW0wDITZf"} alt="" className="w-full h-full object-center object-cover" />
                            </span>
                            <span
                              className={classNames(
                                selected ? 'ring-indigo-500' : 'ring-transparent',
                                'absolute inset-0 rounded-md ring-2 ring-offset-2 pointer-events-none'
                              )}
                              aria-hidden="true"
                            />
                          </>
                        )}
                      </Tab>

                      <Tab
                        // key={image.id}
                        className="relative h-52 bg-white rounded-md flex items-center justify-center text-sm font-medium uppercase text-gray-900 cursor-pointer hover:bg-gray-50 focus:outline-none focus:ring focus:ring-offset-4 focus:ring-opacity-50"
                      >
                        {({ selected }) => (
                          <>
                            
                            <span className="absolute inset-0 rounded-md overflow-hidden">
                              <img src={"https://media.graphassets.com/hesrgOcsSWP9BEU2yNCw"} alt="" className="w-full h-full object-center object-cover" />
                            </span>
                            <span
                              className={classNames(
                                selected ? 'ring-indigo-500' : 'ring-transparent',
                                'absolute inset-0 rounded-md ring-2 ring-offset-2 pointer-events-none'
                              )}
                              aria-hidden="true"
                            />
                          </>
                        )}
                      </Tab> */}


                    


                      {/* <Tab
                        // key={image.id}
                        className="relative h-52 bg-white rounded-md flex items-center justify-center text-sm font-medium uppercase text-gray-900 cursor-pointer hover:bg-gray-50 focus:outline-none focus:ring focus:ring-offset-4 focus:ring-opacity-50"
                      >
                        {({ selected }) => (
                          <>
                            
                            <span className="absolute inset-0 rounded-md overflow-hidden">
                              <img src={"https://media.graphassets.com/Y60XR3lTRNqftWbjYKvj"} alt="" className="w-full h-full object-center object-cover" />
                            </span>
                            <span
                              className={classNames(
                                selected ? 'ring-indigo-500' : 'ring-transparent',
                                'absolute inset-0 rounded-md ring-2 ring-offset-2 pointer-events-none'
                              )}
                              aria-hidden="true"
                            />
                          </>
                        )}
                      </Tab>


                      <Tab
                        // key={image.id}
                        className="relative h-52 bg-white rounded-md flex items-center justify-center text-sm font-medium uppercase text-gray-900 cursor-pointer hover:bg-gray-50 focus:outline-none focus:ring focus:ring-offset-4 focus:ring-opacity-50"
                      >
                        {({ selected }) => (
                          <>
                            
                            <span className="absolute inset-0 rounded-md overflow-hidden">
                              <img src={"https://media.graphassets.com/XDcFK9gQShxg9RJloSQ2"} alt="" className="w-full h-full object-center object-cover" />
                            </span>
                            <span
                              className={classNames(
                                selected ? 'ring-indigo-500' : 'ring-transparent',
                                'absolute inset-0 rounded-md ring-2 ring-offset-2 pointer-events-none'
                              )}
                              aria-hidden="true"
                            />
                          </>
                        )}
                      </Tab> */}


                      <Tab
                        // key={image.id}
                        className="relative h-52 bg-white rounded-md flex items-center justify-center text-sm font-medium uppercase text-gray-900 cursor-pointer hover:bg-gray-50 focus:outline-none focus:ring focus:ring-offset-4 focus:ring-opacity-50"
                      >
                        {({ selected }) => (
                          <>
                            
                            <span className="absolute inset-0 rounded-md overflow-hidden">
                              <img src={"https://media.graphassets.com/GZzU7IzVRlebLzwbCWIp"} alt="" className="w-full h-full object-center object-cover" />
                            </span>
                            <span
                              className={classNames(
                                selected ? 'ring-indigo-500' : 'ring-transparent',
                                'absolute inset-0 rounded-md ring-2 ring-offset-2 pointer-events-none'
                              )}
                              aria-hidden="true"
                            />
                          </>
                        )}
                      </Tab>

                      {/* <Tab
                        // key={image.id}
                        className="relative h-52 bg-white rounded-md flex items-center justify-center text-sm font-medium uppercase text-gray-900 cursor-pointer hover:bg-gray-50 focus:outline-none focus:ring focus:ring-offset-4 focus:ring-opacity-50"
                      >
                        {({ selected }) => (
                          <>
                            
                            <span className="absolute inset-0 rounded-md overflow-hidden">
                              <img src={"https://media.graphassets.com/l7dBvdYTceJolEpsynLN"} alt="" className="w-full h-full object-center object-cover" />
                            </span>
                            <span
                              className={classNames(
                                selected ? 'ring-indigo-500' : 'ring-transparent',
                                'absolute inset-0 rounded-md ring-2 ring-offset-2 pointer-events-none'
                              )}
                              aria-hidden="true"
                            />
                          </>
                        )}
                      </Tab> */}








                           {/* VERTICAL */}
                      <Tab
                        // key={image.id}
                        className="relative h-52 bg-white rounded-md flex items-center justify-center text-sm font-medium uppercase text-gray-900 cursor-pointer hover:bg-gray-50 focus:outline-none focus:ring focus:ring-offset-4 focus:ring-opacity-50"
                      >
                        {({ selected }) => (
                          <>
                            
                            <span className="absolute inset-0 rounded-md overflow-hidden">
                              <img src={"https://media.graphassets.com/fqoXMPcKQBKozFlPQDGF"} alt="" className="w-full h-full object-center object-cover" />
                            </span>
                            <span
                              className={classNames(
                                selected ? 'ring-indigo-500' : 'ring-transparent',
                                'absolute inset-0 rounded-md ring-2 ring-offset-2 pointer-events-none'
                              )}
                              aria-hidden="true"
                            />
                          </>
                        )}
                      </Tab>




{/*                    
                      <Tab
                        // key={image.id}
                        className="relative h-52 bg-white rounded-md flex items-center justify-center text-sm font-medium uppercase text-gray-900 cursor-pointer hover:bg-gray-50 focus:outline-none focus:ring focus:ring-offset-4 focus:ring-opacity-50"
                      >
                        {({ selected }) => (
                          <>
                            
                            <span className="absolute inset-0 rounded-md overflow-hidden">
                              <img src={"https://media.graphassets.com/hQ74jsESvORr15HZp2b2"} alt="" className="w-full h-full object-center object-cover" />
                            </span>
                            <span
                              className={classNames(
                                selected ? 'ring-indigo-500' : 'ring-transparent',
                                'absolute inset-0 rounded-md ring-2 ring-offset-2 pointer-events-none'
                              )}
                              aria-hidden="true"
                            />
                          </>
                        )}
                      </Tab>




                  
                      <Tab
                        // key={image.id}
                        className="relative h-52 bg-white rounded-md flex items-center justify-center text-sm font-medium uppercase text-gray-900 cursor-pointer hover:bg-gray-50 focus:outline-none focus:ring focus:ring-offset-4 focus:ring-opacity-50"
                      >
                        {({ selected }) => (
                          <>
                            
                            <span className="absolute inset-0 rounded-md overflow-hidden">
                              <img src={"https://media.graphassets.com/M9qI1dMIT6KNKpFMYvYo"} alt="" className="w-full h-full object-center object-cover" />
                            </span>
                            <span
                              className={classNames(
                                selected ? 'ring-indigo-500' : 'ring-transparent',
                                'absolute inset-0 rounded-md ring-2 ring-offset-2 pointer-events-none'
                              )}
                              aria-hidden="true"
                            />
                          </>
                        )}
                      </Tab>


                        
                          <Tab
                        // key={image.id}
                        className="relative h-52 bg-white rounded-md flex items-center justify-center text-sm font-medium uppercase text-gray-900 cursor-pointer hover:bg-gray-50 focus:outline-none focus:ring focus:ring-offset-4 focus:ring-opacity-50"
                      >
                        {({ selected }) => (
                          <>
                            
                            <span className="absolute inset-0 rounded-md overflow-hidden">
                              <img src={"https://media.graphassets.com/XjRXZ9IoQzep6CK0z20E"} alt="" className="w-full h-full object-center object-cover" />
                            </span>
                            <span
                              className={classNames(
                                selected ? 'ring-indigo-500' : 'ring-transparent',
                                'absolute inset-0 rounded-md ring-2 ring-offset-2 pointer-events-none'
                              )}
                              aria-hidden="true"
                            />
                          </>
                        )}
                      </Tab> */}


                            {/* VERTICAL */}
                            <Tab
                        // key={image.id}
                        className="relative h-52 bg-white rounded-md flex items-center justify-center text-sm font-medium uppercase text-gray-900 cursor-pointer hover:bg-gray-50 focus:outline-none focus:ring focus:ring-offset-4 focus:ring-opacity-50"
                      >
                        {({ selected }) => (
                          <>
                            
                            <span className="absolute inset-0 rounded-md overflow-hidden">
                              <img src={"https://media.graphassets.com/m28R60PT4OX9QWwXYwQl"} alt="" className="w-full h-full object-center object-cover" />
                            </span>
                            <span
                              className={classNames(
                                selected ? 'ring-indigo-500' : 'ring-transparent',
                                'absolute inset-0 rounded-md ring-2 ring-offset-2 pointer-events-none'
                              )}
                              aria-hidden="true"
                            />
                          </>
                        )}
                      </Tab>
                  



                            
                            {/* <Tab
                        // key={image.id}
                        className="relative h-52 bg-white rounded-md flex items-center justify-center text-sm font-medium uppercase text-gray-900 cursor-pointer hover:bg-gray-50 focus:outline-none focus:ring focus:ring-offset-4 focus:ring-opacity-50"
                      >
                        {({ selected }) => (
                          <>
                            
                            <span className="absolute inset-0 rounded-md overflow-hidden">
                              <img src={"https://media.graphassets.com/krtLRr2RTg2hsQTptsAx"} alt="" className="w-full h-full object-center object-cover" />
                            </span>
                            <span
                              className={classNames(
                                selected ? 'ring-indigo-500' : 'ring-transparent',
                                'absolute inset-0 rounded-md ring-2 ring-offset-2 pointer-events-none'
                              )}
                              aria-hidden="true"
                            />
                          </>
                        )}
                      </Tab>



                         
                         <Tab
                        // key={image.id}
                        className="relative h-52 bg-white rounded-md flex items-center justify-center text-sm font-medium uppercase text-gray-900 cursor-pointer hover:bg-gray-50 focus:outline-none focus:ring focus:ring-offset-4 focus:ring-opacity-50"
                      >
                        {({ selected }) => (
                          <>
                            
                            <span className="absolute inset-0 rounded-md overflow-hidden">
                              <img src={"https://media.graphassets.com/vmuz6rSB2h4nxb7hrcg2"} alt="" className="w-full h-full object-center object-cover" />
                            </span>
                            <span
                              className={classNames(
                                selected ? 'ring-indigo-500' : 'ring-transparent',
                                'absolute inset-0 rounded-md ring-2 ring-offset-2 pointer-events-none'
                              )}
                              aria-hidden="true"
                            />
                          </>
                        )}
                      </Tab>


                           
                           <Tab
                        // key={image.id}
                        className="relative h-52 bg-white rounded-md flex items-center justify-center text-sm font-medium uppercase text-gray-900 cursor-pointer hover:bg-gray-50 focus:outline-none focus:ring focus:ring-offset-4 focus:ring-opacity-50"
                      >
                        {({ selected }) => (
                          <>
                            
                            <span className="absolute inset-0 rounded-md overflow-hidden">
                              <img src={"https://media.graphassets.com/vk3jGz2WQGCRU031IpfQ"} alt="" className="w-full h-full object-center object-cover" />
                            </span>
                            <span
                              className={classNames(
                                selected ? 'ring-indigo-500' : 'ring-transparent',
                                'absolute inset-0 rounded-md ring-2 ring-offset-2 pointer-events-none'
                              )}
                              aria-hidden="true"
                            />
                          </>
                        )}
                      </Tab>


                               
                               <Tab
                        // key={image.id}
                        className="relative h-52 bg-white rounded-md flex items-center justify-center text-sm font-medium uppercase text-gray-900 cursor-pointer hover:bg-gray-50 focus:outline-none focus:ring focus:ring-offset-4 focus:ring-opacity-50"
                      >
                        {({ selected }) => (
                          <>
                            
                            <span className="absolute inset-0 rounded-md overflow-hidden">
                              <img src={"https://media.graphassets.com/OY5NG3yYQ26z3nqIHFfB"} alt="" className="w-full h-full object-center object-cover" />
                            </span>
                            <span
                              className={classNames(
                                selected ? 'ring-indigo-500' : 'ring-transparent',
                                'absolute inset-0 rounded-md ring-2 ring-offset-2 pointer-events-none'
                              )}
                              aria-hidden="true"
                            />
                          </>
                        )}
                      </Tab> */}


            
            <Tab
                        // key={image.id}
                        className="relative h-52 bg-white rounded-md flex items-center justify-center text-sm font-medium uppercase text-gray-900 cursor-pointer hover:bg-gray-50 focus:outline-none focus:ring focus:ring-offset-4 focus:ring-opacity-50"
                      >
                        {({ selected }) => (
                          <>
                            
                            <span className="absolute inset-0 rounded-md overflow-hidden">
                              <img src={"https://media.graphassets.com/p27kOo2SCCti15wp7yXh"} alt="" className="w-full h-full object-center object-cover" />
                            </span>
                            <span
                              className={classNames(
                                selected ? 'ring-indigo-500' : 'ring-transparent',
                                'absolute inset-0 rounded-md ring-2 ring-offset-2 pointer-events-none'
                              )}
                              aria-hidden="true"
                            />
                          </>
                        )}
                      </Tab>




                  </Tab.List>
                </div>



    
                <Tab.Panels className="w-full aspect-w-1 aspect-h-1">


                <Tab.Panel key={1}>
                   <img
                     src={"https://media.graphassets.com/CjMXk56hRyy8dhp4GXDb"}
                     alt={"hey"}
                     className="w-full h-full object-center object-cover sm:rounded-lg"
                   />
                   
                 </Tab.Panel>

                 
                 <Tab.Panel key={1}>
                   <img
                     src={"https://media.graphassets.com/aJ34hX5qTHeMR91WJ9Ds"}
                     alt={"hey"}
                     className="w-full h-full object-center object-cover sm:rounded-lg"
                   />
                   
                 </Tab.Panel>
                    {/* <Tab.Panel key={1}>
                      <img
                        src={"https://media.graphassets.com/gmEv6vHMSXaRmxeReEgN"}
                        alt={"hey"}
                        className="w-full h-full object-center object-cover sm:rounded-lg"
                      />
                      
                    </Tab.Panel>


                 <Tab.Panel key={1}>
                   <img
                     src={"https://media.graphassets.com/DTZCgg7fQ6oV4ur44aU7"}
                     alt={"hey"}
                     className="w-full h-full object-center object-cover sm:rounded-lg"
                   />
                   
                 </Tab.Panel>


                 <Tab.Panel key={1}>
                   <img
                     src={"https://media.graphassets.com/tTwDtVo3TyCB1AHYre0N"}
                     alt={"hey"}
                     className="w-full h-full object-center object-cover sm:rounded-lg"
                   />
                   
                 </Tab.Panel>

                 <Tab.Panel key={1}>
                   <img
                     src={"https://media.graphassets.com/NfyXKCaS3umiZ8LO4vnK"}
                     alt={"hey"}
                     className="w-full h-full object-center object-cover sm:rounded-lg"
                   />
                   
                 </Tab.Panel> */}


                 <Tab.Panel key={1}>
                   <img
                     src={"https://media.graphassets.com/wOYXxGQSauWNw7KeTFLl"}
                     alt={"hey"}
                     className="w-full h-full object-center object-cover sm:rounded-lg"
                   />
                   
                 </Tab.Panel>


                 <Tab.Panel key={1}>
                   <img
                     src={"https://media.graphassets.com/3ZVIRYhSyKgMLtkoPaDd"}
                     alt={"hey"}
                     className="w-full h-full object-center object-cover sm:rounded-lg"
                   />
                   
                 </Tab.Panel>

                 {/* <Tab.Panel key={1}>
                   <img
                     src={"https://media.graphassets.com/VJ8jD0ZvTheQW0wDITZf"}
                     alt={"hey"}
                     className="w-full h-full object-center object-cover sm:rounded-lg"
                   />
                   
                 </Tab.Panel>

                 <Tab.Panel key={1}>
                   <img
                     src={"https://media.graphassets.com/hesrgOcsSWP9BEU2yNCw"}
                     alt={"hey"}
                     className="w-full h-full object-center object-cover sm:rounded-lg"
                   />
                   
                 </Tab.Panel> */}


               

                 {/* <Tab.Panel key={1}>
                   <img
                     src={"https://media.graphassets.com/Y60XR3lTRNqftWbjYKvj"}
                     alt={"hey"}
                     className="w-full h-full object-center object-cover sm:rounded-lg"
                   />
                   
                 </Tab.Panel>


                 <Tab.Panel key={1}>
                   <img
                     src={"https://media.graphassets.com/XDcFK9gQShxg9RJloSQ2"}
                     alt={"hey"}
                     className="w-full h-full object-center object-cover sm:rounded-lg"
                   />
                   
                 </Tab.Panel> */}


                 <Tab.Panel key={1}>
                   <img
                     src={"https://media.graphassets.com/GZzU7IzVRlebLzwbCWIp"}
                     alt={"hey"}
                     className="w-full h-full object-center object-cover sm:rounded-lg"
                   />
                   
                 </Tab.Panel>

                 {/* <Tab.Panel key={1}>
                   <img
                     src={"https://media.graphassets.com/l7dBvdYTceJolEpsynLN"}
                     alt={"hey"}
                     className="w-full h-full object-center object-cover sm:rounded-lg"
                   />
                   
                 </Tab.Panel> */}






   
   <Tab.Panel key={1}>
                   <img
                     src={"https://media.graphassets.com/fqoXMPcKQBKozFlPQDGF"}
                     alt={"hey"}
                     className="w-full h-full object-center object-cover sm:rounded-lg"
                   />
                   
                 </Tab.Panel>


                 
                 {/* <Tab.Panel key={1}>
                   <img
                     src={"https://media.graphassets.com/hQ74jsESvORr15HZp2b2"}
                     alt={"hey"}
                     className="w-full h-full object-center object-cover sm:rounded-lg"
                   />
                   
                 </Tab.Panel>


              
                 <Tab.Panel key={1}>
                   <img
                     src={"https://media.graphassets.com/M9qI1dMIT6KNKpFMYvYo"}
                     alt={"hey"}
                     className="w-full h-full object-center object-cover sm:rounded-lg"
                   />
                 </Tab.Panel>

                  
                   <Tab.Panel key={1}>
                   <img
                     src={"https://media.graphassets.com/XjRXZ9IoQzep6CK0z20E"}
                     alt={"hey"}
                     className="w-full h-full object-center object-cover sm:rounded-lg"
                   />
                 </Tab.Panel> */}


                
                  <Tab.Panel key={1}>
                   <img
                     src={"https://media.graphassets.com/m28R60PT4OX9QWwXYwQl"}
                     alt={"hey"}
                     className="w-full h-full object-center object-cover sm:rounded-lg"
                   />
                 </Tab.Panel>

                 
                
                  {/* <Tab.Panel key={1}>
                   <img
                     src={"https://media.graphassets.com/krtLRr2RTg2hsQTptsAx"}
                     alt={"hey"}
                     className="w-full h-full object-center object-cover sm:rounded-lg"
                   />
                 </Tab.Panel>


               
                 <Tab.Panel key={1}>
                   <img
                     src={"https://media.graphassets.com/vmuz6rSB2h4nxb7hrcg2"}
                     alt={"hey"}
                     className="w-full h-full object-center object-cover sm:rounded-lg"
                   />
                 </Tab.Panel>


                 
                   <Tab.Panel key={1}>
                   <img
                     src={"https://media.graphassets.com/vk3jGz2WQGCRU031IpfQ"}
                     alt={"hey"}
                     className="w-full h-full object-center object-cover sm:rounded-lg"
                   />
                 </Tab.Panel>



                   
                     <Tab.Panel key={1}>
                   <img
                     src={"https://media.graphassets.com/OY5NG3yYQ26z3nqIHFfB"}
                     alt={"hey"}
                     className="w-full h-full object-center object-cover sm:rounded-lg"
                   />
                 </Tab.Panel> */}


                       
                         <Tab.Panel key={1}>
                   <img
                     src={"https://media.graphassets.com/p27kOo2SCCti15wp7yXh"}
                     alt={"hey"}
                     className="w-full h-full object-center object-cover sm:rounded-lg"
                   />
                 </Tab.Panel>

              
             </Tab.Panels>
                 
              


            
           </Tab.Group>
    
           
            </div>
          </div>
        </div>
      )














































































































       case 'blog-8': //  Sun May 30, 2021
       return (
        <div className="bg-white">
          <div className="max-w-2xl mx-auto   px-4 sm:pt-12 sm:pb-6 sm:px-6 lg:max-w-7xl lg:px-8">
            <div className="grid grid-cols-1 gap-x-8 items-start">
              {/* Image gallery */}
              <Tab.Group as="div" className="flex flex-col-reverse">
                {/* Image selector */}
                <div className="visible mt-6 w-full max-w-2xl mx-auto sm:block lg:max-w-none">
                  <Tab.List className="grid grid-cols-4 gap-6">
                    {/* {product.images.map((image) => ( */}


                    <Tab
                        // key={image.id}
                        className="relative h-52 bg-white rounded-md flex items-center justify-center text-sm font-medium uppercase text-gray-900 cursor-pointer hover:bg-gray-50 focus:outline-none focus:ring focus:ring-offset-4 focus:ring-opacity-50"
                      >
                        {({ selected }) => (
                          <>
                            
                            <span className="absolute inset-0 rounded-md overflow-hidden">
                              <img src={"https://media.graphassets.com/h6RgVcTcSn6MNt4dgEMS"} alt="" className="w-full h-full object-center object-cover" />
                            </span>
                            <span
                              className={classNames(
                                selected ? 'ring-indigo-500' : 'ring-transparent',
                                'absolute inset-0 rounded-md ring-2 ring-offset-2 pointer-events-none'
                              )}
                              aria-hidden="true"
                            />
                          </>
                        )}
                      </Tab>



                      <Tab
                        // key={image.id}
                        className="relative h-52 bg-white rounded-md flex items-center justify-center text-sm font-medium uppercase text-gray-900 cursor-pointer hover:bg-gray-50 focus:outline-none focus:ring focus:ring-offset-4 focus:ring-opacity-50"
                      >
                        {({ selected }) => (
                          <>
                            
                            <span className="absolute inset-0 rounded-md overflow-hidden">
                              <img src={"https://media.graphassets.com/GdsrPlZREWKoZqCJjhLg"} alt="" className="w-full h-full object-center object-cover" />
                            </span>
                            <span
                              className={classNames(
                                selected ? 'ring-indigo-500' : 'ring-transparent',
                                'absolute inset-0 rounded-md ring-2 ring-offset-2 pointer-events-none'
                              )}
                              aria-hidden="true"
                            />
                          </>
                        )}
                      </Tab>



                      <Tab
                        // key={image.id}
                        className="relative h-52 bg-white rounded-md flex items-center justify-center text-sm font-medium uppercase text-gray-900 cursor-pointer hover:bg-gray-50 focus:outline-none focus:ring focus:ring-offset-4 focus:ring-opacity-50"
                      >
                        {({ selected }) => (
                          <>
                            
                            <span className="absolute inset-0 rounded-md overflow-hidden">
                              <img src={"https://media.graphassets.com/P2aQFpIvSaLevDoe7RDR"} alt="" className="w-full h-full object-center object-cover" />
                            </span>
                            <span
                              className={classNames(
                                selected ? 'ring-indigo-500' : 'ring-transparent',
                                'absolute inset-0 rounded-md ring-2 ring-offset-2 pointer-events-none'
                              )}
                              aria-hidden="true"
                            />
                          </>
                        )}
                      </Tab>


                      
                      <Tab
                        // key={image.id}
                        className="relative h-52 bg-white rounded-md flex items-center justify-center text-sm font-medium uppercase text-gray-900 cursor-pointer hover:bg-gray-50 focus:outline-none focus:ring focus:ring-offset-4 focus:ring-opacity-50"
                      >
                        {({ selected }) => (
                          <>
                            
                            <span className="absolute inset-0 rounded-md overflow-hidden">
                              <img src={"https://media.graphassets.com/7jKL07oRYK8B2mEsyTfP"} alt="" className="w-full h-full object-center object-cover" />
                            </span>
                            <span
                              className={classNames(
                                selected ? 'ring-indigo-500' : 'ring-transparent',
                                'absolute inset-0 rounded-md ring-2 ring-offset-2 pointer-events-none'
                              )}
                              aria-hidden="true"
                            />
                          </>
                        )}
                      </Tab>




                      <Tab
                        // key={image.id}
                        className="relative h-52 bg-white rounded-md flex items-center justify-center text-sm font-medium uppercase text-gray-900 cursor-pointer hover:bg-gray-50 focus:outline-none focus:ring focus:ring-offset-4 focus:ring-opacity-50"
                      >
                        {({ selected }) => (
                          <>
                            
                            <span className="absolute inset-0 rounded-md overflow-hidden">
                              <img src={"https://media.graphassets.com/uxznR0nRRSqcYKP5Lsel"} alt="" className="w-full h-full object-center object-cover" />
                            </span>
                            <span
                              className={classNames(
                                selected ? 'ring-indigo-500' : 'ring-transparent',
                                'absolute inset-0 rounded-md ring-2 ring-offset-2 pointer-events-none'
                              )}
                              aria-hidden="true"
                            />
                          </>
                        )}
                      </Tab>


                      <Tab
                        // key={image.id}
                        className="relative h-52 bg-white rounded-md flex items-center justify-center text-sm font-medium uppercase text-gray-900 cursor-pointer hover:bg-gray-50 focus:outline-none focus:ring focus:ring-offset-4 focus:ring-opacity-50"
                      >
                        {({ selected }) => (
                          <>
                            
                            <span className="absolute inset-0 rounded-md overflow-hidden">
                              <img src={"https://media.graphassets.com/mI25pFJcQheMFGP0q0jP"} alt="" className="w-full h-full object-center object-cover" />
                            </span>
                            <span
                              className={classNames(
                                selected ? 'ring-indigo-500' : 'ring-transparent',
                                'absolute inset-0 rounded-md ring-2 ring-offset-2 pointer-events-none'
                              )}
                              aria-hidden="true"
                            />
                          </>
                        )}
                      </Tab>


                      <Tab
                        // key={image.id}
                        className="relative h-52 bg-white rounded-md flex items-center justify-center text-sm font-medium uppercase text-gray-900 cursor-pointer hover:bg-gray-50 focus:outline-none focus:ring focus:ring-offset-4 focus:ring-opacity-50"
                      >
                        {({ selected }) => (
                          <>
                            
                            <span className="absolute inset-0 rounded-md overflow-hidden">
                              <img src={"https://media.graphassets.com/E2gAchNAS6GHN5EY7bMf"} alt="" className="w-full h-full object-center object-cover" />
                            </span>
                            <span
                              className={classNames(
                                selected ? 'ring-indigo-500' : 'ring-transparent',
                                'absolute inset-0 rounded-md ring-2 ring-offset-2 pointer-events-none'
                              )}
                              aria-hidden="true"
                            />
                          </>
                        )}
                      </Tab>



                      {/* <Tab
                        // key={image.id}
                        className="relative h-52 bg-white rounded-md flex items-center justify-center text-sm font-medium uppercase text-gray-900 cursor-pointer hover:bg-gray-50 focus:outline-none focus:ring focus:ring-offset-4 focus:ring-opacity-50"
                      >
                        {({ selected }) => (
                          <>
                            
                            <span className="absolute inset-0 rounded-md overflow-hidden">
                              <img src={"https://media.graphassets.com/NZ6GGLyYTsmBjqcSDSWH"} alt="" className="w-full h-full object-center object-cover" />
                            </span>
                            <span
                              className={classNames(
                                selected ? 'ring-indigo-500' : 'ring-transparent',
                                'absolute inset-0 rounded-md ring-2 ring-offset-2 pointer-events-none'
                              )}
                              aria-hidden="true"
                            />
                          </>
                        )}
                      </Tab> */}


                    

                    


                      {/* <Tab
                        // key={image.id}
                        className="relative h-52 bg-white rounded-md flex items-center justify-center text-sm font-medium uppercase text-gray-900 cursor-pointer hover:bg-gray-50 focus:outline-none focus:ring focus:ring-offset-4 focus:ring-opacity-50"
                      >
                        {({ selected }) => (
                          <>
                            
                            <span className="absolute inset-0 rounded-md overflow-hidden">
                              <img src={"https://media.graphassets.com/gp5UWPTCS4ijvUiBeMum"} alt="" className="w-full h-full object-center object-cover" />
                            </span>
                            <span
                              className={classNames(
                                selected ? 'ring-indigo-500' : 'ring-transparent',
                                'absolute inset-0 rounded-md ring-2 ring-offset-2 pointer-events-none'
                              )}
                              aria-hidden="true"
                            />
                          </>
                        )}
                      </Tab> */}


                      {/* <Tab
                        // key={image.id}
                        className="relative h-52 bg-white rounded-md flex items-center justify-center text-sm font-medium uppercase text-gray-900 cursor-pointer hover:bg-gray-50 focus:outline-none focus:ring focus:ring-offset-4 focus:ring-opacity-50"
                      >
                        {({ selected }) => (
                          <>
                            
                            <span className="absolute inset-0 rounded-md overflow-hidden">
                              <img src={"https://media.graphassets.com/oSSSWcE5T4KNEhC7rNPS"} alt="" className="w-full h-full object-center object-cover" />
                            </span>
                            <span
                              className={classNames(
                                selected ? 'ring-indigo-500' : 'ring-transparent',
                                'absolute inset-0 rounded-md ring-2 ring-offset-2 pointer-events-none'
                              )}
                              aria-hidden="true"
                            />
                          </>
                        )}
                      </Tab> */}


                      {/* <Tab
                        // key={image.id}
                        className="relative h-52 bg-white rounded-md flex items-center justify-center text-sm font-medium uppercase text-gray-900 cursor-pointer hover:bg-gray-50 focus:outline-none focus:ring focus:ring-offset-4 focus:ring-opacity-50"
                      >
                        {({ selected }) => (
                          <>
                            
                            <span className="absolute inset-0 rounded-md overflow-hidden">
                              <img src={"https://media.graphassets.com/iwa8J8YRtm5EGlQKOAJK"} alt="" className="w-full h-full object-center object-cover" />
                            </span>
                            <span
                              className={classNames(
                                selected ? 'ring-indigo-500' : 'ring-transparent',
                                'absolute inset-0 rounded-md ring-2 ring-offset-2 pointer-events-none'
                              )}
                              aria-hidden="true"
                            />
                          </>
                        )}
                      </Tab> */}


                      {/* <Tab
                        // key={image.id}
                        className="relative h-52 bg-white rounded-md flex items-center justify-center text-sm font-medium uppercase text-gray-900 cursor-pointer hover:bg-gray-50 focus:outline-none focus:ring focus:ring-offset-4 focus:ring-opacity-50"
                      >
                        {({ selected }) => (
                          <>
                            
                            <span className="absolute inset-0 rounded-md overflow-hidden">
                              <img src={"https://media.graphassets.com/uLKZKu8TrCkvlIoCAU3o"} alt="" className="w-full h-full object-center object-cover" />
                            </span>
                            <span
                              className={classNames(
                                selected ? 'ring-indigo-500' : 'ring-transparent',
                                'absolute inset-0 rounded-md ring-2 ring-offset-2 pointer-events-none'
                              )}
                              aria-hidden="true"
                            />
                          </>
                        )}
                      </Tab> */}

                      {/* <Tab
                        // key={image.id}
                        className="relative h-52 bg-white rounded-md flex items-center justify-center text-sm font-medium uppercase text-gray-900 cursor-pointer hover:bg-gray-50 focus:outline-none focus:ring focus:ring-offset-4 focus:ring-opacity-50"
                      >
                        {({ selected }) => (
                          <>
                            
                            <span className="absolute inset-0 rounded-md overflow-hidden">
                              <img src={"https://media.graphassets.com/QYethKLESS6Xd0HL9sfr"} alt="" className="w-full h-full object-center object-cover" />
                            </span>
                            <span
                              className={classNames(
                                selected ? 'ring-indigo-500' : 'ring-transparent',
                                'absolute inset-0 rounded-md ring-2 ring-offset-2 pointer-events-none'
                              )}
                              aria-hidden="true"
                            />
                          </>
                        )}
                      </Tab> */}


                   




                    
                      


                   
                  
                  
                  </Tab.List>
                </div>
    
                <Tab.Panels className="w-full aspect-w-1 aspect-h-1">

                <Tab.Panel key={1}>
                      <img
                        src={"https://media.graphassets.com/h6RgVcTcSn6MNt4dgEMS"}
                        alt={"hey"}
                        className="w-full h-full object-center object-cover sm:rounded-lg"
                      />
                      
                    </Tab.Panel>


                    <Tab.Panel key={1}>
                      <img
                        src={"https://media.graphassets.com/GdsrPlZREWKoZqCJjhLg"}
                        alt={"hey"}
                        className="w-full h-full object-center object-cover sm:rounded-lg"
                      />
                      
                    </Tab.Panel>


                    <Tab.Panel key={1}>
                      <img
                        src={"https://media.graphassets.com/P2aQFpIvSaLevDoe7RDR"}
                        alt={"hey"}
                        className="w-full h-full object-center object-cover sm:rounded-lg"
                      />
                      
                    </Tab.Panel>


                    <Tab.Panel key={1}>
                      <img
                        src={"https://media.graphassets.com/7jKL07oRYK8B2mEsyTfP"}
                        alt={"hey"}
                        className="w-full h-full object-center object-cover sm:rounded-lg"
                      />
                      
                    </Tab.Panel>



                    <Tab.Panel key={1}>
                      <img
                        src={"https://media.graphassets.com/uxznR0nRRSqcYKP5Lsel"}
                        alt={"hey"}
                        className="w-full h-full object-center object-cover sm:rounded-lg"
                      />
                      
                    </Tab.Panel>


                    <Tab.Panel key={1}>
                      <img
                        src={"https://media.graphassets.com/mI25pFJcQheMFGP0q0jP"}
                        alt={"hey"}
                        className="w-full h-full object-center object-cover sm:rounded-lg"
                      />
                      
                    </Tab.Panel>

                    <Tab.Panel key={1}>
                      <img
                        src={"https://media.graphassets.com/E2gAchNAS6GHN5EY7bMf"}
                        alt={"hey"}
                        className="w-full h-full object-center object-cover sm:rounded-lg"
                      />
                      
                    </Tab.Panel>

                 
                    {/* <Tab.Panel key={1}>
                      <img
                        src={"https://media.graphassets.com/NZ6GGLyYTsmBjqcSDSWH"}
                        alt={"hey"}
                        className="w-full h-full object-center object-cover sm:rounded-lg"
                      />
                      
                    </Tab.Panel> */}

                   

                 


                    {/* <Tab.Panel key={1}>
                      <img
                        src={"https://media.graphassets.com/gp5UWPTCS4ijvUiBeMum"}
                        alt={"hey"}
                        className="w-full h-full object-center object-cover sm:rounded-lg"
                      />
                      
                    </Tab.Panel> */}


                    {/* <Tab.Panel key={1}>
                      <img
                        src={"https://media.graphassets.com/oSSSWcE5T4KNEhC7rNPS"}
                        alt={"hey"}
                        className="w-full h-full object-center object-cover sm:rounded-lg"
                      />
                      
                    </Tab.Panel> */}


                    {/* <Tab.Panel key={1}>
                      <img
                        src={"https://media.graphassets.com/iwa8J8YRtm5EGlQKOAJK"}
                        alt={"hey"}
                        className="w-full h-full object-center object-cover sm:rounded-lg"
                      />
                      
                    </Tab.Panel> */}


                    {/* <Tab.Panel key={1}>
                      <img
                        src={"https://media.graphassets.com/uLKZKu8TrCkvlIoCAU3o"}
                        alt={"hey"}
                        className="w-full h-full object-center object-cover sm:rounded-lg"
                      />
                      
                    </Tab.Panel> */}


                    {/* <Tab.Panel key={1}>
                      <img
                        src={"https://media.graphassets.com/QYethKLESS6Xd0HL9sfr"}
                        alt={"hey"}
                        className="w-full h-full object-center object-cover sm:rounded-lg"
                      />
                      
                    </Tab.Panel> */}

                 

                   

                  



                   
                 
                </Tab.Panels>
              </Tab.Group>
    
           
            </div>
          </div>
        </div>
      )























       case 'blog-9': // Tue June 1, 2021
       return (
        <div className="bg-white">
          <div className="max-w-2xl mx-auto   px-4 sm:pt-12 sm:pb-6 sm:px-6 lg:max-w-7xl lg:px-8">
            <div className="grid grid-cols-1 gap-x-8 items-start">
              {/* Image gallery */}
              <Tab.Group as="div" className="flex flex-col-reverse">
                {/* Image selector */}
                <div className="visible mt-6 w-full max-w-2xl mx-auto sm:block lg:max-w-none">
                  <Tab.List className="grid grid-cols-4 gap-6">
                    {/* {product.images.map((image) => ( */}
                      <Tab
                        // key={image.id}
                        className="relative h-52 bg-white rounded-md flex items-center justify-center text-sm font-medium uppercase text-gray-900 cursor-pointer hover:bg-gray-50 focus:outline-none focus:ring focus:ring-offset-4 focus:ring-opacity-50"
                      >
                        {({ selected }) => (
                          <>
                            
                            <span className="absolute inset-0 rounded-md overflow-hidden">
                              <img src={"https://media.graphassets.com/ncmcqVWuQ7er2EiKGNUI"} alt="" className="w-full h-full object-center object-cover" />
                            </span>
                            <span
                              className={classNames(
                                selected ? 'ring-indigo-500' : 'ring-transparent',
                                'absolute inset-0 rounded-md ring-2 ring-offset-2 pointer-events-none'
                              )}
                              aria-hidden="true"
                            />
                          </>
                        )}
                      </Tab>


                      <Tab
                        // key={image.id}
                        className="relative h-52 bg-white rounded-md flex items-center justify-center text-sm font-medium uppercase text-gray-900 cursor-pointer hover:bg-gray-50 focus:outline-none focus:ring focus:ring-offset-4 focus:ring-opacity-50"
                      >
                        {({ selected }) => (
                          <>
                            
                            <span className="absolute inset-0 rounded-md overflow-hidden">
                              <img src={"https://media.graphassets.com/KQ3TPYmuSGewC56qsfDc"} alt="" className="w-full h-full object-center object-cover" />
                            </span>
                            <span
                              className={classNames(
                                selected ? 'ring-indigo-500' : 'ring-transparent',
                                'absolute inset-0 rounded-md ring-2 ring-offset-2 pointer-events-none'
                              )}
                              aria-hidden="true"
                            />
                          </>
                        )}
                      </Tab>


                      <Tab
                        // key={image.id}
                        className="relative h-52 bg-white rounded-md flex items-center justify-center text-sm font-medium uppercase text-gray-900 cursor-pointer hover:bg-gray-50 focus:outline-none focus:ring focus:ring-offset-4 focus:ring-opacity-50"
                      >
                        {({ selected }) => (
                          <>
                            
                            <span className="absolute inset-0 rounded-md overflow-hidden">
                              <img src={"https://media.graphassets.com/ogSlCASFRaIGAnFHY7m6"} alt="" className="w-full h-full object-center object-cover" />
                            </span>
                            <span
                              className={classNames(
                                selected ? 'ring-indigo-500' : 'ring-transparent',
                                'absolute inset-0 rounded-md ring-2 ring-offset-2 pointer-events-none'
                              )}
                              aria-hidden="true"
                            />
                          </>
                        )}
                      </Tab>

                      {/* <Tab
                        // key={image.id}
                        className="relative h-52 bg-white rounded-md flex items-center justify-center text-sm font-medium uppercase text-gray-900 cursor-pointer hover:bg-gray-50 focus:outline-none focus:ring focus:ring-offset-4 focus:ring-opacity-50"
                      >
                        {({ selected }) => (
                          <>
                            
                            <span className="absolute inset-0 rounded-md overflow-hidden">
                              <img src={"https://media.graphassets.com/0DjRYRLUSc8TSMGrBNks"} alt="" className="w-full h-full object-center object-cover" />
                            </span>
                            <span
                              className={classNames(
                                selected ? 'ring-indigo-500' : 'ring-transparent',
                                'absolute inset-0 rounded-md ring-2 ring-offset-2 pointer-events-none'
                              )}
                              aria-hidden="true"
                            />
                          </>
                        )}
                      </Tab> */}

                      <Tab
                        // key={image.id}
                        className="relative h-52 bg-white rounded-md flex items-center justify-center text-sm font-medium uppercase text-gray-900 cursor-pointer hover:bg-gray-50 focus:outline-none focus:ring focus:ring-offset-4 focus:ring-opacity-50"
                      >
                        {({ selected }) => (
                          <>
                            
                            <span className="absolute inset-0 rounded-md overflow-hidden">
                              <img src={"https://media.graphassets.com/R90qnMusSCWTns68SxrQ"} alt="" className="w-full h-full object-center object-cover" />
                            </span>
                            <span
                              className={classNames(
                                selected ? 'ring-indigo-500' : 'ring-transparent',
                                'absolute inset-0 rounded-md ring-2 ring-offset-2 pointer-events-none'
                              )}
                              aria-hidden="true"
                            />
                          </>
                        )}
                      </Tab>

                      <Tab
                        // key={image.id}
                        className="relative h-52 bg-white rounded-md flex items-center justify-center text-sm font-medium uppercase text-gray-900 cursor-pointer hover:bg-gray-50 focus:outline-none focus:ring focus:ring-offset-4 focus:ring-opacity-50"
                      >
                        {({ selected }) => (
                          <>
                            
                            <span className="absolute inset-0 rounded-md overflow-hidden">
                              <img src={"https://media.graphassets.com/OumDgpwSRtKm7NKCYe6G"} alt="" className="w-full h-full object-center object-cover" />
                            </span>
                            <span
                              className={classNames(
                                selected ? 'ring-indigo-500' : 'ring-transparent',
                                'absolute inset-0 rounded-md ring-2 ring-offset-2 pointer-events-none'
                              )}
                              aria-hidden="true"
                            />
                          </>
                        )}
                      </Tab>


                      <Tab
                        // key={image.id}
                        className="relative h-52 bg-white rounded-md flex items-center justify-center text-sm font-medium uppercase text-gray-900 cursor-pointer hover:bg-gray-50 focus:outline-none focus:ring focus:ring-offset-4 focus:ring-opacity-50"
                      >
                        {({ selected }) => (
                          <>
                            
                            <span className="absolute inset-0 rounded-md overflow-hidden">
                              <img src={"https://media.graphassets.com/zTiXNQSxSAql23eVJB4r"} alt="" className="w-full h-full object-center object-cover" />
                            </span>
                            <span
                              className={classNames(
                                selected ? 'ring-indigo-500' : 'ring-transparent',
                                'absolute inset-0 rounded-md ring-2 ring-offset-2 pointer-events-none'
                              )}
                              aria-hidden="true"
                            />
                          </>
                        )}
                      </Tab>


                      <Tab
                        // key={image.id}
                        className="relative h-52 bg-white rounded-md flex items-center justify-center text-sm font-medium uppercase text-gray-900 cursor-pointer hover:bg-gray-50 focus:outline-none focus:ring focus:ring-offset-4 focus:ring-opacity-50"
                      >
                        {({ selected }) => (
                          <>
                            
                            <span className="absolute inset-0 rounded-md overflow-hidden">
                              <img src={"https://media.graphassets.com/9lmT3FBQKkYpvxW9NlWA"} alt="" className="w-full h-full object-center object-cover" />
                            </span>
                            <span
                              className={classNames(
                                selected ? 'ring-indigo-500' : 'ring-transparent',
                                'absolute inset-0 rounded-md ring-2 ring-offset-2 pointer-events-none'
                              )}
                              aria-hidden="true"
                            />
                          </>
                        )}
                      </Tab>


                      {/* <Tab I like this photo but for the time being comment seattle flag
                        // key={image.id}
                        className="relative h-52 bg-white rounded-md flex items-center justify-center text-sm font-medium uppercase text-gray-900 cursor-pointer hover:bg-gray-50 focus:outline-none focus:ring focus:ring-offset-4 focus:ring-opacity-50"
                      >
                        {({ selected }) => (
                          <>
                            
                            <span className="absolute inset-0 rounded-md overflow-hidden">
                              <img src={"https://media.graphassets.com/RCtlXix1QZ65NY5wuvu4"} alt="" className="w-full h-full object-center object-cover" />
                            </span>
                            <span
                              className={classNames(
                                selected ? 'ring-indigo-500' : 'ring-transparent',
                                'absolute inset-0 rounded-md ring-2 ring-offset-2 pointer-events-none'
                              )}
                              aria-hidden="true"
                            />
                          </>
                        )}
                      </Tab> */}

                      <Tab
                        // key={image.id}
                        className="relative h-52 bg-white rounded-md flex items-center justify-center text-sm font-medium uppercase text-gray-900 cursor-pointer hover:bg-gray-50 focus:outline-none focus:ring focus:ring-offset-4 focus:ring-opacity-50"
                      >
                        {({ selected }) => (
                          <>
                            
                            <span className="absolute inset-0 rounded-md overflow-hidden">
                              <img src={"https://media.graphassets.com/nqNhPNVtRSeH7TOlqAKT"} alt="" className="w-full h-full object-center object-cover" />
                             
                            </span>
                            <span
                              className={classNames(
                                selected ? 'ring-indigo-500' : 'ring-transparent',
                                'absolute inset-0 rounded-md ring-2 ring-offset-2 pointer-events-none'
                              )}
                              aria-hidden="true"
                            />
                          </>
                        )}
                      </Tab>

                      <Tab
                        // key={image.id}
                        className="relative h-52 bg-white rounded-md flex items-center justify-center text-sm font-medium uppercase text-gray-900 cursor-pointer hover:bg-gray-50 focus:outline-none focus:ring focus:ring-offset-4 focus:ring-opacity-50"
                        onClick={handleChange}
                      >
                        {({ selected }) => (
                          <>
                            
                            <span className="absolute inset-0 rounded-md overflow-hidden"  onClick={handleChange}>
                              <img src={"https://media.graphassets.com/T5ZGjv1iQReRce0VhwR0"} alt="" className="w-full h-full object-center object-cover" />
                             
                            </span>
                            <span
                              className={classNames(
                                selected ? 'ring-indigo-500' : 'ring-transparent',
                                'absolute inset-0 rounded-md ring-2 ring-offset-2 pointer-events-none'
                              )}
                              aria-hidden="true"
                            />
                          </>
                        )}
                      </Tab>
                  
                  
                  </Tab.List>
                </div>
    
                <Tab.Panels className="w-full aspect-w-1 aspect-h-1">
                 
                    <Tab.Panel key={1}>
                      <img
                        src={"https://media.graphassets.com/ncmcqVWuQ7er2EiKGNUI"}
                        alt={"hey"}
                        className="w-full h-full object-center object-cover sm:rounded-lg"
                      />
                      
                    </Tab.Panel>

                    
                    <Tab.Panel key={1}>
                      <img
                        src={"https://media.graphassets.com/KQ3TPYmuSGewC56qsfDc"}
                        alt={"hey"}
                        className="w-full h-full object-center object-cover sm:rounded-lg"
                      />
                      
                    </Tab.Panel>

                    <Tab.Panel key={1}>
                      <img
                        src={"https://media.graphassets.com/ogSlCASFRaIGAnFHY7m6"}
                        alt={"hey"}
                        className="w-full h-full object-center object-cover sm:rounded-lg"
                      />
                      
                    </Tab.Panel>

                    {/* <Tab.Panel key={1}> this is the seattle group photo TODO redo
                      <img
                        src={"https://media.graphassets.com/0DjRYRLUSc8TSMGrBNks"}
                        alt={"hey"}
                        className="w-full h-full object-center object-cover sm:rounded-lg"
                      />
                      
                    </Tab.Panel> */}

                    <Tab.Panel key={1}>
                      <img
                        src={"https://media.graphassets.com/R90qnMusSCWTns68SxrQ"}
                        alt={"hey"}
                        className="w-full h-full object-center object-cover sm:rounded-lg"
                      />
                      
                    </Tab.Panel>

                    <Tab.Panel key={1}>
                      <img
                        src={"https://media.graphassets.com/OumDgpwSRtKm7NKCYe6G"}
                        alt={"hey"}
                        className="w-full h-full object-center object-cover sm:rounded-lg"
                      />
                      
                    </Tab.Panel>


                    <Tab.Panel key={1}>
                      <img
                        src={"https://media.graphassets.com/zTiXNQSxSAql23eVJB4r"}
                        alt={"hey"}
                        className="w-full h-full object-center object-cover sm:rounded-lg"
                      />
                      
                    </Tab.Panel>

                    <Tab.Panel key={1}>
                      <img
                        src={"https://media.graphassets.com/9lmT3FBQKkYpvxW9NlWA"}
                        alt={"hey"}
                        className="w-full h-full object-center object-cover sm:rounded-lg"
                      />
                      
                    </Tab.Panel>


                    {/* <Tab.Panel key={1}>
                      <img
                        src={"https://media.graphassets.com/RCtlXix1QZ65NY5wuvu4"}
                        alt={"hey"}
                        className="w-full h-full object-center object-cover sm:rounded-lg"
                      />
                      
                    </Tab.Panel> */}

                    <Tab.Panel key={1} >
                      <img
                        src={"https://media.graphassets.com/nqNhPNVtRSeH7TOlqAKT"}
                        alt={"hey"}
                        className="w-full h-full object-center object-cover sm:rounded-lg"
                        
                      />
                      
                    </Tab.Panel>



                    <Tab.Panel key={1} >
{/*                       
                      <input
                        type="text"
                      
                        required
                        placeholder="URL..."
                      /> */}

                      <YouTube videoId={id} opts={opts} />
                      </Tab.Panel>
                 
                 
                </Tab.Panels>
              </Tab.Group>
    
           
            </div>
          </div>
        </div>
      )








































      case 'blog-10': // May 20, 2021
      return (
       <div className="bg-white ">
         <div className="max-w-2xl mx-auto   px-4 sm:pt-12 sm:pb-6 sm:px-6 lg:max-w-7xl lg:px-8">
           <div className="grid grid-cols-1 gap-x-8 items-start">
             {/* Image gallery */}
             <Tab.Group as="div" className="flex flex-col-reverse">
               {/* Image selector */}
               <div className="visible mt-6 w-full max-w-2xl mx-auto sm:block lg:max-w-none">
                 <Tab.List className="grid grid-cols-4 gap-6">
                   {/* {product.images.map((image) => ( */}
                     <Tab
                       // key={image.id}
                       className="relative h-52 bg-white rounded-md flex items-center justify-center text-sm font-medium uppercase text-gray-900 cursor-pointer hover:bg-gray-50 focus:outline-none focus:ring focus:ring-offset-4 focus:ring-opacity-50"
                     >
                       {({ selected }) => (
                         <>
                           
                           <span className="absolute inset-0 rounded-md overflow-hidden">
                             <img src={"https://media.graphassets.com/REbnVqK3SWa3GPyvZKcx"} alt="" className="w-full h-full object-center object-cover" />
                           </span>
                           <span
                             className={classNames(
                               selected ? 'ring-indigo-500' : 'ring-transparent',
                               'absolute inset-0 rounded-md ring-2 ring-offset-2 pointer-events-none'
                             )}
                             aria-hidden="true"
                           />
                         </>
                       )}
                     </Tab>


                     <Tab
                       // key={image.id}
                       className="relative h-52 bg-white rounded-md flex items-center justify-center text-sm font-medium uppercase text-gray-900 cursor-pointer hover:bg-gray-50 focus:outline-none focus:ring focus:ring-offset-4 focus:ring-opacity-50"
                     >
                       {({ selected }) => (
                         <>
                           
                           <span className="absolute inset-0 rounded-md overflow-hidden">
                             <img src={"https://media.graphassets.com/vplJlCTg2BkBS0BrVVLw"} alt="" className="w-full h-full object-center object-cover" />
                           </span>
                           <span
                             className={classNames(
                               selected ? 'ring-indigo-500' : 'ring-transparent',
                               'absolute inset-0 rounded-md ring-2 ring-offset-2 pointer-events-none'
                             )}
                             aria-hidden="true"
                           />
                         </>
                       )}
                     </Tab>



                     <Tab
                       // key={image.id}
                       className="relative h-52 bg-white rounded-md flex items-center justify-center text-sm font-medium uppercase text-gray-900 cursor-pointer hover:bg-gray-50 focus:outline-none focus:ring focus:ring-offset-4 focus:ring-opacity-50"
                     >
                       {({ selected }) => (
                         <>
                           
                           <span className="absolute inset-0 rounded-md overflow-hidden">
                             <img src={"https://media.graphassets.com/1E9gqNdTvuU6ncqK26aE"} alt="" className="w-full h-full object-center object-cover" />
                           </span>
                           <span
                             className={classNames(
                               selected ? 'ring-indigo-500' : 'ring-transparent',
                               'absolute inset-0 rounded-md ring-2 ring-offset-2 pointer-events-none'
                             )}
                             aria-hidden="true"
                           />
                         </>
                       )}
                     </Tab>


                     <Tab
                       // key={image.id}
                       className="relative h-52 bg-white rounded-md flex items-center justify-center text-sm font-medium uppercase text-gray-900 cursor-pointer hover:bg-gray-50 focus:outline-none focus:ring focus:ring-offset-4 focus:ring-opacity-50"
                     >
                       {({ selected }) => (
                         <>
                           
                           <span className="absolute inset-0 rounded-md overflow-hidden">
                             <img src={"https://media.graphassets.com/QjV8lnD9Q3aLgtQGEClM"} alt="" className="w-full h-full object-center object-cover" />
                           </span>
                           <span
                             className={classNames(
                               selected ? 'ring-indigo-500' : 'ring-transparent',
                               'absolute inset-0 rounded-md ring-2 ring-offset-2 pointer-events-none'
                             )}
                             aria-hidden="true"
                           />
                         </>
                       )}
                     </Tab>


                     <Tab
                       // key={image.id}
                       className="relative h-52 bg-white rounded-md flex items-center justify-center text-sm font-medium uppercase text-gray-900 cursor-pointer hover:bg-gray-50 focus:outline-none focus:ring focus:ring-offset-4 focus:ring-opacity-50"
                     >
                       {({ selected }) => (
                         <>
                           
                           <span className="absolute inset-0 rounded-md overflow-hidden">
                             <img src={"https://media.graphassets.com/bOgwJ4sdRJ2j6Nog8lxv"} alt="" className="w-full h-full object-center object-cover" />
                           </span>
                           <span
                             className={classNames(
                               selected ? 'ring-indigo-500' : 'ring-transparent',
                               'absolute inset-0 rounded-md ring-2 ring-offset-2 pointer-events-none'
                             )}
                             aria-hidden="true"
                           />
                         </>
                       )}
                     </Tab>


                     <Tab
                       // key={image.id}
                       className="relative h-52 bg-white rounded-md flex items-center justify-center text-sm font-medium uppercase text-gray-900 cursor-pointer hover:bg-gray-50 focus:outline-none focus:ring focus:ring-offset-4 focus:ring-opacity-50"
                     >
                       {({ selected }) => (
                         <>
                           
                           <span className="absolute inset-0 rounded-md overflow-hidden">
                             <img src={"https://media.graphassets.com/FZmw4Mv7TvypIOYsvrpn"} alt="" className="w-full h-full object-center object-cover" />
                           </span>
                           <span
                             className={classNames(
                               selected ? 'ring-indigo-500' : 'ring-transparent',
                               'absolute inset-0 rounded-md ring-2 ring-offset-2 pointer-events-none'
                             )}
                             aria-hidden="true"
                           />
                         </>
                       )}
                     </Tab>


                     <Tab
                       // key={image.id}
                       className="relative h-52 bg-white rounded-md flex items-center justify-center text-sm font-medium uppercase text-gray-900 cursor-pointer hover:bg-gray-50 focus:outline-none focus:ring focus:ring-offset-4 focus:ring-opacity-50"
                     >
                       {({ selected }) => (
                         <>
                           
                           <span className="absolute inset-0 rounded-md overflow-hidden">
                             <img src={"https://media.graphassets.com/esgV76WLTwWCEG2licZ6"} alt="" className="w-full h-full object-center object-cover" />
                           </span>
                           <span
                             className={classNames(
                               selected ? 'ring-indigo-500' : 'ring-transparent',
                               'absolute inset-0 rounded-md ring-2 ring-offset-2 pointer-events-none'
                             )}
                             aria-hidden="true"
                           />
                         </>
                       )}
                     </Tab>



                     <Tab
                       // key={image.id}
                       className="relative h-52 bg-white rounded-md flex items-center justify-center text-sm font-medium uppercase text-gray-900 cursor-pointer hover:bg-gray-50 focus:outline-none focus:ring focus:ring-offset-4 focus:ring-opacity-50"
                     >
                       {({ selected }) => (
                         <>
                           
                           <span className="absolute inset-0 rounded-md overflow-hidden">
                             <img src={"https://media.graphassets.com/BLU89kNPRiaaA3SKRtE3"} alt="" className="w-full h-full object-center object-cover" />
                           </span>
                           <span
                             className={classNames(
                               selected ? 'ring-indigo-500' : 'ring-transparent',
                               'absolute inset-0 rounded-md ring-2 ring-offset-2 pointer-events-none'
                             )}
                             aria-hidden="true"
                           />
                         </>
                       )}
                     </Tab>


                     <Tab
                       // key={image.id}
                       className="relative h-52 bg-white rounded-md flex items-center justify-center text-sm font-medium uppercase text-gray-900 cursor-pointer hover:bg-gray-50 focus:outline-none focus:ring focus:ring-offset-4 focus:ring-opacity-50"
                     >
                       {({ selected }) => (
                         <>
                           
                           <span className="absolute inset-0 rounded-md overflow-hidden">
                             <img src={"https://media.graphassets.com/ByyAmqLSwagSkbMHvwGE"} alt="" className="w-full h-full object-center object-cover" />
                           </span>
                           <span
                             className={classNames(
                               selected ? 'ring-indigo-500' : 'ring-transparent',
                               'absolute inset-0 rounded-md ring-2 ring-offset-2 pointer-events-none'
                             )}
                             aria-hidden="true"
                           />
                         </>
                       )}
                     </Tab>


                     <Tab
                       // key={image.id}
                       className="relative h-52 bg-white rounded-md flex items-center justify-center text-sm font-medium uppercase text-gray-900 cursor-pointer hover:bg-gray-50 focus:outline-none focus:ring focus:ring-offset-4 focus:ring-opacity-50"
                     >
                       {({ selected }) => (
                         <>
                           
                           <span className="absolute inset-0 rounded-md overflow-hidden">
                             <img src={"https://media.graphassets.com/gAXq0dGySn6Cnkb72dUO"} alt="" className="w-full h-full object-center object-cover" />
                           </span>
                           <span
                             className={classNames(
                               selected ? 'ring-indigo-500' : 'ring-transparent',
                               'absolute inset-0 rounded-md ring-2 ring-offset-2 pointer-events-none'
                             )}
                             aria-hidden="true"
                           />
                         </>
                       )}
                     </Tab>


                     <Tab
                       // key={image.id}
                       className="relative h-52 bg-white rounded-md flex items-center justify-center text-sm font-medium uppercase text-gray-900 cursor-pointer hover:bg-gray-50 focus:outline-none focus:ring focus:ring-offset-4 focus:ring-opacity-50"
                     >
                       {({ selected }) => (
                         <>
                           
                           <span className="absolute inset-0 rounded-md overflow-hidden">
                             <img src={"https://media.graphassets.com/Q60R1C2QXSDITFaGiBfy"} alt="" className="w-full h-full object-center object-cover" />
                           </span>
                           <span
                             className={classNames(
                               selected ? 'ring-indigo-500' : 'ring-transparent',
                               'absolute inset-0 rounded-md ring-2 ring-offset-2 pointer-events-none'
                             )}
                             aria-hidden="true"
                           />
                         </>
                       )}
                     </Tab>




                     
                 
                 </Tab.List>
               </div>
   
               <Tab.Panels className="w-full aspect-w-1 aspect-h-1">
                
                   <Tab.Panel key={1}>
                     <img
                       src={"https://media.graphassets.com/REbnVqK3SWa3GPyvZKcx"}
                       alt={"hey"}
                       className="w-full h-full object-center object-cover sm:rounded-lg"
                     />
                     
                   </Tab.Panel>

                   <Tab.Panel key={1}>
                     <img
                       src={"https://media.graphassets.com/vplJlCTg2BkBS0BrVVLw"}
                       alt={"hey"}
                       className="w-full h-full object-center object-cover sm:rounded-lg"
                     />
                     
                   </Tab.Panel>

                   <Tab.Panel key={1}>
                     <img
                       src={"https://media.graphassets.com/1E9gqNdTvuU6ncqK26aE"}
                       alt={"hey"}
                       className="w-full h-full object-center object-cover sm:rounded-lg"
                     />
                     
                   </Tab.Panel>


                   <Tab.Panel key={1}>
                     <img
                       src={"https://media.graphassets.com/QjV8lnD9Q3aLgtQGEClM"}
                       alt={"hey"}
                       className="w-full h-full object-center object-cover sm:rounded-lg"
                     />
                     
                   </Tab.Panel>

                   <Tab.Panel key={1}>
                     <img
                       src={"https://media.graphassets.com/bOgwJ4sdRJ2j6Nog8lxv"}
                       alt={"hey"}
                       className="w-full h-full object-center object-cover sm:rounded-lg"
                     />
                     
                   </Tab.Panel>


                   <Tab.Panel key={1}>
                     <img
                       src={"https://media.graphassets.com/FZmw4Mv7TvypIOYsvrpn"}
                       alt={"hey"}
                       className="w-full h-full object-center object-cover sm:rounded-lg"
                     />
                     
                   </Tab.Panel>


                   <Tab.Panel key={1}>
                     <img
                       src={"https://media.graphassets.com/esgV76WLTwWCEG2licZ6"}
                       alt={"hey"}
                       className="w-full h-full object-center object-cover sm:rounded-lg"
                     />
                     
                   </Tab.Panel>


                   <Tab.Panel key={1}>
                     <img
                       src={"https://media.graphassets.com/BLU89kNPRiaaA3SKRtE3"}
                       alt={"hey"}
                       className="w-full h-full object-center object-cover sm:rounded-lg"
                     />
                     
                   </Tab.Panel>

                   <Tab.Panel key={1}>
                     <img
                       src={"https://media.graphassets.com/ByyAmqLSwagSkbMHvwGE"}
                       alt={"hey"}
                       className="w-full h-full object-center object-cover sm:rounded-lg"
                     />
                     
                   </Tab.Panel>


                   <Tab.Panel key={1}>
                     <img
                       src={"https://media.graphassets.com/gAXq0dGySn6Cnkb72dUO"}
                       alt={"hey"}
                       className="w-full h-full object-center object-cover sm:rounded-lg"
                     />
                     
                   </Tab.Panel>

                   <Tab.Panel key={1}>
                     <img
                       src={"https://media.graphassets.com/Q60R1C2QXSDITFaGiBfy"}
                       alt={"hey"}
                       className="w-full h-full object-center object-cover sm:rounded-lg"
                     />
                     
                   </Tab.Panel>
                
               </Tab.Panels>
             </Tab.Group>
   
          
           </div>
         </div>
       </div>
     )




































































     case 'blog-11': // TEDx November 3rd 2021
     return (
      <div className="bg-white ">
        <div className="max-w-2xl mx-auto   px-4 sm:pt-12 sm:pb-6 sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="grid grid-cols-1 gap-x-8 items-start">
            {/* Image gallery */}
            <Tab.Group as="div" className="flex flex-col-reverse">
              {/* Image selector */}
              <div className="visible mt-6 w-full max-w-2xl mx-auto sm:block lg:max-w-none">
                <Tab.List className="grid grid-cols-4 gap-6">
                  {/* {product.images.map((image) => ( */}


                  <Tab
                      // key={image.id}
                      className="relative h-52 bg-white rounded-md flex items-center justify-center text-sm font-medium uppercase text-gray-900 cursor-pointer hover:bg-gray-50 focus:outline-none focus:ring focus:ring-offset-4 focus:ring-opacity-50"
                    >
                      {({ selected }) => (
                        <>
                          
                          <span className="absolute inset-0 rounded-md overflow-hidden">
                            <img src={"https://media.graphassets.com/cSJhLR8Som2WKzjXLZFz"} alt="" className="w-full h-full object-center object-cover" />
                          </span>
                          <span
                            className={classNames(
                              selected ? 'ring-indigo-500' : 'ring-transparent',
                              'absolute inset-0 rounded-md ring-2 ring-offset-2 pointer-events-none'
                            )}
                            aria-hidden="true"
                          />
                        </>
                      )}
                    </Tab>


                    <Tab
                      // key={image.id}
                      className="relative h-52 bg-white rounded-md flex items-center justify-center text-sm font-medium uppercase text-gray-900 cursor-pointer hover:bg-gray-50 focus:outline-none focus:ring focus:ring-offset-4 focus:ring-opacity-50"
                    >
                      {({ selected }) => (
                        <>
                          
                          <span className="absolute inset-0 rounded-md overflow-hidden">
                            <img src={"https://media.graphassets.com/2UsuQi3FS2uvmEYpnQ8Y"} alt="" className="w-full h-full object-center object-cover" />
                          </span>
                          <span
                            className={classNames(
                              selected ? 'ring-indigo-500' : 'ring-transparent',
                              'absolute inset-0 rounded-md ring-2 ring-offset-2 pointer-events-none'
                            )}
                            aria-hidden="true"
                          />
                        </>
                      )}
                    </Tab>



                

                
                    <Tab
                      // key={image.id}
                      className="relative h-52 bg-white rounded-md flex items-center justify-center text-sm font-medium uppercase text-gray-900 cursor-pointer hover:bg-gray-50 focus:outline-none focus:ring focus:ring-offset-4 focus:ring-opacity-50"
                    >
                      {({ selected }) => (
                        <>
                          
                          <span className="absolute inset-0 rounded-md overflow-hidden">
                            <img src={"https://media.graphassets.com/0BbQSqqpSc63kwa3Pmtv"} alt="" className="w-full h-full object-center object-cover" />
                          </span>
                          <span
                            className={classNames(
                              selected ? 'ring-indigo-500' : 'ring-transparent',
                              'absolute inset-0 rounded-md ring-2 ring-offset-2 pointer-events-none'
                            )}
                            aria-hidden="true"
                          />
                        </>
                      )}
                    </Tab>

                    <Tab
                      // key={image.id}
                      className="relative h-52 bg-white rounded-md flex items-center justify-center text-sm font-medium uppercase text-gray-900 cursor-pointer hover:bg-gray-50 focus:outline-none focus:ring focus:ring-offset-4 focus:ring-opacity-50"
                    >
                      {({ selected }) => (
                        <>
                          
                          <span className="absolute inset-0 rounded-md overflow-hidden">
                            <img src={"https://media.graphassets.com/Bspw3WDzRNCgyJBfTDo9"} alt="" className="w-full h-full object-center object-cover" />
                          </span>
                          <span
                            className={classNames(
                              selected ? 'ring-indigo-500' : 'ring-transparent',
                              'absolute inset-0 rounded-md ring-2 ring-offset-2 pointer-events-none'
                            )}
                            aria-hidden="true"
                          />
                        </>
                      )}
                    </Tab>


                    <Tab
                      // key={image.id}
                      className="relative h-52 bg-white rounded-md flex items-center justify-center text-sm font-medium uppercase text-gray-900 cursor-pointer hover:bg-gray-50 focus:outline-none focus:ring focus:ring-offset-4 focus:ring-opacity-50"
                    >
                      {({ selected }) => (
                        <>
                          
                          <span className="absolute inset-0 rounded-md overflow-hidden">
                            <img src={"https://media.graphassets.com/lEE8kEXSRWBzJqefphmQ"} alt="" className="w-full h-full object-center object-cover" />
                          </span>
                          <span
                            className={classNames(
                              selected ? 'ring-indigo-500' : 'ring-transparent',
                              'absolute inset-0 rounded-md ring-2 ring-offset-2 pointer-events-none'
                            )}
                            aria-hidden="true"
                          />
                        </>
                      )}
                    </Tab>



                    <Tab
                      // key={image.id}
                      className="relative h-52 bg-white rounded-md flex items-center justify-center text-sm font-medium uppercase text-gray-900 cursor-pointer hover:bg-gray-50 focus:outline-none focus:ring focus:ring-offset-4 focus:ring-opacity-50"
                    >
                      {({ selected }) => (
                        <>
                          
                          <span className="absolute inset-0 rounded-md overflow-hidden">
                            <img src={"https://media.graphassets.com/0DwsjwzrT02f4y8cFTCQ"} alt="" className="w-full h-full object-center object-cover" />
                          </span>
                          <span
                            className={classNames(
                              selected ? 'ring-indigo-500' : 'ring-transparent',
                              'absolute inset-0 rounded-md ring-2 ring-offset-2 pointer-events-none'
                            )}
                            aria-hidden="true"
                          />
                        </>
                      )}
                    </Tab>


                    {/* <Tab
                      // key={image.id}
                      className="relative h-52 bg-white rounded-md flex items-center justify-center text-sm font-medium uppercase text-gray-900 cursor-pointer hover:bg-gray-50 focus:outline-none focus:ring focus:ring-offset-4 focus:ring-opacity-50"
                    >
                      {({ selected }) => (
                        <>
                          
                          <span className="absolute inset-0 rounded-md overflow-hidden">
                            <img src={"https://media.graphassets.com/xjdzXvHbSjmitxFgXouj"} alt="" className="w-full h-full object-center object-cover" />
                          </span>
                          <span
                            className={classNames(
                              selected ? 'ring-indigo-500' : 'ring-transparent',
                              'absolute inset-0 rounded-md ring-2 ring-offset-2 pointer-events-none'
                            )}
                            aria-hidden="true"
                          />
                        </>
                      )}
                    </Tab> */}


                 


                    <Tab
                      // key={image.id}
                      className="relative h-52 bg-white rounded-md flex items-center justify-center text-sm font-medium uppercase text-gray-900 cursor-pointer hover:bg-gray-50 focus:outline-none focus:ring focus:ring-offset-4 focus:ring-opacity-50"
                    >
                      {({ selected }) => (
                        <>
                          
                          <span className="absolute inset-0 rounded-md overflow-hidden">
                            <img src={"https://media.graphassets.com/r9xeCT4mRnydCJ82lY8v"} alt="" className="w-full h-full object-center object-cover" />
                          </span>
                          <span
                            className={classNames(
                              selected ? 'ring-indigo-500' : 'ring-transparent',
                              'absolute inset-0 rounded-md ring-2 ring-offset-2 pointer-events-none'
                            )}
                            aria-hidden="true"
                          />
                        </>
                      )}
                    </Tab>



                    <Tab
                      // key={image.id}
                      className="relative h-52 bg-white rounded-md flex items-center justify-center text-sm font-medium uppercase text-gray-900 cursor-pointer hover:bg-gray-50 focus:outline-none focus:ring focus:ring-offset-4 focus:ring-opacity-50"
                    >
                      {({ selected }) => (
                        <>
                          
                          <span className="absolute inset-0 rounded-md overflow-hidden">
                            <img src={"https://media.graphassets.com/mkECFw1SYGGiy7Msa7OA"} alt="" className="w-full h-full object-center object-cover" />
                          </span>
                          <span
                            className={classNames(
                              selected ? 'ring-indigo-500' : 'ring-transparent',
                              'absolute inset-0 rounded-md ring-2 ring-offset-2 pointer-events-none'
                            )}
                            aria-hidden="true"
                          />
                        </>
                      )}
                    </Tab>



                    <Tab
                      // key={image.id}
                      className="relative h-52 bg-white rounded-md flex items-center justify-center text-sm font-medium uppercase text-gray-900 cursor-pointer hover:bg-gray-50 focus:outline-none focus:ring focus:ring-offset-4 focus:ring-opacity-50"
                    >
                      {({ selected }) => (
                        <>
                          
                          <span className="absolute inset-0 rounded-md overflow-hidden">
                            <img src={"https://media.graphassets.com/obIVQUi9R2MIHVCkOOVg"} alt="" className="w-full h-full object-center object-cover" />
                          </span>
                          <span
                            className={classNames(
                              selected ? 'ring-indigo-500' : 'ring-transparent',
                              'absolute inset-0 rounded-md ring-2 ring-offset-2 pointer-events-none'
                            )}
                            aria-hidden="true"
                          />
                        </>
                      )}
                    </Tab>


                   






                    
                
                </Tab.List>
              </div>
  
              <Tab.Panels className="w-full aspect-w-1 aspect-h-1">

                 <Tab.Panel key={1}>
                    <img
                      src={"https://media.graphassets.com/cSJhLR8Som2WKzjXLZFz"}
                      alt={"hey"}
                      className="w-full h-full object-center object-cover sm:rounded-lg"
                    />
                    
                  </Tab.Panel>

               
                
                  <Tab.Panel key={1}>
                    <img
                      src={"https://media.graphassets.com/2UsuQi3FS2uvmEYpnQ8Y"}
                      alt={"hey"}
                      className="w-full h-full object-center object-cover sm:rounded-lg"
                    />
                    
                  </Tab.Panel>
                 

                  <Tab.Panel key={1}>
                    <img
                      src={"https://media.graphassets.com/0BbQSqqpSc63kwa3Pmtv"}
                      alt={"hey"}
                      className="w-full h-full object-center object-cover sm:rounded-lg"
                    />
                    
                  </Tab.Panel>

                  <Tab.Panel key={1}>
                    <img
                      src={"https://media.graphassets.com/Bspw3WDzRNCgyJBfTDo9"}
                      alt={"hey"}
                      className="w-full h-full object-center object-cover sm:rounded-lg"
                    />
                    
                  </Tab.Panel>

                  <Tab.Panel key={1}>
                    <img
                      src={"https://media.graphassets.com/lEE8kEXSRWBzJqefphmQ"}
                      alt={"hey"}
                      className="w-full h-full object-center object-cover sm:rounded-lg"
                    />
                    
                  </Tab.Panel>


                  <Tab.Panel key={1}>
                    <img
                      src={"https://media.graphassets.com/0DwsjwzrT02f4y8cFTCQ"}
                      alt={"hey"}
                      className="w-full h-full object-center object-cover sm:rounded-lg"
                    />
                    
                  </Tab.Panel>

                  {/* <Tab.Panel key={1}>
                    <img
                      src={"https://media.graphassets.com/xjdzXvHbSjmitxFgXouj"}
                      alt={"hey"}
                      className="w-full h-full object-center object-cover sm:rounded-lg"
                    />
                    
                  </Tab.Panel> */}


              

                  <Tab.Panel key={1}>
                    <img
                      src={"https://media.graphassets.com/r9xeCT4mRnydCJ82lY8v"}
                      alt={"hey"}
                      className="w-full h-full object-center object-cover sm:rounded-lg"
                    />
                    
                  </Tab.Panel>


                  <Tab.Panel key={1} >
{/*                       
                      <input
                        type="text"
                      
                        required
                        placeholder="URL..."
                      /> */}

                      <YouTube videoId={id3} opts={opts} />
                      </Tab.Panel>


                  <Tab.Panel key={1}>
                    <img
                      src={"https://media.graphassets.com/obIVQUi9R2MIHVCkOOVg"}
                      alt={"hey"}
                      className="w-full h-full object-center object-cover sm:rounded-lg"
                    />
                    
                  </Tab.Panel>

                


               
               
              </Tab.Panels>
            </Tab.Group>
  
         
          </div>
        </div>
      </div>
    )









































































































    case 'blog-12': // Blog Update April 22 2022
    return (
     <div className="bg-white ">
       <div className="max-w-2xl mx-auto   px-4 sm:pt-12 sm:pb-6 sm:px-6 lg:max-w-7xl lg:px-8">
         <div className="grid grid-cols-1 gap-x-8 items-start">
           {/* Image gallery */}
           <Tab.Group as="div" className="flex flex-col-reverse">
             {/* Image selector */}
             <div className="visible mt-6 w-full max-w-2xl mx-auto sm:block lg:max-w-none">
               <Tab.List className="grid grid-cols-4 gap-6">
                 {/* {product.images.map((image) => ( */}


                 <Tab
                     // key={image.id}
                     className="relative h-52 bg-white rounded-md flex items-center justify-center text-sm font-medium uppercase text-gray-900 cursor-pointer hover:bg-gray-50 focus:outline-none focus:ring focus:ring-offset-4 focus:ring-opacity-50"
                   >
                     {({ selected }) => (
                       <>
                         
                         <span className="absolute inset-0 rounded-md overflow-hidden">
                           <img src={"https://media.graphassets.com/output=format:jpg/nXnNJyCSiq1A8uWKOEWe"} alt="" className="w-full h-full object-center object-cover" />
                         </span>
                         <span
                           className={classNames(
                             selected ? 'ring-indigo-500' : 'ring-transparent',
                             'absolute inset-0 rounded-md ring-2 ring-offset-2 pointer-events-none'
                           )}
                           aria-hidden="true"
                         />
                       </>
                     )}
                   </Tab>

                   <Tab
                     // key={image.id}
                     className="relative h-52 bg-white rounded-md flex items-center justify-center text-sm font-medium uppercase text-gray-900 cursor-pointer hover:bg-gray-50 focus:outline-none focus:ring focus:ring-offset-4 focus:ring-opacity-50"
                   >
                     {({ selected }) => (
                       <>
                         
                         <span className="absolute inset-0 rounded-md overflow-hidden">
                           <img src={"https://media.graphassets.com/v8el1vR7RdaAlbzYOQd0"} alt="" className="w-full h-full object-center object-cover" />
                         </span>
                         <span
                           className={classNames(
                             selected ? 'ring-indigo-500' : 'ring-transparent',
                             'absolute inset-0 rounded-md ring-2 ring-offset-2 pointer-events-none'
                           )}
                           aria-hidden="true"
                         />
                       </>
                     )}
                   </Tab>


                     

               </Tab.List>
             </div>
 
             <Tab.Panels className="w-full aspect-w-1 aspect-h-1 ">

                <Tab.Panel key={1}>
                   <img
                     src={"https://media.graphassets.com/output=format:jpg/nXnNJyCSiq1A8uWKOEWe"}
                     alt={"hey"}
                     className="w-3/5 h-full object-center object-cover sm:rounded-lg"
                   />
                   
                 </Tab.Panel>


                 <Tab.Panel key={1}>
                   <img
                     src={"https://media.graphassets.com/v8el1vR7RdaAlbzYOQd0"}
                     alt={"hey"}
                     className="w-full h-full object-center object-cover sm:rounded-lg"
                   />
                   
                 </Tab.Panel>

              
             
               


              
              
             </Tab.Panels>
           </Tab.Group>
 
        
         </div>
       </div>
     </div>
   )




       default:
         return (<h1></h1>);
     }
   
   };

   
  const [selectedColor, setSelectedColor] = useState(product.colors[0])

  const [PostPhotos, setPostPhotos] = useState([]);
    const [dataLoaded, setDataLoaded] = useState(1);
   
    useEffect(() => {
       
     
        getPostDetails(slug).then((result) => {
          setPostPhotos(result.postPhotos);
        //   console.log(result.postPhotos);
        //  console.log(product.images[1].src)
         // console.log(result.postPhotos[0].url)
         // product.images[1].src = result.postPhotos[0].url;
         setId(getYouTubeID("https://youtube.com/shorts/mT8BIuKrzks"));
         setId2(getYouTubeID("https://youtube.com/shorts/sEt4PLfmnA8"));
         setId3(getYouTubeID("https://youtube.com/shorts/PC3uo8SwJTs"));
        });
      }, []);


      return(getUpdatedPhoto())
 

}