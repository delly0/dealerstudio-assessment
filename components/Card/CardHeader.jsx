import React from "react";

export default function CardHeader({ title }) {
  return (
    <div>
      <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-200 transition-colors duration-500">{title}</h3>
    </div>
  );
}
