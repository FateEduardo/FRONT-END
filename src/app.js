var app = angular.module("app", ['ngRoute', 'app.controllers']);
app.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: '../views/login.html',
            controller: 'loginCtrl'
        })
        .when('/login', {
            templateUrl: '../views/login.html',
            controller: 'loginCtrl'
        })
        .when('/logout', {
            templateUrl: '../views/inactivo.html',
        })
        .when('/CAEF/usuario/listar', {
            templateUrl: '../views/listaUsuarios.html',
            controller: 'usuarioCtrl'

        })
        .when('/CAEF', {
            templateUrl: '../views/inicio.html',
        })
        .when('/CAEF/usuario/agregar', {
            templateUrl: '../views/agregarUsuario.html',
        })
        .otherwise({
            redirectTo: '/login'
        })

});

app.run(function ($rootScope, $location) {
    $rootScope.$on("$routeChangeStart", function (event, next, current) {
        if ($rootScope.loggedUser != null) {
            // no logged user, we should be going to #login
            if (next.templateUrl == "/login") {
                // already going to #login, no redirect needed
            } else {
                // not going to #login, we should redirect now
                $location.path("/login");
            }
        }
    });
})
