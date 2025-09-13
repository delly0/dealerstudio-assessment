import React from 'react';
import CardImage from './CardImage';
import CardHeader from './CardHeader';
import CardBody from './CardBody';
import Button from '../Button';

export default function Card({ data, selected, onSelect, className }) {
  return (
    <article
      className={`flex flex-col bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transition-all duration-500 h-full w-full ${className} ${
        selected ? "ring-4 ring-blue-500 transition-[box-shadow,ring-width] duration-500 ease-in-out" : "ring-0"
      }`}
    >
      <CardImage src={data.image} alt={data.title} />
      <div className="p-6 flex flex-col flex-grow">
        <CardHeader title={data.title} />
        <CardBody description={data.description} className="flex-grow pb-6" />
        <div className="mt-auto">
          <Button
            text={data.buttonText}
            onClick={onSelect}
            variant="card"
            className="mt-6"
            aria-pressed={selected}
          />
        </div>
      </div>
    </article>
  );
}