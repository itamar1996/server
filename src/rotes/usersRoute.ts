import { Request, Response } from "express";
import userDTO from "../DTO/userDTO";
import { loginUser, registerUser } from "../services/userService";
import loginDTO from "../DTO/loginDTO";

export const register = async(
    req:Request <any,any ,userDTO>,
    res:Response
)=>{
    try {        
        const result = await registerUser(req.body)
        res.send(result)
        return
    } catch (error) {
        console.log(error);
    }
}

export const login = async(
    req:Request <any,any ,loginDTO>
    ,res:Response
)=>{
    try {        
        const result = await loginUser(req.body)
        res.send(result)
        return
    } catch (error) {
        console.log(error);
    }
}