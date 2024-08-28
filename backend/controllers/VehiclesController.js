import Vehicle from "../models/Vehicles.js";

export const getAllVehicle = async(req, res)=>{
    try {
        const vehicles = await Vehicle.find({});
        if(vehicles.length === 0){
            return res.status(404).json({message:'No Vehicle'})
        }
        return res.status(200).json({count: vehicles.length, data: vehicles})
    } catch (error) {
        console.log(error.message)
        res.status(500).json({message: error.message})
    }
}

export const getOneVehicle = async(req, res)=>{
    const {id} = req.params;
    try {
        const vehicle = await Vehicle.findById(id);
        if(!vehicle) {
            return res.status(404).json({message:'Vehicle not found'})
        }
        return res.status(200).json({message: 'success', todo})
    } catch (error) {
        console.log(error.message)
        res.status(500).json({message: error.message})
    }
}

export const createVehicle = async(req, res)=>{
    const {vehicle_name, vehicle_type, lisense_plate, price_per_km, user_ID} = req.body;
    try {
        const lisense = await Vehicle.findOne(lisense_plate);
        if(!lisense){
            return res.status(404).json({ message: 'Lisense plate is exist'});
        }
        const vehicle = await Vehicle.create({
            vehicle_name,
            vehicle_type,
            price_per_km,
            lisense_plate,
            user_ID 
        })
        return res.status(201).json({ message: 'Vehicle create successfully', vehicle })
    } catch (error) {
        console.log(error.message)
        res.status(500).json({message: error.message})
    }
}

export const updateVehicle = async(req, res)=>{
    const {id} = req.param;
    const {vehicle_name, vehicle_type, lisense_plate, price_per_km} = req.body;
    try {
        const vehicle = await Vehicle.fineById(id);
        if(!vehicle){
            return res.status(404).json({message:'Vehicle not found'})
        }
        const lisense = await Vehicle.findOne({lisense_plate})
        if(!lisense){
            return res.status(404).json({message:'Lisense plate is exist'})
        }
        vehicle.vehicle_name = vehicle_name;
        vehicle.vehicle_type = vehicle_type;
        vehicle.price_per_km = price_per_km;
        vehicle.lisense_plate = lisense_plate;
    } catch (error) {
        console.log(error.message)
        res.status(500).json({message: error.message})
    }
}

export const deleteVehicle = async(req, res)=>{
    const {id} = req.params;
    try {
        const vehicle = await Vehicle.findByIdAndDelete(id)
        if(!vehicle){
            return res.status(404).json('Vehicle not found')
        }
        return res.status(200).json({ message: 'Vehicle deleted successfully' });
    } catch (error) {
        console.log(error.message)
        res.status(500).json({message: error.message})
    }
}