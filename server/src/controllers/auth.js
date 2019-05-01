/* eslint-disable camelcase */
import authorization from '../middlewares/authorization';
import verifyPassword from '../helpers/verifyPassword';
import User from '../models/users';

export default {
    signup(req, res) {
        const response = User.create(req.body);

        const token = authorization.generateToken({ id: response.id });
        return res.status(201).json({
            status: 201,
            message: 'successfully created account',
            data: {
                token,
                user: response
            },
        });
    },

    login(req, res) {
        const { username, password } = req.body;
        const response = User.findByName(username);
        if (!response) {
            return res.status(401).json({
                status: 401,
                error: 'Username/Password do not match',
            });
        }

        const isPasswordValid = verifyPassword(password, response.password);
        if (!isPasswordValid) {
            return res.status(401).json({
                status: 401,
                error: 'Username/Password do not match',
            });
        }
        const token = authorization.generateToken({ id: response.id });
        return res.status(200).json({
            status: 200,
            data: {
                token,
                user: response,
            },
        });
    }
};
