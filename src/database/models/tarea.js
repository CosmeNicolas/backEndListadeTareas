import mongoose, {Schema} from 'mongoose';

const tareaSchema =  new Schema ({
    type:String,
    minLength:3,
    maxLength:50,
    unique:true
})

const Tarea = mongoose.model('tarea', tareaSchema)

export default Receta