import {Express, Request, Response} from "express";
import { createUserHandler} from "./controller/user.controller";
import validateRequest from "./middleware/validateRequest";
import { createUserSchema, createUserSessionSchema} from "./schema/user.schema";
import { createUserSessionHandler } from "./controller/session.controller";


export default function(app: Express){
    app.get("/", (req:Request, res:Response)=>{res.json({"msg":"welcome to the matrix"})});

    //-Register >>> POST /api/user
    app.post("/api/users", validateRequest(createUserSchema),createUserHandler);
    //-Login    >>> POST /api/sessions
    app.post(
        "/api/sessions",
        validateRequest(createUserSessionSchema),
        createUserSessionHandler
      );
    //-Get user's session >> GET /api/sessions

    //-Logout >> DELETE /api/sessions
}