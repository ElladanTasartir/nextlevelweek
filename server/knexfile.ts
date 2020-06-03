import path from 'path';

module.exports = { //O knex não suporta ainda a síntaxe do ESM
    client: 'sqlite3', //Qual client que estamos usando (tipo de banco de dados)
    connection: {
        filename: path.resolve(__dirname, 'src', 'database', 'database.sqlite')
    },
    migrations: {
        directory: path.resolve(__dirname, 'src', 'database', 'migrations')
    },
    seeds: {
        directory: path.resolve(__dirname, 'src', 'database', 'seeds')
    },
    useNullAsDefault: true
};

//executado npx knex migrate:latest --knexfile knexfile.ts