import knex from '../knex';
import { User } from '../interfaces/users.interface';
import log from '../log';

async function getUser(username: string, password?: string): Promise<User> {
    let user: User;
    if (password) {
        user = await knex('users').where('username', username).where('password', password).first();
    } else {
        user = await knex('users').where('username', username).first();
        user.password = undefined;
    }

    if (!user) {
        log.error(`No user was found with username: ${username}`);
    }

    return user;
}

export { getUser };
