import React from "react";

export default function Footer() {
  return (
    <div className="bg-dark p-4">
      <div className="container bg-dark p-4 d-flex  justify-content-center">
        <p className="text-xs-center text-light">
          &copy;{new Date().getFullYear()} M.Madrasa -All Rights
        </p>
      </div>
    </div>
  );
}
