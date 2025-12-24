import express from "express"
import napoli from "../Napoli.js"

const router = express.Router();

//ora andremo a creare le nostre rotte CRUD

//index
router.get(`/`, (req, res) => {
    const risultato = {
        count : napoli.length,
        valore: napoli
    }
    res.json(risultato)
})

//show
router.get (`/:id`, (req, res) => {

})
//store
router.post(`/`, (req,res) => {
   res.send("post creato")
})

//update
router.put(`/:id`, (req, res) => {
    const id = req.params.id;
    res.send(`il post con id ${id} è stato aggiornato!`)
})

//modify
router.patch(`/:id`, (req, res) => {
    const id = req.params.id;
    res.send(`il post con id ${id} è stato modificato!`)
})
//destroy
router.delete(`/:id`, (req, res) => {
    const id = req.params.id
    res.send(`il post con id ${id} è stato cancellato!`)
})
export default router