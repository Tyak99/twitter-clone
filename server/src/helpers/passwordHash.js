import { config } from 'dotenv';
import bcrypt from 'bcrypt';

config();

/**
 * @function hashPassword
 * @param {string} password
 * @param {integer} salt
 * @returns
 */
const passwordHash = (password) => {
    const hash = bcrypt.hashSync(password, 10);
    return hash;
};

export default passwordHash;
