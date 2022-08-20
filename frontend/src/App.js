
import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import Amazon from "./components/amazon";
// import Navbar from "./components/navbar";
// import Cart from "./components/cart";
import HomeFunc from "./components/uHome"
import Upload from "./components/uploadCsv";


const App=()=>{
    return(
        <main>
        <BrowserRouter>
        <Routes>
            {/* <Route path="/signin" element={<SignInFunc></SignInFunc>}></Route>
            <Route path="/signup" element={<SignUpFunc></SignUpFunc>}></Route> */}



            <Route path='/' element={<HomeFunc></HomeFunc>}></Route>

            <Route path='/upload' element={<Upload></Upload>}></Route>




            {/* <Route path='/navbar' element={<HomeFunc></HomeFunc>}></Route>
            <Route path='/cart' element={<HomeFunc></HomeFunc>}></Route> */}
            
            {/* <Route path='/About' element={<AboutFunc></AboutFunc>}></Route>
            <Route path='/User' element={<UserFunc></UserFunc>}></Route>
            <Route path='/contact' element={<ContactFunc></ContactFunc>}></Route> */}

        </Routes>
        </BrowserRouter>
        </main>
    )
}
export default App
