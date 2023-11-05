import { ClientError } from './../utils/errors.js'
const data = [
    {
        id: 1,
        title:"Titanic",
    },
    {
        id:2,
        title:"Interestellar"
    },{
        id:3,
        title:"Mision Imposible"
    }
]
const getAllMovies = async() => {
    return data
}

const getMoviesById = async(id) => {
    const movie = data.find((e) => e.id == id)
    if(!movie) throw new ClientError('Invalid Id', 400)
    await verificarQueNoSeQue()
    return movie
}

const verificarQueNoSeQue = async () => {
    await verificarTuHermana()
    throw new ClientError('Error de los huevos', 401)
}
const verificarTuHermana = async () => {
    throw new ClientError('la concha de tu hermana', 404)
}

const getMovieByName = async (name) => {
    const movie = data.filter((e) => e.title == name)
    if(!movie[0]){
        return data
    } 
    return movie 
}

export const moviesService = {
    getAllMovies,
    getMoviesById,
    getMovieByName,
}