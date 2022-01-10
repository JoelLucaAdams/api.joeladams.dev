import express from 'express';
import { authenticateUserController, getAuthenticatedUserController } from '../controller/authentication.controller';
import { authenticateToken } from '../middleware/auth';

const authenticationRouter = express.Router();

authenticationRouter.post('/login', authenticateUserController);

authenticationRouter.get('/user', authenticateToken, getAuthenticatedUserController);

export default authenticationRouter;
