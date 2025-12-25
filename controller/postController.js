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
    const newid = napoli[napoli.length -1].id +1;// andiamo a generare l'id manualmente

    
    const newPost = {
        id:newid,
        ...req.body
    }; //creiamo un nuovo oggetto passandogli l'id e copiando i dati dal request

    napoli.push(newPost)//pushiamo il tutto nel nostro array napoli, 
    console.log(req.body)
    res.status(201).json(newPost)//mostriamo la rispsota
}


//Update
const update = (req, res) => {
    const id = parseInt(req.params.id);
    const postIndex = napoli.findIndex(post => post.id === id)//cerchiamo l'indice del post corrispondente all'id passato nell'url

    napoli[postIndex] = {
        id, 
        ...req.body
    } // sovrasciviamo il post trovato con i dati passati nel body mantendo lo stesso id

    res.json(napoli[postIndex]) //mostriamo il post aggiornato
    
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