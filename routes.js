var routeMeth = require('./controller/routeMethods');

module.exports = function(app) {
    //SEARCH ROUTE
    app.get('/search', routeMeth.search);
};
