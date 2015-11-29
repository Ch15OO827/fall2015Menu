angular.module('app')
.service('drinkService', function($http, $q){
    return {
        get: function(){
            return $http.get("/drinks");
        },
        post: function(row){
            return $http.post('/drinks/', row);
        },
        delete: function(id){
            $http.delete('/drinks/' + id);
        }
    };
});