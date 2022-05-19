const express = require('express');
const multer = require('multer');
// const path = requiere('path');
const app = express();

const upload = multer({dest:'PandaDoc'});


app.use(express.static('public'));

app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/index.html');
    
});

// app.options('/',(req,res)=>{
//     res.send(console.log('enviando documento'));
// })
app.listen(9000);

//log del puerto
console.log('servidor escuchando por el puerto 9000');