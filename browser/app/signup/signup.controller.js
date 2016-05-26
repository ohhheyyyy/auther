'use strict';

app.controller('SignupCtrl', function($scope, $http, $state, $log, AuthFactory) {
    $scope.submitSignup = function() {
        var credentials = $scope.signup;
        return AuthFactory.signup(credentials);
    };
});
