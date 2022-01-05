import styled from "styled-components";
import Background from "./assets/slider-bg1.png";
import Background1 from "./assets/slider-04-671x671.png";
export const Container =styled.div`
    margin-right: auto;
    margin-left: auto;
    padding-right: 15px;
    padding-left: 15px;
    width: 100%;
  @media (min-width: 576px) {
      max-width: 540px;
  }
  @media (min-width: 768px) {
      max-width: 720px;
  }
  @media (min-width: 992px) {
      max-width: 960px;
  }
  @media (min-width: 1200px) {
      max-width: 1140px;
  }
`;
export const Container01 =styled.div`
    margin-right: auto;
    margin-left: auto;
    padding-right: 15px;
    padding-left: 15px;
    width: 100%;
    display: flex;
  @media (min-width: 576px) {
      max-width: 540px;
  }
  @media (min-width: 768px) {
      max-width: 720px;
  }
  @media (min-width: 992px) {
      max-width: 960px;
  }
  @media (min-width: 1200px) {
      max-width: 1140px;
  }
`;

export const BackgroundHeader = styled.div`
  background-size: auto !important;
  background-position-x: right !important;
  background-position-y: top !important;
  position: absolute;
  top: 0;
  left: 0;
  width: 103%;
  height: 220%;
  z-index: 0;
  background:url(${Background}) center center / cover scroll no-repeat; 
`;
export const SectionImage = styled.div`
  position: relative;
  display: flex;
  background:url(${Background1}) center center / cover scroll no-repeat;
  flex-direction: row;
  width: 731px;
  height: 402px;
  right: -81px;
`;
export const SectionMenuH1 = styled.div`
  display: flex;
  flex-direction: row;
  padding: 60px 9px;
  margin-top: 17%;
  position: relative;
 h1: {
   color: #08B967 !important;
   font-size: 36px;
   line-height: 50px;
   text-align: center;
 }
`;
export const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  background-color: #E1EEEA;
  width: 100%;
  margin-bottom: 20px;
`;
export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
`;

export const ItemList = styled.div`
  padding: 5px 10px;
  flex-direction: column;
  box-shadow: 0 0 1.25rem rgb(108 118 134 / 10%);
  flex: 0 1 50%;
`;

export const ItemListLi = styled.button`
  list-style: none;
  text-align: right;
  color: #222222;
  display: block;
  padding: 15px;
  font-size: 16px;
  transition: .3s;
  width: 100%;
  font-weight: 600;
  cursor: pointer;
  border: none;
  &&:hover {
    padding-right: 20px;
    color: #fff;
    background: #08B967;
  }
  :before {
    content: "";
    position: absolute;
    right: 0;
    top: 0;
    width: 0;
    height: 100%;
    background: #000;
    transition: 0.5s;
  }
`;
export const ItemTotal = styled.div`
  display: flex;
  flex: 22% 0 0;
`;

export const ItemTotalNumber =styled.div`
  display: block;
  width: 100%;
  text-align: center;
  h5 {display: inline-block}
  span {
    text-align: center;
    color: #006e3b;
    padding-right: 15px;
    font-weight: bold;
    font-size: 25px;
  }
`;
export const ItemListLiTodo =styled.button`
  list-style: none;
  text-align: center;
  color: #222222;
  padding: 15px;
  font-size: 16px;
  transition: .3s;
  width: 100%;
  font-weight: 600;
  cursor: pointer;
  border: none;
  background-color: white;
  margin: 0 15px;
  box-shadow: 1px 3px 3px #0356303b;
  border-radius: 5px;
    &&:hover {
    color: #fff;
    background: #08B967;
    box-shadow: none;
  }
`;

export const Item =styled.div`
  flex: 0 0 auto;
  width: 100%;
  margin-left: 20px;
  min-height: 570px;
  height: auto;
  @media (min-width: 768px) {
      flex: 0 0 50%;
      max-width: 50%;
    }
  @media (min-width: 992px) {
      flex: 0 0 25%;
      max-width: 25%;
    }
`;

export const ItemListTodo =styled.div`
  padding: 5px 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const ItemTodo =styled.div`
  width: 100%;
`;

export const Detale = styled.div`
    flex-direction: column;
`;

export const ItemP =styled.div`
   display: inline-block;
   width: 100%;
   padding: 2px 10px;
  border-bottom: 1px #efefef solid;
 h2 { text-align: right;
   font-size: 14px;
   font-weight: 500;
  }
`;

export const WrapContent = styled.div`
  display: flex;
  flex-direction: column;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  color: rgb(255, 255, 255);
  position: relative;
  @media (max-width: 991px) {
    padding-left: 15px;
    padding-right: 15px;
  }
`;

export const ButtonTodo = styled.button`
  outline: none;
  background: #08B967;
  border: 1px solid #08B967;
  text-transform: uppercase;
  font-weight: 600;
  color: #fff;
  height: 50px;
  width: 60px;
  transition: 0.5s;
  overflow: visible;
  margin: 0;
  font-family: inherit;
  font-size: inherit;
  line-height: inherit;
&&:hover {
  background: #fff;
  color: #08B967;
}
`;

export const FormTodo = styled.form`
  min-height: 5vh;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const FormInput = styled.input`
  min-height: 50px;
  background: #ffffff;
  padding: 0 15px;
  font-size: 14px;
  width: 90%;
  height: auto;
  border: 1px solid rgba(133, 183, 158, 0.7);
  border-radius: 2px;
`;

export const FormTodoUl = styled.ul`
  margin: 0.5rem -15px 1.5rem 0.5rem;
  font-size: 1.5rem;
  color: black;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all 1s ease;
  flex-direction: column;
  width: 100%;
`;

export const FormTodoLi = styled.li`
  border: none;
  background: #fff;
  padding: 10px 1.5em;
  font-size: initial;
  outline: none;
  list-style-type: none;
  color: #222222;
  margin: 5px auto;
  display: block;
  width: 99%;
`;

export const FormTodoLiCon = styled.div`
  display: flex;
  justify-content: center;
    span {
    align-items: center;
    display: flex;
    width: 100%;
  }
`;