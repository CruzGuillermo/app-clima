import React from "react";
import { Link } from "react-router-dom";
import "./Card.css";

export default function Card({ min, max, name, img, onClose, id }) {
  return (
    <div className=" rounded-xl text-black  shadow-md bg-white hover:bg-sky-900 active:bg-sky-700 focus:outline-none focus:ring focus:ring-violet-300 m-4 " >
      <div id="closeIcon" className="row">
        <button onClick={onClose} className="btn btn-sm btn-danger">
          X
        </button>
      </div>
      <div className="card-body">
          <h1 className="card-title uppercase text-4xl font-semibold text-gray-800">{name}</h1>
        <div className="row">
          <div className="font-semibold col-sm-4 col-md-4 col-lg-4">
            <p >Min</p>
            <p>{min}°</p>
          </div>
          <div className="font-semibold col-sm-4 col-md-4 col-lg-4">
            <p>Max</p>
            <p>{max}°</p>
          </div>
          <div className=" col-sm-4 col-md-4 col-lg-4 p-1">
            <img
              className="iconoClima animate-bounce origin-bottom-left"
              src={"http://openweathermap.org/img/wn/" + img + "@2x.png"}
              width="80"
              height="80"
              alt=""
            />
          </div>
        </div>
        <Link to={`/ciudad/${id}`}>
        <button class="p-0.5 bg-violet-500 hover:bg-violet-600 
        hover:text-white active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 rounded-xl w-full">
  Detalles
</button>
</Link>
      </div>
    </div>
  );
}
