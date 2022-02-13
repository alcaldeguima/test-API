const moment = require('moment')
const conexao = require('../infraestrutura/conexao')

class Atendimento {
    adiciona(atendimento, res){
        const dataCriacao = moment().format('YYYY-MM-DD HH:mm:ss')
        const data = moment(atendimento.data, 'DD/MM/YYYY').format("YYYY-MM_DD  HH:MM:SS")

        const dataValida = moment(data).isSameOrAfter(dataCriacao)
        const clienteValido = atendimento.cliente.lenght >= 5

        const validacoes = [
            {   nome: 'data',
                valido: dataValida,
                mensagem: 'Data invalida'
            } 
            ,
            {
                nome: 'cliente',
                valido: clienteValido,
                mensagem: 'Cliente deve ter no minimo 5 caracteres'
            }  
        ]

        const erros = validacoes.filter(campo => !campo.valido )
        const temErros = erros.length
        
        if(temErros){
            res.status(400).json(erros)
        }else{
            const atendimentoData = {...atendimento, dataCriacao, data}
            const sql = 'INSERT INTO Atendimentos SET ?'
    
            conexao.query(sql, atendimentoData, (erro, result)=>{
                if(erro){
                    res.status(400).json(erro)
                }else{
                    res.status(201).json(result)
                }
            })
        }
    }
}
        
        

module.exports = new Atendimento