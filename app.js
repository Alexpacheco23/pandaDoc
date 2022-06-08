const express = require('express');
const multer = require('multer');
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 4660383 (actualizar PandaDoc)
// const path = requiere('path');
const app = express();

const upload = multer({dest:'PandaDoc'});


app.use(express.static('public'));

<<<<<<< HEAD
=======
=======
var bodyParser = require('body-parser');
//const path = require('path');
const axioss = require('./public/js/MPanda');
const app = express();
app.set('port',9000);
app.use(bodyParser.json())
app.use(bodyParser.urlencoded())




//configurar el archivo para qeu suba con el nombre original
// const storage = multer.diskStorage({
//     destination:path.join(__dirname,'public/upload'),
//     filename:(req,file,cb)=>{
//         cb(null, file.originalname);
//     }
// })






// app.use(multer({
//     storage,
//     dest:path.join(__dirname,'public/upload')
// }).single('archivo'));

// Routes
app.use(express.static('public'));

// app.post('/uploadfile',(req,res)=>{
//     console.log(req.file);
//     res.send('enviando documento');
//     //subir archivo desde el post con fetch
// });

app.post('/axios',(req,res)=>{
     console.log(req.body);
//   

}) 




>>>>>>> 8a0aab3 (pandadoc Actualizado)
>>>>>>> 4660383 (actualizar PandaDoc)
app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/index.html');
    
});

<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 4660383 (actualizar PandaDoc)
// app.options('/',(req,res)=>{
//     res.send(console.log('enviando documento'));
// })
app.listen(9000);

//log del puerto
<<<<<<< HEAD
console.log('servidor escuchando por el puerto 9000');
=======
console.log('servidor escuchando por el puerto 9000');
=======
// Start Server
app.listen(app.get('port'),()=>{
    console.log(`server run in port ${app.get('port')}`);
});

>>>>>>> 8a0aab3 (pandadoc Actualizado)
>>>>>>> 4660383 (actualizar PandaDoc)
