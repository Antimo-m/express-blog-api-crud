const index = (req, res) => {
    const risultato = {
        count: napoli.length,
        valore: napoli
    }
    res.json(risultato)}

    const show = (req,res) => {
        const id = parseInt(req.params.id);
        const post = napoli.find(p => p.id === id)

        if (post) {
            res.json(post)
        } else {
            res.json({ message: `il post con id ${id} non è stato trovato` }) //message per restiture l'errore in formato json
        }
    }