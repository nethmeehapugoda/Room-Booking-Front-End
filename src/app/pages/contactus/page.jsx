{
  /*import MainLayout from '@/components/Layouts/MainLayout';
import React from 'react'
import Image  from 'next/image';
import home18 from '../../../../public/home18.jpg';
import yoga5 from '../../../../public/yoga5.jpg';


const Contactus = () => {
  return (
    <MainLayout>
    <div className='p-5 text-4xl font-serif text-center text-amber-700'>
    TALK TO US...
    </div>

    <div>
    <p className="flex justify-items-end-safe text-2xl font-normal p-8">
    At Royal Plams Hotel we love staying in touch with everyone who steps into our world, online or otherwise. We hope you’d like to as well.</p>
    </div>
    
    <div className='grid grid-cols-2 gap-20'>
    <div className="flex justify-center mt-4 ">
        <Image
        src={yoga5}
        alt='yoga5'
        width={400}
        height={500}
        />
        </div>
        <div className='flex justify-items-center mt-4'>
            <Image
            src={home18}
            alt='home18'
            width={400}
            height={500}
            />
            </div>
</div>

        
        <div>
      <h2 className="text-3xl font-semibold mb-1 p-4">Call Us</h2>
      <p className="text-orange-700 text-lg px-6">+94 11 220 8000 <br></br>+94 11 220 8001<br></br>+94 77 339 9479</p>

    </div>
  
    <hr className="border-t border-gray-300" />
    <div>
      <h2 className="text-3xl font-semibold mb-1 p-4">Email Us</h2>
      <p>
        <a href="mailto:info@royalpalms.lk" className="text-orange-700 text-lg hover:underline px-6">
          info@royalplams.com
        </a>
      </p>
    </div>
    

    <hr className="border-t border-gray-300" />

    <div>
      <h2 className="text-3xl font-semibold mb-1 p-4">Visit Us</h2>
      <p className="text-lg text-orange-700 px-6">Royal Plams Hotel</p>
      <p className="text-lg text-orange-700 px-6">No;07, Meepe, Ingiriya Road, Padukka, Sri Lanka</p>
      </div>
      

        
    </MainLayout>
  )
}

export default Contactus;*/
}

{
  /*import MainLayout from '@/components/Layouts/MainLayout';
import React from 'react';
import Image from 'next/image';
import home18 from '../../../../public/home18.jpg';
import yoga5 from '../../../../public/yoga5.jpg';

const Contactus = () => {
  return (
    <MainLayout>
      
      <div className="py-8 text-5xl font-serif text-center text-amber-700 drop-shadow-lg">
        TALK TO US...
      </div>

      
      <div className="max-w-4xl mx-auto px-6">
        <p className="text-center text-2xl font-light text-gray-950 leading-relaxed">
          At Royal Palms Hotel we love staying in touch with everyone who steps into our world, online or otherwise. We hope you’d like to as well.
        </p>
      </div>


      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 px-10 my-14">
        <div className="flex justify-center">
          <Image
            src={yoga5}
            alt="Yoga Session"
            className="rounded-3xl shadow-xl hover:scale-105 transition-transform duration-500 object-cover"
            width={400}
            height={500}
          />
        </div>
        <div className="flex justify-center">
          <Image
            src={home18}
            alt="Hotel View"
            className="rounded-3xl shadow-xl hover:scale-105 transition-transform duration-500 object-cover"
            width={400}
            height={500}
          />
        </div>
      </div>

    
      <div className="max-w-4xl mx-auto space-y-12 px-8 pb-16">
        
        
        <div className="text-center">
          <h2 className="text-3xl font-bold text-amber-700 mb-4">Call Us</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            +94 11 220 8000 <br />
            +94 11 220 8001 <br />
            +94 77 339 9479
          </p>
        </div>

        <hr className="border-t border-amber-200 w-3/4 mx-auto" />

        
        <div className="text-center">
          <h2 className="text-3xl font-bold text-amber-700 mb-4">Email Us</h2>
          <a 
            href="mailto:info@royalpalms.com"
            className="text-lg text-gray-700 hover:text-amber-600 hover:underline transition-colors"
          >
            info@royalplams.com
          </a>
        </div>

        <hr className="border-t border-amber-200 w-3/4 mx-auto" />

        
        <div className="text-center">
          <h2 className="text-3xl font-bold text-amber-700 mb-4">Visit Us</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Royal Plams Hotel<br />
            No:07, Meepe, Ingiriya Road, Padukka, Sri Lanka
          </p>
        </div>
      </div>
      
      <div className="px-4 pb-20">
        <h2 className="text-3xl font-bold text-amber-700 mb-8 text-center">Find Us on Map</h2>
        <div className="flex justify-center">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126738.34762911282!2d79.9300204!3d6.9094301!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2fef2c2db49c5%3A0x410e2cc7e764ec30!2sRoyal%20Palms%20Beach%20Hotel!5e0!3m2!1sen!2slk!4v1714280000000"
            width="1000"
            height="450"
            className="rounded-2xl shadow-lg w-full max-w-5xl"
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </MainLayout>
  );
}

export default Contactus;*/
}

//new code//

{
  /*import MainLayout from '@/components/Layouts/MainLayout';
import React from 'react';
import Image from 'next/image';
import home18 from '../../../../public/home18.jpg';
import yoga5 from '../../../../public/yoga5.jpg';

const Contactus = () => {
  return (
    <MainLayout>
      
      <div
        className="bg-cover bg-center bg-no-repeat min-h-screen py-10"
        style={{ backgroundImage: "url('/background.jpg')" }} // Make sure you have a background image in public folder!
      >
      
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl max-w-7xl mx-auto p-8 md:p-16 shadow-2xl">

      
          {/*<div className="text-5xl font-serif text-center text-amber-700 mb-10 drop-shadow-md">
            TALK TO US...
          </div>
          <div className="text-center">
          <section className="bg-amber-50 py-10 rounded-2xl">
        
          <h1 className="text-5xl font-extrabold text-amber-700 font-serif drop-shadow-md mb-6 ">
                TALK TO US...
              </h1>
              </section>
              </div>
              
            
          
          <div className="max-w-4xl mx-auto px-6 mb-16">
            <p className="text-center text-2xl text-gray-950 leading-relaxed mt-6">
              At Royal Plams Hotel we love staying in touch with everyone who steps into our world, online or otherwise. We hope you’d like to as well.
            </p>
            
          </div>
      

          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 px-6 mb-16">
            <div className="flex justify-center">
              <Image
                src={yoga5}
                alt="Yoga Session"
                className="rounded-3xl shadow-lg hover:scale-105 transition-transform duration-500 object-cover"
                width={400}
                height={500}
              />
            </div>
            <div className="flex justify-center">
              <Image
                src={home18}
                alt="Hotel View"
                className="rounded-3xl shadow-lg hover:scale-105 transition-transform duration-500 object-cover"
                width={400}
                height={500}
              />
            </div>
          </div>

          
          <div className="space-y-12 px-6 mb-16 text-center">
            
      
            <div>
              <h2 className="text-3xl font-bold text-amber-700 mb-4">Call Us</h2>
              <p className="text-2xl text-gray-950 leading-relaxed">
                +94 11 220 8000 <br />
                +94 11 220 8001 <br />
                +94 77 339 9479
              </p>
            </div>

            <hr className="border-t border-amber-300 w-1/2 mx-auto" />

        
            <div>
              <h2 className="text-3xl font-bold text-amber-700 mb-4">Email Us</h2>
              <a 
                href="mailto:info@royalpalms.com"
                className="text-2xl text-gray-950 hover:text-amber-600 hover:underline transition-colors"
              >
                info@royalplams.com
              </a>
            </div>

            <hr className="border-t border-amber-300 w-1/2 mx-auto" />

          
            <div>
              <h2 className="text-3xl font-bold text-amber-700 mb-4">Visit Us</h2>
              <p className="text-2xl text-gray-950 leading-relaxed">
                Royal Plams Hotel<br />
                No:07, Meepe, Ingiriya Road, Padukka, Sri Lanka
              </p>
            </div>
          </div> 

    
<div className="bg-white p-8 rounded-2xl shadow-xl max-w-3xl mx-auto mb-16 mt-10">
  <h2 className="text-3xl font-bold text-amber-700 mb-6 text-center">
    Send Us a Message
  </h2>
  <form className="space-y-6">
    <div>
      <label className="block mb-2 text-gray-950 font-medium">Your Name</label>
      <input
        type="text"
        placeholder="Enter your name"
        className="w-full p-3 rounded-lg border border-gray-300 focus:ring-4 focus:ring-amber-500 focus:border-amber-700 outline-none"
        required
      />
    </div>
    <div>
      <label className="block mb-2 text-gray-950 font-medium">Email Address</label>
      <input
        type="email"
        placeholder="Enter your email"
        className="w-full p-3 rounded-lg border border-gray-300 focus:ring-4 focus:ring-amber-500 focus:border-amber-700 outline-none"
        required
      />
    </div>
    <div>
      <label className="block mb-2 text-gray-950 font-medium">Your Message</label>
      <textarea
        rows={5}
        placeholder="Type your message..."
        className="w-full p-3 rounded-lg border border-gray-300 focus:ring-4 focus:ring-amber-500 focus:border-amber-700 outline-none"
        required
      ></textarea>
    </div>
    <button
      type="submit"
      className="w-full bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 rounded-lg transition hover:scale-105 shadow-md"
    >
      Send Message
    </button>
  </form>
</div>


          
          <div className="px-6">
            <h2 className="text-3xl font-bold text-amber-700 mb-8 text-center">Find Us on Map</h2>
            <div className="flex justify-center">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126738.34762911282!2d79.9300204!3d6.9094301!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2fef2c2db49c5%3A0x410e2cc7e764ec30!2sRoyal%20Palms%20Beach%20Hotel!5e0!3m2!1sen!2slk!4v1714280000000"
                width="1000"
                height="450"
                className="rounded-2xl shadow-lg w-full max-w-5xl"
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

        </div>
      </div>
    </MainLayout>
  );
}

export default Contactus;*/
}

import MainLayout from "@/components/Layouts/MainLayout";
import React from "react";
import Image from "next/image";
import Contact from "../../../../public/Contact.png";

import { Phone, Mail, MapPin } from "lucide-react"; // ⬅️ Import icons

const Contactus = () => {
  return (
    <MainLayout>
      <div
        className="bg-cover bg-center bg-no-repeat min-h-screen py-10"
        style={{ backgroundImage: "url('/background.jpg')" }}
      >
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl max-w-7xl mx-auto p-8 md:p-16 shadow-2xl">
          <div className="text-center">
            <section className="bg-amber-50 py-10 rounded-2xl">
              <h1 className="text-5xl font-extrabold text-amber-700 font-serif drop-shadow-md mb-6">
                TALK TO US...
              </h1>
            </section>
          </div>

          <div className="max-w-4xl mx-auto px-6 mb-16">
            <p className="text-center text-2xl text-gray-950 leading-relaxed mt-6">
              At Royal Palms Hotel we love staying in touch with everyone who
              steps into our world, online or otherwise. We hope you’d like to
              as well.
            </p>
          </div>

          {/*<div className="grid grid-cols-1 md:grid-cols-2 gap-10 px-6 mb-16">
            <div className="flex justify-center">
              <Image
                src={yoga5}
                alt="Yoga Session"
                className="rounded-3xl shadow-lg hover:scale-105 transition-transform duration-500 object-cover"
                width={400}
                height={500}
              />
            </div>*/}
          <div className="flex justify-center">
            <Image
              src={Contact}
              alt="Contact.png"
              className="rounded-3xl shadow-2xl w-full max-w-3xl object-cover"
            />
          </div>

          {/* Contact Info Section with Icons */}
          <div className="space-y-12 px-6 mb-16 text-center mt-10">
            {/* Phone */}
            <div className="flex flex-col items-center">
              <Phone className="w-10 h-10 text-amber-700 mb-2" />
              <h2 className="text-3xl font-bold text-amber-700 mb-2">
                Call Us
              </h2>
              <p className="text-2xl text-gray-950 leading-relaxed">
                +94 11 220 8000 <br />
                +94 11 220 8001 <br />
                +94 77 339 9479
              </p>
            </div>

            <hr className="border-t border-amber-300 w-1/2 mx-auto" />

            {/* Email */}
            <div className="flex flex-col items-center">
              <Mail className="w-10 h-10 text-amber-700 mb-2" />
              <h2 className="text-3xl font-bold text-amber-700 mb-2">
                Email Us
              </h2>
              <a
                href="mailto:info@royalpalms.com"
                className="text-2xl text-gray-950 hover:text-amber-600 hover:underline transition-colors"
              >
                info@royalpalms.com
              </a>
            </div>

            <hr className="border-t border-amber-300 w-1/2 mx-auto" />

            {/* Visit Us */}
            <div className="flex flex-col items-center">
              <MapPin className="w-10 h-10 text-amber-700 mb-2" />
              <h2 className="text-3xl font-bold text-amber-700 mb-2">
                Visit Us
              </h2>
              <p className="text-2xl text-gray-950 leading-relaxed">
                Royal Palms Hotel
                <br />
                No:07, Meepe, Ingiriya Road, Padukka, Sri Lanka
              </p>
            </div>
          </div>

          <hr className="border-t border-amber-300 w-1/2 mx-auto" />

          {/* Google Map */}
          <div className="px-6">
            <h2 className="text-3xl font-bold text-amber-700 mb-8 text-center mt-6">
              Find Us on Map
            </h2>
            <div className="flex justify-center">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126738.34762911282!2d79.9300204!3d6.9094301!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2fef2c2db49c5%3A0x410e2cc7e764ec30!2sRoyal%20Palms%20Beach%20Hotel!5e0!3m2!1sen!2slk!4v1714280000000"
                width="1000"
                height="450"
                className="rounded-2xl shadow-lg w-full max-w-5xl"
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-10 rounded-2xl shadow-xl max-w-3xl mx-auto mb-16 mt-10">
            <h2 className="text-3xl font-bold text-amber-700 mb-6 text-center">
              Send Us a Message
            </h2>
            <form className="space-y-6">
              <div>
                <label className="block mb-2 text-gray-950 font-medium">
                  Your Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full p-3 rounded-lg border border-gray-300 focus:ring-4 focus:ring-amber-500 focus:border-amber-700 outline-none"
                  required
                />
              </div>
              <div>
                <label className="block mb-2 text-gray-950 font-medium">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full p-3 rounded-lg border border-gray-300 focus:ring-4 focus:ring-amber-500 focus:border-amber-700 outline-none"
                  required
                />
              </div>
              <div>
                <label className="block mb-2 text-gray-950 font-medium">
                  Your Message
                </label>
                <textarea
                  rows={5}
                  placeholder="Type your message..."
                  className="w-full p-3 rounded-lg border border-gray-300 focus:ring-4 focus:ring-amber-500 focus:border-amber-700 outline-none"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 rounded-lg transition hover:scale-105 shadow-md"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Contactus;
