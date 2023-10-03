const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());
require('dotenv').config();
const mongoDBUrl = process.env.MONGODB_URL_PRODUCTS;

mongoose.connect(mongoDBUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Connected to MongoDB');
}).catch(error => {
  console.error('Error:', error);
});
const db = mongoose.connection;

// Define the Product model
const productSchema = new mongoose.Schema({
  name: String,
  description: String,
  url: String,
  price: String,
  category: String,
  detail: String,
});
const Product = mongoose.model('Product', productSchema);

app.listen(5000);
app.use(express.static('hc'));

app.post('/create-checkout-session', async (req, res) => {

    try {
      const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        mode: 'payment',
        line_items: await Promise.all(req.body.items.map(async (item) => {
          // Fetch product data from the database based on the product name
          const storeItem = await Product.findOne({ name: item.id });
  const price= (parseFloat(storeItem.price.replace('$', '')))*100;
          return {
            price_data: {
              currency: 'usd',
              product_data: {
                name: storeItem.name,
              },
              unit_amount: price,
            },
            quantity: item.quantity,
          };
        })),
        success_url: `localhost:3000/success.html`,
        cancel_url: `localhost:3000/cancel.html`,
      });
  
      res.json({ url: session.url });
    } catch (e) {
      res.status(500).json({ error: e.message });
    }
  });
  