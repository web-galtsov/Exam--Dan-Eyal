import React from 'react';
import AddTodoForm from './AddTodoForm';
import TodoList from './TodoList';
import TotalCompleteItems from './TotalCompleteItems';

import {
    Container,
    FlexContainer,
    SectionMenuH1,
} from "../../Style";
import SectionMenuTodo from "./SectionMenuTodo";

const Todo = () => {
    return (
          <FlexContainer>
              <SectionMenuH1 style={{marginTop: "0"}}>
                  <h3>יש מוצרים אלו במעלקות המתאימות</h3>
                  <div className="underline"><div className="br-line"/></div>
              </SectionMenuH1>
                   <Container>
                  <SectionMenuTodo/>
                <AddTodoForm />
                <TodoList />
                <TotalCompleteItems/>
              </Container>
          </FlexContainer>
    );
};

export default Todo;