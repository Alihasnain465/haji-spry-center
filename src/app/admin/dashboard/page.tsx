"use client";

import { useState, useEffect } from "react";
import { Product } from "@/types/product";

export default function Dashboard() {
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [name, setName] = useState("");
  const [price, setPrice] = useState<number>(0);
  const [image, setImage] = useState<string>("");

  // Load products from LocalStorage
  useEffect(() => {
    const stored = localStorage.getItem("products");
    if (stored) setProducts(JSON.parse(stored));
  }, []);

  // Handle dropdown select
  const handleSelect = (id: number) => {
    const product = products.find((p) => p.id === id);
    if (!product) return;

    setSelectedId(id);
    setName(product.name);
    setPrice(product.price);
    setImage(product.image);
  };

  // Image upload
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => setImage(reader.result as string);
  };

  // Add or Update Product
  const handleSave = () => {
    if (!name || !price || !image) {
      alert("Please fill all fields");
      return;
    }

    let updatedProducts: Product[];

    if (selectedId) {
      // Update existing product
      updatedProducts = products.map((p) =>
        p.id === selectedId ? { ...p, name, price, image } : p
      );
    } else {
      // Add new product
      const newProduct: Product = {
        id: Date.now(),
        name,
        price,
        image,
      };
      updatedProducts = [...products, newProduct];
    }

    setProducts(updatedProducts);
    localStorage.setItem("products", JSON.stringify(updatedProducts));

    // Reset form
    setSelectedId(null);
    setName("");
    setPrice(0);
    setImage("");
  };

  // Delete product
  const handleDelete = (id: number) => {
    const updated = products.filter((p) => p.id !== id);
    setProducts(updated);
    localStorage.setItem("products", JSON.stringify(updated));
    if (selectedId === id) {
      setSelectedId(null);
      setName("");
      setPrice(0);
      setImage("");
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-green-700 mb-6">Admin Dashboard</h1>

      {/* Select product to edit */}
      <div className="mb-4">
        <label className="font-semibold mr-2">Select Product:</label>
        <select
          value={selectedId || ""}
          onChange={(e) => handleSelect(Number(e.target.value))}
          className="border p-2"
        >
          <option value="">-- New Product --</option>
          {products.map((p) => (
            <option key={p.id} value={p.id}>
              {p.name} - Rs {p.price}
            </option>
          ))}
        </select>
      </div>

      {/* Form */}
      <div className="bg-white p-6 shadow rounded mb-6 space-y-3">
        <input
          type="text"
          placeholder="Product Name"
          className="border p-2 w-full"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="number"
          placeholder="Price"
          className="border p-2 w-full"
          value={price}
          onChange={(e) => setPrice(Number(e.target.value))}
        />

        <input
          type="file"
          accept="image/*"
          className="border p-2 w-full"
          onChange={handleImageUpload}
        />

        <button
          onClick={handleSave}
          className="bg-green-600 text-white px-4 py-2 rounded"
        >
          {selectedId ? "Update Product" : "Add Product"}
        </button>
      </div>

      {/* Product List */}
      <div className="space-y-3">
        {products.map((p) => (
          <div
            key={p.id}
            className="flex justify-between items-center border p-3 rounded"
          >
            <div>
              <p className="font-semibold">{p.name}</p>
              <p>Rs {p.price}</p>
            </div>

            <button
              onClick={() => handleDelete(p.id)}
              className="bg-red-500 text-white px-3 py-1 rounded"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}