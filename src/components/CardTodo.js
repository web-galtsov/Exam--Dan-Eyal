import React from "react";
import {
    ItemP,
    Detale
} from "../Style";

function CardTodo({ allcards }) {
    const cards = allcards.map((card) => {
        return (
                <ItemP>
                    <h2>{card.title}</h2>
                </ItemP>
        );
    });
    return <Detale>{cards}</Detale>
}
export default CardTodo;


