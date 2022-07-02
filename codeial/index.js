const express=require('express');
const cookieParser=require('cookie-parser');
const app=express();
const port=8001;
const expressLayouts=require('express-ejs-layouts');
const db=require('./config/mongoose');

app.use(express.urlencoded());
app.use(cookieParser());

app.use(express.static('./assets'));
app.use(expressLayouts);

//extract style and scripts from subpages and place in layouts at specific position ie. link at head and script at end of body in layout file
app.set('layout extractStyles',true);
app.set('layout extractScripts',true);

// use express Router
app.use('/',require('./routes'));

//set up the view engine
app.set('view engine','ejs');

app.set('views','./views'); 

app.listen(port,function(err)
{
    if(err)
    {
        // console.log('Error :',err); we can write this but we are using a new method

        console.log(`Error in running the server: ${err}`);
    }
    console.log(`Server is running on port : ${port}`);
})