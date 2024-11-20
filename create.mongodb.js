/**NOME DO BANCO DE DADOS */

const database= 'bd3-atv4-eliza'

// NOME DO BANCO DA COLEÇÃO DE DADOS

const collection = 'chat'

// CRIAR OU ACESSAR O BANCO DE DADOS:
use(database)

// CRIAR UMA COLEÇÃO DE DADOS

db.createCollection(collection)