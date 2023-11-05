import { moviesService } from './../services/moviesService.js'
import { catchedAsync } from './../utils/catchedAsync.js'
import {response} from './../utils/response.js'

const getMovies = async (req, res) => {
        const { name } = req.body

        const movies = name 
                ? await moviesService.getMovieByName(name)
                : await moviesService.getAllMovies()
        response(res, 200 , movies)
};

const getMovieById = async (req, res) => {
        const {id} = req.body
        const movie = await moviesService.getMoviesById(id)
        response(res, 200, movie)
}

export const moviesController = {
        gettingMovies : catchedAsync(getMovies)
        ,gettingMovieById : catchedAsync(getMovieById)
}
