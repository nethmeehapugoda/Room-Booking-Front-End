"use client";

{
  /*import MainLayout from "@/components/Layouts/MainLayout";
import React, { useState } from "react";
import Image from "next/image";
import home20 from "../../../../public/home20.jpg";
import axios from "axios";

const RequestBooking = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    address1: "",
    address2: "",
    city: "",
    state: "",
    phone: "",
    email: "",
    checkInDate: "",
    checkOutDate: "",
    numberOfAdults: 1,
    numberOfChildren: 1,
    roomPreference: "",
  });

  const [billingData, setBillingData] = useState({
    fullName: "",
    email: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    cardNumber: "",
  });

  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleBillingChange = (e) => {
    const { name, value } = e.target;
    setBillingData((prev) => ({ ...prev, [name]: value }));
  };

  const handlePersonalSubmit = async (e) => {
    e.preventDefault();
    setStep(2);
  };

  const handleRoomSelect = (room) => {
    setFormData((prev) => ({ ...prev, roomPreference: room }));
    setStep(3);
  };

  const resetBooking = () => {
    setTimeout(() => {
      setFormData({
        firstName: "",
        lastName: "",
        address1: "",
        address2: "",
        city: "",
        state: "",
        phone: "",
        email: "",
        checkInDate: "",
        checkInTime: "",
        checkOutDate: "",
        checkOutTime: "",
        numberOfAdults: 1,
        numberOfChildren: 1,
        roomPreference: "",
      });
      setBillingData({
        fullName: "",
        email: "",
        address: "",
        city: "",
        state: "",
        zip: "",
        cardNumber: "",
      });
      setStep(1);
      setShowSuccess(false); // optional if you're showing a success message
    }, 5000); // delay in milliseconds (e.g., 5 sec)
  };

  const handleFinalSubmit = async (e) => {
    e.preventDefault();
    const finalData = { ...formData, billing: billingData };
    try {
      const response = await axios.post(
        "http://localhost:5000/api/booking",
        finalData
      );
      console.log("Booking complete:", response.data);
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 5000);
      resetBooking();
    } catch (error) {
      console.error("Error completing booking:", error);
    }
  };

  const roomOptions = [
    {
      name: "Luxury Room",
      description:
        "A premium experience with ocean view, private balcony, and full services. Ideal for honeymooners or VIP stays.",
      features: [
        "King-size bed",
        "Private Jacuzzi & Bar",
        "Smart TV, Wi-Fi, Butler service",
      ],
      price: "LKR 75,000 / night",
    },
    {
      name: "Premium Room",
      description:
        "Spacious and stylish, perfect for families or business travelers. Comes with work desk and mini bar.",
      features: [
        "Queen-size bed",
        "Mini-fridge & Workspace",
        "Complimentary breakfast",
      ],
      price: "LKR 55,000 / night",
    },
    {
      name: "Normal Room (A/C)",
      description:
        "Comfortable and affordable with air-conditioning. Great for short stays or small families.",
      features: ["Double bed", "Air Conditioning", "TV & Wi-Fi"],
      price: "LKR 30,000 / night",
    },
    {
      name: "Non A/C Room",
      description:
        "Budget-friendly and clean. Perfect for travelers looking for simplicity and value.",
      features: ["Ceiling fan", "Basic furnishings", "Free bottled water"],
      price: "LKR 18,000 / night",
    },
  ];

  return (
    <MainLayout>
      <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-xl overflow-hidden mt-10 mb-20">
        <div className="relative h-64">
          <Image
            src={home20}
            alt="home20"
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 bg-opacity-40 flex items-center justify-center">
            <h1 className="text-amber-700 text-4xl font-bold">
              Request Booking
            </h1>
          </div>
        </div>

        
        <div className="p-4 flex justify-center gap-6 text-lg">
          <button
            className={`px-4 py-2 rounded ${
              step === 1 ? "bg-amber-600 text-white" : "bg-gray-200"
            }`}
            onClick={() => setStep(1)}
          >
            Personal Info
          </button>
          <button
            className={`px-4 py-2 rounded ${
              step === 2 ? "bg-amber-600 text-white" : "bg-gray-200"
            }`}
            disabled={!formData.firstName}
          >
            Room Selection
          </button>
          <button
            className={`px-4 py-2 rounded ${
              step === 3 ? "bg-amber-600 text-white" : "bg-gray-200"
            }`}
            disabled={!formData.roomPreference}
          >
            Payment
          </button>
        </div>

        {step === 1 && (
          <form onSubmit={handlePersonalSubmit} className="p-8 space-y-6">
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label className="block text-sm font-medium">
                    First Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full border p-2 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium">
                    Last Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full border p-2 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500"
                    required
                  />
                </div>
              </div>

              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium">
                    Address 1 <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="address1"
                    value={formData.address1}
                    onChange={handleChange}
                    className="w-full border p-2 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium">Address 2</label>
                  <input
                    type="text"
                    name="address2"
                    value={formData.address2}
                    onChange={handleChange}
                    className="w-full border p-2 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                </div>
              </div>

              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium">
                    City <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    className="w-full border p-2 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium">
                    State <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="state"
                    value={formData.state}
                    onChange={handleChange}
                    className="w-full border p-2 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500"
                    required
                  />
                </div>
              </div>

              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium">
                    Phone <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full border p-2 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full border p-2 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500"
                    required
                  />
                </div>
              </div>

              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium">
                      Checkin Date <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="date"
                      name="checkInDate"
                      value={formData.checkInDate}
                      onChange={handleChange}
                      className="w-full border p-2 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium">
                      Checkout Date <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="date"
                      name="checkOutDate"
                      value={formData.checkOutDate}
                      onChange={handleChange}
                      className="w-full border p-2 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500"
                      required
                    />
                  </div>
              </div>

          
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-black mb-1">
                    Number Of Adults<span className="text-red-500">*</span>
                  </label>
                  <select
                    name="adults"
                    value={formData.adults}
                    onChange={handleChange}
                    className="w-full border border-black rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500"
                  >
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-black mb-1">
                    Number Of Children<span className="text-red-500">*</span>
                  </label>
                  <select
                    name="children"
                    value={formData.children}
                    onChange={handleChange}
                    className="w-full border border-black rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500"
                  >
                    <option>0</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                  </select>
                </div>
              </div>
              
            </div>
            <button
              type="submit"
              className="mt-8 w-full bg-amber-600 hover:bg-amber-800 text-white font-semibold py-3 rounded-lg text-lg"
            >
              Next: Select Room
            </button>
          </form>
        )}

        {step === 2 && (
          <div className="p-8 space-y-6">
            <h2 className="text-2xl font-bold text-black">
              Choose Room Preference
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {roomOptions.map((room, i) => (
                <div key={i} className="h-full">
                  <div className="bg-white rounded-2xl shadow-md overflow-hidden flex flex-col justify-between h-full">
                    <div className="p-6 flex flex-col justify-between h-full">
                      <div>
                        <h3 className="text-xl font-semibold">{room.name}</h3>
                        <p className="text-black mt-2 text-sm">
                          {room.description}
                        </p>
                        <ul className="text-sm mt-3 list-disc list-inside text-black">
                          {room.features.map((feature, idx) => (
                            <li key={idx}>{feature}</li>
                          ))}
                        </ul>
                        <div className="mt-4 font-bold text-orange-600 text-lg">
                          {room.price}
                        </div>
                      </div>
                      <div>
                        <button
                          className="mt-4 w-full bg-amber-600 text-white py-2 rounded hover:bg-amber-800"
                          onClick={() => handleRoomSelect(room.name)}
                        >
                          Book Now
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        
        {step === 3 && (
          <form onSubmit={handleFinalSubmit} className="p-8 space-y-6">
            <h2 className="text-2xl font-bold text-black mb-4">
              Billing & Payment
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block mb-1 text-sm font-medium text-black">
                  Full Name
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={billingData.fullName}
                  onChange={handleBillingChange}
                  className="w-full border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500"
                  required
                />
              </div>
              <div>
                <label className="block mb-1 text-sm font-medium text-black">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={billingData.email}
                  onChange={handleBillingChange}
                  className="w-full border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500"
                  required
                />
              </div>
              <div>
                <label className="block mb-1 text-sm font-medium text-black">
                  Billing Address
                </label>
                <input
                  type="text"
                  name="address"
                  value={billingData.address}
                  onChange={handleBillingChange}
                  className="w-full border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500"
                  required
                />
              </div>
              <div>
                <label className="block mb-1 text-sm font-medium text-black">
                  City
                </label>
                <input
                  type="text"
                  name="city"
                  value={billingData.city}
                  onChange={handleBillingChange}
                  className="w-full border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500"
                  required
                />
              </div>
              <div>
                <label className="block mb-1 text-sm font-medium text-black">
                  State/Province
                </label>
                <input
                  type="text"
                  name="state"
                  value={billingData.state}
                  onChange={handleBillingChange}
                  className="w-full border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500"
                  required
                />
              </div>
              <div>
                <label className="block mb-1 text-sm font-medium text-black">
                  Zip/Postal Code
                </label>
                <input
                  type="text"
                  name="zip"
                  value={billingData.zip}
                  onChange={handleBillingChange}
                  className="w-full border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500"
                  required
                />
              </div>
              <div className="md:col-span-2">
                <label className="block mb-1 text-sm font-medium text-black">
                  Card Number
                </label>
                <input
                  type="text"
                  name="cardNumber"
                  value={billingData.cardNumber}
                  onChange={handleBillingChange}
                  placeholder="1234 5678 9012 3456"
                  className="w-full border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500"
                  required
                />
              </div>
            </div>
            <button
              type="submit"
              className="mt-8 w-full bg-amber-600 hover:bg-amber-800 text-white font-semibold py-3 rounded-lg text-lg"
            >
              Complete Payment
            </button>
          </form>
        )}
        {showSuccess && (
          <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-green-800 text-white px-6 py-3 rounded-lg shadow-lg z-50">
            Booking successful..!!🎉
          </div>
        )}
      </div>
    </MainLayout>
  );
}
export default RequestBooking;*/
}

//new code//

{/*import MainLayout from "@/components/Layouts/MainLayout";
import React, { useState } from "react";
import Image from "next/image";
import home20 from "../../../../public/home20.jpg";
import axios from "axios";



const RequestBooking = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    address1: "",
    address2: "",
    city: "",
    state: "",
    phone: "",
    email: "",
    checkInDate: "",
    checkOutDate: "",
    numberOfAdults: 1,
    numberOfChildren: 1,
    roomPreference: "",
  });

  const [billingData, setBillingData] = useState({
    fullName: "",
    email: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    cardNumber: "",
  });

  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleBillingChange = (e) => {
    const { name, value } = e.target;
    setBillingData((prev) => ({ ...prev, [name]: value }));
  };

  const handlePersonalSubmit = async (e) => {
    e.preventDefault();
    setStep(3);
  };

  const handleRoomSelect = (room) => {
    setFormData((prev) => ({ ...prev, roomPreference: room }));
    setStep(2);
  };

  const resetBooking = () => {
    setTimeout(() => {
      setFormData({
        firstName: "",
        lastName: "",
        address1: "",
        address2: "",
        city: "",
        state: "",
        phone: "",
        email: "",
        checkInDate: "",
        checkOutDate: "",
        numberOfAdults: 1,
        numberOfChildren: 1,
        roomPreference: "",
      });
      setBillingData({
        fullName: "",
        email: "",
        address: "",
        city: "",
        state: "",
        zip: "",
        cardNumber: "",
      });
      setStep(1);
      setShowSuccess(false);
    }, 5000);
  };

  const handleFinalSubmit = async (e) => {
    e.preventDefault();
    const finalData = { ...formData, billing: billingData };
    try {
      const response = await axios.post(
        "http://localhost:5000/api/booking",
        finalData
      );
      console.log("Booking complete:", response.data);
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 5000);
      resetBooking();
    } catch (error) {
      console.error("Error completing booking:", error);
    }
  };

  const roomOptions = [
    {
      name: "Deluxe Room",
      description:
        "A luxury experience with ocean view, private balcony, and full services. Ideal for honeymooners or VIP stays.",
      features: [
        "King-size bed",
        "Private Jacuzzi & Bar",
        "Smart TV, Wi-Fi, Butler service",
      ],
      price: "LKR 75,000 / night",
    },
    {
      name: "Premium Room",
      description:
        "Spacious and stylish, perfect for families or business travelers. Comes with work desk and mini bar.",
      features: [
        "Queen-size bed",
        "Mini-fridge & Workspace",
        "Complimentary breakfast",
      ],
      price: "LKR 55,000 / night",
    },
    {
      name: "Normal Room (A/C)",
      description:
        "Comfortable and affordable with air-conditioning. Great for short stays or small families.",
      features: ["Double bed", "Air Conditioning", "TV & Wi-Fi"],
      price: "LKR 30,000 / night",
    },
    {
      name: "Non A/C Room",
      description:
        "Budget-friendly and clean. Perfect for travelers looking for simplicity and value.",
      features: ["Ceiling fan", "Basic furnishings", "Free bottled water"],
      price: "LKR 18,000 / night",
    },
  ];

  return (
    <MainLayout>


      <div className="max-w-6xl mx-auto bg-white shadow-xl rounded-2xl overflow-hidden mt-10 mb-20">
        <div className="relative h-64">
          <Image
            src={home20}
            alt="home20"
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0  bg-opacity-50 flex items-center justify-center">
            <h1 className="text-amber-700 text-5xl font-bold drop-shadow-lg">
              Request Booking
            </h1>
          </div>
        </div>

        <div className="p-6 flex justify-center gap-6 text-lg">
          <button
            className={`px-5 py-2 rounded-full transition-all duration-300 ${
              step === 1
                ? "bg-amber-600 text-white shadow-md"
                : "bg-gray-200 hover:bg-gray-300"
            }`}
            disabled={!formData.firstName}
          >
            Room Selection
          </button>
          <button
            className={`px-5 py-2 rounded-full transition-all duration-300 ${
              step === 2
                ? "bg-amber-600 text-white shadow-md"
                : "bg-gray-200 hover:bg-gray-300"
            }`}
            onClick={() => setStep(1)}
          >
            Personal Info
          </button>
          <button
            className={`px-5 py-2 rounded-full transition-all duration-300 ${
              step === 3
                ? "bg-amber-600 text-white shadow-md"
                : "bg-gray-200 hover:bg-gray-300"
            }`}
            disabled={!formData.roomPreference}
          >
            Payment
          </button>
        </div>

        {step === 1 && (
          <div className="p-8 space-y-8">
            <h2 className="text-3xl font-semibold text-black text-center">
              Choose Room Preference
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {roomOptions.map((room, i) => (
                <div
                  key={i}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col justify-between p-6"
                >
                  <div>
                    <h3 className="text-2xl font-bold">{room.name}</h3>
                    <p className="text-gray-950 mt-2 text-sm">
                      {room.description}
                    </p>
                    <ul className="mt-4 text-sm list-disc list-inside text-gray-800 space-y-1">
                      {room.features.map((feature, idx) => (
                        <li key={idx}>{feature}</li>
                      ))}
                    </ul>
                    <div className="mt-4 font-bold text-amber-600 text-lg">
                      {room.price}
                    </div>
                  </div>
                  <button
                    className="mt-6 w-full bg-amber-600 hover:bg-amber-800 text-white py-2 rounded-lg transition-all duration-300"
                    onClick={() => handleRoomSelect(room.name)}
                  >
                    Book Now
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="p-8 space-y-8">
            <h2 className="text-3xl font-semibold text-black text-center">
              Personal Information
            </h2>
            <form onSubmit={handlePersonalSubmit} className="p-8 space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                
              
                {[
                  { label: "First Name", name: "firstName", required: true },
                  { label: "Last Name", name: "lastName", required: true },
                  { label: "Address 1", name: "address1", required: true },
                  { label: "Address 2", name: "address2" },
                  { label: "City", name: "city", required: true },
                  { label: "State", name: "state", required: true },
                  { label: "Phone", name: "phone", required: true },
                  { label: "Email Address", name: "email", required: true },
                ].map(({ label, name, required }) => (
                  <div key={name}>
                    <label className="block text-gray-950 font-semibold mb-2">
                      {label}
                      {required && <span className="text-red-500">*</span>}
                    </label>
                    <input
                      type={name.includes("email") ? "email" : "text"}
                      name={name}
                      value={formData[name]}
                      onChange={handleChange}
                      required={required}
                      className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-amber-500 outline-none"
                    />
                  </div>
                ))}
                
                {[
                  { label: "Check In Date", name: "checkInDate" },
                  { label: "Check Out Date", name: "checkOutDate" },
                ].map(({ label, name }) => (
                  <div key={name}>
                    <label className="block text-gray-950 font-semibold mb-2">
                      {label}
                      <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="date"
                      name={name}
                      value={formData[name]}
                      onChange={handleChange}
                      required
                      className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-amber-500 outline-none"
                    />
                  </div>
                ))}
                
                <div>
                  <label className="block text-gray-950 font-semibold mb-2">
                    Number of Adults<span className="text-red-500">*</span>
                  </label>
                  <select
                    name="numberOfAdults"
                    value={formData.numberOfAdults}
                    onChange={handleChange}
                    className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-amber-500 outline-none"
                  >
                    {[1, 2, 3, 4,5].map((num) => (
                      <option key={num}>{num}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-gray-950 font-semibold mb-2">
                    Number of Children<span className="text-red-500">*</span>
                  </label>
                  <select
                    name="numberOfChildren"
                    value={formData.numberOfChildren}
                    onChange={handleChange}
                    className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-amber-500 outline-none"
                  >
                    {[0, 1, 2, 3, 4].map((num) => (
                      <option key={num}>{num}</option>
                    ))}
                  </select>
                </div>
              </div>
              <button
                type="submit"
                className="w-full bg-amber-600 hover:bg-amber-800 text-white font-bold py-3 rounded-lg transition-all duration-300 text-lg"
              >
                Next: Payment Details
              </button>
            </form>
          </div>
        )}

        {step === 3 && (
          <form onSubmit={handleFinalSubmit} className="p-8 space-y-8">
            <h2 className="text-3xl font-bold text-gray-950 mb-6 text-center">
              Billing & Payment
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ">
              {[
                { label: "Full Name", name: "fullName" },
                { label: "Email Address", name: "email" },
                { label: "Billing Address", name: "address" },
                { label: "City", name: "city" },
                { label: "State/Province", name: "state" },
                { label: "Zip/Postal Code", name: "zip" },
                { label: "Card Number", name: "cardNumber", wide: true },
              ].map(({ label, name, wide }) => (
                <div key={name} className={wide ? "md:col-span-2" : ""}>
                  <label className="block mb-2 text-gray-950 font-semibold">
                    {label}
                    <span className="text-red-500">*</span>
                  </label>
                  <input
                    type={name === "cardNumber" ? "text" : "text"}
                    name={name}
                    value={billingData[name]}
                    onChange={handleBillingChange}
                    required
                    className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-amber-500 outline-none"
                  />
                </div>
              ))}
            </div>
            <button
              type="submit"
              className="w-full bg-amber-600 hover:bg-amber-800 text-white font-bold py-3 rounded-lg transition-all duration-300 text-lg"
            >
              Complete Payment
            </button>
          </form>
        )}
        {showSuccess && (
          <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 bg-green-600 text-white px-6 py-3 rounded-full shadow-lg animate-bounce z-50">
            Booking Successful..!🎉
          </div>
        )}
      </div>
    </MainLayout>
  );
};

export default RequestBooking;*/}
  

//new code//


import MainLayout from "@/components/Layouts/MainLayout";
import React, { useState } from "react";
import Image from "next/image";
import f from "../../../../public/f.png";
import g from "../../../../public/g.png";
import { useRouter } from "next/navigation";

const RequestBookingPage = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRequsetBookingPage = (e) => {
    e.preventDefault();

    if (email === "admin@RoyalPlams" && password === "admin1234") {
      router.push("/pages/dashboard");
    } else {
      router.push("/pages/requestbooking");
    }
  };
  return (
    <MainLayout>
      <div className="flex items-center justify-center min-h-screen bg-cover bg-center bg-no-repeat p-8 ">
        <div className="backdrop-blur-md bg-white/70 p-10 rounded-2xl shadow-2xl w-full max-w-md">
          <section className="bg-amber-50 py-10 rounded-2xl">
            <h1 className="text-5xl font-extrabold text-center text-amber-700 font-serif mb-6 drop-shadow-sm">
              WELCOME BACK
            </h1>
          </section>
          <p className="text-center text-gray-950 mb-6 mt-6">
            Sign in to Your Account
          </p>

          <form className="space-y-6">
      
            <div>
              <label className="block text-gray-950 font-medium mb-2">
                Email Address
              </label>
              <input
                type="email"
                placeholder="enter your email"
                className="w-full p-3 rounded-lg border border-gray-300 focus:ring-4 focus:ring-amber-500 focus:border-amber-700 transition outline-none"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

          
            <div>
              <label className="block text-gray-950 font-medium mb-2">
                Password
              </label>
              <input
                type="password"
                placeholder="enter your password"
                className="w-full p-3 rounded-lg border border-gray-300 focus:ring-4 focus:ring-amber-500 focus:border-amber-700 transition outline-none"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

          
            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 text-gray-850">
                <input type="checkbox" className="accent-amber-700 rounded" />
                Remember me
              </label>
              <a
                href="#"
                className="text-amber-700 hover:underline font-medium"
              >
                Forgot Password?
              </a>
            </div>

            
            <button
              onClick={handleRequsetBookingPage}
              type="submit"
              className="w-full bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600 text-white font-bold py-3 rounded-lg transition transform hover:scale-105 duration-300 shadow-md"
            >
              Sign In
            </button>

        
            <div className="flex items-center my-6">
              <div className="flex-grow h-px bg-gray-300" />
              <span className="mx-4 text-gray-400">OR</span>
              <div className="flex-grow h-px bg-gray-300" />
            </div>

            
            {/*<div className="flex flex-col gap-4">
              <button className="flex items-center justify-center gap-3 w-full border border-gray-300 p-3 rounded-lg hover:bg-gray-100 transition focus:ring-4 focus:ring-amber-500 focus:border-amber-700">
                <Image src={g} alt="g" className="h-8 w-8" />
                Sign in with Google
              </button>
              <button className="flex items-center justify-center gap-3 w-full border border-gray-300 p-3 rounded-lg hover:bg-gray-100 transition focus:ring-4 focus:ring-amber-500 focus:border-amber-700">
                <Image src={f} alt="f" className="h-8 w-8"/>
                Sign in with Facebook
              </button>
            </div>*/}

            
            <p className="text-center text-gray-950 mt-6">
              Don't have an account?{" "}
              <a
                href="/register"
                className="text-amber-700 hover:underline font-semibold"
              >
                Register Now
              </a>
            </p>
          </form>
        </div>
      </div>
    </MainLayout>
  );
};

export default RequestBookingPage;

