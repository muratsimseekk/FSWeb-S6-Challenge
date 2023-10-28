// Karakter bileşeniniz buraya gelecek
import styled from "styled-components";

import React, { useState } from "react";

function KarakterCon(props) {
  const { data } = props;

  const [toggleState, setToggleState] = useState(null);

  // const [toggleDurum, setToggleDurum] = useState(false);

  const ToggleMenu = (index) => {
    setToggleState(toggleState === index ? null : index);
  };
  // console.log(data);

  // const ToggleFilm = () => {
  //   setToggleDurum(!toggleDurum);
  // };
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
    flex-direction : column ;
    align-items:flex-start ;
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

  const UnOrderedList = styled.ul`
    list-style-type: none;
    padding: 0;
  `;

  const ListItems = styled.li`
    text-align: start;
    font-size: 1.7rem;
  `;

  const Label = styled.label`
    font-size: 1.3rem;
  `;
  // console.log(data.name);
  const ListeKarakterler = data.map((element, index) => {
    return (
      <Karakterler>
        <KarakterNames key={index} onClick={() => ToggleMenu(index)}>
          {element.name}
        </KarakterNames>

        {toggleState === index && (
          <UnOrderedList>
            <ListItems>Gender : {element.gender.toUpperCase()}</ListItems>
            <ListItems>Height : {element.height}</ListItems>
            <ListItems>Mass : {element.mass} </ListItems>
            <ListItems>Birth Year : {element.birth_year}</ListItems>
            <ListItems>Eye Color : {element.eye_color}</ListItems>
            <ListItems>Hair Color : {element.hair_color}</ListItems>
            <ListItems>Skin Color : {element.skin_color}</ListItems>

            <UnOrderedList>
              <Label>Appears in {element.films.length} films</Label>
              {element.films.map((film, no) => {
                return <ListItems key={no}>{film}</ListItems>;
              })}
            </UnOrderedList>
          </UnOrderedList>
        )}
      </Karakterler>
    );
  });

  return <KarContainer>{ListeKarakterler}</KarContainer>;
}

export default KarakterCon;
