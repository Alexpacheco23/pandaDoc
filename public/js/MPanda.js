const axios = require('axios');
const FormData = require('form-data');
const fs = require('fs');
let filename = 'C:/Users/user/Desktop/proyecto/PandaDoc/public/upload/Carta-empleo-tag.pdf';

const fileCreate = fs.createReadStream(filename);



//const ApiKeys = '92c0321692580887a242f890ec995b015ed84346';
 let urls = "/C:/Users/user/Desktop/bitrix/Carta-empleoTag.pdf";

module.exports.Axios = function (id) {


    const formDataD = new FormData();
    formDataD.append('file', filename);
    const datas = {
        "name": "API nodejs",
        "recipients": [{
            "email": "alexanderfpm23@gmail.com",

            "first_name": "fidel",
            "last_name": "pacheco",
            "role": "user"
        }
        ],
        "parse_form_filds": false
    }
    formDataD.append('data',JSON.stringify(datas));
    console.log(formDataD, 'paso el archivooooooooo');

//     axios({
//         method:'POST',
//         url:'https://api.pandadoc.com/public/v1/documents',
//         headers:{"Authorization": `Api-key 92c0321692580887a242f890ec995b015ed84346`},
//         data:{body:formDataD}
//     }
//    )
//         .then(res => console.log(res.data))
//         .catch(error => console.log(error))


} 
