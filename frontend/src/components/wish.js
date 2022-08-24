import React, { useState, useEffect } from "react";
import "../styles/cart.css";
const Wish = ({ wish, setWish }) => {
  const handleRemove = (title) => {
    const arr = wish.filter((item) => item.title !== title);
    setWish(arr);
  };

  return (
    <article>
      {wish.map((item) => (
        <div className="cart_box" key={item.title}>
          <div className="cart_img">
            <img src={item.img} alt="" />
            <p>{item.title}</p>
          </div>
          <div>
            <span>{item.price}</span>
            <button onClick={() => handleRemove(item.title)}>Remove</button>
          </div>
        </div>
      ))}
    </article>
  );
};

export default Wish;
