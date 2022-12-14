const path = require('path');

module.exports = {
    openapi: '3.0.0',
    info: {
        title: 'prueba2 API',
        version: '1.0.0',
        description: 'Microservice prueba2 API',
    },
    servers: [
        { url: 'http://localhost:9101' }
    ],
    apis: [path.join(__dirname, './src/**/**/*.ts')]
};
