export class PandaDocument {

    constructor(ApiKey) {
        this.ApiKey = ApiKey;

    }



    //crear autorizacion por API-Key

    //crear autorizacion por Bearer

    //crear token 

    //refrescar token

    //crear documento por plantilla

    async createDocumentTemplate(templateDoc) {

        const createDocument = await fetch('https://api.pandadoc.com/public/v1/documents', {
            headers: {"Authorization": `Api-key ${this.ApiKey}`, 'Content-Type': 'application/json'},
            method: 'POST',
            body: JSON.stringify(templateDoc)
        });
        const jsonTemplate = await createDocument.json();
        return jsonTemplate;

    }
    

    //crear documento por archivo externo
    async createDocumentExternal(documen) {
        const externDocument = await fetch('https://api.pandadoc.com/public/v1/documents',{
            headers: {"Authorization": `Api-key ${this.ApiKey}`},method:'POST',
            body:documen});
        const jsonDocument = await externDocument.json();
        return jsonDocument;

    }



    // listar documentos 
    async listDocument() {
        const resp = await fetch('https://api.pandadoc.com/public/v1/documents',
            { headers: { "Authorization": `Api-key ${this.ApiKey}`, 'Content-Type': 'application/json' } });
        const jsonLinst = await resp.json();
        return jsonLinst;

    }

    //listar plantilla para los documentos    
    async templateList() {
        const template = await fetch('https://api.pandadoc.com/public/v1/templates', { headers: { "Authorization": `Api-key ${this.ApiKey}`, 'Content-Type': 'application/json' } });
        const templateJson = await template.json();
        return templateJson;
    }


    // enviar documentos 
    async sendDocument(documentId) {
        const pandaSend = await fetch(`https://api.pandadoc.com/public/v1/documents/${documentId}/send`, {
            headers: { "Authorization": `Api-key ${this.ApiKey}`, 'Content-Type': 'application/json' },
            method: 'POST', body: JSON.stringify({ "message": "Contrato para realizar firma", "subjet": "Documento por medio de PandaDoc", "silent": false })
        });
        const sendiId = await pandaSend.json();
        return sendiId;
    }


    async deleteDocument(id){
        const deleteDocuments = await fetch(`https://api.pandadoc.com/public/v1/documents/${id}`,{
            headers:{ "Authorization": `Api-key ${this.ApiKey}`, 'Content-Type': 'application/json'},
            method:'DELETE'
        });s
              
    }



}





