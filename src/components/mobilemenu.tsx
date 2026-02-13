"use client";
import Link from "next/link";

export default function MobileMenu({ close }: { close: () => void }) {
  return (
    <div className="absolute top-16 left-0 w-full bg-green-600 flex flex-col items-center gap-4 p-4 md:hidden z-50">
      <Link href="/" onClick={close}>Home</Link>
      <Link href="/products" onClick={close}>Products</Link>
      <Link href="/cart" onClick={close}>Cart</Link>
      <Link href="/about" onClick={close}>About</Link>
      <Link href="/contact" onClick={close}>Contact</Link>
      <Link href="/admin/login" onClick={close}>Admin</Link>
    </div>
  );
}