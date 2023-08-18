const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const port = 3000;

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect('mongodb+srv://dork_boy:the_weeknd<3@web.shju5d2.mongodb.net/newapp', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
    console.log('connected:');
  })
  .catch(error => {
    console.error('Error:', error);
  });

  const userSchema = new mongoose.Schema({
    email: String,
    password: String
  });

  const User = mongoose.model('User', userSchema);
  
  app.use(express.static('hc'));

  app.get('/signup',(req,res)=>{
      res.sendFile(__dirname+"/hc/signin.html");
  })
  app.post('/signup',(req, res) => {
    const { email, password } = req.body;
  
    const newUser = new User({
      email: email,
      password: password
    });
    newUser.save()
  .then(savedPerson => {
    res.sendFile(__dirname+"/hc/home.html")
  })
  .catch(error => {
    console.error('Error:', error);
  });
    
    });

    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
      });