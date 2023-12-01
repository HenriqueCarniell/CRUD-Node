const db = require('../bd/bd')

exports.home = (req, res) => {
    const sql = 'SELECT * FROM Clientecontatos;';

    db.query(sql)
        .then(([rows, fields]) => {
            res.render('home', { contratos: rows });
        })
        .catch(err => {
            throw err;
        });
}
