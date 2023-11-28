const{registerSchema,reviewSchema,productSchema}=require("./Schema")
const validateProduct=(req,res,next)=>{
    let{name,image,price,desc}=req.body;
    const {error}=productSchema.validate({name,image,price,desc}); // it return error and value 
    if(error)
    {
        return res.render("/products/error");
    }
    next();
}

const validateReview=(req,res,next)=>{
    let{rating,comment}=req.body;
    const {error}=reviewSchema.validate({rating,comment});
    if(error)
    {
        return res.render("/products/error");
    }
    next();
}
const validateRegister=(req,res,next)=>{
    let{name,email,password}=req.body;
    const {error}=registerSchema.validate({name,email,password});
    if(error)
    {
        return res.render("/products/error");
    }
    next();
}
const isLoggedIn=(req,res,next)=>{
    if(!req.isAuthenticated()){
        return res.redirect('/login')
    }
    next();
}
module.exports={isLoggedIn,validateRegister,validateReview,validateProduct};