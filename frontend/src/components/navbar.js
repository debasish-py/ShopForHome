import React, { useState } from "react";
import "../styles/navbar.css";

const Navbar = ({
	setShow,
	size,
	setShowWish,
	wishSize,
	setCurrentCategory,
	search,
	setSearch,
}) => {
	const [isVisible, setIsVisible] = useState(false);

	return (
		<nav>
			<div className="nav_box">
				<img className="ham"
					src="/menu.svg"
					onClick={() => setIsVisible((prev) => !prev)}
					alt=""
				/>
				<span
					className="my_shop"
					onClick={() => {
						setShow(true);
						setShowWish(false);
					}}
				>
					Shop For Home
				</span>
				<input className="searchme"
					type="text"
					placeholder="Search"
					value={search}
					onChange={(e) => setSearch(e.target.value)}
				/>
				<div
					className="cart"
					onClick={() => {
						setShow(false);
						setShowWish(false);
					}}
				>
					<span>
						<i class="fa fa-shopping-bag"></i>
					</span>
					<span>{size}</span>
				</div>
				<div
					className="cart"
					onClick={() => {
						setShow(false);
						setShowWish(true);
					}}
				>
					<span>
						<i class="fa fa-heart-o"></i>
					</span>
					<span>{wishSize}</span>
				</div>
			</div>
			<div className={isVisible ? "block ham-menu" : "none"}>
				<h3 className="cat">Categories</h3>
				<ul>
					<button onClick={() => setCurrentCategory(100)}>All</button>
					<br />
					<br />
					<button onClick={() => setCurrentCategory("Lamps")}>
						Lamps
					</button>
					<br />
					<br />
					<button onClick={() => setCurrentCategory("Decors")}>
						Decors
					</button>
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;
