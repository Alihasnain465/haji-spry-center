"use client";
import { useRouter } from "next/navigation";

export default function NextPageButton({ link }: { link: string }) {
  const router = useRouter();

  return (
    <div className="text-center mt-10">
      <button
        onClick={() => router.push(link)}
        className="bg-green-600 text-white px-6 py-3 rounded shadow hover:bg-green-700"
      >
        ➡️ Next Page
      </button>
    </div>
  );
}