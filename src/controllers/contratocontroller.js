const db = require('../bd/bd')

exports.contrato = (req, res) => {
    res.render('cadastrarcontrato');
}

exports.contratoanswer = (req, res) => {
    const nomeCliente = req.body.nome;
    const sobrenomeCliente = req.body.sobrenome;
    const emailCliente = req.body.email;
    const numeroCliente = req.body.numero;

    if (numeroCliente.toString().length < 13 || numeroCliente.toString().length > 13) {
        return res.render('cadastrarcontrato', { error: 'O numero deve ter 13 digitos' });
    }

    const sql = 'INSERT INTO Clientecontatos (NOME, SOBRENOME, EMAIL, NUMERO_TEL) VALUES (?,?,?,?)';

    db.query(sql, [nomeCliente, sobrenomeCliente, emailCliente, numeroCliente], (err, result) => {
        if (err) {
            console.error(err);
            return res.render('cadastrarcontrato', { error: 'Erro ao inserir dados no banco de dados.' });
        }
    
        console.log('dados inseridos', result);

    });
    res.redirect('/index');
}
