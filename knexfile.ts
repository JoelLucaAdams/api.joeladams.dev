import dotenv from 'dotenv';
dotenv.config();

const knexfile = {
	development: {
		client: 'postgresql',
		connection: {
			database: process.env.DB_DATABASE,
			user: process.env.USER,
			password: process.env.DB_PASSWORD,
		},
		pool: {
			min: 2,
			max: 10,
		},
		migrations: {
			directory: './knex/migrations',
			tableName: 'knex_migrations',
		},
		seeds: {
			directory: './knex/seeds',
		},
	},

	production: {
		client: 'postgresql',
		connection: {
			database: 'my_db',
			user: 'username',
			password: 'password',
		},
		pool: {
			min: 2,
			max: 10,
		},
		migrations: {
			tableName: 'knex_migrations',
		},
	},
};

export default knexfile;
