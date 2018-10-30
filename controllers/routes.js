module.exports = function(app){
    
    // Pagina Inicial
    app.get('/', function(req, res){
        res.status(200).render('index');
    });

    app.post('/submete', function(req, res) {
        var voo = req.body;
        console.log(voo);

        // var connection = app.infra.connectionFactoryRPA();
        // var vooDAO = new app.infra.voosDAO(connection);

        // vooDAO.vooInsere(voo, function(err, results) {
        //     console.log(err);
        //     res.redirect("/index")
            
        // });

        res.status(200).render('index');
        // connection.end();
    });

}

// app.get('/busca', function(req, res) {
//     var connection = app.infra.connectionFactory();
//     var medicosDAO = new app.infra.MedicosDAO(connection);
    
//     medicosDAO.listaMedicos(function(err, results) {
//         console.log(err);
//         res.render('medicos/busca', {results:results});
        
//     });
// });