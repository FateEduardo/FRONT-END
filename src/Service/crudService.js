app.factory('CrudGeneral',function($http,$q,$window)){
    var crud = {
        
    }
    var URL='http://localhost:8080/jpaproject/Cart';
            
    function get(){
        var deferred = $q.defer();
        $http.get(URL+'/List')
            .then(
            function (response) {
                deferred.resolve(response.data);
            },
            function(errResponse){
                console.error('Error while fetching Users');
                deferred.reject(errResponse);
            }
        );
        return deferred.promise;
    }
    
});