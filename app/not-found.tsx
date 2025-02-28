import React from "react";
import Link from "next/link";

const NotFound = () => {
  return (
    <div className="flex flex-col h-screen items-center justify-center bg-gray-100 text-center">
      <h1 className="text-8xl font-bold text-teal-600">404</h1>
      <p className="text-xl text-gray-400 mt-2">Page not found</p>
      <Link href="/" className="mt-4 px-4 py-2 bg-green-500 text-white rounded-sm hover:bg-green-800">
          Go to Home
      </Link>
    </div>
  );
};

export default NotFound;

