import React from "react";

function Maps() {
  return (
    <div className="Mapa">
      <br /> <br /> <br />
      <iframe
        title="GoogleMaps"
        frameborder="0"
        src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d3764.7555272313793!2d-43.632731435537096!3d-19.336411936939044!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e0!4m0!4m5!1s0xa5efefc91e1f09%3A0x2e8abfd6763ba3fc!2sSerra%20do%20Cip%C3%B3%2C%20Santana%20do%20Riacho%20-%20MG%2C%2035845-000!3m2!1d-19.3367336!2d-43.6297332!5e0!3m2!1spt-BR!2sbr!4v1603309963075!5m2!1spt-BR!2sbr"
        width="600"
        height="450"
        allowfullscreen=""
        aria-hidden="false"
        tabindex="0"
      ></iframe>
    </div>
  );
}

export default Maps;
