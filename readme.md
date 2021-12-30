# Backend API written entirely in Typescript!

This is my first project written from the ground up in Typescript. I've not really had a chance to work with it before but thought I'd give it a shot so that I could have a practical application to show others

## Running the project

1. `npm install` - installs all the node dependencies
2. Create a `.env` with the following information. The backend is expecting to use postgresql as a database but can also with many other databases if need be. Simply change the line called `client` in `/db/knexfile.ts` to another database and it should in theory work flawlessly. For the `TOKEN_SECRET` just generate a random token (e.g. `require('crypto').randomBytes(64).toString('hex')`).
```
PORT
URL
DATABASE
USER
PASSWORD
TOKEN_SECRET
```
2. `npm run migrate` - creates or migrates the database
2. `npm start` - Starts up the project on the specified port