angular.module("rockyMtnHops", ["ngRoute"])
  .config(Router);

Router.$inject=["$routeProvider"];

function Router($routeProvider) {
    $routeProvider

    .when('/', {
      templateUrl: "/views/home.html"
    })
    .when('/contact', {
      templateUrl: "/views/contact.html"
    })
    .otherwise({
      redirectTo: "/"
    });
}
