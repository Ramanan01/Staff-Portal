const express = require('express');
const app=express();
app.use(express.json())
const port=process.env.PORT || 3000;
app.listen(port,()=>{console.log(`Listening on port ${port}`)});

app.post('/',(req,res)=>{
    console.log(req.body)
    return res.json({msg:"Recieved"})
})
