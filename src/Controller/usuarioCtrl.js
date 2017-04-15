appController.controller("usuarioCtrl", function ($scope, $location, $rootScope) {
    $scope.regex = {
        'correo': '^.*uabc.edu.mx.*$',
        'number': '/[a-z]/'
    };
    $scope.usuarios = [{
            'id': 1,
            'nombre': 'Eduardo',
            'apellidoPaterno': 'Escalona',
            'correo': 'a338694@uabc.edu.mx',
            'rol': 'Directivo'
                     },
        {
            'id': 2,
            'nombre': 'Yari',
            'apellidoPaterno': 'Perez',
            'correo': 'yarithza.perez@uabc.edu.mx',
            'rol': 'Directivo'
                     }]
    $scope.usuario = {};
    $scope.roles = [{
            'id': 1,
            'nombre': 'Directivo'
                 },
        {
            'id': 2,
            'nombre': 'Profesor'
                 }
    ]
});
