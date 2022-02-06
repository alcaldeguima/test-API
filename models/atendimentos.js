const conexao = require('../infraestrutura/conexao')

class Atendimento {
    adiciona(atendimento){
        const sql = 'INSERT INTO Atendimentos SET ?'

        conexao.query(sql, atendimento, (erro, result)=>{
            if(erro){
                console.log(erro)
            }else{
                console.log(result)
            }
        })
    }
}

module.exports = new Atendimento