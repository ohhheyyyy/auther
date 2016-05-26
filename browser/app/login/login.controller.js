'use strict';

app.controller('LoginCtrl', function($scope, $http, $state, $log, AuthFactory) {
    $scope.submitLogin = function() {
      var credentials = $scope.login;
      return AuthFactory.login(credentials);
    };
}); 