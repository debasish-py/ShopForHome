const Product = require("../models/productmodel")
const User = require('../models/usermodel.js')
const expressAsyncHandler = require('express-async-handler')

//Get all products that is viewed initially
exports.viewProduct= expressAsyncHandler(async (req, res) => {
    const pdetail=await Product.find()
    console.log(pdetail)
    res.send(pdetail)
  })

  exports.bulkUpload= expressAsyncHandler(async (req, res) => {
    res.send("data recieved")
    let a=req.body.data
    let x=[]
  for(let i=1;i<a.length-1;i++){
    let y={}
    for (let j=0;j<a[0].length;j++){
        y[a[0][j]]=a[i][j] 
    }
     x.push(y)
  }
  
  console.log(x)
  try {
    Pmodel.insertMany(x)
  } catch (e) {
    print (e);
  }
  })
//Get specific Product with name / title
exports.getproduct = expressAsyncHandler(async (req, res) => {
    const prod = await Product.find({title:req.params.title});
    
    if (prod) {
      res.send(prod);
    } else {
      res.status(404).send({ message: 'Product Not Found' });
    }
  })


//Create Product
exports.createproduct = expressAsyncHandler(async (req, res) => {
    const data = req.body
    const newProduct = new Product({
      title: data.title,
      img: data.img,
      brand: data.brand,
      category: data.category,
      inStock: data.inStock,
      price: data.price
    });
    const product = await newProduct.save();
    res.send({ message: 'Product Created', product });
  })


//Update Product with name
exports.updateproduct = expressAsyncHandler(async (req, res) => {
    const prod = await Product.find({title:req.params.title});
    
    if (prod) {
      prod.title = req.body.title || prod.title;
      prod.img = req.body.img || prod.img;
      prod.brand = req.body.brand || prod.brand;
      prod.category = req.body.category || prod.category;
      prod.inStock = req.body.inStock || prod.inStock;
      prod.price = req.body.price || prod.price;
      const updatedProduct = await prod.save();
      res.send({ message: 'Product Updated', prod: updatedProduct });
    } else {
      res.status(404).send({ message: 'Product Not Found' });
    }
  })

//Delete product with name / title
exports.deleteproduct = expressAsyncHandler(async (req, res) => {
    const product = await Product.find({title:req.params.title});
    if (product) {
      await product.remove();
      res.send({ message: 'Product Deleted' });
    } else {
      res.status(404).send({ message: 'Product Not Found' });
    }
  })