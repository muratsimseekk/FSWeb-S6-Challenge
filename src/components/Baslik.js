import React, { useState } from "react";
import styled from "styled-components";

function Baslik() {
  const [arama, setArama] = useState("");
  const [button, setButton] = useState(false);
  const Header = styled.h1`
    font-family: "Pixelify Sans", sans-serif;
    font-size: 2.6rem;
  `;

  const ToggleSearch = () => {
    setButton(!button);
  };

  const Input = styled.input`
    padding: 0.4rem;
    margin: 1rem;
  `;

  return (
    <div>
      <div onClick={ToggleSearch}>
        <Input type="text" placeholder="Search .."></Input>
      </div>
    </div>
  );
}

export default Baslik;
