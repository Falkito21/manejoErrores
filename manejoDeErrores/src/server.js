import express from 'express'
import morgan from 'morgan'
import { router } from './routes/router.js'
import { resError } from './utils/resError.js'

export const server = express() 

server.use(morgan("dev")) //indicamos como queremos que registre y formatee las respuestas HTTP
server.use(express.json())

server.use(router)


//pisamos nuestro manejador de errores
server.use((error, req, res, next) => { //como recibe cuatro parametros ahora sabe que es el nuevo manejador de errores 
    const {statusCode, message} = error
    resError(res, statusCode, message)
})