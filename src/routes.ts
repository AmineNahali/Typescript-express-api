import {Express, Request, Response} from "express";
import { createUserHandler } from "./controller/user.controller";
import validateRequest from "./middleware/validateRequest";
import { createUserSchema } from "./schema/user.schema";


export default function(app: Express){
    app.get("/", (req:Request, res:Response)=>{
        res.json({"msg":"welcome to the matrix"})
    });

    //-Register >>> POST /api/user
    app.post("/api/users", validateRequest(createUserSchema),createUserHandler)
    //-Login    >>> POST /api/sessions

    //-Get user's session >> GET /api/sessions

    //-Logout >> DELETE /api/sessions
}