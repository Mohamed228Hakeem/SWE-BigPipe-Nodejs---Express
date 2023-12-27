const express = require('express');
const app = express();

app.use(express.static('public'));
app.get('/',(req,res)=>{
    res.sendFile(__dirname+'./public/index.html');
});

app.get('/chunk1', (req, res) => {
    setTimeout(() => {
      res.sendFile(__dirname + '/public/chunk1.html');
    }, 500);
  });

  app.get('/chunk2', (req, res) => {
    setTimeout(() => {
      res.sendFile(__dirname+'/public/chunk2.html')
    }, 550);
  });

  app.get('/chunk3',(req,res)=>{
    setTimeout(()=>{
      res.sendFile(__dirname+"/public/chunk3.html")
    },600);
  });

  const PORT = process.env.PORT || 3000;
  app.listen(PORT,()=>{
    console.log("This Server is Working ! At port $PORT" );
  });