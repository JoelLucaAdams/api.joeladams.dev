import express, { Request, Response } from 'express';
import usersRouter from './users.route';
import authenticationRouter from './authentication.route';

const router = express.Router({ mergeParams: true });

router.get('/healthcheck', (req: Request, res: Response) => res.sendStatus(200));

router.use('/users', usersRouter);
router.use('/auth', authenticationRouter);

export default router;
