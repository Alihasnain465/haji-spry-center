"use client";

import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/footer";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-green-200 via-green-100 to-green-50">
      
      {/* Main Content */}
      <div className="flex-grow flex flex-col justify-center items-center text-center px-4">
        
        <h1 className="text-4xl md:text-5xl font-extrabold text-green-800 drop-shadow-lg">
          Welcome to Haji Spray Center
        </h1>

        <p className="mt-6 text-lg md:text-xl text-green-700 max-w-xl">
          We provide high-quality pesticides in Taliwand for farmers.  
          Explore our products and choose the best for your crops.
        </p>

        {/* Clear Optimized Image */}
        <div className="mt-8 w-full max-w-4xl">
          <Image
            src="/b.photo.png"
            alt="Haji Spray Center"
            width={1200}
            height={700}
            priority
            className="rounded-xl shadow-2xl object-cover w-full h-auto"
          />
        </div>

        {/* Shop Now Button */}
        <Link
          href="/products"
          className="mt-8 bg-green-600 text-white px-6 py-3 rounded-lg shadow-lg text-lg font-semibold hover:bg-green-700 transition"
        >
          Shop Now
        </Link>

      </div>

      
    </div>
  );
}