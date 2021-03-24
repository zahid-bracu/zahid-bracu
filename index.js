const express=require('express');
const app=express();
const path=require('path');
const PORT = process.env.PORT || 5000;


app.use(express.static(__dirname))

app.listen(PORT,()=>{
    console.log("Testing 5000");
})





// design codes
 