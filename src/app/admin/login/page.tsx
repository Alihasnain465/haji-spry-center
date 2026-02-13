"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Footer from "@/components/footer";
import Link from "next/link";

export default function AdminLogin() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (email === "admin@haji.com" && password === "123456") {
      localStorage.setItem("admin", "true");
      router.push("/admin/dashboard");
    } else {
      alert("Wrong Credentials");
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-between bg-green-50">
      {/* Main Content */}
      <div className="flex-grow flex flex-col justify-center items-center px-4">
        <div className="bg-white p-8 rounded-xl shadow-lg max-w-sm w-full text-center">
          <h1 className="text-3xl font-bold text-green-700 mb-6">
            Admin Login
          </h1>

          <input
            placeholder="Email"
            className="border p-2 w-full mb-3 rounded"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="border p-2 w-full mb-4 rounded"
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            onClick={handleLogin}
            className="bg-green-600 text-white p-2 w-full rounded hover:bg-green-700 transition"
          >
            Login
          </button>

          {/* Go Back Home Button */}
          <Link
            href="/"
            className="mt-4 inline-block text-green-600 hover:underline"
          >
            ← Go Back Home
          </Link>
        </div>
      </div>

      {/* Footer */}
      
    </div>
  );
}