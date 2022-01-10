import { Request, Response } from 'express';
import { getUser } from '../service/users.service';
import { UserParams } from '../interfaces/users.interface';
import { generateAccessToken } from '../middleware/auth';
import log from '../log';

async function authenticateUserController(req: Request<{}, {}, UserParams>, res: Response) {
  const { body } = req;

  if (!body.password) {
    log.error('No password was supplied in the body');
    return res.status(400).send('Please supply a password');
  }

  let authenticatedUser = await getUser(body.username, body.password);

  if (!authenticatedUser || !authenticatedUser.password) {
    return res.sendStatus(401);
  }
  const token = generateAccessToken({ username: authenticatedUser.username });
  return res.send({ token: token });
}

async function getAuthenticatedUserController(req: Request, res: Response) {
  const { user } = req;
  let authenticatedUser = await getUser(user!.username);
  return res.send(authenticatedUser);
}

export { authenticateUserController, getAuthenticatedUserController };
