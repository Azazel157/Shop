import React, { Component } from "react";

import tesla from "../../img/tesla.jpg";
import mercedes from "../../img/mercedes.jpg";
import bmv from "../../img/bmv.jpg";
import ShopingCard from "./../Block/ShopingCard";

const items = [
  {
    id: 1,
    price: 1100,
    title: "Tesla",
    image: tesla
  },
  {
    id: 2,
    price: 1200,
    title: "Mercedes",
    image: mercedes
  },
  {
    id: 3,
    price: 1300,
    title: "BMV",
    image: bmv
  }
];

class Main extends Component {
  state = {
    items
  };

  handleClick = id => () => {
    console.log("clicked", id);
    const { items } = this.state;
    this.setState(
      {
        items: items.filter(item => item.id !== id)
      },
      () => {
        console.log("changed", this.state);
      }
    );
  };

  render() {
    const { items } = this.state;
    console.log(this.state);
    return (
      <div>
        {items.map(item => (
          <ShopingCard
            {...item}
            key={item.id}
            onClick={this.handleClick(item.id)}
          />
        ))}
      </div>
    );
  }
}

export default Main;
