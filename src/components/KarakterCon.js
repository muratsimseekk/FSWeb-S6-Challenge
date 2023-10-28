// Karakter bileşeniniz buraya gelecek
import "./css/KarakterCon.css";
import React from "react";

function KarakterCon(props) {
  const { data } = props;
  console.log(data);

  return (
    <div className="container">
      <div className="karakter">Karakter</div>
      <div className="karakter">Karakter</div>
      <div className="karakter">Karakter</div>
      <div className="karakter">Karakter</div>
      <div className="karakter">Karakter</div>
      <div className="karakter">Karakter</div>
    </div>
  );
}

export default KarakterCon;
