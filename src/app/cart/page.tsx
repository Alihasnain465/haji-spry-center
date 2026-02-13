"use client";

import { useCart } from "@/context/CartContext";
import Footer from "@/components/footer";
import Image from "next/image";
import Link from "next/link";

export default function CartPage() {
  const { cart, removeFromCart, clearCart } = useCart();
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Cart Header */}
      <div className="flex justify-between items-center p-4 bg-green-600 text-white">
        <h1 className="text-2xl font-bold">Your Cart</h1>
        <div className="relative">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.6 8h13.2L17 13M7 13H5.4M17 13l1.6 8M9 21h6"
            />
          </svg>

          {/* Count badge */}
          {cart.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">
              {cart.length}
            </span>
          )}
        </div>
      </div>

      {/* Cart Content */}
      <div className="flex-grow p-6">
        {cart.length === 0 ? (
          <p className="text-center text-gray-600 text-lg mt-10">
            Your cart is empty
          </p>
        ) : (
          <div className="space-y-4">
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex justify-between items-center bg-white p-4 rounded shadow"
              >
                <div className="flex items-center space-x-4">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={80}
                    height={80}
                    className="rounded"
                  />
                  <div>
                    <p className="font-semibold">{item.name}</p>
                    <p className="text-green-600">Rs {item.price}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <p className="font-semibold">Qty: {item.quantity}</p>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="bg-red-500 text-white px-3 py-1 rounded"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}

            <div className="text-right mt-4 font-bold text-lg">
              Total: Rs {total}
            </div>

            <div className="text-right mt-2 space-x-2">
              <button
                onClick={clearCart}
                className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition"
              >
                Clear Cart
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Navigation Buttons above Footer */}
      <div className="flex justify-center space-x-4 mt-auto p-6 bg-gray-50">
        <Link
          href="/products"
          className="bg-green-600 text-white px-6 py-2 rounded shadow hover:bg-green-700 transition"
        >
          Back to Products
        </Link>

        <Link
          href="/about"
          className="bg-green-500 text-white px-6 py-2 rounded shadow hover:bg-green-600 transition"
        >
          About Us
        </Link>
      </div>

      {/* Footer always at bottom */}
      
    </div>
  );
}