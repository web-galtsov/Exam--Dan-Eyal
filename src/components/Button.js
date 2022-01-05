import React from "react";
import { ItemList, ItemListLi
} from "../Style";



function Button({ categories, handleClick }) {
  const buttons = categories.map((category, index) => {
    return (
      <ItemList key={index}>
        <ItemListLi onClick={() => handleClick(category)}>
          {category.toUpperCase()}
        </ItemListLi>
      </ItemList>
    );
  });
  return <ItemList>{buttons}</ItemList>;
}

export default Button;
