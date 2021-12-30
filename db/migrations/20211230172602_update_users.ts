import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema.table('users', table => {
        table.renameColumn('apiKey', 'password');
        table.timestamps();
    });
};


export async function down(knex: Knex): Promise<void> {
    return knex.schema.table('users', table => {
        table.renameColumn('password', 'apiKey');
        table.dropTimestamps();
    });
};

