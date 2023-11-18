const express=require("express");
const router=express.Router();
const Product =require("../models/Product")

// To show products 
router.get("/products",async(req,res)=>
{
    let products=await Product.find({});
    res.render('products/index',{products})
});

// To upload products 
router.get("/product/new",(req,res)=>{
    res.render('products/new');
});

// To Add the  products 
router.post("/products",async(req,res)=>{
    let {name,image,price,desc}=req.body;
    await Product.create({name,image,price,desc});
    res.redirect("/products");
});

// To show particular product
router.get("/products/:id",async(req,res)=>{
    let {id}=req.params;
    let foundProduct=await Product.findById(id).populate('reviews');
    res.render('products/show',{foundProduct});

});

// To Edit particular Products  use form 
router.get('/products/:id/edit',async(req,res)=>{
    let {id}=req.params;
    let foundProduct=await Product.findById(id);
    res.render('products/edit',{foundProduct});
});

// To actually edit the data in database
router.patch('/products/:id' , async(req,res)=>{
    let {id} = req.params;
    let {name,image,price,desc} = req.body;
    await Product.findByIdAndUpdate(id , {name,image,price,desc});
    res.redirect(`/products/${id}`)
})

// To delete a Product 
router.delete('/products/:id',async(req,res)=>{
    let {id}=req.params;
    await Product.findByIdAndDelete(id);
    res.redirect('/products');
});

module.exports=router; 