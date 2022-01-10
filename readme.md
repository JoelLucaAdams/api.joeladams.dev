# Backend API written entirely in Typescript!

This is my first project written from the ground up in Typescript. I've not really had a chance to work with it before but thought I'd give it a shot so that I could have a practical application to show others

## Running the project

1. `npm install` - installs all the node dependencies
2. Create a `.env` with the following information. The backend is expecting to use postgresql as a database but can also with many other databases if need be. Simply change the line called `client` in `/db/knexfile.ts` to another database and it should in theory work flawlessly. For the `TOKEN_SECRET` just generate a random token (e.g. `require('crypto').randomBytes(64).toString('hex')`).

    ```env
    PORT
    URL
    DB_DATABASE
    USER
    DB_PASSWORD
    TOKEN_SECRET
    ```

3. `npm start` - Starts up the project on the specified port

## Commands

- `npm start` - Runs and builds the project
- `npm run build` - Compiles the Typescript code to JavaScript
- `npm run database-build` - Creates the database, migrates to the latest versions and runs seeding. (`npm start` runs this every time)
- `npm run database-teardown` - Rolls-back the latest database migration
- `npm run database-update` - Runs the latest migration
- `npm run kill-port` - Kills the process running on the specified port as nodemon sometimes doesn't restart correctly
- `npm run prettier` - Runs prettier on the codebase (recommended before push)
