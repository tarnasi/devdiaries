import React from "react";

const Loading = () => {
  return (
    <div className="flex h-screen items-center justify-center bg-gray-100">
      <div className="w-16 h-16 border-4 border-teal-500 border-dashed rounded-full animate-spin"></div>
    </div>
  );
};

export default Loading;
