import { app } from './app.js';
import {config} from 'dotenv';

config({
    path:"./config/config.env"
})


app.listen(process.env.PORT,()=>{
    console.log("Server is running on port "+process.env.PORT);
});