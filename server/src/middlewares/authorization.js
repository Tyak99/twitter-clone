import jwt from 'jsonwebtoken';
import { config } from 'dotenv';

config();

export default {
    getToken: (req) => {
        const bearerToken = req.headers.authorization;
        const token = bearerToken && bearerToken.replace('Bearer ', '');

        return token;
    },

    generateToken: (user) => {
        const token = jwt.sign({ user },
            process.env.SECRET, {
                expiresIn: '1h',
            });

        return token;
    },
};
