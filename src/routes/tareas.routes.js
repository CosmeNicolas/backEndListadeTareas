import { Router } from "express";
import { borrarTarea, crearTarea, editarTarea, listarTareas, obtenerTarea } from "../controllers/tareas.controllers.js";

const router = Router()
//como creo las rutas 

router.route('/tareas').get(listarTareas).post(crearTarea)
router.route('/tareas/:id').get(obtenerTarea).put(editarTarea).delete(borrarTarea)


export default router;
