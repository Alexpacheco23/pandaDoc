import { PandaDocument } from './CPanda.js';
//solicitar y pintar una lista de los documento de PandaDoc
const Panda = new PandaDocument('92c0321692580887a242f890ec995b015ed84346');
// visual para lista de  documento
(async () => {
    const list = await Panda.listDocument();
    list.results.forEach((element, value) => {
        const trlist = document.createElement("tr");
        trlist.innerHTML = `<td>${value}</td><td>${element.name}</td><td>${estatus(element.status)}</td><td><input type="radio" class="radioValue" name="id"></td><td><button type="button" class="delete btn btn-danger">delete</button></td>`;
        document.querySelector('#tbody__document').appendChild(trlist);
        const radioValue = document.getElementsByClassName('radioValue');
        radioValue[value].onclick = function () { documentValue(element.id) };
        const deleteValue = document.getElementsByClassName('delete');
        deleteValue[value].onclick = function () { getDelete(element.id) };

    });

})();



(async()=>{

    const sendList = await Panda.listDocument();
    sendList.results.forEach((elements,key)=>{

        
        const trsend = document.createElement("tr");
        trsend.innerHTML = `<td>${key}</td><td>${elements.name}</td><td>${elements.status}</td><td>${elements.id}</td>`
        document.querySelector('#tbody__send--document').appendChild(trsend);
       
      
        
        

    })

})();

// obtener el valor o ID del documento
function documentValue(valueRadio) {
    document.querySelector('.sedingDocument').onclick = function () { sendDocument(valueRadio) };
}
function estatus(status) {
    if (status == 'document.sent') {
        return 'enviado';
    } else if (status == 'document.draft') {
        return 'borrador';
    } else if (status == 'document.viewed') {
        return 'visto';
    } else if (status == 'document.completed') {
        return 'completo';
    } else if (status == 'document.waiting_approval') {
        return 'por aprobar';
    } else if (status == 'document.rejected') {
        return 'rechazado';
    } else if (status == 'document.approved') {
        return 'aprobado';
    } else if (status == 'document.waiting_pay') {
        return 'pendiente por pago';
    } else if (status == 'document.paid') {
        return 'pagado';
    } else if (status == 'document.voided') {
        return 'caducado';
    } else if (status == 'document.declined') {
        return 'declinado';
    } else {
        return 'no registrado';
    }
}
// enviar el documento
function sendDocument(idSend) {

    async function sendPandaDocument(elvalor) {
        const sendingDocument = await Panda.sendDocument(elvalor);
        console.log(sendingDocument);
    };

    sendPandaDocument(idSend);
}
// visual de lista de plantilla 
(async () => {

    const templateList = await Panda.templateList();
    templateList.results.forEach((template, index) => {
        const trTemplate = document.createElement("tr");
        trTemplate.innerHTML = `<td>${index}</td><td>${template.name}</td><td>${template.date_created}</td><td><input type="radio" name="create" id="create"></td>`;
        document.querySelector('#tbody__template').appendChild(trTemplate);
    });
})();
//borrar Doncumento
function getDelete(idDocument) {
    async function deleteDocumentId(idDelete) {
        const documentsDelete = await Panda.deleteDocument(idDelete);

    }
    deleteDocumentId(idDocument);
}



// crear doncumento
const formDocument = document.getElementById('formDocument');
const filesExtern = document.getElementById('uploadFile');
formDocument.addEventListener('submit', function (event) {
    event.preventDefault();
    const formData = new FormData();
    formData.append("file", filesExtern.files[0]);
    const data = {
        "name": "documento Hotmail",
        "recipients": [{
            "email":"alexanderfpm23@gmail.com",
            "first_name":"fidel",
            "last_name":"pacheco",
            "role": "user"}
        ],
        "parse_form_filds": false
    }
    formData.append("data", JSON.stringify(data));
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
    console.log(formData.get('file'),formData.get('data'));
>>>>>>> 8a0aab3 (pandadoc Actualizado)
>>>>>>> 4660383 (actualizar PandaDoc)
    async function createDoc(doc) {
        const documentsDoc = await Panda.createDocumentExternal(doc);
        console.log(documentsDoc);
    }
<<<<<<< HEAD
    createDoc(formData);
=======
<<<<<<< HEAD
    createDoc(formData);
=======
    //createDoc(formData);
>>>>>>> 8a0aab3 (pandadoc Actualizado)
>>>>>>> 4660383 (actualizar PandaDoc)
});

// create Template for document
async function createTemplate() {
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 4660383 (actualizar PandaDoc)
    // let contentTemplate ={
    //     "name": "desde API document",
    //     "template_uuid": "Zn8wkxPEqg9sAN6nZwTJem",
    //     "recipients": [
    //       {
    //         "email": "alexanderfpm23@gmail.com",
    //         "first_name": "alexander",
    //         "last_name": "pacheco",
    //         "role": "user"
    //       }
    //     ],
    //     "tokens": [
    //       {
    //         "name": "Favorite.Pet",
    //         "value": "Panda"
    //       }
    //     ],
    //     "fields": {
    //       "Favorite.Color": {
    //         "value": "PandaDoc green"
    //       },
    //       "Delivery": {
    //         "value": "Same Day Delivery"
    //       },
    //       "Like": {
    //         "value": true
    //       },
    //       "Date": {
    //         "value": "2019-12-31T00:00:00.000Z"
    //       }
    //     },
    //     "metadata": {
    //       "my_favorite_pet": "Panda"
    //     },
    //     "tags": [
    //       "created_via_api",
    //       "test_document"
    //     ],
    //     "images": [
    //       {
    //         "name": "Image 1",
    //         "urls": [
    //           "https://s3.amazonaws.com/pd-static-content/public-docs/pandadoc-panda-bear.png"
    //         ]
    //       }
    //     ],
    //     "pricing_tables": [
    //       {
    //         "name": "Pricing Table 1",
    //         "data_merge": true,
    //         "options": {
    //           "Tax": {
    //             "type": "percent",
    //             "name": "Tax",
    //             "value": 10
    //           }
    //         },
    //         "sections": [
    //           {
    //             "title": "Sample Section",
    //             "default": true,
    //             "rows": [
    //               {
    //                 "options": {
    //                   "optional": true,
    //                   "optional_selected": true,
    //                   "qty_editable": true
    //                 },
    //                 "data": {
    //                   "Name": "Toy Panda",
    //                   "Description": "Fluffy!",
    //                   "Price": 10,
    //                   "QTY": 3,
    //                   "Tax": {
    //                     "value": 20,
    //                     "type": "percent"
    //                   }
    //                 },
    //                 "custom_fields": {
    //                   "Fluffiness": "5 / 5"
    //                 }
    //               }
    //             ]
    //           }
    //         ]
    //       }
    //     ]
    //   }


    let contentTemplate = {
      "name": "firma cliente",
      "template_uuid": "6e43EZ4H9BUnAYP46VbXGc",
      "recipients": [
        {
          "email": "alexanderfpm23@gmail.com",
          "first_name": "alexander",
          "last_name": "pacheco",
          "role": "Client"
        }
      ],
      "tokens": [],
      "fields": {
          
          "uuid": "d924a2b7-053c-489a-aa8a-ff2926ded8a0",
          "name": "Signature",
          "title": "",
          "placeholder": "Signature",
          "value": {},
          "assigned_to": {
              "id": "Xpv2V5JtzDm34Xr5nZJ96L",
              "name": "Signer",
              "preassigned_person": null,
              "type": "role"
          }
      },
      "metadata": {},
      "tags": [
        "created_via_api",
        "test_document"
      ],
      "images": [ ],
      "pricing_tables": []
    };
<<<<<<< HEAD
=======
=======
    let contentTemplate ={
  "name": "API Sample Document from PandaDoc Template",
  "template_uuid": "Zn8wkxPEqg9sAN6nZwTJem",
  "folder_uuid": "4mpZFqVtfDQhJncskJDGAQ",
  "recipients": [
    {
      "email": "alexanderfpm23@gmail.com",
      "first_name": "alex",
      "last_name": "pacheco",
      "role": "user",
      "signing_order": 1
    }
  ],
  "tokens": [
    {
      "name": "Favorite.Pet",
      "value": "Panda"
    }
  ],
  "fields": {
    "Like": {
      "value": true
    },
    "Delivery": {
      "value": "Same Day Delivery"
    },
    "Date": {
      "value": "2019-12-31T00:00:00.000Z"
    }
  },
  "metadata": {
    "my_favorite_pet": "Cat"
  },
  "tags": [
    "created_via_api",
    "test_document"
  ],
  "images": [
    {
      "urls": [
        "https://s3.amazonaws.com/pd-static-content/public-docs/pandadoc-panda-bear.png"
      ],
      "name": "Image 1"
    }
  ],
  "pricing_tables": [
    {
      "name": "Pricing Table 1",
      "data_merge": true,
      "options": {
        "currency": "USD",
        "Discount": {
          "type": "absolute",
          "name": "Global Discount",
          "value": 10
        },
        "Tax": {
          "type": "percent",
          "name": "Tax First",
          "value": 15
        }
      },
      "sections": [
        {}
      ]
    }
  ],
  "content_placeholders": [
    {
      "content_library_items": [
        {}
      ],
      "block_id": "Content Placeholder 1"
    }
  ]
}


        // let contentTemplate = {
        // "name": "firma cliente",
        // "template_uuid": "6e43EZ4H9BUnAYP46VbXGc",
        // "recipients": [
        //     {
        //     "email": "alexanderfpm23@gmail.com",
        //     "first_name": "alexander",
        //     "last_name": "pacheco",
        //     "role": "Client"
        //     }
        // ],
        // "tokens": [],
        // "fields": {
            
        //     "uuid": "d924a2b7-053c-489a-aa8a-ff2926ded8a0",
        //     "name": "Signature",
        //     "title": "",
        //     "placeholder": "Signature",
        //     "value": {},
        //     "assigned_to": {
        //         "id": "Xpv2V5JtzDm34Xr5nZJ96L",
        //         "name": "Signer",
        //         "preassigned_person": null,
        //         "type": "role"
        //     }
        // },
        // "metadata": {},
        // "tags": [
        //     "created_via_api",
        //     "test_document"
        // ],
        // "images": [ ],
        // "pricing_tables": []
        // };

>>>>>>> 8a0aab3 (pandadoc Actualizado)
>>>>>>> 4660383 (actualizar PandaDoc)
    const termplateCreate = await Panda.createDocumentTemplate(contentTemplate);
    console.log(termplateCreate)
}

document.querySelector('#create__Template').onclick = function(){createTemplate()};



