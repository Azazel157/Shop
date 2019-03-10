import React from "react";
import Button from "@material-ui/core/Button";
import styled from "styled-components";


const Card = styled.div`
  border-radius: 3px;
  border: 2px solid palevioletred;
  margin: 0 1em;
  padding: 0.25em 1em;
  width: 280px;
  float: left;

  img.Tesla,
  img.Mercedes,
  img.BMV {
    width: 312px;
    margin: -4px -16px;
  }

  img.Tesla {
    height: 196px;
  }
  h3.item_title,
  p.item_price {
    display: flex;
    justify-content: center;
  }

  button.one,
  button.two,
  button.three {
    margin: 0 50px;
    color: red;
  }

  button.one:hover,
  button.two:hover,
  button.three:hover {
    box-shadow: 0 4px #990000;
    transition: 0.7s;
  }
`;

const ShopingCard = ({ title, price, image, id, onClick }) => (
  <Card>
    <img className="Tesla" src={image} alt={title} />
    <h3 className="item_title">{title}</h3>
    <p className="item_price">Цена: <span>{price}</span>$</p>
    <Button color="primary" className="one" onClick={onClick}>Добавить в корзину</Button>
  </Card>
);

export default ShopingCard;
