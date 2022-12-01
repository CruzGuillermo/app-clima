import React from "react";
import "./Ciudad.css"

export default function Ciudad({ city }) {
  return (
    <div className=" text-black  m-10 flex justify-center ">
     <div className="max-w-md bg-white rounded-xl  p-10 shadow-lg " >
    <h1 className="text-3xl font-semibold text-blue-800">{city.name}</h1>
      <p><span className="text-lg font-medium p-0.5 m-1">Temperatura</span>: {city.temp} ºC</p>
      <p><span className="text-lg font-medium p-0.5 m-1">Clima</span>: {city.weather}</p>
      <p><span className="text-lg font-medium p-0.5 m-1">Viento</span>: {city.wind} km/h</p>
      <p><span className="text-lg font-medium p-0.5 m-1">Cantidad de nubes</span>: {city.clouds}</p>
      <p><span className="text-lg font-medium p-0.5 m-1">Latitud</span>: {city.latitud}º</p>
      <p><span className="text-lg font-medium p-0.5 m-1">Longitud</span>: {city.longitud}º</p>

    </div>
    </div>
  );
}

