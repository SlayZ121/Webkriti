

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();


app.use(express.json());

app.use(cors());


mongoose.connect('mongodb+srv://dork_boy:the_weeknd<3@web.shju5d2.mongodb.net/products?retryWrites=true&w=majority', {
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
});
const Product = mongoose.model('Product', productSchema);


app.use(express.static('hc'));
app.get('/products', async (req, res) => {
  try {
      const category = req.query.category;  // Get the category from the query parameter
      const filter = category ? { category } : {};  // Create a filter based on the category (if provided)
      const products = await Product.find(filter);
      console.log('Products:', products); // Log the retrieved products
      res.json(products);
  } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
  }
});



app.get('/home', (req, res) => {
  res.sendFile(__dirname + '/hc/home.html');
});

app.get('/cart', (req, res) => {
  res.sendFile(__dirname + '/hc/cart.js');
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});