//Todos os pacotes referentes ao TypeScript estão instalados em Dev
import express from 'express';
//Necessário instalar a definição de tipos através do npm install @types/express, já que
//O express não possui uma declaração de tipos
import cors from 'cors';

import path from 'path';

import routes from './routes';

const app = express();

app.use(cors()); //No ambiente de produção, devemos colocar uma origin para definir quem pode acessar
app.use(express.json());

app.use(routes);

//Instalado o typescript como dependência no projeto
//Instalado o pacote ts-node, para poder executar o node com typescript
//Executado npx ts-node, para executar o script, apontando para o server.ts

//É necessário um arquivo de configurações do typescript
//Executado o comando npx tsc --init
//Para gerar esse arquivo

app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));

app.listen(3333);