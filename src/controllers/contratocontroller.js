const db = require('../bd/bd')

exports.contrato = (req,res) => {
    res.render('cadastrarcontrato')
}

exports.contratoanswer = (req,res) => {
    const nomeCliente = req.body.nome
    const sobrenomeCliente = req.body.sobrenome
    const emailCliente = req.body.email
    const numeroCliente = req.body.numero

    if(numeroCliente.toString().length < 11 ) {
        res.render('cadastrarcontrato', {error: 'O numero deve ter pelo menos 11 digitos'})
    } else {
        const sql = 'insert into Cliente (NOME, SOBRENOME, EMAIL, NUMERO_TEL) VALUES (?,?,?,?)'

        db.query(sql,[nomeCliente, sobrenomeCliente, emailCliente, numeroCliente], (err, result) => {
            if(err) {
                throw err;
            } else {
                console.log('dados inseridos', result);
            }
        });
    };

    
    console.log(nomeCliente, sobrenomeCliente, emailCliente, numeroCliente);
    
    res.send('foi');
}
