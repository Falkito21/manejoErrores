// funcion de orden superior
// recibe, ejecuta y cachea controlador
// caso error: lo envia al manejador de errores de express
export const catchedAsync = (fn) => {
  return async (req, res, next) => {
    try {
      await fn(req, res)
    } catch (error) {
      next(error)
    }
  }
}

