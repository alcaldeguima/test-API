const Atendimento = require('../models/atendimentos')

module.exports = app => {
    app.get('/atendimentos', (req, res) => res.send("atendimentos route por meio de get"));

    app.post('/atendimentos', (req, res)=> {
        const atendimento = req.body
        
        Atendimento.adiciona(atendimento)
        res.send("Post");

    });
}