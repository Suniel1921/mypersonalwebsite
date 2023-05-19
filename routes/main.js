// const express = require ('express');
// const routes = express.Router();
// const Users = require ('../models/userData');

// routes.get("/",(req, res)=>{
//     res.render("index")
// })

// routes.get('/about',(req,res)=>{
//     res.render("about");
// })

// routes.get('/contact',(req,res)=>{
//     res.render("contact");
// })

// routes.get('/project',(req,res)=>{
//     res.render("project");
// })

// routes.get('/services',(req,res)=>{
//     res.render("services");
// })






// routes.post('/contact', async (req, res)=>{
//     try{
//         const userDatails = new Users(req.body);
//        await userDatails.save();
//         res.status(500).render("index")
//         // res.status(500).send("<h4>your form is successfully submitted !</h4>")
//     }
//     catch(error){
//         res.status(201).send(`your form is not submit 😂! Please fill the all Details `);

//     }
   

// })

// module.exports = routes;