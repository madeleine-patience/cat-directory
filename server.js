// Declare Variables

const { response } = require('express');
const express= require('express');
const res = require('express/lib/response');
const app= express()
const PORT = 8000;
const mongoose= require('mongoose')
const UserComments = require("./models/comments");
const path = require('path');

require('dotenv').config()


//add model variable


// set middleware

app.set("view engine", "ejs")
app.use(express.static('public'))
app.use(express.urlencoded({extended:true}))
app.use(express.static(path.join(__dirname, 'public')));




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
        name: request.body.title,     
        comment: request.body.content,
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

// EDIT or UPDATE Method

app



    .route('/edit/:id')
    .get((request,response) => {
        const id= request.params.id;
        UserComments.find({}, (err,Comments)=>{
        response.render('edit.ejs',{ UserComments:Comments, idTask:id });
        });
    })
    .post((request,response)=>{
        const id= request.params.id
        UserComments.findByIdAndUpdate(
            id,
                {   
                name: request.body.title,     
                comment: request.body.content,
                },
            err=> {
            if(err) return request.status(500).send(err)
            response.redirect('/')
            });
    })

// DELETE

app
    .route("/remove/:id")
    .get((req, res) => {
        const id = req.params.id;
        UserComments.findByIdAndRemove(id, err => {
            if (err) return res.send(500, err);
            res.redirect("/");
        });
    });




app.listen(PORT,() => console.log(`Server is Running on port ${PORT}`))