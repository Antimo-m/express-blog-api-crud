 const notFound = (req,res, next) => {
    console.log("NotFound")
    res.status(404).json({
        Error : "errore 404, pagina non trovata"
    })
 }

 export default notFound