import generatedEndpoint from './utils';

class Users {
    name: string = 'Users';

    static getTag() {
        return {
            name: this.name,
            description: 'Users endpoints',
        };
    }

    static getSchema() {
        return {
            getUser: {
                title: 'getUser',
                type: 'object',
                properties: {
                    username: {
                        type: 'string',
                    },
                    password: {
                        type: 'string',
                    },
                },
            },
        };
    }

    static getParameters() {
        return {
            parameters: [
                {
                    in: 'query',
                    name: 'username',
                    schema: { type: 'string' },
                    required: false,
                },
                {
                    in: 'query',
                    name: 'password',
                    schema: { type: 'string' },
                    required: false,
                },
            ],
        };
    }

    static getPaths() {
        return {
            '/users': {
                get: generatedEndpoint({
                    tag: this.name,
                    summary: 'returns specified user',
                    description: 'Takes a request with a username and maybe the password and returns the user back',
                    operationalId: 'getUser',
                    schemas: {
                        request: this.getParameters().parameters,
                        body: '#/components/schemas/getUser',
                        bodyRequired: true,
                        response: {
                            reference: '#/components/schemas/getUser',
                            description: 'Returned user object',
                            required: true,
                        },
                    },
                }),
            },
        };
    }
}

export default Users;
