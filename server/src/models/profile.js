import moment from 'moment';
import data from '../utils/dummyData';

const formatedDate = moment().format('YYYY-MM-DDTHH:mm:ss.SSS');

class Profile {
    /**
     * Creates an instance of Profile.
     * @memberof Profile
     */
    constructor() {
        this.profiles = data.profile;
    }

    /**
     * @param {*} data
     * @memberof Profile
     * @returns { Object } profile data
     */
    create(userData) {
        const profile = {
            id: this.profiles.length + 1,
            user_id: userData.id,
            desc: null,
            location: null,
            date_of_birth: null,
            avatar: null,
            header_photo: null,
            created_at: formatedDate,
            modified_at: null
        };

        this.profiles.push(profile);
        return profile;
    }
}

export default new Profile();
