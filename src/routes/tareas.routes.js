import { Router } from "express";
import { crearTarea, listarTareas } from "../controllers/tareas.controllers.js";

const router = Router()
//como creo las rutas 

router.route('/tareas').get(listarTareas).post(crearTarea)



export default router;
