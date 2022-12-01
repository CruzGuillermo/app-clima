import React from "react";
import "./About.css"

export default function About() {
  return (
    <div class="contenedores ">
      <div class=" p-8">
        <div class="bg-white border border-gray-200 rounded-lg shadow-md  dark:border-gray-700 ">
          <div class="p-5">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
              Weather App - Spa
            </h5>

            <p class="mb-3 font-normal text-black text-2xl ">
              Aplicacion Del Clima Creada con<span class="text-blue-800 font-bold"> React</span>
            </p>
            <p class="text-2xl m-0.5 p-1">✅Uso de estado: <span>useState</span> </p>
            <p class="text-2xl m-0.5 p-1">✅Rutas: React-<span class="text-red-800 font-bold">Router</span></p>
            <p class="text-2xl m-0.5 p-1">✅Frameworks:<span class="text-blue-500 font-bold "> TailwindCss</span> </p>
            <p class="text-2xl m-0.5 p-1 ">✅Frameworks: Framer<span class="text-purple-900 font-bold"> Motions</span></p>
            <hr />
            <p class="text-2xl m-0.5 p-1 ">  Que es lo que puede hacer la Spa? 🔍</p>
            <span class="text-2xl m-0.5 p-1 "> Buscar Pais, Provincia y Ciudad 🌍 </span>
            <p class="text-2xl m-0.5 p-1 ">Detalles del clima 🌃🌄 </p>
          </div>
        </div>
      </div>
    </div>
  );
}
