import bcrypt from "bcrypt";
import userDTO from "../DTO/userDTO";
import User, { IUser } from "../models/user";
import loginDTO from "../DTO/loginDTO";

export const registerUser = async (userDetails: userDTO): Promise<IUser | void> => {
    try {
        const hashedPassword = await bcrypt.hash(userDetails.password, 10);

    const user = new User({
        username: userDetails.username,
        password: hashedPassword,
        isAdmin:userDetails.isAdmin
    });

    const savedUser = await user.save(); 

    return savedUser;

    } catch (error) {
        console.log("eror register",error);
        return
    }
};
export const loginUser = async (userDetails: loginDTO): Promise<string> => {
    try {
        const user = await User.findOne({ username: userDetails.username });
        if (!user) {
            return "User not found";
        }
        const isPasswordMatch = await bcrypt.compare(userDetails.password, user.password)
        if(!isPasswordMatch){
            return "password not corect"
        }
    return "sucses"; 
    } catch (error) {
        console.log("eror register",error);
        return "not sucses"
    }
};