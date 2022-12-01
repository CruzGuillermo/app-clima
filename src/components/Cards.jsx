import React from "react";
import "./Cards.css";

import Card from "./Card.jsx";

export default function Cards({ cities, onClose }) {
  return (
    <div className="cards">
      {cities.length > 0 ? (
        cities.map((c) => (
          <Card
            id={c.id}
            key={c.id}
            max={c.max}
            min={c.min}
            name={c.name}
            img={c.img}
            onClose={() => onClose(c.id)}
          />
        ))
      ) : (
        <a class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white animate-bounce">
            🔍
          </h5>
          <p class="font-normal text-gray-700 dark:text-gray-400 text-center">
            Ingresa una Ciudad para Buscar
          </p>
        </a>
      )}
    </div>
  );
}
