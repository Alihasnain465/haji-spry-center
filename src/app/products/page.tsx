"use client";

import { useState, useEffect } from "react";
import ProductCard from "@/components/productcard";
import { Product } from "@/types/product";
import Link from "next/link";

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    // Default 10 pesticide products (Images fixed, spaces removed)
    const defaultProducts: Product[] = [
      { id: 1, name: "Super Insecticide Spray", price: 1500, image: "/super spry.webp" },
      { id: 2, name: "Advanced Fungicide", price: 1800, image: "/advanced spry.jpg" },
      { id: 5, name: "Cotton Special Pesticide", price: 1700, image: "/cotton.webp" },
      { id: 6, name: "Rice Field Protector", price: 1600, image: "/rice.webp" },
      { id: 7, name: "Anti-Locust Spray", price: 2100, image: "/locust.webp" },
      { id: 8, name: "Crop Booster Liquid", price: 1900, image: "/boster spry.webp" },
      { id: 10, name: "Plant Protection Spray", price: 1400, image: "/plants.webp" },
    ];

    const stored = localStorage.getItem("products");
    if (stored) {
      const storedProducts: Product[] = JSON.parse(stored);
      const merged = [...defaultProducts];

      storedProducts.forEach((sp) => {
        if (!merged.some((dp) => dp.id === sp.id)) {
          merged.push(sp);
        }
      });

      setProducts(merged);
    } else {
      localStorage.setItem("products", JSON.stringify(defaultProducts));
      setProducts(defaultProducts);
    }
  }, []);

  return (
    <div className="flex flex-col min-h-screen p-6 bg-gray-50">
      {/* Products Grid */}
      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6 mb-6">
        {products.map((p: Product) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>

      {/* Go to Cart Button */}
      <div className="flex justify-center mt-auto">
        <Link
          href="/cart"
          className="bg-green-600 text-white px-6 py-3 rounded-lg shadow hover:bg-green-700 transition"
        >
          Go to Cart
        </Link>
      </div>
    </div>
  );
}