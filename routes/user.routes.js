//introducir las rutas como están con la colección characters. Para probar autentificación. A día 24/04 funciona correctamente si
//intentamos modificar algo de la API sin logearnos
import express from "express";
import {
    createUser,
    getUsers,
    loginUser,
    logoutUser,
} from "../controllers/user.controller.js";

const router = express.Router();

router.post("/register", createUser);
router.get("/list", getUsers)
router.post("/login", loginUser);
router.post("/logout", logoutUser);

export { router as userRoutes };