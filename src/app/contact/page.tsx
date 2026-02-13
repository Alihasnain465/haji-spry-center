"use client";

import Footer from "@/components/footer";
import Link from "next/link";

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-green-100 via-green-50 to-green-100">
      {/* Main Content */}
      <div className="flex-grow flex justify-center items-center px-4">
        <div className="bg-white p-8 rounded-xl shadow-lg max-w-md w-full text-center">
          <h1 className="text-3xl font-bold text-green-700 mb-6">
            Contact Us
          </h1>

          {/* Updated Address */}
          <p className="mb-3 text-gray-800 font-medium">
            📍 Address: New Bus Stand, Tehsil Bhowana, District Chiniot
          </p>

          {/* Phone Number */}
          <p className="mb-3 text-gray-800 font-medium">
            📞 Phone: 0344-7633091
          </p>

          {/* WhatsApp link */}
          <p className="mb-3 text-gray-800 font-medium">
            💬 <a 
                  href="https://wa.me/923447633091" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-green-600 font-semibold hover:underline"
                >
                  WhatsApp Support Available
                </a>
          </p>

          <p className="mt-6 text-gray-600">
            Customer Support Services Available at New Bus Stand, Bhowana
          </p>

          {/* Admin Login Button */}
          <Link
            href="/admin/login"
            className="mt-6 inline-block bg-green-600 text-white px-6 py-3 rounded-lg shadow-lg font-semibold hover:bg-green-700 transition"
          >
            Admin Login
          </Link>
        </div>
      </div>

      {/* Footer */}
      
    </div>
  );
}