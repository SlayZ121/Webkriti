

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();


app.use(express.json());

app.use(cors());
require('dotenv').config();
const mongoDBUrl =process.env.MONGODB_URL_PRODUCTS
mongoose.connect(mongoDBUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Connected to MongoDB');
}).catch(error => {
  console.error('Error:', error);
});
const db = mongoose.connection;


const productSchema = new mongoose.Schema({
  name: String,
  description: String,
  url: String,
  price:String,
  category:String,
  detail:String,
});
const Product = mongoose.model('Product', productSchema);


app.use(express.static('hc'));
app.get('/products', async (req, res) => {
  try {
      const category = req.query.category; 
      const filter = category ? { category } : {};  
      const products = await Product.find(filter);
      console.log('Products:', products);
      res.json(products);
  } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
  } 
});



app.get('/home', (req, res) => {
  res.sendFile(__dirname + '/hc/home.html');
});

app.get('/cartt', (req, res) => {
  res.sendFile(__dirname + '/hc/cart.html');
});

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
