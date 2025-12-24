import napoli from "../Napoli.js"

//Index
const index = (req, res) => {
    const risultato = {
        count: napoli.length,
        valore: napoli
    }
    res.json(risultato)
}


//Show
const show = (req, res) => {
    const id = parseInt(req.params.id);
    const post = napoli.find(p => p.id === id)

    if (post) {
        res.json(post)
    } else {
        res.json({ message: `il post con id ${id} non è stato trovato` }) //message per restiture l'errore in formato json
    }
}

//Store
const store = (req, res) => {
    res.json({ message: `Il post è stato Creato` })
}


//Update
const update = (req, res) => {
    const id = req.params.id;
    res.json({message : `il post con id ${id} è stato aggiornato!`})
}


//Modify
const modify = (req,res) => {
 const id = req.params.id;
res.json({message: `il post con id ${id} è stato modificato!`})
}


const destroy = (req,res) => {
    const id = req.params.id
    res.json({message: `il post con id ${id} è stato cancellato!`})
}

export default { index, show, store, update, modify, destroy}