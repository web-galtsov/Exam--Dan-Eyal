import React, { useState } from "react";
import { data } from "../../data";
import ButtonTodo from "./ButtonTodo";

import {
    Container,
    ItemTodo,
    Row
} from "../../Style";
import CardTodo from "../CardTodo";

function SectionMenuTodo() {
    const [cards, setCards] = useState(data);
    const cats = [...new Set(data.map((card) => card.category))];
    const filter = (cat) => {
        setCards(data.filter((item) => item.category === cat));
    };
    return (
            <Container>
                <Row>
                    <ItemTodo data-aos="zoom-in">
                        <ButtonTodo categories={cats} handleClick={filter} />
                        <ItemTodo><CardTodo allcards={cards} /></ItemTodo>
                    </ItemTodo>
                </Row>
            </Container>
    );
}
export default SectionMenuTodo;


/*
     Maybe 2

import React, { useState, useEffect } from "react";
import {
    Container,
    ItemTodo,
    Row,
    ItemP
} from "../../Style";

const SectionMenuTodo = () => {
    const [array, setArray] = useState([]);
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState(null);

    const fetchData = async () => {
        const response = await fetch ("http://localhost:7000/todos");
        let data = await response.json();
        setCategories(Array.from(new Set(data.map(d => d.category))));
        setArray(data);
        console.log("array:2121",setArray(data) )
    }

    useEffect(() => {
        fetchData()
    },[]);
    return (
        <Container>
            <Row>
                <ItemTodo>
                    {categories.map(category => (
                        <button key={category} onClick={() => setSelectedCategory(category)}>
                            {category}
                        </button>
                    ))}
                    <ItemTodo>
                        {array
                            .filter(el => {
                                if (selectedCategory) {
                                    return selectedCategory === el.category;
                                }
                                return true;
                            })
                            .map(el =>
                                <ItemP>
                                    <h2>{el.title}</h2>
                                </ItemP>)}
                    </ItemTodo>
               </ItemTodo>
           </Row>
       </Container>
    )
}
export default SectionMenuTodo;*/
