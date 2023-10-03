const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;


app.use(cors());
require('dotenv').config();
const mongoDBUrl =process.env.MONGODB_URL_CART

mongoose.connect(mongoDBUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Connected to MongoDB');
}).catch(error => {
  console.error('Error connecting to MongoDB:', error); 
});

const db = mongoose.connection;


const cartItemSchema = new mongoose.Schema({
  name: String,
  price: String,
  quantity: Number,
  url:String,
});

const Cart = mongoose.model('Cart', cartItemSchema);

app.use(bodyParser.json());
app.use(express.static('hc'));

app.post('/add-to-cart', async (req, res) => {
    try {
      const { name, price, quantity ,url} = req.body;
      const cartItem = await Cart.findOne({ name });
  
      if (cartItem) {
        cartItem.quantity += quantity;
        await cartItem.save();
      } else {
        const newCartItem = new Cart({ name, price, quantity ,url});
        await newCartItem.save();
      }
  
      res.send('Product added to cart');
    } catch (error) {
      console.error('Error in /add-to-cart:', error); 
      res.status(500).send('Internal Server Error');
    }
  });

app.get('/cart', async (req, res) => {
  try {
    const cartItems = await Cart.find();
    res.json(cartItems);
  } catch (error) {
    console.error('Error in /cart:', error); 
    res.status(500).send('Internal Server Error');
  }
});


app.use((err, req, res, next) => {
  console.error('Global Error Handler:', err); 
  res.status(500).send('Internal Server Error');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

app.get('/cartt', (req, res) => {
  res.sendFile(__dirname + '/hc/cart.html');
});

app.post('/remove-from-cart', async (req, res) => {
  try {
    const { name } = req.body;

    // Find the cart item by name
    const cartItem = await Cart.findOne({ name });

    if (!cartItem) {
      res.status(404).send('Product not found in cart');
      return;
    }

    if (cartItem.quantity > 1) {
      // If quantity > 1, decrement the quantity
      cartItem.quantity -= 1;
      await cartItem.save();
    } else {
      // If quantity is 1, remove the item from the cart
      await Cart.deleteOne({ name: cartItem.name }); // Remove from the database
    }

    res.send('Product removed from cart');
  } catch (error) {
    console.error('Error in /remove-from-cart:', error);
    res.status(500).send('Internal Server Error');
  }
});
 