import React from "react";
import "../styles/card.css";

const Cards = ({ item, handleClick, handleWish }) => {
  const { title, author, price, img } = item;
  return (
    <div className="carddiv">
      <div className="imagebox">
        <img src={img} alt="" />
      </div>
      <div className="desc">
        <p>{title}</p>
        <p>{author}</p>
        <p className="price">Price -  <span className="rate">₹ {price}</span></p>
        
      </div>
      <div className="buttondiv">
      <button className="add" onClick={() => handleClick(item)}>Add to Cart</button>
        <button className="wish" onClick={() => handleWish(item)}>Wishlist</button>
      </div>
    </div>
  );
};

export default Cards;

// id, title, autor, price, img
