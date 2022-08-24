import React from 'react';
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
// import list from '../data';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';


function RenderingArrayOfObjects(){

	const [product, setProduct]=useState([])

    useEffect(()=>{
        (async() => {
        const productdata=await axios.get("http://localhost:8000/main/viewProduct")
       
        setProduct(productdata.data)})
        ()
       }, []);




const tableRows=product.map(
	(element)=>{
		return(
			
			<tr>
			<td>{element.title}</td>
			<td>{element.price}</td>
			<td>{element.category}</td>
      		<td>{element.brand}</td>
      		<td>{element.instock}</td>
      
			</tr>
			
		)
	}
)
return(
	<div>
		<Table hover>
			<thead>
			<tr>	
				<th> title</th>
				<th>price</th>
				<th>category</th>
        <th>brand</th>
        <th>instock</th>
			</tr>
			</thead>
			<tbody>
			{tableRows}
			</tbody>
		</Table>	
			
	</div>
)
}
function Tableana() {
return (
	<div className="App">
		<Link className="btn btn-primary" to="/admin">
        back to Dashboard
      </Link>
	<div>
		<RenderingArrayOfObjects />
	</div>
	</div>
);
}

export default Tableana;

