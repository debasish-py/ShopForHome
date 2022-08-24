import React, {useState, useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import productlist from '../productdata';
import axios from 'axios'
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function Crudproducts() {
    const [product, setProduct]=useState([])
    const navigate=useNavigate()
    
    useEffect(()=>{
        (async() => {
        const productdata=await axios.get("http://localhost:8000/main/viewProduct")
       
        setProduct(productdata.data)})
        ()
       }, []);

       async function deletfunc(ptitle){
        console.log(ptitle)
        const res=await axios.delete(`http://localhost:8000/main/deleteproduct/${ptitle}`)
       
        console.log(res.data.msg)
        navigate("/admin/crudproducts")
        // alert(res.data.msg)
    }

  return (
    <div className='container'>
        <div className='py-4'>
            <h1>CRUD ON Products</h1>
            <div className="buttondiv">
                <Link className="btn btn-primary" to="/admin">
                    Back to Dashboard
                </Link>
                <Link to='/admin/addproducts'>
                    <button className="btn btn-primary  btn-block"> +ADD Products  </button>
                </Link>

                <Link to='/admin/crudusers'>
                    <button className="btn btn-primary  btn-block">  CRUD Users  </button>
                </Link>
                <Link to='/admin/bulkupload'>
                    <button className="btn btn-outline-primary">  Add Bulk Pdts  </button>
                </Link>
            </div>
            
        <Table className='table border shadow'>
            <thead>
                <tr>
                <th>Serial</th>
                <th>User Name</th>
                <th>Brand</th>
                <th>Category</th>
                <th>Price</th>
                <th>Instock</th>
                <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    product.map((product, index)=>(
                        <tr>
                            <th scope="row">{index + 1}</th>
                            <td>{product.title}</td>
                            <td>{product.brand}</td>
                            <td>{product.category}</td>
                            <td>{product.price}</td>
                            <td>{product.instock}</td>
                            <td>
                            <div className="buttondiv">
                                {/* <Link to='/admin/viewproduct'>
                                    <button className="btn btn-primary  btn-block">  View Products  </button>
                                </Link> */}
                                <Link to='/admin/editproduct'>
                                    <button className="btn btn-outline-primary">  Edit Products  </button>
                                </Link>
                                <Link to='/admin/crudproducts'>
                                    <button onClick={()=>deletfunc(product.title)} className="btn btn-danger  btn-block">  Delete  </button>
                                </Link>
                            </div>
                            </td>
                        </tr>
                    ))
                }
            </tbody>
        </Table>
        </div>
    </div>
  )
}

export default Crudproducts