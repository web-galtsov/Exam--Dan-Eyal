import React from "react";
import {
    ItemP,
    Detale
} from "../Style";


function Card({ allcards }) {
  const cards = allcards.map((card) => {
     return (
             <>
                <ItemP key={card}>
                  <h2>{card.title}</h2>
                </ItemP>
             </>
    );
  });
    return <Detale>{cards}</Detale>
}
export default Card;
