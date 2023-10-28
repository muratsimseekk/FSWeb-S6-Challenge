// Karakter bileşeniniz buraya gelecek
import styled from "styled-components";

import React from "react";

function KarakterCon(props) {
  const { data } = props;
  console.log(data);

  const KarContainer = styled.div`
    background: linear-gradient(
      177deg,
      rgba(255, 183, 115, 1) 0%,
      rgba(199, 133, 57, 1) 47%,
      rgba(82, 143, 255, 1) 96%
    );
    display: flex;
    flex-direction: column;
    width: 50%;
    margin: 0 auto;
    opacity: 0.92;
  `;

  const Karakterler = styled.div`
  border: 3px solid rgba(248, 232, 55, 0.662);
    padding: 0.5rem;
    display: flex;
    justify-content: space-between;
    font-size: 1.3rem;
    margin: 0.8rem 0.2rem;
    border-radius : .2rem;
    font-family: "Pixelify Sans", sans-serif;
    
    
    &:hover {
      background-color : background: rgb(55,78,67);
      background: linear-gradient(103deg, rgba(55,78,67,1) 0%, rgba(98,161,107,1) 83%, rgba(146,165,149,1) 100%);
      cursor : pointer;
      border-radius : .8rem;
      transition : 0.5s;
    }
  `;

  const KarakterNames = styled.div`
    color: white;
    font-size: 1.7rem;
  `;
  const KarakterBirth = styled.div`
    background-color: brown;
    margin-right: 1rem;
    color: white;
    padding: 0.2rem;
    border-radius: 0.2rem;
  `;
  console.log(data.name);
  const ListeKarakterler = data.map((element) => {
    return (
      <Karakterler>
        <KarakterNames>{element.name}</KarakterNames>
        {/* <KarakterBirth>{element.birth_year}</KarakterBirth> */}
      </Karakterler>
    );
  });

  return <KarContainer>{ListeKarakterler}</KarContainer>;
}

export default KarakterCon;
