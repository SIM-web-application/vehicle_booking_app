import express from "express";
import { getAllUser, register, login, getMe, logout, updateDetail, updatePassword, deleteUser } from "../controllers/UsersController";

const route = express.Router();

route.get('/',getAllUser);
route.post('/register',register);
route.post('/login', login);
route.get('/logout', logout);
route.get('/me', getMe);
route.put('/updateDetail', updateDetail);
route.put('/updatePassword', updatePassword);
route.delete('/delete', deleteUser);

export default route;