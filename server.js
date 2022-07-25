// Declare Variables

const { response } = require('express');
const express= require('express')
const app= express()
const PORT = 8000;
const mongoose= require('mongoose')
const UserComments = require("./models/comments");

require('dotenv').config()


//add model variable


// set middleware

app.set("view engine", "ejs")
app.use(express.static('public'))
app.use(express.urlencoded({extended:true}))



mongoose.connect(process.env.DB_CONNECTION,
    {useNewUrlParser:true},
    ()=> {console.log('Connected to Mongo!!!!!')})



app.get('/', async(request,response) => {
    try{
        UserComments.find({}, (err,Comments)=>{
        response.render('index.ejs',{UserComments :Comments}
        )})
    


    } catch (err){
        if (err) return response.status(500).send(err)


    }



})


//POST

app.post('/',async (request,response)=> {
    
    const newComment= new UserComments(
    {
        name: request.body.name,     
        comment: request.body.comment,
    }
    );

    try{
        await newComment.save()
        console.log(newComment)
        response.redirect('/');
        }catch (err) {
        if (err) return response.status(500).send(err)
        response.redirect('/')
        }





})







app.listen(PORT,() => console.log(`Server is Running on port ${PORT}`))