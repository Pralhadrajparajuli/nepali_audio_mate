import React from "react";

export const TextArea = ({ text, setText }) => {
  return (
    <textarea
      className="w-full h-32 p-2 text-black border rounded resize-none"
      placeholder="अडियो उत्पन्न गर्न लेख्नुहोस्"
      value={text}
      onChange={(e) => setText(e.target.value)}
    />
  );
};
