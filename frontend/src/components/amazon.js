import React, { useState } from "react";
// import list from "../data";
import { useEffect } from "react";
import axios from "axios";
import Cards from "./card";
import "../styles/amazon.css";

const Amazon = ({ handleClick, handleWish, categoryId, sortType, search }) => {
	console.log("amazon ", search);

	const [list,setList]=useState([])
  
	//write down
	useEffect(()=>{
	  (async() => {
	  const productdata=await axios.get("http://localhost:8000/main/viewProduct")
	  setList(productdata.data)})
	  ()
	 }, []);


	return (
		<section>
			{list
				.filter((val) => {
					if (search === "") return val;
					else if (val.title.toLowerCase().includes(search.toLowerCase()))
						return val;
				})
				.sort((a, b) => (a[sortType] > b[sortType] ? 1 : -1))
				.map(
					(item) =>
						(categoryId === item.category || categoryId === 100) && (
							<Cards
								key={item.title}
								item={item}
								handleClick={handleClick}
								handleWish={handleWish}
							/>
						)
				)}
		</section>
	);
};

export default Amazon;
