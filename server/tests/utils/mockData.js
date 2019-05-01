export default {
    signup: {
        validDetails: {
            name: 'John Doe',
            username: 'Jon',
            email: 'john@gmail.com',
            password: 'password',
            confirm_password: 'password'
        },
        emptyDetails: {
            name: '',
            username: '',
            email: '',
            password: 'password',
            confirm_password: 'password'
        },
        missingFields: {
            email: 'jon@gmail.com',
            password: 'password',
            confirm_password: 'password'
        },
        mismatchPassword: {
            name: 'John Doe',
            username: 'Jon',
            email: 'john@gmail.com',
            password: 'password',
            confirm_password: 'passwo'
        },
        wrongEmailFormat: {
            name: 'John Doe',
            username: 'Jon',
            email: 'john',
            password: 'password',
            confirm_password: 'password'
        },
    },
    login: {
        validDetails: {
            username: 'Despeauxz',
            password: 'password'
        },
        invalidDetails: {
            username: 'April',
            password: 'fool'
        },
        emptyFields: {
            username: '',
            password: ''
        },
    }
};
