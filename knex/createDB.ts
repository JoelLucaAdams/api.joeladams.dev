import knex from 'knex';
import log from '../log';
import knexfile from '../knexfile';

const knexClient = knex(knexfile.development);

async function createDatabase() {
  try {
    console.log("Create database if it doesn't exist...");
    //TODO: Add database command
    // await knexClient.raw(`SELECT 'CREATE DATABASE \`${knexfile.development.connection.database}\`' WHERE NOT EXISTS (SELECT FROM pg_database WHERE datname = \`${knexfile.development.connection.database}\`)\gexec`)
  } catch (err) {
    console.log(err);
  }
  console.log('Done');
}

createDatabase();
