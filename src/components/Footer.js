import React, { useState } from "react";

const Footer = (props) => {
  const { data } = props;
  const [sayici, setSayici] = useState(0);

  const sayfaArtirici = () => {
    setSayici(sayici + 1);
  };
  const sayfaAzaltici = () => {
    setSayici(sayici - 1);
  };

  return <div>Footer</div>;
};

export default Footer;
