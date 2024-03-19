import Tarea from "../database/models/tarea.js"

export const listarTareas = async(req, res)=>{
    try {
        const tareas = await Tarea.find()
        res.status(200).json({mensaje: tareas})
    } catch (error) {
        console.log(error)
        res.tatus(500).json({mensaje: 'Error al buscar tareas'})
    }
}

export const  crearTarea = async(req, res)=>{
    try {
        const tareaNueva = new Tarea(req.body)
        await tareaNueva.save()
        res.status(201).json({mensaje: 'Tarea Creada Exitosamente'})
    } catch (error) {
        console.log(error)
        res.status(400).json({mensaje: 'La tarea no  fue creada'})
    }
}