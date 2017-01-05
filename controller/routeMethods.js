var request = require('request');

module.exports = {
    search: function (req, res) {
        request('http://api.brewerydb.com/v2/locations/' + '?locality=Denver&key=be731d5ffc5bd2b32ec45e247941f591&name=' + req.query.name, function(err, response, body) {
            if (err) {
                console.log('There is a error', err);
            } else {
              console.log(body);
                res.send(body);
            }
        });
    }
};
