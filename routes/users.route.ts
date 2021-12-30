import express from 'express';
import { getUserController } from '../controller/users.controller';

const usersRouter = express.Router();

usersRouter.get('/', getUserController);

export default usersRouter;
