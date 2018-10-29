module.exports = function(app){
    
    // Pagina Inicial
    app.get('/', function(req, res){
        res.status(200).render('index');
    });

}