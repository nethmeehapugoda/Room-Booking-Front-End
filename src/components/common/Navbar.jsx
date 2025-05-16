import React from "react";
import Link from "next/link";
import Image from "next/image";
import newlogo from "../../../public/newlogo.jpg";

const Navbar = () => {
  return (
    <nav className="bg-amber-200 shadow p-6 flex justify-between items-center">
      <div>
        <Image src={newlogo} alt="newlogo" width={80} height={80} />
      </div>
      <div className="space-x-8">
        <Link
          href="/pages/home"
          className="text-black text-1xl font-bold hover:underline"
        >
          Home
        </Link>
        <Link
          href="/pages/aboutus"
          className="text-black text-1xl font-bold hover:underline"
        >
          About Us
        </Link>
        <Link
          href="/pages/room"
          className="text-black text-1xl font-bold hover:underline"
        >
          Room
        </Link>
        <Link
          href="/pages/contactus"
          className="text-black text-1xl font-bold hover:underline"
        >
          Contact Us
        </Link>
        <Link
          href="/pages/requestbooking"
          className="text-black text-1xl font-bold hover:underline"
        >
          Request Booking
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
