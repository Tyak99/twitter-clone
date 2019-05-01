import bcrypt from 'bcrypt';

/**
 * @method verifyPassword
 * @param {string} password
 * @return {Promise} Promise of true or false
 */
const verifyPassword = (password, hash) => bcrypt.compareSync(password, hash);

export default verifyPassword;
