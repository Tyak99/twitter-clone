// import uuidv4 from 'uuid/v4';
import moment from 'moment';
import data from '../utils/dummyData';
import Profile from './profile';
import passwordHash from '../helpers/passwordHash';

const formatedDate = moment().format('YYYY-MM-DDTHH:mm:ss.SSS');

class Users {
    /**
     * Creates an instance of Users.
     * @memberof Users
     */
    constructor() {
        this.users = data.users;
    }

    /**
     * @returns { Object } user object
     * @param {*} data
     * @memberof Users
     */
    create(datum) {
        const user = {
            id: this.users.length + 1,
            name: datum.name,
            username: datum.username,
            email: datum.email,
            status: 'active',
            is_admin: false,
            active: false,
            password: passwordHash(datum.password),
            created_at: formatedDate,
        };

        const profile = Profile.create(user);

        this.users.push(user);
        const response = { ...user, profile };
        return response;
    }
}

export default new Users();
