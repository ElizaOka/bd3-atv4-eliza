const database = 'bd3-atv4-eliza';

const collection = 'chat';

use(database);

db[collection].insertMany(
    [
        {
            "mensagem": "Bom dia",
            "createdAt": new Date()
        },
        {
            "mensagem": "Tudo bem? ",
            "createdAt": new Date()
        },
        {
            "mensagem": "Precisamo sconversar",
            "createdAt": new Date()
        },
        {
            "mensagem": "sim, então vamos nos encontrar no mesmo restaurante",
            "createdAt": new Date()
        },
        {
            "mensagem": "sim, que horas?",
            "createdAt": new Date()
        },
        {
            "mensagem": "as 13:00 horas",
            "createdAt": new Date()
        },
        {
            "mensagem": "ok, estarei la",
            "createdAt": new Date()
        },
        {
            "mensagem": "então até mais tarde",
            "createdAt": new Date()
        },
        {
            "mensagem": "sim estarei lá",
            "createdAt": new Date()
        },
        {
            "mensagem": "tchau",
            "createdAt": new Date()
        }





    ]
)