angular.module("rockyMtnHops")
    .controller("mainCtrl", mainController);

mainController.$inject = ["$http"];

function mainController($http) {
    var main = this;
    console.log("test");

    main.getBeer = function() {
        $http.get("http://api.brewerydb.com/v2/locations?locality=Boulder&key=be731d5ffc5bd2b32ec45e247941f591")
            .then(function(res, status) {
                    console.log(res.data);
                    main.beerData = res.data;
                },
                function(res, status) {
                    console.log("Failure:", status);
                });
    };
    main.getBeer();
}
