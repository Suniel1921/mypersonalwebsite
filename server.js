const express = require ('express');
const app = express();

const path = require('path');

const database = require('./database/conn');
const routes = require('./routes/main');
const hbs = require('hbs');
const Users = require ('./models/userData');


const PORT = process.env.PORT || 4000;
const hostname = '0.0.0.0';

app.use(express.urlencoded({extended: false})); // with the help this you can get your data

//setting path 
const publicPath = path.join(__dirname, 'public');
app.use(express.static(publicPath))



// app.use('', routes);



//Template Engine (hbs);
app.set('view engine', 'hbs');
app.set('views', 'views')
hbs.registerPartials("views/partials");



///////////////////////////////////////////////////////



app.get("/",(req, res)=>{
    res.render("index")
})

app.get('/about',(req,res)=>{
    res.render("about");
})

app.get('/contact',(req,res)=>{
    res.render("contact");
})

app.get('/project',(req,res)=>{
    res.render("project");
})

app.get('/services',(req,res)=>{
    res.render("services");
})






app.post('/contact', async (req, res)=>{
    try{
        const userDatails = new Users(req.body);
       await userDatails.save();
        res.status(500).render("index")
        // res.status(500).send("<h4>your form is successfully submitted !</h4>")
    }
    catch(error){
        res.status(201).send(`your form is not submit 😂! Please fill the all Details `);

    }
   

})
















app.listen(PORT, (req, res)=>{
    console.log(`Server is running on port at http:// ${hostname} :${PORT}`);
})