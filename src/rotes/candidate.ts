import { Request, Response } from "express";
import { initDatabase } from "../services/candidate";

export const sid = async(req:Request,res:Response)=>{
    try {
        await initDatabase()
        res.sendStatus(201)
    } catch (error) {
        
    }
}