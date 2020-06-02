//Todos os pacotes referentes ao TypeScript estão instalados em Dev
import express from 'express';
//Necessário instalar a definição de tipos através do npm install @types/express, já que
//O express não possui uma declaração de tipos

const app = express();

app.get('/users', (request, response) => {
    console.log('Listagem de usuários');

    response.json(['Diego', 'Cleiton', 'Robson', 'Daniel']);
});

//Instalado o typescript como dependência no projeto
//Instalado o pacote ts-node, para poder executar o node com typescript
//Executado npx ts-node, para executar o script, apontando para o server.ts

//É necessário um arquivo de configurações do typescript
//Executado o comando npx tsc --init
//Para gerar esse arquivo

app.listen(3333);