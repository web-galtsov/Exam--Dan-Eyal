import React from "react";
import {
    ItemListTodo, ItemListLiTodo } from "../../Style";

function ButtonTodo({ categories, handleClick }) {
    const buttons = categories.map((category, index) => {
        return (
                <ItemListLiTodo key={index} onClick={() => handleClick(category)}>
                    {category.toUpperCase()}
                </ItemListLiTodo>
        );
    });
    return <ItemListTodo>{buttons}</ItemListTodo>;
}

export default ButtonTodo;

