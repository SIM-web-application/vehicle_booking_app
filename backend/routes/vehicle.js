import express from "express";
import { getAllVehicle } from "../controllers/VehiclesController";
const route = express.Router();

route.get('/', getAllVehicle)
route.get('/:id', getOneVehicle)

export default route;