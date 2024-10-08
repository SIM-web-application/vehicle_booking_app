import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dayjs from 'dayjs';
import 'dotenv/config';
import UsersRoutes from './routes/user.js'
import VehiclesRoutes from './routes/vehicle.js'

const app = express();
app.use(express.json());
app.use(cors())

const port = process.env.PORT || 5000;
app.use('api/users/', UsersRoutes)
app.use('api/Vehicles/', VehiclesRoutes)

app.get('/', (req, res) => res.send('Kiểm tra kết nối thành công!'))

mongoose
    .connect(process.env.mongoDB_URL)
    .then(()=>{
        console.log("app connect to database");
        app.listen(port, () => console.log(`App listening on port ${port}!`));
        console.log(dayjs().format('YYYY-MM-DD HH:mm:ss'));
        console.log("thời gian hiện tại:"+ new Date(Date.now()).toLocaleString('vi-VN', { timeZone: 'UTC' }));        
    })
    .catch((error)=>{
        console.log('lỗi database',error);
        console.error("Lỗi kết nối tới MongoDB:", error);
    })