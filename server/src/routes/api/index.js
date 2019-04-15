import express from 'express';

const apiRoutes = express.Router();

apiRoutes.get('/', (req, res) => res.status(200).send({
    status: 200,
    message: 'Welcome to the Twitter Clone API',
}));

apiRoutes.get('/v1', (req, res) => res.status(200).send({
    status: 200,
    message: 'Welcome to version 1 of the Twitter Clone API',
}));

export default apiRoutes;
