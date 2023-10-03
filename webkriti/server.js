require('dotenv').config();
const express=require('express');
const app= express();
app.use(express.json())
const stripe=require('stripe')(process.env.STRIPE_PRIVATE_KEY);
const store=new Map([[1,{price:1000,name:'learn'}],[2,{price:2000,name:'learncss'}]
])
app.listen(3000);