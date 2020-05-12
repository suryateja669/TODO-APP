const express = require('express');
const mongoose=require('./config/mongoose')
const app = express();
const port = process.env.PORT||8000;

// use express routers
app.use('/', require('./routes'));

// app.get('*',(req,res)=>{
//     res.send("<h2>Please enter a valid URL!</h2>")
// })
app.use(express.static('assets'));
// set up the view engine
app.set('view engine', 'ejs');
app.set('views', './views');

app.use(express.urlencoded());

//for handling all other URL`s by rendering a 404 page!
app.get('*',(req,res)=>{
    res.render("404",{
        message:"Error finding the page!",
        title:"TODO APP"
    })
})

app.listen(port, function(err){
    if (err){
        console.log(`Error in running the server: ${err}`);
    }

    console.log(`Server is running on port: ${port}`);
});
