import React from "react";
import { render } from "react-dom";
import Gallery from "react-photo-gallery";
import { photos } from "./Fonte";

function Fotos() {
  const BasicRows = () => <Gallery photos={photos} />;
  render(<BasicRows />, document.getElementById("app"));
  return <div>ppppp</div>;
}

export default Fotos;
