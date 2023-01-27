import { DocumentDefinition } from "mongoose";
import User, {UserDocument} from "../model/user.model";

export async function createUser(input: DocumentDefinition<UserDocument>){
    try{
        return await User.create(input);
    }catch(e){
        throw new Error(e as string);
    }
}

function findUser(){
    return
}