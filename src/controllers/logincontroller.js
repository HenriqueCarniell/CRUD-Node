const db = require('../bd/bd')

exports.login = (req, res) => {
    res.render('login');

    const sql = 'SELECT * FROM CLIENTE;'

    db.query(sql)
    .then(([rows, fields]) => {
        res.render('login', { accounts: rows });
    })
    .catch((err) => {
        throw err
    })
}

exports.loginAnswer = (req,res) => {

    // pegar os dados do documento em ejs
    const nomecreate = req.body.nomecreate;
    const emailcreate = req.body.emailcreate;
    const senhacreate = req.body.senhacreate;

    console.log(nomecreate, emailcreate, senhacreate);

    const sql = 'INSERT INTO CLIENTE(NOME, EMAIL, SENHA) VALUES (?,?,?);'

    if(!senhacreate) {
        return res.render('login', {errorsenha: 'A senha não pode ser nula'});
    }

    db.query(sql,[nomecreate, emailcreate, senhacreate], (err, result) => {
        if(err) {
            console.log(err);
        } else {
            console.log('dados inseridos', result);
        }
    });
    res.redirect('/login/index');
}
