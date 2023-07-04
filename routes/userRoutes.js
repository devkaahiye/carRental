import express from 'express'
import { getUserProfile, login, register } from '../controllers/userController.js'

const router = express.Router()


router.route('/').post(register)
router.route('/profile').post(getUserProfile)
router.route('/login').post(login)

export default router