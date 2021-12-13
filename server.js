const express = require('express');
const dotenv = require('dotenv');
const routes = require('./routes/index');
const connectDB = require('./config/db')
dotenv.config('.env');
// const register = require("./routes/index")
const app = express()


app.use(express.json());

app.use(express.static('public'))

app.use(express.urlencoded({extended: true}));

app.set('view engine', 'ejs')

connectDB()
app.use('/api/students', routes);
// app.use("/api/registeration", register);

app.get("/", (req, res) => {
    res.render("index");
})

app.get('/home', (req, res) => {
    res.render('home');
 })
 
 app.get('/registration', (req, res) => {
    res.render('registration');
 })
 
 app.get('/login', (req, res) => {
    res.render('login');
 })
 
 app.get('/secretPage', (req, res) => {
   res.render('secretPage');
 })

// app.post('/api/students', (req, res) => {
//     return res.redirect('');
// })


const PORT = process.env.PORT || 8080;
app.listen(PORT, () =>{
    console.log(`server is running on port ${PORT}.`)
});