import MainLayout from "@/components/Layouts/MainLayout";
import React from "react";
import Image from "next/image";
import aboutus from "../../../../public/aboutus.jpg";

const Aboutus = () => {
  return (
    <MainLayout>
      <div
        className="bg-cover bg-center bg-no-repeat min-h-screen py-10"
        style={{ backgroundImage: "url('/background.jpg')" }} // Make sure you have a background image in public folder!
      >
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl max-w-7xl mx-auto p-8 md:p-16 shadow-2xl">
          {/*<section class="py-16 px-6 md:px-20">
    <div class="max-w-5xl mx-auto text-center">
      <h2 class="text-4xl text-amber-700 font-serif font-bold mb-6">Welcome to Paradise</h2>
      <p class="text-gray-700 text-lg md:text-2xl mb-8">
        Nestled along the sun-kissed shores of Sri Lanka, our Beach Hotel is a serene escape into tropical bliss.
        With crystal-clear waters, soft golden sands, and breathtaking sunsets, we invite you to experience true island hospitality in style and comfort.
      </p>
      <p class="text-gray-700 text-lg md:text-2xl">
        Our mission is simple: to craft unforgettable memories. Whether you seek adventure, romance, or relaxation, our luxurious amenities, exceptional service, and warm smiles ensure your stay is truly extraordinary.
      </p>
    </div>
  </section>*/}
          <div className="text-center">
            <section className="bg-amber-50 py-10 rounded-2xl">
              <h1 className="text-5xl font-extrabold text-amber-700 font-serif drop-shadow-md mb-6 ">
                WELCOME TO PARADISE...
              </h1>
            </section>
          </div>

          <p className="text-gray-950 text-lg md:text-2xl mb-10 mt-6 text-center">
            Nestled along the sun-kissed shores of Sri Lanka, our Beach Hotel is
            a serene escape into tropical bliss. With crystal-clear waters, soft
            golden sands, and breathtaking sunsets, we invite you to experience
            true island hospitality in style and comfort.
          </p>
          <p className="text-gray-950 text-lg md:text-2xl text-center">
            Our mission is simple to craft unforgettable memories. Whether you
            seek adventure, romance, or relaxation, our luxurious amenities,
            exceptional service, and warm smiles ensure your stay is truly
            extraordinary.
          </p>

          <section className="bg-white py-16 px-6 md:px-20 mt-6 rounded-2xl">
            <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 text-center">
              <div className="p-6 bg-amber-100 rounded-2xl shadow-lg hover:scale-105 transition-transform">
                <h3 className="text-2xl font-semibold text-amber-700 mb-4">
                  Authentic Hospitality
                </h3>
                <p className="text-gray-950">
                  Experience the warmth of Sri Lankan culture, where every guest
                  is treated like family.
                </p>
              </div>
              <div className="p-6 bg-amber-100 rounded-2xl shadow-lg hover:scale-105 transition-transform">
                <h3 className="text-2xl font-semibold text-amber-700 mb-4">
                  Sustainable Living
                </h3>
                <p className="text-gray-950">
                  We are dedicated to eco-friendly practices to preserve our
                  beautiful coastline for generations to come.
                </p>
              </div>
              <div className="p-6 bg-amber-100 rounded-2xl shadow-lg hover:scale-105 transition-transform">
                <h3 className="text-2xl font-semibold text-amber-700 mb-4">
                  Unforgettable Experiences
                </h3>
                <p className="text-gray-950">
                  From ocean adventures to cultural tours, create stories that
                  will stay with you forever.
                </p>
              </div>
            </div>
          </section>

          <section className="py-16 px-6 md:px-20 bg-amber-50 rounded-2xl mt-6">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-5xl text-amber-700 font-serif font-bold mb-6 text-center">
                OUR STORY...
              </h2>
              <p className="text-gray-950 text-lg md:text-2xl text-center mb-10">
                Founded in 2015, our hotel was born from a deep love for the sea
                and the vibrant spirit of Sri Lanka. Built with care, respect
                for nature, and a passion for creating beautiful experiences, we
                have grown into one of the most cherished coastal resorts on the
                island.
              </p>
              <div className="flex justify-center">
                <Image
                  src={aboutus}
                  alt="about us"
                  className="rounded-3xl shadow-2xl w-full max-w-3xl object-cover"
                />
              </div>
            </div>
          </section>
        </div>
      </div>
    </MainLayout>
  );
};

export default Aboutus;
