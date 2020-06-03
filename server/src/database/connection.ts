import knex from 'knex';
import path from 'path';


const connection = knex ({
    client: 'sqlite3', //Qual client que estamos usando (tipo de banco de dados)
    connection: {
        filename: path.resolve(__dirname, 'database.sqlite')
    }, 
    useNullAsDefault: true
});


export default connection;

//Migrations = Histórico de banco de dados, basicamente
//A ordem que criamos as migrations é importante, que nem no banco