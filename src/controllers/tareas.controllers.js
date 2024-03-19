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

export const obtenerTarea = async(req, res)=>{
    try {
        const tareaBuscada = await Tarea.findById(req.params.id)
        if(!tareaBuscada){
            return res.status(404).json({mensaje: 'No se encontro la tarea con el id enviado'})
        }
        res.status(200).json(tareaBuscada)
    } catch (error) {
        console.log(error)
        res.status(500).json({mensaje: 'No se encontro la tarea'})
    }
}

export const editarTarea = async (req, res)=>{
    try {
        const tareaBuscada = await Tarea.findById(req.params.id)
        if(!tareaBuscada){
            return res.status(404).json({mensaje:'No se encontro la receta que queremos editar'})
        }
        await Tarea.findByIdAndUpdate(req.params.id, req.body)
        res.status(200).json({mensaje:'Tarea editada con éxito'})
    } catch (error) {
        console.log(error)
        res.status(500).json({memsaje:'error interno en la solicitud, no se edito el producto' })
    }
}

export const borrarTarea = async(req, res)=>{
    try {
        const tareaBuscada = await Tarea.findById(req.params.id)
        if(!tareaBuscada){
            return res.status(404).json({mensaje:'No se Borro la receta'})
        }
        await Tarea.findByIdAndDelete(req.params.id)
        res.status(200).json({mensaje:'Tarea borrada exitosamente'})
    } catch (error) {
        console.log(error)
        res.status(500).json({mensaje:'Error interno en la solicitud, no se elimino la tarea'})
    }
}
