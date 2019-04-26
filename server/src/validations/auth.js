import { check } from 'express-validator/check';
import notEmpty from '../helpers/notEmpty';

export default {
    signup: [
        check('name')
            .trim()
            .exists()
            .withMessage('Name must be specified')
            .custom(value => notEmpty(value, 'Name field cannot be left blank')),
        check('username')
            .trim()
            .exists()
            .withMessage('Username must be specified')
            .custom(value => notEmpty(value, 'Username field cannot be left blank'))
            .isAlphanumeric(),
        check('email')
            .trim()
            .exists()
            .withMessage('Email must be specified')
            .custom(value => notEmpty(value, 'Email field must be specified'))
            .isEmail()
            .withMessage('Please input valid email address'),
        check('password')
            .trim()
            .exists().withMessage('Password field is required')
            .isLength({ min: 6 })
            .withMessage('Password must be minimum of 6 characters'),
        check('confirm_password', 'Password dont\'t match')
            .trim()
            .custom(value => notEmpty(value, 'Confirm password field cannot be left blank'))
            .custom((value, { req }) => value === req.body.password),
    ]
};
