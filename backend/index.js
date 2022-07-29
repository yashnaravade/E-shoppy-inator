const express = require('express');
const mongoose = require('mongoose');
const Auth = require("./model/Auth/Auth");
const Mobile = require("./model/Mobile")
const Book = require("./model/Book")
const Sport = require("./model/Sport")
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

app.get('/', (req, res) => {
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


app.post('/mobile', async (req, res) => {
  const mobile = new Mobile({
      // id: req.body.id,
      mobile_Name: req.body.mobile_Name,
      mobile_description: req.body.mobile_description,
      mobile_url: req.body.mobile_url,
      mobile_prize: req.body.mobile_prize,
      mobile_quantity: req.body.mobile_quantity
  });
  await mobile.save();
  res.send({
      message:"mobile Info  Added Successfully"
  })
});

app.get('/mobile', async (req, res) => {
  const mobile = await Mobile.find();
  res.send(mobile);
});

app.post('/book', async (req, res) => {
  const book = new Book({
      id: req.body.id,
      book_Name: req.body.book_Name,
      book_description: req.body.book_description,
      book_url: req.body.book_url,
      book_prize: req.body.book_prize,
      book_quantity: req.body.book_quantity
  });
  await book.save();
  res.send({
      message:"Book Info  Added Successfully"
  })
});

app.get('/book', async (req, res) => {
  const book = await Book.find();
  res.send(book);
});


app.post('/sport', async (req, res) => {
  const sport = new Sport({
      id: req.body.id,
      sport_Name: req.body.sport_Name,
      sport_description: req.body.sport_description,
      sport_url: req.body.sport_url,
      sport_prize: req.body.sport_prize,
      sport_quantity: req.body.sport_quantity
  });
  await sport.save();
  res.send({
      message:"Sport Info  Added Successfully"
  })
});

app.get('/sport', async (req, res) => {
  const sport = await Sport.find();
  res.send(sport);
});


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




