import React, { useState, useEffect } from "react";
import "../styles/cart.css";
import coupons from "../coupon";
const Cart = ({ cart, setCart, handleChange }) => {
	const [price, setPrice] = useState(0);
	const [applied, setApplied] = useState(false);

	let coupon;
	for (let c of coupons) {
		if (c.email === "test@test.com") coupon = c.coupon;
	}

	const handleRemove = (title) => {
		const arr = cart.filter((item) => item.title !== title);
		setCart(arr);
		handlePrice();
	};

	const handlePrice = () => {
		let ans = 0;
		cart.map((item) => (ans += item.amount * item.price));
		setPrice(ans);
	};

	const handleDiscount = () => {
		if (applied) {
			setApplied(false);
		} else {
			setApplied(true);
			let dis = +coupon.substring(coupon.length - 2);
			setPrice((pre) => Math.floor(pre - (dis * pre) / 100));
		}
	};
	useEffect(() => {
		if (!applied) handlePrice();
	});

	return (
		<article>
			{cart.map((item) => (
				<div className="cart_box" key={item.title}>
					<div className="cart_img">
						<img src={item.img} alt="" />
						<p>{item.title}</p>
					</div>
					<div>
						<button onClick={() => handleChange(item, -1)}>-</button>
						<button>{item.amount}</button>
						<button onClick={() => handleChange(item, 1)}>+</button>
					</div>
					<div>
						<span>{item.price}</span>
						<button onClick={() => handleRemove(item.title)}>Remove</button>
					</div>
				</div>
			))}
			<div className="total">
				<span>Total Price of your Cart</span>
				<span>Rs - {price}</span>
			</div>
			<button onClick={handleDiscount}>
				{applied ? "Remove coupon" : "Apply coupon"}
			</button>
			</article>
	);
};

export default Cart;