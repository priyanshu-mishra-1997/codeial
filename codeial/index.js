const express=require('express');
const app=express();
const port=8001;

// use express Router
app.use('/',require('./routes'));

app.set('view engine')
app.listen(port,function(err)
{
    if(err)
    {
        // console.log('Error :',err); we can write this but we are using a new method

        console.log(`Error in running the server: ${err}`);
    }
    console.log(`Server is running on port : ${port}`);
})