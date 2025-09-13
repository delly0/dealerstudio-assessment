import React from "react";

export default function CardBody({ description, className = "" }) {
  return (
    <div className={`mt-3 text-sm text-gray-500 dark:text-gray-200 transition-colors duration-500 ${className}`}>
      {Array.isArray(description)
        ? description.map((p, i) => <p className="mb-2" key={i}>{p}</p>)
        : <p>{description}</p>}
    </div>
  );
}
