//importamos express 
import express  from 'express'
import 'dotenv/config'
import cors from 'cors'
import morgan from 'morgan';


//configuar puerto 
 const app = express();
 app.set('port', process.env.PORT || 4000);
 app.listen(app.get('port'),()=>{
    console.log('estoy en el puerto' + app.get('port'))
 })
//config middleware
app.use(cors())
app.use(morgan('dev'))


//config  rutas , http://localhost:3000/productos
app.get('/', (req, res)=>{
    console.log('procesando respuesta')
    res.send('respuesta del back de tareas ')
})