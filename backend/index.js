const express = require('express');
const mongoose = require('mongoose');
const Auth = require("./model/Auth/Auth");
const cors = require('cors');

const PORT = 5000;

const app = express();

app.use(express.json());

app.use(cors());

mongoose.connect('mongodb+srv://vaibhavi:vaibhavi@learnmongodb.eluyb.mongodb.net/?retryWrites=true&w=majority', ()=>{
    console.log('connected to mongodb');
});

app.get('/health', (req, res) => {
    res.json({
      success: true,
    });
})

app.post('/register',async(req,res)=>{
  const auth = new Auth({
    name :req.body.name,
    email: req.body.email,
    password: req.body.password,
    mobile:req.body.mobile
  })

  await auth.save();
  res.send({
    message:"sign-up successfully"
  })
})

app.post('/login',async(req,res)=>{
  const auth = new Auth({
    email : req.body.email,
    password : req.body.password
  })
  await auth.save();
  res.send({
    message:"Login successfully"
  })
})

app.get('/mobile', (req, res) => {
  res.json({
    success: true,
  });
})

app.get('/', (req, res) => {
  res.json({
    success: true,
  });
})


// app.post('/signup',async(req,res) => {

//     const {name, email, password,mobile} = req.body
  
//     const newUser = new User({
//         name : name,
//         email: email,
//         password: password,
//         mobile:mobile
//     })
  
//     const savedUser= await  newUser.save();
  
//     res.json({savedUser});
//   })



app.listen(PORT , () => {
    console.log(`Server is listening on port ${PORT}`);
    })




