import React, { useState } from "react";
import { data } from "../data";
import Card from "./Card";
import Button from "./Button";

import {
    Container,
    FlexContainer,
    Item,
    ItemList,
    Row,
    SectionMenuH1,
    ItemTotal,
    ItemTotalNumber, BackgroundHeader, SectionImage, Container01
} from "../Style";

function SectionMenu() {
    const [cards, setCards] = useState(data);
    const cats = ["all", ...new Set(data.map((card) => card.category))];
    const filter = (cat) => {
        if (cat === "all") {
            setCards(data);
            return;
        }
        setCards(data.filter((item) => item.category === cat));
    };
    const number = (data.length);
    return (
     <>
      <FlexContainer>
         <BackgroundHeader/>
          <Container01>
              <SectionImage data-aos="fade-left"/>
               <SectionMenuH1 data-aos="zoom-in">
                        <h1>רשימהת קניות</h1>
                        <div className="underline">
                            <div className="br-line"/>
                        </div>
               </SectionMenuH1>
          </Container01>
      </FlexContainer>
      <Container className="pt20 pb40">
              <Row>
                 <Item data-aos="zoom-in">
                     <Button categories={cats} handleClick={filter} />
                 </Item>
                 <ItemList data-aos="zoom-in">
                     <Card allcards={cards} />
                 </ItemList>
                 <ItemTotal data-aos="zoom-in">
                     <ItemTotalNumber>
                         <h5>חהייכ : 6 מוצרים</h5>
                         <span>{number}</span>
                     </ItemTotalNumber>
                 </ItemTotal>
              </Row>
        </Container>
      </>
    );
}
export default SectionMenu;


















