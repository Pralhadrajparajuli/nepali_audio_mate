import React from "react";

export const Buttons = ({ text }) => {
  return (
    <div className="mt-4">
      {/* Generate Audio Button */}
      <button
        className={`w-full px-4 py-2 rounded-lg transition-all duration-300 ${
          text
            ? "bg-blue-500 text-white hover:bg-blue-600"
            : "bg-gray-300 text-gray-600 cursor-not-allowed"
        }`}
        disabled={!text}
      >
        Generate Audio
      </button>

      {/* Download Button */}
      <button
        className={`w-full px-4 py-2 mt-2 rounded-lg transition-all duration-300 ${
          text
            ? "bg-green-500 text-white hover:bg-green-600"
            : "bg-gray-300 text-gray-600 cursor-not-allowed"
        }`}
        disabled={!text}
      >
        Download
      </button>
    </div>
  );
};