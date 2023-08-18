const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

// MongoDB connection
mongoose.connect('mongodb+srv://dork_boy:the_weeknd<3@web.shju5d2.mongodb.net/newapp', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
const db = mongoose.connection;
db.once('open', () => {
  console.log('Connected to MongoDB');
});
app.use(express.static('hc'));

// Define a User schema
const userSchema = new mongoose.Schema({
  email: String,
  password: String
});
const User = mongoose.model('User', userSchema);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('hc'));
app.get('/login', (req, res) => {
  res.sendFile(__dirname + '/hc/signin.html');
});

app.post('/login', async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  // Check if user exists in the database
  const user = await User.findOne({ email, password });
  
  if (user) {
    res.sendFile(__dirname + '/hc/home.html');
  } else {
    res.redirect('/login?error=' + encodeURIComponent('Invalid email or password. Please try again.'));

  }
});


app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
