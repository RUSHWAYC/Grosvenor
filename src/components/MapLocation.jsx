import React from "react";

const MapLocation = () => {
  return (
    <div className="bg-gray-100 w-full border rounded-lg shadow-lg p-6">
      <h2 className="text-2xl font-bold mb-6">Our Location</h2>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11331.357924154052!2d20.5522831!3d44.7636883!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475a773ea412453f%3A0x6e2060028eccb62c!2sGrosvenor!5e0!3m2!1ssr!2srs!4v1682777041354!5m2!1ssr!2srs"
        width="100%"
        height="300"
        style={{ border: 0, borderRadius: "0.5rem" }}
        allowFullScreen=""
        loading="lazy"
      ></iframe>
    </div>
  );
};

export default MapLocation;
