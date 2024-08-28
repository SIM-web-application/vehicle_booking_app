import User from "../models/Users.js";
import bcrypt from "bcryptjs";
import { response } from "express";
import jwt from 'jsonwebtoken';

export const getAllUser = async(req, res) =>{
    try {
        const users = await User.find({})
        if(users.length === 0){
            return res.status(404).json({message: 'No user'})
        }
        return res.status(200).json({
            count : users.length,
            data : users
        })
    } catch (error) {
        console.log(error.message)
        res.status(500).json({message: error.message})
    }
} 

export const register = async (req, res)=>{
    const {name, email, password, phone_number} = req.body; 
    try {
        let user = await User.findOne({phone_number})
        if (user) {
            return res.status(400).json({message: 'Phone number already exist'})
        }
        // mã hoá mật khẩu
        const salt = await bcrypt.genSalt(10);
        const hashPass = await bcrypt.hash(password, salt);

        user = new User({
            name,
            email,
            password: hashPass,
            phone_number
        })
        await user.save();

        const payload = {user: user._id};
        const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: 360000});
        res.cookie("token", token, { httpOnly: true, expiresIn: 360000});

        const {password: pass, ...rest} = user._doc
        return res.status(201).json({
            message: 'User create successfully', user : rest
        })
    } catch (error) {
        console.log(error.message)
        res.status(500).json({message: error.message})
    }
}

export const login = async(req, res) =>{
    const {phone_number, password} = req.body;
    try {
        const user = await User.findOne({phone_number});
        if(!user){
            return res.status(404).json({message: 'Invalid phone number'});
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch){
            return res.status(404).json({message: 'Invalid password'});
        }
        await user.save();

        const payload = { user: user._id};
        const token = jwt.sign(payload, process.env.JWT_SECRET, {expiresIn: 360000})
        res.cookie("token", token, {httpOnly : true, expiresIn: 360000});

        const {password: pass, ...rest} = user._doc;
        res.status(200).json({message:'login successfully', token, user: rest})
    } catch (error) {
        console.log(error.message);
        res.status(500).json({message:error.message})
    }
}

export const logout = async(req, res)=>{
    response.clearCookie("token");
    res.status(200).json({message: 'Logged out successfully'})
}

export const getMe = async(req, res)=>{
    try {
        const user = await User.findById(req.user);
        if(!user){
            return res.status(404).json({message: 'User not found'})
        }
        const {password: password, ...rest} = user._doc
        return res.status(200).json({message: 'User found', user: rest})
    } catch (error) {
        console.log(error.message)
        res.status(500).json({message: error.message})
    }
}

export const updateDetail = async(req, res)=>{
    const {name, email, age, phone_number} = req.body;
    try {
        const user = await User.findById(req.user);
        if(!user){
           return res.status(404).json({message: 'User not found'})
        }
        let userExist = await User.findOne({phone_number})
        if(!userExist) {
            return res.status(404).json({message:'Phone number is exist'})
        }
        userExist = await User.findOne({email})
        if(!userExist){
            return res.status(404).json({message: 'Email is exist'})
        }

        user.name = name;
        user.phone_number = phone_number;
        user.age = age;
        user.email = email
        await user.save();

        const {password: pass, ...rest} = user._doc;
        return res.status(200).json({
            message: 'User update successfully',
            user: rest
        })
    } catch (error) {
        console.log(error.message)
        res.status(500).json({message: error.message})
    }
}

export const updatePassword = async(req, res)=>{
    const {password} = req.body;
    try {
        const user = await User.findById(req.user)
        if(!user){
            return res.status(404).json({message:'User not found'})
        }
        const isMatch = await bcrypt.compare(password, user.password)
        if(!isMatch) {
            return res.status(404).json({message:'Invalid credentials'})
        }
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(newPassword, salt);
        const {password: pass, ...rest} = user._doc;
        await user.save();
        return res.status(200).json({message: 'Update password successfully'})
    } catch (error) {
        console.log(error.message)
        res.status(500).json({message: error.message})
    }
}

export const deleteUser = async(req, res)=>{
    try {
        const user = await User.findById(req.user)
        if(!user){
            return res.status(404).json({message: 'User not found'})
        }
        res.clearCookie('token');
        await user.DeleteOne({_id: req._id})
        return res.status(200).json({message:'User delete successfully'})
    } catch (error) {
        console.log(error.message)
        res.status(500).json({message: error.message})
    }
}