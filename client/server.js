const express=require('express');
const app=express();
const mongoose=require('mongoose');
const BrandName=require('./model');
app.use(express.json())
mongoose.connect('mongodb+srv://sanjay:sanjay@cluster0.fjcbkym.mongodb.net/?retryWrites=true&w=majority').then(
    ()=>
    {
        console.log("Db connectwed");
    }
).catch(err=> console.log(err));

//post method
app.post('/addbrands',async(req,res)=>
{
    const {brandname}=req.body;
   try{
      const newdata= new BrandName({brandname});
       await newdata.save();
      return res.json(await BrandName.find())
   }
   catch(err)
   {
      console.log(err.message);
   }
})
 
// get method
app.get('/getallbrands',async(req,res)=>
{
    try{
    const allData = await BrandName.find();
    return res.json(allData);
    }
    catch(err)
    {
        console.log(err.message);
    }
})

// get by id
app.get('/getallbrands/:id',async(req,res)=>
{
    try{
    const Data = await BrandName.findById(req.params.id);
    return res.json(Data);
    }
    catch(err)
    {
        console.log(err.message);
    }
})

//delete by id
app.delete('/deletebrands/:id',async(req,res)=>
{
    try{
    const RemData = await BrandName.findByIdAndDelete(req.params.id);
    return res.json(RemData);
    }
    catch(err)
    {
        console.log(err.message);
    }
})

// home
app.get('/',(req,res)=>
{
    res.send('<h1>Sanjayaaa</h1>');
});
app.listen(3000,()=>
{
    console.log("Server is running");
});