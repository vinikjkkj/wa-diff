__d(
  "CometRouteMatch",
  [
    "ConstUriUtils",
    "getCometRouteKey",
    "normalizeCometRouterUrl",
    "react-compiler-runtime",
    "useCurrentRoute",
    "useHostedRoute",
    "useParentRoute",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = function () {
      return !1;
    };
    function s(t, n) {
      return t == null
        ? e
        : function (e) {
            return n(e, t);
          };
    }
    function u(e, t) {
      return (
        e != null &&
        t != null &&
        r("normalizeCometRouterUrl")(e) === r("normalizeCometRouterUrl")(t)
      );
    }
    function c(e, t) {
      var n, r;
      return (
        e != null &&
        t != null &&
        u(
          (n = o("ConstUriUtils").getUri(e)) == null ? void 0 : n.getPath(),
          (r = o("ConstUriUtils").getUri(t)) == null ? void 0 : r.getPath(),
        )
      );
    }
    var d = function (t, n) {
        return r("getCometRouteKey")(t) === r("getCometRouteKey")(n);
      },
      m = function (t, n) {
        return u(t, n.url);
      },
      p = function (t, n) {
        return c(t, n.url);
      },
      _ = function (t, n) {
        var e;
        return c(t, (e = n.canonicalUrl) != null ? e : n.url);
      },
      f = {
        canonicalPathMatchFunction: _,
        pathMatchFunction: p,
        routeMatchFunction: d,
        urlMatchFunction: m,
      };
    function g(e) {
      var t = o("react-compiler-runtime").c(3),
        n = r("useCurrentRoute")(),
        a;
      return (
        t[0] !== e || t[1] !== n
          ? ((a = s(n, e)), (t[0] = e), (t[1] = n), (t[2] = a))
          : (a = t[2]),
        a
      );
    }
    function h(e) {
      var t = o("react-compiler-runtime").c(3),
        n = r("useHostedRoute")(),
        a;
      return (
        t[0] !== e || t[1] !== n
          ? ((a = s(n, e)), (t[0] = e), (t[1] = n), (t[2] = a))
          : (a = t[2]),
        a
      );
    }
    function y(e) {
      var t = o("react-compiler-runtime").c(3),
        n = r("useParentRoute")(),
        a;
      return (
        t[0] !== e || t[1] !== n
          ? ((a = s(n, e)), (t[0] = e), (t[1] = n), (t[2] = a))
          : (a = t[2]),
        a
      );
    }
    ((l.MatchFunctions = f),
      (l.useCurrentRouteMatcher = g),
      (l.useHostedRouteMatcher = h),
      (l.useParentRouteMatcher = y));
  },
  98,
);
