
"use client"

import React from 'react'
// loading.jsx

const Loading = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-white">
      {/* Spinner */}
      <div className="h-16 w-16 animate-spin rounded-full border-4 border-gray-300 border-t-blue-600"></div>

      {/* Loading Text */}
      <h2 className="mt-6 text-xl font-semibold text-gray-800">
        Loading
        <span className="inline-flex">
          <span className="animate-bounce">.</span>

          <span className="animate-bounce [animation-delay:150ms]">.</span>

          <span className="animate-bounce [animation-delay:300ms]">.</span>
        </span>
      </h2>

      <p className="mt-2 text-sm text-gray-500">
        Please wait while we prepare your content.
      </p>
    </div>
  );
};

export default Loading;