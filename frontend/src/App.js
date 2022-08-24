
import React, { useState } from "react";
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';

import Amazon from "./components/amazon";
import Navbar from "./components/navbar";
import Cart from "./components/cart";
import Wish from "./components/wish";
import "./app.css";
import Signup from "./authentication/Signup"
import Login from "./authentication/login";


import Addusers from "./Admin/Addusers";
import Crudusers from "./Admin/Crudusers";
import Crudproducts from "./Admin/Crudproduct"
import Pagenotfound from "./components/Pagenotfound";
import Addproducts from "./Admin/Addproducts";
import DiscountFunc from "./components/discount";
import Editusers from "./Admin/Editusers";
import Viewproducts from "./Admin/Viewproducts";
import Editproducts from "./Admin/Editproducts";
import Upload from "./Admin/uploadCsv";
import Admin from "./Admin/Admin";
import Tableana from "./Admin/table";
import Emailjs from "./Admin/Emailjs";
import Checkstock from "./Admin/checkstock";

const App = () => {
  const [show, setShow] = useState(true);
  const [showWish, setShowWish] = useState(false);
  const [wish, setWish] = useState([]);
  const [cart, setCart] = useState([]);
  const [currentCategory, setCurrentCategory] = useState(100);
  const [sortType, setSortType] = useState("name");
  const [search, setSearch] = useState("");

  const handleClick = (item) => {
    if (cart.indexOf(item) !== -1) return;
    setCart([...cart, item]);
  };

  const handleWish = (item) => {
    if (cart.indexOf(item) !== -1) return;
    setWish([...wish, item]);
  };

  const handleChange = (item, d) => {
    const ind = cart.indexOf(item);
    const arr = cart;
    arr[ind].amount += d;

    if (arr[ind].amount === 0) arr[ind].amount = 1;
    setCart([...arr]);
  };

  const router = () => {
    if (show) {
      return (
        <Amazon
          handleClick={handleClick}
          handleWish={handleWish}
          categoryId={currentCategory}
          sortType={sortType}
          search={search}
        />
      );
    } else if (showWish) {
      return <Wish wish={wish} setWish={setWish} />;
    } else {
      return <Cart cart={cart} setCart={setCart} handleChange={handleChange} />;
    }
  };

  return (
    <BrowserRouter>
    <header>
    <Navbar
      setShow={setShow}
      size={cart.length}
      setShowWish={setShowWish}
      wishSize={wish.length}
      setCurrentCategory={setCurrentCategory}
      setSearch={setSearch}
      search={search}
    />
    </header>
    <div class="dropdown ">
      <b>sort by : </b>
      
      <label>
        <select onChange={(e) => setSortType(e.target.value)}>
        <option value="">select</option>
          <option value="title">sort by title</option>
          <option value="price">sort by price</option>
        </select>
      </label>
    </div>
    

        <Routes>
          
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/" element={<Login />}></Route>

          <Route path="/home" element={router()}></Route>
                    {/* admin part */}
          <Route path="/admin" element={<Admin />}> </Route>
          <Route path="/admin/table" element={<Tableana/>}></Route>
          <Route path="/admin/emailjs" element={<Emailjs />}> </Route> 
                    {/* crud users */}
          <Route path="/admin/crudusers" element={<Crudusers />}> </Route>
          <Route path="/admin/editusers" element={<Editusers />}> </Route>
          <Route path="/admin/addusers" element={<Addusers />}> </Route>
          <Route path="/admin/discount_page/:uemail" element={<DiscountFunc />}> </Route>
                    {/* crud products */}
                    
          <Route path="/admin/crudproducts" element={<Crudproducts />}></Route>
          <Route path="/admin/viewproduct" element={<Viewproducts/>}></Route>
          <Route path="/admin/editproduct" element={<Editproducts />}> </Route>
          <Route path="/admin/addproducts" element={<Addproducts />}> </Route>
          <Route path="/admin/checkstock" element={<Checkstock />}> </Route>
          <Route path="/admin/bulkupload" element={<Upload />}> </Route>
          

              
                    {/* Pagenotfound       */}
          <Route path="*" element={<Pagenotfound />}></Route>
        </Routes>

  </BrowserRouter>
  );
};

export default App;