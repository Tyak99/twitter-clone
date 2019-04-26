import express from 'express';
import ValidationHandler from '../../middlewares/ValidationHandler';
import auth from '../../controllers/auth';
import authvalidation from '../../validations/auth';
import trim from '../../middlewares/trim';


const authRoutes = express.Router();
const validation = [ValidationHandler.validate, trim, ValidationHandler.isEmptyReq];

authRoutes.post('/signup', authvalidation.signup, validation, (req, res) => auth.signup(req, res));

export default authRoutes;
