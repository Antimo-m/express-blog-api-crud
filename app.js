import express from "express"
import postsRouter from "./routers/routes.js"

const app = express()
const port = 3000;

app.use(express.json())

app.use(`/posts`, postsRouter)



app.listen(port, () => {
    console.log(`questa è la mia porta d'accesso ${port}`)
})