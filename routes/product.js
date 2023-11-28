const express=require("express");
const router=express.Router();
const Product =require("../models/Product");
const { isProductAuthor,isLoggedIn, isSeller } = require("../middleware");
// const validateProduct=require("../middleware");



// To show products 
router.get("/products",isLoggedIn,async(req,res)=>
{
    try{
    let products=await Product.find({});
    res.render('products/index',{products})
    }
    catch(err)
    {
        console.log(err);
        res.status(500).render('products/error', { error: err });
    }
});

// To upload products 
router.get("/product/new",isLoggedIn,(req,res)=>{
    try{
    res.render('products/new');
    }
    catch(err)
    {
        console.log(err);
        res.status(500).render('products/error', { error: err });
    }
});

// To Add the  products 
router.post("/products",isLoggedIn,isSeller,async(req,res)=>{
    try{
    let {name,type,image,price,desc}=req.body;
    await Product.create({name,type,image,price,desc,author:req.user._id});
    res.redirect("/products");
    }
    catch(e)
    {
        // console.log(err);
        res.send(e)
    }
});

// To show particular product
router.get("/products/:id",isLoggedIn,async(req,res)=>{
    try{
    let {id}=req.params;
    let foundProduct=await Product.findById(id).populate('reviews');
    // console.log(req.flash('info', 'hello!'))
    res.render('products/show',{foundProduct});
    }
    catch(err)
    {
        console.log(err);
        res.status(500).render('products/error', { error: err });;
    }
});

// To Edit particular Products  use form 
router.get('/products/:id/edit',isLoggedIn,async(req,res)=>{
    try{
    let {id}=req.params;
    let foundProduct=await Product.findById(id);
    res.render('products/edit',{foundProduct});
    }
    catch(err)
    {
        console.log(err);
        res.status(500).render('products/error', { error: err });;
    }
});

// To actually edit the data in database
router.patch('/products/:id',isLoggedIn, async(req,res)=>{
    try{
    let {id} = req.params;
    let {name,type,image,price,desc} = req.body;
    await Product.findByIdAndUpdate(id , {name,type,image,price,desc});
   res.redirect(`/products/${id}`)
    }
    catch(err)
    {
        console.log(err);
        res.status(500).render('error', { error: err });;
    }
})

// To delete a Product 
router.delete('/products/:id',isLoggedIn,isProductAuthor,async(req,res)=>{
    try{
    let {id}=req.params;
    // const product =await Product.findById(id);
    // for(let id of product.reviews)
    // {
    //    await Review.findByIdAndDelete(id);
    // }
    await Product.findByIdAndDelete(id);
    res.redirect('/products');
    }
    catch(err)
    {
        console.log(err);
        res.status(500).render('error', { error: err });
    }
});

module.exports=router; 