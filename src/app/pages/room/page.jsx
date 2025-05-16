{
  /*import MainLayout from '@/components/Layouts/MainLayout';
import React from 'react'
import Image  from 'next/image';
import D1 from '../../../../public/D1.jpg';
import D2 from '../../../../public/D2.jpg';
import D7 from '../../../../public/D7.jpg';
import D8 from '../../../../public/D8.jpg';
import p15 from '../../../../public/p15.jpg';
import p11 from '../../../../public/p11.jpg';
import p10 from '../../../../public/p10.jpg';
import p12 from '../../../../public/p12.jpeg';
import n5 from '../../../../public/n5.jpg';
import n3 from '../../../../public/n3.jpg';
import n4 from '../../../../public/n4.jpg';
import n2 from '../../../../public/n2.jpg';
import non4 from '../../../../public/non4.jpg';
import non3 from '../../../../public/non3.jpg';
import non5 from '../../../../public/non5.jpg';
import non6 from '../../../../public/non6.jpg';


const Room = () => {
  return (
    <MainLayout>
    <div className=" p-5 text-4xl font-serif text-center text-amber-700">
        The Art Of The Stay...
      </div>
      <p className=" p-5 text-center text-2xl font-normal">
        Curl up, stretch out, wind down, or sleep in. Feel the most comfortable and yourself you have ever been, in rooms and suites designed for gentle restoration. 
              </p>
              <section className="p-10 text-4xl font-serif text-center text-amber-700">
        DULUXE ROOM...
      </section>
              <div className="grid grid-cols-2 gap-2">
        <div>
            <Image className="h-auto max-w-full rounded-lg" src={D1} alt="D1"/>
        </div>
        <div>
            <Image className="h-auto max-w-full rounded-lg" src={D2} alt="D2"/>
        </div>
        <div>
            <Image className="h-auto max-w-full rounded-lg" src={D7} alt="D7"/>
        </div>
        <div>
            <Image className="h-auto max-w-full rounded-lg" src={D8} alt="D8"/>
        </div>
        </div>
        <p className=" p-5 text-center text-2xl font-normal">
        Welcome to our Deluxe Room where elegance, comfort, and thoughtful design come together to create a truly relaxing retreat. Spacious and stylish, this room features premium furnishings, plush bedding, and modern amenities to make your stay effortlessly enjoyable.
        Whether you're here for business or leisure, the Deluxe Room offers a perfect balance of luxury and warmth, complete with added touches like enhanced toiletries, a seating area, and serene views to elevate your experience.
        </p>
        <ul className="text-2xl mt-3 list-disc list-inside text-black ms-96">
            <li>King-size bed</li>
            <li>Private Jacuzzi & Bar</li>
            <li>Smart TV, Wi-Fi, Butler service</li>
          </ul>

        
              <section className="p-10 text-4xl font-serif text-center text-amber-700">
        PREMIUM ROOM...
      </section>
      <div className="grid grid-cols-2 gap-2">
        <div>
            <Image className="h-auto max-w-full rounded-lg" src={p15} alt="p15"/>
        </div>
        <div>
            <Image className="h-auto max-w-full rounded-lg" src={p11} alt="p11"/>
        </div>
        <div>
            <Image className="h-auto max-w-full rounded-lg" src={p10} alt="p10"/>
        </div>
        <div>
            <Image className="h-auto max-w-full rounded-lg" src={p12} alt="p12"/>
        </div>
        </div>
        <p className=" p-5 text-center text-2xl font-normal">
        Experience elevated comfort in our Premium Room where timeless design meets modern luxury. Thoughtfully curated for travelers who seek more, this room offers extra space, enhanced amenities, and an ambiance of quiet sophistication.
        Relax in plush bedding, enjoy high-end toiletries, and take in scenic views that set the tone for a truly exceptional stay. Whether you're unwinding after a busy day or starting a new adventure, your premium room is the perfect place to feel refreshed and inspired.
        </p>
        <ul className="text-2xl mt-3 list-disc list-inside text-black ms-96">
            <li>Queen-size bed</li>
            <li>Mini-fridge & Workspace</li>
            <li>Complimentary breakfast</li>
          </ul>

        <section className="p-10 text-4xl font-serif text-center text-amber-700">
        NORMAL ROOM...
      </section>
      <div className="grid grid-cols-2 gap-2">
        <div>
            <Image className="h-auto max-w-full rounded-lg" src={n5} alt="n5"/>
        </div>
        <div>
            <Image className="h-auto max-w-full rounded-lg" src={n3} alt="n3"/>
        </div>
        <div>
            <Image className="h-auto max-w-full rounded-lg" src={n4} alt="n4"/>
        </div>
        <div>
            <Image className="h-auto max-w-full rounded-lg" src={n2} alt="n2"/>
        </div>
        </div>
<p className=" p-5 text-center text-2xl font-normal">
        Welcome to our Standard A/C Room the perfect blend of comfort, simplicity, and value. Designed for a relaxing stay, this room features all the essentials, including a cozy bed, private bathroom, and efficient air conditioning to keep you cool and comfortable throughout your visit.
        Ideal for solo travelers, couples, or business guests, it’s a clean, quiet space where you can unwind and feel at home.
        </p>
        <ul className="text-2xl mt-3 list-disc list-inside text-black ms-96">
            <li>Double bed</li>
            <li>Air Conditioning</li>
            <li>TV & Wi-Fi</li>
          </ul>



        <section className="p-10 text-4xl font-serif text-center text-amber-700">
        NON-AC ROOM...
      </section>
      <div className="grid grid-cols-2 gap-2">
        <div>
            <Image className="h-auto max-w-full rounded-lg" src={non4} alt="non4"/>
        </div>
        <div>
            <Image className="h-auto max-w-full rounded-lg" src={non3} alt="non3"/>
        </div>
        <div>
            <Image className="h-auto max-w-full rounded-lg" src={non5} alt="non5"/>
        </div>
        <div>
            <Image className="h-auto max-w-full rounded-lg" src={non6} alt="non6"/>
        </div>
        </div>
        <p className=" p-5 text-center text-2xl font-normal">
        Our Non-A/C Room offers a clean, comfortable space for travelers who appreciate simplicity and affordability. Designed with natural ventilation and thoughtful touches, it provides a peaceful atmosphere for rest and relaxation.
        Perfect for budget-conscious guests, this room includes all the essentials for a pleasant stay from cozy bedding to a private bathroom making it an ideal choice for short or long visits.
        </p>
        <ul className="text-2xl mt-3 list-disc list-inside text-black ms-96">
            <li>Ceiling fan</li>
            <li>Basic furnishings</li>
            <li>Free bottled water</li>
          </ul>

    


    

    </MainLayout>
  )
}

export default Room;*/
}

{
  /*import MainLayout from '@/components/Layouts/MainLayout';
import React from 'react';
import Image from 'next/image';
import D1 from '../../../../public/D1.jpg';
import D2 from '../../../../public/D2.jpg';
import D7 from '../../../../public/D7.jpg';
import D8 from '../../../../public/D8.jpg';
import p15 from '../../../../public/p15.jpg';
import p11 from '../../../../public/p11.jpg';
import p10 from '../../../../public/p10.jpg';
import p12 from '../../../../public/p12.jpeg';
import n5 from '../../../../public/n5.jpg';
import n3 from '../../../../public/n3.jpg';
import n4 from '../../../../public/n4.jpg';
import n2 from '../../../../public/n2.jpg';
import non4 from '../../../../public/non4.jpg';
import non3 from '../../../../public/non3.jpg';
import non5 from '../../../../public/non5.jpg';
import non6 from '../../../../public/non6.jpg';

const Room = () => {
  return (
    <MainLayout>
    
      <div className=" text-center">
      <section className="bg-amber-50 py-10">
        <h1 className="text-5xl font-extrabold text-amber-700 font-serif drop-shadow-md">
          The Art Of The Stay...
        </h1>
        </section>
        
        <p className="mt-6 text-2xl md:text-2xl font-light text-gray-950 max-w-3xl mx-auto px-4">
          Curl up, stretch out, wind down, or sleep in. Feel the most comfortable and yourself you have ever been, in rooms and suites designed for gentle restoration.
        </p>
      </div>

      
      <section className="py-16 bg-amber-50 rounded-3xl shadow-inner mx-4 my-10">
        <h2 className="text-4xl font-bold text-center text-amber-700 font-serif mb-10">
          DELUXE ROOM
        </h2>
        <div className="grid md:grid-cols-2 gap-6 px-10">
          {[D1, D2, D7, D8].map((img, idx) => (
            <div key={idx} className="overflow-hidden rounded-2xl shadow-lg">
              <Image src={img} alt={`Deluxe-${idx}`} className="hover:scale-105 transition duration-500" />
            </div>
          ))}
        </div>
        <div className="max-w-4xl mx-auto text-center mt-10 px-6">
          <p className="text-lg md:text-2xl text-gray-700">
            Welcome to our Deluxe Room where elegance, comfort, and thoughtful design come together to create a truly relaxing retreat. Spacious and stylish, this room features premium furnishings, plush bedding, and modern amenities to make your stay effortlessly enjoyable.
          </p>
          <ul className="mt-6 text-lg md:text-2xl text-left list-disc list-inside text-gray-700">
            <li>King-size bed</li>
            <li>Private Jacuzzi & Bar</li>
            <li>Smart TV, Wi-Fi, Butler service</li>
          </ul>
        </div>
      </section>

  
      <section className="py-16 bg-gray-100 rounded-3xl shadow-inner mx-4 my-10">
        <h2 className="text-4xl font-bold text-center text-amber-700 font-serif mb-10">
          PREMIUM ROOM
        </h2>
        <div className="grid md:grid-cols-2 gap-6 px-10">
          {[p15, p11, p10, p12].map((img, idx) => (
            <div key={idx} className="overflow-hidden rounded-2xl shadow-lg">
              <Image src={img} alt={`Premium-${idx}`} className="hover:scale-105 transition duration-500" />
            </div>
          ))}
        </div>
        <div className="max-w-4xl mx-auto text-center mt-10 px-6">
          <p className="text-lg md:text-2xl text-gray-700">
            Experience elevated comfort in our Premium Room where timeless design meets modern luxury. Thoughtfully curated for travelers who seek more, this room offers extra space, enhanced amenities, and an ambiance of quiet sophistication.
          </p>
          <ul className="mt-6 text-lg md:text-2xl text-left list-disc list-inside text-gray-700">
            <li>Queen-size bed</li>
            <li>Mini-fridge & Workspace</li>
            <li>Complimentary breakfast</li>
          </ul>
        </div>
      </section>

      
      <section className="py-16 bg-white rounded-3xl shadow-inner mx-4 my-10">
        <h2 className="text-4xl font-bold text-center text-amber-700 font-serif mb-10">
          NORMAL ROOM
        </h2>
        <div className="grid md:grid-cols-2 gap-6 px-10">
          {[n5, n3, n4, n2].map((img, idx) => (
            <div key={idx} className="overflow-hidden rounded-2xl shadow-lg">
              <Image src={img} alt={`Normal-${idx}`} className="hover:scale-105 transition duration-500" />
            </div>
          ))}
        </div>
        <div className="max-w-4xl mx-auto text-center mt-10 px-6">
          <p className="text-lg md:text-2xl text-gray-700">
            Welcome to our Standard A/C Room, the perfect blend of comfort, simplicity, and value. Designed for a relaxing stay, this room features all the essentials, including a cozy bed, private bathroom, and efficient air conditioning.
          </p>
          <ul className="mt-6 text-lg md:text-2xl text-left list-disc list-inside text-gray-700">
            <li>Double bed</li>
            <li>Air Conditioning</li>
            <li>TV & Wi-Fi</li>
          </ul>
        </div>
      </section>

    
      <section className="py-16 bg-amber-50 rounded-3xl shadow-inner mx-4 my-10">
        <h2 className="text-4xl font-bold text-center text-amber-700 font-serif mb-10">
          NON-AC ROOM
        </h2>
        <div className="grid md:grid-cols-2 gap-6 px-10">
          {[non4, non3, non5, non6].map((img, idx) => (
            <div key={idx} className="overflow-hidden rounded-2xl shadow-lg">
              <Image src={img} alt={`Non-AC-${idx}`} className="hover:scale-105 transition duration-500" />
            </div>
          ))}
        </div>
        <div className="max-w-4xl mx-auto text-center mt-10 px-6">
          <p className="text-lg md:text-2xl text-gray-700">
            Our Non-A/C Room offers a clean, comfortable space for travelers who appreciate simplicity and affordability. Designed with natural ventilation and thoughtful touches, it provides a peaceful atmosphere for rest and relaxation.
          </p>
          <ul className="mt-6 text-lg md:text-2xl text-left list-disc list-inside text-gray-700">
            <li>Ceiling fan</li>
            <li>Basic furnishings</li>
            <li>Free bottled water</li>
          </ul>
        </div>
      </section>
    </MainLayout>
  )
}
export default Room;*/
}

import MainLayout from "@/components/Layouts/MainLayout";
import React from "react";
import Image from "next/image";
import D1 from "../../../../public/D1.jpg";
import D2 from "../../../../public/D2.jpg";
import D7 from "../../../../public/D7.jpg";
import D8 from "../../../../public/D8.jpg";
import p15 from "../../../../public/p15.jpg";
import p11 from "../../../../public/p11.jpg";
import p10 from "../../../../public/p10.jpg";
import p12 from "../../../../public/p12.jpeg";
import n5 from "../../../../public/n5.jpg";
import n3 from "../../../../public/n3.jpg";
import n4 from "../../../../public/n4.jpg";
import n2 from "../../../../public/n2.jpg";
import non4 from "../../../../public/non4.jpg";
import non3 from "../../../../public/non3.jpg";
import non5 from "../../../../public/non5.jpg";
import non6 from "../../../../public/non6.jpg";

const Room = () => {
  return (
    <MainLayout>
      {/* Background */}
      <div
        className="bg-cover bg-center bg-no-repeat min-h-screen py-10"
        style={{ backgroundImage: "url('/background-rooms.jpg')" }} // Make sure you have a suitable image in your public folder
      >
        {/* Overlay Content */}
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl max-w-7xl mx-auto p-6 md:p-16 shadow-2xl py-10">
          {/* Main Heading */}
          <div className="text-center">
            <section className="bg-amber-50 py-10 rounded-2xl">
              <h1 className="text-5xl font-extrabold text-amber-700 font-serif drop-shadow-md mb-6">
                THE ART OF THE STAY...
              </h1>
            </section>
            <p className="mt-6 text-2xl text-gray-950 max-w-3xl mx-auto">
              Curl up, stretch out, wind down, or sleep in. Feel the most
              comfortable and yourself you have ever been, in rooms and suites
              designed for gentle restoration.
            </p>
          </div>
          <hr className="border-amber-200 my-10" />

          {/* Sections */}
          {/* DELUXE ROOM */}
          <section className="py-12 my-10">
            <h2 className="text-4xl font-bold text-center text-amber-700 font-serif mb-10">
              DELUXE ROOM
            </h2>
            <div className="grid md:grid-cols-2 gap-6 px-6">
              {[D1, D2, D7, D8].map((img, idx) => (
                <div
                  key={idx}
                  className="overflow-hidden rounded-2xl shadow-lg"
                >
                  <Image
                    src={img}
                    alt={`Deluxe-${idx}`}
                    className="hover:scale-105 transition-transform duration-500 object-cover"
                  />
                </div>
              ))}
            </div>
            <div className="max-w-4xl mx-auto text-center mt-10 px-6">
              <p className="text-lg md:text-2xl text-gray-950 mb-4">
                Welcome to our Deluxe Room where elegance, comfort, and
                thoughtful design come together to create a truly relaxing
                retreat.
              </p>
              <ul className="mt-4 text-lg md:text-2xl text-left list-disc list-inside text-gray-950">
                <li>King-size bed</li>
                <li>Private Jacuzzi & Bar</li>
                <li>Smart TV, Wi-Fi, Butler service</li>
                <li>LKR 75,000 / night</li>
              </ul>
            </div>
          </section>

          <hr className="border-amber-200 my-10" />

          {/* PREMIUM ROOM */}
          <section className="py-12 my-10">
            <h2 className="text-4xl font-bold text-center text-amber-700 font-serif mb-10">
              PREMIUM ROOM
            </h2>
            <div className="grid md:grid-cols-2 gap-6 px-6">
              {[p15, p11, p10, p12].map((img, idx) => (
                <div
                  key={idx}
                  className="overflow-hidden rounded-2xl shadow-lg"
                >
                  <Image
                    src={img}
                    alt={`Premium-${idx}`}
                    className="hover:scale-105 transition-transform duration-500 object-cover"
                  />
                </div>
              ))}
            </div>
            <div className="max-w-4xl mx-auto text-center mt-10 px-6">
              <p className="text-lg md:text-2xl text-gray-950 mb-4">
                Experience elevated comfort in our Premium Room where timeless
                design meets modern luxury.
              </p>
              <ul className="mt-4 text-lg md:text-2xl text-left list-disc list-inside text-gray-950">
                <li>Queen-size bed</li>
                <li>Mini-fridge & Workspace</li>
                <li>Complimentary breakfast</li>
                <li>LKR 55,000 / night</li>
              </ul>
            </div>
          </section>

          <hr className="border-amber-200 my-10" />

          {/* NORMAL ROOM */}
          <section className="py-12 my-10">
            <h2 className="text-4xl font-bold text-center text-amber-700 font-serif mb-10">
              NORMAL ROOM
            </h2>
            <div className="grid md:grid-cols-2 gap-6 px-6">
              {[n5, n3, n4, n2].map((img, idx) => (
                <div
                  key={idx}
                  className="overflow-hidden rounded-2xl shadow-lg"
                >
                  <Image
                    src={img}
                    alt={`Normal-${idx}`}
                    className="hover:scale-105 transition-transform duration-500 object-cover"
                  />
                </div>
              ))}
            </div>
            <div className="max-w-4xl mx-auto text-center mt-10 px-6">
              <p className="text-lg md:text-2xl text-gray-950 mb-4">
                Welcome to our Standard A/C Room, the perfect blend of comfort,
                simplicity, and value.
              </p>
              <ul className="mt-4 text-lg md:text-2xl text-left list-disc list-inside text-gray-950">
                <li>Double bed</li>
                <li>Air Conditioning</li>
                <li>TV & Wi-Fi</li>
                <li>LKR 30,000 / night</li>
              </ul>
            </div>
          </section>

          <hr className="border-amber-200 my-10" />

          {/* NON-AC ROOM */}
          <section className="py-12 my-10">
            <h2 className="text-4xl font-bold text-center text-amber-700 font-serif mb-10">
              NON-AC ROOM
            </h2>
            <div className="grid md:grid-cols-2 gap-6 px-6">
              {[non4, non3, non5, non6].map((img, idx) => (
                <div
                  key={idx}
                  className="overflow-hidden rounded-2xl shadow-lg"
                >
                  <Image
                    src={img}
                    alt={`Non-AC-${idx}`}
                    className="hover:scale-105 transition-transform duration-500 object-cover"
                  />
                </div>
              ))}
            </div>
            <div className="max-w-4xl mx-auto text-center mt-10 px-6">
              <p className="text-lg md:text-2xl text-gray-950 mb-4">
                Our Non-A/C Room offers a clean, comfortable space for travelers
                who appreciate simplicity and affordability.
              </p>
              <ul className="mt-4 text-lg md:text-2xl text-left list-disc list-inside text-gray-950">
                <li>Ceiling fan</li>
                <li>Basic furnishings</li>
                <li>Free bottled water</li>
                <li>LKR 18,000 / night</li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    </MainLayout>
  );
};

export default Room;
