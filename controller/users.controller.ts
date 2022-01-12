import { Request, Response } from 'express';
import { getUser } from '../service/users.service';
import { UserParams } from '../interfaces/users.interface';

async function getUserController(req: Request<{}, {}, UserParams, UserParams>, res: Response) {
    const { query } = req;
    if (query.username) {
        return res.send(await getUser(query.username));
    }
    const { body } = req;
    return res.send(await getUser(body.username, body.password));
}

function getUsers(req: Request, res: Response) {
    return res.send('yay!');
}

export { getUserController, getUsers };
