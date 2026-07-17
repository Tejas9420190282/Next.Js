// app/not-found.jsx
"use client";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-950 px-6 text-center">
      <h1 className="text-8xl font-extrabold text-blue-500">404</h1>

      <h2 className="mt-4 text-3xl font-bold text-white">
        Page Not Found
      </h2>

      <p className="mt-4 max-w-md text-white">
        Sorry, the page you are looking for doesn't exist or may have been moved.
      </p>

      <div className="mt-8 flex gap-4">
        <Link
          href="/students"
          className="rounded-lg bg-blue-600 px-6 py-3 font-medium text-white transition hover:bg-blue-700"
        >
          Go Home
        </Link>

        <button
          onClick={() => window.history.back()}
          className="rounded-lg border border-gray-600 px-6 py-3 font-medium text-gray-300 transition hover:border-gray-400 hover:bg-gray-800"
        >
          Go Back
        </button>
      </div>
    </div>
  );
}