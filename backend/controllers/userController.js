import validator from "validator"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import userModel from "../models/userModel.js"

const createToken = (id) => {
    return jwt.sign({id}, process.env.JWT_SECRET)
}

// Route For User Login
const loginUser = async (req, res) => {

}

// Route For User Registration
const registerUser = async (req, res) => {
    try {
        const { name, email, password } = req.body
        
        // Checking If User Exists
        const exists = await userModel.findOne({email})
        if (exists) {
            return res.json({
                success: false,
                message: 'User Already Exists'
            })
        }

        // Validating Email Formatt & Strong Password
        if (!validator.isEmail(email)) {
            return res.json({
                success: false,
                message: 'Please Enter A Valid Email'
            })
        }

        if (password.length < 8) {
            return res.json({
                success: false,
                message: 'Please Enter A Passowrd With Minimum 8 Characters'
            })
        }

        // Hashing User Password
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)

        const newUser = new userModel({
            name, email,
            password: hashedPassword
        })

        const user = await newUser.save()
        
        const token = createToken(user._id)
        res.json({
            success: true,
            token
        })

    } catch (error) {
        console.log(error);
        res.json({
            success: false,
            message: error.message
        })
    }
}

// Route For Admin Login
const adminLogin = async (req, res) => {

}

export { loginUser, registerUser, adminLogin }