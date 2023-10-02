const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;


app.use(cors());

mongoose.connect('mongodb+srv://dork_boy:the_weeknd<3@web.shju5d2.mongodb.net/carttt?retryWrites=true&w=majority', {
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
});

const Cart = mongoose.model('Cart', cartItemSchema);

app.use(bodyParser.json());
app.use(express.static('hc'));

app.post('/add-to-cart', async (req, res) => {
    try {
      const { name, price, quantity } = req.body;
      const cartItem = await Cart.findOne({ name });
  
      if (cartItem) {
        cartItem.quantity += quantity;
        await cartItem.save();
      } else {
        const newCartItem = new Cart({ name, price, quantity });
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

