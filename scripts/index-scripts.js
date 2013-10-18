"use strict";

angular.module("tapcatWebApp", [ "ngRoute", "restangular" ]).constant("api-url", "http://api.tapcat.net").constant("login-url", "http://api.tapcat.net/login").constant("logout-url", "http://api.tapcat.net/logout").constant("success-login-url", "/app").config([ "$httpProvider", "$routeProvider", "RestangularProvider", "api-url", function(a, b, c, d) {
    a.defaults.withCredentials = true;
    c.setBaseUrl(d);
    b.when("/", {
        templateUrl: "views/app.html",
        controller: "AppCtrl"
    }).otherwise({
        redirectTo: "/"
    });
} ]);

"use strict";

angular.module("tapcatWebApp").service("personaAuthService", [ "$http", "login-url", "logout-url", "success-login-url", function(a, b, c, d) {
    var e = function(c) {
        a.post(b, "assertion=" + c, {
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            }
        }).success(function() {
            window.location = d;
        }).error(function() {
            navigator.id.logout();
        });
    };
    var f = function() {
        a.post(c).then(function() {
            window.location = "/";
        });
    };
    navigator.id.watch({
        onlogin: e,
        onlogout: f
    });
    return {
        login: e,
        logout: f
    };
} ]);

"use strict";

angular.module("tapcatWebApp").controller("AuthCtrl", [ "$scope", "Restangular", "personaAuthService", function(a, b) {
    a.login = function() {
        navigator.id.request();
    };
    b.one("user").get().then(function() {
        a.login = function() {
            window.location = "/app";
        };
    });
} ]);