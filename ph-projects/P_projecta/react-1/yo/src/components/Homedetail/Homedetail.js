import React from "react";
import img from "./img/1.jpeg";

export default function Homedetail() {
  return (
    <div className="m-4 p-4">
      <div className="container d-flex justify-content-center align-items-center m-4 p-4">
        <div className="w-75 m-2">
          <h1>Welcom to Our Madrasa</h1>
          <p>
            Our madrasa name is M.madrasa . Full name is Molla Madrasa . you can
            know or read more details about us from our about section , also you
            can contect with us if you interested our services some of them are
            given bellow
          </p>
        </div>
        <div className="w-75 m-2">
          <img className="img-fluid" src={img} alt="" />
        </div>
      </div>
    </div>
  );
}
