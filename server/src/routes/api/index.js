import express from 'express';
import authRoutes from './auth';

const apiRoutes = express.Router();

apiRoutes.get('/', (req, res) => res.status(200).send({
    status: 200,
    message: 'Welcome to Twitter Clone API',
}));

apiRoutes.get('/v1', (req, res) => res.status(200).send({
    status: 200,
    message: 'Welcome to version 1 of Twitter Clone API',
}));

apiRoutes.use('/v1/auth', authRoutes);

export default apiRoutes;
