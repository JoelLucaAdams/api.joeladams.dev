import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';
import log from '../log';

function generateAccessToken(username: object) {
    return jwt.sign(username, process.env.TOKEN_SECRET as string, { expiresIn: '1800s' });
}

function authenticateToken(req: Request, res: Response, next: NextFunction) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (token == null) {
        return res.send(401);
    }

    jwt.verify(token, process.env.TOKEN_SECRET as string, (err: any, user: any) => {
        if (err) {
            log.info(err);
            return res.send(403);
        }

        req.user = user;
        next();
    });
}

export { generateAccessToken, authenticateToken };
