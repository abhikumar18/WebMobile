import { User } from "../models/users.js";

export const register = async(req,res) => {
    try {

        const {name,email,password} = req.body;
        const {avatar} = req.files;

        let user = await User.findOne({email});

        if(user){
            return res
            .status(400)
            .json({ success: false, message: "User already exists" });
        }
        
    } catch (error) {
        
    }
}