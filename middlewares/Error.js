const errorHandler = (err, req, res, next) => {
    console.log("Errore")

   res.status(500).json({
    Error: err.message
   })
  
}

export default errorHandler