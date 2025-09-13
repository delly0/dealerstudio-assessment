import React from "react";

export default function CardImage({ src, alt }) {
  return (
    <div className="relative h-44 md:h-48 group">
      <img src={src} alt={alt} className="w-full h-full object-cover" />
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center text-white font-semibold text-lg">
        Click the button to select
      </div>
    </div>
  );
}

