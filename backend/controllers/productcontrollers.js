const Product = require("../models/productmodel")
const expressAsyncHandler = require('express-async-handler')



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