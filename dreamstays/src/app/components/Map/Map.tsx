import React from "react";

const MapEmbed = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "450px",
        border: "0",
        marginBottom: "40px",
      }}
    >
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d889.5700628708607!2d75.82815312839504!3d26.894599494586554!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db694ba420323%3A0x45238e6d11415255!2s401%2C%20Gali%20Number%202%2C%20Raja%20Park%2C%20Jaipur%2C%20Rajasthan%20302004!5e0!3m2!1sen!2sin!4v1730706110756!5m2!1sen!2sin"
        width="100%"
        height="450"
        style={{ border: "0" }}
        // allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Cozy Corner Location"
      ></iframe>
    </div>
  );
};

export default MapEmbed;
