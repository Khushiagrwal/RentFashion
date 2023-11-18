const express = require('express');
const app = express();
const DbConnection=require("./ProductDB")
const PORT = 8080;
const path=require('path');
const productRoutes=require("./routes/product")
const ejsMate=require('ejs-mate')
const methodOverride = require("method-override");
const reviewRoutes=require("./routes/review");

app.use(express.urlencoded({extended:true}))
app.engine('ejs',ejsMate)
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));
app.use(express.static(path.join(__dirname , 'public')));

app.use(express.json());
app.get('/', (req, res) => {
  res.send('Hello World!');
});
app.use(methodOverride('_method'));

app.use(productRoutes);
app.use(reviewRoutes);
DbConnection;

 app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});