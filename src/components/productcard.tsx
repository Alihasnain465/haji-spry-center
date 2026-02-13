"use client";

import Image from "next/image";
import { Product } from "@/types/product";
import { useCart } from "@/context/CartContext";

export default function ProductCard({ product }: { product: Product }) {
  const { addToCart } = useCart();

  return (
    <div className="border rounded-lg shadow-md p-4 bg-white text-center">
      <Image
        src={product.image}
        alt={product.name}
        width={250}
        height={200}
        className="mx-auto rounded"
      />
      <h2 className="text-lg font-bold mt-3 text-gray-800">{product.name}</h2>
      <p className="text-green-600 font-semibold mt-1">Rs {product.price}</p>
      <button
        onClick={() => addToCart(product)}
        className="mt-3 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
      >
        Add to Cart
      </button>
    </div>
  );
}