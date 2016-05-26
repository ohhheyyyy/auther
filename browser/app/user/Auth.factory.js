'use strict';

app.factory('AuthFactory', function($http, $log, $state) {

    var auth = {
        signup: function(credentials) {
            return $http.post('/api/users', credentials)
                .then(function(user) {
                    $log.info("here's the user status: ", user.status);
                    if (user.status === 201) {
                        $state.go('stories');
                    }
                })
                .catch(function(err) {
                    $log.error(err);
                });
        },

        login: function(credentials) {
            return $http.post('/api/login', credentials)
                .then(function(user) {
                    $log.info("here's the user status: ", user.status);
                    if (user.status === 204) {
                        $state.go('stories');
                    }
                })
                .catch(function(err) {
                    $log.error(err);
                });
        }
    };
    return auth;
});
