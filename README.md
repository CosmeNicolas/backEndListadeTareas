# Backend Lista de Tareas 📝

Este es el backend de una aplicación de lista de tareas desarrollada con MongoDB, Express y Node.js.

## Configuración del Proyecto

1. **Clonar el Repositorio:**

git clone https://github.com/CosmeNicolas/backEndListadeTareas.git

2. **Instalar Dependencias:**

cd BackEnd
npm install

3. **Configurar Variables de Entorno:**
- Crea un archivo `.env` en el directorio raíz del proyecto.
- Agrega las siguientes variables de entorno:

PORT=4004
MONGODB_URI=tu_uri_de_mongodb

## Estructura del Proyecto

El proyecto sigue una estructura MVC (Modelo-Vista-Controlador) para organizar el código:

- **`controllers/`:** Contiene los controladores que manejan la lógica de negocio de las tareas.
- **`models/`:** Define los modelos de datos utilizando Mongoose.
- **`routes/`:** Define las rutas de la API utilizando Express Router.
- **`app.js`:** Archivo principal donde se configura y se ejecuta la aplicación de Express.

## Ejecución del Proyecto

Para ejecutar el proyecto, puedes usar el siguiente comando:

npm run dev 

Esto iniciará el servidor en el puerto especificado en las variables de entorno (`PORT`). Por defecto, el servidor se ejecutará en el puerto 4004.

## API Endpoints

El backend proporciona los siguientes endpoints para gestionar las tareas:

- **`GET /api/tareas`**: Obtener todas las tareas.
- **`POST /api/tareas`**: Crear una nueva tarea.
- **`GET /api/tareas/:id`**: Obtener una tarea por su ID.
- **`PUT /api/tareas/:id`**: Actualizar una tarea existente.
- **`DELETE /api/tareas/:id`**: Eliminar una tarea por su ID.

## Tecnologías Utilizadas

- **MongoDB:** Base de datos NoSQL para almacenar las tareas.
- **Express:** Framework de Node.js para construir la API RESTful.
- **Node.js:** Entorno de ejecución para JavaScript del lado del servidor.

## Contribuyendo

Si quieres contribuir a este proyecto, ¡eres bienvenido! Puedes abrir una nueva issue o enviar un pull request con tus cambios.
