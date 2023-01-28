import {Express, Request, Response} from "express";
import { createUserHandler} from "./controller/user.controller";
import validateRequest from "./middleware/validateRequest";
import { createUserSchema, createUserSessionSchema} from "./schema/user.schema";
import { createUserSessionHandler, invalidateUserSessionHandler, getUserSessionHandler } from "./controller/session.controller";
import requiresUser from "./middleware/requiresUser";


export default function(app: Express){
  //-Register >>> POST /api/user
  app.post("/api/users", validateRequest(createUserSchema), createUserHandler);
  
  //-Login    >>> POST /api/sessions
  app.post("/api/sessions", validateRequest(createUserSessionSchema), createUserSessionHandler);
  
  //-Get user's session >> GET /api/sessions
  app.get("/api/sessions", requiresUser, getUserSessionHandler);
  
  //-Logout >> DELETE /api/sessions
  app.delete("/api/sessions", requiresUser,invalidateUserSessionHandler);
}