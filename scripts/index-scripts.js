"use strict";

angular.module("tapcatWebApp", [ "ngRoute", "restangular" ]).constant("api-url", "http://api.tapcat.net").constant("login-url", "http://api.tapcat.net/login").constant("logout-url", "http://api.tapcat.net/logout").constant("success-login-url", "/app").config([ "$httpProvider", "$routeProvider", "RestangularProvider", "api-url", function($httpProvider, $routeProvider, restangularProvider, apiUrl) {
    $httpProvider.defaults.withCredentials = true;
    restangularProvider.setBaseUrl(apiUrl);
    $routeProvider.when("/", {
        templateUrl: "views/app.html",
        controller: "AppCtrl"
    }).otherwise({
        redirectTo: "/"
    });
} ]);

"use strict";

angular.module("tapcatWebApp").service("personaAuthService", [ "$http", "login-url", "logout-url", "success-login-url", function($http, loginUrl, logoutUrl, successUrl) {
    var login = function(assertion) {
        $http.post(loginUrl, "assertion=" + assertion, {
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            }
        }).success(function() {
            window.location = successUrl;
        }).error(function() {
            navigator.id.logout();
        });
    };
    var logout = function() {
        $http.post(logoutUrl).then(function() {
            window.location = "/";
        });
    };
    navigator.id.watch({
        onlogin: login,
        onlogout: logout
    });
    return {
        login: login,
        logout: logout
    };
} ]);

"use strict";

angular.module("tapcatWebApp").controller("AuthCtrl", [ "$scope", "Restangular", "personaAuthService", function($scope, Restangular) {
    $scope.login = function() {
        navigator.id.request();
    };
    Restangular.one("user").get().then(function() {
        $scope.login = function() {
            window.location = "/app";
        };
    });
} ]);