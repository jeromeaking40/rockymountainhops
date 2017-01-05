angular.module("rockyMtnHops").controller("mainCtrl", mainController);

mainController.$inject = ["$http"];

function mainController($http) {
    var main = this;
    console.log("test");

    main.getBeer = function() {
        $http({
            method: "GET",
            url: '/search',
            params: {
                name: main.beerSearch
            }
        }).then(function(res, status) {
            console.log(res.data);
            main.beerData = res.data;
        }, function(res, status) {
            console.log("Failure:", status);
        });
    };
    main.getBeer();
}
