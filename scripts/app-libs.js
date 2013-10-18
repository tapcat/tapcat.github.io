(function(a, b, c) {
    "use strict";
    function d(a) {
        return function() {
            var b = arguments[0], c, b = "[" + (a ? a + ":" : "") + b + "] http://errors.angularjs.org/undefined/" + (a ? a + "/" : "") + b;
            for (c = 1; c < arguments.length; c++) b = b + (1 == c ? "?" : "&") + "p" + (c - 1) + "=" + encodeURIComponent("function" == typeof arguments[c] ? arguments[c].toString().replace(/ \{[\s\S]*$/, "") : "undefined" == typeof arguments[c] ? "undefined" : "string" != typeof arguments[c] ? JSON.stringify(arguments[c]) : arguments[c]);
            return Error(b);
        };
    }
    function e(a) {
        if (null == a || A(a)) return !1;
        var b = a.length;
        return 1 === a.nodeType && b ? !0 : u(a) || x(a) || 0 === b || "number" === typeof b && 0 < b && b - 1 in a;
    }
    function f(a, b, c) {
        var d;
        if (a) if (y(a)) for (d in a) "prototype" != d && "length" != d && "name" != d && a.hasOwnProperty(d) && b.call(c, a[d], d); else if (a.forEach && a.forEach !== f) a.forEach(b, c); else if (e(a)) for (d = 0; d < a.length; d++) b.call(c, a[d], d); else for (d in a) a.hasOwnProperty(d) && b.call(c, a[d], d);
        return a;
    }
    function g(a) {
        var b = [], c;
        for (c in a) a.hasOwnProperty(c) && b.push(c);
        return b.sort();
    }
    function h(a, b, c) {
        for (var d = g(a), e = 0; e < d.length; e++) b.call(c, a[d[e]], d[e]);
        return d;
    }
    function i(a) {
        return function(b, c) {
            a(c, b);
        };
    }
    function j() {
        for (var a = Sc.length, b; a; ) {
            a--;
            b = Sc[a].charCodeAt(0);
            if (57 == b) return Sc[a] = "A", Sc.join("");
            if (90 == b) Sc[a] = "0"; else return Sc[a] = String.fromCharCode(b + 1), Sc.join("");
        }
        Sc.unshift("0");
        return Sc.join("");
    }
    function k(a, b) {
        b ? a.$$hashKey = b : delete a.$$hashKey;
    }
    function l(a) {
        var b = a.$$hashKey;
        f(arguments, function(b) {
            b !== a && f(b, function(b, c) {
                a[c] = b;
            });
        });
        k(a, b);
        return a;
    }
    function m(a) {
        return parseInt(a, 10);
    }
    function n(a, b) {
        return l(new (l(function() {}, {
            prototype: a
        }))(), b);
    }
    function o() {}
    function p(a) {
        return a;
    }
    function q(a) {
        return function() {
            return a;
        };
    }
    function r(a) {
        return "undefined" == typeof a;
    }
    function s(a) {
        return "undefined" != typeof a;
    }
    function t(a) {
        return null != a && "object" == typeof a;
    }
    function u(a) {
        return "string" == typeof a;
    }
    function v(a) {
        return "number" == typeof a;
    }
    function w(a) {
        return "[object Date]" == Nc.apply(a);
    }
    function x(a) {
        return "[object Array]" == Nc.apply(a);
    }
    function y(a) {
        return "function" == typeof a;
    }
    function z(a) {
        return "[object RegExp]" == Nc.apply(a);
    }
    function A(a) {
        return a && a.document && a.location && a.alert && a.setInterval;
    }
    function B(a) {
        return a && (a.nodeName || a.on && a.find);
    }
    function C(a, b, c) {
        var d = [];
        f(a, function(a, e, f) {
            d.push(b.call(c, a, e, f));
        });
        return d;
    }
    function D(a, b) {
        if (a.indexOf) return a.indexOf(b);
        for (var c = 0; c < a.length; c++) if (b === a[c]) return c;
        return -1;
    }
    function E(a, b) {
        var c = D(a, b);
        0 <= c && a.splice(c, 1);
        return b;
    }
    function F(a, b) {
        if (A(a) || a && a.$evalAsync && a.$watch) throw Oc("cpws");
        if (b) {
            if (a === b) throw Oc("cpi");
            if (x(a)) for (var c = b.length = 0; c < a.length; c++) b.push(F(a[c])); else {
                c = b.$$hashKey;
                f(b, function(a, c) {
                    delete b[c];
                });
                for (var d in a) b[d] = F(a[d]);
                k(b, c);
            }
        } else (b = a) && (x(a) ? b = F(a, []) : w(a) ? b = new Date(a.getTime()) : z(a) ? b = RegExp(a.source) : t(a) && (b = F(a, {})));
        return b;
    }
    function G(a, b) {
        b = b || {};
        for (var c in a) a.hasOwnProperty(c) && "$$" !== c.substr(0, 2) && (b[c] = a[c]);
        return b;
    }
    function H(a, b) {
        if (a === b) return !0;
        if (null === a || null === b) return !1;
        if (a !== a && b !== b) return !0;
        var d = typeof a, e;
        if (d == typeof b && "object" == d) if (x(a)) {
            if (!x(b)) return !1;
            if ((d = a.length) == b.length) {
                for (e = 0; e < d; e++) if (!H(a[e], b[e])) return !1;
                return !0;
            }
        } else {
            if (w(a)) return w(b) && a.getTime() == b.getTime();
            if (z(a) && z(b)) return a.toString() == b.toString();
            if (a && a.$evalAsync && a.$watch || b && b.$evalAsync && b.$watch || A(a) || A(b) || x(b)) return !1;
            d = {};
            for (e in a) if ("$" !== e.charAt(0) && !y(a[e])) {
                if (!H(a[e], b[e])) return !1;
                d[e] = !0;
            }
            for (e in b) if (!d.hasOwnProperty(e) && "$" !== e.charAt(0) && b[e] !== c && !y(b[e])) return !1;
            return !0;
        }
        return !1;
    }
    function I(a, b) {
        var c = 2 < arguments.length ? Lc.call(arguments, 2) : [];
        return !y(b) || b instanceof RegExp ? b : c.length ? function() {
            return arguments.length ? b.apply(a, c.concat(Lc.call(arguments, 0))) : b.apply(a, c);
        } : function() {
            return arguments.length ? b.apply(a, arguments) : b.call(a);
        };
    }
    function J(a, d) {
        var e = d;
        "string" === typeof a && "$" === a.charAt(0) ? e = c : A(d) ? e = "$WINDOW" : d && b === d ? e = "$DOCUMENT" : d && d.$evalAsync && d.$watch && (e = "$SCOPE");
        return e;
    }
    function K(a, b) {
        return "undefined" === typeof a ? c : JSON.stringify(a, J, b ? "  " : null);
    }
    function L(a) {
        return u(a) ? JSON.parse(a) : a;
    }
    function M(a) {
        a && 0 !== a.length ? (a = Gc("" + a), a = !("f" == a || "0" == a || "false" == a || "no" == a || "n" == a || "[]" == a)) : a = !1;
        return a;
    }
    function N(a) {
        a = Jc(a).clone();
        try {
            a.html("");
        } catch (b) {}
        var c = Jc("<div>").append(a).html();
        try {
            return 3 === a[0].nodeType ? Gc(c) : c.match(/^(<[^>]+>)/)[1].replace(/^<([\w\-]+)/, function(a, b) {
                return "<" + Gc(b);
            });
        } catch (d) {
            return Gc(c);
        }
    }
    function O(a) {
        try {
            return decodeURIComponent(a);
        } catch (b) {}
    }
    function P(a) {
        var b = {}, c, d;
        f((a || "").split("&"), function(a) {
            a && (c = a.split("="), d = O(c[0]), s(d) && (a = s(c[1]) ? O(c[1]) : !0, b[d] ? x(b[d]) ? b[d].push(a) : b[d] = [ b[d], a ] : b[d] = a));
        });
        return b;
    }
    function Q(a) {
        var b = [];
        f(a, function(a, c) {
            x(a) ? f(a, function(a) {
                b.push(S(c, !0) + (!0 === a ? "" : "=" + S(a, !0)));
            }) : b.push(S(c, !0) + (!0 === a ? "" : "=" + S(a, !0)));
        });
        return b.length ? b.join("&") : "";
    }
    function R(a) {
        return S(a, !0).replace(/%26/gi, "&").replace(/%3D/gi, "=").replace(/%2B/gi, "+");
    }
    function S(a, b) {
        return encodeURIComponent(a).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, b ? "%20" : "+");
    }
    function T(a, c) {
        function d(a) {
            a && e.push(a);
        }
        var e = [ a ], g, h, i = [ "ng:app", "ng-app", "x-ng-app", "data-ng-app" ], j = /\sng[:\-]app(:\s*([\w\d_]+);?)?\s/;
        f(i, function(c) {
            i[c] = !0;
            d(b.getElementById(c));
            c = c.replace(":", "\\:");
            a.querySelectorAll && (f(a.querySelectorAll("." + c), d), f(a.querySelectorAll("." + c + "\\:"), d), 
            f(a.querySelectorAll("[" + c + "]"), d));
        });
        f(e, function(a) {
            if (!g) {
                var b = j.exec(" " + a.className + " ");
                b ? (g = a, h = (b[2] || "").replace(/\s+/g, ",")) : f(a.attributes, function(b) {
                    !g && i[b.name] && (g = a, h = b.value);
                });
            }
        });
        g && c(g, h ? [ h ] : []);
    }
    function U(c, d) {
        var e = function() {
            c = Jc(c);
            if (c.injector()) {
                var a = c[0] === b ? "document" : N(c);
                throw Oc("btstrpd", a);
            }
            d = d || [];
            d.unshift([ "$provide", function(a) {
                a.value("$rootElement", c);
            } ]);
            d.unshift("ng");
            a = tb(d);
            a.invoke([ "$rootScope", "$rootElement", "$compile", "$injector", "$animate", function(a, b, c, d, e) {
                a.$apply(function() {
                    b.data("$injector", d);
                    c(b)(a);
                });
                e.enabled(!0);
            } ]);
            return a;
        }, g = /^NG_DEFER_BOOTSTRAP!/;
        if (a && !g.test(a.name)) return e();
        a.name = a.name.replace(g, "");
        Pc.resumeBootstrap = function(a) {
            f(a, function(a) {
                d.push(a);
            });
            e();
        };
    }
    function V(a, b) {
        b = b || "_";
        return a.replace(Uc, function(a, c) {
            return (c ? b : "") + a.toLowerCase();
        });
    }
    function W(a, b, c) {
        if (!a) throw Oc("areq", b || "?", c || "required");
        return a;
    }
    function X(a, b, c) {
        c && x(a) && (a = a[a.length - 1]);
        W(y(a), b, "not a function, got " + (a && "object" == typeof a ? a.constructor.name || "Object" : typeof a));
        return a;
    }
    function Y(a, b) {
        if ("hasOwnProperty" === a) throw Oc("badname", b);
    }
    function Z(a, b, c) {
        if (!b) return a;
        b = b.split(".");
        for (var d, e = a, f = b.length, g = 0; g < f; g++) d = b[g], a && (a = (e = a)[d]);
        return !c && y(a) ? I(e, a) : a;
    }
    function $(a) {
        function b(a, b, c) {
            return a[b] || (a[b] = c());
        }
        var c = d("$injector");
        return b(b(a, "angular", Object), "module", function() {
            var a = {};
            return function(d, e, f) {
                Y(d, "module");
                e && a.hasOwnProperty(d) && (a[d] = null);
                return b(a, d, function() {
                    function a(a, c, d) {
                        return function() {
                            b[d || "push"]([ a, c, arguments ]);
                            return i;
                        };
                    }
                    if (!e) throw c("nomod", d);
                    var b = [], g = [], h = a("$injector", "invoke"), i = {
                        _invokeQueue: b,
                        _runBlocks: g,
                        requires: e,
                        name: d,
                        provider: a("$provide", "provider"),
                        factory: a("$provide", "factory"),
                        service: a("$provide", "service"),
                        value: a("$provide", "value"),
                        constant: a("$provide", "constant", "unshift"),
                        animation: a("$animateProvider", "register"),
                        filter: a("$filterProvider", "register"),
                        controller: a("$controllerProvider", "register"),
                        directive: a("$compileProvider", "directive"),
                        config: h,
                        run: function(a) {
                            g.push(a);
                            return this;
                        }
                    };
                    f && h(f);
                    return i;
                });
            };
        });
    }
    function _(a) {
        return a.replace(_c, function(a, b, c, d) {
            return d ? c.toUpperCase() : c;
        }).replace(ad, "Moz$1");
    }
    function ab(a, b, c, d) {
        function e(a) {
            var e = c && a ? [ this.filter(a) ] : [ this ], g = b, h, i, j, k, l, m;
            if (!d || null != a) for (;e.length; ) for (h = e.shift(), i = 0, j = h.length; i < j; i++) for (k = Jc(h[i]), 
            g ? k.triggerHandler("$destroy") : g = !g, l = 0, k = (m = k.children()).length; l < k; l++) e.push(Kc(m[l]));
            return f.apply(this, arguments);
        }
        var f = Kc.fn[a], f = f.$original || f;
        e.$original = f;
        Kc.fn[a] = e;
    }
    function bb(a) {
        if (a instanceof bb) return a;
        if (!(this instanceof bb)) {
            if (u(a) && "<" != a.charAt(0)) throw bd("nosel");
            return new bb(a);
        }
        if (u(a)) {
            var c = b.createElement("div");
            c.innerHTML = "<div>&#160;</div>" + a;
            c.removeChild(c.firstChild);
            lb(this, c.childNodes);
            Jc(b.createDocumentFragment()).append(this);
        } else lb(this, a);
    }
    function cb(a) {
        return a.cloneNode(!0);
    }
    function db(a) {
        fb(a);
        var b = 0;
        for (a = a.childNodes || []; b < a.length; b++) db(a[b]);
    }
    function eb(a, b, c, d) {
        if (s(d)) throw bd("offargs");
        var e = gb(a, "events");
        gb(a, "handle") && (r(b) ? f(e, function(b, c) {
            $c(a, c, b);
            delete e[c];
        }) : f(b.split(" "), function(b) {
            r(c) ? ($c(a, b, e[b]), delete e[b]) : E(e[b] || [], c);
        }));
    }
    function fb(a, b) {
        var d = a[Xc], e = Wc[d];
        e && (b ? delete Wc[d].data[b] : (e.handle && (e.events.$destroy && e.handle({}, "$destroy"), 
        eb(a)), delete Wc[d], a[Xc] = c));
    }
    function gb(a, b, c) {
        var d = a[Xc], d = Wc[d || -1];
        if (s(c)) d || (a[Xc] = d = ++Yc, d = Wc[d] = {}), d[b] = c; else return d && d[b];
    }
    function hb(a, b, c) {
        var d = gb(a, "data"), e = s(c), f = !e && s(b), g = f && !t(b);
        d || g || gb(a, "data", d = {});
        if (e) d[b] = c; else if (f) {
            if (g) return d && d[b];
            l(d, b);
        } else return d;
    }
    function ib(a, b) {
        return a.getAttribute ? -1 < (" " + (a.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ").indexOf(" " + b + " ") : !1;
    }
    function jb(a, b) {
        b && a.setAttribute && f(b.split(" "), function(b) {
            a.setAttribute("class", Tc((" " + (a.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ").replace(" " + Tc(b) + " ", " ")));
        });
    }
    function kb(a, b) {
        if (b && a.setAttribute) {
            var c = (" " + (a.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ");
            f(b.split(" "), function(a) {
                a = Tc(a);
                -1 === c.indexOf(" " + a + " ") && (c += a + " ");
            });
            a.setAttribute("class", Tc(c));
        }
    }
    function lb(a, b) {
        if (b) {
            b = b.nodeName || !s(b.length) || A(b) ? [ b ] : b;
            for (var c = 0; c < b.length; c++) a.push(b[c]);
        }
    }
    function mb(a, b) {
        return nb(a, "$" + (b || "ngController") + "Controller");
    }
    function nb(a, b, d) {
        a = Jc(a);
        for (9 == a[0].nodeType && (a = a.find("html")); a.length; ) {
            if ((d = a.data(b)) !== c) return d;
            a = a.parent();
        }
    }
    function ob(a, b) {
        var c = dd[b.toLowerCase()];
        return c && ed[a.nodeName] && c;
    }
    function pb(a, c) {
        var d = function(d, e) {
            d.preventDefault || (d.preventDefault = function() {
                d.returnValue = !1;
            });
            d.stopPropagation || (d.stopPropagation = function() {
                d.cancelBubble = !0;
            });
            d.target || (d.target = d.srcElement || b);
            if (r(d.defaultPrevented)) {
                var g = d.preventDefault;
                d.preventDefault = function() {
                    d.defaultPrevented = !0;
                    g.call(d);
                };
                d.defaultPrevented = !1;
            }
            d.isDefaultPrevented = function() {
                return d.defaultPrevented || !1 == d.returnValue;
            };
            f(c[e || d.type], function(b) {
                b.call(a, d);
            });
            8 >= Ic ? (d.preventDefault = null, d.stopPropagation = null, d.isDefaultPrevented = null) : (delete d.preventDefault, 
            delete d.stopPropagation, delete d.isDefaultPrevented);
        };
        d.elem = a;
        return d;
    }
    function qb(a) {
        var b = typeof a, d;
        "object" == b && null !== a ? "function" == typeof (d = a.$$hashKey) ? d = a.$$hashKey() : d === c && (d = a.$$hashKey = j()) : d = a;
        return b + ":" + d;
    }
    function rb(a) {
        f(a, this.put, this);
    }
    function sb(a) {
        var b, c;
        "function" == typeof a ? (b = a.$inject) || (b = [], a.length && (c = a.toString().replace(id, ""), 
        c = c.match(fd), f(c[1].split(gd), function(a) {
            a.replace(hd, function(a, c, d) {
                b.push(d);
            });
        })), a.$inject = b) : x(a) ? (c = a.length - 1, X(a[c], "fn"), b = a.slice(0, c)) : X(a, "fn", !0);
        return b;
    }
    function tb(a) {
        function b(a) {
            return function(b, c) {
                if (t(b)) f(b, i(a)); else return a(b, c);
            };
        }
        function c(a, b) {
            Y(a, "service");
            if (y(b) || x(b)) b = n.instantiate(b);
            if (!b.$get) throw jd("pget", a);
            return m[a + j] = b;
        }
        function d(a, b) {
            return c(a, {
                $get: b
            });
        }
        function e(a) {
            var b = [];
            f(a, function(a) {
                if (!l.get(a)) {
                    l.put(a, !0);
                    try {
                        if (u(a)) {
                            var c = Qc(a);
                            b = b.concat(e(c.requires)).concat(c._runBlocks);
                            for (var d = c._invokeQueue, c = 0, f = d.length; c < f; c++) {
                                var g = d[c], h = n.get(g[0]);
                                h[g[1]].apply(h, g[2]);
                            }
                        } else y(a) ? b.push(n.invoke(a)) : x(a) ? b.push(n.invoke(a)) : X(a, "module");
                    } catch (i) {
                        throw x(a) && (a = a[a.length - 1]), i.message && i.stack && -1 == i.stack.indexOf(i.message) && (i = i.message + "\n" + i.stack), 
                        jd("modulerr", a, i.stack || i.message || i);
                    }
                }
            });
            return b;
        }
        function g(a, b) {
            function c(c) {
                if (a.hasOwnProperty(c)) {
                    if (a[c] === h) throw jd("cdep", k.join(" <- "));
                    return a[c];
                }
                try {
                    return k.unshift(c), a[c] = h, a[c] = b(c);
                } finally {
                    k.shift();
                }
            }
            function d(a, b, d) {
                var e = [], f = sb(a), g, h, i;
                h = 0;
                for (g = f.length; h < g; h++) {
                    i = f[h];
                    if ("string" !== typeof i) throw jd("itkn", i);
                    e.push(d && d.hasOwnProperty(i) ? d[i] : c(i));
                }
                a.$inject || (a = a[g]);
                switch (b ? -1 : e.length) {
                  case 0:
                    return a();

                  case 1:
                    return a(e[0]);

                  case 2:
                    return a(e[0], e[1]);

                  case 3:
                    return a(e[0], e[1], e[2]);

                  case 4:
                    return a(e[0], e[1], e[2], e[3]);

                  case 5:
                    return a(e[0], e[1], e[2], e[3], e[4]);

                  case 6:
                    return a(e[0], e[1], e[2], e[3], e[4], e[5]);

                  case 7:
                    return a(e[0], e[1], e[2], e[3], e[4], e[5], e[6]);

                  case 8:
                    return a(e[0], e[1], e[2], e[3], e[4], e[5], e[6], e[7]);

                  case 9:
                    return a(e[0], e[1], e[2], e[3], e[4], e[5], e[6], e[7], e[8]);

                  case 10:
                    return a(e[0], e[1], e[2], e[3], e[4], e[5], e[6], e[7], e[8], e[9]);

                  default:
                    return a.apply(b, e);
                }
            }
            return {
                invoke: d,
                instantiate: function(a, b) {
                    var c = function() {}, e;
                    c.prototype = (x(a) ? a[a.length - 1] : a).prototype;
                    c = new c();
                    e = d(a, c, b);
                    return t(e) ? e : c;
                },
                get: c,
                annotate: sb,
                has: function(b) {
                    return m.hasOwnProperty(b + j) || a.hasOwnProperty(b);
                }
            };
        }
        var h = {}, j = "Provider", k = [], l = new rb(), m = {
            $provide: {
                provider: b(c),
                factory: b(d),
                service: b(function(a, b) {
                    return d(a, [ "$injector", function(a) {
                        return a.instantiate(b);
                    } ]);
                }),
                value: b(function(a, b) {
                    return d(a, q(b));
                }),
                constant: b(function(a, b) {
                    Y(a, "constant");
                    m[a] = b;
                    p[a] = b;
                }),
                decorator: function(a, b) {
                    var c = n.get(a + j), d = c.$get;
                    c.$get = function() {
                        var a = r.invoke(d, c);
                        return r.invoke(b, null, {
                            $delegate: a
                        });
                    };
                }
            }
        }, n = m.$injector = g(m, function() {
            throw jd("unpr", k.join(" <- "));
        }), p = {}, r = p.$injector = g(p, function(a) {
            a = n.get(a + j);
            return r.invoke(a.$get, a);
        });
        f(e(a), function(a) {
            r.invoke(a || o);
        });
        return r;
    }
    function ub() {
        var a = !0;
        this.disableAutoScrolling = function() {
            a = !1;
        };
        this.$get = [ "$window", "$location", "$rootScope", function(b, c, d) {
            function e(a) {
                var b = null;
                f(a, function(a) {
                    b || "a" !== Gc(a.nodeName) || (b = a);
                });
                return b;
            }
            function g() {
                var a = c.hash(), d;
                a ? (d = h.getElementById(a)) ? d.scrollIntoView() : (d = e(h.getElementsByName(a))) ? d.scrollIntoView() : "top" === a && b.scrollTo(0, 0) : b.scrollTo(0, 0);
            }
            var h = b.document;
            a && d.$watch(function() {
                return c.hash();
            }, function() {
                d.$evalAsync(g);
            });
            return g;
        } ];
    }
    function vb(a, b, d, e) {
        function g(a) {
            try {
                a.apply(null, Lc.call(arguments, 1));
            } finally {
                if (s--, 0 === s) for (;t.length; ) try {
                    t.pop()();
                } catch (b) {
                    d.error(b);
                }
            }
        }
        function h(a, b) {
            (function c() {
                f(v, function(a) {
                    a();
                });
                w = b(c, a);
            })();
        }
        function i() {
            z = null;
            x != j.url() && (x = j.url(), f(A, function(a) {
                a(j.url());
            }));
        }
        var j = this, k = b[0], l = a.location, m = a.history, n = a.setTimeout, p = a.clearTimeout, q = {};
        j.isMock = !1;
        var s = 0, t = [];
        j.$$completeOutstandingRequest = g;
        j.$$incOutstandingRequestCount = function() {
            s++;
        };
        j.notifyWhenNoOutstandingRequests = function(a) {
            f(v, function(a) {
                a();
            });
            0 === s ? a() : t.push(a);
        };
        var v = [], w;
        j.addPollFn = function(a) {
            r(w) && h(100, n);
            v.push(a);
            return a;
        };
        var x = l.href, y = b.find("base"), z = null;
        j.url = function(b, c) {
            l !== a.location && (l = a.location);
            if (b) {
                if (x != b) return x = b, e.history ? c ? m.replaceState(null, "", b) : (m.pushState(null, "", b), 
                y.attr("href", y.attr("href"))) : (z = b, c ? l.replace(b) : l.href = b), j;
            } else return z || l.href.replace(/%27/g, "'");
        };
        var A = [], B = !1;
        j.onUrlChange = function(b) {
            if (!B) {
                if (e.history) Jc(a).on("popstate", i);
                if (e.hashchange) Jc(a).on("hashchange", i); else j.addPollFn(i);
                B = !0;
            }
            A.push(b);
            return b;
        };
        j.baseHref = function() {
            var a = y.attr("href");
            return a ? a.replace(/^https?\:\/\/[^\/]*/, "") : "";
        };
        var C = {}, D = "", E = j.baseHref();
        j.cookies = function(a, b) {
            var e, f, g, h;
            if (a) b === c ? k.cookie = escape(a) + "=;path=" + E + ";expires=Thu, 01 Jan 1970 00:00:00 GMT" : u(b) && (e = (k.cookie = escape(a) + "=" + escape(b) + ";path=" + E).length + 1, 
            4096 < e && d.warn("Cookie '" + a + "' possibly not set or overflowed because it was too large (" + e + " > 4096 bytes)!")); else {
                if (k.cookie !== D) for (D = k.cookie, e = D.split("; "), C = {}, g = 0; g < e.length; g++) f = e[g], 
                h = f.indexOf("="), 0 < h && (a = unescape(f.substring(0, h)), C[a] === c && (C[a] = unescape(f.substring(h + 1))));
                return C;
            }
        };
        j.defer = function(a, b) {
            var c;
            s++;
            c = n(function() {
                delete q[c];
                g(a);
            }, b || 0);
            q[c] = !0;
            return c;
        };
        j.defer.cancel = function(a) {
            return q[a] ? (delete q[a], p(a), g(o), !0) : !1;
        };
    }
    function wb() {
        this.$get = [ "$window", "$log", "$sniffer", "$document", function(a, b, c, d) {
            return new vb(a, d, b, c);
        } ];
    }
    function xb() {
        this.$get = function() {
            function a(a, c) {
                function e(a) {
                    a != m && (n ? n == a && (n = a.n) : n = a, f(a.n, a.p), f(a, m), m = a, m.n = null);
                }
                function f(a, b) {
                    a != b && (a && (a.p = b), b && (b.n = a));
                }
                if (a in b) throw d("$cacheFactory")("iid", a);
                var g = 0, h = l({}, c, {
                    id: a
                }), i = {}, j = c && c.capacity || Number.MAX_VALUE, k = {}, m = null, n = null;
                return b[a] = {
                    put: function(a, b) {
                        var c = k[a] || (k[a] = {
                            key: a
                        });
                        e(c);
                        if (!r(b)) return a in i || g++, i[a] = b, g > j && this.remove(n.key), b;
                    },
                    get: function(a) {
                        var b = k[a];
                        if (b) return e(b), i[a];
                    },
                    remove: function(a) {
                        var b = k[a];
                        b && (b == m && (m = b.p), b == n && (n = b.n), f(b.n, b.p), delete k[a], delete i[a], 
                        g--);
                    },
                    removeAll: function() {
                        i = {};
                        g = 0;
                        k = {};
                        m = n = null;
                    },
                    destroy: function() {
                        k = h = i = null;
                        delete b[a];
                    },
                    info: function() {
                        return l({}, h, {
                            size: g
                        });
                    }
                };
            }
            var b = {};
            a.info = function() {
                var a = {};
                f(b, function(b, c) {
                    a[c] = b.info();
                });
                return a;
            };
            a.get = function(a) {
                return b[a];
            };
            return a;
        };
    }
    function yb() {
        this.$get = [ "$cacheFactory", function(a) {
            return a("templates");
        } ];
    }
    function zb(a) {
        var d = {}, e = "Directive", g = /^\s*directive\:\s*([\d\w\-_]+)\s+(.*)$/, h = /(([\d\w\-_]+)(?:\:([^;]+))?;?)/, j = /^\s*(https?|ftp|mailto|tel|file):/, k = /^\s*(https?|ftp|file):|data:image\//, m = /^(on[a-z]+|formaction)$/;
        this.directive = function o(b, c) {
            Y(b, "directive");
            u(b) ? (W(c, "directiveFactory"), d.hasOwnProperty(b) || (d[b] = [], a.factory(b + e, [ "$injector", "$exceptionHandler", function(a, c) {
                var e = [];
                f(d[b], function(d, f) {
                    try {
                        var g = a.invoke(d);
                        y(g) ? g = {
                            compile: q(g)
                        } : !g.compile && g.link && (g.compile = q(g.link));
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
            } ])), d[b].push(c)) : f(b, i(o));
            return this;
        };
        this.aHrefSanitizationWhitelist = function(a) {
            return s(a) ? (j = a, this) : j;
        };
        this.imgSrcSanitizationWhitelist = function(a) {
            return s(a) ? (k = a, this) : k;
        };
        this.$get = [ "$injector", "$interpolate", "$exceptionHandler", "$http", "$templateCache", "$parse", "$controller", "$rootScope", "$document", "$sce", "$animate", function(a, i, o, r, s, v, w, z, A, B, C) {
            function D(a, b, c, d, e) {
                a instanceof Jc || (a = Jc(a));
                f(a, function(b, c) {
                    3 == b.nodeType && b.nodeValue.match(/\S+/) && (a[c] = Jc(b).wrap("<span></span>").parent()[0]);
                });
                var g = F(a, b, a, c, d, e);
                return function(b, c) {
                    W(b, "scope");
                    for (var d = c ? cd.clone.call(a) : a, e = 0, f = d.length; e < f; e++) {
                        var h = d[e];
                        1 != h.nodeType && 9 != h.nodeType || d.eq(e).data("$scope", b);
                    }
                    E(d, "ng-scope");
                    c && c(d, b);
                    g && g(b, d, d);
                    return d;
                };
            }
            function E(a, b) {
                try {
                    a.addClass(b);
                } catch (c) {}
            }
            function F(a, b, d, e, f, g) {
                function h(a, d, e, f) {
                    var g, h, j, k, l, m, n, o = [];
                    l = 0;
                    for (m = d.length; l < m; l++) o.push(d[l]);
                    n = l = 0;
                    for (m = i.length; l < m; n++) h = o[n], d = i[l++], g = i[l++], d ? (d.scope ? (j = a.$new(t(d.scope)), 
                    Jc(h).data("$scope", j)) : j = a, (k = d.transclude) || !f && b ? d(g, j, h, e, function(b) {
                        return function(c) {
                            var d = a.$new();
                            d.$$transcluded = !0;
                            return b(d, c).on("$destroy", I(d, d.$destroy));
                        };
                    }(k || b)) : d(g, j, h, c, f)) : g && g(a, h.childNodes, c, f);
                }
                for (var i = [], j, k, l, m = 0; m < a.length; m++) k = new Y(), j = H(a[m], [], k, 0 == m ? e : c, f), 
                j = (g = j.length ? L(j, a[m], k, b, d, null, [], [], g) : null) && g.terminal || !a[m].childNodes || !a[m].childNodes.length ? null : F(a[m].childNodes, g ? g.transclude : b), 
                i.push(g), i.push(j), l = l || g || j, g = null;
                return l ? h : null;
            }
            function H(a, b, c, d, e) {
                var f = c.$attr, i;
                switch (a.nodeType) {
                  case 1:
                    M(b, Ab(Rc(a).toLowerCase()), "E", d, e);
                    var j, k, l;
                    i = a.attributes;
                    for (var m = 0, n = i && i.length; m < n; m++) {
                        var o = !1, p = !1;
                        j = i[m];
                        if (!Ic || 8 <= Ic || j.specified) {
                            k = j.name;
                            l = Ab(k);
                            ab.test(l) && (k = V(l.substr(6), "-"));
                            var q = l.replace(/(Start|End)$/, "");
                            l === q + "Start" && (o = k, p = k.substr(0, k.length - 5) + "end", k = k.substr(0, k.length - 6));
                            l = Ab(k.toLowerCase());
                            f[l] = k;
                            c[l] = j = Tc(Ic && "href" == k ? decodeURIComponent(a.getAttribute(k, 2)) : j.value);
                            ob(a, l) && (c[l] = !0);
                            U(a, b, j, l);
                            M(b, l, "A", d, e, o, p);
                        }
                    }
                    a = a.className;
                    if (u(a) && "" !== a) for (;i = h.exec(a); ) l = Ab(i[2]), M(b, l, "C", d, e) && (c[l] = Tc(i[3])), 
                    a = a.substr(i.index + i[0].length);
                    break;

                  case 3:
                    S(b, a.nodeValue);
                    break;

                  case 8:
                    try {
                        if (i = g.exec(a.nodeValue)) l = Ab(i[1]), M(b, l, "M", d, e) && (c[l] = Tc(i[2]));
                    } catch (r) {}
                }
                b.sort(Q);
                return b;
            }
            function J(a, b, c) {
                var d = [], e = 0;
                if (b && a.hasAttribute && a.hasAttribute(b)) {
                    do {
                        if (!a) throw md("uterdir", b, c);
                        1 == a.nodeType && (a.hasAttribute(b) && e++, a.hasAttribute(c) && e--);
                        d.push(a);
                        a = a.nextSibling;
                    } while (0 < e);
                } else d.push(a);
                return Jc(d);
            }
            function K(a, b, c) {
                return function(d, e, f, g) {
                    e = J(e[0], b, c);
                    return a(d, e, f, g);
                };
            }
            function L(a, d, e, g, h, j, k, l, m) {
                function n(a, b, c, d) {
                    a && (c && (a = K(a, c, d)), a.require = C.require, k.push(a));
                    b && (c && (b = K(b, c, d)), b.require = C.require, l.push(b));
                }
                function p(a, b) {
                    var c, d = "data", e = !1;
                    if (u(a)) {
                        for (;"^" == (c = a.charAt(0)) || "?" == c; ) a = a.substr(1), "^" == c && (d = "inheritedData"), 
                        e = e || "?" == c;
                        c = b[d]("$" + a + "Controller");
                        8 == b[0].nodeType && b[0].$$controller && (c = c || b[0].$$controller, b[0].$$controller = null);
                        if (!c && !e) throw md("ctreq", a, F);
                    } else x(a) && (c = [], f(a, function(a) {
                        c.push(p(a, b));
                    }));
                    return c;
                }
                function q(a, b, g, h, j) {
                    var m, n, q, r, s;
                    m = d === g ? e : G(e, new Y(Jc(g), e.$attr));
                    n = m.$$element;
                    if (z) {
                        var t = /^\s*([@=&])(\??)\s*(\w*)\s*$/, u = b.$parent || b;
                        f(z.scope, function(a, c) {
                            var d = a.match(t) || [], e = d[3] || c, f = "?" == d[2], d = d[1], g, h, j;
                            b.$$isolateBindings[c] = d + e;
                            switch (d) {
                              case "@":
                                m.$observe(e, function(a) {
                                    b[c] = a;
                                });
                                m.$$observers[e].$$scope = u;
                                m[e] && (b[c] = i(m[e])(u));
                                break;

                              case "=":
                                if (f && !m[e]) break;
                                h = v(m[e]);
                                j = h.assign || function() {
                                    g = b[c] = h(u);
                                    throw md("nonassign", m[e], z.name);
                                };
                                g = b[c] = h(u);
                                b.$watch(function() {
                                    var a = h(u);
                                    a !== b[c] && (a !== g ? g = b[c] = a : j(u, a = g = b[c]));
                                    return a;
                                });
                                break;

                              case "&":
                                h = v(m[e]);
                                b[c] = function(a) {
                                    return h(u, a);
                                };
                                break;

                              default:
                                throw md("iscp", z.name, c, a);
                            }
                        });
                    }
                    M && f(M, function(a) {
                        var c = {
                            $scope: b,
                            $element: n,
                            $attrs: m,
                            $transclude: j
                        }, d;
                        s = a.controller;
                        "@" == s && (s = m[a.name]);
                        d = w(s, c);
                        8 == n[0].nodeType ? n[0].$$controller = d : n.data("$" + a.name + "Controller", d);
                        a.controllerAs && (c.$scope[a.controllerAs] = d);
                    });
                    h = 0;
                    for (q = k.length; h < q; h++) try {
                        r = k[h], r(b, n, m, r.require && p(r.require, n));
                    } catch (x) {
                        o(x, N(n));
                    }
                    a && a(b, g.childNodes, c, j);
                    for (h = l.length - 1; 0 <= h; h--) try {
                        r = l[h], r(b, n, m, r.require && p(r.require, n));
                    } catch (y) {
                        o(y, N(n));
                    }
                }
                m = m || {};
                var r = -Number.MAX_VALUE, s, z = m.newIsolateScopeDirective, A = m.templateDirective, B = e.$$element = Jc(d), C, F, I;
                m = m.transcludeDirective;
                for (var L = g, M, Q, S = 0, T = a.length; S < T; S++) {
                    C = a[S];
                    var U = C.$$start, V = C.$$end;
                    U && (B = J(d, U, V));
                    I = c;
                    if (r > C.priority) break;
                    if (I = C.scope) s = s || C, C.templateUrl || (R("new/isolated scope", z, C, B), 
                    t(I) && (E(B, "ng-isolate-scope"), z = C), E(B, "ng-scope"));
                    F = C.name;
                    !C.templateUrl && C.controller && (I = C.controller, M = M || {}, R("'" + F + "' controller", M[F], C, B), 
                    M[F] = C);
                    if (I = C.transclude) "ngRepeat" !== F && (R("transclusion", m, C, B), m = C), "element" == I ? (r = C.priority, 
                    I = J(d, U, V), B = e.$$element = Jc(b.createComment(" " + F + ": " + e[F] + " ")), 
                    d = B[0], X(h, Jc(Lc.call(I, 0)), d), L = D(I, g, r, j && j.name, {
                        newIsolateScopeDirective: z,
                        transcludeDirective: m,
                        templateDirective: A
                    })) : (I = Jc(cb(d)).contents(), B.html(""), L = D(I, g));
                    if (C.template) if (R("template", A, C, B), A = C, I = y(C.template) ? C.template(B, e) : C.template, 
                    I = _(I), C.replace) {
                        j = C;
                        I = Jc("<div>" + Tc(I) + "</div>").contents();
                        d = I[0];
                        if (1 != I.length || 1 !== d.nodeType) throw md("tplrt", F, "");
                        X(h, B, d);
                        T = {
                            $attr: {}
                        };
                        a = a.concat(H(d, a.splice(S + 1, a.length - (S + 1)), T));
                        O(e, T);
                        T = a.length;
                    } else B.html(I);
                    if (C.templateUrl) R("template", A, C, B), A = C, C.replace && (j = C), q = P(a.splice(S, a.length - S), B, e, h, L, k, l, {
                        newIsolateScopeDirective: z,
                        transcludeDirective: m,
                        templateDirective: A
                    }), T = a.length; else if (C.compile) try {
                        Q = C.compile(B, e, L), y(Q) ? n(null, Q, U, V) : Q && n(Q.pre, Q.post, U, V);
                    } catch (W) {
                        o(W, N(B));
                    }
                    C.terminal && (q.terminal = !0, r = Math.max(r, C.priority));
                }
                q.scope = s && s.scope;
                q.transclude = m && L;
                return q;
            }
            function M(b, f, g, h, i, j, k) {
                if (f === i) return null;
                i = null;
                if (d.hasOwnProperty(f)) {
                    var l;
                    f = a.get(f + e);
                    for (var m = 0, p = f.length; m < p; m++) try {
                        l = f[m], (h === c || h > l.priority) && -1 != l.restrict.indexOf(g) && (j && (l = n(l, {
                            $$start: j,
                            $$end: k
                        })), b.push(l), i = l);
                    } catch (q) {
                        o(q);
                    }
                }
                return i;
            }
            function O(a, b) {
                var c = b.$attr, d = a.$attr, e = a.$$element;
                f(a, function(d, e) {
                    "$" != e.charAt(0) && (b[e] && (d += ("style" === e ? ";" : " ") + b[e]), a.$set(e, d, !0, c[e]));
                });
                f(b, function(b, f) {
                    "class" == f ? (E(e, b), a["class"] = (a["class"] ? a["class"] + " " : "") + b) : "style" == f ? e.attr("style", e.attr("style") + ";" + b) : "$" == f.charAt(0) || a.hasOwnProperty(f) || (a[f] = b, 
                    d[f] = c[f]);
                });
            }
            function P(a, b, c, d, e, g, h, i) {
                var j = [], k, m, n = b[0], o = a.shift(), p = l({}, o, {
                    templateUrl: null,
                    transclude: null,
                    replace: null
                }), q = y(o.templateUrl) ? o.templateUrl(b, c) : o.templateUrl;
                b.html("");
                r.get(B.getTrustedResourceUrl(q), {
                    cache: s
                }).success(function(l) {
                    var r;
                    l = _(l);
                    if (o.replace) {
                        l = Jc("<div>" + Tc(l) + "</div>").contents();
                        r = l[0];
                        if (1 != l.length || 1 !== r.nodeType) throw md("tplrt", o.name, q);
                        l = {
                            $attr: {}
                        };
                        X(d, b, r);
                        H(r, a, l);
                        O(c, l);
                    } else r = n, b.html(l);
                    a.unshift(p);
                    k = L(a, r, c, e, b, o, g, h, i);
                    f(d, function(a, c) {
                        a == r && (d[c] = b[0]);
                    });
                    for (m = F(b[0].childNodes, e); j.length; ) {
                        l = j.shift();
                        var s = j.shift(), t = j.shift(), u = j.shift(), v = b[0];
                        s !== n && (v = cb(r), X(t, Jc(s), v));
                        k(m, l, v, d, u);
                    }
                    j = null;
                }).error(function(a, b, c, d) {
                    throw md("tpload", d.url);
                });
                return function(a, b, c, d, e) {
                    j ? (j.push(b), j.push(c), j.push(d), j.push(e)) : k(m, b, c, d, e);
                };
            }
            function Q(a, b) {
                var c = b.priority - a.priority;
                return 0 !== c ? c : a.name !== b.name ? a.name < b.name ? -1 : 1 : a.index - b.index;
            }
            function R(a, b, c, d) {
                if (b) throw md("multidir", b.name, c.name, a, N(d));
            }
            function S(a, b) {
                var c = i(b, !0);
                c && a.push({
                    priority: 0,
                    compile: q(function(a, b) {
                        var d = b.parent(), e = d.data("$binding") || [];
                        e.push(c);
                        E(d.data("$binding", e), "ng-binding");
                        a.$watch(c, function(a) {
                            b[0].nodeValue = a;
                        });
                    })
                });
            }
            function T(a, b) {
                if ("xlinkHref" == b || "IMG" != Rc(a) && ("src" == b || "ngSrc" == b)) return B.RESOURCE_URL;
            }
            function U(a, b, c, d) {
                var e = i(c, !0);
                if (e) {
                    if ("multiple" === d && "SELECT" === Rc(a)) throw md("selmulti", N(a));
                    b.push({
                        priority: -100,
                        compile: q(function(b, c, f) {
                            c = f.$$observers || (f.$$observers = {});
                            if (m.test(d)) throw md("nodomevents");
                            if (e = i(f[d], !0, T(a, d))) f[d] = e(b), (c[d] || (c[d] = [])).$$inter = !0, (f.$$observers && f.$$observers[d].$$scope || b).$watch(e, function(a) {
                                f.$set(d, a);
                            });
                        })
                    });
                }
            }
            function X(a, c, d) {
                var e = c[0], f = c.length, g = e.parentNode, h, i;
                if (a) for (h = 0, i = a.length; h < i; h++) if (a[h] == e) {
                    a[h++] = d;
                    i = h + f - 1;
                    for (var j = a.length; h < j; h++, i++) i < j ? a[h] = a[i] : delete a[h];
                    a.length -= f - 1;
                    break;
                }
                g && g.replaceChild(d, e);
                a = b.createDocumentFragment();
                a.appendChild(e);
                d[Jc.expando] = e[Jc.expando];
                e = 1;
                for (f = c.length; e < f; e++) g = c[e], Jc(g).remove(), a.appendChild(g), delete c[e];
                c[0] = d;
                c.length = 1;
            }
            var Y = function(a, b) {
                this.$$element = a;
                this.$attr = b || {};
            };
            Y.prototype = {
                $normalize: Ab,
                $addClass: function(a) {
                    a && 0 < a.length && C.addClass(this.$$element, a);
                },
                $removeClass: function(a) {
                    a && 0 < a.length && C.removeClass(this.$$element, a);
                },
                $set: function(a, b, d, e) {
                    function g(a, b) {
                        var c = [], d = a.split(/\s+/), e = b.split(/\s+/), f = 0;
                        a: for (;f < d.length; f++) {
                            for (var g = d[f], h = 0; h < e.length; h++) if (g == e[h]) continue a;
                            c.push(g);
                        }
                        return c;
                    }
                    if ("class" == a) b = b || "", d = this.$$element.attr("class") || "", this.$removeClass(g(d, b).join(" ")), 
                    this.$addClass(g(b, d).join(" ")); else {
                        var h = ob(this.$$element[0], a);
                        h && (this.$$element.prop(a, b), e = h);
                        this[a] = b;
                        e ? this.$attr[a] = e : (e = this.$attr[a]) || (this.$attr[a] = e = V(a, "-"));
                        h = Rc(this.$$element);
                        if ("A" === h && "href" === a || "IMG" === h && "src" === a) if (!Ic || 8 <= Ic) h = nc(b).href, 
                        "" !== h && ("href" === a && !h.match(j) || "src" === a && !h.match(k)) && (this[a] = b = "unsafe:" + h);
                        !1 !== d && (null === b || b === c ? this.$$element.removeAttr(e) : this.$$element.attr(e, b));
                    }
                    (d = this.$$observers) && f(d[a], function(a) {
                        try {
                            a(b);
                        } catch (c) {
                            o(c);
                        }
                    });
                },
                $observe: function(a, b) {
                    var c = this, d = c.$$observers || (c.$$observers = {}), e = d[a] || (d[a] = []);
                    e.push(b);
                    z.$evalAsync(function() {
                        e.$$inter || b(c[a]);
                    });
                    return b;
                }
            };
            var Z = i.startSymbol(), $ = i.endSymbol(), _ = "{{" == Z || "}}" == $ ? p : function(a) {
                return a.replace(/\{\{/g, Z).replace(/}}/g, $);
            }, ab = /^ngAttr[A-Z]/;
            return D;
        } ];
    }
    function Ab(a) {
        return _(a.replace(nd, ""));
    }
    function Bb() {
        var a = {}, b = /^(\S+)(\s+as\s+(\w+))?$/;
        this.register = function(b, c) {
            Y(b, "controller");
            t(b) ? l(a, b) : a[b] = c;
        };
        this.$get = [ "$injector", "$window", function(c, e) {
            return function(f, g) {
                var h, i, j;
                u(f) && (h = f.match(b), i = h[1], j = h[3], f = a.hasOwnProperty(i) ? a[i] : Z(g.$scope, i, !0) || Z(e, i, !0), 
                X(f, i, !0));
                h = c.instantiate(f, g);
                if (j) {
                    if (!g || "object" != typeof g.$scope) throw d("$controller")("noscp", i || f.name, j);
                    g.$scope[j] = h;
                }
                return h;
            };
        } ];
    }
    function Cb() {
        this.$get = [ "$window", function(a) {
            return Jc(a.document);
        } ];
    }
    function Db() {
        this.$get = [ "$log", function(a) {
            return function(b, c) {
                a.error.apply(a, arguments);
            };
        } ];
    }
    function Eb(a) {
        var b = {}, c, d, e;
        if (!a) return b;
        f(a.split("\n"), function(a) {
            e = a.indexOf(":");
            c = Gc(Tc(a.substr(0, e)));
            d = Tc(a.substr(e + 1));
            c && (b[c] = b[c] ? b[c] + (", " + d) : d);
        });
        return b;
    }
    function Fb(a) {
        var b = t(a) ? a : c;
        return function(c) {
            b || (b = Eb(a));
            return c ? b[Gc(c)] || null : b;
        };
    }
    function Gb(a, b, c) {
        if (y(c)) return c(a, b);
        f(c, function(c) {
            a = c(a, b);
        });
        return a;
    }
    function Hb() {
        var a = /^\s*(\[|\{[^\{])/, b = /[\}\]]\s*$/, d = /^\)\]\}',?\n/, e = {
            "Content-Type": "application/json;charset=utf-8"
        }, g = this.defaults = {
            transformResponse: [ function(c) {
                u(c) && (c = c.replace(d, ""), a.test(c) && b.test(c) && (c = L(c)));
                return c;
            } ],
            transformRequest: [ function(a) {
                return t(a) && "[object File]" !== Nc.apply(a) ? K(a) : a;
            } ],
            headers: {
                common: {
                    Accept: "application/json, text/plain, */*"
                },
                post: e,
                put: e,
                patch: e
            },
            xsrfCookieName: "XSRF-TOKEN",
            xsrfHeaderName: "X-XSRF-TOKEN"
        }, i = this.interceptors = [], j = this.responseInterceptors = [];
        this.$get = [ "$httpBackend", "$browser", "$cacheFactory", "$rootScope", "$q", "$injector", function(a, b, d, e, k, m) {
            function n(a) {
                function d(a) {
                    var b = l({}, a, {
                        data: Gb(a.data, a.headers, e.transformResponse)
                    });
                    return 200 <= a.status && 300 > a.status ? b : k.reject(b);
                }
                var e = {
                    transformRequest: g.transformRequest,
                    transformResponse: g.transformResponse
                }, h = function(a) {
                    function b(a) {
                        var b;
                        f(a, function(c, d) {
                            y(c) && (b = c(), null != b ? a[d] = b : delete a[d]);
                        });
                    }
                    var c = g.headers, d = l({}, a.headers), e, h, c = l({}, c.common, c[Gc(a.method)]);
                    b(c);
                    b(d);
                    a: for (e in c) {
                        a = Gc(e);
                        for (h in d) if (Gc(h) === a) continue a;
                        d[e] = c[e];
                    }
                    return d;
                }(a);
                l(e, a);
                e.headers = h;
                e.method = Hc(e.method);
                (a = oc(e.url) ? b.cookies()[e.xsrfCookieName || g.xsrfCookieName] : c) && (h[e.xsrfHeaderName || g.xsrfHeaderName] = a);
                var i = [ function(a) {
                    h = a.headers;
                    var b = Gb(a.data, Fb(h), a.transformRequest);
                    r(a.data) && f(h, function(a, b) {
                        "content-type" === Gc(b) && delete h[b];
                    });
                    r(a.withCredentials) && !r(g.withCredentials) && (a.withCredentials = g.withCredentials);
                    return o(a, b, h).then(d, d);
                }, c ], j = k.when(e);
                for (f(v, function(a) {
                    (a.request || a.requestError) && i.unshift(a.request, a.requestError);
                    (a.response || a.responseError) && i.push(a.response, a.responseError);
                }); i.length; ) {
                    a = i.shift();
                    var m = i.shift(), j = j.then(a, m);
                }
                j.success = function(a) {
                    j.then(function(b) {
                        a(b.data, b.status, b.headers, e);
                    });
                    return j;
                };
                j.error = function(a) {
                    j.then(null, function(b) {
                        a(b.data, b.status, b.headers, e);
                    });
                    return j;
                };
                return j;
            }
            function o(b, c, d) {
                function f(a, b, c) {
                    m && (200 <= a && 300 > a ? m.put(u, [ a, b, Eb(c) ]) : m.remove(u));
                    h(b, a, c);
                    e.$$phase || e.$apply();
                }
                function h(a, c, d) {
                    c = Math.max(c, 0);
                    (200 <= c && 300 > c ? j.resolve : j.reject)({
                        data: a,
                        status: c,
                        headers: Fb(d),
                        config: b
                    });
                }
                function i() {
                    var a = D(n.pendingRequests, b);
                    -1 !== a && n.pendingRequests.splice(a, 1);
                }
                var j = k.defer(), l = j.promise, m, o, u = p(b.url, b.params);
                n.pendingRequests.push(b);
                l.then(i, i);
                (b.cache || g.cache) && !1 !== b.cache && "GET" == b.method && (m = t(b.cache) ? b.cache : t(g.cache) ? g.cache : q);
                if (m) if (o = m.get(u), s(o)) {
                    if (o.then) return o.then(i, i), o;
                    x(o) ? h(o[1], o[0], F(o[2])) : h(o, 200, {});
                } else m.put(u, l);
                r(o) && a(b.method, u, c, f, d, b.timeout, b.withCredentials, b.responseType);
                return l;
            }
            function p(a, b) {
                if (!b) return a;
                var d = [];
                h(b, function(a, b) {
                    null != a && a != c && (x(a) || (a = [ a ]), f(a, function(a) {
                        t(a) && (a = K(a));
                        d.push(S(b) + "=" + S(a));
                    }));
                });
                return a + (-1 == a.indexOf("?") ? "?" : "&") + d.join("&");
            }
            var q = d("$http"), v = [];
            f(i, function(a) {
                v.unshift(u(a) ? m.get(a) : m.invoke(a));
            });
            f(j, function(a, b) {
                var c = u(a) ? m.get(a) : m.invoke(a);
                v.splice(b, 0, {
                    response: function(a) {
                        return c(k.when(a));
                    },
                    responseError: function(a) {
                        return c(k.reject(a));
                    }
                });
            });
            n.pendingRequests = [];
            (function(a) {
                f(arguments, function(a) {
                    n[a] = function(b, c) {
                        return n(l(c || {}, {
                            method: a,
                            url: b
                        }));
                    };
                });
            })("get", "delete", "head", "jsonp");
            (function(a) {
                f(arguments, function(a) {
                    n[a] = function(b, c, d) {
                        return n(l(d || {}, {
                            method: a,
                            url: b,
                            data: c
                        }));
                    };
                });
            })("post", "put");
            n.defaults = g;
            return n;
        } ];
    }
    function Ib() {
        this.$get = [ "$browser", "$window", "$document", function(a, b, c) {
            return Jb(a, od, a.defer, b.angular.callbacks, c[0], b.location.protocol.replace(":", ""));
        } ];
    }
    function Jb(a, b, c, d, e, g) {
        function h(a, b) {
            var c = e.createElement("script"), d = function() {
                e.body.removeChild(c);
                b && b();
            };
            c.type = "text/javascript";
            c.src = a;
            Ic ? c.onreadystatechange = function() {
                /loaded|complete/.test(c.readyState) && d();
            } : c.onload = c.onerror = d;
            e.body.appendChild(c);
            return d;
        }
        return function(e, i, j, k, l, m, n, p) {
            function q() {
                t = -1;
                v && v();
                w && w.abort();
            }
            function r(b, d, e, f) {
                var h = g || nc(i).protocol;
                x && c.cancel(x);
                v = w = null;
                d = "file" == h ? e ? 200 : 404 : d;
                b(1223 == d ? 204 : d, e, f);
                a.$$completeOutstandingRequest(o);
            }
            var t;
            a.$$incOutstandingRequestCount();
            i = i || a.url();
            if ("jsonp" == Gc(e)) {
                var u = "_" + (d.counter++).toString(36);
                d[u] = function(a) {
                    d[u].data = a;
                };
                var v = h(i.replace("JSON_CALLBACK", "angular.callbacks." + u), function() {
                    d[u].data ? r(k, 200, d[u].data) : r(k, t || -2);
                    delete d[u];
                });
            } else {
                var w = new b();
                w.open(e, i, !0);
                f(l, function(a, b) {
                    s(a) && w.setRequestHeader(b, a);
                });
                w.onreadystatechange = function() {
                    if (4 == w.readyState) {
                        var a = w.getAllResponseHeaders();
                        r(k, t || w.status, w.responseType ? w.response : w.responseText, a);
                    }
                };
                n && (w.withCredentials = !0);
                p && (w.responseType = p);
                w.send(j || null);
            }
            if (0 < m) var x = c(q, m); else m && m.then && m.then(q);
        };
    }
    function Kb() {
        var a = "{{", b = "}}";
        this.startSymbol = function(b) {
            return b ? (a = b, this) : a;
        };
        this.endSymbol = function(a) {
            return a ? (b = a, this) : b;
        };
        this.$get = [ "$parse", "$exceptionHandler", "$sce", function(d, e, f) {
            function g(g, j, k) {
                for (var l, m, n = 0, o = [], p = g.length, q = !1, r = []; n < p; ) -1 != (l = g.indexOf(a, n)) && -1 != (m = g.indexOf(b, l + h)) ? (n != l && o.push(g.substring(n, l)), 
                o.push(n = d(q = g.substring(l + h, m))), n.exp = q, n = m + i, q = !0) : (n != p && o.push(g.substring(n)), 
                n = p);
                (p = o.length) || (o.push(""), p = 1);
                if (k && 1 < o.length) throw pd("noconcat", g);
                if (!j || q) return r.length = p, n = function(a) {
                    try {
                        for (var b = 0, d = p, h; b < d; b++) "function" == typeof (h = o[b]) && (h = h(a), 
                        h = k ? f.getTrusted(k, h) : f.valueOf(h), null == h || h == c ? h = "" : "string" != typeof h && (h = K(h))), 
                        r[b] = h;
                        return r.join("");
                    } catch (i) {
                        a = pd("interr", g, i.toString()), e(a);
                    }
                }, n.exp = g, n.parts = o, n;
            }
            var h = a.length, i = b.length;
            g.startSymbol = function() {
                return a;
            };
            g.endSymbol = function() {
                return b;
            };
            return g;
        } ];
    }
    function Lb() {
        this.$get = [ "$rootScope", "$window", "$q", function(a, b, c) {
            function d(d, f, g, h) {
                var i = b.setInterval, j = b.clearInterval, k = c.defer(), l = k.promise;
                g = s(g) ? g : 0;
                var m = 0, n = s(h) && !h;
                l.then(null, null, d);
                l.$$intervalId = i(function() {
                    k.notify(m++);
                    0 < g && m >= g && (k.resolve(m), j(l.$$intervalId), delete e[l.$$intervalId]);
                    n || a.$apply();
                }, f);
                e[l.$$intervalId] = k;
                return l;
            }
            var e = {};
            d.cancel = function(a) {
                return a && a.$$intervalId in e ? (e[a.$$intervalId].reject("canceled"), clearInterval(a.$$intervalId), 
                delete e[a.$$intervalId], !0) : !1;
            };
            return d;
        } ];
    }
    function Mb() {
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
                    MONTH: "January February March April May June July August September October November December".split(" "),
                    SHORTMONTH: "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),
                    DAY: "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),
                    SHORTDAY: "Sun Mon Tue Wed Thu Fri Sat".split(" "),
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
                    return 1 === a ? "one" : "other";
                }
            };
        };
    }
    function Nb(a) {
        a = a.split("/");
        for (var b = a.length; b--; ) a[b] = R(a[b]);
        return a.join("/");
    }
    function Ob(a, b) {
        var c = nc(a);
        b.$$protocol = c.protocol;
        b.$$host = c.hostname;
        b.$$port = m(c.port) || rd[c.protocol] || null;
    }
    function Pb(a, b) {
        var c = "/" !== a.charAt(0);
        c && (a = "/" + a);
        var d = nc(a);
        b.$$path = decodeURIComponent(c && "/" === d.pathname.charAt(0) ? d.pathname.substring(1) : d.pathname);
        b.$$search = P(d.search);
        b.$$hash = decodeURIComponent(d.hash);
        b.$$path && "/" != b.$$path.charAt(0) && (b.$$path = "/" + b.$$path);
    }
    function Qb(a, b) {
        if (0 == b.indexOf(a)) return b.substr(a.length);
    }
    function Rb(a) {
        var b = a.indexOf("#");
        return -1 == b ? a : a.substr(0, b);
    }
    function Sb(a) {
        return a.substr(0, Rb(a).lastIndexOf("/") + 1);
    }
    function Tb(a, b) {
        this.$$html5 = !0;
        b = b || "";
        var d = Sb(a);
        Ob(a, this);
        this.$$parse = function(a) {
            var b = Qb(d, a);
            if (!u(b)) throw sd("ipthprfx", a, d);
            Pb(b, this);
            this.$$path || (this.$$path = "/");
            this.$$compose();
        };
        this.$$compose = function() {
            var a = Q(this.$$search), b = this.$$hash ? "#" + R(this.$$hash) : "";
            this.$$url = Nb(this.$$path) + (a ? "?" + a : "") + b;
            this.$$absUrl = d + this.$$url.substr(1);
        };
        this.$$rewrite = function(e) {
            var f;
            if ((f = Qb(a, e)) !== c) return e = f, (f = Qb(b, f)) !== c ? d + (Qb("/", f) || f) : a + e;
            if ((f = Qb(d, e)) !== c) return d + f;
            if (d == e + "/") return d;
        };
    }
    function Ub(a, b) {
        var c = Sb(a);
        Ob(a, this);
        this.$$parse = function(d) {
            var e = Qb(a, d) || Qb(c, d), e = "#" == e.charAt(0) ? Qb(b, e) : this.$$html5 ? e : "";
            if (!u(e)) throw sd("ihshprfx", d, b);
            Pb(e, this);
            this.$$compose();
        };
        this.$$compose = function() {
            var c = Q(this.$$search), d = this.$$hash ? "#" + R(this.$$hash) : "";
            this.$$url = Nb(this.$$path) + (c ? "?" + c : "") + d;
            this.$$absUrl = a + (this.$$url ? b + this.$$url : "");
        };
        this.$$rewrite = function(b) {
            if (Rb(a) == Rb(b)) return b;
        };
    }
    function Vb(a, b) {
        this.$$html5 = !0;
        Ub.apply(this, arguments);
        var c = Sb(a);
        this.$$rewrite = function(d) {
            var e;
            if (a == Rb(d)) return d;
            if (e = Qb(c, d)) return a + b + e;
            if (c === d + "/") return c;
        };
    }
    function Wb(a) {
        return function() {
            return this[a];
        };
    }
    function Xb(a, b) {
        return function(c) {
            if (r(c)) return this[a];
            this[a] = b(c);
            this.$$compose();
            return this;
        };
    }
    function Yb() {
        var b = "", c = !1;
        this.hashPrefix = function(a) {
            return s(a) ? (b = a, this) : b;
        };
        this.html5Mode = function(a) {
            return s(a) ? (c = a, this) : c;
        };
        this.$get = [ "$rootScope", "$browser", "$sniffer", "$rootElement", function(d, e, f, g) {
            function h(a) {
                d.$broadcast("$locationChangeSuccess", i.absUrl(), a);
            }
            var i, j = e.baseHref(), k = e.url();
            c ? (j = k.substring(0, k.indexOf("/", k.indexOf("//") + 2)) + (j || "/"), f = f.history ? Tb : Vb) : (j = Rb(k), 
            f = Ub);
            i = new f(j, "#" + b);
            i.$$parse(i.$$rewrite(k));
            g.on("click", function(b) {
                if (!b.ctrlKey && !b.metaKey && 2 != b.which) {
                    for (var c = Jc(b.target); "a" !== Gc(c[0].nodeName); ) if (c[0] === g[0] || !(c = c.parent())[0]) return;
                    var f = c.prop("href"), h = i.$$rewrite(f);
                    f && !c.attr("target") && h && !b.isDefaultPrevented() && (b.preventDefault(), h != e.url() && (i.$$parse(h), 
                    d.$apply(), a.angular["ff-684208-preventDefault"] = !0));
                }
            });
            i.absUrl() != k && e.url(i.absUrl(), !0);
            e.onUrlChange(function(a) {
                i.absUrl() != a && (d.$broadcast("$locationChangeStart", a, i.absUrl()).defaultPrevented ? e.url(i.absUrl()) : (d.$evalAsync(function() {
                    var b = i.absUrl();
                    i.$$parse(a);
                    h(b);
                }), d.$$phase || d.$digest()));
            });
            var l = 0;
            d.$watch(function() {
                var a = e.url(), b = i.$$replace;
                l && a == i.absUrl() || (l++, d.$evalAsync(function() {
                    d.$broadcast("$locationChangeStart", i.absUrl(), a).defaultPrevented ? i.$$parse(a) : (e.url(i.absUrl(), b), 
                    h(a));
                }));
                i.$$replace = !1;
                return l;
            });
            return i;
        } ];
    }
    function Zb() {
        var a = !0, b = this;
        this.debugEnabled = function(b) {
            return s(b) ? (a = b, this) : a;
        };
        this.$get = [ "$window", function(c) {
            function d(a) {
                a instanceof Error && (a.stack ? a = a.message && -1 === a.stack.indexOf(a.message) ? "Error: " + a.message + "\n" + a.stack : a.stack : a.sourceURL && (a = a.message + "\n" + a.sourceURL + ":" + a.line));
                return a;
            }
            function e(a) {
                var b = c.console || {}, e = b[a] || b.log || o;
                return e.apply ? function() {
                    var a = [];
                    f(arguments, function(b) {
                        a.push(d(b));
                    });
                    return e.apply(b, a);
                } : function(a, b) {
                    e(a, null == b ? "" : b);
                };
            }
            return {
                log: e("log"),
                info: e("info"),
                warn: e("warn"),
                error: e("error"),
                debug: function() {
                    var c = e("debug");
                    return function() {
                        a && c.apply(b, arguments);
                    };
                }()
            };
        } ];
    }
    function $b(a, b) {
        if ("constructor" === a) throw td("isecfld", b);
        return a;
    }
    function _b(a, b) {
        if (a && a.constructor === a) throw td("isecfn", b);
        if (a && a.document && a.location && a.alert && a.setInterval) throw td("isecwindow", b);
        if (a && (a.nodeName || a.on && a.find)) throw td("isecdom", b);
        return a;
    }
    function ac(a, b, d, e, f) {
        f = f || {};
        b = b.split(".");
        for (var g, h = 0; 1 < b.length; h++) {
            g = $b(b.shift(), e);
            var i = a[g];
            i || (i = {}, a[g] = i);
            a = i;
            a.then && f.unwrapPromises && (vd(e), "$$v" in a || function(a) {
                a.then(function(b) {
                    a.$$v = b;
                });
            }(a), a.$$v === c && (a.$$v = {}), a = a.$$v);
        }
        g = $b(b.shift(), e);
        return a[g] = d;
    }
    function bc(a, b, d, e, f, g, h) {
        $b(a, g);
        $b(b, g);
        $b(d, g);
        $b(e, g);
        $b(f, g);
        return h.unwrapPromises ? function(h, i) {
            var j = i && i.hasOwnProperty(a) ? i : h, k;
            if (null === j || j === c) return j;
            (j = j[a]) && j.then && (vd(g), "$$v" in j || (k = j, k.$$v = c, k.then(function(a) {
                k.$$v = a;
            })), j = j.$$v);
            if (!b || null === j || j === c) return j;
            (j = j[b]) && j.then && (vd(g), "$$v" in j || (k = j, k.$$v = c, k.then(function(a) {
                k.$$v = a;
            })), j = j.$$v);
            if (!d || null === j || j === c) return j;
            (j = j[d]) && j.then && (vd(g), "$$v" in j || (k = j, k.$$v = c, k.then(function(a) {
                k.$$v = a;
            })), j = j.$$v);
            if (!e || null === j || j === c) return j;
            (j = j[e]) && j.then && (vd(g), "$$v" in j || (k = j, k.$$v = c, k.then(function(a) {
                k.$$v = a;
            })), j = j.$$v);
            if (!f || null === j || j === c) return j;
            (j = j[f]) && j.then && (vd(g), "$$v" in j || (k = j, k.$$v = c, k.then(function(a) {
                k.$$v = a;
            })), j = j.$$v);
            return j;
        } : function(g, h) {
            var i = h && h.hasOwnProperty(a) ? h : g;
            if (null === i || i === c) return i;
            i = i[a];
            if (!b || null === i || i === c) return i;
            i = i[b];
            if (!d || null === i || i === c) return i;
            i = i[d];
            if (!e || null === i || i === c) return i;
            i = i[e];
            return f && null !== i && i !== c ? i = i[f] : i;
        };
    }
    function cc(a, b, d) {
        if (Ad.hasOwnProperty(a)) return Ad[a];
        var e = a.split("."), g = e.length, h;
        if (b.csp) h = 6 > g ? bc(e[0], e[1], e[2], e[3], e[4], d, b) : function(a, f) {
            var h = 0, i;
            do i = bc(e[h++], e[h++], e[h++], e[h++], e[h++], d, b)(a, f), f = c, a = i; while (h < g);
            return i;
        }; else {
            var i = "var l, fn, p;\n";
            f(e, function(a, c) {
                $b(a, d);
                i += "if(s === null || s === undefined) return s;\nl=s;\ns=" + (c ? "s" : '((k&&k.hasOwnProperty("' + a + '"))?k:s)') + '["' + a + '"];\n' + (b.unwrapPromises ? 'if (s && s.then) {\n pw("' + d.replace(/\"/g, '\\"') + '");\n if (!("$$v" in s)) {\n p=s;\n p.$$v = undefined;\n p.then(function(v) {p.$$v=v;});\n}\n s=s.$$v\n}\n' : "");
            });
            var i = i + "return s;", j = Function("s", "k", "pw", i);
            j.toString = function() {
                return i;
            };
            h = function(a, b) {
                return j(a, b, vd);
            };
        }
        "hasOwnProperty" !== a && (Ad[a] = h);
        return h;
    }
    function dc() {
        var a = {}, b = {
            csp: !1,
            unwrapPromises: !1,
            logPromiseWarnings: !0
        };
        this.unwrapPromises = function(a) {
            return s(a) ? (b.unwrapPromises = !!a, this) : b.unwrapPromises;
        };
        this.logPromiseWarnings = function(a) {
            return s(a) ? (b.logPromiseWarnings = a, this) : b.logPromiseWarnings;
        };
        this.$get = [ "$filter", "$sniffer", "$log", function(c, d, e) {
            b.csp = d.csp;
            vd = function(a) {
                b.logPromiseWarnings && !ud.hasOwnProperty(a) && (ud[a] = !0, e.warn("[$parse] Promise found in the expression `" + a + "`. Automatic unwrapping of promises in Angular expressions is deprecated."));
            };
            return function(d) {
                var e;
                switch (typeof d) {
                  case "string":
                    if (a.hasOwnProperty(d)) return a[d];
                    e = new yd(b);
                    e = new zd(e, c, b).parse(d, !1);
                    "hasOwnProperty" !== d && (a[d] = e);
                    return e;

                  case "function":
                    return d;

                  default:
                    return o;
                }
            };
        } ];
    }
    function ec() {
        this.$get = [ "$rootScope", "$exceptionHandler", function(a, b) {
            return fc(function(b) {
                a.$evalAsync(b);
            }, b);
        } ];
    }
    function fc(a, b) {
        function d(a) {
            return a;
        }
        function e(a) {
            return i(a);
        }
        var g = function() {
            var f = [], j, k;
            return k = {
                resolve: function(b) {
                    if (f) {
                        var d = f;
                        f = c;
                        j = h(b);
                        d.length && a(function() {
                            for (var a, b = 0, c = d.length; b < c; b++) a = d[b], j.then(a[0], a[1], a[2]);
                        });
                    }
                },
                reject: function(a) {
                    k.resolve(i(a));
                },
                notify: function(b) {
                    if (f) {
                        var c = f;
                        f.length && a(function() {
                            for (var a, d = 0, e = c.length; d < e; d++) a = c[d], a[2](b);
                        });
                    }
                },
                promise: {
                    then: function(a, c, h) {
                        var i = g(), k = function(c) {
                            try {
                                i.resolve((y(a) ? a : d)(c));
                            } catch (e) {
                                i.reject(e), b(e);
                            }
                        }, l = function(a) {
                            try {
                                i.resolve((y(c) ? c : e)(a));
                            } catch (d) {
                                i.reject(d), b(d);
                            }
                        }, m = function(a) {
                            try {
                                i.notify((y(h) ? h : d)(a));
                            } catch (c) {
                                b(c);
                            }
                        };
                        f ? f.push([ k, l, m ]) : j.then(k, l, m);
                        return i.promise;
                    },
                    "catch": function(a) {
                        return this.then(null, a);
                    },
                    "finally": function(a) {
                        function b(a, b) {
                            var c = g();
                            b ? c.resolve(a) : c.reject(a);
                            return c.promise;
                        }
                        function c(c, e) {
                            var f = null;
                            try {
                                f = (a || d)();
                            } catch (g) {
                                return b(g, !1);
                            }
                            return f && y(f.then) ? f.then(function() {
                                return b(c, e);
                            }, function(a) {
                                return b(a, !1);
                            }) : b(c, e);
                        }
                        return this.then(function(a) {
                            return c(a, !0);
                        }, function(a) {
                            return c(a, !1);
                        });
                    }
                }
            };
        }, h = function(b) {
            return b && y(b.then) ? b : {
                then: function(c) {
                    var d = g();
                    a(function() {
                        d.resolve(c(b));
                    });
                    return d.promise;
                }
            };
        }, i = function(c) {
            return {
                then: function(d, f) {
                    var h = g();
                    a(function() {
                        try {
                            h.resolve((y(f) ? f : e)(c));
                        } catch (a) {
                            h.reject(a), b(a);
                        }
                    });
                    return h.promise;
                }
            };
        };
        return {
            defer: g,
            reject: i,
            when: function(c, f, j, k) {
                var l = g(), m, n = function(a) {
                    try {
                        return (y(f) ? f : d)(a);
                    } catch (c) {
                        return b(c), i(c);
                    }
                }, o = function(a) {
                    try {
                        return (y(j) ? j : e)(a);
                    } catch (c) {
                        return b(c), i(c);
                    }
                }, p = function(a) {
                    try {
                        return (y(k) ? k : d)(a);
                    } catch (c) {
                        b(c);
                    }
                };
                a(function() {
                    h(c).then(function(a) {
                        m || (m = !0, l.resolve(h(a).then(n, o, p)));
                    }, function(a) {
                        m || (m = !0, l.resolve(o(a)));
                    }, function(a) {
                        m || l.notify(p(a));
                    });
                });
                return l.promise;
            },
            all: function(a) {
                var b = g(), c = 0, d = x(a) ? [] : {};
                f(a, function(a, e) {
                    c++;
                    h(a).then(function(a) {
                        d.hasOwnProperty(e) || (d[e] = a, --c || b.resolve(d));
                    }, function(a) {
                        d.hasOwnProperty(e) || b.reject(a);
                    });
                });
                0 === c && b.resolve(d);
                return b.promise;
            }
        };
    }
    function gc() {
        var a = 10, b = d("$rootScope");
        this.digestTtl = function(b) {
            arguments.length && (a = b);
            return a;
        };
        this.$get = [ "$injector", "$exceptionHandler", "$parse", "$browser", function(c, d, f, g) {
            function h() {
                this.$id = j();
                this.$$phase = this.$parent = this.$$watchers = this.$$nextSibling = this.$$prevSibling = this.$$childHead = this.$$childTail = null;
                this["this"] = this.$root = this;
                this.$$destroyed = !1;
                this.$$asyncQueue = [];
                this.$$postDigestQueue = [];
                this.$$listeners = {};
                this.$$isolateBindings = {};
            }
            function i(a) {
                if (m.$$phase) throw b("inprog", m.$$phase);
                m.$$phase = a;
            }
            function k(a, b) {
                var c = f(a);
                X(c, b);
                return c;
            }
            function l() {}
            h.prototype = {
                constructor: h,
                $new: function(a) {
                    a ? (a = new h(), a.$root = this.$root, a.$$asyncQueue = this.$$asyncQueue, a.$$postDigestQueue = this.$$postDigestQueue) : (a = function() {}, 
                    a.prototype = this, a = new a(), a.$id = j());
                    a["this"] = a;
                    a.$$listeners = {};
                    a.$parent = this;
                    a.$$watchers = a.$$nextSibling = a.$$childHead = a.$$childTail = null;
                    a.$$prevSibling = this.$$childTail;
                    this.$$childHead ? this.$$childTail = this.$$childTail.$$nextSibling = a : this.$$childHead = this.$$childTail = a;
                    return a;
                },
                $watch: function(a, b, c) {
                    var d = k(a, "watch"), e = this.$$watchers, f = {
                        fn: b,
                        last: l,
                        get: d,
                        exp: a,
                        eq: !!c
                    };
                    if (!y(b)) {
                        var g = k(b || o, "listener");
                        f.fn = function(a, b, c) {
                            g(c);
                        };
                    }
                    if ("string" == typeof a && d.constant) {
                        var h = f.fn;
                        f.fn = function(a, b, c) {
                            h.call(this, a, b, c);
                            E(e, f);
                        };
                    }
                    e || (e = this.$$watchers = []);
                    e.unshift(f);
                    return function() {
                        E(e, f);
                    };
                },
                $watchCollection: function(a, b) {
                    var c = this, d, g, h = 0, i = f(a), j = [], k = {}, l = 0;
                    return this.$watch(function() {
                        g = i(c);
                        var a, b;
                        if (t(g)) if (e(g)) for (d !== j && (d = j, l = d.length = 0, h++), a = g.length, 
                        l !== a && (h++, d.length = l = a), b = 0; b < a; b++) d[b] !== g[b] && (h++, d[b] = g[b]); else {
                            d !== k && (d = k = {}, l = 0, h++);
                            a = 0;
                            for (b in g) g.hasOwnProperty(b) && (a++, d.hasOwnProperty(b) ? d[b] !== g[b] && (h++, 
                            d[b] = g[b]) : (l++, d[b] = g[b], h++));
                            if (l > a) for (b in h++, d) d.hasOwnProperty(b) && !g.hasOwnProperty(b) && (l--, 
                            delete d[b]);
                        } else d !== g && (d = g, h++);
                        return h;
                    }, function() {
                        b(g, d, c);
                    });
                },
                $digest: function() {
                    var c, e, f, g, h = this.$$asyncQueue, j = this.$$postDigestQueue, k, n, o = a, p, q = [], r, s, t;
                    i("$digest");
                    do {
                        n = !1;
                        for (p = this; h.length; ) try {
                            t = h.shift(), t.scope.$eval(t.expression);
                        } catch (u) {
                            d(u);
                        }
                        do {
                            if (g = p.$$watchers) for (k = g.length; k--; ) try {
                                (c = g[k]) && (e = c.get(p)) !== (f = c.last) && !(c.eq ? H(e, f) : "number" == typeof e && "number" == typeof f && isNaN(e) && isNaN(f)) && (n = !0, 
                                c.last = c.eq ? F(e) : e, c.fn(e, f === l ? e : f, p), 5 > o && (r = 4 - o, q[r] || (q[r] = []), 
                                s = y(c.exp) ? "fn: " + (c.exp.name || c.exp.toString()) : c.exp, s += "; newVal: " + K(e) + "; oldVal: " + K(f), 
                                q[r].push(s)));
                            } catch (v) {
                                d(v);
                            }
                            if (!(g = p.$$childHead || p !== this && p.$$nextSibling)) for (;p !== this && !(g = p.$$nextSibling); ) p = p.$parent;
                        } while (p = g);
                        if (n && !o--) throw m.$$phase = null, b("infdig", a, K(q));
                    } while (n || h.length);
                    for (m.$$phase = null; j.length; ) try {
                        j.shift()();
                    } catch (w) {
                        d(w);
                    }
                },
                $destroy: function() {
                    if (m != this && !this.$$destroyed) {
                        var a = this.$parent;
                        this.$broadcast("$destroy");
                        this.$$destroyed = !0;
                        a.$$childHead == this && (a.$$childHead = this.$$nextSibling);
                        a.$$childTail == this && (a.$$childTail = this.$$prevSibling);
                        this.$$prevSibling && (this.$$prevSibling.$$nextSibling = this.$$nextSibling);
                        this.$$nextSibling && (this.$$nextSibling.$$prevSibling = this.$$prevSibling);
                        this.$parent = this.$$nextSibling = this.$$prevSibling = this.$$childHead = this.$$childTail = null;
                    }
                },
                $eval: function(a, b) {
                    return f(a)(this, b);
                },
                $evalAsync: function(a) {
                    m.$$phase || m.$$asyncQueue.length || g.defer(function() {
                        m.$$asyncQueue.length && m.$digest();
                    });
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
                        return i("$apply"), this.$eval(a);
                    } catch (b) {
                        d(b);
                    } finally {
                        m.$$phase = null;
                        try {
                            m.$digest();
                        } catch (c) {
                            throw d(c), c;
                        }
                    }
                },
                $on: function(a, b) {
                    var c = this.$$listeners[a];
                    c || (this.$$listeners[a] = c = []);
                    c.push(b);
                    return function() {
                        c[D(c, b)] = null;
                    };
                },
                $emit: function(a, b) {
                    var c = [], e, f = this, g = !1, h = {
                        name: a,
                        targetScope: f,
                        stopPropagation: function() {
                            g = !0;
                        },
                        preventDefault: function() {
                            h.defaultPrevented = !0;
                        },
                        defaultPrevented: !1
                    }, i = [ h ].concat(Lc.call(arguments, 1)), j, k;
                    do {
                        e = f.$$listeners[a] || c;
                        h.currentScope = f;
                        j = 0;
                        for (k = e.length; j < k; j++) if (e[j]) try {
                            e[j].apply(null, i);
                        } catch (l) {
                            d(l);
                        } else e.splice(j, 1), j--, k--;
                        if (g) break;
                        f = f.$parent;
                    } while (f);
                    return h;
                },
                $broadcast: function(a, b) {
                    var c = this, e = this, f = {
                        name: a,
                        targetScope: this,
                        preventDefault: function() {
                            f.defaultPrevented = !0;
                        },
                        defaultPrevented: !1
                    }, g = [ f ].concat(Lc.call(arguments, 1)), h, i;
                    do {
                        c = e;
                        f.currentScope = c;
                        e = c.$$listeners[a] || [];
                        h = 0;
                        for (i = e.length; h < i; h++) if (e[h]) try {
                            e[h].apply(null, g);
                        } catch (j) {
                            d(j);
                        } else e.splice(h, 1), h--, i--;
                        if (!(e = c.$$childHead || c !== this && c.$$nextSibling)) for (;c !== this && !(e = c.$$nextSibling); ) c = c.$parent;
                    } while (c = e);
                    return f;
                }
            };
            var m = new h();
            return m;
        } ];
    }
    function hc(a) {
        if ("self" === a) return a;
        if (u(a)) {
            if (-1 < a.indexOf("***")) throw Bd("iwcard", a);
            a = a.replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08").replace("\\*\\*", ".*").replace("\\*", "[^:/.?&;]*");
            return RegExp("^" + a + "$");
        }
        if (z(a)) return RegExp("^" + a.source + "$");
        throw Bd("imatcher");
    }
    function ic(a) {
        var b = [];
        s(a) && f(a, function(a) {
            b.push(hc(a));
        });
        return b;
    }
    function jc() {
        this.SCE_CONTEXTS = Cd;
        var a = [ "self" ], b = [];
        this.resourceUrlWhitelist = function(b) {
            arguments.length && (a = ic(b));
            return a;
        };
        this.resourceUrlBlacklist = function(a) {
            arguments.length && (b = ic(a));
            return b;
        };
        this.$get = [ "$log", "$document", "$injector", function(d, e, f) {
            function g(a) {
                var b = function(a) {
                    this.$$unwrapTrustedValue = function() {
                        return a;
                    };
                };
                a && (b.prototype = new a());
                b.prototype.valueOf = function() {
                    return this.$$unwrapTrustedValue();
                };
                b.prototype.toString = function() {
                    return this.$$unwrapTrustedValue().toString();
                };
                return b;
            }
            var h = function(a) {
                throw Bd("unsafe");
            };
            f.has("$sanitize") && (h = f.get("$sanitize"));
            var i = g(), j = {};
            j[Cd.HTML] = g(i);
            j[Cd.CSS] = g(i);
            j[Cd.URL] = g(i);
            j[Cd.JS] = g(i);
            j[Cd.RESOURCE_URL] = g(j[Cd.URL]);
            return {
                trustAs: function(a, b) {
                    var d = j.hasOwnProperty(a) ? j[a] : null;
                    if (!d) throw Bd("icontext", a, b);
                    if (null === b || b === c || "" === b) return b;
                    if ("string" !== typeof b) throw Bd("itype", a);
                    return new d(b);
                },
                getTrusted: function(d, e) {
                    if (null === e || e === c || "" === e) return e;
                    var f = j.hasOwnProperty(d) ? j[d] : null;
                    if (f && e instanceof f) return e.$$unwrapTrustedValue();
                    if (d === Cd.RESOURCE_URL) {
                        var f = nc(e.toString()), g, i, k = !1;
                        g = 0;
                        for (i = a.length; g < i; g++) if ("self" === a[g] ? oc(f) : a[g].exec(f.href)) {
                            k = !0;
                            break;
                        }
                        if (k) for (g = 0, i = b.length; g < i; g++) if ("self" === b[g] ? oc(f) : b[g].exec(f.href)) {
                            k = !1;
                            break;
                        }
                        if (k) return e;
                        throw Bd("insecurl", e.toString());
                    }
                    if (d === Cd.HTML) return h(e);
                    throw Bd("unsafe");
                },
                valueOf: function(a) {
                    return a instanceof i ? a.$$unwrapTrustedValue() : a;
                }
            };
        } ];
    }
    function kc() {
        var a = !0;
        this.enabled = function(b) {
            arguments.length && (a = !!b);
            return a;
        };
        this.$get = [ "$parse", "$document", "$sceDelegate", function(b, d, e) {
            if (a && Ic && (d = d[0].documentMode, d !== c && 8 > d)) throw Bd("iequirks");
            var g = F(Cd);
            g.isEnabled = function() {
                return a;
            };
            g.trustAs = e.trustAs;
            g.getTrusted = e.getTrusted;
            g.valueOf = e.valueOf;
            a || (g.trustAs = g.getTrusted = function(a, b) {
                return b;
            }, g.valueOf = p);
            g.parseAs = function(a, c) {
                var d = b(c);
                return d.literal && d.constant ? d : function(b, c) {
                    return g.getTrusted(a, d(b, c));
                };
            };
            var h = g.parseAs, i = g.getTrusted, j = g.trustAs;
            f(Cd, function(a, b) {
                var c = Gc(b);
                g[_("parse_as_" + c)] = function(b) {
                    return h(a, b);
                };
                g[_("get_trusted_" + c)] = function(b) {
                    return i(a, b);
                };
                g[_("trust_as_" + c)] = function(b) {
                    return j(a, b);
                };
            });
            return g;
        } ];
    }
    function lc() {
        this.$get = [ "$window", "$document", function(a, b) {
            var c = {}, d = m((/android (\d+)/.exec(Gc((a.navigator || {}).userAgent)) || [])[1]), e = /Boxee/i.test((a.navigator || {}).userAgent), f = b[0] || {}, g, h = /^(Moz|webkit|O|ms)(?=[A-Z])/, i = f.body && f.body.style, j = !1, k = !1;
            if (i) {
                for (var l in i) if (j = h.exec(l)) {
                    g = j[0];
                    g = g.substr(0, 1).toUpperCase() + g.substr(1);
                    break;
                }
                g || (g = "WebkitOpacity" in i && "webkit");
                j = !!("transition" in i || g + "Transition" in i);
                k = !!("animation" in i || g + "Animation" in i);
                !d || j && k || (j = u(f.body.style.webkitTransition), k = u(f.body.style.webkitAnimation));
            }
            return {
                history: !(!a.history || !a.history.pushState || 4 > d || e),
                hashchange: "onhashchange" in a && (!f.documentMode || 7 < f.documentMode),
                hasEvent: function(a) {
                    if ("input" == a && 9 == Ic) return !1;
                    if (r(c[a])) {
                        var b = f.createElement("div");
                        c[a] = "on" + a in b;
                    }
                    return c[a];
                },
                csp: f.securityPolicy ? f.securityPolicy.isActive : !1,
                vendorPrefix: g,
                transitions: j,
                animations: k
            };
        } ];
    }
    function mc() {
        this.$get = [ "$rootScope", "$browser", "$q", "$exceptionHandler", function(a, b, c, d) {
            function e(e, g, h) {
                var i = c.defer(), j = i.promise, k = s(h) && !h;
                g = b.defer(function() {
                    try {
                        i.resolve(e());
                    } catch (b) {
                        i.reject(b), d(b);
                    } finally {
                        delete f[j.$$timeoutId];
                    }
                    k || a.$apply();
                }, g);
                j.$$timeoutId = g;
                f[g] = i;
                return j;
            }
            var f = {};
            e.cancel = function(a) {
                return a && a.$$timeoutId in f ? (f[a.$$timeoutId].reject("canceled"), delete f[a.$$timeoutId], 
                b.defer.cancel(a.$$timeoutId)) : !1;
            };
            return e;
        } ];
    }
    function nc(a) {
        Ic && (Dd.setAttribute("href", a), a = Dd.href);
        Dd.setAttribute("href", a);
        return {
            href: Dd.href,
            protocol: Dd.protocol ? Dd.protocol.replace(/:$/, "") : "",
            host: Dd.host,
            search: Dd.search ? Dd.search.replace(/^\?/, "") : "",
            hash: Dd.hash ? Dd.hash.replace(/^#/, "") : "",
            hostname: Dd.hostname,
            port: Dd.port,
            pathname: Dd.pathname && "/" === Dd.pathname.charAt(0) ? Dd.pathname : "/" + Dd.pathname
        };
    }
    function oc(a) {
        a = u(a) ? nc(a) : a;
        return a.protocol === Ed.protocol && a.host === Ed.host;
    }
    function pc() {
        this.$get = q(a);
    }
    function qc(a) {
        function b(d, e) {
            if (t(d)) {
                var g = {};
                f(d, function(a, c) {
                    g[c] = b(c, a);
                });
                return g;
            }
            return a.factory(d + c, e);
        }
        var c = "Filter";
        this.register = b;
        this.$get = [ "$injector", function(a) {
            return function(b) {
                return a.get(b + c);
            };
        } ];
        b("currency", sc);
        b("date", yc);
        b("filter", rc);
        b("json", zc);
        b("limitTo", Ac);
        b("lowercase", Jd);
        b("number", tc);
        b("orderBy", Bc);
        b("uppercase", Kd);
    }
    function rc() {
        return function(a, b, c) {
            if (!x(a)) return a;
            var d = [];
            d.check = function(a) {
                for (var b = 0; b < d.length; b++) if (!d[b](a)) return !1;
                return !0;
            };
            switch (typeof c) {
              case "function":
                break;

              case "boolean":
                if (!0 == c) {
                    c = function(a, b) {
                        return Pc.equals(a, b);
                    };
                    break;
                }

              default:
                c = function(a, b) {
                    b = ("" + b).toLowerCase();
                    return -1 < ("" + a).toLowerCase().indexOf(b);
                };
            }
            var e = function(a, b) {
                if ("string" == typeof b && "!" === b.charAt(0)) return !e(a, b.substr(1));
                switch (typeof a) {
                  case "boolean":
                  case "number":
                  case "string":
                    return c(a, b);

                  case "object":
                    switch (typeof b) {
                      case "object":
                        return c(a, b);

                      default:
                        for (var d in a) if ("$" !== d.charAt(0) && e(a[d], b)) return !0;
                    }
                    return !1;

                  case "array":
                    for (d = 0; d < a.length; d++) if (e(a[d], b)) return !0;
                    return !1;

                  default:
                    return !1;
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
                for (var f in b) "$" == f ? function() {
                    if (b[f]) {
                        var a = f;
                        d.push(function(c) {
                            return e(c, b[a]);
                        });
                    }
                }() : function() {
                    if ("undefined" != typeof b[f]) {
                        var a = f;
                        d.push(function(c) {
                            return e(Z(c, a), b[a]);
                        });
                    }
                }();
                break;

              case "function":
                d.push(b);
                break;

              default:
                return a;
            }
            for (var g = [], h = 0; h < a.length; h++) {
                var i = a[h];
                d.check(i) && g.push(i);
            }
            return g;
        };
    }
    function sc(a) {
        var b = a.NUMBER_FORMATS;
        return function(a, c) {
            r(c) && (c = b.CURRENCY_SYM);
            return uc(a, b.PATTERNS[1], b.GROUP_SEP, b.DECIMAL_SEP, 2).replace(/\u00A4/g, c);
        };
    }
    function tc(a) {
        var b = a.NUMBER_FORMATS;
        return function(a, c) {
            return uc(a, b.PATTERNS[0], b.GROUP_SEP, b.DECIMAL_SEP, c);
        };
    }
    function uc(a, b, c, d, e) {
        if (isNaN(a) || !isFinite(a)) return "";
        var f = 0 > a;
        a = Math.abs(a);
        var g = a + "", h = "", i = [], j = !1;
        if (-1 !== g.indexOf("e")) {
            var k = g.match(/([\d\.]+)e(-?)(\d+)/);
            k && "-" == k[2] && k[3] > e + 1 ? g = "0" : (h = g, j = !0);
        }
        if (j) 0 < e && -1 < a && 1 > a && (h = a.toFixed(e)); else {
            g = (g.split(Fd)[1] || "").length;
            r(e) && (e = Math.min(Math.max(b.minFrac, g), b.maxFrac));
            g = Math.pow(10, e);
            a = Math.round(a * g) / g;
            a = ("" + a).split(Fd);
            g = a[0];
            a = a[1] || "";
            var j = 0, k = b.lgSize, l = b.gSize;
            if (g.length >= k + l) for (var j = g.length - k, m = 0; m < j; m++) 0 === (j - m) % l && 0 !== m && (h += c), 
            h += g.charAt(m);
            for (m = j; m < g.length; m++) 0 === (g.length - m) % k && 0 !== m && (h += c), 
            h += g.charAt(m);
            for (;a.length < e; ) a += "0";
            e && "0" !== e && (h += d + a.substr(0, e));
        }
        i.push(f ? b.negPre : b.posPre);
        i.push(h);
        i.push(f ? b.negSuf : b.posSuf);
        return i.join("");
    }
    function vc(a, b, c) {
        var d = "";
        0 > a && (d = "-", a = -a);
        for (a = "" + a; a.length < b; ) a = "0" + a;
        c && (a = a.substr(a.length - b));
        return d + a;
    }
    function wc(a, b, c, d) {
        c = c || 0;
        return function(e) {
            e = e["get" + a]();
            if (0 < c || e > -c) e += c;
            0 === e && -12 == c && (e = 12);
            return vc(e, b, d);
        };
    }
    function xc(a, b) {
        return function(c, d) {
            var e = c["get" + a](), f = Hc(b ? "SHORT" + a : a);
            return d[f][e];
        };
    }
    function yc(a) {
        function b(a) {
            var b;
            if (b = a.match(c)) {
                a = new Date(0);
                var d = 0, e = 0, f = b[8] ? a.setUTCFullYear : a.setFullYear, g = b[8] ? a.setUTCHours : a.setHours;
                b[9] && (d = m(b[9] + b[10]), e = m(b[9] + b[11]));
                f.call(a, m(b[1]), m(b[2]) - 1, m(b[3]));
                d = m(b[4] || 0) - d;
                e = m(b[5] || 0) - e;
                f = m(b[6] || 0);
                b = Math.round(1e3 * parseFloat("0." + (b[7] || 0)));
                g.call(a, d, e, f, b);
            }
            return a;
        }
        var c = /^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;
        return function(c, d) {
            var e = "", g = [], h, i;
            d = d || "mediumDate";
            d = a.DATETIME_FORMATS[d] || d;
            u(c) && (c = Id.test(c) ? m(c) : b(c));
            v(c) && (c = new Date(c));
            if (!w(c)) return c;
            for (;d; ) (i = Hd.exec(d)) ? (g = g.concat(Lc.call(i, 1)), d = g.pop()) : (g.push(d), 
            d = null);
            f(g, function(b) {
                h = Gd[b];
                e += h ? h(c, a.DATETIME_FORMATS) : b.replace(/(^'|'$)/g, "").replace(/''/g, "'");
            });
            return e;
        };
    }
    function zc() {
        return function(a) {
            return K(a, !0);
        };
    }
    function Ac() {
        return function(a, b) {
            if (!x(a) && !u(a)) return a;
            b = m(b);
            if (u(a)) return b ? 0 <= b ? a.slice(0, b) : a.slice(b, a.length) : "";
            var c = [], d, e;
            b > a.length ? b = a.length : b < -a.length && (b = -a.length);
            0 < b ? (d = 0, e = b) : (d = a.length + b, e = a.length);
            for (;d < e; d++) c.push(a[d]);
            return c;
        };
    }
    function Bc(a) {
        return function(b, c, d) {
            function e(a, b) {
                return M(b) ? function(b, c) {
                    return a(c, b);
                } : a;
            }
            if (!x(b) || !c) return b;
            c = x(c) ? c : [ c ];
            c = C(c, function(b) {
                var c = !1, d = b || p;
                if (u(b)) {
                    if ("+" == b.charAt(0) || "-" == b.charAt(0)) c = "-" == b.charAt(0), b = b.substring(1);
                    d = a(b);
                }
                return e(function(a, b) {
                    var c;
                    c = d(a);
                    var e = d(b), f = typeof c, g = typeof e;
                    f == g ? ("string" == f && (c = c.toLowerCase(), e = e.toLowerCase()), c = c === e ? 0 : c < e ? -1 : 1) : c = f < g ? -1 : 1;
                    return c;
                }, c);
            });
            for (var f = [], g = 0; g < b.length; g++) f.push(b[g]);
            return f.sort(e(function(a, b) {
                for (var d = 0; d < c.length; d++) {
                    var e = c[d](a, b);
                    if (0 !== e) return e;
                }
                return 0;
            }, d));
        };
    }
    function Cc(a) {
        y(a) && (a = {
            link: a
        });
        a.restrict = a.restrict || "AC";
        return q(a);
    }
    function Dc(a, b) {
        function c(b, c) {
            c = c ? "-" + V(c, "-") : "";
            a.removeClass((b ? Xd : Wd) + c).addClass((b ? Wd : Xd) + c);
        }
        var d = this, e = a.parent().controller("form") || Nd, g = 0, h = d.$error = {}, i = [];
        d.$name = b.name || b.ngForm;
        d.$dirty = !1;
        d.$pristine = !0;
        d.$valid = !0;
        d.$invalid = !1;
        e.$addControl(d);
        a.addClass(Yd);
        c(!0);
        d.$addControl = function(a) {
            Y(a.$name, "input");
            i.push(a);
            a.$name && (d[a.$name] = a);
        };
        d.$removeControl = function(a) {
            a.$name && d[a.$name] === a && delete d[a.$name];
            f(h, function(b, c) {
                d.$setValidity(c, !0, a);
            });
            E(i, a);
        };
        d.$setValidity = function(a, b, f) {
            var i = h[a];
            if (b) i && (E(i, f), i.length || (g--, g || (c(b), d.$valid = !0, d.$invalid = !1), 
            h[a] = !1, c(!0, a), e.$setValidity(a, !0, d))); else {
                g || c(b);
                if (i) {
                    if (-1 != D(i, f)) return;
                } else h[a] = i = [], g++, c(!1, a), e.$setValidity(a, !1, d);
                i.push(f);
                d.$valid = !1;
                d.$invalid = !0;
            }
        };
        d.$setDirty = function() {
            a.removeClass(Yd).addClass(Zd);
            d.$dirty = !0;
            d.$pristine = !1;
            e.$setDirty();
        };
        d.$setPristine = function() {
            a.removeClass(Zd).addClass(Yd);
            d.$dirty = !1;
            d.$pristine = !0;
            f(i, function(a) {
                a.$setPristine();
            });
        };
    }
    function Ec(a, b, e, f, g, h) {
        var i = function() {
            var c = b.val();
            M(e.ngTrim || "T") && (c = Tc(c));
            f.$viewValue !== c && a.$apply(function() {
                f.$setViewValue(c);
            });
        };
        if (g.hasEvent("input")) b.on("input", i); else {
            var j, k = function() {
                j || (j = h.defer(function() {
                    i();
                    j = null;
                }));
            };
            b.on("keydown", function(a) {
                a = a.keyCode;
                91 === a || 15 < a && 19 > a || 37 <= a && 40 >= a || k();
            });
            b.on("change", i);
            if (g.hasEvent("paste")) b.on("paste cut", k);
        }
        f.$render = function() {
            b.val(f.$isEmpty(f.$viewValue) ? "" : f.$viewValue);
        };
        var l = e.ngPattern, n = function(a, b) {
            if (f.$isEmpty(b) || a.test(b)) return f.$setValidity("pattern", !0), b;
            f.$setValidity("pattern", !1);
            return c;
        };
        l && ((g = l.match(/^\/(.*)\/([gim]*)$/)) ? (l = RegExp(g[1], g[2]), g = function(a) {
            return n(l, a);
        }) : g = function(c) {
            var e = a.$eval(l);
            if (!e || !e.test) throw d("ngPattern")("noregexp", l, e, N(b));
            return n(e, c);
        }, f.$formatters.push(g), f.$parsers.push(g));
        if (e.ngMinlength) {
            var o = m(e.ngMinlength);
            g = function(a) {
                if (!f.$isEmpty(a) && a.length < o) return f.$setValidity("minlength", !1), c;
                f.$setValidity("minlength", !0);
                return a;
            };
            f.$parsers.push(g);
            f.$formatters.push(g);
        }
        if (e.ngMaxlength) {
            var p = m(e.ngMaxlength);
            g = function(a) {
                if (!f.$isEmpty(a) && a.length > p) return f.$setValidity("maxlength", !1), c;
                f.$setValidity("maxlength", !0);
                return a;
            };
            f.$parsers.push(g);
            f.$formatters.push(g);
        }
    }
    function Fc(a, b) {
        a = "ngClass" + a;
        return function() {
            return {
                restrict: "AC",
                link: function(d, e, g) {
                    function h(a) {
                        if (!0 === b || d.$index % 2 === b) j && !H(a, j) && g.$removeClass(i(j)), g.$addClass(i(a));
                        j = F(a);
                    }
                    function i(a) {
                        if (x(a)) return a.join(" ");
                        if (t(a)) {
                            var b = [];
                            f(a, function(a, c) {
                                a && b.push(c);
                            });
                            return b.join(" ");
                        }
                        return a;
                    }
                    var j = c;
                    d.$watch(g[a], h, !0);
                    g.$observe("class", function(b) {
                        h(d.$eval(g[a]));
                    });
                    "ngClass" !== a && d.$watch("$index", function(c, e) {
                        var f = c & 1;
                        f !== e & 1 && (f === b ? (f = d.$eval(g[a]), g.$addClass(i(f))) : (f = d.$eval(g[a]), 
                        g.$removeClass(i(f))));
                    });
                }
            };
        };
    }
    var Gc = function(a) {
        return u(a) ? a.toLowerCase() : a;
    }, Hc = function(a) {
        return u(a) ? a.toUpperCase() : a;
    }, Ic, Jc, Kc, Lc = [].slice, Mc = [].push, Nc = Object.prototype.toString, Oc = d("ng"), Pc = a.angular || (a.angular = {}), Qc, Rc, Sc = [ "0", "0", "0" ];
    Ic = m((/msie (\d+)/.exec(Gc(navigator.userAgent)) || [])[1]);
    isNaN(Ic) && (Ic = m((/trident\/.*; rv:(\d+)/.exec(Gc(navigator.userAgent)) || [])[1]));
    o.$inject = [];
    p.$inject = [];
    var Tc = function() {
        return String.prototype.trim ? function(a) {
            return u(a) ? a.trim() : a;
        } : function(a) {
            return u(a) ? a.replace(/^\s*/, "").replace(/\s*$/, "") : a;
        };
    }();
    Rc = 9 > Ic ? function(a) {
        a = a.nodeName ? a : a[0];
        return a.scopeName && "HTML" != a.scopeName ? Hc(a.scopeName + ":" + a.nodeName) : a.nodeName;
    } : function(a) {
        return a.nodeName ? a.nodeName : a[0].nodeName;
    };
    var Uc = /[A-Z]/g, Vc = {
        full: "1.2.0-rc.3",
        major: 1,
        minor: 2,
        dot: 0,
        codeName: "ferocious-twitch"
    }, Wc = bb.cache = {}, Xc = bb.expando = "ng-" + new Date().getTime(), Yc = 1, Zc = a.document.addEventListener ? function(a, b, c) {
        a.addEventListener(b, c, !1);
    } : function(a, b, c) {
        a.attachEvent("on" + b, c);
    }, $c = a.document.removeEventListener ? function(a, b, c) {
        a.removeEventListener(b, c, !1);
    } : function(a, b, c) {
        a.detachEvent("on" + b, c);
    }, _c = /([\:\-\_]+(.))/g, ad = /^moz([A-Z])/, bd = d("jqLite"), cd = bb.prototype = {
        ready: function(c) {
            function d() {
                e || (e = !0, c());
            }
            var e = !1;
            "complete" === b.readyState ? setTimeout(d) : (this.on("DOMContentLoaded", d), bb(a).on("load", d));
        },
        toString: function() {
            var a = [];
            f(this, function(b) {
                a.push("" + b);
            });
            return "[" + a.join(", ") + "]";
        },
        eq: function(a) {
            return 0 <= a ? Jc(this[a]) : Jc(this[this.length + a]);
        },
        length: 0,
        push: Mc,
        sort: [].sort,
        splice: [].splice
    }, dd = {};
    f("multiple selected checked disabled readOnly required open".split(" "), function(a) {
        dd[Gc(a)] = a;
    });
    var ed = {};
    f("input select option textarea button form details".split(" "), function(a) {
        ed[Hc(a)] = !0;
    });
    f({
        data: hb,
        inheritedData: nb,
        scope: function(a) {
            return nb(a, "$scope");
        },
        controller: mb,
        injector: function(a) {
            return nb(a, "$injector");
        },
        removeAttr: function(a, b) {
            a.removeAttribute(b);
        },
        hasClass: ib,
        css: function(a, b, d) {
            b = _(b);
            if (s(d)) a.style[b] = d; else {
                var e;
                8 >= Ic && (e = a.currentStyle && a.currentStyle[b], "" === e && (e = "auto"));
                e = e || a.style[b];
                8 >= Ic && (e = "" === e ? c : e);
                return e;
            }
        },
        attr: function(a, b, d) {
            var e = Gc(b);
            if (dd[e]) if (s(d)) d ? (a[b] = !0, a.setAttribute(b, e)) : (a[b] = !1, a.removeAttribute(e)); else return a[b] || (a.attributes.getNamedItem(b) || o).specified ? e : c; else if (s(d)) a.setAttribute(b, d); else if (a.getAttribute) return a = a.getAttribute(b, 2), 
            null === a ? c : a;
        },
        prop: function(a, b, c) {
            if (s(c)) a[b] = c; else return a[b];
        },
        text: function() {
            function a(a, c) {
                var d = b[a.nodeType];
                if (r(c)) return d ? a[d] : "";
                a[d] = c;
            }
            var b = [];
            9 > Ic ? (b[1] = "innerText", b[3] = "nodeValue") : b[1] = b[3] = "textContent";
            a.$dv = "";
            return a;
        }(),
        val: function(a, b) {
            if (r(b)) {
                if ("SELECT" === Rc(a) && a.multiple) {
                    var c = [];
                    f(a.options, function(a) {
                        a.selected && c.push(a.value || a.text);
                    });
                    return 0 === c.length ? null : c;
                }
                return a.value;
            }
            a.value = b;
        },
        html: function(a, b) {
            if (r(b)) return a.innerHTML;
            for (var c = 0, d = a.childNodes; c < d.length; c++) db(d[c]);
            a.innerHTML = b;
        }
    }, function(a, b) {
        bb.prototype[b] = function(b, d) {
            var e, f;
            if ((2 == a.length && a !== ib && a !== mb ? b : d) === c) {
                if (t(b)) {
                    for (e = 0; e < this.length; e++) if (a === hb) a(this[e], b); else for (f in b) a(this[e], f, b[f]);
                    return this;
                }
                e = a.$dv;
                f = e == c ? Math.min(this.length, 1) : this.length;
                for (var g = 0; g < f; g++) {
                    var h = a(this[g], b, d);
                    e = e ? e + h : h;
                }
                return e;
            }
            for (e = 0; e < this.length; e++) a(this[e], b, d);
            return this;
        };
    });
    f({
        removeData: fb,
        dealoc: db,
        on: function Ie(a, c, d, e) {
            if (s(e)) throw bd("onargs");
            var g = gb(a, "events"), h = gb(a, "handle");
            g || gb(a, "events", g = {});
            h || gb(a, "handle", h = pb(a, g));
            f(c.split(" "), function(c) {
                var e = g[c];
                if (!e) {
                    if ("mouseenter" == c || "mouseleave" == c) {
                        var f = b.body.contains || b.body.compareDocumentPosition ? function(a, b) {
                            var c = 9 === a.nodeType ? a.documentElement : a, d = b && b.parentNode;
                            return a === d || !!(d && 1 === d.nodeType && (c.contains ? c.contains(d) : a.compareDocumentPosition && a.compareDocumentPosition(d) & 16));
                        } : function(a, b) {
                            if (b) for (;b = b.parentNode; ) if (b === a) return !0;
                            return !1;
                        };
                        g[c] = [];
                        Ie(a, {
                            mouseleave: "mouseout",
                            mouseenter: "mouseover"
                        }[c], function(a) {
                            var b = a.relatedTarget;
                            b && (b === this || f(this, b)) || h(a, c);
                        });
                    } else Zc(a, c, h), g[c] = [];
                    e = g[c];
                }
                e.push(d);
            });
        },
        off: eb,
        replaceWith: function(a, b) {
            var c, d = a.parentNode;
            db(a);
            f(new bb(b), function(b) {
                c ? d.insertBefore(b, c.nextSibling) : d.replaceChild(b, a);
                c = b;
            });
        },
        children: function(a) {
            var b = [];
            f(a.childNodes, function(a) {
                1 === a.nodeType && b.push(a);
            });
            return b;
        },
        contents: function(a) {
            return a.childNodes || [];
        },
        append: function(a, b) {
            f(new bb(b), function(b) {
                1 !== a.nodeType && 11 !== a.nodeType || a.appendChild(b);
            });
        },
        prepend: function(a, b) {
            if (1 === a.nodeType) {
                var c = a.firstChild;
                f(new bb(b), function(b) {
                    a.insertBefore(b, c);
                });
            }
        },
        wrap: function(a, b) {
            b = Jc(b)[0];
            var c = a.parentNode;
            c && c.replaceChild(b, a);
            b.appendChild(a);
        },
        remove: function(a) {
            db(a);
            var b = a.parentNode;
            b && b.removeChild(a);
        },
        after: function(a, b) {
            var c = a, d = a.parentNode;
            f(new bb(b), function(a) {
                d.insertBefore(a, c.nextSibling);
                c = a;
            });
        },
        addClass: kb,
        removeClass: jb,
        toggleClass: function(a, b, c) {
            r(c) && (c = !ib(a, b));
            (c ? kb : jb)(a, b);
        },
        parent: function(a) {
            return (a = a.parentNode) && 11 !== a.nodeType ? a : null;
        },
        next: function(a) {
            if (a.nextElementSibling) return a.nextElementSibling;
            for (a = a.nextSibling; null != a && 1 !== a.nodeType; ) a = a.nextSibling;
            return a;
        },
        find: function(a, b) {
            return a.getElementsByTagName(b);
        },
        clone: cb,
        triggerHandler: function(a, b, c) {
            b = (gb(a, "events") || {})[b];
            c = c || [];
            var d = [ {
                preventDefault: o,
                stopPropagation: o
            } ];
            f(b, function(b) {
                b.apply(a, d.concat(c));
            });
        }
    }, function(a, b) {
        bb.prototype[b] = function(b, d, e) {
            for (var f, g = 0; g < this.length; g++) f == c ? (f = a(this[g], b, d, e), f !== c && (f = Jc(f))) : lb(f, a(this[g], b, d, e));
            return f == c ? this : f;
        };
        bb.prototype.bind = bb.prototype.on;
        bb.prototype.unbind = bb.prototype.off;
    });
    rb.prototype = {
        put: function(a, b) {
            this[qb(a)] = b;
        },
        get: function(a) {
            return this[qb(a)];
        },
        remove: function(a) {
            var b = this[a = qb(a)];
            delete this[a];
            return b;
        }
    };
    var fd = /^function\s*[^\(]*\(\s*([^\)]*)\)/m, gd = /,/, hd = /^\s*(_?)(\S+?)\1\s*$/, id = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/gm, jd = d("$injector"), kd = d("$animate"), ld = [ "$provide", function(a) {
        this.$$selectors = {};
        this.register = function(b, c) {
            var d = b + "-animation";
            if (b && "." != b.charAt(0)) throw kd("notcsel", b);
            this.$$selectors[b.substr(1)] = d;
            a.factory(d, c);
        };
        this.$get = [ "$timeout", function(a) {
            return {
                enter: function(b, c, d, e) {
                    d = d && d[d.length - 1];
                    var g = c && c[0] || d && d.parentNode, h = d && d.nextSibling || null;
                    f(b, function(a) {
                        g.insertBefore(a, h);
                    });
                    e && a(e, 0, !1);
                },
                leave: function(b, c) {
                    b.remove();
                    c && a(c, 0, !1);
                },
                move: function(a, b, c, d) {
                    this.enter(a, b, c, d);
                },
                addClass: function(b, c, d) {
                    c = u(c) ? c : x(c) ? c.join(" ") : "";
                    f(b, function(a) {
                        kb(a, c);
                    });
                    d && a(d, 0, !1);
                },
                removeClass: function(b, c, d) {
                    c = u(c) ? c : x(c) ? c.join(" ") : "";
                    f(b, function(a) {
                        jb(a, c);
                    });
                    d && a(d, 0, !1);
                },
                enabled: o
            };
        } ];
    } ], md = d("$compile");
    zb.$inject = [ "$provide" ];
    var nd = /^(x[\:\-_]|data[\:\-_])/i, od = a.XMLHttpRequest || function() {
        try {
            return new ActiveXObject("Msxml2.XMLHTTP.6.0");
        } catch (a) {}
        try {
            return new ActiveXObject("Msxml2.XMLHTTP.3.0");
        } catch (b) {}
        try {
            return new ActiveXObject("Msxml2.XMLHTTP");
        } catch (c) {}
        throw d("$httpBackend")("noxhr");
    }, pd = d("$interpolate"), qd = /^([^\?#]*)(\?([^#]*))?(#(.*))?$/, rd = {
        http: 80,
        https: 443,
        ftp: 21
    }, sd = d("$location");
    Vb.prototype = Ub.prototype = Tb.prototype = {
        $$html5: !1,
        $$replace: !1,
        absUrl: Wb("$$absUrl"),
        url: function(a, b) {
            if (r(a)) return this.$$url;
            var c = qd.exec(a);
            c[1] && this.path(decodeURIComponent(c[1]));
            (c[2] || c[1]) && this.search(c[3] || "");
            this.hash(c[5] || "", b);
            return this;
        },
        protocol: Wb("$$protocol"),
        host: Wb("$$host"),
        port: Wb("$$port"),
        path: Xb("$$path", function(a) {
            return "/" == a.charAt(0) ? a : "/" + a;
        }),
        search: function(a, b) {
            switch (arguments.length) {
              case 0:
                return this.$$search;

              case 1:
                if (u(a)) this.$$search = P(a); else if (t(a)) this.$$search = a; else throw sd("isrcharg");
                break;

              default:
                b == c || null == b ? delete this.$$search[a] : this.$$search[a] = b;
            }
            this.$$compose();
            return this;
        },
        hash: Xb("$$hash", p),
        replace: function() {
            this.$$replace = !0;
            return this;
        }
    };
    var td = d("$parse"), ud = {}, vd, wd = {
        "null": function() {
            return null;
        },
        "true": function() {
            return !0;
        },
        "false": function() {
            return !1;
        },
        undefined: o,
        "+": function(a, b, d, e) {
            d = d(a, b);
            e = e(a, b);
            return s(d) ? s(e) ? d + e : d : s(e) ? e : c;
        },
        "-": function(a, b, c, d) {
            c = c(a, b);
            d = d(a, b);
            return (s(c) ? c : 0) - (s(d) ? d : 0);
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
        "=": o,
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
    }, xd = {
        n: "\n",
        f: "\f",
        r: "\r",
        t: "	",
        v: "",
        "'": "'",
        '"': '"'
    }, yd = function(a) {
        this.options = a;
    };
    yd.prototype = {
        constructor: yd,
        lex: function(a) {
            this.text = a;
            this.index = 0;
            this.ch = c;
            this.lastCh = ":";
            this.tokens = [];
            var b;
            for (a = []; this.index < this.text.length; ) {
                this.ch = this.text.charAt(this.index);
                if (this.is("\"'")) this.readString(this.ch); else if (this.isNumber(this.ch) || this.is(".") && this.isNumber(this.peek())) this.readNumber(); else if (this.isIdent(this.ch)) this.readIdent(), 
                this.was("{,") && "{" === a[0] && (b = this.tokens[this.tokens.length - 1]) && (b.json = -1 === b.text.indexOf(".")); else if (this.is("(){}[].,;:?")) this.tokens.push({
                    index: this.index,
                    text: this.ch,
                    json: this.was(":[,") && this.is("{[") || this.is("}]:,")
                }), this.is("{[") && a.unshift(this.ch), this.is("}]") && a.shift(), this.index++; else if (this.isWhitespace(this.ch)) {
                    this.index++;
                    continue;
                } else {
                    var d = this.ch + this.peek(), e = d + this.peek(2), f = wd[this.ch], g = wd[d], h = wd[e];
                    h ? (this.tokens.push({
                        index: this.index,
                        text: e,
                        fn: h
                    }), this.index += 3) : g ? (this.tokens.push({
                        index: this.index,
                        text: d,
                        fn: g
                    }), this.index += 2) : f ? (this.tokens.push({
                        index: this.index,
                        text: this.ch,
                        fn: f,
                        json: this.was("[,:") && this.is("+-")
                    }), this.index += 1) : this.throwError("Unexpected next character ", this.index, this.index + 1);
                }
                this.lastCh = this.ch;
            }
            return this.tokens;
        },
        is: function(a) {
            return -1 !== a.indexOf(this.ch);
        },
        was: function(a) {
            return -1 !== a.indexOf(this.lastCh);
        },
        peek: function(a) {
            a = a || 1;
            return this.index + a < this.text.length ? this.text.charAt(this.index + a) : !1;
        },
        isNumber: function(a) {
            return "0" <= a && "9" >= a;
        },
        isWhitespace: function(a) {
            return " " === a || "\r" === a || "	" === a || "\n" === a || "" === a || " " === a;
        },
        isIdent: function(a) {
            return "a" <= a && "z" >= a || "A" <= a && "Z" >= a || "_" === a || "$" === a;
        },
        isExpOperator: function(a) {
            return "-" === a || "+" === a || this.isNumber(a);
        },
        throwError: function(a, b, c) {
            c = c || this.index;
            b = s(b) ? "s " + b + "-" + this.index + " [" + this.text.substring(b, c) + "]" : " " + c;
            throw td("lexerr", a, b, this.text);
        },
        readNumber: function() {
            for (var a = "", b = this.index; this.index < this.text.length; ) {
                var c = Gc(this.text.charAt(this.index));
                if ("." == c || this.isNumber(c)) a += c; else {
                    var d = this.peek();
                    if ("e" == c && this.isExpOperator(d)) a += c; else if (this.isExpOperator(c) && d && this.isNumber(d) && "e" == a.charAt(a.length - 1)) a += c; else if (!this.isExpOperator(c) || d && this.isNumber(d) || "e" != a.charAt(a.length - 1)) break; else this.throwError("Invalid exponent");
                }
                this.index++;
            }
            a *= 1;
            this.tokens.push({
                index: b,
                text: a,
                json: !0,
                fn: function() {
                    return a;
                }
            });
        },
        readIdent: function() {
            for (var a = this, b = "", c = this.index, d, e, f, g; this.index < this.text.length; ) {
                g = this.text.charAt(this.index);
                if ("." === g || this.isIdent(g) || this.isNumber(g)) "." === g && (d = this.index), 
                b += g; else break;
                this.index++;
            }
            if (d) for (e = this.index; e < this.text.length; ) {
                g = this.text.charAt(e);
                if ("(" === g) {
                    f = b.substr(d - c + 1);
                    b = b.substr(0, d - c);
                    this.index = e;
                    break;
                }
                if (this.isWhitespace(g)) e++; else break;
            }
            c = {
                index: c,
                text: b
            };
            if (wd.hasOwnProperty(b)) c.fn = wd[b], c.json = wd[b]; else {
                var h = cc(b, this.options, this.text);
                c.fn = l(function(a, b) {
                    return h(a, b);
                }, {
                    assign: function(c, d) {
                        return ac(c, b, d, a.text, a.options);
                    }
                });
            }
            this.tokens.push(c);
            f && (this.tokens.push({
                index: d,
                text: ".",
                json: !1
            }), this.tokens.push({
                index: d + 1,
                text: f,
                json: !1
            }));
        },
        readString: function(a) {
            var b = this.index;
            this.index++;
            for (var c = "", d = a, e = !1; this.index < this.text.length; ) {
                var f = this.text.charAt(this.index), d = d + f;
                if (e) "u" === f ? (f = this.text.substring(this.index + 1, this.index + 5), f.match(/[\da-f]{4}/i) || this.throwError("Invalid unicode escape [\\u" + f + "]"), 
                this.index += 4, c += String.fromCharCode(parseInt(f, 16))) : c = (e = xd[f]) ? c + e : c + f, 
                e = !1; else if ("\\" === f) e = !0; else {
                    if (f === a) {
                        this.index++;
                        this.tokens.push({
                            index: b,
                            text: d,
                            string: c,
                            json: !0,
                            fn: function() {
                                return c;
                            }
                        });
                        return;
                    }
                    c += f;
                }
                this.index++;
            }
            this.throwError("Unterminated quote", b);
        }
    };
    var zd = function(a, b, c) {
        this.lexer = a;
        this.$filter = b;
        this.options = c;
    };
    zd.ZERO = function() {
        return 0;
    };
    zd.prototype = {
        constructor: zd,
        parse: function(a, b) {
            this.text = a;
            this.json = b;
            this.tokens = this.lexer.lex(a);
            b && (this.assignment = this.logicalOR, this.functionCall = this.fieldAccess = this.objectIndex = this.filterChain = function() {
                this.throwError("is not valid json", {
                    text: a,
                    index: 0
                });
            });
            var c = b ? this.primary() : this.statements();
            0 !== this.tokens.length && this.throwError("is an unexpected token", this.tokens[0]);
            c.literal = !!c.literal;
            c.constant = !!c.constant;
            return c;
        },
        primary: function() {
            var a;
            if (this.expect("(")) a = this.filterChain(), this.consume(")"); else if (this.expect("[")) a = this.arrayDeclaration(); else if (this.expect("{")) a = this.object(); else {
                var b = this.expect();
                (a = b.fn) || this.throwError("not a primary expression", b);
                b.json && (a.constant = !0, a.literal = !0);
            }
            for (var c; b = this.expect("(", "[", "."); ) "(" === b.text ? (a = this.functionCall(a, c), 
            c = null) : "[" === b.text ? (c = a, a = this.objectIndex(a)) : "." === b.text ? (c = a, 
            a = this.fieldAccess(a)) : this.throwError("IMPOSSIBLE");
            return a;
        },
        throwError: function(a, b) {
            throw td("syntax", b.text, a, b.index + 1, this.text, this.text.substring(b.index));
        },
        peekToken: function() {
            if (0 === this.tokens.length) throw td("ueoe", this.text);
            return this.tokens[0];
        },
        peek: function(a, b, c, d) {
            if (0 < this.tokens.length) {
                var e = this.tokens[0], f = e.text;
                if (f === a || f === b || f === c || f === d || !(a || b || c || d)) return e;
            }
            return !1;
        },
        expect: function(a, b, c, d) {
            return (a = this.peek(a, b, c, d)) ? (this.json && !a.json && this.throwError("is not valid json", a), 
            this.tokens.shift(), a) : !1;
        },
        consume: function(a) {
            this.expect(a) || this.throwError("is unexpected, expecting [" + a + "]", this.peek());
        },
        unaryFn: function(a, b) {
            return l(function(c, d) {
                return a(c, d, b);
            }, {
                constant: b.constant
            });
        },
        ternaryFn: function(a, b, c) {
            return l(function(d, e) {
                return a(d, e) ? b(d, e) : c(d, e);
            }, {
                constant: a.constant && b.constant && c.constant
            });
        },
        binaryFn: function(a, b, c) {
            return l(function(d, e) {
                return b(d, e, a, c);
            }, {
                constant: a.constant && c.constant
            });
        },
        statements: function() {
            for (var a = []; ;) if (0 < this.tokens.length && !this.peek("}", ")", ";", "]") && a.push(this.filterChain()), 
            !this.expect(";")) return 1 === a.length ? a[0] : function(b, c) {
                for (var d, e = 0; e < a.length; e++) {
                    var f = a[e];
                    f && (d = f(b, c));
                }
                return d;
            };
        },
        filterChain: function() {
            for (var a = this.expression(), b; ;) if (b = this.expect("|")) a = this.binaryFn(a, b.fn, this.filter()); else return a;
        },
        filter: function() {
            for (var a = this.expect(), b = this.$filter(a.text), c = []; ;) if (a = this.expect(":")) c.push(this.expression()); else {
                var d = function(a, d, e) {
                    e = [ e ];
                    for (var f = 0; f < c.length; f++) e.push(c[f](a, d));
                    return b.apply(a, e);
                };
                return function() {
                    return d;
                };
            }
        },
        expression: function() {
            return this.assignment();
        },
        assignment: function() {
            var a = this.ternary(), b, c;
            return (c = this.expect("=")) ? (a.assign || this.throwError("implies assignment but [" + this.text.substring(0, c.index) + "] can not be assigned to", c), 
            b = this.ternary(), function(c, d) {
                return a.assign(c, b(c, d), d);
            }) : a;
        },
        ternary: function() {
            var a = this.logicalOR(), b, c;
            if (this.expect("?")) {
                b = this.ternary();
                if (c = this.expect(":")) return this.ternaryFn(a, b, this.ternary());
                this.throwError("expected :", c);
            } else return a;
        },
        logicalOR: function() {
            for (var a = this.logicalAND(), b; ;) if (b = this.expect("||")) a = this.binaryFn(a, b.fn, this.logicalAND()); else return a;
        },
        logicalAND: function() {
            var a = this.equality(), b;
            if (b = this.expect("&&")) a = this.binaryFn(a, b.fn, this.logicalAND());
            return a;
        },
        equality: function() {
            var a = this.relational(), b;
            if (b = this.expect("==", "!=", "===", "!==")) a = this.binaryFn(a, b.fn, this.equality());
            return a;
        },
        relational: function() {
            var a = this.additive(), b;
            if (b = this.expect("<", ">", "<=", ">=")) a = this.binaryFn(a, b.fn, this.relational());
            return a;
        },
        additive: function() {
            for (var a = this.multiplicative(), b; b = this.expect("+", "-"); ) a = this.binaryFn(a, b.fn, this.multiplicative());
            return a;
        },
        multiplicative: function() {
            for (var a = this.unary(), b; b = this.expect("*", "/", "%"); ) a = this.binaryFn(a, b.fn, this.unary());
            return a;
        },
        unary: function() {
            var a;
            return this.expect("+") ? this.primary() : (a = this.expect("-")) ? this.binaryFn(zd.ZERO, a.fn, this.unary()) : (a = this.expect("!")) ? this.unaryFn(a.fn, this.unary()) : this.primary();
        },
        fieldAccess: function(a) {
            var b = this, c = this.expect().text, d = cc(c, this.options, this.text);
            return l(function(b, c, e) {
                return d(e || a(b, c), c);
            }, {
                assign: function(d, e, f) {
                    return ac(a(d, f), c, e, b.text, b.options);
                }
            });
        },
        objectIndex: function(a) {
            var b = this, d = this.expression();
            this.consume("]");
            return l(function(e, f) {
                var g = a(e, f), h = d(e, f), i;
                if (!g) return c;
                (g = _b(g[h], b.text)) && g.then && b.options.unwrapPromises && (i = g, "$$v" in g || (i.$$v = c, 
                i.then(function(a) {
                    i.$$v = a;
                })), g = g.$$v);
                return g;
            }, {
                assign: function(c, e, f) {
                    var g = d(c, f);
                    return _b(a(c, f), b.text)[g] = e;
                }
            });
        },
        functionCall: function(a, b) {
            var c = [];
            if (")" !== this.peekToken().text) {
                do c.push(this.expression()); while (this.expect(","));
            }
            this.consume(")");
            var d = this;
            return function(e, f) {
                for (var g = [], h = b ? b(e, f) : e, i = 0; i < c.length; i++) g.push(c[i](e, f));
                i = a(e, f, h) || o;
                _b(i, d.text);
                g = i.apply ? i.apply(h, g) : i(g[0], g[1], g[2], g[3], g[4]);
                return _b(g, d.text);
            };
        },
        arrayDeclaration: function() {
            var a = [], b = !0;
            if ("]" !== this.peekToken().text) {
                do {
                    var c = this.expression();
                    a.push(c);
                    c.constant || (b = !1);
                } while (this.expect(","));
            }
            this.consume("]");
            return l(function(b, c) {
                for (var d = [], e = 0; e < a.length; e++) d.push(a[e](b, c));
                return d;
            }, {
                literal: !0,
                constant: b
            });
        },
        object: function() {
            var a = [], b = !0;
            if ("}" !== this.peekToken().text) {
                do {
                    var c = this.expect(), c = c.string || c.text;
                    this.consume(":");
                    var d = this.expression();
                    a.push({
                        key: c,
                        value: d
                    });
                    d.constant || (b = !1);
                } while (this.expect(","));
            }
            this.consume("}");
            return l(function(b, c) {
                for (var d = {}, e = 0; e < a.length; e++) {
                    var f = a[e];
                    d[f.key] = f.value(b, c);
                }
                return d;
            }, {
                literal: !0,
                constant: b
            });
        }
    };
    var Ad = {}, Bd = d("$sce"), Cd = {
        HTML: "html",
        CSS: "css",
        URL: "url",
        RESOURCE_URL: "resourceUrl",
        JS: "js"
    }, Dd = b.createElement("a"), Ed = nc(a.location.href, !0);
    qc.$inject = [ "$provide" ];
    sc.$inject = [ "$locale" ];
    tc.$inject = [ "$locale" ];
    var Fd = ".", Gd = {
        yyyy: wc("FullYear", 4),
        yy: wc("FullYear", 2, 0, !0),
        y: wc("FullYear", 1),
        MMMM: xc("Month"),
        MMM: xc("Month", !0),
        MM: wc("Month", 2, 1),
        M: wc("Month", 1, 1),
        dd: wc("Date", 2),
        d: wc("Date", 1),
        HH: wc("Hours", 2),
        H: wc("Hours", 1),
        hh: wc("Hours", 2, -12),
        h: wc("Hours", 1, -12),
        mm: wc("Minutes", 2),
        m: wc("Minutes", 1),
        ss: wc("Seconds", 2),
        s: wc("Seconds", 1),
        sss: wc("Milliseconds", 3),
        EEEE: xc("Day"),
        EEE: xc("Day", !0),
        a: function(a, b) {
            return 12 > a.getHours() ? b.AMPMS[0] : b.AMPMS[1];
        },
        Z: function(a) {
            a = -1 * a.getTimezoneOffset();
            return a = (0 <= a ? "+" : "") + (vc(Math[0 < a ? "floor" : "ceil"](a / 60), 2) + vc(Math.abs(a % 60), 2));
        }
    }, Hd = /((?:[^yMdHhmsaZE']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|d+|H+|h+|m+|s+|a|Z))(.*)/, Id = /^\-?\d+$/;
    yc.$inject = [ "$locale" ];
    var Jd = q(Gc), Kd = q(Hc);
    Bc.$inject = [ "$parse" ];
    var Ld = q({
        restrict: "E",
        compile: function(a, c) {
            8 >= Ic && (c.href || c.name || c.$set("href", ""), a.append(b.createComment("IE fix")));
            return function(a, b) {
                b.on("click", function(a) {
                    b.attr("href") || a.preventDefault();
                });
            };
        }
    }), Md = {};
    f(dd, function(a, b) {
        if ("multiple" != a) {
            var c = Ab("ng-" + b);
            Md[c] = function() {
                return {
                    priority: 100,
                    compile: function() {
                        return function(a, d, e) {
                            a.$watch(e[c], function(a) {
                                e.$set(b, !!a);
                            });
                        };
                    }
                };
            };
        }
    });
    f([ "src", "srcset", "href" ], function(a) {
        var b = Ab("ng-" + a);
        Md[b] = function() {
            return {
                priority: 99,
                link: function(c, d, e) {
                    e.$observe(b, function(b) {
                        b && (e.$set(a, b), Ic && d.prop(a, e[a]));
                    });
                }
            };
        };
    });
    var Nd = {
        $addControl: o,
        $removeControl: o,
        $setValidity: o,
        $setDirty: o,
        $setPristine: o
    };
    Dc.$inject = [ "$element", "$attrs", "$scope" ];
    var Od = function(a) {
        return [ "$timeout", function(b) {
            return {
                name: "form",
                restrict: a ? "EAC" : "E",
                controller: Dc,
                compile: function() {
                    return {
                        pre: function(a, d, e, f) {
                            if (!e.action) {
                                var g = function(a) {
                                    a.preventDefault ? a.preventDefault() : a.returnValue = !1;
                                };
                                Zc(d[0], "submit", g);
                                d.on("$destroy", function() {
                                    b(function() {
                                        $c(d[0], "submit", g);
                                    }, 0, !1);
                                });
                            }
                            var h = d.parent().controller("form"), i = e.name || e.ngForm;
                            i && ac(a, i, f, i);
                            if (h) d.on("$destroy", function() {
                                h.$removeControl(f);
                                i && ac(a, i, c, i);
                                l(f, Nd);
                            });
                        }
                    };
                }
            };
        } ];
    }, Pd = Od(), Qd = Od(!0), Rd = /^(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?$/, Sd = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,6}$/, Td = /^\s*(\-|\+)?(\d+|(\d*(\.\d*)))\s*$/, Ud = {
        text: Ec,
        number: function(a, b, d, e, f, g) {
            Ec(a, b, d, e, f, g);
            e.$parsers.push(function(a) {
                var b = e.$isEmpty(a);
                if (b || Td.test(a)) return e.$setValidity("number", !0), "" === a ? null : b ? a : parseFloat(a);
                e.$setValidity("number", !1);
                return c;
            });
            e.$formatters.push(function(a) {
                return e.$isEmpty(a) ? "" : "" + a;
            });
            if (d.min) {
                var h = parseFloat(d.min);
                a = function(a) {
                    if (!e.$isEmpty(a) && a < h) return e.$setValidity("min", !1), c;
                    e.$setValidity("min", !0);
                    return a;
                };
                e.$parsers.push(a);
                e.$formatters.push(a);
            }
            if (d.max) {
                var i = parseFloat(d.max);
                d = function(a) {
                    if (!e.$isEmpty(a) && a > i) return e.$setValidity("max", !1), c;
                    e.$setValidity("max", !0);
                    return a;
                };
                e.$parsers.push(d);
                e.$formatters.push(d);
            }
            e.$formatters.push(function(a) {
                if (e.$isEmpty(a) || v(a)) return e.$setValidity("number", !0), a;
                e.$setValidity("number", !1);
                return c;
            });
        },
        url: function(a, b, d, e, f, g) {
            Ec(a, b, d, e, f, g);
            a = function(a) {
                if (e.$isEmpty(a) || Rd.test(a)) return e.$setValidity("url", !0), a;
                e.$setValidity("url", !1);
                return c;
            };
            e.$formatters.push(a);
            e.$parsers.push(a);
        },
        email: function(a, b, d, e, f, g) {
            Ec(a, b, d, e, f, g);
            a = function(a) {
                if (e.$isEmpty(a) || Sd.test(a)) return e.$setValidity("email", !0), a;
                e.$setValidity("email", !1);
                return c;
            };
            e.$formatters.push(a);
            e.$parsers.push(a);
        },
        radio: function(a, b, c, d) {
            r(c.name) && b.attr("name", j());
            b.on("click", function() {
                b[0].checked && a.$apply(function() {
                    d.$setViewValue(c.value);
                });
            });
            d.$render = function() {
                b[0].checked = c.value == d.$viewValue;
            };
            c.$observe("value", d.$render);
        },
        checkbox: function(a, b, c, d) {
            var e = c.ngTrueValue, f = c.ngFalseValue;
            u(e) || (e = !0);
            u(f) || (f = !1);
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
        },
        hidden: o,
        button: o,
        submit: o,
        reset: o
    }, Vd = [ "$browser", "$sniffer", function(a, b) {
        return {
            restrict: "E",
            require: "?ngModel",
            link: function(c, d, e, f) {
                f && (Ud[Gc(e.type)] || Ud.text)(c, d, e, f, b, a);
            }
        };
    } ], Wd = "ng-valid", Xd = "ng-invalid", Yd = "ng-pristine", Zd = "ng-dirty", $d = [ "$scope", "$exceptionHandler", "$attrs", "$element", "$parse", function(a, b, c, e, g) {
        function h(a, b) {
            b = b ? "-" + V(b, "-") : "";
            e.removeClass((a ? Xd : Wd) + b).addClass((a ? Wd : Xd) + b);
        }
        this.$modelValue = this.$viewValue = Number.NaN;
        this.$parsers = [];
        this.$formatters = [];
        this.$viewChangeListeners = [];
        this.$pristine = !0;
        this.$dirty = !1;
        this.$valid = !0;
        this.$invalid = !1;
        this.$name = c.name;
        var i = g(c.ngModel), j = i.assign;
        if (!j) throw d("ngModel")("nonassign", c.ngModel, N(e));
        this.$render = o;
        this.$isEmpty = function(a) {
            return r(a) || "" === a || null === a || a !== a;
        };
        var k = e.inheritedData("$formController") || Nd, l = 0, m = this.$error = {};
        e.addClass(Yd);
        h(!0);
        this.$setValidity = function(a, b) {
            m[a] !== !b && (b ? (m[a] && l--, l || (h(!0), this.$valid = !0, this.$invalid = !1)) : (h(!1), 
            this.$invalid = !0, this.$valid = !1, l++), m[a] = !b, h(b, a), k.$setValidity(a, b, this));
        };
        this.$setPristine = function() {
            this.$dirty = !1;
            this.$pristine = !0;
            e.removeClass(Zd).addClass(Yd);
        };
        this.$setViewValue = function(c) {
            this.$viewValue = c;
            this.$pristine && (this.$dirty = !0, this.$pristine = !1, e.removeClass(Yd).addClass(Zd), 
            k.$setDirty());
            f(this.$parsers, function(a) {
                c = a(c);
            });
            this.$modelValue !== c && (this.$modelValue = c, j(a, c), f(this.$viewChangeListeners, function(a) {
                try {
                    a();
                } catch (c) {
                    b(c);
                }
            }));
        };
        var n = this;
        a.$watch(function() {
            var b = i(a);
            if (n.$modelValue !== b) {
                var c = n.$formatters, d = c.length;
                for (n.$modelValue = b; d--; ) b = c[d](b);
                n.$viewValue !== b && (n.$viewValue = b, n.$render());
            }
        });
    } ], _d = function() {
        return {
            require: [ "ngModel", "^?form" ],
            controller: $d,
            link: function(a, b, c, d) {
                var e = d[0], f = d[1] || Nd;
                f.$addControl(e);
                b.on("$destroy", function() {
                    f.$removeControl(e);
                });
            }
        };
    }, ae = q({
        require: "ngModel",
        link: function(a, b, c, d) {
            d.$viewChangeListeners.push(function() {
                a.$eval(c.ngChange);
            });
        }
    }), be = function() {
        return {
            require: "?ngModel",
            link: function(a, b, c, d) {
                if (d) {
                    c.required = !0;
                    var e = function(a) {
                        if (c.required && d.$isEmpty(a)) d.$setValidity("required", !1); else return d.$setValidity("required", !0), 
                        a;
                    };
                    d.$formatters.push(e);
                    d.$parsers.unshift(e);
                    c.$observe("required", function() {
                        e(d.$viewValue);
                    });
                }
            }
        };
    }, ce = function() {
        return {
            require: "ngModel",
            link: function(a, b, d, e) {
                var g = (a = /\/(.*)\//.exec(d.ngList)) && RegExp(a[1]) || d.ngList || ",";
                e.$parsers.push(function(a) {
                    if (!r(a)) {
                        var b = [];
                        a && f(a.split(g), function(a) {
                            a && b.push(Tc(a));
                        });
                        return b;
                    }
                });
                e.$formatters.push(function(a) {
                    return x(a) ? a.join(", ") : c;
                });
                e.$isEmpty = function(a) {
                    return !a || !a.length;
                };
            }
        };
    }, de = /^(true|false|\d+)$/, ee = function() {
        return {
            priority: 100,
            compile: function(a, b) {
                return de.test(b.ngValue) ? function(a, b, c) {
                    c.$set("value", a.$eval(c.ngValue));
                } : function(a, b, c) {
                    a.$watch(c.ngValue, function(a) {
                        c.$set("value", a);
                    });
                };
            }
        };
    }, fe = Cc(function(a, b, d) {
        b.addClass("ng-binding").data("$binding", d.ngBind);
        a.$watch(d.ngBind, function(a) {
            b.text(a == c ? "" : a);
        });
    }), ge = [ "$interpolate", function(a) {
        return function(b, c, d) {
            b = a(c.attr(d.$attr.ngBindTemplate));
            c.addClass("ng-binding").data("$binding", b);
            d.$observe("ngBindTemplate", function(a) {
                c.text(a);
            });
        };
    } ], he = [ "$sce", "$parse", function(a, b) {
        return function(c, d, e) {
            d.addClass("ng-binding").data("$binding", e.ngBindHtml);
            var f = b(e.ngBindHtml);
            c.$watch(function() {
                return (f(c) || "").toString();
            }, function(b) {
                d.html(a.getTrustedHtml(f(c)) || "");
            });
        };
    } ], ie = Fc("", !0), je = Fc("Odd", 0), ke = Fc("Even", 1), le = Cc({
        compile: function(a, b) {
            b.$set("ngCloak", c);
            a.removeClass("ng-cloak");
        }
    }), me = [ function() {
        return {
            scope: !0,
            controller: "@"
        };
    } ], ne = [ "$sniffer", function(a) {
        return {
            priority: 1e3,
            compile: function() {
                a.csp = !0;
            }
        };
    } ], oe = {};
    f("click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave keydown keyup keypress submit focus blur copy cut paste".split(" "), function(a) {
        var b = Ab("ng-" + a);
        oe[b] = [ "$parse", function(c) {
            return function(d, e, f) {
                var g = c(f[b]);
                e.on(Gc(a), function(a) {
                    d.$apply(function() {
                        g(d, {
                            $event: a
                        });
                    });
                });
            };
        } ];
    });
    var pe = [ "$animate", function(a) {
        return {
            transclude: "element",
            priority: 600,
            terminal: !0,
            restrict: "A",
            compile: function(b, d, e) {
                return function(b, d, f) {
                    var g, h;
                    b.$watch(f.ngIf, function(f) {
                        g && (a.leave(g), g = c);
                        h && (h.$destroy(), h = c);
                        M(f) && (h = b.$new(), e(h, function(b) {
                            g = b;
                            a.enter(b, d.parent(), d);
                        }));
                    });
                };
            }
        };
    } ], qe = [ "$http", "$templateCache", "$anchorScroll", "$compile", "$animate", "$sce", function(a, b, c, d, e, f) {
        return {
            restrict: "ECA",
            priority: 400,
            terminal: !0,
            transclude: "element",
            compile: function(g, h, i) {
                var j = h.ngInclude || h.src, k = h.onload || "", l = h.autoscroll;
                return function(g, h) {
                    var m = 0, n, o, p = function() {
                        n && (n.$destroy(), n = null);
                        o && (e.leave(o), o = null);
                    };
                    g.$watch(f.parseAsResourceUrl(j), function(f) {
                        var j = ++m;
                        f ? (a.get(f, {
                            cache: b
                        }).success(function(a) {
                            if (j === m) {
                                var b = g.$new();
                                i(b, function(f) {
                                    p();
                                    n = b;
                                    o = f;
                                    o.html(a);
                                    e.enter(o, null, h);
                                    d(o.contents())(n);
                                    !s(l) || l && !g.$eval(l) || c();
                                    n.$emit("$includeContentLoaded");
                                    g.$eval(k);
                                });
                            }
                        }).error(function() {
                            j === m && p();
                        }), g.$emit("$includeContentRequested")) : p();
                    });
                };
            }
        };
    } ], re = Cc({
        compile: function() {
            return {
                pre: function(a, b, c) {
                    a.$eval(c.ngInit);
                }
            };
        }
    }), se = Cc({
        terminal: !0,
        priority: 1e3
    }), te = [ "$locale", "$interpolate", function(a, b) {
        var c = /{}/g;
        return {
            restrict: "EA",
            link: function(d, e, g) {
                var h = g.count, i = g.$attr.when && e.attr(g.$attr.when), j = g.offset || 0, k = d.$eval(i) || {}, l = {}, m = b.startSymbol(), n = b.endSymbol(), o = /^when(Minus)?(.+)$/;
                f(g, function(a, b) {
                    o.test(b) && (k[Gc(b.replace("when", "").replace("Minus", "-"))] = e.attr(g.$attr[b]));
                });
                f(k, function(a, d) {
                    l[d] = b(a.replace(c, m + h + "-" + j + n));
                });
                d.$watch(function() {
                    var b = parseFloat(d.$eval(h));
                    if (isNaN(b)) return "";
                    b in k || (b = a.pluralCat(b - j));
                    return l[b](d, e, !0);
                }, function(a) {
                    e.text(a);
                });
            }
        };
    } ], ue = [ "$parse", "$animate", function(a, c) {
        function g(a) {
            if (a.startNode === a.endNode) return Jc(a.startNode);
            var b = a.startNode, c = [ b ];
            do {
                b = b.nextSibling;
                if (!b) break;
                c.push(b);
            } while (b !== a.endNode);
            return Jc(c);
        }
        var h = d("ngRepeat");
        return {
            transclude: "element",
            priority: 1e3,
            terminal: !0,
            compile: function(d, i, j) {
                return function(d, i, k) {
                    var l = k.ngRepeat, m = l.match(/^\s*(.+)\s+in\s+(.*?)\s*(\s+track\s+by\s+(.+)\s*)?$/), n, o, p, q, r, s, t, u = {
                        $id: qb
                    };
                    if (!m) throw h("iexp", l);
                    k = m[1];
                    r = m[2];
                    (m = m[4]) ? (n = a(m), o = function(a, b, c) {
                        t && (u[t] = a);
                        u[s] = b;
                        u.$index = c;
                        return n(d, u);
                    }) : (p = function(a, b) {
                        return qb(b);
                    }, q = function(a) {
                        return a;
                    });
                    m = k.match(/^(?:([\$\w]+)|\(([\$\w]+)\s*,\s*([\$\w]+)\))$/);
                    if (!m) throw h("iidexp", k);
                    s = m[3] || m[1];
                    t = m[2];
                    var v = {};
                    d.$watchCollection(r, function(a) {
                        var k, m, n = i[0], r, u = {}, w, x, y, z, A, B, C = [];
                        if (e(a)) A = a, r = o || p; else {
                            r = o || q;
                            A = [];
                            for (y in a) a.hasOwnProperty(y) && "$" != y.charAt(0) && A.push(y);
                            A.sort();
                        }
                        w = A.length;
                        m = C.length = A.length;
                        for (k = 0; k < m; k++) if (y = a === A ? k : A[k], z = a[y], z = r(y, z, k), Y(z, "`track by` id"), 
                        v.hasOwnProperty(z)) B = v[z], delete v[z], u[z] = B, C[k] = B; else {
                            if (u.hasOwnProperty(z)) throw f(C, function(a) {
                                a && a.startNode && (v[a.id] = a);
                            }), h("dupes", l, z);
                            C[k] = {
                                id: z
                            };
                            u[z] = !1;
                        }
                        for (y in v) v.hasOwnProperty(y) && (B = v[y], k = g(B), c.leave(k), f(k, function(a) {
                            a.$$NG_REMOVED = !0;
                        }), B.scope.$destroy());
                        k = 0;
                        for (m = A.length; k < m; k++) {
                            y = a === A ? k : A[k];
                            z = a[y];
                            B = C[k];
                            C[k - 1] && (n = C[k - 1].endNode);
                            if (B.startNode) {
                                x = B.scope;
                                r = n;
                                do r = r.nextSibling; while (r && r.$$NG_REMOVED);
                                B.startNode != r && c.move(g(B), null, Jc(n));
                                n = B.endNode;
                            } else x = d.$new();
                            x[s] = z;
                            t && (x[t] = y);
                            x.$index = k;
                            x.$first = 0 === k;
                            x.$last = k === w - 1;
                            x.$middle = !(x.$first || x.$last);
                            x.$odd = !(x.$even = 0 == k % 2);
                            B.startNode || j(x, function(a) {
                                a[a.length++] = b.createComment(" end ngRepeat: " + l + " ");
                                c.enter(a, null, Jc(n));
                                n = a;
                                B.scope = x;
                                B.startNode = n && n.endNode ? n.endNode : a[0];
                                B.endNode = a[a.length - 1];
                                u[B.id] = B;
                            });
                        }
                        v = u;
                    });
                };
            }
        };
    } ], ve = [ "$animate", function(a) {
        return function(b, c, d) {
            b.$watch(d.ngShow, function(b) {
                a[M(b) ? "removeClass" : "addClass"](c, "ng-hide");
            });
        };
    } ], we = [ "$animate", function(a) {
        return function(b, c, d) {
            b.$watch(d.ngHide, function(b) {
                a[M(b) ? "addClass" : "removeClass"](c, "ng-hide");
            });
        };
    } ], xe = Cc(function(a, b, c) {
        a.$watch(c.ngStyle, function(a, c) {
            c && a !== c && f(c, function(a, c) {
                b.css(c, "");
            });
            a && b.css(a);
        }, !0);
    }), ye = [ "$animate", function(a) {
        return {
            restrict: "EA",
            require: "ngSwitch",
            controller: [ "$scope", function() {
                this.cases = {};
            } ],
            link: function(b, c, d, e) {
                var g, h, i = [];
                b.$watch(d.ngSwitch || d.on, function(c) {
                    for (var j = 0, k = i.length; j < k; j++) i[j].$destroy(), a.leave(h[j]);
                    h = [];
                    i = [];
                    if (g = e.cases["!" + c] || e.cases["?"]) b.$eval(d.change), f(g, function(c) {
                        var d = b.$new();
                        i.push(d);
                        c.transclude(d, function(b) {
                            var d = c.element;
                            h.push(b);
                            a.enter(b, d.parent(), d);
                        });
                    });
                });
            }
        };
    } ], ze = Cc({
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
    }), Ae = Cc({
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
    }), Be = Cc({
        controller: [ "$element", "$transclude", function(a, b) {
            if (!b) throw d("ngTransclude")("orphan", N(a));
            this.$transclude = b;
        } ],
        link: function(a, b, c, d) {
            d.$transclude(function(a) {
                b.html("");
                b.append(a);
            });
        }
    }), Ce = [ "$templateCache", function(a) {
        return {
            restrict: "E",
            terminal: !0,
            compile: function(b, c) {
                "text/ng-template" == c.type && a.put(c.id, b[0].text);
            }
        };
    } ], De = d("ngOptions"), Ee = q({
        terminal: !0
    }), Fe = [ "$compile", "$parse", function(a, d) {
        var e = /^\s*(.*?)(?:\s+as\s+(.*?))?(?:\s+group\s+by\s+(.*))?\s+for\s+(?:([\$\w][\$\w]*)|(?:\(\s*([\$\w][\$\w]*)\s*,\s*([\$\w][\$\w]*)\s*\)))\s+in\s+(.*?)(?:\s+track\s+by\s+(.*?))?$/, h = {
            $setViewValue: o
        };
        return {
            restrict: "E",
            require: [ "select", "?ngModel" ],
            controller: [ "$element", "$scope", "$attrs", function(a, b, c) {
                var d = this, e = {}, f = h, g;
                d.databound = c.ngModel;
                d.init = function(a, b, c) {
                    f = a;
                    g = c;
                };
                d.addOption = function(b) {
                    Y(b, '"option value"');
                    e[b] = !0;
                    f.$viewValue == b && (a.val(b), g.parent() && g.remove());
                };
                d.removeOption = function(a) {
                    this.hasOption(a) && (delete e[a], f.$viewValue == a && this.renderUnknownOption(a));
                };
                d.renderUnknownOption = function(b) {
                    b = "? " + qb(b) + " ?";
                    g.val(b);
                    a.prepend(g);
                    a.val(b);
                    g.prop("selected", !0);
                };
                d.hasOption = function(a) {
                    return e.hasOwnProperty(a);
                };
                b.$on("$destroy", function() {
                    d.renderUnknownOption = o;
                });
            } ],
            link: function(h, i, j, k) {
                function l(a, b, c, d) {
                    c.$render = function() {
                        var a = c.$viewValue;
                        d.hasOption(a) ? (z.parent() && z.remove(), b.val(a), "" === a && v.prop("selected", !0)) : r(a) && v ? b.val("") : d.renderUnknownOption(a);
                    };
                    b.on("change", function() {
                        a.$apply(function() {
                            z.parent() && z.remove();
                            c.$setViewValue(b.val());
                        });
                    });
                }
                function m(a, b, c) {
                    var d;
                    c.$render = function() {
                        var a = new rb(c.$viewValue);
                        f(b.find("option"), function(b) {
                            b.selected = s(a.get(b.value));
                        });
                    };
                    a.$watch(function() {
                        H(d, c.$viewValue) || (d = F(c.$viewValue), c.$render());
                    });
                    b.on("change", function() {
                        a.$apply(function() {
                            var a = [];
                            f(b.find("option"), function(b) {
                                b.selected && a.push(b.value);
                            });
                            c.$setViewValue(a);
                        });
                    });
                }
                function n(b, f, h) {
                    function i() {
                        var a = {
                            "": []
                        }, d = [ "" ], e, i, j, t, v;
                        t = h.$modelValue;
                        v = p(b) || [];
                        var z = m ? g(v) : v, A, B, C;
                        B = {};
                        j = !1;
                        var D, E;
                        if (q) if (r && x(t)) for (j = new rb([]), C = 0; C < t.length; C++) B[l] = t[C], 
                        j.put(r(b, B), t[C]); else j = new rb(t);
                        for (C = 0; A = z.length, C < A; C++) {
                            i = C;
                            if (m) {
                                i = z[C];
                                if ("$" === i.charAt(0)) continue;
                                B[m] = i;
                            }
                            B[l] = v[i];
                            e = n(b, B) || "";
                            (i = a[e]) || (i = a[e] = [], d.push(e));
                            q ? e = j.remove(r ? r(b, B) : o(b, B)) !== c : (r ? (e = {}, e[l] = t, e = r(b, e) === r(b, B)) : e = t === o(b, B), 
                            j = j || e);
                            D = k(b, B);
                            D = D === c ? "" : D;
                            i.push({
                                id: r ? r(b, B) : m ? z[C] : C,
                                label: D,
                                selected: e
                            });
                        }
                        q || (u || null === t ? a[""].unshift({
                            id: "",
                            label: "",
                            selected: !j
                        }) : j || a[""].unshift({
                            id: "?",
                            label: "",
                            selected: !0
                        }));
                        B = 0;
                        for (z = d.length; B < z; B++) {
                            e = d[B];
                            i = a[e];
                            s.length <= B ? (t = {
                                element: y.clone().attr("label", e),
                                label: i.label
                            }, v = [ t ], s.push(v), f.append(t.element)) : (v = s[B], t = v[0], t.label != e && t.element.attr("label", t.label = e));
                            D = null;
                            C = 0;
                            for (A = i.length; C < A; C++) j = i[C], (e = v[C + 1]) ? (D = e.element, e.label !== j.label && D.text(e.label = j.label), 
                            e.id !== j.id && D.val(e.id = j.id), D[0].selected !== j.selected && D.prop("selected", e.selected = j.selected)) : ("" === j.id && u ? E = u : (E = w.clone()).val(j.id).attr("selected", j.selected).text(j.label), 
                            v.push({
                                element: E,
                                label: j.label,
                                id: j.id,
                                selected: j.selected
                            }), D ? D.after(E) : t.element.append(E), D = E);
                            for (C++; v.length > C; ) v.pop().element.remove();
                        }
                        for (;s.length > B; ) s.pop()[0].element.remove();
                    }
                    var j;
                    if (!(j = t.match(e))) throw De("iexp", t, N(f));
                    var k = d(j[2] || j[1]), l = j[4] || j[6], m = j[5], n = d(j[3] || ""), o = d(j[2] ? j[1] : l), p = d(j[7]), r = j[8] ? d(j[8]) : null, s = [ [ {
                        element: f,
                        label: ""
                    } ] ];
                    u && (a(u)(b), u.removeClass("ng-scope"), u.remove());
                    f.html("");
                    f.on("change", function() {
                        b.$apply(function() {
                            var a, d = p(b) || [], e = {}, g, i, j, k, n, t, u;
                            if (q) for (i = [], k = 0, t = s.length; k < t; k++) for (a = s[k], j = 1, n = a.length; j < n; j++) {
                                if ((g = a[j].element)[0].selected) {
                                    g = g.val();
                                    m && (e[m] = g);
                                    if (r) for (u = 0; u < d.length && (e[l] = d[u], r(b, e) != g); u++) ; else e[l] = d[g];
                                    i.push(o(b, e));
                                }
                            } else if (g = f.val(), "?" == g) i = c; else if ("" == g) i = null; else if (r) for (u = 0; u < d.length; u++) {
                                if (e[l] = d[u], r(b, e) == g) {
                                    i = o(b, e);
                                    break;
                                }
                            } else e[l] = d[g], m && (e[m] = g), i = o(b, e);
                            h.$setViewValue(i);
                        });
                    });
                    h.$render = i;
                    b.$watch(i);
                }
                if (k[1]) {
                    var o = k[0], p = k[1], q = j.multiple, t = j.ngOptions, u = !1, v, w = Jc(b.createElement("option")), y = Jc(b.createElement("optgroup")), z = w.clone();
                    k = 0;
                    for (var A = i.children(), B = A.length; k < B; k++) if ("" == A[k].value) {
                        v = u = A.eq(k);
                        break;
                    }
                    o.init(p, u, z);
                    if (q && (j.required || j.ngRequired)) {
                        var C = function(a) {
                            p.$setValidity("required", !j.required || a && a.length);
                            return a;
                        };
                        p.$parsers.push(C);
                        p.$formatters.unshift(C);
                        j.$observe("required", function() {
                            C(p.$viewValue);
                        });
                    }
                    t ? n(h, i, p) : q ? m(h, i, p) : l(h, i, p, o);
                }
            }
        };
    } ], Ge = [ "$interpolate", function(a) {
        var b = {
            addOption: o,
            removeOption: o
        };
        return {
            restrict: "E",
            priority: 100,
            compile: function(c, d) {
                if (r(d.value)) {
                    var e = a(c.text(), !0);
                    e || d.$set("value", c.text());
                }
                return function(a, c, d) {
                    var f = c.parent(), g = f.data("$selectController") || f.parent().data("$selectController");
                    g && g.databound ? c.prop("selected", !1) : g = b;
                    e ? a.$watch(e, function(a, b) {
                        d.$set("value", a);
                        a !== b && g.removeOption(b);
                        g.addOption(a);
                    }) : g.addOption(d.value);
                    c.on("$destroy", function() {
                        g.removeOption(d.value);
                    });
                };
            }
        };
    } ], He = q({
        restrict: "E",
        terminal: !0
    });
    (Kc = a.jQuery) ? (Jc = Kc, l(Kc.fn, {
        scope: cd.scope,
        controller: cd.controller,
        injector: cd.injector,
        inheritedData: cd.inheritedData
    }), ab("remove", !0, !0, !1), ab("empty", !1, !1, !1), ab("html", !1, !1, !0)) : Jc = bb;
    Pc.element = Jc;
    (function(b) {
        l(b, {
            bootstrap: U,
            copy: F,
            extend: l,
            equals: H,
            element: Jc,
            forEach: f,
            injector: tb,
            noop: o,
            bind: I,
            toJson: K,
            fromJson: L,
            identity: p,
            isUndefined: r,
            isDefined: s,
            isString: u,
            isFunction: y,
            isObject: t,
            isNumber: v,
            isElement: B,
            isArray: x,
            $$minErr: d,
            version: Vc,
            isDate: w,
            lowercase: Gc,
            uppercase: Hc,
            callbacks: {
                counter: 0
            }
        });
        Qc = $(a);
        try {
            Qc("ngLocale");
        } catch (c) {
            Qc("ngLocale", []).provider("$locale", Mb);
        }
        Qc("ng", [ "ngLocale" ], [ "$provide", function(a) {
            a.provider("$compile", zb).directive({
                a: Ld,
                input: Vd,
                textarea: Vd,
                form: Pd,
                script: Ce,
                select: Fe,
                style: He,
                option: Ge,
                ngBind: fe,
                ngBindHtml: he,
                ngBindTemplate: ge,
                ngClass: ie,
                ngClassEven: ke,
                ngClassOdd: je,
                ngCsp: ne,
                ngCloak: le,
                ngController: me,
                ngForm: Qd,
                ngHide: we,
                ngIf: pe,
                ngInclude: qe,
                ngInit: re,
                ngNonBindable: se,
                ngPluralize: te,
                ngRepeat: ue,
                ngShow: ve,
                ngStyle: xe,
                ngSwitch: ye,
                ngSwitchWhen: ze,
                ngSwitchDefault: Ae,
                ngOptions: Ee,
                ngTransclude: Be,
                ngModel: _d,
                ngList: ce,
                ngChange: ae,
                required: be,
                ngRequired: be,
                ngValue: ee
            }).directive(Md).directive(oe);
            a.provider({
                $anchorScroll: ub,
                $animate: ld,
                $browser: wb,
                $cacheFactory: xb,
                $controller: Bb,
                $document: Cb,
                $exceptionHandler: Db,
                $filter: qc,
                $interpolate: Kb,
                $interval: Lb,
                $http: Hb,
                $httpBackend: Ib,
                $location: Yb,
                $log: Zb,
                $parse: dc,
                $rootScope: gc,
                $q: ec,
                $sce: kc,
                $sceDelegate: jc,
                $sniffer: lc,
                $templateCache: yb,
                $timeout: mc,
                $window: pc
            });
        } ]);
    })(Pc);
    Jc(b).ready(function() {
        T(b, U);
    });
})(window, document);

angular.element(document).find("head").prepend('<style type="text/css">@charset "UTF-8";[ng\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak,.ng-hide{display:none !important;}ng\\:form{display:block;}</style>');

(function(a, b, c) {
    "use strict";
    function d(a, b, c, d, e) {
        return {
            restrict: "ECA",
            terminal: !0,
            priority: 400,
            transclude: "element",
            compile: function(f, g, h) {
                return function(f, g, i) {
                    function j() {
                        l && (l.$destroy(), l = null);
                        m && (e.leave(m), m = null);
                    }
                    function k() {
                        var i = a.current && a.current.locals, k = i && i.$template;
                        if (k) {
                            var o = f.$new();
                            h(o, function(f) {
                                j();
                                f.html(k);
                                e.enter(f, null, g);
                                var h = c(f.contents()), p = a.current;
                                l = p.scope = o;
                                m = f;
                                if (p.controller) {
                                    i.$scope = l;
                                    var q = d(p.controller, i);
                                    p.controllerAs && (l[p.controllerAs] = q);
                                    f.data("$ngControllerController", q);
                                    f.children().data("$ngControllerController", q);
                                }
                                h(l);
                                l.$emit("$viewContentLoaded");
                                l.$eval(n);
                                b();
                            });
                        } else j();
                    }
                    var l, m, n = i.onload || "";
                    f.$on("$routeChangeSuccess", k);
                    k();
                };
            }
        };
    }
    a = b.module("ngRoute", [ "ng" ]).provider("$route", function() {
        function a(a, c) {
            return b.extend(new (b.extend(function() {}, {
                prototype: a
            }))(), c);
        }
        function c(a, b) {
            var c = b.caseInsensitiveMatch, d = {
                originalPath: a,
                regexp: a
            }, e = d.keys = [];
            a = a.replace(/([().])/g, "\\$1").replace(/(\/)?:(\w+)([\?|\*])?/g, function(a, b, c, d) {
                a = "?" === d ? d : null;
                d = "*" === d ? d : null;
                e.push({
                    name: c,
                    optional: !!a
                });
                b = b || "";
                return "" + (a ? "" : b) + "(?:" + (a ? b : "") + (d && "(.+?)" || "([^/]+)") + (a || "") + ")" + (a || "");
            }).replace(/([\/$\*])/g, "\\$1");
            d.regexp = RegExp("^" + a + "$", c ? "i" : "");
            return d;
        }
        var d = {};
        this.when = function(a, e) {
            d[a] = b.extend({
                reloadOnSearch: !0
            }, e, a && c(a, e));
            if (a) {
                var f = "/" == a[a.length - 1] ? a.substr(0, a.length - 1) : a + "/";
                d[f] = b.extend({
                    redirectTo: a
                }, c(f, e));
            }
            return this;
        };
        this.otherwise = function(a) {
            this.when(null, a);
            return this;
        };
        this.$get = [ "$rootScope", "$location", "$routeParams", "$q", "$injector", "$http", "$templateCache", "$sce", function(c, e, f, g, h, i, j, k) {
            function l() {
                var a = m(), d = p.current;
                if (a && d && a.$$route === d.$$route && b.equals(a.pathParams, d.pathParams) && !a.reloadOnSearch && !o) d.params = a.params, 
                b.copy(d.params, f), c.$broadcast("$routeUpdate", d); else if (a || d) o = !1, c.$broadcast("$routeChangeStart", a, d), 
                (p.current = a) && a.redirectTo && (b.isString(a.redirectTo) ? e.path(n(a.redirectTo, a.params)).search(a.params).replace() : e.url(a.redirectTo(a.pathParams, e.path(), e.search())).replace()), 
                g.when(a).then(function() {
                    if (a) {
                        var c = b.extend({}, a.resolve), d, e;
                        b.forEach(c, function(a, d) {
                            c[d] = b.isString(a) ? h.get(a) : h.invoke(a);
                        });
                        b.isDefined(d = a.template) ? b.isFunction(d) && (d = d(a.params)) : b.isDefined(e = a.templateUrl) && (b.isFunction(e) && (e = e(a.params)), 
                        e = k.getTrustedResourceUrl(e), b.isDefined(e) && (a.loadedTemplateUrl = e, d = i.get(e, {
                            cache: j
                        }).then(function(a) {
                            return a.data;
                        })));
                        b.isDefined(d) && (c.$template = d);
                        return g.all(c);
                    }
                }).then(function(e) {
                    a == p.current && (a && (a.locals = e, b.copy(a.params, f)), c.$broadcast("$routeChangeSuccess", a, d));
                }, function(b) {
                    a == p.current && c.$broadcast("$routeChangeError", a, d, b);
                });
            }
            function m() {
                var c, f;
                b.forEach(d, function(d, g) {
                    var h;
                    if (h = !f) {
                        var i = e.path();
                        h = d.keys;
                        var j = {};
                        if (d.regexp) if (i = d.regexp.exec(i)) {
                            for (var k = 1, l = i.length; k < l; ++k) {
                                var m = h[k - 1], n = "string" == typeof i[k] ? decodeURIComponent(i[k]) : i[k];
                                m && n && (j[m.name] = n);
                            }
                            h = j;
                        } else h = null; else h = null;
                        h = c = h;
                    }
                    h && (f = a(d, {
                        params: b.extend({}, e.search(), c),
                        pathParams: c
                    }), f.$$route = d);
                });
                return f || d[null] && a(d[null], {
                    params: {},
                    pathParams: {}
                });
            }
            function n(a, c) {
                var d = [];
                b.forEach((a || "").split(":"), function(a, b) {
                    if (0 === b) d.push(a); else {
                        var e = a.match(/(\w+)(.*)/), f = e[1];
                        d.push(c[f]);
                        d.push(e[2] || "");
                        delete c[f];
                    }
                });
                return d.join("");
            }
            var o = !1, p = {
                routes: d,
                reload: function() {
                    o = !0;
                    c.$evalAsync(l);
                }
            };
            c.$on("$locationChangeSuccess", l);
            return p;
        } ];
    });
    a.provider("$routeParams", function() {
        this.$get = function() {
            return {};
        };
    });
    a.directive("ngView", d);
    d.$inject = [ "$route", "$anchorScroll", "$compile", "$controller", "$animate" ];
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