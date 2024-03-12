//importamos express 
import express from 'express'
import 'dotenv/config'
import cors from 'cors'
import morgan from 'morgan';
import path from 'path';
import { fileURLToPath } from 'url';
import listarTareas from './src/routes/tareas.routes.js';
import './src/database/database.js'


//configuar puerto 
 const app = express();
 app.set('port', process.env.PORT || 4000);
 app.listen(app.get('port'),()=>{
    console.log('estoy en el puerto' + app.get('port'))
 })
//config middleware
app.use(cors())
app.use(morgan('dev'))
app.use(express.json()); //permite interpretar en formato json
app.use(express.urlencoded({extended:true}))//interpreta los datos del body del request
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename);
app.use(express.static(path.join(__dirname,'/public'))) 


//config  rutas , http://localhost:3000/productos
app.use('/api', listarTareas) 



/* app.get('/nuevo', (req, res)=>{
    console.log('procesando respuesta')
    res.send('respuesta del back de tareas ')
});
 */
 

