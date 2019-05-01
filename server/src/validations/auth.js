import { check } from 'express-validator/check';
import notEmpty from '../helpers/notEmpty';

export default {
    signup: [
        check('name')
            .trim()
            .exists()
            .withMessage('Name must be specified')
            .custom(value => notEmpty(value, 'Name field cannot be empty')),
        check('username')
            .trim()
            .exists()
            .withMessage('Username must be specified')
            .isLength({ min: 3, max: 144 })
            .withMessage('Username must be between 2 to 144 characters')
            .matches(/^[a-z0-9]*$/i)
            .withMessage('Username can only contain letters and numbers without space'),
        check('email')
            .trim()
            .exists()
            .withMessage('Email must be specified')
            .custom(value => notEmpty(value, 'Email field must be specified'))
            .isEmail()
            .withMessage('Please input valid email address'),
        check('password')
            .trim()
            .exists().withMessage('Password must be specified')
            .isLength({ min: 6 })
            .withMessage('Password must be at least 6 characters'),
        check('confirm_password', 'Password dont\'t match')
            .trim()
            .custom(value => notEmpty(value, 'Confirm password field cannot be empty'))
            .custom((value, { req }) => value === req.body.password),
    ],
    login: [
        check('username')
            .trim()
            .exists()
            .withMessage('Username must be specified')
            .isLength({ min: 3, max: 144 })
            .withMessage('Username must be between 2 to 144 characters')
            .matches(/^[a-z0-9]*$/i)
            .withMessage('Username can only contain letters and numbers without space'),
        check('password')
            .trim()
            .exists().withMessage('Password field is required')
            .isLength({ min: 3 })
            .withMessage('Please enter a valid password.'),
    ]
};
