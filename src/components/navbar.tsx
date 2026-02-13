"use client";
import Link from "next/link";
import { useState } from "react";
import MobileMenu from "./mobilemenu";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-green-700 text-white p-4 flex justify-between relative">
      <h1 className="font-bold">Haji Spray Center</h1>

      <div className="hidden md:flex gap-4">
        <Link href="/">Home</Link>
        <Link href="/products">Products</Link>
        <Link href="/cart">Cart</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/admin/login">Admin</Link>
      </div>

      <button className="md:hidden" onClick={() => setOpen(!open)}>
        ☰
      </button>

      {open && <MobileMenu close={() => setOpen(false)} />}
    </nav>
  );
}