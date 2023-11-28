const express = require('express');
const app = express();
const DbConnection=require("./ProductDB")
const PORT = 8080;
const path=require('path');
const productRoutes=require("./routes/product")
const ejsMate=require('ejs-mate')
const methodOverride = require("method-override");
const reviewRoutes=require("./routes/review");
const cookiesRoutes=require("./routes/cookies");
const flash=require("connect-flash"); 
const session=require("express-session")
const configSession=session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  // cookie: { secure: true }
});
// const cors=require("cors");

// // app.use(cors());
const authRoutes= require('./routes/auth')
const passport=require('passport')
const LocalStrategy=require('passport-local')
const user=require("./models/Register")



app.use(configSession);
app.use(passport.initialize());
app.use(passport.session());
passport.serializeUser(user.serializeUser());
passport.deserializeUser(user.deserializeUser());
app.use((req,res,next)=>{
  res.locals.currentUser=req.user;
  next();
})// after authentication means login get req.user 
passport.use(new LocalStrategy(user.authenticate()));

app.use(express.urlencoded({extended:true}))
app.engine('ejs',ejsMate)
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));
app.use(express.static(path.join(__dirname , 'public')));

app.use(express.json());

app.use(methodOverride('_method'));

app.use(productRoutes);
app.use(reviewRoutes);
app.use(cookiesRoutes);
app.use(authRoutes);

DbConnection;
app.get("/connect",(req,res)=>{
  
  res.send("heelo");
})
app.use(flash());

 app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
