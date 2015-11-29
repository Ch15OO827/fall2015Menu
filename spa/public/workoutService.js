angular.module('app')
.service('workoutService', function($http, $q){
    return {
        get: function(){
            return $http.get("/workout");
        },
        post: function(row){
            return $http.post('/workout/', row);
        },
        delete: function(id){
            $http.delete('/workout/' + id);
        }
    };
});