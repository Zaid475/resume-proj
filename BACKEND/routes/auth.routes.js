import { Router } from "express";
import { Login, Register} from "../controllers/auth.controller.js";

const routes = Router()

routes.post("/login", Login)
routes.post("/register",Register)
// routes.post("/UserData",UserData)

export default routes