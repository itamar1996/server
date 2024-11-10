import { Router } from "express";
import { sid } from "../rotes/candidate";

const router = Router() 

router.post('/sid',sid)


export default router