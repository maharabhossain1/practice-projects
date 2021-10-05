import React from "react";
import img from "./img/2.jpeg";

export default function About() {
  return (
    <div className="m-4 p-4">
      <div className="container d-flex justify-content-center align-items-center m-4 p-4">
        <div className="w-75 m-2">
          <h1>About Us</h1>
          <p>
            The M.madrasa is an Islamic seminary (darul uloom) in India at which
            the Sunni Deobandi Islamic movement began. It is located in Deoband,
            a town in Saharanpur district, Uttar Pradesh. The seminary was
            established by Muhammad Qasim Nanautavi, Fazlur Rahman Usmani,
            Sayyid Muhammad Abid and others in 1866. Mahmud Deobandi was the
            first teacher and Mahmud Hasan Deobandi was the first student.
          </p>
        </div>
        <div className="w-75 m-2">
          <img className="img-fluid" src={img} alt="" />
        </div>
      </div>
    </div>
  );
}
