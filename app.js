import express from "express"
import postsRouter from "./routers/routes.js"
import errorHandler from "./middlewares/Error.js"
import notFound  from "./middlewares/NotFound.js"

const app = express()
const port = 3000;

app.use(express.json())

app.use(`/posts`, postsRouter)




app.use(errorHandler)
app.use(notFound)

app.listen(port, (err) => {
    if(err) {
        return console.error("Error durante l'avvio. del server", err)
    }else {
        console.log(`questa è la mia porta d'accesso ${port}`)
    }
})