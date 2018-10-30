function voosDAO(connection) {
    this._connection = connection;
}

// voosDAO.prototype.listaMedicos = function(callback) {
//     this._connection.query('select * from medicos', callback);
// }

voosDAO.prototype.vooInsere = function(voo, callback) {
    this._connection.query('INSERT INTO voos SET ?', voo, callback);
}

// MedicosDAO.prototype.medicosDeleta = function(callback) {
//     this._connection.query('DELETE FROM medicos', callback);
// }

module.exports = function(){
    return voosDAO;
};