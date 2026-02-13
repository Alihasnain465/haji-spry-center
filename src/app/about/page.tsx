"use client";

import NextPageButton from "@/components/NextPageButton";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-green-100 py-12 px-4">

      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <h1 className="text-5xl font-extrabold text-green-800 text-center mb-6">
          About Haji Spray Center
        </h1>

        <p className="text-gray-700 text-lg text-center max-w-3xl mx-auto mb-12">
          Haji Spray Center Taliwand میں واقع ایک معتبر زرعی ادویات کی دکان ہے۔
          ہم کسان بھائیوں کو اعلیٰ معیار کی pesticides اور زرعی سپرے فراہم کرتے ہیں
          تاکہ ان کی فصلیں بیماریوں اور کیڑوں سے محفوظ رہیں۔
        </p>

        {/* Mission + Services Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">

          {/* Mission */}
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition duration-300">
            <h2 className="text-2xl font-bold text-green-700 mb-4">
              🎯 Our Mission
            </h2>
            <p className="text-gray-700">
              ہمارا مقصد کسانوں کو بہترین زرعی ادویات مناسب قیمت پر فراہم کرنا ہے
              تاکہ ان کی پیداوار میں اضافہ ہو اور فصلیں محفوظ رہیں۔
            </p>
          </div>

          {/* Services */}
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition duration-300">
            <h2 className="text-2xl font-bold text-green-700 mb-4">
              🛠 Our Services
            </h2>

            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>High Quality Pesticides</li>
              <li>Crop Protection Solutions</li>
              <li>Weed & Insect Control</li>
              <li>Farmer Support & Guidance</li>
              <li>Customer Support in Taliwand</li>
            </ul>
          </div>

        </div>

        {/* Owner Section */}
        <div className="bg-white rounded-3xl shadow-2xl p-10 flex flex-col md:flex-row items-center gap-12">

          {/* Image Side */}
          <div className="w-64 h-64 flex-shrink-0">
            <img
              src="/owener.jpeg"
              alt="Owners"
              className="w-full h-full rounded-full object-cover border-8 border-green-100 shadow-2xl"
            />
          </div>

          {/* Text Side */}
          <div>
            <h2 className="text-4xl font-bold text-green-800 mb-6">
              Our Owners
            </h2>

            <p className="text-2xl font-semibold text-gray-800 mb-2">
              Ch Sultan Gujjar
            </p>

            <p className="text-2xl font-semibold text-gray-800">
              Ch Ali Hasnain Gujjar
            </p>
          </div>

        </div>

        {/* Button */}
        <div className="mt-12 text-center">
          <NextPageButton link="/contact" />
        </div>

      </div>
    </div>
  );
}