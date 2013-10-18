(function(a, b, c) {
    "use strict";
    function d(a) {
        return function() {
            var b = arguments[0], c = "[" + (a ? a + ":" : "") + b + "] ", d = arguments[1], e = arguments, f = function(a) {
                if (O(a)) {
                    return a.toString().replace(/ \{[\s\S]*$/, "");
                } else if (H(a)) {
                    return "undefined";
                } else if (!K(a)) {
                    return JSON.stringify(a);
                }
                return a;
            }, g, h;
            g = c + d.replace(/\{\d+\}/g, function(a) {
                var b = +a.slice(1, -1), c;
                if (b + 2 < e.length) {
                    c = e[b + 2];
                    if (O(c)) {
                        return c.toString().replace(/ ?\{[\s\S]*$/, "");
                    } else if (H(c)) {
                        return "undefined";
                    } else if (!K(c)) {
                        return ib(c);
                    }
                    return c;
                }
                return a;
            });
            g = g + "\nhttp://errors.angularjs.org/" + Bb.full + "/" + (a ? a + "/" : "") + b;
            for (h = 2; h < arguments.length; h++) {
                g = g + (h == 2 ? "?" : "&") + "p" + (h - 2) + "=" + encodeURIComponent(f(arguments[h]));
            }
            return new Error(g);
        };
    }
    var e = function(a) {
        return K(a) ? a.toLowerCase() : a;
    };
    var f = function(a) {
        return K(a) ? a.toUpperCase() : a;
    };
    var g = function(a) {
        return K(a) ? a.replace(/[A-Z]/g, function(a) {
            return String.fromCharCode(a.charCodeAt(0) | 32);
        }) : a;
    };
    var h = function(a) {
        return K(a) ? a.replace(/[a-z]/g, function(a) {
            return String.fromCharCode(a.charCodeAt(0) & ~32);
        }) : a;
    };
    if ("i" !== "I".toLowerCase()) {
        e = g;
        f = h;
    }
    var i, j, k, l = [].slice, m = [].push, n = Object.prototype.toString, o = d("ng"), p = a.angular, q = a.angular || (a.angular = {}), r, s, t = [ "0", "0", "0" ];
    i = C((/msie (\d+)/.exec(e(navigator.userAgent)) || [])[1]);
    if (isNaN(i)) {
        i = C((/trident\/.*; rv:(\d+)/.exec(e(navigator.userAgent)) || [])[1]);
    }
    function u(a) {
        if (a == null || Q(a)) {
            return false;
        }
        var b = a.length;
        if (a.nodeType === 1 && b) {
            return true;
        }
        return K(a) || N(a) || b === 0 || typeof b === "number" && b > 0 && b - 1 in a;
    }
    function v(a, b, c) {
        var d;
        if (a) {
            if (O(a)) {
                for (d in a) {
                    if (d != "prototype" && d != "length" && d != "name" && a.hasOwnProperty(d)) {
                        b.call(c, a[d], d);
                    }
                }
            } else if (a.forEach && a.forEach !== v) {
                a.forEach(b, c);
            } else if (u(a)) {
                for (d = 0; d < a.length; d++) b.call(c, a[d], d);
            } else {
                for (d in a) {
                    if (a.hasOwnProperty(d)) {
                        b.call(c, a[d], d);
                    }
                }
            }
        }
        return a;
    }
    function w(a) {
        var b = [];
        for (var c in a) {
            if (a.hasOwnProperty(c)) {
                b.push(c);
            }
        }
        return b.sort();
    }
    function x(a, b, c) {
        var d = w(a);
        for (var e = 0; e < d.length; e++) {
            b.call(c, a[d[e]], d[e]);
        }
        return d;
    }
    function y(a) {
        return function(b, c) {
            a(c, b);
        };
    }
    function z() {
        var a = t.length;
        var b;
        while (a) {
            a--;
            b = t[a].charCodeAt(0);
            if (b == 57) {
                t[a] = "A";
                return t.join("");
            }
            if (b == 90) {
                t[a] = "0";
            } else {
                t[a] = String.fromCharCode(b + 1);
                return t.join("");
            }
        }
        t.unshift("0");
        return t.join("");
    }
    function A(a, b) {
        if (b) {
            a.$$hashKey = b;
        } else {
            delete a.$$hashKey;
        }
    }
    function B(a) {
        var b = a.$$hashKey;
        v(arguments, function(b) {
            if (b !== a) {
                v(b, function(b, c) {
                    a[c] = b;
                });
            }
        });
        A(a, b);
        return a;
    }
    function C(a) {
        return parseInt(a, 10);
    }
    function D(a, b) {
        return B(new (B(function() {}, {
            prototype: a
        }))(), b);
    }
    function E() {}
    E.$inject = [];
    function F(a) {
        return a;
    }
    F.$inject = [];
    function G(a) {
        return function() {
            return a;
        };
    }
    function H(a) {
        return typeof a == "undefined";
    }
    function I(a) {
        return typeof a != "undefined";
    }
    function J(a) {
        return a != null && typeof a == "object";
    }
    function K(a) {
        return typeof a == "string";
    }
    function L(a) {
        return typeof a == "number";
    }
    function M(a) {
        return n.apply(a) == "[object Date]";
    }
    function N(a) {
        return n.apply(a) == "[object Array]";
    }
    function O(a) {
        return typeof a == "function";
    }
    function P(a) {
        return n.apply(a) == "[object RegExp]";
    }
    function Q(a) {
        return a && a.document && a.location && a.alert && a.setInterval;
    }
    function R(a) {
        return a && a.$evalAsync && a.$watch;
    }
    function S(a) {
        return n.apply(a) === "[object File]";
    }
    function T(a) {
        return typeof a == "boolean";
    }
    var U = function() {
        if (!String.prototype.trim) {
            return function(a) {
                return K(a) ? a.replace(/^\s*/, "").replace(/\s*$/, "") : a;
            };
        }
        return function(a) {
            return K(a) ? a.trim() : a;
        };
    }();
    function V(a) {
        return a && (a.nodeName || a.on && a.find);
    }
    function W(a) {
        var b = {}, c = a.split(","), d;
        for (d = 0; d < c.length; d++) b[c[d]] = true;
        return b;
    }
    if (i < 9) {
        s = function(a) {
            a = a.nodeName ? a : a[0];
            return a.scopeName && a.scopeName != "HTML" ? f(a.scopeName + ":" + a.nodeName) : a.nodeName;
        };
    } else {
        s = function(a) {
            return a.nodeName ? a.nodeName : a[0].nodeName;
        };
    }
    function X(a, b, c) {
        var d = [];
        v(a, function(a, e, f) {
            d.push(b.call(c, a, e, f));
        });
        return d;
    }
    function Y(a, b) {
        var c = 0, d;
        if (N(a) || K(a)) {
            return a.length;
        } else if (J(a)) {
            for (d in a) if (!b || a.hasOwnProperty(d)) c++;
        }
        return c;
    }
    function Z(a, b) {
        return $(a, b) != -1;
    }
    function $(a, b) {
        if (a.indexOf) return a.indexOf(b);
        for (var c = 0; c < a.length; c++) {
            if (b === a[c]) return c;
        }
        return -1;
    }
    function _(a, b) {
        var c = $(a, b);
        if (c >= 0) a.splice(c, 1);
        return b;
    }
    function ab(a) {
        if (a) {
            switch (a.nodeName) {
              case "OPTION":
              case "PRE":
              case "TITLE":
                return true;
            }
        }
        return false;
    }
    function bb(a, b) {
        if (Q(a) || R(a)) {
            throw o("cpws", "Can't copy! Making copies of Window or Scope instances is not supported.");
        }
        if (!b) {
            b = a;
            if (a) {
                if (N(a)) {
                    b = bb(a, []);
                } else if (M(a)) {
                    b = new Date(a.getTime());
                } else if (P(a)) {
                    b = new RegExp(a.source);
                } else if (J(a)) {
                    b = bb(a, {});
                }
            }
        } else {
            if (a === b) throw o("cpi", "Can't copy! Source and destination are identical.");
            if (N(a)) {
                b.length = 0;
                for (var c = 0; c < a.length; c++) {
                    b.push(bb(a[c]));
                }
            } else {
                var d = b.$$hashKey;
                v(b, function(a, c) {
                    delete b[c];
                });
                for (var e in a) {
                    b[e] = bb(a[e]);
                }
                A(b, d);
            }
        }
        return b;
    }
    function cb(a, b) {
        b = b || {};
        for (var c in a) {
            if (a.hasOwnProperty(c) && c.substr(0, 2) !== "$$") {
                b[c] = a[c];
            }
        }
        return b;
    }
    function db(a, b) {
        if (a === b) return true;
        if (a === null || b === null) return false;
        if (a !== a && b !== b) return true;
        var d = typeof a, e = typeof b, f, g, h;
        if (d == e) {
            if (d == "object") {
                if (N(a)) {
                    if (!N(b)) return false;
                    if ((f = a.length) == b.length) {
                        for (g = 0; g < f; g++) {
                            if (!db(a[g], b[g])) return false;
                        }
                        return true;
                    }
                } else if (M(a)) {
                    return M(b) && a.getTime() == b.getTime();
                } else if (P(a) && P(b)) {
                    return a.toString() == b.toString();
                } else {
                    if (R(a) || R(b) || Q(a) || Q(b) || N(b)) return false;
                    h = {};
                    for (g in a) {
                        if (g.charAt(0) === "$" || O(a[g])) continue;
                        if (!db(a[g], b[g])) return false;
                        h[g] = true;
                    }
                    for (g in b) {
                        if (!h.hasOwnProperty(g) && g.charAt(0) !== "$" && b[g] !== c && !O(b[g])) return false;
                    }
                    return true;
                }
            }
        }
        return false;
    }
    function eb(a, b, c) {
        return a.concat(l.call(b, c));
    }
    function fb(a, b) {
        return l.call(a, b || 0);
    }
    function gb(a, b) {
        var c = arguments.length > 2 ? fb(arguments, 2) : [];
        if (O(b) && !(b instanceof RegExp)) {
            return c.length ? function() {
                return arguments.length ? b.apply(a, c.concat(l.call(arguments, 0))) : b.apply(a, c);
            } : function() {
                return arguments.length ? b.apply(a, arguments) : b.call(a);
            };
        } else {
            return b;
        }
    }
    function hb(a, d) {
        var e = d;
        if (typeof a === "string" && a.charAt(0) === "$") {
            e = c;
        } else if (Q(d)) {
            e = "$WINDOW";
        } else if (d && b === d) {
            e = "$DOCUMENT";
        } else if (R(d)) {
            e = "$SCOPE";
        }
        return e;
    }
    function ib(a, b) {
        if (typeof a === "undefined") return c;
        return JSON.stringify(a, hb, b ? "  " : null);
    }
    function jb(a) {
        return K(a) ? JSON.parse(a) : a;
    }
    function kb(a) {
        if (a && a.length !== 0) {
            var b = e("" + a);
            a = !(b == "f" || b == "0" || b == "false" || b == "no" || b == "n" || b == "[]");
        } else {
            a = false;
        }
        return a;
    }
    function lb(a) {
        a = j(a).clone();
        try {
            a.html("");
        } catch (b) {}
        var c = 3;
        var d = j("<div>").append(a).html();
        try {
            return a[0].nodeType === c ? e(d) : d.match(/^(<[^>]+>)/)[1].replace(/^<([\w\-]+)/, function(a, b) {
                return "<" + e(b);
            });
        } catch (b) {
            return e(d);
        }
    }
    function mb(a) {
        try {
            return decodeURIComponent(a);
        } catch (b) {}
    }
    function nb(a) {
        var b = {}, c, d;
        v((a || "").split("&"), function(a) {
            if (a) {
                c = a.split("=");
                d = mb(c[0]);
                if (I(d)) {
                    var e = I(c[1]) ? mb(c[1]) : true;
                    if (!b[d]) {
                        b[d] = e;
                    } else if (N(b[d])) {
                        b[d].push(e);
                    } else {
                        b[d] = [ b[d], e ];
                    }
                }
            }
        });
        return b;
    }
    function ob(a) {
        var b = [];
        v(a, function(a, c) {
            if (N(a)) {
                v(a, function(a) {
                    b.push(qb(c, true) + (a === true ? "" : "=" + qb(a, true)));
                });
            } else {
                b.push(qb(c, true) + (a === true ? "" : "=" + qb(a, true)));
            }
        });
        return b.length ? b.join("&") : "";
    }
    function pb(a) {
        return qb(a, true).replace(/%26/gi, "&").replace(/%3D/gi, "=").replace(/%2B/gi, "+");
    }
    function qb(a, b) {
        return encodeURIComponent(a).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, b ? "%20" : "+");
    }
    function rb(a, c) {
        var d = [ a ], e, f, g = [ "ng:app", "ng-app", "x-ng-app", "data-ng-app" ], h = /\sng[:\-]app(:\s*([\w\d_]+);?)?\s/;
        function i(a) {
            a && d.push(a);
        }
        v(g, function(c) {
            g[c] = true;
            i(b.getElementById(c));
            c = c.replace(":", "\\:");
            if (a.querySelectorAll) {
                v(a.querySelectorAll("." + c), i);
                v(a.querySelectorAll("." + c + "\\:"), i);
                v(a.querySelectorAll("[" + c + "]"), i);
            }
        });
        v(d, function(a) {
            if (!e) {
                var b = " " + a.className + " ";
                var c = h.exec(b);
                if (c) {
                    e = a;
                    f = (c[2] || "").replace(/\s+/g, ",");
                } else {
                    v(a.attributes, function(b) {
                        if (!e && g[b.name]) {
                            e = a;
                            f = b.value;
                        }
                    });
                }
            }
        });
        if (e) {
            c(e, f ? [ f ] : []);
        }
    }
    function sb(c, d) {
        var e = function() {
            c = j(c);
            if (c.injector()) {
                var a = c[0] === b ? "document" : lb(c);
                throw o("btstrpd", "App Already Bootstrapped with this Element '{0}'", a);
            }
            d = d || [];
            d.unshift([ "$provide", function(a) {
                a.value("$rootElement", c);
            } ]);
            d.unshift("ng");
            var e = mc(d);
            e.invoke([ "$rootScope", "$rootElement", "$compile", "$injector", "$animate", function(a, b, c, d, e) {
                a.$apply(function() {
                    b.data("$injector", d);
                    c(b)(a);
                });
                e.enabled(true);
            } ]);
            return e;
        };
        var f = /^NG_DEFER_BOOTSTRAP!/;
        if (a && !f.test(a.name)) {
            return e();
        }
        a.name = a.name.replace(f, "");
        q.resumeBootstrap = function(a) {
            v(a, function(a) {
                d.push(a);
            });
            e();
        };
    }
    var tb = /[A-Z]/g;
    function ub(a, b) {
        b = b || "_";
        return a.replace(tb, function(a, c) {
            return (c ? b : "") + a.toLowerCase();
        });
    }
    function vb() {
        k = a.jQuery;
        if (k) {
            j = k;
            B(k.fn, {
                scope: _b.scope,
                controller: _b.controller,
                injector: _b.injector,
                inheritedData: _b.inheritedData
            });
            Nb("remove", true, true, false);
            Nb("empty", false, false, false);
            Nb("html", false, false, true);
        } else {
            j = Ob;
        }
        q.element = j;
    }
    function wb(a, b, c) {
        if (!a) {
            throw o("areq", "Argument '{0}' is {1}", b || "?", c || "required");
        }
        return a;
    }
    function xb(a, b, c) {
        if (c && N(a)) {
            a = a[a.length - 1];
        }
        wb(O(a), b, "not a function, got " + (a && typeof a == "object" ? a.constructor.name || "Object" : typeof a));
        return a;
    }
    function yb(a, b) {
        if (a === "hasOwnProperty") {
            throw o("badname", "hasOwnProperty is not a valid {0} name", b);
        }
    }
    function zb(a, b, c) {
        if (!b) return a;
        var d = b.split(".");
        var e;
        var f = a;
        var g = d.length;
        for (var h = 0; h < g; h++) {
            e = d[h];
            if (a) {
                a = (f = a)[e];
            }
        }
        if (!c && O(a)) {
            return gb(f, a);
        }
        return a;
    }
    function Ab(a) {
        var b = d("$injector");
        function c(a, b, c) {
            return a[b] || (a[b] = c());
        }
        return c(c(a, "angular", Object), "module", function() {
            var a = {};
            return function d(d, e, f) {
                yb(d, "module");
                if (e && a.hasOwnProperty(d)) {
                    a[d] = null;
                }
                return c(a, d, function() {
                    if (!e) {
                        throw b("nomod", "Module '{0}' is not available! You either misspelled the module name " + "or forgot to load it. If registering a module ensure that you specify the dependencies as the second " + "argument.", d);
                    }
                    var a = [];
                    var c = [];
                    var g = i("$injector", "invoke");
                    var h = {
                        _invokeQueue: a,
                        _runBlocks: c,
                        requires: e,
                        name: d,
                        provider: i("$provide", "provider"),
                        factory: i("$provide", "factory"),
                        service: i("$provide", "service"),
                        value: i("$provide", "value"),
                        constant: i("$provide", "constant", "unshift"),
                        animation: i("$animateProvider", "register"),
                        filter: i("$filterProvider", "register"),
                        controller: i("$controllerProvider", "register"),
                        directive: i("$compileProvider", "directive"),
                        config: g,
                        run: function(a) {
                            c.push(a);
                            return this;
                        }
                    };
                    if (f) {
                        g(f);
                    }
                    return h;
                    function i(b, c, d) {
                        return function() {
                            a[d || "push"]([ b, c, arguments ]);
                            return h;
                        };
                    }
                });
            };
        });
    }
    var Bb = {
        full: "1.2.0-rc.3",
        major: 1,
        minor: 2,
        dot: 0,
        codeName: "ferocious-twitch"
    };
    function Cb(b) {
        B(b, {
            bootstrap: sb,
            copy: bb,
            extend: B,
            equals: db,
            element: j,
            forEach: v,
            injector: mc,
            noop: E,
            bind: gb,
            toJson: ib,
            fromJson: jb,
            identity: F,
            isUndefined: H,
            isDefined: I,
            isString: K,
            isFunction: O,
            isObject: J,
            isNumber: L,
            isElement: V,
            isArray: N,
            $$minErr: d,
            version: Bb,
            isDate: M,
            lowercase: e,
            uppercase: f,
            callbacks: {
                counter: 0
            }
        });
        r = Ab(a);
        try {
            r("ngLocale");
        } catch (c) {
            r("ngLocale", []).provider("$locale", Oc);
        }
        r("ng", [ "ngLocale" ], [ "$provide", function g(a) {
            a.provider("$compile", vc).directive({
                a: ce,
                input: te,
                textarea: te,
                form: he,
                script: bf,
                select: ef,
                style: gf,
                option: ff,
                ngBind: Fe,
                ngBindHtml: He,
                ngBindTemplate: Ge,
                ngClass: Je,
                ngClassEven: Le,
                ngClassOdd: Ke,
                ngCsp: Oe,
                ngCloak: Me,
                ngController: Ne,
                ngForm: ie,
                ngHide: Xe,
                ngIf: Qe,
                ngInclude: Re,
                ngInit: Se,
                ngNonBindable: Te,
                ngPluralize: Ue,
                ngRepeat: Ve,
                ngShow: We,
                ngStyle: Ye,
                ngSwitch: Ze,
                ngSwitchWhen: $e,
                ngSwitchDefault: _e,
                ngOptions: df,
                ngTransclude: af,
                ngModel: ze,
                ngList: Ce,
                ngChange: Ae,
                required: Be,
                ngRequired: Be,
                ngValue: Ee
            }).directive(de).directive(Pe);
            a.provider({
                $anchorScroll: nc,
                $animate: pc,
                $browser: rc,
                $cacheFactory: sc,
                $controller: Ac,
                $document: Bc,
                $exceptionHandler: Cc,
                $filter: Jd,
                $interpolate: Mc,
                $interval: Nc,
                $http: Hc,
                $httpBackend: Jc,
                $location: cd,
                $log: dd,
                $parse: rd,
                $rootScope: ud,
                $q: sd,
                $sce: Bd,
                $sceDelegate: Ad,
                $sniffer: Cd,
                $templateCache: tc,
                $timeout: Dd,
                $window: Id
            });
        } ]);
    }
    var Db = Ob.cache = {}, Eb = Ob.expando = "ng-" + new Date().getTime(), Fb = 1, Gb = a.document.addEventListener ? function(a, b, c) {
        a.addEventListener(b, c, false);
    } : function(a, b, c) {
        a.attachEvent("on" + b, c);
    }, Hb = a.document.removeEventListener ? function(a, b, c) {
        a.removeEventListener(b, c, false);
    } : function(a, b, c) {
        a.detachEvent("on" + b, c);
    };
    function Ib() {
        return ++Fb;
    }
    var Jb = /([\:\-\_]+(.))/g;
    var Kb = /^moz([A-Z])/;
    var Lb = d("jqLite");
    function Mb(a) {
        return a.replace(Jb, function(a, b, c, d) {
            return d ? c.toUpperCase() : c;
        }).replace(Kb, "Moz$1");
    }
    function Nb(a, b, c, d) {
        var e = k.fn[a];
        e = e.$original || e;
        f.$original = e;
        k.fn[a] = f;
        function f(a) {
            var f = c && a ? [ this.filter(a) ] : [ this ], g = b, h, i, l, m, n, o, p;
            if (!d || a != null) {
                while (f.length) {
                    h = f.shift();
                    for (i = 0, l = h.length; i < l; i++) {
                        m = j(h[i]);
                        if (g) {
                            m.triggerHandler("$destroy");
                        } else {
                            g = !g;
                        }
                        for (n = 0, o = (p = m.children()).length; n < o; n++) {
                            f.push(k(p[n]));
                        }
                    }
                }
            }
            return e.apply(this, arguments);
        }
    }
    function Ob(a) {
        if (a instanceof Ob) {
            return a;
        }
        if (!(this instanceof Ob)) {
            if (K(a) && a.charAt(0) != "<") {
                throw Lb("nosel", "Looking up elements via selectors is not supported by jqLite! See: http://docs.angularjs.org/api/angular.element");
            }
            return new Ob(a);
        }
        if (K(a)) {
            var c = b.createElement("div");
            c.innerHTML = "<div>&#160;</div>" + a;
            c.removeChild(c.firstChild);
            Yb(this, c.childNodes);
            var d = j(b.createDocumentFragment());
            d.append(this);
        } else {
            Yb(this, a);
        }
    }
    function Pb(a) {
        return a.cloneNode(true);
    }
    function Qb(a) {
        Sb(a);
        for (var b = 0, c = a.childNodes || []; b < c.length; b++) {
            Qb(c[b]);
        }
    }
    function Rb(a, b, c, d) {
        if (I(d)) throw Lb("offargs", "jqLite#off() does not support the `selector` argument");
        var e = Tb(a, "events"), f = Tb(a, "handle");
        if (!f) return;
        if (H(b)) {
            v(e, function(b, c) {
                Hb(a, c, b);
                delete e[c];
            });
        } else {
            v(b.split(" "), function(b) {
                if (H(c)) {
                    Hb(a, b, e[b]);
                    delete e[b];
                } else {
                    _(e[b] || [], c);
                }
            });
        }
    }
    function Sb(a, b) {
        var d = a[Eb], e = Db[d];
        if (e) {
            if (b) {
                delete Db[d].data[b];
                return;
            }
            if (e.handle) {
                e.events.$destroy && e.handle({}, "$destroy");
                Rb(a);
            }
            delete Db[d];
            a[Eb] = c;
        }
    }
    function Tb(a, b, c) {
        var d = a[Eb], e = Db[d || -1];
        if (I(c)) {
            if (!e) {
                a[Eb] = d = Ib();
                e = Db[d] = {};
            }
            e[b] = c;
        } else {
            return e && e[b];
        }
    }
    function Ub(a, b, c) {
        var d = Tb(a, "data"), e = I(c), f = !e && I(b), g = f && !J(b);
        if (!d && !g) {
            Tb(a, "data", d = {});
        }
        if (e) {
            d[b] = c;
        } else {
            if (f) {
                if (g) {
                    return d && d[b];
                } else {
                    B(d, b);
                }
            } else {
                return d;
            }
        }
    }
    function Vb(a, b) {
        if (!a.getAttribute) return false;
        return (" " + (a.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ").indexOf(" " + b + " ") > -1;
    }
    function Wb(a, b) {
        if (b && a.setAttribute) {
            v(b.split(" "), function(b) {
                a.setAttribute("class", U((" " + (a.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ").replace(" " + U(b) + " ", " ")));
            });
        }
    }
    function Xb(a, b) {
        if (b && a.setAttribute) {
            var c = (" " + (a.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ");
            v(b.split(" "), function(a) {
                a = U(a);
                if (c.indexOf(" " + a + " ") === -1) {
                    c += a + " ";
                }
            });
            a.setAttribute("class", U(c));
        }
    }
    function Yb(a, b) {
        if (b) {
            b = !b.nodeName && I(b.length) && !Q(b) ? b : [ b ];
            for (var c = 0; c < b.length; c++) {
                a.push(b[c]);
            }
        }
    }
    function Zb(a, b) {
        return $b(a, "$" + (b || "ngController") + "Controller");
    }
    function $b(a, b, d) {
        a = j(a);
        if (a[0].nodeType == 9) {
            a = a.find("html");
        }
        while (a.length) {
            if ((d = a.data(b)) !== c) return d;
            a = a.parent();
        }
    }
    var _b = Ob.prototype = {
        ready: function(c) {
            var d = false;
            function e() {
                if (d) return;
                d = true;
                c();
            }
            if (b.readyState === "complete") {
                setTimeout(e);
            } else {
                this.on("DOMContentLoaded", e);
                Ob(a).on("load", e);
            }
        },
        toString: function() {
            var a = [];
            v(this, function(b) {
                a.push("" + b);
            });
            return "[" + a.join(", ") + "]";
        },
        eq: function(a) {
            return a >= 0 ? j(this[a]) : j(this[this.length + a]);
        },
        length: 0,
        push: m,
        sort: [].sort,
        splice: [].splice
    };
    var ac = {};
    v("multiple,selected,checked,disabled,readOnly,required,open".split(","), function(a) {
        ac[e(a)] = a;
    });
    var bc = {};
    v("input,select,option,textarea,button,form,details".split(","), function(a) {
        bc[f(a)] = true;
    });
    function cc(a, b) {
        var c = ac[b.toLowerCase()];
        return c && bc[a.nodeName] && c;
    }
    v({
        data: Ub,
        inheritedData: $b,
        scope: function(a) {
            return $b(a, "$scope");
        },
        controller: Zb,
        injector: function(a) {
            return $b(a, "$injector");
        },
        removeAttr: function(a, b) {
            a.removeAttribute(b);
        },
        hasClass: Vb,
        css: function(a, b, d) {
            b = Mb(b);
            if (I(d)) {
                a.style[b] = d;
            } else {
                var e;
                if (i <= 8) {
                    e = a.currentStyle && a.currentStyle[b];
                    if (e === "") e = "auto";
                }
                e = e || a.style[b];
                if (i <= 8) {
                    e = e === "" ? c : e;
                }
                return e;
            }
        },
        attr: function(a, b, d) {
            var f = e(b);
            if (ac[f]) {
                if (I(d)) {
                    if (!!d) {
                        a[b] = true;
                        a.setAttribute(b, f);
                    } else {
                        a[b] = false;
                        a.removeAttribute(f);
                    }
                } else {
                    return a[b] || (a.attributes.getNamedItem(b) || E).specified ? f : c;
                }
            } else if (I(d)) {
                a.setAttribute(b, d);
            } else if (a.getAttribute) {
                var g = a.getAttribute(b, 2);
                return g === null ? c : g;
            }
        },
        prop: function(a, b, c) {
            if (I(c)) {
                a[b] = c;
            } else {
                return a[b];
            }
        },
        text: function() {
            var a = [];
            if (i < 9) {
                a[1] = "innerText";
                a[3] = "nodeValue";
            } else {
                a[1] = a[3] = "textContent";
            }
            b.$dv = "";
            return b;
            function b(b, c) {
                var d = a[b.nodeType];
                if (H(c)) {
                    return d ? b[d] : "";
                }
                b[d] = c;
            }
        }(),
        val: function(a, b) {
            if (H(b)) {
                if (s(a) === "SELECT" && a.multiple) {
                    var c = [];
                    v(a.options, function(a) {
                        if (a.selected) {
                            c.push(a.value || a.text);
                        }
                    });
                    return c.length === 0 ? null : c;
                }
                return a.value;
            }
            a.value = b;
        },
        html: function(a, b) {
            if (H(b)) {
                return a.innerHTML;
            }
            for (var c = 0, d = a.childNodes; c < d.length; c++) {
                Qb(d[c]);
            }
            a.innerHTML = b;
        }
    }, function(a, b) {
        Ob.prototype[b] = function(b, d) {
            var e, f;
            if ((a.length == 2 && a !== Vb && a !== Zb ? b : d) === c) {
                if (J(b)) {
                    for (e = 0; e < this.length; e++) {
                        if (a === Ub) {
                            a(this[e], b);
                        } else {
                            for (f in b) {
                                a(this[e], f, b[f]);
                            }
                        }
                    }
                    return this;
                } else {
                    var g = a.$dv;
                    var h = g == c ? Math.min(this.length, 1) : this.length;
                    for (var i = 0; i < h; i++) {
                        var j = a(this[i], b, d);
                        g = g ? g + j : j;
                    }
                    return g;
                }
            } else {
                for (e = 0; e < this.length; e++) {
                    a(this[e], b, d);
                }
                return this;
            }
        };
    });
    function dc(a, c) {
        var d = function(d, e) {
            if (!d.preventDefault) {
                d.preventDefault = function() {
                    d.returnValue = false;
                };
            }
            if (!d.stopPropagation) {
                d.stopPropagation = function() {
                    d.cancelBubble = true;
                };
            }
            if (!d.target) {
                d.target = d.srcElement || b;
            }
            if (H(d.defaultPrevented)) {
                var f = d.preventDefault;
                d.preventDefault = function() {
                    d.defaultPrevented = true;
                    f.call(d);
                };
                d.defaultPrevented = false;
            }
            d.isDefaultPrevented = function() {
                return d.defaultPrevented || d.returnValue == false;
            };
            v(c[e || d.type], function(b) {
                b.call(a, d);
            });
            if (i <= 8) {
                d.preventDefault = null;
                d.stopPropagation = null;
                d.isDefaultPrevented = null;
            } else {
                delete d.preventDefault;
                delete d.stopPropagation;
                delete d.isDefaultPrevented;
            }
        };
        d.elem = a;
        return d;
    }
    v({
        removeData: Sb,
        dealoc: Qb,
        on: function hf(a, c, d, e) {
            if (I(e)) throw Lb("onargs", "jqLite#on() does not support the `selector` or `eventData` parameters");
            var f = Tb(a, "events"), g = Tb(a, "handle");
            if (!f) Tb(a, "events", f = {});
            if (!g) Tb(a, "handle", g = dc(a, f));
            v(c.split(" "), function(c) {
                var e = f[c];
                if (!e) {
                    if (c == "mouseenter" || c == "mouseleave") {
                        var h = b.body.contains || b.body.compareDocumentPosition ? function(a, b) {
                            var c = a.nodeType === 9 ? a.documentElement : a, d = b && b.parentNode;
                            return a === d || !!(d && d.nodeType === 1 && (c.contains ? c.contains(d) : a.compareDocumentPosition && a.compareDocumentPosition(d) & 16));
                        } : function(a, b) {
                            if (b) {
                                while (b = b.parentNode) {
                                    if (b === a) {
                                        return true;
                                    }
                                }
                            }
                            return false;
                        };
                        f[c] = [];
                        var i = {
                            mouseleave: "mouseout",
                            mouseenter: "mouseover"
                        };
                        hf(a, i[c], function(a) {
                            var b = this, d = a.relatedTarget;
                            if (!d || d !== b && !h(b, d)) {
                                g(a, c);
                            }
                        });
                    } else {
                        Gb(a, c, g);
                        f[c] = [];
                    }
                    e = f[c];
                }
                e.push(d);
            });
        },
        off: Rb,
        replaceWith: function(a, b) {
            var c, d = a.parentNode;
            Qb(a);
            v(new Ob(b), function(b) {
                if (c) {
                    d.insertBefore(b, c.nextSibling);
                } else {
                    d.replaceChild(b, a);
                }
                c = b;
            });
        },
        children: function(a) {
            var b = [];
            v(a.childNodes, function(a) {
                if (a.nodeType === 1) b.push(a);
            });
            return b;
        },
        contents: function(a) {
            return a.childNodes || [];
        },
        append: function(a, b) {
            v(new Ob(b), function(b) {
                if (a.nodeType === 1 || a.nodeType === 11) {
                    a.appendChild(b);
                }
            });
        },
        prepend: function(a, b) {
            if (a.nodeType === 1) {
                var c = a.firstChild;
                v(new Ob(b), function(b) {
                    a.insertBefore(b, c);
                });
            }
        },
        wrap: function(a, b) {
            b = j(b)[0];
            var c = a.parentNode;
            if (c) {
                c.replaceChild(b, a);
            }
            b.appendChild(a);
        },
        remove: function(a) {
            Qb(a);
            var b = a.parentNode;
            if (b) b.removeChild(a);
        },
        after: function(a, b) {
            var c = a, d = a.parentNode;
            v(new Ob(b), function(a) {
                d.insertBefore(a, c.nextSibling);
                c = a;
            });
        },
        addClass: Xb,
        removeClass: Wb,
        toggleClass: function(a, b, c) {
            if (H(c)) {
                c = !Vb(a, b);
            }
            (c ? Xb : Wb)(a, b);
        },
        parent: function(a) {
            var b = a.parentNode;
            return b && b.nodeType !== 11 ? b : null;
        },
        next: function(a) {
            if (a.nextElementSibling) {
                return a.nextElementSibling;
            }
            var b = a.nextSibling;
            while (b != null && b.nodeType !== 1) {
                b = b.nextSibling;
            }
            return b;
        },
        find: function(a, b) {
            return a.getElementsByTagName(b);
        },
        clone: Pb,
        triggerHandler: function(a, b, c) {
            var d = (Tb(a, "events") || {})[b];
            c = c || [];
            var e = [ {
                preventDefault: E,
                stopPropagation: E
            } ];
            v(d, function(b) {
                b.apply(a, e.concat(c));
            });
        }
    }, function(a, b) {
        Ob.prototype[b] = function(b, d, e) {
            var f;
            for (var g = 0; g < this.length; g++) {
                if (f == c) {
                    f = a(this[g], b, d, e);
                    if (f !== c) {
                        f = j(f);
                    }
                } else {
                    Yb(f, a(this[g], b, d, e));
                }
            }
            return f == c ? this : f;
        };
        Ob.prototype.bind = Ob.prototype.on;
        Ob.prototype.unbind = Ob.prototype.off;
    });
    function ec(a) {
        var b = typeof a, d;
        if (b == "object" && a !== null) {
            if (typeof (d = a.$$hashKey) == "function") {
                d = a.$$hashKey();
            } else if (d === c) {
                d = a.$$hashKey = z();
            }
        } else {
            d = a;
        }
        return b + ":" + d;
    }
    function fc(a) {
        v(a, this.put, this);
    }
    fc.prototype = {
        put: function(a, b) {
            this[ec(a)] = b;
        },
        get: function(a) {
            return this[ec(a)];
        },
        remove: function(a) {
            var b = this[a = ec(a)];
            delete this[a];
            return b;
        }
    };
    var gc = /^function\s*[^\(]*\(\s*([^\)]*)\)/m;
    var hc = /,/;
    var ic = /^\s*(_?)(\S+?)\1\s*$/;
    var jc = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/gm;
    var kc = d("$injector");
    function lc(a) {
        var b, c, d, e;
        if (typeof a == "function") {
            if (!(b = a.$inject)) {
                b = [];
                if (a.length) {
                    c = a.toString().replace(jc, "");
                    d = c.match(gc);
                    v(d[1].split(hc), function(a) {
                        a.replace(ic, function(a, c, d) {
                            b.push(d);
                        });
                    });
                }
                a.$inject = b;
            }
        } else if (N(a)) {
            e = a.length - 1;
            xb(a[e], "fn");
            b = a.slice(0, e);
        } else {
            xb(a, "fn", true);
        }
        return b;
    }
    function mc(a) {
        var b = {}, c = "Provider", d = [], e = new fc(), f = {
            $provide: {
                provider: j(k),
                factory: j(l),
                service: j(m),
                value: j(n),
                constant: j(o),
                decorator: p
            }
        }, g = f.$injector = s(f, function() {
            throw kc("unpr", "Unknown provider: {0}", d.join(" <- "));
        }), h = {}, i = h.$injector = s(h, function(a) {
            var b = g.get(a + c);
            return i.invoke(b.$get, b);
        });
        v(q(a), function(a) {
            i.invoke(a || E);
        });
        return i;
        function j(a) {
            return function(b, c) {
                if (J(b)) {
                    v(b, y(a));
                } else {
                    return a(b, c);
                }
            };
        }
        function k(a, b) {
            yb(a, "service");
            if (O(b) || N(b)) {
                b = g.instantiate(b);
            }
            if (!b.$get) {
                throw kc("pget", "Provider '{0}' must define $get factory method.", a);
            }
            return f[a + c] = b;
        }
        function l(a, b) {
            return k(a, {
                $get: b
            });
        }
        function m(a, b) {
            return l(a, [ "$injector", function(a) {
                return a.instantiate(b);
            } ]);
        }
        function n(a, b) {
            return l(a, G(b));
        }
        function o(a, b) {
            yb(a, "constant");
            f[a] = b;
            h[a] = b;
        }
        function p(a, b) {
            var d = g.get(a + c), e = d.$get;
            d.$get = function() {
                var a = i.invoke(e, d);
                return i.invoke(b, null, {
                    $delegate: a
                });
            };
        }
        function q(a) {
            var b = [];
            v(a, function(a) {
                if (e.get(a)) return;
                e.put(a, true);
                try {
                    if (K(a)) {
                        var c = r(a);
                        b = b.concat(q(c.requires)).concat(c._runBlocks);
                        for (var d = c._invokeQueue, f = 0, h = d.length; f < h; f++) {
                            var i = d[f], j = g.get(i[0]);
                            j[i[1]].apply(j, i[2]);
                        }
                    } else if (O(a)) {
                        b.push(g.invoke(a));
                    } else if (N(a)) {
                        b.push(g.invoke(a));
                    } else {
                        xb(a, "module");
                    }
                } catch (k) {
                    if (N(a)) {
                        a = a[a.length - 1];
                    }
                    if (k.message && k.stack && k.stack.indexOf(k.message) == -1) {
                        k = k.message + "\n" + k.stack;
                    }
                    throw kc("modulerr", "Failed to instantiate module {0} due to:\n{1}", a, k.stack || k.message || k);
                }
            });
            return b;
        }
        function s(a, e) {
            function g(c) {
                if (a.hasOwnProperty(c)) {
                    if (a[c] === b) {
                        throw kc("cdep", "Circular dependency found: {0}", d.join(" <- "));
                    }
                    return a[c];
                } else {
                    try {
                        d.unshift(c);
                        a[c] = b;
                        return a[c] = e(c);
                    } finally {
                        d.shift();
                    }
                }
            }
            function h(a, b, c) {
                var d = [], e = lc(a), f, h, i;
                for (h = 0, f = e.length; h < f; h++) {
                    i = e[h];
                    if (typeof i !== "string") {
                        throw kc("itkn", "Incorrect injection token! Expected service name as string, got {0}", i);
                    }
                    d.push(c && c.hasOwnProperty(i) ? c[i] : g(i));
                }
                if (!a.$inject) {
                    a = a[f];
                }
                switch (b ? -1 : d.length) {
                  case 0:
                    return a();

                  case 1:
                    return a(d[0]);

                  case 2:
                    return a(d[0], d[1]);

                  case 3:
                    return a(d[0], d[1], d[2]);

                  case 4:
                    return a(d[0], d[1], d[2], d[3]);

                  case 5:
                    return a(d[0], d[1], d[2], d[3], d[4]);

                  case 6:
                    return a(d[0], d[1], d[2], d[3], d[4], d[5]);

                  case 7:
                    return a(d[0], d[1], d[2], d[3], d[4], d[5], d[6]);

                  case 8:
                    return a(d[0], d[1], d[2], d[3], d[4], d[5], d[6], d[7]);

                  case 9:
                    return a(d[0], d[1], d[2], d[3], d[4], d[5], d[6], d[7], d[8]);

                  case 10:
                    return a(d[0], d[1], d[2], d[3], d[4], d[5], d[6], d[7], d[8], d[9]);

                  default:
                    return a.apply(b, d);
                }
            }
            function i(a, b) {
                var c = function() {}, d, e;
                c.prototype = (N(a) ? a[a.length - 1] : a).prototype;
                d = new c();
                e = h(a, d, b);
                return J(e) ? e : d;
            }
            return {
                invoke: h,
                instantiate: i,
                get: g,
                annotate: lc,
                has: function(b) {
                    return f.hasOwnProperty(b + c) || a.hasOwnProperty(b);
                }
            };
        }
    }
    function nc() {
        var a = true;
        this.disableAutoScrolling = function() {
            a = false;
        };
        this.$get = [ "$window", "$location", "$rootScope", function(b, c, d) {
            var f = b.document;
            function g(a) {
                var b = null;
                v(a, function(a) {
                    if (!b && e(a.nodeName) === "a") b = a;
                });
                return b;
            }
            function h() {
                var a = c.hash(), d;
                if (!a) b.scrollTo(0, 0); else if (d = f.getElementById(a)) d.scrollIntoView(); else if (d = g(f.getElementsByName(a))) d.scrollIntoView(); else if (a === "top") b.scrollTo(0, 0);
            }
            if (a) {
                d.$watch(function i() {
                    return c.hash();
                }, function j() {
                    d.$evalAsync(h);
                });
            }
            return h;
        } ];
    }
    var oc = d("$animate");
    var pc = [ "$provide", function(a) {
        this.$$selectors = {};
        this.register = function(b, c) {
            var d = b + "-animation";
            if (b && b.charAt(0) != ".") throw oc("notcsel", "Expecting class selector starting with '.' got '{0}'.", b);
            this.$$selectors[b.substr(1)] = d;
            a.factory(d, c);
        };
        this.$get = [ "$timeout", function(a) {
            return {
                enter: function(b, c, d, e) {
                    var f = d && d[d.length - 1];
                    var g = c && c[0] || f && f.parentNode;
                    var h = f && f.nextSibling || null;
                    v(b, function(a) {
                        g.insertBefore(a, h);
                    });
                    e && a(e, 0, false);
                },
                leave: function(b, c) {
                    b.remove();
                    c && a(c, 0, false);
                },
                move: function(a, b, c, d) {
                    this.enter(a, b, c, d);
                },
                addClass: function(b, c, d) {
                    c = K(c) ? c : N(c) ? c.join(" ") : "";
                    v(b, function(a) {
                        Xb(a, c);
                    });
                    d && a(d, 0, false);
                },
                removeClass: function(b, c, d) {
                    c = K(c) ? c : N(c) ? c.join(" ") : "";
                    v(b, function(a) {
                        Wb(a, c);
                    });
                    d && a(d, 0, false);
                },
                enabled: E
            };
        } ];
    } ];
    function qc(a, b, d, e) {
        var f = this, g = b[0], h = a.location, i = a.history, k = a.setTimeout, l = a.clearTimeout, m = {};
        f.isMock = false;
        var n = 0;
        var o = [];
        f.$$completeOutstandingRequest = p;
        f.$$incOutstandingRequestCount = function() {
            n++;
        };
        function p(a) {
            try {
                a.apply(null, fb(arguments, 1));
            } finally {
                n--;
                if (n === 0) {
                    while (o.length) {
                        try {
                            o.pop()();
                        } catch (b) {
                            d.error(b);
                        }
                    }
                }
            }
        }
        f.notifyWhenNoOutstandingRequests = function(a) {
            v(q, function(a) {
                a();
            });
            if (n === 0) {
                a();
            } else {
                o.push(a);
            }
        };
        var q = [], r;
        f.addPollFn = function(a) {
            if (H(r)) s(100, k);
            q.push(a);
            return a;
        };
        function s(a, b) {
            (function c() {
                v(q, function(a) {
                    a();
                });
                r = b(c, a);
            })();
        }
        var t = h.href, u = b.find("base"), w = null;
        f.url = function(b, c) {
            if (h !== a.location) h = a.location;
            if (b) {
                if (t == b) return;
                t = b;
                if (e.history) {
                    if (c) i.replaceState(null, "", b); else {
                        i.pushState(null, "", b);
                        u.attr("href", u.attr("href"));
                    }
                } else {
                    w = b;
                    if (c) {
                        h.replace(b);
                    } else {
                        h.href = b;
                    }
                }
                return f;
            } else {
                return w || h.href.replace(/%27/g, "'");
            }
        };
        var x = [], y = false;
        function z() {
            w = null;
            if (t == f.url()) return;
            t = f.url();
            v(x, function(a) {
                a(f.url());
            });
        }
        f.onUrlChange = function(b) {
            if (!y) {
                if (e.history) j(a).on("popstate", z);
                if (e.hashchange) j(a).on("hashchange", z); else f.addPollFn(z);
                y = true;
            }
            x.push(b);
            return b;
        };
        f.baseHref = function() {
            var a = u.attr("href");
            return a ? a.replace(/^https?\:\/\/[^\/]*/, "") : "";
        };
        var A = {};
        var B = "";
        var C = f.baseHref();
        f.cookies = function(a, b) {
            var e, f, h, i, j;
            if (a) {
                if (b === c) {
                    g.cookie = escape(a) + "=;path=" + C + ";expires=Thu, 01 Jan 1970 00:00:00 GMT";
                } else {
                    if (K(b)) {
                        e = (g.cookie = escape(a) + "=" + escape(b) + ";path=" + C).length + 1;
                        if (e > 4096) {
                            d.warn("Cookie '" + a + "' possibly not set or overflowed because it was too large (" + e + " > 4096 bytes)!");
                        }
                    }
                }
            } else {
                if (g.cookie !== B) {
                    B = g.cookie;
                    f = B.split("; ");
                    A = {};
                    for (i = 0; i < f.length; i++) {
                        h = f[i];
                        j = h.indexOf("=");
                        if (j > 0) {
                            var a = unescape(h.substring(0, j));
                            if (A[a] === c) {
                                A[a] = unescape(h.substring(j + 1));
                            }
                        }
                    }
                }
                return A;
            }
        };
        f.defer = function(a, b) {
            var c;
            n++;
            c = k(function() {
                delete m[c];
                p(a);
            }, b || 0);
            m[c] = true;
            return c;
        };
        f.defer.cancel = function(a) {
            if (m[a]) {
                delete m[a];
                l(a);
                p(E);
                return true;
            }
            return false;
        };
    }
    function rc() {
        this.$get = [ "$window", "$log", "$sniffer", "$document", function(a, b, c, d) {
            return new qc(a, d, b, c);
        } ];
    }
    function sc() {
        this.$get = function() {
            var a = {};
            function b(b, c) {
                if (b in a) {
                    throw d("$cacheFactory")("iid", "CacheId '{0}' is already taken!", b);
                }
                var e = 0, f = B({}, c, {
                    id: b
                }), g = {}, h = c && c.capacity || Number.MAX_VALUE, i = {}, j = null, k = null;
                return a[b] = {
                    put: function(a, b) {
                        var c = i[a] || (i[a] = {
                            key: a
                        });
                        l(c);
                        if (H(b)) return;
                        if (!(a in g)) e++;
                        g[a] = b;
                        if (e > h) {
                            this.remove(k.key);
                        }
                        return b;
                    },
                    get: function(a) {
                        var b = i[a];
                        if (!b) return;
                        l(b);
                        return g[a];
                    },
                    remove: function(a) {
                        var b = i[a];
                        if (!b) return;
                        if (b == j) j = b.p;
                        if (b == k) k = b.n;
                        m(b.n, b.p);
                        delete i[a];
                        delete g[a];
                        e--;
                    },
                    removeAll: function() {
                        g = {};
                        e = 0;
                        i = {};
                        j = k = null;
                    },
                    destroy: function() {
                        g = null;
                        f = null;
                        i = null;
                        delete a[b];
                    },
                    info: function() {
                        return B({}, f, {
                            size: e
                        });
                    }
                };
                function l(a) {
                    if (a != j) {
                        if (!k) {
                            k = a;
                        } else if (k == a) {
                            k = a.n;
                        }
                        m(a.n, a.p);
                        m(a, j);
                        j = a;
                        j.n = null;
                    }
                }
                function m(a, b) {
                    if (a != b) {
                        if (a) a.p = b;
                        if (b) b.n = a;
                    }
                }
            }
            b.info = function() {
                var b = {};
                v(a, function(a, c) {
                    b[c] = a.info();
                });
                return b;
            };
            b.get = function(b) {
                return a[b];
            };
            return b;
        };
    }
    function tc() {
        this.$get = [ "$cacheFactory", function(a) {
            return a("templates");
        } ];
    }
    var uc = d("$compile");
    vc.$inject = [ "$provide" ];
    function vc(a) {
        var d = {}, e = "Directive", f = /^\s*directive\:\s*([\d\w\-_]+)\s+(.*)$/, g = /(([\d\w\-_]+)(?:\:([^;]+))?;?)/, h = /^\s*(https?|ftp|mailto|tel|file):/, k = /^\s*(https?|ftp|file):|data:image\//;
        var l = /^(on[a-z]+|formaction)$/;
        this.directive = function m(b, c) {
            yb(b, "directive");
            if (K(b)) {
                wb(c, "directiveFactory");
                if (!d.hasOwnProperty(b)) {
                    d[b] = [];
                    a.factory(b + e, [ "$injector", "$exceptionHandler", function(a, c) {
                        var e = [];
                        v(d[b], function(d, f) {
                            try {
                                var g = a.invoke(d);
                                if (O(g)) {
                                    g = {
                                        compile: G(g)
                                    };
                                } else if (!g.compile && g.link) {
                                    g.compile = G(g.link);
                                }
                                g.priority = g.priority || 0;
                                g.index = f;
                                g.name = g.name || b;
                                g.require = g.require || g.controller && g.name;
                                g.restrict = g.restrict || "A";
                                e.push(g);
                            } catch (h) {
                                c(h);
                            }
                        });
                        return e;
                    } ]);
                }
                d[b].push(c);
            } else {
                v(b, y(m));
            }
            return this;
        };
        this.aHrefSanitizationWhitelist = function(a) {
            if (I(a)) {
                h = a;
                return this;
            }
            return h;
        };
        this.imgSrcSanitizationWhitelist = function(a) {
            if (I(a)) {
                k = a;
                return this;
            }
            return k;
        };
        this.$get = [ "$injector", "$interpolate", "$exceptionHandler", "$http", "$templateCache", "$parse", "$controller", "$rootScope", "$document", "$sce", "$animate", function(a, m, n, o, p, q, r, t, u, w, x) {
            var y = function(a, b) {
                this.$$element = a;
                this.$attr = b || {};
            };
            y.prototype = {
                $normalize: xc,
                $addClass: function(a) {
                    if (a && a.length > 0) {
                        x.addClass(this.$$element, a);
                    }
                },
                $removeClass: function(a) {
                    if (a && a.length > 0) {
                        x.removeClass(this.$$element, a);
                    }
                },
                $set: function(a, b, d, e) {
                    if (a == "class") {
                        b = b || "";
                        var f = this.$$element.attr("class") || "";
                        this.$removeClass(o(f, b).join(" "));
                        this.$addClass(o(b, f).join(" "));
                    } else {
                        var g = cc(this.$$element[0], a), j, l;
                        if (g) {
                            this.$$element.prop(a, b);
                            e = g;
                        }
                        this[a] = b;
                        if (e) {
                            this.$attr[a] = e;
                        } else {
                            e = this.$attr[a];
                            if (!e) {
                                this.$attr[a] = e = ub(a, "-");
                            }
                        }
                        l = s(this.$$element);
                        if (l === "A" && a === "href" || l === "IMG" && a === "src") {
                            if (!i || i >= 8) {
                                j = Gd(b).href;
                                if (j !== "") {
                                    if (a === "href" && !j.match(h) || a === "src" && !j.match(k)) {
                                        this[a] = b = "unsafe:" + j;
                                    }
                                }
                            }
                        }
                        if (d !== false) {
                            if (b === null || b === c) {
                                this.$$element.removeAttr(e);
                            } else {
                                this.$$element.attr(e, b);
                            }
                        }
                    }
                    var m = this.$$observers;
                    m && v(m[a], function(a) {
                        try {
                            a(b);
                        } catch (c) {
                            n(c);
                        }
                    });
                    function o(a, b) {
                        var c = [], d = a.split(/\s+/), e = b.split(/\s+/);
                        a: for (var f = 0; f < d.length; f++) {
                            var g = d[f];
                            for (var h = 0; h < e.length; h++) {
                                if (g == e[h]) continue a;
                            }
                            c.push(g);
                        }
                        return c;
                    }
                },
                $observe: function(a, b) {
                    var c = this, d = c.$$observers || (c.$$observers = {}), e = d[a] || (d[a] = []);
                    e.push(b);
                    t.$evalAsync(function() {
                        if (!e.$$inter) {
                            b(c[a]);
                        }
                    });
                    return b;
                }
            };
            var z = m.startSymbol(), A = m.endSymbol(), C = z == "{{" || A == "}}" ? F : function ab(a) {
                return a.replace(/\{\{/g, z).replace(/}}/g, A);
            }, E = /^ngAttr[A-Z]/;
            return H;
            function H(a, b, c, d, e) {
                if (!(a instanceof j)) {
                    a = j(a);
                }
                v(a, function(b, c) {
                    if (b.nodeType == 3 && b.nodeValue.match(/\S+/)) {
                        a[c] = b = j(b).wrap("<span></span>").parent()[0];
                    }
                });
                var f = L(a, b, a, c, d, e);
                return function g(b, c) {
                    wb(b, "scope");
                    var d = c ? _b.clone.call(a) : a;
                    for (var e = 0, g = d.length; e < g; e++) {
                        var h = d[e];
                        if (h.nodeType == 1 || h.nodeType == 9) {
                            d.eq(e).data("$scope", b);
                        }
                    }
                    I(d, "ng-scope");
                    if (c) c(d, b);
                    if (f) f(b, d, d);
                    return d;
                };
            }
            function I(a, b) {
                try {
                    a.addClass(b);
                } catch (c) {}
            }
            function L(a, b, d, e, f, g) {
                var h = [], i, k, l, m, n;
                for (var o = 0; o < a.length; o++) {
                    m = new y();
                    l = M(a[o], [], m, o == 0 ? e : c, f);
                    i = l.length ? R(l, a[o], m, b, d, null, [], [], g) : null;
                    k = i && i.terminal || !a[o].childNodes || !a[o].childNodes.length ? null : L(a[o].childNodes, i ? i.transclude : b);
                    h.push(i);
                    h.push(k);
                    n = n || i || k;
                    g = null;
                }
                return n ? p : null;
                function p(a, d, e, f) {
                    var g, i, k, l, m, n, o, p;
                    var q = [];
                    for (n = 0, o = d.length; n < o; n++) {
                        q.push(d[n]);
                    }
                    for (n = 0, p = 0, o = h.length; n < o; p++) {
                        k = q[p];
                        g = h[n++];
                        i = h[n++];
                        if (g) {
                            if (g.scope) {
                                l = a.$new(J(g.scope));
                                j(k).data("$scope", l);
                            } else {
                                l = a;
                            }
                            m = g.transclude;
                            if (m || !f && b) {
                                g(i, l, k, e, function(b) {
                                    return function(c) {
                                        var d = a.$new();
                                        d.$$transcluded = true;
                                        return b(d, c).on("$destroy", gb(d, d.$destroy));
                                    };
                                }(m || b));
                            } else {
                                g(i, l, k, c, f);
                            }
                        } else if (i) {
                            i(a, k.childNodes, c, f);
                        }
                    }
                }
            }
            function M(a, b, c, d, e) {
                var h = a.nodeType, j = c.$attr, k, l;
                switch (h) {
                  case 1:
                    S(b, xc(s(a).toLowerCase()), "E", d, e);
                    for (var m, n, o, p, q, r = a.attributes, t = 0, u = r && r.length; t < u; t++) {
                        var v = false;
                        var w = false;
                        m = r[t];
                        if (!i || i >= 8 || m.specified) {
                            n = m.name;
                            p = xc(n);
                            if (E.test(p)) {
                                n = ub(p.substr(6), "-");
                            }
                            var x = p.replace(/(Start|End)$/, "");
                            if (p === x + "Start") {
                                v = n;
                                w = n.substr(0, n.length - 5) + "end";
                                n = n.substr(0, n.length - 6);
                            }
                            o = xc(n.toLowerCase());
                            j[o] = n;
                            c[o] = q = U(i && n == "href" ? decodeURIComponent(a.getAttribute(n, 2)) : m.value);
                            if (cc(a, o)) {
                                c[o] = true;
                            }
                            $(a, b, q, o);
                            S(b, o, "A", d, e, v, w);
                        }
                    }
                    l = a.className;
                    if (K(l) && l !== "") {
                        while (k = g.exec(l)) {
                            o = xc(k[2]);
                            if (S(b, o, "C", d, e)) {
                                c[o] = U(k[3]);
                            }
                            l = l.substr(k.index + k[0].length);
                        }
                    }
                    break;

                  case 3:
                    Y(b, a.nodeValue);
                    break;

                  case 8:
                    try {
                        k = f.exec(a.nodeValue);
                        if (k) {
                            o = xc(k[1]);
                            if (S(b, o, "M", d, e)) {
                                c[o] = U(k[2]);
                            }
                        }
                    } catch (y) {}
                    break;
                }
                b.sort(W);
                return b;
            }
            function P(a, b, c) {
                var d = [];
                var e = 0;
                if (b && a.hasAttribute && a.hasAttribute(b)) {
                    var f = a;
                    do {
                        if (!a) {
                            throw uc("uterdir", "Unterminated attribute, found '{0}' but no matching '{1}' found.", b, c);
                        }
                        if (a.nodeType == 1) {
                            if (a.hasAttribute(b)) e++;
                            if (a.hasAttribute(c)) e--;
                        }
                        d.push(a);
                        a = a.nextSibling;
                    } while (e > 0);
                } else {
                    d.push(a);
                }
                return j(d);
            }
            function Q(a, b, c) {
                return function(d, e, f, g) {
                    e = P(e[0], b, c);
                    return a(d, e, f, g);
                };
            }
            function R(a, d, e, f, g, h, i, k, l) {
                l = l || {};
                var o = -Number.MAX_VALUE, p, s = l.newIsolateScopeDirective, t = l.templateDirective, u = e.$$element = j(d), w, x, z, A = l.transcludeDirective, B = h, D = f, E, F, G;
                for (var L = 0, R = a.length; L < R; L++) {
                    w = a[L];
                    var S = w.$$start;
                    var W = w.$$end;
                    if (S) {
                        u = P(d, S, W);
                    }
                    z = c;
                    if (o > w.priority) {
                        break;
                    }
                    if (G = w.scope) {
                        p = p || w;
                        if (!w.templateUrl) {
                            X("new/isolated scope", s, w, u);
                            if (J(G)) {
                                I(u, "ng-isolate-scope");
                                s = w;
                            }
                            I(u, "ng-scope");
                        }
                    }
                    x = w.name;
                    if (!w.templateUrl && w.controller) {
                        G = w.controller;
                        E = E || {};
                        X("'" + x + "' controller", E[x], w, u);
                        E[x] = w;
                    }
                    if (G = w.transclude) {
                        if (x !== "ngRepeat") {
                            X("transclusion", A, w, u);
                            A = w;
                        }
                        if (G == "element") {
                            o = w.priority;
                            z = P(d, S, W);
                            u = e.$$element = j(b.createComment(" " + x + ": " + e[x] + " "));
                            d = u[0];
                            _(g, j(fb(z)), d);
                            D = H(z, f, o, B && B.name, {
                                newIsolateScopeDirective: s,
                                transcludeDirective: A,
                                templateDirective: t
                            });
                        } else {
                            z = j(Pb(d)).contents();
                            u.html("");
                            D = H(z, f);
                        }
                    }
                    if (w.template) {
                        X("template", t, w, u);
                        t = w;
                        G = O(w.template) ? w.template(u, e) : w.template;
                        G = C(G);
                        if (w.replace) {
                            B = w;
                            z = j("<div>" + U(G) + "</div>").contents();
                            d = z[0];
                            if (z.length != 1 || d.nodeType !== 1) {
                                throw uc("tplrt", "Template for directive '{0}' must have exactly one root element. {1}", x, "");
                            }
                            _(g, u, d);
                            var Y = {
                                $attr: {}
                            };
                            a = a.concat(M(d, a.splice(L + 1, a.length - (L + 1)), Y));
                            T(e, Y);
                            R = a.length;
                        } else {
                            u.html(G);
                        }
                    }
                    if (w.templateUrl) {
                        X("template", t, w, u);
                        t = w;
                        if (w.replace) {
                            B = w;
                        }
                        bb = V(a.splice(L, a.length - L), u, e, g, D, i, k, {
                            newIsolateScopeDirective: s,
                            transcludeDirective: A,
                            templateDirective: t
                        });
                        R = a.length;
                    } else if (w.compile) {
                        try {
                            F = w.compile(u, e, D);
                            if (O(F)) {
                                $(null, F, S, W);
                            } else if (F) {
                                $(F.pre, F.post, S, W);
                            }
                        } catch (Z) {
                            n(Z, lb(u));
                        }
                    }
                    if (w.terminal) {
                        bb.terminal = true;
                        o = Math.max(o, w.priority);
                    }
                }
                bb.scope = p && p.scope;
                bb.transclude = A && D;
                return bb;
                function $(a, b, c, d) {
                    if (a) {
                        if (c) a = Q(a, c, d);
                        a.require = w.require;
                        i.push(a);
                    }
                    if (b) {
                        if (c) b = Q(b, c, d);
                        b.require = w.require;
                        k.push(b);
                    }
                }
                function ab(a, b) {
                    var c, d = "data", e = false;
                    if (K(a)) {
                        while ((c = a.charAt(0)) == "^" || c == "?") {
                            a = a.substr(1);
                            if (c == "^") {
                                d = "inheritedData";
                            }
                            e = e || c == "?";
                        }
                        c = b[d]("$" + a + "Controller");
                        if (b[0].nodeType == 8 && b[0].$$controller) {
                            c = c || b[0].$$controller;
                            b[0].$$controller = null;
                        }
                        if (!c && !e) {
                            throw uc("ctreq", "Controller '{0}', required by directive '{1}', can't be found!", a, x);
                        }
                        return c;
                    } else if (N(a)) {
                        c = [];
                        v(a, function(a) {
                            c.push(ab(a, b));
                        });
                    }
                    return c;
                }
                function bb(a, b, f, g, h) {
                    var l, o, p, t, u, w;
                    if (d === f) {
                        l = e;
                    } else {
                        l = cb(e, new y(j(f), e.$attr));
                    }
                    o = l.$$element;
                    if (s) {
                        var x = /^\s*([@=&])(\??)\s*(\w*)\s*$/;
                        var z = b.$parent || b;
                        v(s.scope, function(a, c) {
                            var d = a.match(x) || [], e = d[3] || c, f = d[2] == "?", g = d[1], h, i, j;
                            b.$$isolateBindings[c] = g + e;
                            switch (g) {
                              case "@":
                                {
                                    l.$observe(e, function(a) {
                                        b[c] = a;
                                    });
                                    l.$$observers[e].$$scope = z;
                                    if (l[e]) {
                                        b[c] = m(l[e])(z);
                                    }
                                    break;
                                }

                              case "=":
                                {
                                    if (f && !l[e]) {
                                        return;
                                    }
                                    i = q(l[e]);
                                    j = i.assign || function() {
                                        h = b[c] = i(z);
                                        throw uc("nonassign", "Expression '{0}' used with directive '{1}' is non-assignable!", l[e], s.name);
                                    };
                                    h = b[c] = i(z);
                                    b.$watch(function k() {
                                        var a = i(z);
                                        if (a !== b[c]) {
                                            if (a !== h) {
                                                h = b[c] = a;
                                            } else {
                                                j(z, a = h = b[c]);
                                            }
                                        }
                                        return a;
                                    });
                                    break;
                                }

                              case "&":
                                {
                                    i = q(l[e]);
                                    b[c] = function(a) {
                                        return i(z, a);
                                    };
                                    break;
                                }

                              default:
                                {
                                    throw uc("iscp", "Invalid isolate scope definition for directive '{0}'. Definition: {... {1}: '{2}' ...}", s.name, c, a);
                                }
                            }
                        });
                    }
                    if (E) {
                        v(E, function(a) {
                            var c = {
                                $scope: b,
                                $element: o,
                                $attrs: l,
                                $transclude: h
                            }, d;
                            w = a.controller;
                            if (w == "@") {
                                w = l[a.name];
                            }
                            d = r(w, c);
                            if (o[0].nodeType == 8) {
                                o[0].$$controller = d;
                            } else {
                                o.data("$" + a.name + "Controller", d);
                            }
                            if (a.controllerAs) {
                                c.$scope[a.controllerAs] = d;
                            }
                        });
                    }
                    for (p = 0, t = i.length; p < t; p++) {
                        try {
                            u = i[p];
                            u(b, o, l, u.require && ab(u.require, o));
                        } catch (A) {
                            n(A, lb(o));
                        }
                    }
                    a && a(b, f.childNodes, c, h);
                    for (p = k.length - 1; p >= 0; p--) {
                        try {
                            u = k[p];
                            u(b, o, l, u.require && ab(u.require, o));
                        } catch (A) {
                            n(A, lb(o));
                        }
                    }
                }
            }
            function S(b, f, g, h, i, j, k) {
                if (f === i) return null;
                var l = null;
                if (d.hasOwnProperty(f)) {
                    for (var m, o = a.get(f + e), p = 0, q = o.length; p < q; p++) {
                        try {
                            m = o[p];
                            if ((h === c || h > m.priority) && m.restrict.indexOf(g) != -1) {
                                if (j) {
                                    m = D(m, {
                                        $$start: j,
                                        $$end: k
                                    });
                                }
                                b.push(m);
                                l = m;
                            }
                        } catch (r) {
                            n(r);
                        }
                    }
                }
                return l;
            }
            function T(a, b) {
                var c = b.$attr, d = a.$attr, e = a.$$element;
                v(a, function(d, e) {
                    if (e.charAt(0) != "$") {
                        if (b[e]) {
                            d += (e === "style" ? ";" : " ") + b[e];
                        }
                        a.$set(e, d, true, c[e]);
                    }
                });
                v(b, function(b, f) {
                    if (f == "class") {
                        I(e, b);
                        a["class"] = (a["class"] ? a["class"] + " " : "") + b;
                    } else if (f == "style") {
                        e.attr("style", e.attr("style") + ";" + b);
                    } else if (f.charAt(0) != "$" && !a.hasOwnProperty(f)) {
                        a[f] = b;
                        d[f] = c[f];
                    }
                });
            }
            function V(a, b, c, d, e, f, g, h) {
                var i = [], k, l, m = b[0], n = a.shift(), q = B({}, n, {
                    templateUrl: null,
                    transclude: null,
                    replace: null
                }), r = O(n.templateUrl) ? n.templateUrl(b, c) : n.templateUrl;
                b.html("");
                o.get(w.getTrustedResourceUrl(r), {
                    cache: p
                }).success(function(o) {
                    var p, s, t;
                    o = C(o);
                    if (n.replace) {
                        t = j("<div>" + U(o) + "</div>").contents();
                        p = t[0];
                        if (t.length != 1 || p.nodeType !== 1) {
                            throw uc("tplrt", "Template for directive '{0}' must have exactly one root element. {1}", n.name, r);
                        }
                        s = {
                            $attr: {}
                        };
                        _(d, b, p);
                        M(p, a, s);
                        T(c, s);
                    } else {
                        p = m;
                        b.html(o);
                    }
                    a.unshift(q);
                    k = R(a, p, c, e, b, n, f, g, h);
                    v(d, function(a, c) {
                        if (a == p) {
                            d[c] = b[0];
                        }
                    });
                    l = L(b[0].childNodes, e);
                    while (i.length) {
                        var u = i.shift(), w = i.shift(), x = i.shift(), y = i.shift(), z = b[0];
                        if (w !== m) {
                            z = Pb(p);
                            _(x, j(w), z);
                        }
                        k(l, u, z, d, y);
                    }
                    i = null;
                }).error(function(a, b, c, d) {
                    throw uc("tpload", "Failed to load template: {0}", d.url);
                });
                return function s(a, b, c, d, e) {
                    if (i) {
                        i.push(b);
                        i.push(c);
                        i.push(d);
                        i.push(e);
                    } else {
                        k(l, b, c, d, e);
                    }
                };
            }
            function W(a, b) {
                var c = b.priority - a.priority;
                if (c !== 0) return c;
                if (a.name !== b.name) return a.name < b.name ? -1 : 1;
                return a.index - b.index;
            }
            function X(a, b, c, d) {
                if (b) {
                    throw uc("multidir", "Multiple directives [{0}, {1}] asking for {2} on: {3}", b.name, c.name, a, lb(d));
                }
            }
            function Y(a, b) {
                var c = m(b, true);
                if (c) {
                    a.push({
                        priority: 0,
                        compile: G(function d(a, b) {
                            var d = b.parent(), e = d.data("$binding") || [];
                            e.push(c);
                            I(d.data("$binding", e), "ng-binding");
                            a.$watch(c, function f(a) {
                                b[0].nodeValue = a;
                            });
                        })
                    });
                }
            }
            function Z(a, b) {
                if (b == "xlinkHref" || s(a) != "IMG" && (b == "src" || b == "ngSrc")) {
                    return w.RESOURCE_URL;
                }
            }
            function $(a, b, c, d) {
                var e = m(c, true);
                if (!e) return;
                if (d === "multiple" && s(a) === "SELECT") {
                    throw uc("selmulti", "Binding to the 'multiple' attribute is not supported. Element: {0}", lb(a));
                }
                b.push({
                    priority: -100,
                    compile: G(function f(b, c, f) {
                        var g = f.$$observers || (f.$$observers = {});
                        if (l.test(d)) {
                            throw uc("nodomevents", "Interpolations for HTML DOM event attributes are disallowed.  Please use the ng- " + "versions (such as ng-click instead of onclick) instead.");
                        }
                        e = m(f[d], true, Z(a, d));
                        if (!e) return;
                        f[d] = e(b);
                        (g[d] || (g[d] = [])).$$inter = true;
                        (f.$$observers && f.$$observers[d].$$scope || b).$watch(e, function h(a) {
                            f.$set(d, a);
                        });
                    })
                });
            }
            function _(a, c, d) {
                var e = c[0], f = c.length, g = e.parentNode, h, i;
                if (a) {
                    for (h = 0, i = a.length; h < i; h++) {
                        if (a[h] == e) {
                            a[h++] = d;
                            for (var k = h, l = k + f - 1, m = a.length; k < m; k++, l++) {
                                if (l < m) {
                                    a[k] = a[l];
                                } else {
                                    delete a[k];
                                }
                            }
                            a.length -= f - 1;
                            break;
                        }
                    }
                }
                if (g) {
                    g.replaceChild(d, e);
                }
                var n = b.createDocumentFragment();
                n.appendChild(e);
                d[j.expando] = e[j.expando];
                for (var o = 1, p = c.length; o < p; o++) {
                    var q = c[o];
                    j(q).remove();
                    n.appendChild(q);
                    delete c[o];
                }
                c[0] = d;
                c.length = 1;
            }
        } ];
    }
    var wc = /^(x[\:\-_]|data[\:\-_])/i;
    function xc(a) {
        return Mb(a.replace(wc, ""));
    }
    function yc(a, b, c, d) {}
    function zc(a, b, c, d, e) {}
    function Ac() {
        var a = {}, b = /^(\S+)(\s+as\s+(\w+))?$/;
        this.register = function(b, c) {
            yb(b, "controller");
            if (J(b)) {
                B(a, b);
            } else {
                a[b] = c;
            }
        };
        this.$get = [ "$injector", "$window", function(c, e) {
            return function(f, g) {
                var h, i, j, k;
                if (K(f)) {
                    i = f.match(b), j = i[1], k = i[3];
                    f = a.hasOwnProperty(j) ? a[j] : zb(g.$scope, j, true) || zb(e, j, true);
                    xb(f, j, true);
                }
                h = c.instantiate(f, g);
                if (k) {
                    if (!(g && typeof g.$scope == "object")) {
                        throw d("$controller")("noscp", "Cannot export controller '{0}' as '{1}'! No $scope object provided via `locals`.", j || f.name, k);
                    }
                    g.$scope[k] = h;
                }
                return h;
            };
        } ];
    }
    function Bc() {
        this.$get = [ "$window", function(a) {
            return j(a.document);
        } ];
    }
    function Cc() {
        this.$get = [ "$log", function(a) {
            return function(b, c) {
                a.error.apply(a, arguments);
            };
        } ];
    }
    function Dc(a) {
        var b = {}, c, d, f;
        if (!a) return b;
        v(a.split("\n"), function(a) {
            f = a.indexOf(":");
            c = e(U(a.substr(0, f)));
            d = U(a.substr(f + 1));
            if (c) {
                if (b[c]) {
                    b[c] += ", " + d;
                } else {
                    b[c] = d;
                }
            }
        });
        return b;
    }
    function Ec(a) {
        var b = J(a) ? a : c;
        return function(c) {
            if (!b) b = Dc(a);
            if (c) {
                return b[e(c)] || null;
            }
            return b;
        };
    }
    function Fc(a, b, c) {
        if (O(c)) return c(a, b);
        v(c, function(c) {
            a = c(a, b);
        });
        return a;
    }
    function Gc(a) {
        return 200 <= a && a < 300;
    }
    function Hc() {
        var a = /^\s*(\[|\{[^\{])/, b = /[\}\]]\s*$/, d = /^\)\]\}',?\n/, g = {
            "Content-Type": "application/json;charset=utf-8"
        };
        var h = this.defaults = {
            transformResponse: [ function(c) {
                if (K(c)) {
                    c = c.replace(d, "");
                    if (a.test(c) && b.test(c)) c = jb(c);
                }
                return c;
            } ],
            transformRequest: [ function(a) {
                return J(a) && !S(a) ? ib(a) : a;
            } ],
            headers: {
                common: {
                    Accept: "application/json, text/plain, */*"
                },
                post: g,
                put: g,
                patch: g
            },
            xsrfCookieName: "XSRF-TOKEN",
            xsrfHeaderName: "X-XSRF-TOKEN"
        };
        var i = this.interceptors = [];
        var j = this.responseInterceptors = [];
        this.$get = [ "$httpBackend", "$browser", "$cacheFactory", "$rootScope", "$q", "$injector", function(a, b, d, g, k, l) {
            var m = d("$http");
            var n = [];
            v(i, function(a) {
                n.unshift(K(a) ? l.get(a) : l.invoke(a));
            });
            v(j, function(a, b) {
                var c = K(a) ? l.get(a) : l.invoke(a);
                n.splice(b, 0, {
                    response: function(a) {
                        return c(k.when(a));
                    },
                    responseError: function(a) {
                        return c(k.reject(a));
                    }
                });
            });
            function o(a) {
                var d = {
                    transformRequest: h.transformRequest,
                    transformResponse: h.transformResponse
                };
                var g = s(a);
                B(d, a);
                d.headers = g;
                d.method = f(d.method);
                var i = Hd(d.url) ? b.cookies()[d.xsrfCookieName || h.xsrfCookieName] : c;
                if (i) {
                    g[d.xsrfHeaderName || h.xsrfHeaderName] = i;
                }
                var j = function(a) {
                    g = a.headers;
                    var b = Fc(a.data, Ec(g), a.transformRequest);
                    if (H(a.data)) {
                        v(g, function(a, b) {
                            if (e(b) === "content-type") {
                                delete g[b];
                            }
                        });
                    }
                    if (H(a.withCredentials) && !H(h.withCredentials)) {
                        a.withCredentials = h.withCredentials;
                    }
                    return r(a, b, g).then(q, q);
                };
                var l = [ j, c ];
                var m = k.when(d);
                v(n, function(a) {
                    if (a.request || a.requestError) {
                        l.unshift(a.request, a.requestError);
                    }
                    if (a.response || a.responseError) {
                        l.push(a.response, a.responseError);
                    }
                });
                while (l.length) {
                    var o = l.shift();
                    var p = l.shift();
                    m = m.then(o, p);
                }
                m.success = function(a) {
                    m.then(function(b) {
                        a(b.data, b.status, b.headers, d);
                    });
                    return m;
                };
                m.error = function(a) {
                    m.then(null, function(b) {
                        a(b.data, b.status, b.headers, d);
                    });
                    return m;
                };
                return m;
                function q(a) {
                    var b = B({}, a, {
                        data: Fc(a.data, a.headers, d.transformResponse)
                    });
                    return Gc(a.status) ? b : k.reject(b);
                }
                function s(a) {
                    var b = h.headers, c = B({}, a.headers), d, f, g;
                    b = B({}, b.common, b[e(a.method)]);
                    i(b);
                    i(c);
                    a: for (d in b) {
                        f = e(d);
                        for (g in c) {
                            if (e(g) === f) {
                                continue a;
                            }
                        }
                        c[d] = b[d];
                    }
                    return c;
                    function i(a) {
                        var b;
                        v(a, function(c, d) {
                            if (O(c)) {
                                b = c();
                                if (b != null) {
                                    a[d] = b;
                                } else {
                                    delete a[d];
                                }
                            }
                        });
                    }
                }
            }
            o.pendingRequests = [];
            p("get", "delete", "head", "jsonp");
            q("post", "put");
            o.defaults = h;
            return o;
            function p(a) {
                v(arguments, function(a) {
                    o[a] = function(b, c) {
                        return o(B(c || {}, {
                            method: a,
                            url: b
                        }));
                    };
                });
            }
            function q(a) {
                v(arguments, function(a) {
                    o[a] = function(b, c, d) {
                        return o(B(d || {}, {
                            method: a,
                            url: b,
                            data: c
                        }));
                    };
                });
            }
            function r(b, c, d) {
                var e = k.defer(), f = e.promise, i, j, l = s(b.url, b.params);
                o.pendingRequests.push(b);
                f.then(q, q);
                if ((b.cache || h.cache) && b.cache !== false && b.method == "GET") {
                    i = J(b.cache) ? b.cache : J(h.cache) ? h.cache : m;
                }
                if (i) {
                    j = i.get(l);
                    if (I(j)) {
                        if (j.then) {
                            j.then(q, q);
                            return j;
                        } else {
                            if (N(j)) {
                                p(j[1], j[0], bb(j[2]));
                            } else {
                                p(j, 200, {});
                            }
                        }
                    } else {
                        i.put(l, f);
                    }
                }
                if (H(j)) {
                    a(b.method, l, c, n, d, b.timeout, b.withCredentials, b.responseType);
                }
                return f;
                function n(a, b, c) {
                    if (i) {
                        if (Gc(a)) {
                            i.put(l, [ a, b, Dc(c) ]);
                        } else {
                            i.remove(l);
                        }
                    }
                    p(b, a, c);
                    if (!g.$$phase) g.$apply();
                }
                function p(a, c, d) {
                    c = Math.max(c, 0);
                    (Gc(c) ? e.resolve : e.reject)({
                        data: a,
                        status: c,
                        headers: Ec(d),
                        config: b
                    });
                }
                function q() {
                    var a = $(o.pendingRequests, b);
                    if (a !== -1) o.pendingRequests.splice(a, 1);
                }
            }
            function s(a, b) {
                if (!b) return a;
                var d = [];
                x(b, function(a, b) {
                    if (a == null || a == c) return;
                    if (!N(a)) a = [ a ];
                    v(a, function(a) {
                        if (J(a)) {
                            a = ib(a);
                        }
                        d.push(qb(b) + "=" + qb(a));
                    });
                });
                return a + (a.indexOf("?") == -1 ? "?" : "&") + d.join("&");
            }
        } ];
    }
    var Ic = a.XMLHttpRequest || function() {
        try {
            return new ActiveXObject("Msxml2.XMLHTTP.6.0");
        } catch (a) {}
        try {
            return new ActiveXObject("Msxml2.XMLHTTP.3.0");
        } catch (b) {}
        try {
            return new ActiveXObject("Msxml2.XMLHTTP");
        } catch (c) {}
        throw d("$httpBackend")("noxhr", "This browser does not support XMLHttpRequest.");
    };
    function Jc() {
        this.$get = [ "$browser", "$window", "$document", function(a, b, c) {
            return Kc(a, Ic, a.defer, b.angular.callbacks, c[0], b.location.protocol.replace(":", ""));
        } ];
    }
    function Kc(a, b, c, d, f, g) {
        return function(f, i, j, k, l, m, n, o) {
            var p;
            a.$$incOutstandingRequestCount();
            i = i || a.url();
            if (e(f) == "jsonp") {
                var q = "_" + (d.counter++).toString(36);
                d[q] = function(a) {
                    d[q].data = a;
                };
                var r = h(i.replace("JSON_CALLBACK", "angular.callbacks." + q), function() {
                    if (d[q].data) {
                        w(k, 200, d[q].data);
                    } else {
                        w(k, p || -2);
                    }
                    delete d[q];
                });
            } else {
                var s = new b();
                s.open(f, i, true);
                v(l, function(a, b) {
                    if (I(a)) {
                        s.setRequestHeader(b, a);
                    }
                });
                s.onreadystatechange = function() {
                    if (s.readyState == 4) {
                        var a = s.getAllResponseHeaders();
                        w(k, p || s.status, s.responseType ? s.response : s.responseText, a);
                    }
                };
                if (n) {
                    s.withCredentials = true;
                }
                if (o) {
                    s.responseType = o;
                }
                s.send(j || null);
            }
            if (m > 0) {
                var t = c(u, m);
            } else if (m && m.then) {
                m.then(u);
            }
            function u() {
                p = -1;
                r && r();
                s && s.abort();
            }
            function w(b, d, e, f) {
                var h = g || Gd(i).protocol;
                t && c.cancel(t);
                r = s = null;
                d = h == "file" ? e ? 200 : 404 : d;
                d = d == 1223 ? 204 : d;
                b(d, e, f);
                a.$$completeOutstandingRequest(E);
            }
        };
        function h(a, b) {
            var c = f.createElement("script"), d = function() {
                f.body.removeChild(c);
                if (b) b();
            };
            c.type = "text/javascript";
            c.src = a;
            if (i) {
                c.onreadystatechange = function() {
                    if (/loaded|complete/.test(c.readyState)) d();
                };
            } else {
                c.onload = c.onerror = d;
            }
            f.body.appendChild(c);
            return d;
        }
    }
    var Lc = d("$interpolate");
    function Mc() {
        var a = "{{";
        var b = "}}";
        this.startSymbol = function(b) {
            if (b) {
                a = b;
                return this;
            } else {
                return a;
            }
        };
        this.endSymbol = function(a) {
            if (a) {
                b = a;
                return this;
            } else {
                return b;
            }
        };
        this.$get = [ "$parse", "$exceptionHandler", "$sce", function(d, e, f) {
            var g = a.length, h = b.length;
            function i(i, j, k) {
                var l, m, n = 0, o = [], p = i.length, q = false, r, s, t = [];
                while (n < p) {
                    if ((l = i.indexOf(a, n)) != -1 && (m = i.indexOf(b, l + g)) != -1) {
                        n != l && o.push(i.substring(n, l));
                        o.push(r = d(s = i.substring(l + g, m)));
                        r.exp = s;
                        n = m + h;
                        q = true;
                    } else {
                        n != p && o.push(i.substring(n));
                        n = p;
                    }
                }
                if (!(p = o.length)) {
                    o.push("");
                    p = 1;
                }
                if (k && o.length > 1) {
                    throw Lc("noconcat", "Error while interpolating: {0}\nStrict Contextual Escaping disallows " + "interpolations that concatenate multiple expressions when a trusted value is " + "required.  See http://docs.angularjs.org/api/ng.$sce", i);
                }
                if (!j || q) {
                    t.length = p;
                    r = function(a) {
                        try {
                            for (var b = 0, d = p, g; b < d; b++) {
                                if (typeof (g = o[b]) == "function") {
                                    g = g(a);
                                    if (k) {
                                        g = f.getTrusted(k, g);
                                    } else {
                                        g = f.valueOf(g);
                                    }
                                    if (g == null || g == c) {
                                        g = "";
                                    } else if (typeof g != "string") {
                                        g = ib(g);
                                    }
                                }
                                t[b] = g;
                            }
                            return t.join("");
                        } catch (h) {
                            var j = Lc("interr", "Can't interpolate: {0}\n{1}", i, h.toString());
                            e(j);
                        }
                    };
                    r.exp = i;
                    r.parts = o;
                    return r;
                }
            }
            i.startSymbol = function() {
                return a;
            };
            i.endSymbol = function() {
                return b;
            };
            return i;
        } ];
    }
    function Nc() {
        this.$get = [ "$rootScope", "$window", "$q", function(a, b, c) {
            var d = {};
            function e(e, f, g, h) {
                var i = b.setInterval, j = b.clearInterval;
                var k = c.defer(), l = k.promise, g = I(g) ? g : 0, m = 0, n = I(h) && !h;
                l.then(null, null, e);
                l.$$intervalId = i(function o() {
                    k.notify(m++);
                    if (g > 0 && m >= g) {
                        k.resolve(m);
                        j(l.$$intervalId);
                        delete d[l.$$intervalId];
                    }
                    if (!n) a.$apply();
                }, f);
                d[l.$$intervalId] = k;
                return l;
            }
            e.cancel = function(a) {
                if (a && a.$$intervalId in d) {
                    d[a.$$intervalId].reject("canceled");
                    clearInterval(a.$$intervalId);
                    delete d[a.$$intervalId];
                    return true;
                }
                return false;
            };
            return e;
        } ];
    }
    function Oc() {
        this.$get = function() {
            return {
                id: "en-us",
                NUMBER_FORMATS: {
                    DECIMAL_SEP: ".",
                    GROUP_SEP: ",",
                    PATTERNS: [ {
                        minInt: 1,
                        minFrac: 0,
                        maxFrac: 3,
                        posPre: "",
                        posSuf: "",
                        negPre: "-",
                        negSuf: "",
                        gSize: 3,
                        lgSize: 3
                    }, {
                        minInt: 1,
                        minFrac: 2,
                        maxFrac: 2,
                        posPre: "¤",
                        posSuf: "",
                        negPre: "(¤",
                        negSuf: ")",
                        gSize: 3,
                        lgSize: 3
                    } ],
                    CURRENCY_SYM: "$"
                },
                DATETIME_FORMATS: {
                    MONTH: "January,February,March,April,May,June,July,August,September,October,November,December".split(","),
                    SHORTMONTH: "Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec".split(","),
                    DAY: "Sunday,Monday,Tuesday,Wednesday,Thursday,Friday,Saturday".split(","),
                    SHORTDAY: "Sun,Mon,Tue,Wed,Thu,Fri,Sat".split(","),
                    AMPMS: [ "AM", "PM" ],
                    medium: "MMM d, y h:mm:ss a",
                    "short": "M/d/yy h:mm a",
                    fullDate: "EEEE, MMMM d, y",
                    longDate: "MMMM d, y",
                    mediumDate: "MMM d, y",
                    shortDate: "M/d/yy",
                    mediumTime: "h:mm:ss a",
                    shortTime: "h:mm a"
                },
                pluralCat: function(a) {
                    if (a === 1) {
                        return "one";
                    }
                    return "other";
                }
            };
        };
    }
    var Pc = /^([^\?#]*)(\?([^#]*))?(#(.*))?$/, Qc = {
        http: 80,
        https: 443,
        ftp: 21
    };
    var Rc = d("$location");
    function Sc(a) {
        var b = a.split("/"), c = b.length;
        while (c--) {
            b[c] = pb(b[c]);
        }
        return b.join("/");
    }
    function Tc(a, b) {
        var c = Gd(a);
        b.$$protocol = c.protocol;
        b.$$host = c.hostname;
        b.$$port = C(c.port) || Qc[c.protocol] || null;
    }
    function Uc(a, b) {
        var c = a.charAt(0) !== "/";
        if (c) {
            a = "/" + a;
        }
        var d = Gd(a);
        b.$$path = decodeURIComponent(c && d.pathname.charAt(0) === "/" ? d.pathname.substring(1) : d.pathname);
        b.$$search = nb(d.search);
        b.$$hash = decodeURIComponent(d.hash);
        if (b.$$path && b.$$path.charAt(0) != "/") b.$$path = "/" + b.$$path;
    }
    function Vc(a, b) {
        if (b.indexOf(a) == 0) {
            return b.substr(a.length);
        }
    }
    function Wc(a) {
        var b = a.indexOf("#");
        return b == -1 ? a : a.substr(0, b);
    }
    function Xc(a) {
        return a.substr(0, Wc(a).lastIndexOf("/") + 1);
    }
    function Yc(a) {
        return a.substring(0, a.indexOf("/", a.indexOf("//") + 2));
    }
    function Zc(a, b) {
        this.$$html5 = true;
        b = b || "";
        var d = Xc(a);
        Tc(a, this);
        this.$$parse = function(a) {
            var b = Vc(d, a);
            if (!K(b)) {
                throw Rc("ipthprfx", 'Invalid url "{0}", missing path prefix "{1}".', a, d);
            }
            Uc(b, this);
            if (!this.$$path) {
                this.$$path = "/";
            }
            this.$$compose();
        };
        this.$$compose = function() {
            var a = ob(this.$$search), b = this.$$hash ? "#" + pb(this.$$hash) : "";
            this.$$url = Sc(this.$$path) + (a ? "?" + a : "") + b;
            this.$$absUrl = d + this.$$url.substr(1);
        };
        this.$$rewrite = function(e) {
            var f, g;
            if ((f = Vc(a, e)) !== c) {
                g = f;
                if ((f = Vc(b, f)) !== c) {
                    return d + (Vc("/", f) || f);
                } else {
                    return a + g;
                }
            } else if ((f = Vc(d, e)) !== c) {
                return d + f;
            } else if (d == e + "/") {
                return d;
            }
        };
    }
    function $c(a, b) {
        var c = Xc(a);
        Tc(a, this);
        this.$$parse = function(d) {
            var e = Vc(a, d) || Vc(c, d);
            var f = e.charAt(0) == "#" ? Vc(b, e) : this.$$html5 ? e : "";
            if (!K(f)) {
                throw Rc("ihshprfx", 'Invalid url "{0}", missing hash prefix "{1}".', d, b);
            }
            Uc(f, this);
            this.$$compose();
        };
        this.$$compose = function() {
            var c = ob(this.$$search), d = this.$$hash ? "#" + pb(this.$$hash) : "";
            this.$$url = Sc(this.$$path) + (c ? "?" + c : "") + d;
            this.$$absUrl = a + (this.$$url ? b + this.$$url : "");
        };
        this.$$rewrite = function(b) {
            if (Wc(a) == Wc(b)) {
                return b;
            }
        };
    }
    function _c(a, b) {
        this.$$html5 = true;
        $c.apply(this, arguments);
        var c = Xc(a);
        this.$$rewrite = function(d) {
            var e;
            if (a == Wc(d)) {
                return d;
            } else if (e = Vc(c, d)) {
                return a + b + e;
            } else if (c === d + "/") {
                return c;
            }
        };
    }
    _c.prototype = $c.prototype = Zc.prototype = {
        $$html5: false,
        $$replace: false,
        absUrl: ad("$$absUrl"),
        url: function(a, b) {
            if (H(a)) return this.$$url;
            var c = Pc.exec(a);
            if (c[1]) this.path(decodeURIComponent(c[1]));
            if (c[2] || c[1]) this.search(c[3] || "");
            this.hash(c[5] || "", b);
            return this;
        },
        protocol: ad("$$protocol"),
        host: ad("$$host"),
        port: ad("$$port"),
        path: bd("$$path", function(a) {
            return a.charAt(0) == "/" ? a : "/" + a;
        }),
        search: function(a, b) {
            switch (arguments.length) {
              case 0:
                return this.$$search;

              case 1:
                if (K(a)) {
                    this.$$search = nb(a);
                } else if (J(a)) {
                    this.$$search = a;
                } else {
                    throw Rc("isrcharg", "The first argument of the `$location#search()` call must be a string or an object.");
                }
                break;

              default:
                if (b == c || b == null) {
                    delete this.$$search[a];
                } else {
                    this.$$search[a] = b;
                }
            }
            this.$$compose();
            return this;
        },
        hash: bd("$$hash", F),
        replace: function() {
            this.$$replace = true;
            return this;
        }
    };
    function ad(a) {
        return function() {
            return this[a];
        };
    }
    function bd(a, b) {
        return function(c) {
            if (H(c)) return this[a];
            this[a] = b(c);
            this.$$compose();
            return this;
        };
    }
    function cd() {
        var b = "", c = false;
        this.hashPrefix = function(a) {
            if (I(a)) {
                b = a;
                return this;
            } else {
                return b;
            }
        };
        this.html5Mode = function(a) {
            if (I(a)) {
                c = a;
                return this;
            } else {
                return c;
            }
        };
        this.$get = [ "$rootScope", "$browser", "$sniffer", "$rootElement", function(d, f, g, h) {
            var i, k, l = f.baseHref(), m = f.url(), n;
            if (c) {
                n = Yc(m) + (l || "/");
                k = g.history ? Zc : _c;
            } else {
                n = Wc(m);
                k = $c;
            }
            i = new k(n, "#" + b);
            i.$$parse(i.$$rewrite(m));
            h.on("click", function(b) {
                if (b.ctrlKey || b.metaKey || b.which == 2) return;
                var c = j(b.target);
                while (e(c[0].nodeName) !== "a") {
                    if (c[0] === h[0] || !(c = c.parent())[0]) return;
                }
                var g = c.prop("href");
                var k = i.$$rewrite(g);
                if (g && !c.attr("target") && k && !b.isDefaultPrevented()) {
                    b.preventDefault();
                    if (k != f.url()) {
                        i.$$parse(k);
                        d.$apply();
                        a.angular["ff-684208-preventDefault"] = true;
                    }
                }
            });
            if (i.absUrl() != m) {
                f.url(i.absUrl(), true);
            }
            f.onUrlChange(function(a) {
                if (i.absUrl() != a) {
                    if (d.$broadcast("$locationChangeStart", a, i.absUrl()).defaultPrevented) {
                        f.url(i.absUrl());
                        return;
                    }
                    d.$evalAsync(function() {
                        var b = i.absUrl();
                        i.$$parse(a);
                        p(b);
                    });
                    if (!d.$$phase) d.$digest();
                }
            });
            var o = 0;
            d.$watch(function q() {
                var a = f.url();
                var b = i.$$replace;
                if (!o || a != i.absUrl()) {
                    o++;
                    d.$evalAsync(function() {
                        if (d.$broadcast("$locationChangeStart", i.absUrl(), a).defaultPrevented) {
                            i.$$parse(a);
                        } else {
                            f.url(i.absUrl(), b);
                            p(a);
                        }
                    });
                }
                i.$$replace = false;
                return o;
            });
            return i;
            function p(a) {
                d.$broadcast("$locationChangeSuccess", i.absUrl(), a);
            }
        } ];
    }
    function dd() {
        var a = true, b = this;
        this.debugEnabled = function(b) {
            if (I(b)) {
                a = b;
                return this;
            } else {
                return a;
            }
        };
        this.$get = [ "$window", function(c) {
            return {
                log: e("log"),
                info: e("info"),
                warn: e("warn"),
                error: e("error"),
                debug: function() {
                    var c = e("debug");
                    return function() {
                        if (a) {
                            c.apply(b, arguments);
                        }
                    };
                }()
            };
            function d(a) {
                if (a instanceof Error) {
                    if (a.stack) {
                        a = a.message && a.stack.indexOf(a.message) === -1 ? "Error: " + a.message + "\n" + a.stack : a.stack;
                    } else if (a.sourceURL) {
                        a = a.message + "\n" + a.sourceURL + ":" + a.line;
                    }
                }
                return a;
            }
            function e(a) {
                var b = c.console || {}, e = b[a] || b.log || E;
                if (e.apply) {
                    return function() {
                        var a = [];
                        v(arguments, function(b) {
                            a.push(d(b));
                        });
                        return e.apply(b, a);
                    };
                }
                return function(a, b) {
                    e(a, b == null ? "" : b);
                };
            }
        } ];
    }
    var ed = d("$parse");
    var fd = {};
    var gd;
    function hd(a, b) {
        if (a === "constructor") {
            throw ed("isecfld", 'Referencing "constructor" field in Angular expressions is disallowed! Expression: {0}', b);
        }
        return a;
    }
    function id(a, b) {
        if (a && a.constructor === a) {
            throw ed("isecfn", "Referencing Function in Angular expressions is disallowed! Expression: {0}", b);
        } else if (a && a.document && a.location && a.alert && a.setInterval) {
            throw ed("isecwindow", "Referencing the Window in Angular expressions is disallowed! Expression: {0}", b);
        } else if (a && (a.nodeName || a.on && a.find)) {
            throw ed("isecdom", "Referencing DOM nodes in Angular expressions is disallowed! Expression: {0}", b);
        } else {
            return a;
        }
    }
    var jd = {
        "null": function() {
            return null;
        },
        "true": function() {
            return true;
        },
        "false": function() {
            return false;
        },
        undefined: E,
        "+": function(a, b, d, e) {
            d = d(a, b);
            e = e(a, b);
            if (I(d)) {
                if (I(e)) {
                    return d + e;
                }
                return d;
            }
            return I(e) ? e : c;
        },
        "-": function(a, b, c, d) {
            c = c(a, b);
            d = d(a, b);
            return (I(c) ? c : 0) - (I(d) ? d : 0);
        },
        "*": function(a, b, c, d) {
            return c(a, b) * d(a, b);
        },
        "/": function(a, b, c, d) {
            return c(a, b) / d(a, b);
        },
        "%": function(a, b, c, d) {
            return c(a, b) % d(a, b);
        },
        "^": function(a, b, c, d) {
            return c(a, b) ^ d(a, b);
        },
        "=": E,
        "===": function(a, b, c, d) {
            return c(a, b) === d(a, b);
        },
        "!==": function(a, b, c, d) {
            return c(a, b) !== d(a, b);
        },
        "==": function(a, b, c, d) {
            return c(a, b) == d(a, b);
        },
        "!=": function(a, b, c, d) {
            return c(a, b) != d(a, b);
        },
        "<": function(a, b, c, d) {
            return c(a, b) < d(a, b);
        },
        ">": function(a, b, c, d) {
            return c(a, b) > d(a, b);
        },
        "<=": function(a, b, c, d) {
            return c(a, b) <= d(a, b);
        },
        ">=": function(a, b, c, d) {
            return c(a, b) >= d(a, b);
        },
        "&&": function(a, b, c, d) {
            return c(a, b) && d(a, b);
        },
        "||": function(a, b, c, d) {
            return c(a, b) || d(a, b);
        },
        "&": function(a, b, c, d) {
            return c(a, b) & d(a, b);
        },
        "|": function(a, b, c, d) {
            return d(a, b)(a, b, c(a, b));
        },
        "!": function(a, b, c) {
            return !c(a, b);
        }
    };
    var kd = {
        n: "\n",
        f: "\f",
        r: "\r",
        t: "	",
        v: "",
        "'": "'",
        '"': '"'
    };
    var ld = function(a) {
        this.options = a;
    };
    ld.prototype = {
        constructor: ld,
        lex: function(a) {
            this.text = a;
            this.index = 0;
            this.ch = c;
            this.lastCh = ":";
            this.tokens = [];
            var b;
            var d = [];
            while (this.index < this.text.length) {
                this.ch = this.text.charAt(this.index);
                if (this.is("\"'")) {
                    this.readString(this.ch);
                } else if (this.isNumber(this.ch) || this.is(".") && this.isNumber(this.peek())) {
                    this.readNumber();
                } else if (this.isIdent(this.ch)) {
                    this.readIdent();
                    if (this.was("{,") && d[0] === "{" && (b = this.tokens[this.tokens.length - 1])) {
                        b.json = b.text.indexOf(".") === -1;
                    }
                } else if (this.is("(){}[].,;:?")) {
                    this.tokens.push({
                        index: this.index,
                        text: this.ch,
                        json: this.was(":[,") && this.is("{[") || this.is("}]:,")
                    });
                    if (this.is("{[")) d.unshift(this.ch);
                    if (this.is("}]")) d.shift();
                    this.index++;
                } else if (this.isWhitespace(this.ch)) {
                    this.index++;
                    continue;
                } else {
                    var e = this.ch + this.peek();
                    var f = e + this.peek(2);
                    var g = jd[this.ch];
                    var h = jd[e];
                    var i = jd[f];
                    if (i) {
                        this.tokens.push({
                            index: this.index,
                            text: f,
                            fn: i
                        });
                        this.index += 3;
                    } else if (h) {
                        this.tokens.push({
                            index: this.index,
                            text: e,
                            fn: h
                        });
                        this.index += 2;
                    } else if (g) {
                        this.tokens.push({
                            index: this.index,
                            text: this.ch,
                            fn: g,
                            json: this.was("[,:") && this.is("+-")
                        });
                        this.index += 1;
                    } else {
                        this.throwError("Unexpected next character ", this.index, this.index + 1);
                    }
                }
                this.lastCh = this.ch;
            }
            return this.tokens;
        },
        is: function(a) {
            return a.indexOf(this.ch) !== -1;
        },
        was: function(a) {
            return a.indexOf(this.lastCh) !== -1;
        },
        peek: function(a) {
            var b = a || 1;
            return this.index + b < this.text.length ? this.text.charAt(this.index + b) : false;
        },
        isNumber: function(a) {
            return "0" <= a && a <= "9";
        },
        isWhitespace: function(a) {
            return a === " " || a === "\r" || a === "	" || a === "\n" || a === "" || a === " ";
        },
        isIdent: function(a) {
            return "a" <= a && a <= "z" || "A" <= a && a <= "Z" || "_" === a || a === "$";
        },
        isExpOperator: function(a) {
            return a === "-" || a === "+" || this.isNumber(a);
        },
        throwError: function(a, b, c) {
            c = c || this.index;
            var d = I(b) ? "s " + b + "-" + this.index + " [" + this.text.substring(b, c) + "]" : " " + c;
            throw ed("lexerr", "Lexer Error: {0} at column{1} in expression [{2}].", a, d, this.text);
        },
        readNumber: function() {
            var a = "";
            var b = this.index;
            while (this.index < this.text.length) {
                var c = e(this.text.charAt(this.index));
                if (c == "." || this.isNumber(c)) {
                    a += c;
                } else {
                    var d = this.peek();
                    if (c == "e" && this.isExpOperator(d)) {
                        a += c;
                    } else if (this.isExpOperator(c) && d && this.isNumber(d) && a.charAt(a.length - 1) == "e") {
                        a += c;
                    } else if (this.isExpOperator(c) && (!d || !this.isNumber(d)) && a.charAt(a.length - 1) == "e") {
                        this.throwError("Invalid exponent");
                    } else {
                        break;
                    }
                }
                this.index++;
            }
            a = 1 * a;
            this.tokens.push({
                index: b,
                text: a,
                json: true,
                fn: function() {
                    return a;
                }
            });
        },
        readIdent: function() {
            var a = this;
            var b = "";
            var c = this.index;
            var d, e, f, g;
            while (this.index < this.text.length) {
                g = this.text.charAt(this.index);
                if (g === "." || this.isIdent(g) || this.isNumber(g)) {
                    if (g === ".") d = this.index;
                    b += g;
                } else {
                    break;
                }
                this.index++;
            }
            if (d) {
                e = this.index;
                while (e < this.text.length) {
                    g = this.text.charAt(e);
                    if (g === "(") {
                        f = b.substr(d - c + 1);
                        b = b.substr(0, d - c);
                        this.index = e;
                        break;
                    }
                    if (this.isWhitespace(g)) {
                        e++;
                    } else {
                        break;
                    }
                }
            }
            var h = {
                index: c,
                text: b
            };
            if (jd.hasOwnProperty(b)) {
                h.fn = jd[b];
                h.json = jd[b];
            } else {
                var i = qd(b, this.options, this.text);
                h.fn = B(function(a, b) {
                    return i(a, b);
                }, {
                    assign: function(c, d) {
                        return nd(c, b, d, a.text, a.options);
                    }
                });
            }
            this.tokens.push(h);
            if (f) {
                this.tokens.push({
                    index: d,
                    text: ".",
                    json: false
                });
                this.tokens.push({
                    index: d + 1,
                    text: f,
                    json: false
                });
            }
        },
        readString: function(a) {
            var b = this.index;
            this.index++;
            var c = "";
            var d = a;
            var e = false;
            while (this.index < this.text.length) {
                var f = this.text.charAt(this.index);
                d += f;
                if (e) {
                    if (f === "u") {
                        var g = this.text.substring(this.index + 1, this.index + 5);
                        if (!g.match(/[\da-f]{4}/i)) this.throwError("Invalid unicode escape [\\u" + g + "]");
                        this.index += 4;
                        c += String.fromCharCode(parseInt(g, 16));
                    } else {
                        var h = kd[f];
                        if (h) {
                            c += h;
                        } else {
                            c += f;
                        }
                    }
                    e = false;
                } else if (f === "\\") {
                    e = true;
                } else if (f === a) {
                    this.index++;
                    this.tokens.push({
                        index: b,
                        text: d,
                        string: c,
                        json: true,
                        fn: function() {
                            return c;
                        }
                    });
                    return;
                } else {
                    c += f;
                }
                this.index++;
            }
            this.throwError("Unterminated quote", b);
        }
    };
    var md = function(a, b, c) {
        this.lexer = a;
        this.$filter = b;
        this.options = c;
    };
    md.ZERO = function() {
        return 0;
    };
    md.prototype = {
        constructor: md,
        parse: function(a, b) {
            this.text = a;
            this.json = b;
            this.tokens = this.lexer.lex(a);
            if (b) {
                this.assignment = this.logicalOR;
                this.functionCall = this.fieldAccess = this.objectIndex = this.filterChain = function() {
                    this.throwError("is not valid json", {
                        text: a,
                        index: 0
                    });
                };
            }
            var c = b ? this.primary() : this.statements();
            if (this.tokens.length !== 0) {
                this.throwError("is an unexpected token", this.tokens[0]);
            }
            c.literal = !!c.literal;
            c.constant = !!c.constant;
            return c;
        },
        primary: function() {
            var a;
            if (this.expect("(")) {
                a = this.filterChain();
                this.consume(")");
            } else if (this.expect("[")) {
                a = this.arrayDeclaration();
            } else if (this.expect("{")) {
                a = this.object();
            } else {
                var b = this.expect();
                a = b.fn;
                if (!a) {
                    this.throwError("not a primary expression", b);
                }
                if (b.json) {
                    a.constant = true;
                    a.literal = true;
                }
            }
            var c, d;
            while (c = this.expect("(", "[", ".")) {
                if (c.text === "(") {
                    a = this.functionCall(a, d);
                    d = null;
                } else if (c.text === "[") {
                    d = a;
                    a = this.objectIndex(a);
                } else if (c.text === ".") {
                    d = a;
                    a = this.fieldAccess(a);
                } else {
                    this.throwError("IMPOSSIBLE");
                }
            }
            return a;
        },
        throwError: function(a, b) {
            throw ed("syntax", "Syntax Error: Token '{0}' {1} at column {2} of the expression [{3}] starting at [{4}].", b.text, a, b.index + 1, this.text, this.text.substring(b.index));
        },
        peekToken: function() {
            if (this.tokens.length === 0) throw ed("ueoe", "Unexpected end of expression: {0}", this.text);
            return this.tokens[0];
        },
        peek: function(a, b, c, d) {
            if (this.tokens.length > 0) {
                var e = this.tokens[0];
                var f = e.text;
                if (f === a || f === b || f === c || f === d || !a && !b && !c && !d) {
                    return e;
                }
            }
            return false;
        },
        expect: function(a, b, c, d) {
            var e = this.peek(a, b, c, d);
            if (e) {
                if (this.json && !e.json) {
                    this.throwError("is not valid json", e);
                }
                this.tokens.shift();
                return e;
            }
            return false;
        },
        consume: function(a) {
            if (!this.expect(a)) {
                this.throwError("is unexpected, expecting [" + a + "]", this.peek());
            }
        },
        unaryFn: function(a, b) {
            return B(function(c, d) {
                return a(c, d, b);
            }, {
                constant: b.constant
            });
        },
        ternaryFn: function(a, b, c) {
            return B(function(d, e) {
                return a(d, e) ? b(d, e) : c(d, e);
            }, {
                constant: a.constant && b.constant && c.constant
            });
        },
        binaryFn: function(a, b, c) {
            return B(function(d, e) {
                return b(d, e, a, c);
            }, {
                constant: a.constant && c.constant
            });
        },
        statements: function() {
            var a = [];
            while (true) {
                if (this.tokens.length > 0 && !this.peek("}", ")", ";", "]")) a.push(this.filterChain());
                if (!this.expect(";")) {
                    return a.length === 1 ? a[0] : function(b, c) {
                        var d;
                        for (var e = 0; e < a.length; e++) {
                            var f = a[e];
                            if (f) {
                                d = f(b, c);
                            }
                        }
                        return d;
                    };
                }
            }
        },
        filterChain: function() {
            var a = this.expression();
            var b;
            while (true) {
                if (b = this.expect("|")) {
                    a = this.binaryFn(a, b.fn, this.filter());
                } else {
                    return a;
                }
            }
        },
        filter: function() {
            var a = this.expect();
            var b = this.$filter(a.text);
            var c = [];
            while (true) {
                if (a = this.expect(":")) {
                    c.push(this.expression());
                } else {
                    var d = function(a, d, e) {
                        var f = [ e ];
                        for (var g = 0; g < c.length; g++) {
                            f.push(c[g](a, d));
                        }
                        return b.apply(a, f);
                    };
                    return function() {
                        return d;
                    };
                }
            }
        },
        expression: function() {
            return this.assignment();
        },
        assignment: function() {
            var a = this.ternary();
            var b;
            var c;
            if (c = this.expect("=")) {
                if (!a.assign) {
                    this.throwError("implies assignment but [" + this.text.substring(0, c.index) + "] can not be assigned to", c);
                }
                b = this.ternary();
                return function(c, d) {
                    return a.assign(c, b(c, d), d);
                };
            }
            return a;
        },
        ternary: function() {
            var a = this.logicalOR();
            var b;
            var c;
            if (c = this.expect("?")) {
                b = this.ternary();
                if (c = this.expect(":")) {
                    return this.ternaryFn(a, b, this.ternary());
                } else {
                    this.throwError("expected :", c);
                }
            } else {
                return a;
            }
        },
        logicalOR: function() {
            var a = this.logicalAND();
            var b;
            while (true) {
                if (b = this.expect("||")) {
                    a = this.binaryFn(a, b.fn, this.logicalAND());
                } else {
                    return a;
                }
            }
        },
        logicalAND: function() {
            var a = this.equality();
            var b;
            if (b = this.expect("&&")) {
                a = this.binaryFn(a, b.fn, this.logicalAND());
            }
            return a;
        },
        equality: function() {
            var a = this.relational();
            var b;
            if (b = this.expect("==", "!=", "===", "!==")) {
                a = this.binaryFn(a, b.fn, this.equality());
            }
            return a;
        },
        relational: function() {
            var a = this.additive();
            var b;
            if (b = this.expect("<", ">", "<=", ">=")) {
                a = this.binaryFn(a, b.fn, this.relational());
            }
            return a;
        },
        additive: function() {
            var a = this.multiplicative();
            var b;
            while (b = this.expect("+", "-")) {
                a = this.binaryFn(a, b.fn, this.multiplicative());
            }
            return a;
        },
        multiplicative: function() {
            var a = this.unary();
            var b;
            while (b = this.expect("*", "/", "%")) {
                a = this.binaryFn(a, b.fn, this.unary());
            }
            return a;
        },
        unary: function() {
            var a;
            if (this.expect("+")) {
                return this.primary();
            } else if (a = this.expect("-")) {
                return this.binaryFn(md.ZERO, a.fn, this.unary());
            } else if (a = this.expect("!")) {
                return this.unaryFn(a.fn, this.unary());
            } else {
                return this.primary();
            }
        },
        fieldAccess: function(a) {
            var b = this;
            var c = this.expect().text;
            var d = qd(c, this.options, this.text);
            return B(function(b, c, e) {
                return d(e || a(b, c), c);
            }, {
                assign: function(d, e, f) {
                    return nd(a(d, f), c, e, b.text, b.options);
                }
            });
        },
        objectIndex: function(a) {
            var b = this;
            var d = this.expression();
            this.consume("]");
            return B(function(e, f) {
                var g = a(e, f), h = d(e, f), i, j;
                if (!g) return c;
                i = id(g[h], b.text);
                if (i && i.then && b.options.unwrapPromises) {
                    j = i;
                    if (!("$$v" in i)) {
                        j.$$v = c;
                        j.then(function(a) {
                            j.$$v = a;
                        });
                    }
                    i = i.$$v;
                }
                return i;
            }, {
                assign: function(c, e, f) {
                    var g = d(c, f);
                    var h = id(a(c, f), b.text);
                    return h[g] = e;
                }
            });
        },
        functionCall: function(a, b) {
            var c = [];
            if (this.peekToken().text !== ")") {
                do {
                    c.push(this.expression());
                } while (this.expect(","));
            }
            this.consume(")");
            var d = this;
            return function(e, f) {
                var g = [];
                var h = b ? b(e, f) : e;
                for (var i = 0; i < c.length; i++) {
                    g.push(c[i](e, f));
                }
                var j = a(e, f, h) || E;
                id(j, d.text);
                var k = j.apply ? j.apply(h, g) : j(g[0], g[1], g[2], g[3], g[4]);
                return id(k, d.text);
            };
        },
        arrayDeclaration: function() {
            var a = [];
            var b = true;
            if (this.peekToken().text !== "]") {
                do {
                    var c = this.expression();
                    a.push(c);
                    if (!c.constant) {
                        b = false;
                    }
                } while (this.expect(","));
            }
            this.consume("]");
            return B(function(b, c) {
                var d = [];
                for (var e = 0; e < a.length; e++) {
                    d.push(a[e](b, c));
                }
                return d;
            }, {
                literal: true,
                constant: b
            });
        },
        object: function() {
            var a = [];
            var b = true;
            if (this.peekToken().text !== "}") {
                do {
                    var c = this.expect(), d = c.string || c.text;
                    this.consume(":");
                    var e = this.expression();
                    a.push({
                        key: d,
                        value: e
                    });
                    if (!e.constant) {
                        b = false;
                    }
                } while (this.expect(","));
            }
            this.consume("}");
            return B(function(b, c) {
                var d = {};
                for (var e = 0; e < a.length; e++) {
                    var f = a[e];
                    d[f.key] = f.value(b, c);
                }
                return d;
            }, {
                literal: true,
                constant: b
            });
        }
    };
    function nd(a, b, d, e, f) {
        f = f || {};
        var g = b.split("."), h;
        for (var i = 0; g.length > 1; i++) {
            h = hd(g.shift(), e);
            var j = a[h];
            if (!j) {
                j = {};
                a[h] = j;
            }
            a = j;
            if (a.then && f.unwrapPromises) {
                gd(e);
                if (!("$$v" in a)) {
                    (function(a) {
                        a.then(function(b) {
                            a.$$v = b;
                        });
                    })(a);
                }
                if (a.$$v === c) {
                    a.$$v = {};
                }
                a = a.$$v;
            }
        }
        h = hd(g.shift(), e);
        a[h] = d;
        return d;
    }
    var od = {};
    function pd(a, b, d, e, f, g, h) {
        hd(a, g);
        hd(b, g);
        hd(d, g);
        hd(e, g);
        hd(f, g);
        return !h.unwrapPromises ? function i(g, h) {
            var i = h && h.hasOwnProperty(a) ? h : g;
            if (i === null || i === c) return i;
            i = i[a];
            if (!b || i === null || i === c) return i;
            i = i[b];
            if (!d || i === null || i === c) return i;
            i = i[d];
            if (!e || i === null || i === c) return i;
            i = i[e];
            if (!f || i === null || i === c) return i;
            i = i[f];
            return i;
        } : function j(h, i) {
            var j = i && i.hasOwnProperty(a) ? i : h, k;
            if (j === null || j === c) return j;
            j = j[a];
            if (j && j.then) {
                gd(g);
                if (!("$$v" in j)) {
                    k = j;
                    k.$$v = c;
                    k.then(function(a) {
                        k.$$v = a;
                    });
                }
                j = j.$$v;
            }
            if (!b || j === null || j === c) return j;
            j = j[b];
            if (j && j.then) {
                gd(g);
                if (!("$$v" in j)) {
                    k = j;
                    k.$$v = c;
                    k.then(function(a) {
                        k.$$v = a;
                    });
                }
                j = j.$$v;
            }
            if (!d || j === null || j === c) return j;
            j = j[d];
            if (j && j.then) {
                gd(g);
                if (!("$$v" in j)) {
                    k = j;
                    k.$$v = c;
                    k.then(function(a) {
                        k.$$v = a;
                    });
                }
                j = j.$$v;
            }
            if (!e || j === null || j === c) return j;
            j = j[e];
            if (j && j.then) {
                gd(g);
                if (!("$$v" in j)) {
                    k = j;
                    k.$$v = c;
                    k.then(function(a) {
                        k.$$v = a;
                    });
                }
                j = j.$$v;
            }
            if (!f || j === null || j === c) return j;
            j = j[f];
            if (j && j.then) {
                gd(g);
                if (!("$$v" in j)) {
                    k = j;
                    k.$$v = c;
                    k.then(function(a) {
                        k.$$v = a;
                    });
                }
                j = j.$$v;
            }
            return j;
        };
    }
    function qd(a, b, d) {
        if (od.hasOwnProperty(a)) {
            return od[a];
        }
        var e = a.split("."), f = e.length, g;
        if (b.csp) {
            g = f < 6 ? pd(e[0], e[1], e[2], e[3], e[4], d, b) : function(a, g) {
                var h = 0, i;
                do {
                    i = pd(e[h++], e[h++], e[h++], e[h++], e[h++], d, b)(a, g);
                    g = c;
                    a = i;
                } while (h < f);
                return i;
            };
        } else {
            var h = "var l, fn, p;\n";
            v(e, function(a, c) {
                hd(a, d);
                h += "if(s === null || s === undefined) return s;\n" + "l=s;\n" + "s=" + (c ? "s" : '((k&&k.hasOwnProperty("' + a + '"))?k:s)') + '["' + a + '"]' + ";\n" + (b.unwrapPromises ? "if (s && s.then) {\n" + ' pw("' + d.replace(/\"/g, '\\"') + '");\n' + ' if (!("$$v" in s)) {\n' + " p=s;\n" + " p.$$v = undefined;\n" + " p.then(function(v) {p.$$v=v;});\n" + "}\n" + " s=s.$$v\n" + "}\n" : "");
            });
            h += "return s;";
            var i = Function("s", "k", "pw", h);
            i.toString = function() {
                return h;
            };
            g = function(a, b) {
                return i(a, b, gd);
            };
        }
        if (a !== "hasOwnProperty") {
            od[a] = g;
        }
        return g;
    }
    function rd() {
        var a = {};
        var b = {
            csp: false,
            unwrapPromises: false,
            logPromiseWarnings: true
        };
        this.unwrapPromises = function(a) {
            if (I(a)) {
                b.unwrapPromises = !!a;
                return this;
            } else {
                return b.unwrapPromises;
            }
        };
        this.logPromiseWarnings = function(a) {
            if (I(a)) {
                b.logPromiseWarnings = a;
                return this;
            } else {
                return b.logPromiseWarnings;
            }
        };
        this.$get = [ "$filter", "$sniffer", "$log", function(c, d, e) {
            b.csp = d.csp;
            gd = function f(a) {
                if (!b.logPromiseWarnings || fd.hasOwnProperty(a)) return;
                fd[a] = true;
                e.warn("[$parse] Promise found in the expression `" + a + "`. " + "Automatic unwrapping of promises in Angular expressions is deprecated.");
            };
            return function(d) {
                var e;
                switch (typeof d) {
                  case "string":
                    if (a.hasOwnProperty(d)) {
                        return a[d];
                    }
                    var f = new ld(b);
                    var g = new md(f, c, b);
                    e = g.parse(d, false);
                    if (d !== "hasOwnProperty") {
                        a[d] = e;
                    }
                    return e;

                  case "function":
                    return d;

                  default:
                    return E;
                }
            };
        } ];
    }
    function sd() {
        this.$get = [ "$rootScope", "$exceptionHandler", function(a, b) {
            return td(function(b) {
                a.$evalAsync(b);
            }, b);
        } ];
    }
    function td(a, b) {
        var d = function() {
            var g = [], j, k;
            k = {
                resolve: function(b) {
                    if (g) {
                        var d = g;
                        g = c;
                        j = e(b);
                        if (d.length) {
                            a(function() {
                                var a;
                                for (var b = 0, c = d.length; b < c; b++) {
                                    a = d[b];
                                    j.then(a[0], a[1], a[2]);
                                }
                            });
                        }
                    }
                },
                reject: function(a) {
                    k.resolve(f(a));
                },
                notify: function(b) {
                    if (g) {
                        var c = g;
                        if (g.length) {
                            a(function() {
                                var a;
                                for (var d = 0, e = c.length; d < e; d++) {
                                    a = c[d];
                                    a[2](b);
                                }
                            });
                        }
                    }
                },
                promise: {
                    then: function(a, c, e) {
                        var f = d();
                        var k = function(c) {
                            try {
                                f.resolve((O(a) ? a : h)(c));
                            } catch (d) {
                                f.reject(d);
                                b(d);
                            }
                        };
                        var l = function(a) {
                            try {
                                f.resolve((O(c) ? c : i)(a));
                            } catch (d) {
                                f.reject(d);
                                b(d);
                            }
                        };
                        var m = function(a) {
                            try {
                                f.notify((O(e) ? e : h)(a));
                            } catch (c) {
                                b(c);
                            }
                        };
                        if (g) {
                            g.push([ k, l, m ]);
                        } else {
                            j.then(k, l, m);
                        }
                        return f.promise;
                    },
                    "catch": function(a) {
                        return this.then(null, a);
                    },
                    "finally": function(a) {
                        function b(a, b) {
                            var c = d();
                            if (b) {
                                c.resolve(a);
                            } else {
                                c.reject(a);
                            }
                            return c.promise;
                        }
                        function c(c, d) {
                            var e = null;
                            try {
                                e = (a || h)();
                            } catch (f) {
                                return b(f, false);
                            }
                            if (e && O(e.then)) {
                                return e.then(function() {
                                    return b(c, d);
                                }, function(a) {
                                    return b(a, false);
                                });
                            } else {
                                return b(c, d);
                            }
                        }
                        return this.then(function(a) {
                            return c(a, true);
                        }, function(a) {
                            return c(a, false);
                        });
                    }
                }
            };
            return k;
        };
        var e = function(b) {
            if (b && O(b.then)) return b;
            return {
                then: function(c) {
                    var e = d();
                    a(function() {
                        e.resolve(c(b));
                    });
                    return e.promise;
                }
            };
        };
        var f = function(c) {
            return {
                then: function(e, f) {
                    var g = d();
                    a(function() {
                        try {
                            g.resolve((O(f) ? f : i)(c));
                        } catch (a) {
                            g.reject(a);
                            b(a);
                        }
                    });
                    return g.promise;
                }
            };
        };
        var g = function(c, g, j, k) {
            var l = d(), m;
            var n = function(a) {
                try {
                    return (O(g) ? g : h)(a);
                } catch (c) {
                    b(c);
                    return f(c);
                }
            };
            var o = function(a) {
                try {
                    return (O(j) ? j : i)(a);
                } catch (c) {
                    b(c);
                    return f(c);
                }
            };
            var p = function(a) {
                try {
                    return (O(k) ? k : h)(a);
                } catch (c) {
                    b(c);
                }
            };
            a(function() {
                e(c).then(function(a) {
                    if (m) return;
                    m = true;
                    l.resolve(e(a).then(n, o, p));
                }, function(a) {
                    if (m) return;
                    m = true;
                    l.resolve(o(a));
                }, function(a) {
                    if (m) return;
                    l.notify(p(a));
                });
            });
            return l.promise;
        };
        function h(a) {
            return a;
        }
        function i(a) {
            return f(a);
        }
        function j(a) {
            var b = d(), c = 0, f = N(a) ? [] : {};
            v(a, function(a, d) {
                c++;
                e(a).then(function(a) {
                    if (f.hasOwnProperty(d)) return;
                    f[d] = a;
                    if (!--c) b.resolve(f);
                }, function(a) {
                    if (f.hasOwnProperty(d)) return;
                    b.reject(a);
                });
            });
            if (c === 0) {
                b.resolve(f);
            }
            return b.promise;
        }
        return {
            defer: d,
            reject: f,
            when: g,
            all: j
        };
    }
    function ud() {
        var a = 10;
        var b = d("$rootScope");
        this.digestTtl = function(b) {
            if (arguments.length) {
                a = b;
            }
            return a;
        };
        this.$get = [ "$injector", "$exceptionHandler", "$parse", "$browser", function(c, d, e, f) {
            function g() {
                this.$id = z();
                this.$$phase = this.$parent = this.$$watchers = this.$$nextSibling = this.$$prevSibling = this.$$childHead = this.$$childTail = null;
                this["this"] = this.$root = this;
                this.$$destroyed = false;
                this.$$asyncQueue = [];
                this.$$postDigestQueue = [];
                this.$$listeners = {};
                this.$$isolateBindings = {};
            }
            g.prototype = {
                constructor: g,
                $new: function(a) {
                    var b, c;
                    if (a) {
                        c = new g();
                        c.$root = this.$root;
                        c.$$asyncQueue = this.$$asyncQueue;
                        c.$$postDigestQueue = this.$$postDigestQueue;
                    } else {
                        b = function() {};
                        b.prototype = this;
                        c = new b();
                        c.$id = z();
                    }
                    c["this"] = c;
                    c.$$listeners = {};
                    c.$parent = this;
                    c.$$watchers = c.$$nextSibling = c.$$childHead = c.$$childTail = null;
                    c.$$prevSibling = this.$$childTail;
                    if (this.$$childHead) {
                        this.$$childTail.$$nextSibling = c;
                        this.$$childTail = c;
                    } else {
                        this.$$childHead = this.$$childTail = c;
                    }
                    return c;
                },
                $watch: function(a, b, c) {
                    var d = this, e = k(a, "watch"), f = d.$$watchers, g = {
                        fn: b,
                        last: l,
                        get: e,
                        exp: a,
                        eq: !!c
                    };
                    if (!O(b)) {
                        var h = k(b || E, "listener");
                        g.fn = function(a, b, c) {
                            h(c);
                        };
                    }
                    if (typeof a == "string" && e.constant) {
                        var i = g.fn;
                        g.fn = function(a, b, c) {
                            i.call(this, a, b, c);
                            _(f, g);
                        };
                    }
                    if (!f) {
                        f = d.$$watchers = [];
                    }
                    f.unshift(g);
                    return function() {
                        _(f, g);
                    };
                },
                $watchCollection: function(a, b) {
                    var c = this;
                    var d;
                    var f;
                    var g = 0;
                    var h = e(a);
                    var i = [];
                    var j = {};
                    var k = 0;
                    function l() {
                        f = h(c);
                        var a, b;
                        if (!J(f)) {
                            if (d !== f) {
                                d = f;
                                g++;
                            }
                        } else if (u(f)) {
                            if (d !== i) {
                                d = i;
                                k = d.length = 0;
                                g++;
                            }
                            a = f.length;
                            if (k !== a) {
                                g++;
                                d.length = k = a;
                            }
                            for (var e = 0; e < a; e++) {
                                if (d[e] !== f[e]) {
                                    g++;
                                    d[e] = f[e];
                                }
                            }
                        } else {
                            if (d !== j) {
                                d = j = {};
                                k = 0;
                                g++;
                            }
                            a = 0;
                            for (b in f) {
                                if (f.hasOwnProperty(b)) {
                                    a++;
                                    if (d.hasOwnProperty(b)) {
                                        if (d[b] !== f[b]) {
                                            g++;
                                            d[b] = f[b];
                                        }
                                    } else {
                                        k++;
                                        d[b] = f[b];
                                        g++;
                                    }
                                }
                            }
                            if (k > a) {
                                g++;
                                for (b in d) {
                                    if (d.hasOwnProperty(b) && !f.hasOwnProperty(b)) {
                                        k--;
                                        delete d[b];
                                    }
                                }
                            }
                        }
                        return g;
                    }
                    function m() {
                        b(f, d, c);
                    }
                    return this.$watch(l, m);
                },
                $digest: function() {
                    var c, e, f, g, h = this.$$asyncQueue, k = this.$$postDigestQueue, m, n, o = a, p, q, r = this, s = [], t, u, v;
                    i("$digest");
                    do {
                        n = false;
                        q = r;
                        while (h.length) {
                            try {
                                v = h.shift();
                                v.scope.$eval(v.expression);
                            } catch (w) {
                                d(w);
                            }
                        }
                        do {
                            if (g = q.$$watchers) {
                                m = g.length;
                                while (m--) {
                                    try {
                                        c = g[m];
                                        if (c && (e = c.get(q)) !== (f = c.last) && !(c.eq ? db(e, f) : typeof e == "number" && typeof f == "number" && isNaN(e) && isNaN(f))) {
                                            n = true;
                                            c.last = c.eq ? bb(e) : e;
                                            c.fn(e, f === l ? e : f, q);
                                            if (o < 5) {
                                                t = 4 - o;
                                                if (!s[t]) s[t] = [];
                                                u = O(c.exp) ? "fn: " + (c.exp.name || c.exp.toString()) : c.exp;
                                                u += "; newVal: " + ib(e) + "; oldVal: " + ib(f);
                                                s[t].push(u);
                                            }
                                        }
                                    } catch (w) {
                                        d(w);
                                    }
                                }
                            }
                            if (!(p = q.$$childHead || q !== r && q.$$nextSibling)) {
                                while (q !== r && !(p = q.$$nextSibling)) {
                                    q = q.$parent;
                                }
                            }
                        } while (q = p);
                        if (n && !o--) {
                            j();
                            throw b("infdig", "{0} $digest() iterations reached. Aborting!\nWatchers fired in the last 5 iterations: {1}", a, ib(s));
                        }
                    } while (n || h.length);
                    j();
                    while (k.length) {
                        try {
                            k.shift()();
                        } catch (w) {
                            d(w);
                        }
                    }
                },
                $destroy: function() {
                    if (h == this || this.$$destroyed) return;
                    var a = this.$parent;
                    this.$broadcast("$destroy");
                    this.$$destroyed = true;
                    if (a.$$childHead == this) a.$$childHead = this.$$nextSibling;
                    if (a.$$childTail == this) a.$$childTail = this.$$prevSibling;
                    if (this.$$prevSibling) this.$$prevSibling.$$nextSibling = this.$$nextSibling;
                    if (this.$$nextSibling) this.$$nextSibling.$$prevSibling = this.$$prevSibling;
                    this.$parent = this.$$nextSibling = this.$$prevSibling = this.$$childHead = this.$$childTail = null;
                },
                $eval: function(a, b) {
                    return e(a)(this, b);
                },
                $evalAsync: function(a) {
                    if (!h.$$phase && !h.$$asyncQueue.length) {
                        f.defer(function() {
                            if (h.$$asyncQueue.length) {
                                h.$digest();
                            }
                        });
                    }
                    this.$$asyncQueue.push({
                        scope: this,
                        expression: a
                    });
                },
                $$postDigest: function(a) {
                    this.$$postDigestQueue.push(a);
                },
                $apply: function(a) {
                    try {
                        i("$apply");
                        return this.$eval(a);
                    } catch (b) {
                        d(b);
                    } finally {
                        j();
                        try {
                            h.$digest();
                        } catch (b) {
                            d(b);
                            throw b;
                        }
                    }
                },
                $on: function(a, b) {
                    var c = this.$$listeners[a];
                    if (!c) {
                        this.$$listeners[a] = c = [];
                    }
                    c.push(b);
                    return function() {
                        c[$(c, b)] = null;
                    };
                },
                $emit: function(a, b) {
                    var c = [], e, f = this, g = false, h = {
                        name: a,
                        targetScope: f,
                        stopPropagation: function() {
                            g = true;
                        },
                        preventDefault: function() {
                            h.defaultPrevented = true;
                        },
                        defaultPrevented: false
                    }, i = eb([ h ], arguments, 1), j, k;
                    do {
                        e = f.$$listeners[a] || c;
                        h.currentScope = f;
                        for (j = 0, k = e.length; j < k; j++) {
                            if (!e[j]) {
                                e.splice(j, 1);
                                j--;
                                k--;
                                continue;
                            }
                            try {
                                e[j].apply(null, i);
                            } catch (l) {
                                d(l);
                            }
                        }
                        if (g) return h;
                        f = f.$parent;
                    } while (f);
                    return h;
                },
                $broadcast: function(a, b) {
                    var c = this, e = c, f = c, g = {
                        name: a,
                        targetScope: c,
                        preventDefault: function() {
                            g.defaultPrevented = true;
                        },
                        defaultPrevented: false
                    }, h = eb([ g ], arguments, 1), i, j, k;
                    do {
                        e = f;
                        g.currentScope = e;
                        i = e.$$listeners[a] || [];
                        for (j = 0, k = i.length; j < k; j++) {
                            if (!i[j]) {
                                i.splice(j, 1);
                                j--;
                                k--;
                                continue;
                            }
                            try {
                                i[j].apply(null, h);
                            } catch (l) {
                                d(l);
                            }
                        }
                        if (!(f = e.$$childHead || e !== c && e.$$nextSibling)) {
                            while (e !== c && !(f = e.$$nextSibling)) {
                                e = e.$parent;
                            }
                        }
                    } while (e = f);
                    return g;
                }
            };
            var h = new g();
            return h;
            function i(a) {
                if (h.$$phase) {
                    throw b("inprog", "{0} already in progress", h.$$phase);
                }
                h.$$phase = a;
            }
            function j() {
                h.$$phase = null;
            }
            function k(a, b) {
                var c = e(a);
                xb(c, b);
                return c;
            }
            function l() {}
        } ];
    }
    var vd = d("$sce");
    var wd = {
        HTML: "html",
        CSS: "css",
        URL: "url",
        RESOURCE_URL: "resourceUrl",
        JS: "js"
    };
    function xd(a) {
        return a.replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08");
    }
    function yd(a) {
        if (a === "self") {
            return a;
        } else if (K(a)) {
            if (a.indexOf("***") > -1) {
                throw vd("iwcard", "Illegal sequence *** in string matcher.  String: {0}", a);
            }
            a = xd(a).replace("\\*\\*", ".*").replace("\\*", "[^:/.?&;]*");
            return new RegExp("^" + a + "$");
        } else if (P(a)) {
            return new RegExp("^" + a.source + "$");
        } else {
            throw vd("imatcher", 'Matchers may only be "self", string patterns or RegExp objects');
        }
    }
    function zd(a) {
        var b = [];
        if (I(a)) {
            v(a, function(a) {
                b.push(yd(a));
            });
        }
        return b;
    }
    function Ad() {
        this.SCE_CONTEXTS = wd;
        var a = [ "self" ], b = [];
        this.resourceUrlWhitelist = function(b) {
            if (arguments.length) {
                a = zd(b);
            }
            return a;
        };
        this.resourceUrlBlacklist = function(a) {
            if (arguments.length) {
                b = zd(a);
            }
            return b;
        };
        this.$get = [ "$log", "$document", "$injector", function(d, e, f) {
            var g = function p(a) {
                throw vd("unsafe", "Attempting to use an unsafe value in a safe context.");
            };
            if (f.has("$sanitize")) {
                g = f.get("$sanitize");
            }
            function h(a, b) {
                if (a === "self") {
                    return Hd(b);
                } else {
                    return !!a.exec(b.href);
                }
            }
            function i(c) {
                var d = Gd(c.toString());
                var e, f, g = false;
                for (e = 0, f = a.length; e < f; e++) {
                    if (h(a[e], d)) {
                        g = true;
                        break;
                    }
                }
                if (g) {
                    for (e = 0, f = b.length; e < f; e++) {
                        if (h(b[e], d)) {
                            g = false;
                            break;
                        }
                    }
                }
                return g;
            }
            function j(a) {
                var b = function c(a) {
                    this.$$unwrapTrustedValue = function() {
                        return a;
                    };
                };
                if (a) {
                    b.prototype = new a();
                }
                b.prototype.valueOf = function d() {
                    return this.$$unwrapTrustedValue();
                };
                b.prototype.toString = function e() {
                    return this.$$unwrapTrustedValue().toString();
                };
                return b;
            }
            var k = j(), l = {};
            l[wd.HTML] = j(k);
            l[wd.CSS] = j(k);
            l[wd.URL] = j(k);
            l[wd.JS] = j(k);
            l[wd.RESOURCE_URL] = j(l[wd.URL]);
            function m(a, b) {
                var d = l.hasOwnProperty(a) ? l[a] : null;
                if (!d) {
                    throw vd("icontext", "Attempted to trust a value in invalid context. Context: {0}; Value: {1}", a, b);
                }
                if (b === null || b === c || b === "") {
                    return b;
                }
                if (typeof b !== "string") {
                    throw vd("itype", "Attempted to trust a non-string value in a content requiring a string: Context: {0}", a);
                }
                return new d(b);
            }
            function n(a) {
                if (a instanceof k) {
                    return a.$$unwrapTrustedValue();
                } else {
                    return a;
                }
            }
            function o(a, b) {
                if (b === null || b === c || b === "") {
                    return b;
                }
                var d = l.hasOwnProperty(a) ? l[a] : null;
                if (d && b instanceof d) {
                    return b.$$unwrapTrustedValue();
                }
                if (a === wd.RESOURCE_URL) {
                    if (i(b)) {
                        return b;
                    } else {
                        throw vd("insecurl", "Blocked loading resource from url not allowed by $sceDelegate policy.  URL: {0}", b.toString());
                    }
                } else if (a === wd.HTML) {
                    return g(b);
                }
                throw vd("unsafe", "Attempting to use an unsafe value in a safe context.");
            }
            return {
                trustAs: m,
                getTrusted: o,
                valueOf: n
            };
        } ];
    }
    function Bd() {
        var a = true;
        this.enabled = function(b) {
            if (arguments.length) {
                a = !!b;
            }
            return a;
        };
        this.$get = [ "$parse", "$document", "$sceDelegate", function(b, d, f) {
            if (a && i) {
                var g = d[0].documentMode;
                if (g !== c && g < 8) {
                    throw vd("iequirks", "Strict Contextual Escaping does not support Internet Explorer version < 9 in quirks " + "mode.  You can fix this by adding the text <!doctype html> to the top of your HTML " + "document.  See http://docs.angularjs.org/api/ng.$sce for more information.");
                }
            }
            var h = bb(wd);
            h.isEnabled = function() {
                return a;
            };
            h.trustAs = f.trustAs;
            h.getTrusted = f.getTrusted;
            h.valueOf = f.valueOf;
            if (!a) {
                h.trustAs = h.getTrusted = function(a, b) {
                    return b;
                }, h.valueOf = F;
            }
            h.parseAs = function m(a, c) {
                var d = b(c);
                if (d.literal && d.constant) {
                    return d;
                } else {
                    return function e(b, c) {
                        return h.getTrusted(a, d(b, c));
                    };
                }
            };
            var j = h.parseAs, k = h.getTrusted, l = h.trustAs;
            v(wd, function(a, b) {
                var c = e(b);
                h[Mb("parse_as_" + c)] = function(b) {
                    return j(a, b);
                };
                h[Mb("get_trusted_" + c)] = function(b) {
                    return k(a, b);
                };
                h[Mb("trust_as_" + c)] = function(b) {
                    return l(a, b);
                };
            });
            return h;
        } ];
    }
    function Cd() {
        this.$get = [ "$window", "$document", function(a, b) {
            var c = {}, d = C((/android (\d+)/.exec(e((a.navigator || {}).userAgent)) || [])[1]), f = /Boxee/i.test((a.navigator || {}).userAgent), g = b[0] || {}, h, j = /^(Moz|webkit|O|ms)(?=[A-Z])/, k = g.body && g.body.style, l = false, m = false, n;
            if (k) {
                for (var o in k) {
                    if (n = j.exec(o)) {
                        h = n[0];
                        h = h.substr(0, 1).toUpperCase() + h.substr(1);
                        break;
                    }
                }
                if (!h) {
                    h = "WebkitOpacity" in k && "webkit";
                }
                l = !!("transition" in k || h + "Transition" in k);
                m = !!("animation" in k || h + "Animation" in k);
                if (d && (!l || !m)) {
                    l = K(g.body.style.webkitTransition);
                    m = K(g.body.style.webkitAnimation);
                }
            }
            return {
                history: !!(a.history && a.history.pushState && !(d < 4) && !f),
                hashchange: "onhashchange" in a && (!g.documentMode || g.documentMode > 7),
                hasEvent: function(a) {
                    if (a == "input" && i == 9) return false;
                    if (H(c[a])) {
                        var b = g.createElement("div");
                        c[a] = "on" + a in b;
                    }
                    return c[a];
                },
                csp: g.securityPolicy ? g.securityPolicy.isActive : false,
                vendorPrefix: h,
                transitions: l,
                animations: m
            };
        } ];
    }
    function Dd() {
        this.$get = [ "$rootScope", "$browser", "$q", "$exceptionHandler", function(a, b, c, d) {
            var e = {};
            function f(f, g, h) {
                var i = c.defer(), j = i.promise, k = I(h) && !h, l;
                l = b.defer(function() {
                    try {
                        i.resolve(f());
                    } catch (b) {
                        i.reject(b);
                        d(b);
                    } finally {
                        delete e[j.$$timeoutId];
                    }
                    if (!k) a.$apply();
                }, g);
                j.$$timeoutId = l;
                e[l] = i;
                return j;
            }
            f.cancel = function(a) {
                if (a && a.$$timeoutId in e) {
                    e[a.$$timeoutId].reject("canceled");
                    delete e[a.$$timeoutId];
                    return b.defer.cancel(a.$$timeoutId);
                }
                return false;
            };
            return f;
        } ];
    }
    var Ed = b.createElement("a");
    var Fd = Gd(a.location.href, true);
    function Gd(a) {
        var b = a;
        if (i) {
            Ed.setAttribute("href", b);
            b = Ed.href;
        }
        Ed.setAttribute("href", b);
        return {
            href: Ed.href,
            protocol: Ed.protocol ? Ed.protocol.replace(/:$/, "") : "",
            host: Ed.host,
            search: Ed.search ? Ed.search.replace(/^\?/, "") : "",
            hash: Ed.hash ? Ed.hash.replace(/^#/, "") : "",
            hostname: Ed.hostname,
            port: Ed.port,
            pathname: Ed.pathname && Ed.pathname.charAt(0) === "/" ? Ed.pathname : "/" + Ed.pathname
        };
    }
    function Hd(a) {
        var b = K(a) ? Gd(a) : a;
        return b.protocol === Fd.protocol && b.host === Fd.host;
    }
    function Id() {
        this.$get = G(a);
    }
    Jd.$inject = [ "$provide" ];
    function Jd(a) {
        var b = "Filter";
        function c(d, e) {
            if (J(d)) {
                var f = {};
                v(d, function(a, b) {
                    f[b] = c(b, a);
                });
                return f;
            } else {
                return a.factory(d + b, e);
            }
        }
        this.register = c;
        this.$get = [ "$injector", function(a) {
            return function(c) {
                return a.get(c + b);
            };
        } ];
        c("currency", Ld);
        c("date", Xd);
        c("filter", Kd);
        c("json", Yd);
        c("limitTo", _d);
        c("lowercase", Zd);
        c("number", Md);
        c("orderBy", ae);
        c("uppercase", $d);
    }
    function Kd() {
        return function(a, b, c) {
            if (!N(a)) return a;
            var d = [];
            d.check = function(a) {
                for (var b = 0; b < d.length; b++) {
                    if (!d[b](a)) {
                        return false;
                    }
                }
                return true;
            };
            switch (typeof c) {
              case "function":
                break;

              case "boolean":
                if (c == true) {
                    c = function(a, b) {
                        return q.equals(a, b);
                    };
                    break;
                }

              default:
                c = function(a, b) {
                    b = ("" + b).toLowerCase();
                    return ("" + a).toLowerCase().indexOf(b) > -1;
                };
            }
            var e = function(a, b) {
                if (typeof b == "string" && b.charAt(0) === "!") {
                    return !e(a, b.substr(1));
                }
                switch (typeof a) {
                  case "boolean":
                  case "number":
                  case "string":
                    return c(a, b);

                  case "object":
                    switch (typeof b) {
                      case "object":
                        return c(a, b);
                        break;

                      default:
                        for (var d in a) {
                            if (d.charAt(0) !== "$" && e(a[d], b)) {
                                return true;
                            }
                        }
                        break;
                    }
                    return false;

                  case "array":
                    for (var f = 0; f < a.length; f++) {
                        if (e(a[f], b)) {
                            return true;
                        }
                    }
                    return false;

                  default:
                    return false;
                }
            };
            switch (typeof b) {
              case "boolean":
              case "number":
              case "string":
                b = {
                    $: b
                };

              case "object":
                for (var f in b) {
                    if (f == "$") {
                        (function() {
                            if (!b[f]) return;
                            var a = f;
                            d.push(function(c) {
                                return e(c, b[a]);
                            });
                        })();
                    } else {
                        (function() {
                            if (typeof b[f] == "undefined") {
                                return;
                            }
                            var a = f;
                            d.push(function(c) {
                                return e(zb(c, a), b[a]);
                            });
                        })();
                    }
                }
                break;

              case "function":
                d.push(b);
                break;

              default:
                return a;
            }
            var g = [];
            for (var h = 0; h < a.length; h++) {
                var i = a[h];
                if (d.check(i)) {
                    g.push(i);
                }
            }
            return g;
        };
    }
    Ld.$inject = [ "$locale" ];
    function Ld(a) {
        var b = a.NUMBER_FORMATS;
        return function(a, c) {
            if (H(c)) c = b.CURRENCY_SYM;
            return Od(a, b.PATTERNS[1], b.GROUP_SEP, b.DECIMAL_SEP, 2).replace(/\u00A4/g, c);
        };
    }
    Md.$inject = [ "$locale" ];
    function Md(a) {
        var b = a.NUMBER_FORMATS;
        return function(a, c) {
            return Od(a, b.PATTERNS[0], b.GROUP_SEP, b.DECIMAL_SEP, c);
        };
    }
    var Nd = ".";
    function Od(a, b, c, d, e) {
        if (isNaN(a) || !isFinite(a)) return "";
        var f = a < 0;
        a = Math.abs(a);
        var g = a + "", h = "", i = [];
        var j = false;
        if (g.indexOf("e") !== -1) {
            var k = g.match(/([\d\.]+)e(-?)(\d+)/);
            if (k && k[2] == "-" && k[3] > e + 1) {
                g = "0";
            } else {
                h = g;
                j = true;
            }
        }
        if (!j) {
            var l = (g.split(Nd)[1] || "").length;
            if (H(e)) {
                e = Math.min(Math.max(b.minFrac, l), b.maxFrac);
            }
            var m = Math.pow(10, e);
            a = Math.round(a * m) / m;
            var n = ("" + a).split(Nd);
            var o = n[0];
            n = n[1] || "";
            var p = 0, q = b.lgSize, r = b.gSize;
            if (o.length >= q + r) {
                p = o.length - q;
                for (var s = 0; s < p; s++) {
                    if ((p - s) % r === 0 && s !== 0) {
                        h += c;
                    }
                    h += o.charAt(s);
                }
            }
            for (s = p; s < o.length; s++) {
                if ((o.length - s) % q === 0 && s !== 0) {
                    h += c;
                }
                h += o.charAt(s);
            }
            while (n.length < e) {
                n += "0";
            }
            if (e && e !== "0") h += d + n.substr(0, e);
        } else {
            if (e > 0 && a > -1 && a < 1) {
                h = a.toFixed(e);
            }
        }
        i.push(f ? b.negPre : b.posPre);
        i.push(h);
        i.push(f ? b.negSuf : b.posSuf);
        return i.join("");
    }
    function Pd(a, b, c) {
        var d = "";
        if (a < 0) {
            d = "-";
            a = -a;
        }
        a = "" + a;
        while (a.length < b) a = "0" + a;
        if (c) a = a.substr(a.length - b);
        return d + a;
    }
    function Qd(a, b, c, d) {
        c = c || 0;
        return function(e) {
            var f = e["get" + a]();
            if (c > 0 || f > -c) f += c;
            if (f === 0 && c == -12) f = 12;
            return Pd(f, b, d);
        };
    }
    function Rd(a, b) {
        return function(c, d) {
            var e = c["get" + a]();
            var g = f(b ? "SHORT" + a : a);
            return d[g][e];
        };
    }
    function Sd(a) {
        var b = -1 * a.getTimezoneOffset();
        var c = b >= 0 ? "+" : "";
        c += Pd(Math[b > 0 ? "floor" : "ceil"](b / 60), 2) + Pd(Math.abs(b % 60), 2);
        return c;
    }
    function Td(a, b) {
        return a.getHours() < 12 ? b.AMPMS[0] : b.AMPMS[1];
    }
    var Ud = {
        yyyy: Qd("FullYear", 4),
        yy: Qd("FullYear", 2, 0, true),
        y: Qd("FullYear", 1),
        MMMM: Rd("Month"),
        MMM: Rd("Month", true),
        MM: Qd("Month", 2, 1),
        M: Qd("Month", 1, 1),
        dd: Qd("Date", 2),
        d: Qd("Date", 1),
        HH: Qd("Hours", 2),
        H: Qd("Hours", 1),
        hh: Qd("Hours", 2, -12),
        h: Qd("Hours", 1, -12),
        mm: Qd("Minutes", 2),
        m: Qd("Minutes", 1),
        ss: Qd("Seconds", 2),
        s: Qd("Seconds", 1),
        sss: Qd("Milliseconds", 3),
        EEEE: Rd("Day"),
        EEE: Rd("Day", true),
        a: Td,
        Z: Sd
    };
    var Vd = /((?:[^yMdHhmsaZE']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|d+|H+|h+|m+|s+|a|Z))(.*)/, Wd = /^\-?\d+$/;
    Xd.$inject = [ "$locale" ];
    function Xd(a) {
        var b = /^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;
        function c(a) {
            var c;
            if (c = a.match(b)) {
                var d = new Date(0), e = 0, f = 0, g = c[8] ? d.setUTCFullYear : d.setFullYear, h = c[8] ? d.setUTCHours : d.setHours;
                if (c[9]) {
                    e = C(c[9] + c[10]);
                    f = C(c[9] + c[11]);
                }
                g.call(d, C(c[1]), C(c[2]) - 1, C(c[3]));
                var i = C(c[4] || 0) - e;
                var j = C(c[5] || 0) - f;
                var k = C(c[6] || 0);
                var l = Math.round(parseFloat("0." + (c[7] || 0)) * 1e3);
                h.call(d, i, j, k, l);
                return d;
            }
            return a;
        }
        return function(b, d) {
            var e = "", f = [], g, h;
            d = d || "mediumDate";
            d = a.DATETIME_FORMATS[d] || d;
            if (K(b)) {
                if (Wd.test(b)) {
                    b = C(b);
                } else {
                    b = c(b);
                }
            }
            if (L(b)) {
                b = new Date(b);
            }
            if (!M(b)) {
                return b;
            }
            while (d) {
                h = Vd.exec(d);
                if (h) {
                    f = eb(f, h, 1);
                    d = f.pop();
                } else {
                    f.push(d);
                    d = null;
                }
            }
            v(f, function(c) {
                g = Ud[c];
                e += g ? g(b, a.DATETIME_FORMATS) : c.replace(/(^'|'$)/g, "").replace(/''/g, "'");
            });
            return e;
        };
    }
    function Yd() {
        return function(a) {
            return ib(a, true);
        };
    }
    var Zd = G(e);
    var $d = G(f);
    function _d() {
        return function(a, b) {
            if (!N(a) && !K(a)) return a;
            b = C(b);
            if (K(a)) {
                if (b) {
                    return b >= 0 ? a.slice(0, b) : a.slice(b, a.length);
                } else {
                    return "";
                }
            }
            var c = [], d, e;
            if (b > a.length) b = a.length; else if (b < -a.length) b = -a.length;
            if (b > 0) {
                d = 0;
                e = b;
            } else {
                d = a.length + b;
                e = a.length;
            }
            for (;d < e; d++) {
                c.push(a[d]);
            }
            return c;
        };
    }
    ae.$inject = [ "$parse" ];
    function ae(a) {
        return function(b, c, d) {
            if (!N(b)) return b;
            if (!c) return b;
            c = N(c) ? c : [ c ];
            c = X(c, function(b) {
                var c = false, d = b || F;
                if (K(b)) {
                    if (b.charAt(0) == "+" || b.charAt(0) == "-") {
                        c = b.charAt(0) == "-";
                        b = b.substring(1);
                    }
                    d = a(b);
                }
                return h(function(a, b) {
                    return i(d(a), d(b));
                }, c);
            });
            var e = [];
            for (var f = 0; f < b.length; f++) {
                e.push(b[f]);
            }
            return e.sort(h(g, d));
            function g(a, b) {
                for (var d = 0; d < c.length; d++) {
                    var e = c[d](a, b);
                    if (e !== 0) return e;
                }
                return 0;
            }
            function h(a, b) {
                return kb(b) ? function(b, c) {
                    return a(c, b);
                } : a;
            }
            function i(a, b) {
                var c = typeof a;
                var d = typeof b;
                if (c == d) {
                    if (c == "string") {
                        a = a.toLowerCase();
                        b = b.toLowerCase();
                    }
                    if (a === b) return 0;
                    return a < b ? -1 : 1;
                } else {
                    return c < d ? -1 : 1;
                }
            }
        };
    }
    function be(a) {
        if (O(a)) {
            a = {
                link: a
            };
        }
        a.restrict = a.restrict || "AC";
        return G(a);
    }
    var ce = G({
        restrict: "E",
        compile: function(a, c) {
            if (i <= 8) {
                if (!c.href && !c.name) {
                    c.$set("href", "");
                }
                a.append(b.createComment("IE fix"));
            }
            return function(a, b) {
                b.on("click", function(a) {
                    if (!b.attr("href")) {
                        a.preventDefault();
                    }
                });
            };
        }
    });
    var de = {};
    v(ac, function(a, b) {
        if (a == "multiple") return;
        var c = xc("ng-" + b);
        de[c] = function() {
            return {
                priority: 100,
                compile: function() {
                    return function(a, d, e) {
                        a.$watch(e[c], function f(a) {
                            e.$set(b, !!a);
                        });
                    };
                }
            };
        };
    });
    v([ "src", "srcset", "href" ], function(a) {
        var b = xc("ng-" + a);
        de[b] = function() {
            return {
                priority: 99,
                link: function(c, d, e) {
                    e.$observe(b, function(b) {
                        if (!b) return;
                        e.$set(a, b);
                        if (i) d.prop(a, e[a]);
                    });
                }
            };
        };
    });
    var ee = {
        $addControl: E,
        $removeControl: E,
        $setValidity: E,
        $setDirty: E,
        $setPristine: E
    };
    fe.$inject = [ "$element", "$attrs", "$scope" ];
    function fe(a, b) {
        var c = this, d = a.parent().controller("form") || ee, e = 0, f = c.$error = {}, g = [];
        c.$name = b.name || b.ngForm;
        c.$dirty = false;
        c.$pristine = true;
        c.$valid = true;
        c.$invalid = false;
        d.$addControl(c);
        a.addClass(we);
        h(true);
        function h(b, c) {
            c = c ? "-" + ub(c, "-") : "";
            a.removeClass((b ? ve : ue) + c).addClass((b ? ue : ve) + c);
        }
        c.$addControl = function(a) {
            yb(a.$name, "input");
            g.push(a);
            if (a.$name) {
                c[a.$name] = a;
            }
        };
        c.$removeControl = function(a) {
            if (a.$name && c[a.$name] === a) {
                delete c[a.$name];
            }
            v(f, function(b, d) {
                c.$setValidity(d, true, a);
            });
            _(g, a);
        };
        c.$setValidity = function(a, b, g) {
            var i = f[a];
            if (b) {
                if (i) {
                    _(i, g);
                    if (!i.length) {
                        e--;
                        if (!e) {
                            h(b);
                            c.$valid = true;
                            c.$invalid = false;
                        }
                        f[a] = false;
                        h(true, a);
                        d.$setValidity(a, true, c);
                    }
                }
            } else {
                if (!e) {
                    h(b);
                }
                if (i) {
                    if (Z(i, g)) return;
                } else {
                    f[a] = i = [];
                    e++;
                    h(false, a);
                    d.$setValidity(a, false, c);
                }
                i.push(g);
                c.$valid = false;
                c.$invalid = true;
            }
        };
        c.$setDirty = function() {
            a.removeClass(we).addClass(xe);
            c.$dirty = true;
            c.$pristine = false;
            d.$setDirty();
        };
        c.$setPristine = function() {
            a.removeClass(xe).addClass(we);
            c.$dirty = false;
            c.$pristine = true;
            v(g, function(a) {
                a.$setPristine();
            });
        };
    }
    var ge = function(a) {
        return [ "$timeout", function(b) {
            var d = {
                name: "form",
                restrict: a ? "EAC" : "E",
                controller: fe,
                compile: function() {
                    return {
                        pre: function(a, d, e, f) {
                            if (!e.action) {
                                var g = function(a) {
                                    a.preventDefault ? a.preventDefault() : a.returnValue = false;
                                };
                                Gb(d[0], "submit", g);
                                d.on("$destroy", function() {
                                    b(function() {
                                        Hb(d[0], "submit", g);
                                    }, 0, false);
                                });
                            }
                            var h = d.parent().controller("form"), i = e.name || e.ngForm;
                            if (i) {
                                nd(a, i, f, i);
                            }
                            if (h) {
                                d.on("$destroy", function() {
                                    h.$removeControl(f);
                                    if (i) {
                                        nd(a, i, c, i);
                                    }
                                    B(f, ee);
                                });
                            }
                        }
                    };
                }
            };
            return d;
        } ];
    };
    var he = ge();
    var ie = ge(true);
    var je = /^(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?$/;
    var ke = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,6}$/;
    var le = /^\s*(\-|\+)?(\d+|(\d*(\.\d*)))\s*$/;
    var me = {
        text: ne,
        number: oe,
        url: pe,
        email: qe,
        radio: re,
        checkbox: se,
        hidden: E,
        button: E,
        submit: E,
        reset: E
    };
    function ne(a, b, e, f, g, h) {
        var i = function() {
            var c = b.val();
            if (kb(e.ngTrim || "T")) {
                c = U(c);
            }
            if (f.$viewValue !== c) {
                a.$apply(function() {
                    f.$setViewValue(c);
                });
            }
        };
        if (g.hasEvent("input")) {
            b.on("input", i);
        } else {
            var j;
            var k = function() {
                if (!j) {
                    j = h.defer(function() {
                        i();
                        j = null;
                    });
                }
            };
            b.on("keydown", function(a) {
                var b = a.keyCode;
                if (b === 91 || 15 < b && b < 19 || 37 <= b && b <= 40) return;
                k();
            });
            b.on("change", i);
            if (g.hasEvent("paste")) {
                b.on("paste cut", k);
            }
        }
        f.$render = function() {
            b.val(f.$isEmpty(f.$viewValue) ? "" : f.$viewValue);
        };
        var l = e.ngPattern, m, n;
        var o = function(a, b) {
            if (f.$isEmpty(b) || a.test(b)) {
                f.$setValidity("pattern", true);
                return b;
            } else {
                f.$setValidity("pattern", false);
                return c;
            }
        };
        if (l) {
            n = l.match(/^\/(.*)\/([gim]*)$/);
            if (n) {
                l = new RegExp(n[1], n[2]);
                m = function(a) {
                    return o(l, a);
                };
            } else {
                m = function(c) {
                    var e = a.$eval(l);
                    if (!e || !e.test) {
                        throw d("ngPattern")("noregexp", "Expected {0} to be a RegExp but was {1}. Element: {2}", l, e, lb(b));
                    }
                    return o(e, c);
                };
            }
            f.$formatters.push(m);
            f.$parsers.push(m);
        }
        if (e.ngMinlength) {
            var p = C(e.ngMinlength);
            var q = function(a) {
                if (!f.$isEmpty(a) && a.length < p) {
                    f.$setValidity("minlength", false);
                    return c;
                } else {
                    f.$setValidity("minlength", true);
                    return a;
                }
            };
            f.$parsers.push(q);
            f.$formatters.push(q);
        }
        if (e.ngMaxlength) {
            var r = C(e.ngMaxlength);
            var s = function(a) {
                if (!f.$isEmpty(a) && a.length > r) {
                    f.$setValidity("maxlength", false);
                    return c;
                } else {
                    f.$setValidity("maxlength", true);
                    return a;
                }
            };
            f.$parsers.push(s);
            f.$formatters.push(s);
        }
    }
    function oe(a, b, d, e, f, g) {
        ne(a, b, d, e, f, g);
        e.$parsers.push(function(a) {
            var b = e.$isEmpty(a);
            if (b || le.test(a)) {
                e.$setValidity("number", true);
                return a === "" ? null : b ? a : parseFloat(a);
            } else {
                e.$setValidity("number", false);
                return c;
            }
        });
        e.$formatters.push(function(a) {
            return e.$isEmpty(a) ? "" : "" + a;
        });
        if (d.min) {
            var h = parseFloat(d.min);
            var i = function(a) {
                if (!e.$isEmpty(a) && a < h) {
                    e.$setValidity("min", false);
                    return c;
                } else {
                    e.$setValidity("min", true);
                    return a;
                }
            };
            e.$parsers.push(i);
            e.$formatters.push(i);
        }
        if (d.max) {
            var j = parseFloat(d.max);
            var k = function(a) {
                if (!e.$isEmpty(a) && a > j) {
                    e.$setValidity("max", false);
                    return c;
                } else {
                    e.$setValidity("max", true);
                    return a;
                }
            };
            e.$parsers.push(k);
            e.$formatters.push(k);
        }
        e.$formatters.push(function(a) {
            if (e.$isEmpty(a) || L(a)) {
                e.$setValidity("number", true);
                return a;
            } else {
                e.$setValidity("number", false);
                return c;
            }
        });
    }
    function pe(a, b, d, e, f, g) {
        ne(a, b, d, e, f, g);
        var h = function(a) {
            if (e.$isEmpty(a) || je.test(a)) {
                e.$setValidity("url", true);
                return a;
            } else {
                e.$setValidity("url", false);
                return c;
            }
        };
        e.$formatters.push(h);
        e.$parsers.push(h);
    }
    function qe(a, b, d, e, f, g) {
        ne(a, b, d, e, f, g);
        var h = function(a) {
            if (e.$isEmpty(a) || ke.test(a)) {
                e.$setValidity("email", true);
                return a;
            } else {
                e.$setValidity("email", false);
                return c;
            }
        };
        e.$formatters.push(h);
        e.$parsers.push(h);
    }
    function re(a, b, c, d) {
        if (H(c.name)) {
            b.attr("name", z());
        }
        b.on("click", function() {
            if (b[0].checked) {
                a.$apply(function() {
                    d.$setViewValue(c.value);
                });
            }
        });
        d.$render = function() {
            var a = c.value;
            b[0].checked = a == d.$viewValue;
        };
        c.$observe("value", d.$render);
    }
    function se(a, b, c, d) {
        var e = c.ngTrueValue, f = c.ngFalseValue;
        if (!K(e)) e = true;
        if (!K(f)) f = false;
        b.on("click", function() {
            a.$apply(function() {
                d.$setViewValue(b[0].checked);
            });
        });
        d.$render = function() {
            b[0].checked = d.$viewValue;
        };
        d.$isEmpty = function(a) {
            return a !== e;
        };
        d.$formatters.push(function(a) {
            return a === e;
        });
        d.$parsers.push(function(a) {
            return a ? e : f;
        });
    }
    var te = [ "$browser", "$sniffer", function(a, b) {
        return {
            restrict: "E",
            require: "?ngModel",
            link: function(c, d, f, g) {
                if (g) {
                    (me[e(f.type)] || me.text)(c, d, f, g, b, a);
                }
            }
        };
    } ];
    var ue = "ng-valid", ve = "ng-invalid", we = "ng-pristine", xe = "ng-dirty";
    var ye = [ "$scope", "$exceptionHandler", "$attrs", "$element", "$parse", function(a, b, c, e, f) {
        this.$viewValue = Number.NaN;
        this.$modelValue = Number.NaN;
        this.$parsers = [];
        this.$formatters = [];
        this.$viewChangeListeners = [];
        this.$pristine = true;
        this.$dirty = false;
        this.$valid = true;
        this.$invalid = false;
        this.$name = c.name;
        var g = f(c.ngModel), h = g.assign;
        if (!h) {
            throw d("ngModel")("nonassign", "Expression '{0}' is non-assignable. Element: {1}", c.ngModel, lb(e));
        }
        this.$render = E;
        this.$isEmpty = function(a) {
            return H(a) || a === "" || a === null || a !== a;
        };
        var i = e.inheritedData("$formController") || ee, j = 0, k = this.$error = {};
        e.addClass(we);
        l(true);
        function l(a, b) {
            b = b ? "-" + ub(b, "-") : "";
            e.removeClass((a ? ve : ue) + b).addClass((a ? ue : ve) + b);
        }
        this.$setValidity = function(a, b) {
            if (k[a] === !b) return;
            if (b) {
                if (k[a]) j--;
                if (!j) {
                    l(true);
                    this.$valid = true;
                    this.$invalid = false;
                }
            } else {
                l(false);
                this.$invalid = true;
                this.$valid = false;
                j++;
            }
            k[a] = !b;
            l(b, a);
            i.$setValidity(a, b, this);
        };
        this.$setPristine = function() {
            this.$dirty = false;
            this.$pristine = true;
            e.removeClass(xe).addClass(we);
        };
        this.$setViewValue = function(c) {
            this.$viewValue = c;
            if (this.$pristine) {
                this.$dirty = true;
                this.$pristine = false;
                e.removeClass(we).addClass(xe);
                i.$setDirty();
            }
            v(this.$parsers, function(a) {
                c = a(c);
            });
            if (this.$modelValue !== c) {
                this.$modelValue = c;
                h(a, c);
                v(this.$viewChangeListeners, function(a) {
                    try {
                        a();
                    } catch (c) {
                        b(c);
                    }
                });
            }
        };
        var m = this;
        a.$watch(function n() {
            var b = g(a);
            if (m.$modelValue !== b) {
                var c = m.$formatters, d = c.length;
                m.$modelValue = b;
                while (d--) {
                    b = c[d](b);
                }
                if (m.$viewValue !== b) {
                    m.$viewValue = b;
                    m.$render();
                }
            }
        });
    } ];
    var ze = function() {
        return {
            require: [ "ngModel", "^?form" ],
            controller: ye,
            link: function(a, b, c, d) {
                var e = d[0], f = d[1] || ee;
                f.$addControl(e);
                b.on("$destroy", function() {
                    f.$removeControl(e);
                });
            }
        };
    };
    var Ae = G({
        require: "ngModel",
        link: function(a, b, c, d) {
            d.$viewChangeListeners.push(function() {
                a.$eval(c.ngChange);
            });
        }
    });
    var Be = function() {
        return {
            require: "?ngModel",
            link: function(a, b, c, d) {
                if (!d) return;
                c.required = true;
                var e = function(a) {
                    if (c.required && d.$isEmpty(a)) {
                        d.$setValidity("required", false);
                        return;
                    } else {
                        d.$setValidity("required", true);
                        return a;
                    }
                };
                d.$formatters.push(e);
                d.$parsers.unshift(e);
                c.$observe("required", function() {
                    e(d.$viewValue);
                });
            }
        };
    };
    var Ce = function() {
        return {
            require: "ngModel",
            link: function(a, b, d, e) {
                var f = /\/(.*)\//.exec(d.ngList), g = f && new RegExp(f[1]) || d.ngList || ",";
                var h = function(a) {
                    if (H(a)) return;
                    var b = [];
                    if (a) {
                        v(a.split(g), function(a) {
                            if (a) b.push(U(a));
                        });
                    }
                    return b;
                };
                e.$parsers.push(h);
                e.$formatters.push(function(a) {
                    if (N(a)) {
                        return a.join(", ");
                    }
                    return c;
                });
                e.$isEmpty = function(a) {
                    return !a || !a.length;
                };
            }
        };
    };
    var De = /^(true|false|\d+)$/;
    var Ee = function() {
        return {
            priority: 100,
            compile: function(a, b) {
                if (De.test(b.ngValue)) {
                    return function c(a, b, c) {
                        c.$set("value", a.$eval(c.ngValue));
                    };
                } else {
                    return function d(a, b, c) {
                        a.$watch(c.ngValue, function d(a) {
                            c.$set("value", a);
                        });
                    };
                }
            }
        };
    };
    var Fe = be(function(a, b, d) {
        b.addClass("ng-binding").data("$binding", d.ngBind);
        a.$watch(d.ngBind, function e(a) {
            b.text(a == c ? "" : a);
        });
    });
    var Ge = [ "$interpolate", function(a) {
        return function(b, c, d) {
            var e = a(c.attr(d.$attr.ngBindTemplate));
            c.addClass("ng-binding").data("$binding", e);
            d.$observe("ngBindTemplate", function(a) {
                c.text(a);
            });
        };
    } ];
    var He = [ "$sce", "$parse", function(a, b) {
        return function(c, d, e) {
            d.addClass("ng-binding").data("$binding", e.ngBindHtml);
            var f = b(e.ngBindHtml);
            function g() {
                return (f(c) || "").toString();
            }
            c.$watch(g, function h(b) {
                d.html(a.getTrustedHtml(f(c)) || "");
            });
        };
    } ];
    function Ie(a, b) {
        a = "ngClass" + a;
        return function() {
            return {
                restrict: "AC",
                link: function(d, e, f) {
                    var g = c;
                    d.$watch(f[a], h, true);
                    f.$observe("class", function(b) {
                        h(d.$eval(f[a]));
                    });
                    if (a !== "ngClass") {
                        d.$watch("$index", function(c, e) {
                            var g = c & 1;
                            if (g !== e & 1) {
                                if (g === b) {
                                    j(d.$eval(f[a]));
                                } else {
                                    i(d.$eval(f[a]));
                                }
                            }
                        });
                    }
                    function h(a) {
                        if (b === true || d.$index % 2 === b) {
                            if (g && !db(a, g)) {
                                i(g);
                            }
                            j(a);
                        }
                        g = bb(a);
                    }
                    function i(a) {
                        f.$removeClass(k(a));
                    }
                    function j(a) {
                        f.$addClass(k(a));
                    }
                    function k(a) {
                        if (N(a)) {
                            return a.join(" ");
                        } else if (J(a)) {
                            var b = [], c = 0;
                            v(a, function(a, c) {
                                if (a) {
                                    b.push(c);
                                }
                            });
                            return b.join(" ");
                        }
                        return a;
                    }
                }
            };
        };
    }
    var Je = Ie("", true);
    var Ke = Ie("Odd", 0);
    var Le = Ie("Even", 1);
    var Me = be({
        compile: function(a, b) {
            b.$set("ngCloak", c);
            a.removeClass("ng-cloak");
        }
    });
    var Ne = [ function() {
        return {
            scope: true,
            controller: "@"
        };
    } ];
    var Oe = [ "$sniffer", function(a) {
        return {
            priority: 1e3,
            compile: function() {
                a.csp = true;
            }
        };
    } ];
    var Pe = {};
    v("click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave keydown keyup keypress submit focus blur copy cut paste".split(" "), function(a) {
        var b = xc("ng-" + a);
        Pe[b] = [ "$parse", function(c) {
            return function(d, f, g) {
                var h = c(g[b]);
                f.on(e(a), function(a) {
                    d.$apply(function() {
                        h(d, {
                            $event: a
                        });
                    });
                });
            };
        } ];
    });
    var Qe = [ "$animate", function(a) {
        return {
            transclude: "element",
            priority: 600,
            terminal: true,
            restrict: "A",
            compile: function(b, d, e) {
                return function(b, d, f) {
                    var g, h;
                    b.$watch(f.ngIf, function i(f) {
                        if (g) {
                            a.leave(g);
                            g = c;
                        }
                        if (h) {
                            h.$destroy();
                            h = c;
                        }
                        if (kb(f)) {
                            h = b.$new();
                            e(h, function(b) {
                                g = b;
                                a.enter(b, d.parent(), d);
                            });
                        }
                    });
                };
            }
        };
    } ];
    var Re = [ "$http", "$templateCache", "$anchorScroll", "$compile", "$animate", "$sce", function(a, b, c, d, e, f) {
        return {
            restrict: "ECA",
            priority: 400,
            terminal: true,
            transclude: "element",
            compile: function(g, h, i) {
                var j = h.ngInclude || h.src, k = h.onload || "", l = h.autoscroll;
                return function(g, h) {
                    var m = 0, n, o;
                    var p = function() {
                        if (n) {
                            n.$destroy();
                            n = null;
                        }
                        if (o) {
                            e.leave(o);
                            o = null;
                        }
                    };
                    g.$watch(f.parseAsResourceUrl(j), function q(f) {
                        var j = ++m;
                        if (f) {
                            a.get(f, {
                                cache: b
                            }).success(function(a) {
                                if (j !== m) return;
                                var b = g.$new();
                                i(b, function(f) {
                                    p();
                                    n = b;
                                    o = f;
                                    o.html(a);
                                    e.enter(o, null, h);
                                    d(o.contents())(n);
                                    if (I(l) && (!l || g.$eval(l))) {
                                        c();
                                    }
                                    n.$emit("$includeContentLoaded");
                                    g.$eval(k);
                                });
                            }).error(function() {
                                if (j === m) p();
                            });
                            g.$emit("$includeContentRequested");
                        } else {
                            p();
                        }
                    });
                };
            }
        };
    } ];
    var Se = be({
        compile: function() {
            return {
                pre: function(a, b, c) {
                    a.$eval(c.ngInit);
                }
            };
        }
    });
    var Te = be({
        terminal: true,
        priority: 1e3
    });
    var Ue = [ "$locale", "$interpolate", function(a, b) {
        var c = /{}/g;
        return {
            restrict: "EA",
            link: function(d, f, g) {
                var h = g.count, i = g.$attr.when && f.attr(g.$attr.when), j = g.offset || 0, k = d.$eval(i) || {}, l = {}, m = b.startSymbol(), n = b.endSymbol(), o = /^when(Minus)?(.+)$/;
                v(g, function(a, b) {
                    if (o.test(b)) {
                        k[e(b.replace("when", "").replace("Minus", "-"))] = f.attr(g.$attr[b]);
                    }
                });
                v(k, function(a, d) {
                    l[d] = b(a.replace(c, m + h + "-" + j + n));
                });
                d.$watch(function p() {
                    var b = parseFloat(d.$eval(h));
                    if (!isNaN(b)) {
                        if (!(b in k)) b = a.pluralCat(b - j);
                        return l[b](d, f, true);
                    } else {
                        return "";
                    }
                }, function q(a) {
                    f.text(a);
                });
            }
        };
    } ];
    var Ve = [ "$parse", "$animate", function(a, c) {
        var e = "$$NG_REMOVED";
        var f = d("ngRepeat");
        return {
            transclude: "element",
            priority: 1e3,
            terminal: true,
            compile: function(d, h, i) {
                return function(d, h, k) {
                    var l = k.ngRepeat;
                    var m = l.match(/^\s*(.+)\s+in\s+(.*?)\s*(\s+track\s+by\s+(.+)\s*)?$/), n, o, p, q, r, s, t, w, x, y = {
                        $id: ec
                    };
                    if (!m) {
                        throw f("iexp", "Expected expression in form of '_item_ in _collection_[ track by _id_]' but got '{0}'.", l);
                    }
                    s = m[1];
                    t = m[2];
                    n = m[4];
                    if (n) {
                        o = a(n);
                        p = function(a, b, c) {
                            if (x) y[x] = a;
                            y[w] = b;
                            y.$index = c;
                            return o(d, y);
                        };
                    } else {
                        q = function(a, b) {
                            return ec(b);
                        };
                        r = function(a) {
                            return a;
                        };
                    }
                    m = s.match(/^(?:([\$\w]+)|\(([\$\w]+)\s*,\s*([\$\w]+)\))$/);
                    if (!m) {
                        throw f("iidexp", "'_item_' in '_item_ in _collection_' should be an identifier or '(_key_, _value_)' expression, but got '{0}'.", s);
                    }
                    w = m[3] || m[1];
                    x = m[2];
                    var z = {};
                    d.$watchCollection(t, function A(a) {
                        var k, m, n = h[0], o, s = {}, t, y, A, B, C, D, E, F, G = [], H;
                        if (u(a)) {
                            E = a;
                            D = p || q;
                        } else {
                            D = p || r;
                            E = [];
                            for (A in a) {
                                if (a.hasOwnProperty(A) && A.charAt(0) != "$") {
                                    E.push(A);
                                }
                            }
                            E.sort();
                        }
                        t = E.length;
                        m = G.length = E.length;
                        for (k = 0; k < m; k++) {
                            A = a === E ? k : E[k];
                            B = a[A];
                            C = D(A, B, k);
                            yb(C, "`track by` id");
                            if (z.hasOwnProperty(C)) {
                                F = z[C];
                                delete z[C];
                                s[C] = F;
                                G[k] = F;
                            } else if (s.hasOwnProperty(C)) {
                                v(G, function(a) {
                                    if (a && a.startNode) z[a.id] = a;
                                });
                                throw f("dupes", "Duplicates in a repeater are not allowed. Use 'track by' expression to specify unique keys. Repeater: {0}, Duplicate key: {1}", l, C);
                            } else {
                                G[k] = {
                                    id: C
                                };
                                s[C] = false;
                            }
                        }
                        for (A in z) {
                            if (z.hasOwnProperty(A)) {
                                F = z[A];
                                H = g(F);
                                c.leave(H);
                                v(H, function(a) {
                                    a[e] = true;
                                });
                                F.scope.$destroy();
                            }
                        }
                        for (k = 0, m = E.length; k < m; k++) {
                            A = a === E ? k : E[k];
                            B = a[A];
                            F = G[k];
                            if (G[k - 1]) n = G[k - 1].endNode;
                            if (F.startNode) {
                                y = F.scope;
                                o = n;
                                do {
                                    o = o.nextSibling;
                                } while (o && o[e]);
                                if (F.startNode == o) {} else {
                                    c.move(g(F), null, j(n));
                                }
                                n = F.endNode;
                            } else {
                                y = d.$new();
                            }
                            y[w] = B;
                            if (x) y[x] = A;
                            y.$index = k;
                            y.$first = k === 0;
                            y.$last = k === t - 1;
                            y.$middle = !(y.$first || y.$last);
                            y.$odd = !(y.$even = k % 2 == 0);
                            if (!F.startNode) {
                                i(y, function(a) {
                                    a[a.length++] = b.createComment(" end ngRepeat: " + l + " ");
                                    c.enter(a, null, j(n));
                                    n = a;
                                    F.scope = y;
                                    F.startNode = n && n.endNode ? n.endNode : a[0];
                                    F.endNode = a[a.length - 1];
                                    s[F.id] = F;
                                });
                            }
                        }
                        z = s;
                    });
                };
            }
        };
        function g(a) {
            if (a.startNode === a.endNode) {
                return j(a.startNode);
            }
            var b = a.startNode;
            var c = [ b ];
            do {
                b = b.nextSibling;
                if (!b) break;
                c.push(b);
            } while (b !== a.endNode);
            return j(c);
        }
    } ];
    var We = [ "$animate", function(a) {
        return function(b, c, d) {
            b.$watch(d.ngShow, function e(b) {
                a[kb(b) ? "removeClass" : "addClass"](c, "ng-hide");
            });
        };
    } ];
    var Xe = [ "$animate", function(a) {
        return function(b, c, d) {
            b.$watch(d.ngHide, function e(b) {
                a[kb(b) ? "addClass" : "removeClass"](c, "ng-hide");
            });
        };
    } ];
    var Ye = be(function(a, b, c) {
        a.$watch(c.ngStyle, function d(a, c) {
            if (c && a !== c) {
                v(c, function(a, c) {
                    b.css(c, "");
                });
            }
            if (a) b.css(a);
        }, true);
    });
    var Ze = [ "$animate", function(a) {
        return {
            restrict: "EA",
            require: "ngSwitch",
            controller: [ "$scope", function b() {
                this.cases = {};
            } ],
            link: function(b, c, d, e) {
                var f = d.ngSwitch || d.on, g, h, i = [];
                b.$watch(f, function j(c) {
                    for (var f = 0, j = i.length; f < j; f++) {
                        i[f].$destroy();
                        a.leave(h[f]);
                    }
                    h = [];
                    i = [];
                    if (g = e.cases["!" + c] || e.cases["?"]) {
                        b.$eval(d.change);
                        v(g, function(c) {
                            var d = b.$new();
                            i.push(d);
                            c.transclude(d, function(b) {
                                var d = c.element;
                                h.push(b);
                                a.enter(b, d.parent(), d);
                            });
                        });
                    }
                });
            }
        };
    } ];
    var $e = be({
        transclude: "element",
        priority: 800,
        require: "^ngSwitch",
        compile: function(a, b, c) {
            return function(a, d, e, f) {
                f.cases["!" + b.ngSwitchWhen] = f.cases["!" + b.ngSwitchWhen] || [];
                f.cases["!" + b.ngSwitchWhen].push({
                    transclude: c,
                    element: d
                });
            };
        }
    });
    var _e = be({
        transclude: "element",
        priority: 800,
        require: "^ngSwitch",
        compile: function(a, b, c) {
            return function(a, b, d, e) {
                e.cases["?"] = e.cases["?"] || [];
                e.cases["?"].push({
                    transclude: c,
                    element: b
                });
            };
        }
    });
    var af = be({
        controller: [ "$element", "$transclude", function(a, b) {
            if (!b) {
                throw d("ngTransclude")("orphan", "Illegal use of ngTransclude directive in the template! " + "No parent directive that requires a transclusion found. " + "Element: {0}", lb(a));
            }
            this.$transclude = b;
        } ],
        link: function(a, b, c, d) {
            d.$transclude(function(a) {
                b.html("");
                b.append(a);
            });
        }
    });
    var bf = [ "$templateCache", function(a) {
        return {
            restrict: "E",
            terminal: true,
            compile: function(b, c) {
                if (c.type == "text/ng-template") {
                    var d = c.id, e = b[0].text;
                    a.put(d, e);
                }
            }
        };
    } ];
    var cf = d("ngOptions");
    var df = G({
        terminal: true
    });
    var ef = [ "$compile", "$parse", function(a, d) {
        var e = /^\s*(.*?)(?:\s+as\s+(.*?))?(?:\s+group\s+by\s+(.*))?\s+for\s+(?:([\$\w][\$\w]*)|(?:\(\s*([\$\w][\$\w]*)\s*,\s*([\$\w][\$\w]*)\s*\)))\s+in\s+(.*?)(?:\s+track\s+by\s+(.*?))?$/, f = {
            $setViewValue: E
        };
        return {
            restrict: "E",
            require: [ "select", "?ngModel" ],
            controller: [ "$element", "$scope", "$attrs", function(a, b, c) {
                var d = this, e = {}, g = f, h, i;
                d.databound = c.ngModel;
                d.init = function(a, b, c) {
                    g = a;
                    h = b;
                    i = c;
                };
                d.addOption = function(b) {
                    yb(b, '"option value"');
                    e[b] = true;
                    if (g.$viewValue == b) {
                        a.val(b);
                        if (i.parent()) i.remove();
                    }
                };
                d.removeOption = function(a) {
                    if (this.hasOption(a)) {
                        delete e[a];
                        if (g.$viewValue == a) {
                            this.renderUnknownOption(a);
                        }
                    }
                };
                d.renderUnknownOption = function(b) {
                    var c = "? " + ec(b) + " ?";
                    i.val(c);
                    a.prepend(i);
                    a.val(c);
                    i.prop("selected", true);
                };
                d.hasOption = function(a) {
                    return e.hasOwnProperty(a);
                };
                b.$on("$destroy", function() {
                    d.renderUnknownOption = E;
                });
            } ],
            link: function(f, g, h, i) {
                if (!i[1]) return;
                var k = i[0], l = i[1], m = h.multiple, n = h.ngOptions, o = false, p, q = j(b.createElement("option")), r = j(b.createElement("optgroup")), s = q.clone();
                for (var t = 0, u = g.children(), x = u.length; t < x; t++) {
                    if (u[t].value == "") {
                        p = o = u.eq(t);
                        break;
                    }
                }
                k.init(l, o, s);
                if (m && (h.required || h.ngRequired)) {
                    var y = function(a) {
                        l.$setValidity("required", !h.required || a && a.length);
                        return a;
                    };
                    l.$parsers.push(y);
                    l.$formatters.unshift(y);
                    h.$observe("required", function() {
                        y(l.$viewValue);
                    });
                }
                if (n) B(f, g, l); else if (m) A(f, g, l); else z(f, g, l, k);
                function z(a, b, c, d) {
                    c.$render = function() {
                        var a = c.$viewValue;
                        if (d.hasOption(a)) {
                            if (s.parent()) s.remove();
                            b.val(a);
                            if (a === "") p.prop("selected", true);
                        } else {
                            if (H(a) && p) {
                                b.val("");
                            } else {
                                d.renderUnknownOption(a);
                            }
                        }
                    };
                    b.on("change", function() {
                        a.$apply(function() {
                            if (s.parent()) s.remove();
                            c.$setViewValue(b.val());
                        });
                    });
                }
                function A(a, b, c) {
                    var d;
                    c.$render = function() {
                        var a = new fc(c.$viewValue);
                        v(b.find("option"), function(b) {
                            b.selected = I(a.get(b.value));
                        });
                    };
                    a.$watch(function e() {
                        if (!db(d, c.$viewValue)) {
                            d = bb(c.$viewValue);
                            c.$render();
                        }
                    });
                    b.on("change", function() {
                        a.$apply(function() {
                            var a = [];
                            v(b.find("option"), function(b) {
                                if (b.selected) {
                                    a.push(b.value);
                                }
                            });
                            c.$setViewValue(a);
                        });
                    });
                }
                function B(b, f, g) {
                    var h;
                    if (!(h = n.match(e))) {
                        throw cf("iexp", "Expected expression in form of '_select_ (as _label_)? for (_key_,)?_value_ in _collection_' but got '{0}'. Element: {1}", n, lb(f));
                    }
                    var i = d(h[2] || h[1]), j = h[4] || h[6], k = h[5], l = d(h[3] || ""), p = d(h[2] ? h[1] : j), s = d(h[7]), t = h[8], u = t ? d(h[8]) : null, v = [ [ {
                        element: f,
                        label: ""
                    } ] ];
                    if (o) {
                        a(o)(b);
                        o.removeClass("ng-scope");
                        o.remove();
                    }
                    f.html("");
                    f.on("change", function() {
                        b.$apply(function() {
                            var a, d = s(b) || [], e = {}, h, i, l, n, o, q, r, t;
                            if (m) {
                                i = [];
                                for (o = 0, r = v.length; o < r; o++) {
                                    a = v[o];
                                    for (n = 1, q = a.length; n < q; n++) {
                                        if ((l = a[n].element)[0].selected) {
                                            h = l.val();
                                            if (k) e[k] = h;
                                            if (u) {
                                                for (t = 0; t < d.length; t++) {
                                                    e[j] = d[t];
                                                    if (u(b, e) == h) break;
                                                }
                                            } else {
                                                e[j] = d[h];
                                            }
                                            i.push(p(b, e));
                                        }
                                    }
                                }
                            } else {
                                h = f.val();
                                if (h == "?") {
                                    i = c;
                                } else if (h == "") {
                                    i = null;
                                } else {
                                    if (u) {
                                        for (t = 0; t < d.length; t++) {
                                            e[j] = d[t];
                                            if (u(b, e) == h) {
                                                i = p(b, e);
                                                break;
                                            }
                                        }
                                    } else {
                                        e[j] = d[h];
                                        if (k) e[k] = h;
                                        i = p(b, e);
                                    }
                                }
                            }
                            g.$setViewValue(i);
                        });
                    });
                    g.$render = x;
                    b.$watch(x);
                    function x() {
                        var a = {
                            "": []
                        }, d = [ "" ], e, h, n, t, x, y, z = g.$modelValue, A = s(b) || [], B = k ? w(A) : A, C, D, E, F, G, H = {}, I, J = false, K, L, M;
                        if (m) {
                            if (u && N(z)) {
                                J = new fc([]);
                                for (var O = 0; O < z.length; O++) {
                                    H[j] = z[O];
                                    J.put(u(b, H), z[O]);
                                }
                            } else {
                                J = new fc(z);
                            }
                        }
                        for (G = 0; E = B.length, G < E; G++) {
                            C = G;
                            if (k) {
                                C = B[G];
                                if (C.charAt(0) === "$") continue;
                                H[k] = C;
                            }
                            H[j] = A[C];
                            e = l(b, H) || "";
                            if (!(h = a[e])) {
                                h = a[e] = [];
                                d.push(e);
                            }
                            if (m) {
                                I = J.remove(u ? u(b, H) : p(b, H)) !== c;
                            } else {
                                if (u) {
                                    var P = {};
                                    P[j] = z;
                                    I = u(b, P) === u(b, H);
                                } else {
                                    I = z === p(b, H);
                                }
                                J = J || I;
                            }
                            M = i(b, H);
                            M = M === c ? "" : M;
                            h.push({
                                id: u ? u(b, H) : k ? B[G] : G,
                                label: M,
                                selected: I
                            });
                        }
                        if (!m) {
                            if (o || z === null) {
                                a[""].unshift({
                                    id: "",
                                    label: "",
                                    selected: !J
                                });
                            } else if (!J) {
                                a[""].unshift({
                                    id: "?",
                                    label: "",
                                    selected: true
                                });
                            }
                        }
                        for (F = 0, D = d.length; F < D; F++) {
                            e = d[F];
                            h = a[e];
                            if (v.length <= F) {
                                t = {
                                    element: r.clone().attr("label", e),
                                    label: h.label
                                };
                                x = [ t ];
                                v.push(x);
                                f.append(t.element);
                            } else {
                                x = v[F];
                                t = x[0];
                                if (t.label != e) {
                                    t.element.attr("label", t.label = e);
                                }
                            }
                            K = null;
                            for (G = 0, E = h.length; G < E; G++) {
                                n = h[G];
                                if (y = x[G + 1]) {
                                    K = y.element;
                                    if (y.label !== n.label) {
                                        K.text(y.label = n.label);
                                    }
                                    if (y.id !== n.id) {
                                        K.val(y.id = n.id);
                                    }
                                    if (K[0].selected !== n.selected) {
                                        K.prop("selected", y.selected = n.selected);
                                    }
                                } else {
                                    if (n.id === "" && o) {
                                        L = o;
                                    } else {
                                        (L = q.clone()).val(n.id).attr("selected", n.selected).text(n.label);
                                    }
                                    x.push(y = {
                                        element: L,
                                        label: n.label,
                                        id: n.id,
                                        selected: n.selected
                                    });
                                    if (K) {
                                        K.after(L);
                                    } else {
                                        t.element.append(L);
                                    }
                                    K = L;
                                }
                            }
                            G++;
                            while (x.length > G) {
                                x.pop().element.remove();
                            }
                        }
                        while (v.length > F) {
                            v.pop()[0].element.remove();
                        }
                    }
                }
            }
        };
    } ];
    var ff = [ "$interpolate", function(a) {
        var b = {
            addOption: E,
            removeOption: E
        };
        return {
            restrict: "E",
            priority: 100,
            compile: function(c, d) {
                if (H(d.value)) {
                    var e = a(c.text(), true);
                    if (!e) {
                        d.$set("value", c.text());
                    }
                }
                return function(a, c, d) {
                    var f = "$selectController", g = c.parent(), h = g.data(f) || g.parent().data(f);
                    if (h && h.databound) {
                        c.prop("selected", false);
                    } else {
                        h = b;
                    }
                    if (e) {
                        a.$watch(e, function i(a, b) {
                            d.$set("value", a);
                            if (a !== b) h.removeOption(b);
                            h.addOption(a);
                        });
                    } else {
                        h.addOption(d.value);
                    }
                    c.on("$destroy", function() {
                        h.removeOption(d.value);
                    });
                };
            }
        };
    } ];
    var gf = G({
        restrict: "E",
        terminal: true
    });
    vb();
    Cb(q);
    j(b).ready(function() {
        rb(b, sb);
    });
})(window, document);

angular.element(document).find("head").prepend('<style type="text/css">@charset "UTF-8";[ng\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak,.ng-hide{display:none !important;}ng\\:form{display:block;}</style>');

(function(a, b, c) {
    "use strict";
    var d = b.module("ngRoute", [ "ng" ]).provider("$route", e);
    function e() {
        function a(a, c) {
            return b.extend(new (b.extend(function() {}, {
                prototype: a
            }))(), c);
        }
        var c = {};
        this.when = function(a, e) {
            c[a] = b.extend({
                reloadOnSearch: true
            }, e, a && d(a, e));
            if (a) {
                var f = a[a.length - 1] == "/" ? a.substr(0, a.length - 1) : a + "/";
                c[f] = b.extend({
                    redirectTo: a
                }, d(f, e));
            }
            return this;
        };
        function d(a, b) {
            var c = b.caseInsensitiveMatch, d = {
                originalPath: a,
                regexp: a
            }, e = d.keys = [];
            a = a.replace(/([().])/g, "\\$1").replace(/(\/)?:(\w+)([\?|\*])?/g, function(a, b, c, d) {
                var f = d === "?" ? d : null;
                var g = d === "*" ? d : null;
                e.push({
                    name: c,
                    optional: !!f
                });
                b = b || "";
                return "" + (f ? "" : b) + "(?:" + (f ? b : "") + (g && "(.+?)" || "([^/]+)") + (f || "") + ")" + (f || "");
            }).replace(/([\/$\*])/g, "\\$1");
            d.regexp = new RegExp("^" + a + "$", c ? "i" : "");
            return d;
        }
        this.otherwise = function(a) {
            this.when(null, a);
            return this;
        };
        this.$get = [ "$rootScope", "$location", "$routeParams", "$q", "$injector", "$http", "$templateCache", "$sce", function(d, e, f, g, h, i, j, k) {
            var l = false, m = {
                routes: c,
                reload: function() {
                    l = true;
                    d.$evalAsync(o);
                }
            };
            d.$on("$locationChangeSuccess", o);
            return m;
            function n(a, b) {
                var c = b.keys, d = {};
                if (!b.regexp) return null;
                var e = b.regexp.exec(a);
                if (!e) return null;
                for (var f = 1, g = e.length; f < g; ++f) {
                    var h = c[f - 1];
                    var i = "string" == typeof e[f] ? decodeURIComponent(e[f]) : e[f];
                    if (h && i) {
                        d[h.name] = i;
                    }
                }
                return d;
            }
            function o() {
                var a = p(), c = m.current;
                if (a && c && a.$$route === c.$$route && b.equals(a.pathParams, c.pathParams) && !a.reloadOnSearch && !l) {
                    c.params = a.params;
                    b.copy(c.params, f);
                    d.$broadcast("$routeUpdate", c);
                } else if (a || c) {
                    l = false;
                    d.$broadcast("$routeChangeStart", a, c);
                    m.current = a;
                    if (a) {
                        if (a.redirectTo) {
                            if (b.isString(a.redirectTo)) {
                                e.path(q(a.redirectTo, a.params)).search(a.params).replace();
                            } else {
                                e.url(a.redirectTo(a.pathParams, e.path(), e.search())).replace();
                            }
                        }
                    }
                    g.when(a).then(function() {
                        if (a) {
                            var c = b.extend({}, a.resolve), d, e;
                            b.forEach(c, function(a, d) {
                                c[d] = b.isString(a) ? h.get(a) : h.invoke(a);
                            });
                            if (b.isDefined(d = a.template)) {
                                if (b.isFunction(d)) {
                                    d = d(a.params);
                                }
                            } else if (b.isDefined(e = a.templateUrl)) {
                                if (b.isFunction(e)) {
                                    e = e(a.params);
                                }
                                e = k.getTrustedResourceUrl(e);
                                if (b.isDefined(e)) {
                                    a.loadedTemplateUrl = e;
                                    d = i.get(e, {
                                        cache: j
                                    }).then(function(a) {
                                        return a.data;
                                    });
                                }
                            }
                            if (b.isDefined(d)) {
                                c["$template"] = d;
                            }
                            return g.all(c);
                        }
                    }).then(function(e) {
                        if (a == m.current) {
                            if (a) {
                                a.locals = e;
                                b.copy(a.params, f);
                            }
                            d.$broadcast("$routeChangeSuccess", a, c);
                        }
                    }, function(b) {
                        if (a == m.current) {
                            d.$broadcast("$routeChangeError", a, c, b);
                        }
                    });
                }
            }
            function p() {
                var d, f;
                b.forEach(c, function(c, g) {
                    if (!f && (d = n(e.path(), c))) {
                        f = a(c, {
                            params: b.extend({}, e.search(), d),
                            pathParams: d
                        });
                        f.$$route = c;
                    }
                });
                return f || c[null] && a(c[null], {
                    params: {},
                    pathParams: {}
                });
            }
            function q(a, c) {
                var d = [];
                b.forEach((a || "").split(":"), function(a, b) {
                    if (b === 0) {
                        d.push(a);
                    } else {
                        var e = a.match(/(\w+)(.*)/);
                        var f = e[1];
                        d.push(c[f]);
                        d.push(e[2] || "");
                        delete c[f];
                    }
                });
                return d.join("");
            }
        } ];
    }
    d.provider("$routeParams", f);
    function f() {
        this.$get = function() {
            return {};
        };
    }
    d.directive("ngView", g);
    g.$inject = [ "$route", "$anchorScroll", "$compile", "$controller", "$animate" ];
    function g(a, b, c, d, e) {
        return {
            restrict: "ECA",
            terminal: true,
            priority: 400,
            transclude: "element",
            compile: function(f, g, h) {
                return function(f, g, i) {
                    var j, k, l = i.onload || "";
                    f.$on("$routeChangeSuccess", n);
                    n();
                    function m() {
                        if (j) {
                            j.$destroy();
                            j = null;
                        }
                        if (k) {
                            e.leave(k);
                            k = null;
                        }
                    }
                    function n() {
                        var i = a.current && a.current.locals, n = i && i.$template;
                        if (n) {
                            var o = f.$new();
                            h(o, function(f) {
                                m();
                                f.html(n);
                                e.enter(f, null, g);
                                var h = c(f.contents()), p = a.current;
                                j = p.scope = o;
                                k = f;
                                if (p.controller) {
                                    i.$scope = j;
                                    var q = d(p.controller, i);
                                    if (p.controllerAs) {
                                        j[p.controllerAs] = q;
                                    }
                                    f.data("$ngControllerController", q);
                                    f.children().data("$ngControllerController", q);
                                }
                                h(j);
                                j.$emit("$viewContentLoaded");
                                j.$eval(l);
                                b();
                            });
                        } else {
                            m();
                        }
                    }
                };
            }
        };
    }
})(window, window.angular);

(function() {
    function a(a, b, c) {
        c = (c || 0) - 1;
        for (var d = a ? a.length : 0; ++c < d; ) if (a[c] === b) return c;
        return -1;
    }
    function b(b, c) {
        var d = typeof c;
        if (b = b.k, "boolean" == d || null == c) return b[c] ? 0 : -1;
        "number" != d && "string" != d && (d = "object");
        var e = "number" == d ? c : r + c;
        return b = (b = b[d]) && b[e], "object" == d ? b && -1 < a(b, c) ? 0 : -1 : b ? 0 : -1;
    }
    function c(a) {
        var b = this.k, c = typeof a;
        if ("boolean" == c || null == a) b[a] = !0; else {
            "number" != c && "string" != c && (c = "object");
            var d = "number" == c ? a : r + a, b = b[c] || (b[c] = {});
            "object" == c ? (b[d] || (b[d] = [])).push(a) : b[d] = !0;
        }
    }
    function d(a) {
        return a.charCodeAt(0);
    }
    function e(a, b) {
        var c = a.l, d = b.l;
        if (c !== d) {
            if (c > d || typeof c == "undefined") return 1;
            if (c < d || typeof d == "undefined") return -1;
        }
        return a.m - b.m;
    }
    function f(a) {
        var b = -1, d = a.length, e = a[0], f = a[d - 1];
        if (e && typeof e == "object" && f && typeof f == "object") return !1;
        for (e = i(), e["false"] = e["null"] = e["true"] = e.undefined = !1, f = i(), f.b = a, 
        f.k = e, f.push = c; ++b < d; ) f.push(a[b]);
        return f;
    }
    function g(a) {
        return "\\" + S[a];
    }
    function h() {
        return o.pop() || [];
    }
    function i() {
        return p.pop() || {
            b: null,
            k: null,
            configurable: !1,
            l: null,
            enumerable: !1,
            "false": !1,
            m: 0,
            leading: !1,
            maxWait: 0,
            "null": !1,
            number: null,
            z: null,
            push: null,
            string: null,
            trailing: !1,
            "true": !1,
            undefined: !1,
            n: null,
            writable: !1
        };
    }
    function j(a) {
        a.length = 0, o.length < t && o.push(a);
    }
    function k(a) {
        var b = a.k;
        b && k(b), a.b = a.k = a.l = a.object = a.number = a.string = a.n = null, p.length < t && p.push(a);
    }
    function l(a, b, c) {
        b || (b = 0), typeof c == "undefined" && (c = a ? a.length : 0);
        var d = -1;
        c = c - b || 0;
        for (var e = Array(0 > c ? 0 : c); ++d < c; ) e[d] = a[b + d];
        return e;
    }
    function m(c) {
        function o(a) {
            if (!a || tc.call(a) != N) return !1;
            var b = a.valueOf, c = typeof b == "function" && (c = mc(b)) && mc(c);
            return c ? a == c || mc(a) == c : jb(a);
        }
        function p(a, b, c) {
            if (!a || !R[typeof a]) return a;
            b = b && typeof c == "undefined" ? b : ab(b, c, 3);
            for (var d = -1, e = R[typeof a] && Mc(a), f = e ? e.length : 0; ++d < f && (c = e[d], 
            false !== b(a[c], c, a)); ) ;
            return a;
        }
        function t(a, b, c) {
            var d;
            if (!a || !R[typeof a]) return a;
            b = b && typeof c == "undefined" ? b : ab(b, c, 3);
            for (d in a) if (false === b(a[d], d, a)) break;
            return a;
        }
        function S(a, b, c) {
            var d, e = a, f = e;
            if (!e) return f;
            for (var g = arguments, h = 0, i = typeof c == "number" ? 2 : g.length; ++h < i; ) if ((e = g[h]) && R[typeof e]) for (var j = -1, k = R[typeof e] && Mc(e), l = k ? k.length : 0; ++j < l; ) d = k[j], 
            "undefined" == typeof f[d] && (f[d] = e[d]);
            return f;
        }
        function U(a, b, c) {
            var d, e = a, f = e;
            if (!e) return f;
            var g = arguments, h = 0, i = typeof c == "number" ? 2 : g.length;
            if (3 < i && "function" == typeof g[i - 2]) var j = ab(g[--i - 1], g[i--], 2); else 2 < i && "function" == typeof g[i - 1] && (j = g[--i]);
            for (;++h < i; ) if ((e = g[h]) && R[typeof e]) for (var k = -1, l = R[typeof e] && Mc(e), m = l ? l.length : 0; ++k < m; ) d = l[k], 
            f[d] = j ? j(f[d], e[d]) : e[d];
            return f;
        }
        function W(a) {
            var b, c = [];
            if (!a || !R[typeof a]) return c;
            for (b in a) nc.call(a, b) && c.push(b);
            return c;
        }
        function Y(a, b) {
            var c = i();
            c.value = b, vc(a, "__bindData__", c), k(c);
        }
        function Z(a) {
            return a && typeof a == "object" && !Lc(a) && nc.call(a, "__wrapped__") ? a : new $(a);
        }
        function $(a, b) {
            this.__chain__ = !!b, this.__wrapped__ = a;
        }
        function _(a, b, c, d, e) {
            var f = a;
            if (c) {
                if (f = c(f), typeof f != "undefined") return f;
                f = a;
            }
            var g = qb(f);
            if (g) {
                var i = tc.call(f);
                if (!Q[i]) return f;
                var k = Lc(f);
            }
            if (!g || !b) return g ? k ? l(f) : U({}, f) : f;
            switch (g = Jc[i], i) {
              case J:
              case K:
                return new g(+f);

              case M:
              case P:
                return new g(f);

              case O:
                return g(f.source, z.exec(f));
            }
            i = !d, d || (d = h()), e || (e = h());
            for (var m = d.length; m--; ) if (d[m] == a) return e[m];
            return f = k ? g(f.length) : {}, k && (nc.call(a, "index") && (f.index = a.index), 
            nc.call(a, "input") && (f.input = a.input)), d.push(a), e.push(f), (k ? yb : p)(a, function(a, g) {
                f[g] = _(a, b, c, d, e);
            }), i && (j(d), j(e)), f;
        }
        function ab(a, b, c) {
            if (typeof a != "function") return Sb;
            if (typeof b == "undefined") return a;
            var d = a.__bindData__ || Kc.a && !a.name;
            if (typeof d == "undefined") {
                var e = E && lc.call(a);
                Kc.a || !e || A.test(e) || (d = !0), (Kc.a || !d) && (d = !E || E.test(e), Y(a, d));
            }
            if (true !== d && d && 1 & d[1]) return a;
            switch (c) {
              case 1:
                return function(c) {
                    return a.call(b, c);
                };

              case 2:
                return function(c, d) {
                    return a.call(b, c, d);
                };

              case 3:
                return function(c, d, e) {
                    return a.call(b, c, d, e);
                };

              case 4:
                return function(c, d, e, f) {
                    return a.call(b, c, d, e, f);
                };
            }
            return Pb(a, b);
        }
        function bb(a, b, c, d) {
            d = (d || 0) - 1;
            for (var e = a ? a.length : 0, f = []; ++d < e; ) {
                var g = a[d];
                g && typeof g == "object" && (Lc(g) || lb(g)) ? pc.apply(f, b ? g : bb(g, b, c)) : c || f.push(g);
            }
            return f;
        }
        function cb(a, b, c, d, e, f) {
            if (c) {
                var g = c(a, b);
                if (typeof g != "undefined") return !!g;
            }
            if (a === b) return 0 !== a || 1 / a == 1 / b;
            if (a === a && !(a && R[typeof a] || b && R[typeof b])) return !1;
            if (null == a || null == b) return a === b;
            var i = tc.call(a), k = tc.call(b);
            if (i == H && (i = N), k == H && (k = N), i != k) return !1;
            switch (i) {
              case J:
              case K:
                return +a == +b;

              case M:
                return a != +a ? b != +b : 0 == a ? 1 / a == 1 / b : a == +b;

              case O:
              case P:
                return a == cc(b);
            }
            if (k = i == I, !k) {
                if (nc.call(a, "__wrapped__") || nc.call(b, "__wrapped__")) return cb(a.__wrapped__ || a, b.__wrapped__ || b, c, d, e, f);
                if (i != N) return !1;
                var i = a.constructor, l = b.constructor;
                if (i != l && !(pb(i) && i instanceof i && pb(l) && l instanceof l)) return !1;
            }
            for (l = !e, e || (e = h()), f || (f = h()), i = e.length; i--; ) if (e[i] == a) return f[i] == b;
            var m = 0, g = !0;
            if (e.push(a), f.push(b), k) {
                if (i = a.length, m = b.length, g = m == a.length, !g && !d) return g;
                for (;m--; ) if (k = i, l = b[m], d) for (;k-- && !(g = cb(a[k], l, c, d, e, f)); ) ; else if (!(g = cb(a[m], l, c, d, e, f))) break;
                return g;
            }
            return t(b, function(b, h, i) {
                return nc.call(i, h) ? (m++, g = nc.call(a, h) && cb(a[h], b, c, d, e, f)) : void 0;
            }), g && !d && t(a, function(a, b, c) {
                return nc.call(c, b) ? g = -1 < --m : void 0;
            }), l && (j(e), j(f)), g;
        }
        function db(a, b, c, d, e) {
            (Lc(b) ? yb : p)(b, function(b, f) {
                var g, h, i = b, j = a[f];
                if (b && ((h = Lc(b)) || o(b))) {
                    for (i = d.length; i--; ) if (g = d[i] == b) {
                        j = e[i];
                        break;
                    }
                    if (!g) {
                        var k;
                        c && (i = c(j, b), k = typeof i != "undefined") && (j = i), k || (j = h ? Lc(j) ? j : [] : o(j) ? j : {}), 
                        d.push(b), e.push(j), k || db(j, b, c, d, e);
                    }
                } else c && (i = c(j, b), typeof i == "undefined" && (i = b)), typeof i != "undefined" && (j = i);
                a[f] = j;
            });
        }
        function eb(c, d, e) {
            var g = -1, i = ib(), l = c ? c.length : 0, m = [], n = !d && l >= s && i === a, o = e || n ? h() : m;
            if (n) {
                var p = f(o);
                p ? (i = b, o = p) : (n = !1, o = e ? o : (j(o), m));
            }
            for (;++g < l; ) {
                var p = c[g], q = e ? e(p, g, c) : p;
                (d ? !g || o[o.length - 1] !== q : 0 > i(o, q)) && ((e || n) && o.push(q), m.push(p));
            }
            return n ? (j(o.b), k(o)) : e && j(o), m;
        }
        function fb(a) {
            return function(b, c, d) {
                var e = {};
                c = Z.createCallback(c, d, 3), d = -1;
                var f = b ? b.length : 0;
                if (typeof f == "number") for (;++d < f; ) {
                    var g = b[d];
                    a(e, g, c(g, d, b), b);
                } else p(b, function(b, d, f) {
                    a(e, b, c(b, d, f), f);
                });
                return e;
            };
        }
        function gb(a, b, c, d, e, f) {
            var g = 1 & b, h = 2 & b, i = 4 & b, j = 8 & b, k = 16 & b, l = 32 & b, m = a;
            if (!h && !pb(a)) throw new dc();
            k && !c.length && (b &= -17, k = c = !1), l && !d.length && (b &= -33, l = d = !1);
            var n = a && a.__bindData__;
            if (n) return !g || 1 & n[1] || (n[4] = e), !g && 1 & n[1] && (b |= 8), !i || 4 & n[1] || (n[5] = f), 
            k && pc.apply(n[2] || (n[2] = []), c), l && pc.apply(n[3] || (n[3] = []), d), n[1] |= b, 
            gb.apply(null, n);
            if (!g || h || i || l || !(Kc.fastBind || wc && k)) p = function() {
                var n = arguments, o = g ? e : this;
                return (i || k || l) && (n = Gc.call(n), k && uc.apply(n, c), l && pc.apply(n, d), 
                i && n.length < f) ? (b |= 16, gb(a, j ? b : -4 & b, n, null, e, f)) : (h && (a = o[m]), 
                this instanceof p ? (o = qb(a.prototype) ? xc(a.prototype) : {}, n = a.apply(o, n), 
                qb(n) ? n : o) : a.apply(o, n));
            }; else {
                if (k) {
                    var o = [ e ];
                    pc.apply(o, c);
                }
                var p = k ? wc.apply(a, o) : wc.call(a, e);
            }
            return Y(p, Gc.call(arguments)), p;
        }
        function hb(a) {
            return Nc[a];
        }
        function ib() {
            var b = (b = Z.indexOf) === Jb ? a : b;
            return b;
        }
        function jb(a) {
            var b, c;
            return a && tc.call(a) == N && (b = a.constructor, !pb(b) || b instanceof b) ? (t(a, function(a, b) {
                c = b;
            }), typeof c == "undefined" || nc.call(a, c)) : !1;
        }
        function kb(a) {
            return Oc[a];
        }
        function lb(a) {
            return a && typeof a == "object" ? tc.call(a) == H : !1;
        }
        function mb(a, b, c) {
            var d = Mc(a), e = d.length;
            for (b = ab(b, c, 3); e-- && (c = d[e], false !== b(a[c], c, a)); ) ;
            return a;
        }
        function nb(a) {
            var b = [];
            return t(a, function(a, c) {
                pb(a) && b.push(c);
            }), b.sort();
        }
        function ob(a) {
            for (var b = -1, c = Mc(a), d = c.length, e = {}; ++b < d; ) {
                var f = c[b];
                e[a[f]] = f;
            }
            return e;
        }
        function pb(a) {
            return typeof a == "function";
        }
        function qb(a) {
            return !(!a || !R[typeof a]);
        }
        function rb(a) {
            return typeof a == "number" || tc.call(a) == M;
        }
        function sb(a) {
            return typeof a == "string" || tc.call(a) == P;
        }
        function tb(a) {
            for (var b = -1, c = Mc(a), d = c.length, e = Wb(d); ++b < d; ) e[b] = a[c[b]];
            return e;
        }
        function ub(a, b, c) {
            var d = -1, e = ib(), f = a ? a.length : 0, g = !1;
            return c = (0 > c ? Cc(0, f + c) : c) || 0, Lc(a) ? g = -1 < e(a, b, c) : typeof f == "number" ? g = -1 < (sb(a) ? a.indexOf(b, c) : e(a, b, c)) : p(a, function(a) {
                return ++d < c ? void 0 : !(g = a === b);
            }), g;
        }
        function vb(a, b, c) {
            var d = !0;
            b = Z.createCallback(b, c, 3), c = -1;
            var e = a ? a.length : 0;
            if (typeof e == "number") for (;++c < e && (d = !!b(a[c], c, a)); ) ; else p(a, function(a, c, e) {
                return d = !!b(a, c, e);
            });
            return d;
        }
        function wb(a, b, c) {
            var d = [];
            b = Z.createCallback(b, c, 3), c = -1;
            var e = a ? a.length : 0;
            if (typeof e == "number") for (;++c < e; ) {
                var f = a[c];
                b(f, c, a) && d.push(f);
            } else p(a, function(a, c, e) {
                b(a, c, e) && d.push(a);
            });
            return d;
        }
        function xb(a, b, c) {
            b = Z.createCallback(b, c, 3), c = -1;
            var d = a ? a.length : 0;
            if (typeof d != "number") {
                var e;
                return p(a, function(a, c, d) {
                    return b(a, c, d) ? (e = a, !1) : void 0;
                }), e;
            }
            for (;++c < d; ) {
                var f = a[c];
                if (b(f, c, a)) return f;
            }
        }
        function yb(a, b, c) {
            var d = -1, e = a ? a.length : 0;
            if (b = b && typeof c == "undefined" ? b : ab(b, c, 3), typeof e == "number") for (;++d < e && false !== b(a[d], d, a); ) ; else p(a, b);
            return a;
        }
        function zb(a, b, c) {
            var d = a ? a.length : 0;
            if (b = b && typeof c == "undefined" ? b : ab(b, c, 3), typeof d == "number") for (;d-- && false !== b(a[d], d, a); ) ; else {
                var e = Mc(a), d = e.length;
                p(a, function(a, c, f) {
                    return c = e ? e[--d] : --d, b(f[c], c, f);
                });
            }
            return a;
        }
        function Ab(a, b, c) {
            var d = -1, e = a ? a.length : 0;
            if (b = Z.createCallback(b, c, 3), typeof e == "number") for (var f = Wb(e); ++d < e; ) f[d] = b(a[d], d, a); else f = [], 
            p(a, function(a, c, e) {
                f[++d] = b(a, c, e);
            });
            return f;
        }
        function Bb(a, b, c) {
            var e = -1 / 0, f = e;
            if (!b && Lc(a)) {
                c = -1;
                for (var g = a.length; ++c < g; ) {
                    var h = a[c];
                    h > f && (f = h);
                }
            } else b = !b && sb(a) ? d : Z.createCallback(b, c, 3), yb(a, function(a, c, d) {
                c = b(a, c, d), c > e && (e = c, f = a);
            });
            return f;
        }
        function Cb(a, b) {
            var c = -1, d = a ? a.length : 0;
            if (typeof d == "number") for (var e = Wb(d); ++c < d; ) e[c] = a[c][b];
            return e || Ab(a, b);
        }
        function Db(a, b, c, d) {
            if (!a) return c;
            var e = 3 > arguments.length;
            b = ab(b, d, 4);
            var f = -1, g = a.length;
            if (typeof g == "number") for (e && (c = a[++f]); ++f < g; ) c = b(c, a[f], f, a); else p(a, function(a, d, f) {
                c = e ? (e = !1, a) : b(c, a, d, f);
            });
            return c;
        }
        function Eb(a, b, c, d) {
            var e = 3 > arguments.length;
            return b = ab(b, d, 4), zb(a, function(a, d, f) {
                c = e ? (e = !1, a) : b(c, a, d, f);
            }), c;
        }
        function Fb(a) {
            var b = -1, c = a ? a.length : 0, d = Wb(typeof c == "number" ? c : 0);
            return yb(a, function(a) {
                var c = Ub(++b);
                d[b] = d[c], d[c] = a;
            }), d;
        }
        function Gb(a, b, c) {
            var d;
            b = Z.createCallback(b, c, 3), c = -1;
            var e = a ? a.length : 0;
            if (typeof e == "number") for (;++c < e && !(d = b(a[c], c, a)); ) ; else p(a, function(a, c, e) {
                return !(d = b(a, c, e));
            });
            return !!d;
        }
        function Hb(c) {
            var d = -1, e = ib(), g = c ? c.length : 0, h = bb(arguments, !0, !0, 1), i = [], j = g >= s && e === a;
            if (j) {
                var l = f(h);
                l ? (e = b, h = l) : j = !1;
            }
            for (;++d < g; ) l = c[d], 0 > e(h, l) && i.push(l);
            return j && k(h), i;
        }
        function Ib(a, b, c) {
            var d = 0, e = a ? a.length : 0;
            if (typeof b != "number" && null != b) {
                var f = -1;
                for (b = Z.createCallback(b, c, 3); ++f < e && b(a[f], f, a); ) d++;
            } else if (d = b, null == d || c) return a ? a[0] : n;
            return l(a, 0, Dc(Cc(0, d), e));
        }
        function Jb(b, c, d) {
            if (typeof d == "number") {
                var e = b ? b.length : 0;
                d = 0 > d ? Cc(0, e + d) : d || 0;
            } else if (d) return d = Lb(b, c), b[d] === c ? d : -1;
            return a(b, c, d);
        }
        function Kb(a, b, c) {
            if (typeof b != "number" && null != b) {
                var d = 0, e = -1, f = a ? a.length : 0;
                for (b = Z.createCallback(b, c, 3); ++e < f && b(a[e], e, a); ) d++;
            } else d = null == b || c ? 1 : Cc(0, b);
            return l(a, d);
        }
        function Lb(a, b, c, d) {
            var e = 0, f = a ? a.length : e;
            for (c = c ? Z.createCallback(c, d, 1) : Sb, b = c(b); e < f; ) d = e + f >>> 1, 
            c(a[d]) < b ? e = d + 1 : f = d;
            return e;
        }
        function Mb(a, b, c, d) {
            return typeof b != "boolean" && null != b && (c = (d = c) && d[b] === a ? null : b, 
            b = !1), null != c && (c = Z.createCallback(c, d, 3)), eb(a, b, c);
        }
        function Nb() {
            for (var a = 1 < arguments.length ? arguments : arguments[0], b = -1, c = a ? Bb(Cb(a, "length")) : 0, d = Wb(0 > c ? 0 : c); ++b < c; ) d[b] = Cb(a, b);
            return d;
        }
        function Ob(a, b) {
            for (var c = -1, d = a ? a.length : 0, e = {}; ++c < d; ) {
                var f = a[c];
                b ? e[f] = b[c] : f && (e[f[0]] = f[1]);
            }
            return e;
        }
        function Pb(a, b) {
            return 2 < arguments.length ? gb(a, 17, Gc.call(arguments, 2), null, b) : gb(a, 1, null, null, b);
        }
        function Qb(a, b, c) {
            function d() {
                k && jc(k), g = k = l = n, (p || o !== b) && (m = oc(), h = a.apply(j, f));
            }
            function e() {
                var c = b - (oc() - i);
                0 < c ? k = rc(e, c) : (g && jc(g), c = l, g = k = l = n, c && (m = oc(), h = a.apply(j, f)));
            }
            var f, g, h, i, j, k, l, m = 0, o = !1, p = !0;
            if (!pb(a)) throw new dc();
            if (b = Cc(0, b) || 0, true === c) var q = !0, p = !1; else qb(c) && (q = c.leading, 
            o = "maxWait" in c && (Cc(b, c.maxWait) || 0), p = "trailing" in c ? c.trailing : p);
            return function() {
                if (f = arguments, i = oc(), j = this, l = p && (k || !q), false === o) var c = q && !k; else {
                    g || q || (m = i);
                    var n = o - (i - m);
                    0 < n ? g || (g = rc(d, n)) : (g && (g = jc(g)), m = i, h = a.apply(j, f));
                }
                return k || b === o || (k = rc(e, b)), c && (h = a.apply(j, f)), h;
            };
        }
        function Rb(a) {
            if (!pb(a)) throw new dc();
            var b = Gc.call(arguments, 1);
            return rc(function() {
                a.apply(n, b);
            }, 1);
        }
        function Sb(a) {
            return a;
        }
        function Tb(a, b) {
            var c = a, d = !b || pb(c);
            b || (c = $, b = a, a = Z), yb(nb(b), function(e) {
                var f = a[e] = b[e];
                d && (c.prototype[e] = function() {
                    var b = this.__wrapped__, d = [ b ];
                    return pc.apply(d, arguments), d = f.apply(a, d), b && typeof b == "object" && b === d ? this : new c(d);
                });
            });
        }
        function Ub(a, b) {
            null == a && null == b && (b = 1), a = +a || 0, null == b ? (b = a, a = 0) : b = +b || 0;
            var c = Fc();
            return a % 1 || b % 1 ? a + Dc(c * (b - a + parseFloat("1e-" + ((c + "").length - 1))), b) : a + kc(c * (b - a + 1));
        }
        function Vb() {
            return this.__wrapped__;
        }
        c = c ? X.defaults(T.Object(), c, X.pick(T, G)) : T;
        var Wb = c.Array, Xb = c.Boolean, Yb = c.Date, Zb = c.Function, $b = c.Math, _b = c.Number, ac = c.Object, bc = c.RegExp, cc = c.String, dc = c.TypeError, ec = [], fc = ac.prototype, gc = c._, hc = bc("^" + cc(fc.valueOf).replace(/[.*+?^${}()|[\]\\]/g, "\\$&").replace(/valueOf|for [^\]]+/g, ".+?") + "$"), ic = $b.ceil, jc = c.clearTimeout, kc = $b.floor, lc = Zb.prototype.toString, mc = hc.test(mc = ac.getPrototypeOf) && mc, nc = fc.hasOwnProperty, oc = hc.test(oc = Yb.now) && oc || function() {
            return +new Yb();
        }, pc = ec.push, qc = c.setImmediate, rc = c.setTimeout, sc = ec.splice, tc = fc.toString, uc = ec.unshift, vc = function() {
            try {
                var a = {}, b = hc.test(b = ac.defineProperty) && b, c = b(a, a, a) && b;
            } catch (d) {}
            return c;
        }(), wc = hc.test(wc = tc.bind) && wc, xc = hc.test(xc = ac.create) && xc, yc = hc.test(yc = Wb.isArray) && yc, zc = c.isFinite, Ac = c.isNaN, Bc = hc.test(Bc = ac.keys) && Bc, Cc = $b.max, Dc = $b.min, Ec = c.parseInt, Fc = $b.random, Gc = ec.slice, Hc = hc.test(c.attachEvent), Ic = wc && !/\n|true/.test(wc + Hc), Jc = {};
        Jc[I] = Wb, Jc[J] = Xb, Jc[K] = Yb, Jc[L] = Zb, Jc[N] = ac, Jc[M] = _b, Jc[O] = bc, 
        Jc[P] = cc, $.prototype = Z.prototype;
        var Kc = Z.support = {};
        Kc.fastBind = wc && !Ic, Kc.a = typeof Zb.name == "string", Z.templateSettings = {
            escape: /<%-([\s\S]+?)%>/g,
            evaluate: /<%([\s\S]+?)%>/g,
            interpolate: B,
            variable: "",
            imports: {
                _: Z
            }
        };
        var Lc = yc || function(a) {
            return a && typeof a == "object" ? tc.call(a) == I : !1;
        }, Mc = Bc ? function(a) {
            return qb(a) ? Bc(a) : [];
        } : W, Nc = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#39;"
        }, Oc = ob(Nc), Pc = bc("(" + Mc(Oc).join("|") + ")", "g"), Qc = bc("[" + Mc(Nc).join("") + "]", "g"), Rc = fb(function(a, b, c) {
            nc.call(a, c) ? a[c]++ : a[c] = 1;
        }), Sc = fb(function(a, b, c) {
            (nc.call(a, c) ? a[c] : a[c] = []).push(b);
        }), Tc = fb(function(a, b, c) {
            a[c] = b;
        });
        Ic && V && typeof qc == "function" && (Rb = function(a) {
            if (!pb(a)) throw new dc();
            return qc.apply(c, arguments);
        });
        var Uc = 8 == Ec(u + "08") ? Ec : function(a, b) {
            return Ec(sb(a) ? a.replace(C, "") : a, b || 0);
        };
        return Z.after = function(a, b) {
            if (!pb(b)) throw new dc();
            return function() {
                return 1 > --a ? b.apply(this, arguments) : void 0;
            };
        }, Z.assign = U, Z.at = function(a) {
            for (var b = arguments, c = -1, d = bb(b, !0, !1, 1), b = b[2] && b[2][b[1]] === a ? 1 : d.length, e = Wb(b); ++c < b; ) e[c] = a[d[c]];
            return e;
        }, Z.bind = Pb, Z.bindAll = function(a) {
            for (var b = 1 < arguments.length ? bb(arguments, !0, !1, 1) : nb(a), c = -1, d = b.length; ++c < d; ) {
                var e = b[c];
                a[e] = gb(a[e], 1, null, null, a);
            }
            return a;
        }, Z.bindKey = function(a, b) {
            return 2 < arguments.length ? gb(b, 19, Gc.call(arguments, 2), null, a) : gb(b, 3, null, null, a);
        }, Z.chain = function(a) {
            return a = new $(a), a.__chain__ = !0, a;
        }, Z.compact = function(a) {
            for (var b = -1, c = a ? a.length : 0, d = []; ++b < c; ) {
                var e = a[b];
                e && d.push(e);
            }
            return d;
        }, Z.compose = function() {
            for (var a = arguments, b = a.length || 1; b--; ) if (!pb(a[b])) throw new dc();
            return function() {
                for (var b = arguments, c = a.length; c--; ) b = [ a[c].apply(this, b) ];
                return b[0];
            };
        }, Z.countBy = Rc, Z.createCallback = function(a, b, c) {
            var d = typeof a;
            if (null == a || "function" == d) return ab(a, b, c);
            if ("object" != d) return function(b) {
                return b[a];
            };
            var e = Mc(a), f = e[0], g = a[f];
            return 1 != e.length || g !== g || qb(g) ? function(b) {
                for (var c = e.length, d = !1; c-- && (d = cb(b[e[c]], a[e[c]], null, !0)); ) ;
                return d;
            } : function(a) {
                return a = a[f], g === a && (0 !== g || 1 / g == 1 / a);
            };
        }, Z.curry = function(a, b) {
            return b = typeof b == "number" ? b : +b || a.length, gb(a, 4, null, null, null, b);
        }, Z.debounce = Qb, Z.defaults = S, Z.defer = Rb, Z.delay = function(a, b) {
            if (!pb(a)) throw new dc();
            var c = Gc.call(arguments, 2);
            return rc(function() {
                a.apply(n, c);
            }, b);
        }, Z.difference = Hb, Z.filter = wb, Z.flatten = function(a, b, c, d) {
            return typeof b != "boolean" && null != b && (c = (d = c) && d[b] === a ? null : b, 
            b = !1), null != c && (a = Ab(a, c, d)), bb(a, b);
        }, Z.forEach = yb, Z.forEachRight = zb, Z.forIn = t, Z.forInRight = function(a, b, c) {
            var d = [];
            t(a, function(a, b) {
                d.push(b, a);
            });
            var e = d.length;
            for (b = ab(b, c, 3); e-- && false !== b(d[e--], d[e], a); ) ;
            return a;
        }, Z.forOwn = p, Z.forOwnRight = mb, Z.functions = nb, Z.groupBy = Sc, Z.indexBy = Tc, 
        Z.initial = function(a, b, c) {
            var d = 0, e = a ? a.length : 0;
            if (typeof b != "number" && null != b) {
                var f = e;
                for (b = Z.createCallback(b, c, 3); f-- && b(a[f], f, a); ) d++;
            } else d = null == b || c ? 1 : b || d;
            return l(a, 0, Dc(Cc(0, e - d), e));
        }, Z.intersection = function(c) {
            for (var d = arguments, e = d.length, g = -1, i = h(), l = -1, m = ib(), n = c ? c.length : 0, o = [], p = h(); ++g < e; ) {
                var q = d[g];
                i[g] = m === a && (q ? q.length : 0) >= s && f(g ? d[g] : p);
            }
            a: for (;++l < n; ) {
                var r = i[0], q = c[l];
                if (0 > (r ? b(r, q) : m(p, q))) {
                    for (g = e, (r || p).push(q); --g; ) if (r = i[g], 0 > (r ? b(r, q) : m(d[g], q))) continue a;
                    o.push(q);
                }
            }
            for (;e--; ) (r = i[e]) && k(r);
            return j(i), j(p), o;
        }, Z.invert = ob, Z.invoke = function(a, b) {
            var c = Gc.call(arguments, 2), d = -1, e = typeof b == "function", f = a ? a.length : 0, g = Wb(typeof f == "number" ? f : 0);
            return yb(a, function(a) {
                g[++d] = (e ? b : a[b]).apply(a, c);
            }), g;
        }, Z.keys = Mc, Z.map = Ab, Z.max = Bb, Z.memoize = function(a, b) {
            function c() {
                var d = c.cache, e = b ? b.apply(this, arguments) : r + arguments[0];
                return nc.call(d, e) ? d[e] : d[e] = a.apply(this, arguments);
            }
            if (!pb(a)) throw new dc();
            return c.cache = {}, c;
        }, Z.merge = function(a) {
            var b = arguments, c = 2;
            if (!qb(a)) return a;
            if ("number" != typeof b[2] && (c = b.length), 3 < c && "function" == typeof b[c - 2]) var d = ab(b[--c - 1], b[c--], 2); else 2 < c && "function" == typeof b[c - 1] && (d = b[--c]);
            for (var b = Gc.call(arguments, 1, c), e = -1, f = h(), g = h(); ++e < c; ) db(a, b[e], d, f, g);
            return j(f), j(g), a;
        }, Z.min = function(a, b, c) {
            var e = 1 / 0, f = e;
            if (!b && Lc(a)) {
                c = -1;
                for (var g = a.length; ++c < g; ) {
                    var h = a[c];
                    h < f && (f = h);
                }
            } else b = !b && sb(a) ? d : Z.createCallback(b, c, 3), yb(a, function(a, c, d) {
                c = b(a, c, d), c < e && (e = c, f = a);
            });
            return f;
        }, Z.omit = function(a, b, c) {
            var d = ib(), e = typeof b == "function", f = {};
            if (e) b = Z.createCallback(b, c, 3); else var g = bb(arguments, !0, !1, 1);
            return t(a, function(a, c, h) {
                (e ? !b(a, c, h) : 0 > d(g, c)) && (f[c] = a);
            }), f;
        }, Z.once = function(a) {
            var b, c;
            if (!pb(a)) throw new dc();
            return function() {
                return b ? c : (b = !0, c = a.apply(this, arguments), a = null, c);
            };
        }, Z.pairs = function(a) {
            for (var b = -1, c = Mc(a), d = c.length, e = Wb(d); ++b < d; ) {
                var f = c[b];
                e[b] = [ f, a[f] ];
            }
            return e;
        }, Z.partial = function(a) {
            return gb(a, 16, Gc.call(arguments, 1));
        }, Z.partialRight = function(a) {
            return gb(a, 32, null, Gc.call(arguments, 1));
        }, Z.pick = function(a, b, c) {
            var d = {};
            if (typeof b != "function") for (var e = -1, f = bb(arguments, !0, !1, 1), g = qb(a) ? f.length : 0; ++e < g; ) {
                var h = f[e];
                h in a && (d[h] = a[h]);
            } else b = Z.createCallback(b, c, 3), t(a, function(a, c, e) {
                b(a, c, e) && (d[c] = a);
            });
            return d;
        }, Z.pluck = Cb, Z.pull = function(a) {
            for (var b = arguments, c = 0, d = b.length, e = a ? a.length : 0; ++c < d; ) for (var f = -1, g = b[c]; ++f < e; ) a[f] === g && (sc.call(a, f--, 1), 
            e--);
            return a;
        }, Z.range = function(a, b, c) {
            a = +a || 0, c = typeof c == "number" ? c : +c || 1, null == b && (b = a, a = 0);
            var d = -1;
            b = Cc(0, ic((b - a) / (c || 1)));
            for (var e = Wb(b); ++d < b; ) e[d] = a, a += c;
            return e;
        }, Z.reject = function(a, b, c) {
            return b = Z.createCallback(b, c, 3), wb(a, function(a, c, d) {
                return !b(a, c, d);
            });
        }, Z.remove = function(a, b, c) {
            var d = -1, e = a ? a.length : 0, f = [];
            for (b = Z.createCallback(b, c, 3); ++d < e; ) c = a[d], b(c, d, a) && (f.push(c), 
            sc.call(a, d--, 1), e--);
            return f;
        }, Z.rest = Kb, Z.shuffle = Fb, Z.sortBy = function(a, b, c) {
            var d = -1, f = a ? a.length : 0, g = Wb(typeof f == "number" ? f : 0);
            for (b = Z.createCallback(b, c, 3), yb(a, function(a, c, e) {
                var f = g[++d] = i();
                f.l = b(a, c, e), f.m = d, f.n = a;
            }), f = g.length, g.sort(e); f--; ) a = g[f], g[f] = a.n, k(a);
            return g;
        }, Z.tap = function(a, b) {
            return b(a), a;
        }, Z.throttle = function(a, b, c) {
            var d = !0, e = !0;
            if (!pb(a)) throw new dc();
            return false === c ? d = !1 : qb(c) && (d = "leading" in c ? c.leading : d, e = "trailing" in c ? c.trailing : e), 
            c = i(), c.leading = d, c.maxWait = b, c.trailing = e, a = Qb(a, b, c), k(c), a;
        }, Z.times = function(a, b, c) {
            a = -1 < (a = +a) ? a : 0;
            var d = -1, e = Wb(a);
            for (b = ab(b, c, 1); ++d < a; ) e[d] = b(d);
            return e;
        }, Z.toArray = function(a) {
            return a && typeof a.length == "number" ? l(a) : tb(a);
        }, Z.transform = function(a, b, c, d) {
            var e = Lc(a);
            return b = ab(b, d, 4), null == c && (e ? c = [] : (d = a && a.constructor, c = qb(d && d.prototype) ? xc(d && d.prototype) : {})), 
            (e ? yb : p)(a, function(a, d, e) {
                return b(c, a, d, e);
            }), c;
        }, Z.union = function() {
            return eb(bb(arguments, !0, !0));
        }, Z.uniq = Mb, Z.values = tb, Z.where = wb, Z.without = function(a) {
            return Hb(a, Gc.call(arguments, 1));
        }, Z.wrap = function(a, b) {
            if (!pb(b)) throw new dc();
            return function() {
                var c = [ a ];
                return pc.apply(c, arguments), b.apply(this, c);
            };
        }, Z.zip = Nb, Z.zipObject = Ob, Z.collect = Ab, Z.drop = Kb, Z.each = yb, Z.c = zb, 
        Z.extend = U, Z.methods = nb, Z.object = Ob, Z.select = wb, Z.tail = Kb, Z.unique = Mb, 
        Z.unzip = Nb, Tb(Z), Z.clone = function(a, b, c, d) {
            return typeof b != "boolean" && null != b && (d = c, c = b, b = !1), _(a, b, typeof c == "function" && ab(c, d, 1));
        }, Z.cloneDeep = function(a, b, c) {
            return _(a, !0, typeof b == "function" && ab(b, c, 1));
        }, Z.contains = ub, Z.escape = function(a) {
            return null == a ? "" : cc(a).replace(Qc, hb);
        }, Z.every = vb, Z.find = xb, Z.findIndex = function(a, b, c) {
            var d = -1, e = a ? a.length : 0;
            for (b = Z.createCallback(b, c, 3); ++d < e; ) if (b(a[d], d, a)) return d;
            return -1;
        }, Z.findKey = function(a, b, c) {
            var d;
            return b = Z.createCallback(b, c, 3), p(a, function(a, c, e) {
                return b(a, c, e) ? (d = c, !1) : void 0;
            }), d;
        }, Z.findLast = function(a, b, c) {
            var d;
            return b = Z.createCallback(b, c, 3), zb(a, function(a, c, e) {
                return b(a, c, e) ? (d = a, !1) : void 0;
            }), d;
        }, Z.findLastIndex = function(a, b, c) {
            var d = a ? a.length : 0;
            for (b = Z.createCallback(b, c, 3); d--; ) if (b(a[d], d, a)) return d;
            return -1;
        }, Z.findLastKey = function(a, b, c) {
            var d;
            return b = Z.createCallback(b, c, 3), mb(a, function(a, c, e) {
                return b(a, c, e) ? (d = c, !1) : void 0;
            }), d;
        }, Z.has = function(a, b) {
            return a ? nc.call(a, b) : !1;
        }, Z.identity = Sb, Z.indexOf = Jb, Z.isArguments = lb, Z.isArray = Lc, Z.isBoolean = function(a) {
            return true === a || false === a || tc.call(a) == J;
        }, Z.isDate = function(a) {
            return a ? typeof a == "object" && tc.call(a) == K : !1;
        }, Z.isElement = function(a) {
            return a ? 1 === a.nodeType : !1;
        }, Z.isEmpty = function(a) {
            var b = !0;
            if (!a) return b;
            var c = tc.call(a), d = a.length;
            return c == I || c == P || c == H || c == N && typeof d == "number" && pb(a.splice) ? !d : (p(a, function() {
                return b = !1;
            }), b);
        }, Z.isEqual = function(a, b, c, d) {
            return cb(a, b, typeof c == "function" && ab(c, d, 2));
        }, Z.isFinite = function(a) {
            return zc(a) && !Ac(parseFloat(a));
        }, Z.isFunction = pb, Z.isNaN = function(a) {
            return rb(a) && a != +a;
        }, Z.isNull = function(a) {
            return null === a;
        }, Z.isNumber = rb, Z.isObject = qb, Z.isPlainObject = o, Z.isRegExp = function(a) {
            return a ? typeof a == "object" && tc.call(a) == O : !1;
        }, Z.isString = sb, Z.isUndefined = function(a) {
            return typeof a == "undefined";
        }, Z.lastIndexOf = function(a, b, c) {
            var d = a ? a.length : 0;
            for (typeof c == "number" && (d = (0 > c ? Cc(0, d + c) : Dc(c, d - 1)) + 1); d--; ) if (a[d] === b) return d;
            return -1;
        }, Z.mixin = Tb, Z.noConflict = function() {
            return c._ = gc, this;
        }, Z.parseInt = Uc, Z.random = Ub, Z.reduce = Db, Z.reduceRight = Eb, Z.result = function(a, b) {
            if (a) {
                var c = a[b];
                return pb(c) ? a[b]() : c;
            }
        }, Z.runInContext = m, Z.size = function(a) {
            var b = a ? a.length : 0;
            return typeof b == "number" ? b : Mc(a).length;
        }, Z.some = Gb, Z.sortedIndex = Lb, Z.template = function(a, b, c) {
            var d = Z.templateSettings;
            a || (a = ""), c = S({}, c, d);
            var e, f = S({}, c.imports, d.imports), d = Mc(f), f = tb(f), h = 0, i = c.interpolate || D, j = "__p+='", i = bc((c.escape || D).source + "|" + i.source + "|" + (i === B ? y : D).source + "|" + (c.evaluate || D).source + "|$", "g");
            a.replace(i, function(b, c, d, f, i, k) {
                return d || (d = f), j += a.slice(h, k).replace(F, g), c && (j += "'+__e(" + c + ")+'"), 
                i && (e = !0, j += "';" + i + ";__p+='"), d && (j += "'+((__t=(" + d + "))==null?'':__t)+'"), 
                h = k + b.length, b;
            }), j += "';\n", i = c = c.variable, i || (c = "obj", j = "with(" + c + "){" + j + "}"), 
            j = (e ? j.replace(v, "") : j).replace(w, "$1").replace(x, "$1;"), j = "function(" + c + "){" + (i ? "" : c + "||(" + c + "={});") + "var __t,__p='',__e=_.escape" + (e ? ",__j=Array.prototype.join;function print(){__p+=__j.call(arguments,'')}" : ";") + j + "return __p}";
            try {
                var k = Zb(d, "return " + j).apply(n, f);
            } catch (l) {
                throw l.source = j, l;
            }
            return b ? k(b) : (k.source = j, k);
        }, Z.unescape = function(a) {
            return null == a ? "" : cc(a).replace(Pc, kb);
        }, Z.uniqueId = function(a) {
            var b = ++q;
            return cc(null == a ? "" : a) + b;
        }, Z.all = vb, Z.any = Gb, Z.detect = xb, Z.findWhere = xb, Z.foldl = Db, Z.foldr = Eb, 
        Z.include = ub, Z.inject = Db, p(Z, function(a, b) {
            Z.prototype[b] || (Z.prototype[b] = function() {
                var b = [ this.__wrapped__ ], c = this.__chain__;
                return pc.apply(b, arguments), b = a.apply(Z, b), c ? new $(b, c) : b;
            });
        }), Z.first = Ib, Z.last = function(a, b, c) {
            var d = 0, e = a ? a.length : 0;
            if (typeof b != "number" && null != b) {
                var f = e;
                for (b = Z.createCallback(b, c, 3); f-- && b(a[f], f, a); ) d++;
            } else if (d = b, null == d || c) return a ? a[e - 1] : n;
            return l(a, Cc(0, e - d));
        }, Z.sample = function(a, b, c) {
            var d = a ? a.length : 0;
            return typeof d != "number" && (a = tb(a)), null == b || c ? a ? a[Ub(d - 1)] : n : (a = Fb(a), 
            a.length = Dc(Cc(0, b), a.length), a);
        }, Z.take = Ib, Z.head = Ib, p(Z, function(a, b) {
            var c = "sample" !== b;
            Z.prototype[b] || (Z.prototype[b] = function(b, d) {
                var e = this.__chain__, f = a(this.__wrapped__, b, d);
                return e || null != b && (!d || c && typeof b == "function") ? new $(f, e) : f;
            });
        }), Z.VERSION = "2.0.0", Z.prototype.chain = function() {
            return this.__chain__ = !0, this;
        }, Z.prototype.toString = function() {
            return cc(this.__wrapped__);
        }, Z.prototype.value = Vb, Z.prototype.valueOf = Vb, yb([ "join", "pop", "shift" ], function(a) {
            var b = ec[a];
            Z.prototype[a] = function() {
                var a = this.__chain__, c = b.apply(this.__wrapped__, arguments);
                return a ? new $(c, a) : c;
            };
        }), yb([ "push", "reverse", "sort", "unshift" ], function(a) {
            var b = ec[a];
            Z.prototype[a] = function() {
                return b.apply(this.__wrapped__, arguments), this;
            };
        }), yb([ "concat", "slice", "splice" ], function(a) {
            var b = ec[a];
            Z.prototype[a] = function() {
                return new $(b.apply(this.__wrapped__, arguments), this.__chain__);
            };
        }), Z;
    }
    var n, o = [], p = [], q = 0, r = +new Date() + "", s = 75, t = 40, u = " 	\f ﻿\n\r\u2028\u2029 ᠎             　", v = /\b__p\+='';/g, w = /\b(__p\+=)''\+/g, x = /(__e\(.*?\)|\b__t\))\+'';/g, y = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g, z = /\w*$/, A = /^function[ \n\r\t]+\w/, B = /<%=([\s\S]+?)%>/g, C = RegExp("^[" + u + "]*0+(?=.$)"), D = /($^)/, E = (E = /\bthis\b/) && E.test(m) && E, F = /['\n\r\t\u2028\u2029\\]/g, G = "Array Boolean Date Function Math Number Object RegExp String _ attachEvent clearTimeout isFinite isNaN parseInt setImmediate setTimeout".split(" "), H = "[object Arguments]", I = "[object Array]", J = "[object Boolean]", K = "[object Date]", L = "[object Function]", M = "[object Number]", N = "[object Object]", O = "[object RegExp]", P = "[object String]", Q = {};
    Q[L] = !1, Q[H] = Q[I] = Q[J] = Q[K] = Q[M] = Q[N] = Q[O] = Q[P] = !0;
    var R = {
        "boolean": !1,
        "function": !0,
        object: !0,
        number: !1,
        string: !1,
        undefined: !1
    }, S = {
        "\\": "\\",
        "'": "'",
        "\n": "n",
        "\r": "r",
        "	": "t",
        "\u2028": "u2028",
        "\u2029": "u2029"
    }, T = R[typeof window] && window || this, U = R[typeof exports] && exports, V = R[typeof module] && module && module.exports == U && module, W = R[typeof global] && global;
    !W || W.global !== W && W.window !== W || (T = W);
    var X = m();
    typeof define == "function" && typeof define.amd == "object" && define.amd ? (T._ = X, 
    define(function() {
        return X;
    })) : U && !U.nodeType ? V ? (V.exports = X)._ = X : U._ = X : T._ = X;
}).call(this);

!function() {
    var a = angular.module("restangular", []);
    a.provider("Restangular", function() {
        var a = {};
        a.init = function(a, b) {
            function c(a, b, c, d) {
                var e = {};
                return _.each(_.keys(d), function(f) {
                    var g = d[f];
                    g.params = _.extend({}, g.params, a.defaultRequestParams[g.method.toLowerCase()]), 
                    _.isEmpty(g.params) && delete g.params, e[f] = a.isSafe(g.method) ? function() {
                        return b(_.extend(g, {
                            url: c
                        }));
                    } : function(a) {
                        return b(_.extend(g, {
                            url: c,
                            data: a
                        }));
                    };
                }), e;
            }
            var d = [ "get", "head", "options", "trace" ];
            b.isSafe = function(a) {
                return _.contains(d, a.toLowerCase());
            };
            var e = /^https?:\/\//i;
            b.isAbsoluteUrl = function(a) {
                return a && e.test(a);
            }, b.baseUrl = _.isUndefined(b.baseUrl) ? "" : b.baseUrl, a.setBaseUrl = function(a) {
                return b.baseUrl = /\/$/.test(a) ? a.substring(0, a.length - 1) : a, this;
            }, b.extraFields = b.extraFields || [], a.setExtraFields = function(a) {
                return b.extraFields = a, this;
            }, b.defaultHttpFields = b.defaultHttpFields || {}, a.setDefaultHttpFields = function(a) {
                return b.defaultHttpFields = a, this;
            }, b.withHttpDefaults = function(a) {
                return _.defaults(a, b.defaultHttpFields);
            }, b.encodeIds = _.isUndefined(b.encodeIds) ? !0 : b.encodeIds, a.setEncodeIds = function(a) {
                b.encodeIds = a;
            }, b.defaultRequestParams = b.defaultRequestParams || {
                get: {},
                post: {},
                put: {},
                remove: {},
                common: {}
            }, a.setDefaultRequestParams = function(a, c) {
                var d = [], e = c || a;
                return _.isUndefined(c) ? d.push("common") : _.isArray(a) ? d = a : d.push(a), _.each(d, function(a) {
                    b.defaultRequestParams[a] = e;
                }), this;
            }, a.requestParams = b.defaultRequestParams, b.defaultHeaders = b.defaultHeaders || {}, 
            a.setDefaultHeaders = function(c) {
                return b.defaultHeaders = c, a.defaultHeaders = b.defaultHeaders, this;
            }, a.defaultHeaders = b.defaultHeaders, b.methodOverriders = b.methodOverriders || [], 
            a.setMethodOverriders = function(a) {
                var c = _.extend([], a);
                return b.isOverridenMethod("delete", c) && c.push("remove"), b.methodOverriders = c, 
                this;
            }, b.isOverridenMethod = function(a, c) {
                var d = c || b.methodOverriders;
                return !_.isUndefined(_.find(d, function(b) {
                    return b.toLowerCase() === a.toLowerCase();
                }));
            }, b.urlCreator = b.urlCreator || "path", a.setUrlCreator = function(a) {
                if (!_.has(b.urlCreatorFactory, a)) throw new Error("URL Path selected isn't valid");
                return b.urlCreator = a, this;
            }, b.restangularFields = b.restangularFields || {
                id: "id",
                route: "route",
                parentResource: "parentResource",
                restangularCollection: "restangularCollection",
                cannonicalId: "__cannonicalId",
                etag: "restangularEtag",
                selfLink: "href",
                get: "get",
                getList: "getList",
                put: "put",
                post: "post",
                remove: "remove",
                head: "head",
                trace: "trace",
                options: "options",
                patch: "patch",
                getRestangularUrl: "getRestangularUrl",
                putElement: "putElement",
                addRestangularMethod: "addRestangularMethod",
                getParentList: "getParentList",
                clone: "clone",
                ids: "ids"
            }, a.setRestangularFields = function(a) {
                return b.restangularFields = _.extend(b.restangularFields, a), this;
            }, b.setFieldToElem = function(a, b, c) {
                var d = a.split("."), e = b;
                return _.each(_.initial(d), function(a) {
                    e[a] = {}, e = e[a];
                }), e[_.last(d)] = c, this;
            }, b.getFieldFromElem = function(a, b) {
                var c = a.split("."), d = angular.copy(b);
                return _.each(c, function(a) {
                    d && (d = d[a]);
                }), d;
            }, b.setIdToElem = function(a, c) {
                return b.setFieldToElem(b.restangularFields.id, a, c), this;
            }, b.getIdFromElem = function(a) {
                return b.getFieldFromElem(b.restangularFields.id, a);
            }, b.isValidId = function(a) {
                return "" !== a && !_.isUndefined(a) && !_.isNull(a);
            }, b.setUrlToElem = function(a, c) {
                return b.setFieldToElem(b.restangularFields.selfLink, a, c), this;
            }, b.getUrlFromElem = function(a) {
                return b.getFieldFromElem(b.restangularFields.selfLink, a);
            }, b.useCannonicalId = _.isUndefined(b.useCannonicalId) ? !1 : b.useCannonicalId, 
            a.setUseCannonicalId = function(a) {
                return b.useCannonicalId = a, this;
            }, b.getCannonicalIdFromElem = function(a) {
                var c = a[b.restangularFields.cannonicalId], d = b.isValidId(c) ? c : b.getIdFromElem(a);
                return d;
            }, b.responseExtractor = b.responseExtractor || function(a) {
                return a;
            }, a.setResponseExtractor = function(a) {
                return b.responseExtractor = a, this;
            }, a.setResponseInterceptor = a.setResponseExtractor, b.fullRequestInterceptor = b.fullRequestInterceptor || function(a, b, c, d, e, f) {
                return {
                    element: a,
                    headers: e,
                    params: f
                };
            }, a.setRequestInterceptor = function(a) {
                return b.fullRequestInterceptor = function(b, c, d, e, f, g) {
                    return {
                        headers: f,
                        params: g,
                        element: a(b, c, d, e)
                    };
                }, this;
            }, a.setFullRequestInterceptor = function(a) {
                return b.fullRequestInterceptor = a, this;
            }, b.errorInterceptor = b.errorInterceptor || function() {}, a.setErrorInterceptor = function(a) {
                return b.errorInterceptor = a, this;
            }, b.onBeforeElemRestangularized = b.onBeforeElemRestangularized || function(a) {
                return a;
            }, a.setOnBeforeElemRestangularized = function(a) {
                return b.onBeforeElemRestangularized = a, this;
            }, b.onElemRestangularized = b.onElemRestangularized || function(a) {
                return a;
            }, a.setOnElemRestangularized = function(a) {
                return b.onElemRestangularized = a, this;
            }, a.setListTypeIsArray = function() {}, b.shouldSaveParent = b.shouldSaveParent || function() {
                return !0;
            }, a.setParentless = function(a) {
                return _.isArray(a) ? b.shouldSaveParent = function(b) {
                    return !_.contains(a, b);
                } : _.isBoolean(a) && (b.shouldSaveParent = function() {
                    return !a;
                }), this;
            }, b.suffix = _.isUndefined(b.suffix) ? null : b.suffix, a.setRequestSuffix = function(a) {
                return b.suffix = a, this;
            }, b.transformers = b.transformers || {}, a.addElementTransformer = function(a, c, d) {
                var e = null, f = null;
                2 === arguments.length ? f = c : (f = d, e = c);
                var g = b.transformers[a];
                g || (g = b.transformers[a] = []), g.push(function(a, b) {
                    return _.isNull(e) || a == e ? f(b) : b;
                });
            }, a.extendCollection = function(b, c) {
                return a.addElementTransformer(b, !0, c);
            }, a.extendModel = function(b, c) {
                return a.addElementTransformer(b, !1, c);
            }, b.transformElem = function(a, c, d, e) {
                var f = b.transformers[d], g = a;
                return f && _.each(f, function(a) {
                    g = a(c, g);
                }), b.onElemRestangularized(g, c, d, e);
            }, b.fullResponse = _.isUndefined(b.fullResponse) ? !1 : b.fullResponse, a.setFullResponse = function(a) {
                return b.fullResponse = a, this;
            }, b.urlCreatorFactory = {};
            var f = function() {};
            f.prototype.setConfig = function(a) {
                return this.config = a, this;
            }, f.prototype.parentsArray = function(a) {
                for (var b = []; a; ) b.push(a), a = a[this.config.restangularFields.parentResource];
                return b.reverse();
            }, f.prototype.resource = function(a, d, e, f, g, h, i) {
                var j = _.defaults(f || {}, this.config.defaultRequestParams.common), k = _.defaults(e || {}, this.config.defaultHeaders);
                h && (b.isSafe(i) ? k["If-None-Match"] = h : k["If-Match"] = h);
                var l = this.base(a);
                return l += g ? "/" + g : "", l += this.config.suffix || "", c(this.config, d, l, {
                    getList: this.config.withHttpDefaults({
                        method: "GET",
                        params: j,
                        headers: k
                    }),
                    get: this.config.withHttpDefaults({
                        method: "GET",
                        params: j,
                        headers: k
                    }),
                    put: this.config.withHttpDefaults({
                        method: "PUT",
                        params: j,
                        headers: k
                    }),
                    post: this.config.withHttpDefaults({
                        method: "POST",
                        params: j,
                        headers: k
                    }),
                    remove: this.config.withHttpDefaults({
                        method: "DELETE",
                        params: j,
                        headers: k
                    }),
                    head: this.config.withHttpDefaults({
                        method: "HEAD",
                        params: j,
                        headers: k
                    }),
                    trace: this.config.withHttpDefaults({
                        method: "TRACE",
                        params: j,
                        headers: k
                    }),
                    options: this.config.withHttpDefaults({
                        method: "OPTIONS",
                        params: j,
                        headers: k
                    }),
                    patch: this.config.withHttpDefaults({
                        method: "PATCH",
                        params: j,
                        headers: k
                    })
                });
            };
            var g = function() {};
            g.prototype = new f(), g.prototype.base = function(a) {
                var c = this;
                return _.reduce(this.parentsArray(a), function(a, d) {
                    var e, f = c.config.getUrlFromElem(d);
                    if (f) {
                        if (c.config.isAbsoluteUrl(f)) return f;
                        e = f;
                    } else if (e = d[c.config.restangularFields.route], d[c.config.restangularFields.restangularCollection]) {
                        var g = d[c.config.restangularFields.ids];
                        g && (e += "/" + g.join(","));
                    } else {
                        var h;
                        h = c.config.useCannonicalId ? c.config.getCannonicalIdFromElem(d) : c.config.getIdFromElem(d), 
                        b.isValidId(h) && (e += "/" + (c.config.encodeIds ? encodeURIComponent(h) : h));
                    }
                    return a + "/" + e;
                }, this.config.baseUrl);
            }, g.prototype.fetchUrl = function(a, b) {
                var c = this.base(a);
                return b && (c += "/" + b), c;
            }, b.urlCreatorFactory.path = g;
        };
        var b = {};
        a.init(this, b), this.$get = [ "$http", "$q", function(c, d) {
            function e(f) {
                function g(a, b, c) {
                    if (b[f.restangularFields.route] = c, b[f.restangularFields.getRestangularUrl] = _.bind(M.fetchUrl, M, b), 
                    b[f.restangularFields.addRestangularMethod] = _.bind(J, b), b[f.restangularFields.clone] = _.bind(s, b, b), 
                    b.one = _.bind(h, b, b), b.all = _.bind(i, b, b), b.several = _.bind(j, b, b), b.oneUrl = _.bind(k, b, b), 
                    b.allUrl = _.bind(l, b, b), a && f.shouldSaveParent(c)) {
                        var d = f.getIdFromElem(a), e = f.getUrlFromElem(a), g = _.union(_.values(_.pick(f.restangularFields, [ "route", "parentResource" ])), f.extraFields), m = _.pick(a, g);
                        f.isValidId(d) && f.setIdToElem(m, d), f.isValidId(e) && f.setUrlToElem(m, e), b[f.restangularFields.parentResource] = m;
                    } else b[f.restangularFields.parentResource] = null;
                    return b;
                }
                function h(a, b, c) {
                    var d = {};
                    return f.setIdToElem(d, c), t(a, d, b);
                }
                function i(a, b) {
                    return u(a, [], b, !0);
                }
                function j(a, b) {
                    var c = [];
                    return c[f.restangularFields.ids] = Array.prototype.splice.call(arguments, 2), u(a, c, b, !0);
                }
                function k(a, b, c) {
                    var d = {};
                    return f.setUrlToElem(d, c), t(a, d, b);
                }
                function l(a, b, c) {
                    var d = {};
                    return f.setUrlToElem(d, c), u(a, d, b, !0);
                }
                function m(a, b) {
                    return a.call = _.bind(n, a), a.get = _.bind(o, a), a[f.restangularFields.restangularCollection] = b, 
                    b && (a.push = _.bind(n, a, "push")), a;
                }
                function n(a) {
                    var b = d.defer(), c = arguments;
                    return this.then(function(d) {
                        var e = Array.prototype.slice.call(c, 1), f = d[a];
                        f.apply(d, e), b.resolve(d);
                    }), m(b.promise, this[f.restangularFields.restangularCollection]);
                }
                function o(a) {
                    var b = d.defer();
                    return this.then(function(c) {
                        b.resolve(c[a]);
                    }), m(b.promise, this[f.restangularFields.restangularCollection]);
                }
                function p(a, b, c) {
                    return f.fullResponse ? a.resolve(_.extend(b, {
                        data: c
                    })) : (a.resolve(c), void 0);
                }
                function q(a) {
                    return _.omit(a, _.values(_.omit(f.restangularFields, "id")));
                }
                function r(a) {
                    a.customOperation = _.bind(I, a), _.each([ "put", "post", "get", "delete" ], function(b) {
                        _.each([ "do", "custom" ], function(c) {
                            var d, e = "delete" === b ? "remove" : b, f = c + b.toUpperCase();
                            d = "put" !== e && "post" !== e ? I : function(a, b, c, d, e) {
                                return _.bind(I, this)(a, c, d, e, b);
                            }, a[f] = _.bind(d, a, e);
                        });
                    }), a.customGETLIST = _.bind(y, a), a.doGETLIST = a.customGETLIST;
                }
                function s(a) {
                    var b = angular.copy(a);
                    return t(b[f.restangularFields.parentResource], b, b[f.restangularFields.route]);
                }
                function t(a, b, c, d) {
                    var e = f.onBeforeElemRestangularized(b, !1, c), h = g(a, e, c);
                    return f.useCannonicalId && (h[f.restangularFields.cannonicalId] = f.getIdFromElem(h)), 
                    d && (h[f.restangularFields.getParentList] = function() {
                        return d;
                    }), h[f.restangularFields.restangularCollection] = !1, h[f.restangularFields.get] = _.bind(A, h), 
                    h[f.restangularFields.getList] = _.bind(y, h), h[f.restangularFields.put] = _.bind(C, h), 
                    h[f.restangularFields.post] = _.bind(D, h), h[f.restangularFields.remove] = _.bind(B, h), 
                    h[f.restangularFields.head] = _.bind(E, h), h[f.restangularFields.trace] = _.bind(F, h), 
                    h[f.restangularFields.options] = _.bind(G, h), h[f.restangularFields.patch] = _.bind(H, h), 
                    r(h), f.transformElem(h, !1, c, L);
                }
                function u(a, b, c) {
                    var d = f.onBeforeElemRestangularized(b, !0, c), e = g(a, d, c);
                    return e[f.restangularFields.restangularCollection] = !0, e[f.restangularFields.post] = _.bind(D, e, null), 
                    e[f.restangularFields.head] = _.bind(E, e), e[f.restangularFields.trace] = _.bind(F, e), 
                    e[f.restangularFields.putElement] = _.bind(w, e), e[f.restangularFields.options] = _.bind(G, e), 
                    e[f.restangularFields.patch] = _.bind(H, e), e[f.restangularFields.get] = _.bind(v, e), 
                    e[f.restangularFields.getList] = _.bind(y, e, null), r(e), f.transformElem(e, !0, c, L);
                }
                function v(a, b, c) {
                    return this.customGET(a.toString(), b, c);
                }
                function w(a, b, c) {
                    var e = this, f = this[a], g = d.defer();
                    return f.put(b, c).then(function(b) {
                        var c = s(e);
                        c[a] = b, g.resolve(c);
                    }, function(a) {
                        g.reject(a);
                    }), m(g.promise, !0);
                }
                function x(a, b, c, d, e, g) {
                    var h = f.responseExtractor(a, b, c, d, e, g), i = e.headers("ETag");
                    return h && i && (h[f.restangularFields.etag] = i), h;
                }
                function y(a, b, e) {
                    var g = this, h = d.defer(), i = "getList", j = M.fetchUrl(this, a), k = a || g[f.restangularFields.route], l = f.fullRequestInterceptor(null, i, k, j, e || {}, b || {});
                    return M.resource(this, c, l.headers, l.params, a, this[f.restangularFields.etag], i).getList().then(function(b) {
                        var c = b.data, d = x(c, i, k, j, b, h), e = _.map(d, function(b) {
                            return g[f.restangularFields.restangularCollection] ? t(g[f.restangularFields.parentResource], b, g[f.restangularFields.route], d) : t(g, b, a, d);
                        });
                        e = _.extend(d, e), g[f.restangularFields.restangularCollection] ? p(h, b, u(null, e, g[f.restangularFields.route])) : p(h, b, u(g, e, a));
                    }, function(a) {
                        f.errorInterceptor(a) !== !1 && h.reject(a);
                    }), m(h.promise, !0);
                }
                function z(a, b, e, g, h) {
                    var i = this, j = d.defer(), k = e || {}, l = b || this[f.restangularFields.route], n = M.fetchUrl(this, b), o = g || this, r = o[f.restangularFields.etag];
                    _.isObject(o) && (o = q(o));
                    var s = f.fullRequestInterceptor(o, a, l, n, h || {}, k || {}), u = function(c) {
                        var d = c.data, e = x(d, a, l, n, c, j);
                        e ? "post" !== a || i[f.restangularFields.restangularCollection] ? p(j, c, t(i[f.restangularFields.parentResource], e, i[f.restangularFields.route])) : p(j, c, t(i, e, b)) : p(j, c, void 0);
                    }, v = function(a) {
                        f.errorInterceptor(a) !== !1 && j.reject(a);
                    }, w = a, y = _.extend({}, s.headers), z = f.isOverridenMethod(a);
                    return z && (w = "post", y = _.extend(y, {
                        "X-HTTP-Method-Override": "remove" === a ? "DELETE" : a
                    })), f.isSafe(a) ? z ? M.resource(this, c, y, s.params, b, r, w)[w]({}).then(u, v) : M.resource(this, c, y, s.params, b, r, w)[w]().then(u, v) : M.resource(this, c, y, s.params, b, r, w)[w](s.element).then(u, v), 
                    m(j.promise);
                }
                function A(a, b) {
                    return _.bind(z, this)("get", void 0, a, void 0, b);
                }
                function B(a, b) {
                    return _.bind(z, this)("remove", void 0, a, void 0, b);
                }
                function C(a, b) {
                    return _.bind(z, this)("put", void 0, a, void 0, b);
                }
                function D(a, b, c, d) {
                    return _.bind(z, this)("post", a, c, b, d);
                }
                function E(a, b) {
                    return _.bind(z, this)("head", void 0, a, void 0, b);
                }
                function F(a, b) {
                    return _.bind(z, this)("trace", void 0, a, void 0, b);
                }
                function G(a, b) {
                    return _.bind(z, this)("options", void 0, a, void 0, b);
                }
                function H(a, b, c) {
                    return _.bind(z, this)("patch", void 0, b, a, c);
                }
                function I(a, b, c, d, e) {
                    return _.bind(z, this)(a, b, c, e, d);
                }
                function J(a, b, c, d, e, g) {
                    var h;
                    h = "getList" === b ? _.bind(y, this, c) : _.bind(I, this, b, c);
                    var i = function(a, b, c) {
                        var f = _.defaults({
                            params: a,
                            headers: b,
                            elem: c
                        }, {
                            params: d,
                            headers: e,
                            elem: g
                        });
                        return h(f.params, f.headers, f.elem);
                    };
                    this[a] = f.isSafe(b) ? i : function(a, b, c) {
                        return i(b, c, a);
                    };
                }
                function K(c) {
                    var d = angular.copy(b);
                    return a.init(d, d), c(d), e(d);
                }
                var L = {}, M = new f.urlCreatorFactory[f.urlCreator]();
                return M.setConfig(f), a.init(L, f), L.copy = _.bind(s, L), L.withConfig = _.bind(K, L), 
                L.one = _.bind(h, L, null), L.all = _.bind(i, L, null), L.several = _.bind(j, L, null), 
                L.oneUrl = _.bind(k, L, null), L.allUrl = _.bind(l, L, null), L.restangularizeElement = _.bind(t, L), 
                L.restangularizeCollection = _.bind(u, L), L;
            }
            return e(b);
        } ];
    });
}();