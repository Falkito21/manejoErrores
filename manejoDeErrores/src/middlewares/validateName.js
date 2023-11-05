import { ClientError } from './../utils/errors.js'
export const validateName = (req, res, next) => {
    const { name } = req.query ?? req.body
    if(name && name.inclue("@")) throw new ClientError('Invalid name', 400)
    next() //liberamos la req 
}
