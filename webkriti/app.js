const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect('mongodb+srv://dork_boy:the_weeknd<3@web.shju5d2.mongodb.net/newapp', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Connected to MongoDB');
}).catch(error => {
  console.error('Error:', error);
});

const userSchema = new mongoose.Schema({
  email: String,
  password: String
});

const User = mongoose.model('User', userSchema);

app.use(express.static('hc'));

app.get('/signup', (req, res) => {
  res.sendFile(__dirname + '/hc/signup.html');
});

app.post('/signup', (req, res) => {
  const { email, password } = req.body;

  const newUser = new User({
    email: email,
    password: password
  });

  newUser.save().then(savedPerson => {
    res.sendFile(__dirname + '/hc/home.html');
  }).catch(error => {
    console.error('Error:', error);
  });
});

app.get('/login', (req, res) => {
  res.sendFile(__dirname + '/hc/signin.html');
});

app.post('/login', async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  const user = await User.findOne({ email, password });

  if (user) {
    res.sendFile(__dirname + '/hc/home.html');
  } else {
    res.redirect('/login?error=' + encodeURIComponent('Invalid email or password. Please try again.'));
  }
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
 