import { Router } from "express"
import { moviesController } from "./../controllers/moviesController.js"
import { validateName } from './../middlewares/validateName.js'

export const router = Router()
//express tiene un manejador de errores <---
router.get('/movies', validateName, moviesController.gettingMovies)
router.get('/movies/:id', validateName, moviesController.gettingMovieById)
router.get('*', validateName)
