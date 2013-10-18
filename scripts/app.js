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

angular.module("tapcatWebApp").controller("AppCtrl", [ "$scope", "Restangular", function(a, b) {
    a.user = b.one("user").get();
} ]);