import Tarea from "../database/models/tarea.js"

export const listarTareas = (req, res)=>{
    console.log('listando tareas')
    res.send('Enviando tareas')
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