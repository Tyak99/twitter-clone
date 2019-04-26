/* eslint-disable camelcase */
import authorization from '../middlewares/authorization';
import User from '../models/users';

export default {
    signup(req, res) {
        const response = User.create(req.body);

        const token = authorization.generateToken(this.tokenUserData(response));
        return res.status(201).json({
            status: 201,
            message: 'successfully created account',
            data: {
                token,
                user: response
            },
        });
    },

    tokenUserData(data) {
        return {
            id: data.id,
            email: data.email
        };
    }
};
