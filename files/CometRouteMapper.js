__d(
  "CometRouteMapper",
  [
    "CometRoutePathComparator",
    "ConstUriUtils",
    "FBLogger",
    "buildCometRouteFromDefinition",
    "buildRouteParams",
    "coerceRouteParam",
    "getURLPathParser",
    "normalizeCometRouterConstUri",
    "stableStringify",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {},
      s = [];
    function u(e, t) {
      return r("stableStringify")(r("buildRouteParams")(e, t, "significant"));
    }
    function c(e) {
      var t = e.instanceParams,
        n = e.routeParams,
        o = e.routePath,
        a = r("buildRouteParams")(n, t, "path");
      return { pathParams: a, results: {}, routeParams: n, routePath: o };
    }
    function d(e, t, n, a, i, l, s) {
      if (t.type === "routeRedirect") {
        var u,
          c,
          d = t.routeRedirect,
          m = "",
          p = o("ConstUriUtils").getUri(d.url);
        if (d.useCurrentPath === !0 && p != null) {
          var _,
            f = p.getQueryParams();
          p =
            (_ = o("ConstUriUtils").getUri(e)) == null ||
            (_ = _.replaceQueryParams(new Map())) == null
              ? void 0
              : _.addQueryParams(f);
        }
        if (t.routeRedirect.useCurrentParams === !0 && p != null) {
          var g,
            h = p.getQueryParams();
          p =
            (g = p.addQueryParams(new Map(Object.entries(l)))) == null
              ? void 0
              : g.addQueryParams(h);
        }
        if (t.routeRedirect.currentUrlParam != null && p != null) {
          var y = U(e, t.routeRedirect.currentUrlAdditionalParams);
          t.routeRedirect.currentUrlParam != null &&
            (p = p.addQueryParam(t.routeRedirect.currentUrlParam, y));
        }
        return (
          p != null && (p = p.removeQueryParams(t.routeRedirect.strip)),
          (m = (u = (c = p) == null ? void 0 : c.toString()) != null ? u : ""),
          D(m, s)
        );
      }
      if (t.type === "routeDefinition") {
        var C = babelHelpers.extends({}, a, l);
        return r("buildCometRouteFromDefinition")(
          t.routeDefinition,
          e,
          r("buildRouteParams")(n, C, null),
          i,
        );
      }
      if (t.type === "routeResolver") {
        var b = t.routeResolver;
        try {
          var v = r("normalizeCometRouterConstUri")(e),
            S = o("ConstUriUtils").getUri(v);
          if (S != null) {
            var R = b.syncResolve(null, S);
            if (R != null && R.type === "route_definition") return R.getRoute();
          }
        } catch (t) {
          r("FBLogger")("comet_infra").warn(
            "Sync resolution failed for routeResolver with URL: %s",
            e,
          );
        }
        return null;
      }
      return (
        r("FBLogger")("comet_infra").mustfix(
          "CometRouteMapper encountered an invalid result type %s",
          t.type,
        ),
        null
      );
    }
    function m(e, t, n, r) {
      var o = u(t.routeParams, babelHelpers.extends({}, t.pathParams, n)),
        a = t.results[o];
      return a == null
        ? null
        : a.type === "routeMatch"
          ? m(e, a.routeMatch, n, r)
          : d(e, a, t.routeParams, t.pathParams, t.routePath, n, r);
    }
    function p(e, t, n) {
      var r = f(t);
      if (r.length === 0) return null;
      var o = r[0],
        a = null,
        i = -1;
      for (var l of r) {
        if (g(o, l) !== 0) break;
        if (l.type === "cachedPath") {
          var s = _(e, l, t);
          if (s != null) return s;
        } else if (k(l.entry, t)) {
          var u = v(l.entry);
          u > i && ((a = l), (i = u));
        }
      }
      return a != null ? T(e, a.entry, t, n) : null;
    }
    function _(e, t, n) {
      var o = t.results,
        a = t.routeParams,
        i = t.routePath,
        l = n.getQueryData(),
        s = O(i).getParams(n),
        c = babelHelpers.extends({}, l, s != null ? s : {}),
        d = u(a, c),
        m = o[d];
      return m == null
        ? null
        : r("buildCometRouteFromDefinition")(
            m,
            e,
            r("buildRouteParams")(a, c, null),
            i,
          );
    }
    function f(e) {
      var t = [];
      for (var n of x) {
        var r = n.pathConflicts,
          o = n.routePath,
          a = O(o);
        a.test(e) &&
          !r.some(function (t) {
            return B(t, e);
          }) &&
          t.push(babelHelpers.extends({}, n, { type: "cachedPath" }));
      }
      for (var i of s) {
        var l = i.routeMatchInfos[i.routeMatchInfos.length - 1],
          u = l == null ? void 0 : l.routePath;
        l != null &&
          u != null &&
          I(i, e) &&
          t.push({
            entry: i,
            routeMatchInfo: l,
            routeParams: l.routeParams,
            routePath: u,
            type: "dynamic",
          });
      }
      return (t.sort(g), t);
    }
    function g(e, t) {
      return o("CometRoutePathComparator").compare(
        e.routePath,
        t.routePath,
        e.routeParams,
        t.routeParams,
      );
    }
    function h(e, t, n) {
      var o = e.routeConflicts,
        a = e.routeParams,
        i = e.routePath;
      if (i == null) return null;
      var l = O(i),
        s = l.test(t);
      if (s && W(i)) {
        var u = o == null ? void 0 : o[i];
        if (u == null) {
          if (t.getPath() !== n) return null;
        } else if (
          u.some(function (e) {
            return B(e, t);
          })
        )
          return null;
      }
      if (!s && t.getPath() !== n) return null;
      var c = s ? l.getParams(t) : null,
        d =
          c == null
            ? babelHelpers.extends({}, e.instanceParams, t.getQueryData())
            : babelHelpers.extends({}, t.getQueryData(), c);
      return { allParams: d, pathParams: r("buildRouteParams")(a, d, "path") };
    }
    function y(e, t, n) {
      var o,
        a,
        i = t[e.name];
      if (i == null) return !1;
      var l = r("coerceRouteParam")(n[e.name], i.coercibleType, i.enumType);
      if (l.valid !== !0) return !1;
      var s = r("coerceRouteParam")(e.value, i.coercibleType, i.enumType);
      return (
        r("stableStringify")((o = l.value) != null ? o : i.default) ===
        r("stableStringify")(
          (a = s.valid === !0 ? s.value : e.value) != null ? a : i.default,
        )
      );
    }
    function C(e, t, n) {
      var r = h(e, t, n);
      if (r == null) return !1;
      var o = r.allParams,
        a = e.instanceParams,
        i = e.routeParams,
        l = e.serverParamAccesses;
      return l != null
        ? l.every(function (e) {
            return y(e, i, o);
          })
        : u(i, o) === u(i, a);
    }
    function b(e) {
      var t = e.routeParams,
        n = e.serverParamAccesses;
      return n != null
        ? S(n).size
        : Object.keys(t).filter(function (e) {
            var n = t[e];
            return n != null && n.significant === !0;
          }).length;
    }
    function v(e) {
      return e.routeMatchInfos.reduce(function (e, t) {
        return e + b(t);
      }, 0);
    }
    function S(e) {
      return new Set(
        e.map(function (e) {
          return e.name;
        }),
      );
    }
    function R(e, t) {
      if (e.size >= t.size) return !1;
      for (var n of e) if (!t.has(n)) return !1;
      return !0;
    }
    function L(e, t) {
      if (e.routeMatchInfos.length !== t.routeMatchInfos.length) return !1;
      for (var n = !1, r = 0; r < e.routeMatchInfos.length; r++) {
        var o = e.routeMatchInfos[r],
          a = t.routeMatchInfos[r];
        if (o.routePath !== a.routePath) return !1;
        var i = o.serverParamAccesses,
          l = a.serverParamAccesses;
        if (i == null || l == null) {
          if (i !== l) return !1;
          continue;
        }
        var s = S(i),
          u = S(l);
        if (R(u, s)) {
          n = !0;
          continue;
        }
        if (s.size !== u.size) return !1;
        for (var c of u) if (!s.has(c)) return !1;
      }
      return n;
    }
    function E(e, t) {
      for (var n = s.length - 1; n >= 0; n--) {
        var r = s[n];
        L(e, r) && k(r, t) && s.splice(n, 1);
      }
    }
    function k(e, t) {
      return e.routeMatchInfos.every(function (n) {
        return C(n, t, e.rawPath);
      });
    }
    function I(e, t) {
      return e.routeMatchInfos.every(function (n) {
        return h(n, t, e.rawPath) != null;
      });
    }
    function T(e, t, n, r) {
      var o = t.routeMatchInfos[t.routeMatchInfos.length - 1];
      if (o == null) return null;
      var a = h(o, n, t.rawPath);
      return a == null
        ? null
        : d(
            e,
            t.result,
            o.routeParams,
            a.pathParams,
            o.routePath,
            n.getQueryData(),
            r,
          );
    }
    function D(t, n) {
      n === void 0 && (n = {});
      var a = r("normalizeCometRouterConstUri")(t);
      if (n[t] === !0)
        return (
          r("FBLogger")("comet_infra").mustfix(
            "CometRouteMapper encountered cyclic redirect %s",
            t,
          ),
          null
        );
      n[t] = !0;
      var i = "",
        l = {},
        s = o("ConstUriUtils").getUri(a);
      s != null &&
        ((l = Object.fromEntries(s.getQueryParams())), (i = s.getPath()));
      var u = e[i];
      if (u != null) {
        var c = m(a, u, l, n);
        if (c != null) return c;
      }
      return s != null ? p(a, s, n) : null;
    }
    var x = [];
    function $(e, t, n, r, a) {
      if (r != null) {
        var i = x.find(function (t) {
          return t.routePath === e;
        });
        if (i == null) {
          for (var l = 0, s = x.length; l < s; ) {
            var c = Math.floor((l + s) / 2),
              d = o("CometRoutePathComparator").compare(
                x[c].routePath,
                e,
                x[c].routeParams,
                t,
              );
            d < 0 ? (l = c + 1) : (s = c);
          }
          ((i = {
            pathConflicts: r,
            results: {},
            routeParams: t,
            routePath: e,
          }),
            x.splice(l, 0, i));
        }
        var m = u(t, a != null ? a : {});
        i.results[m] = n;
      }
    }
    function P(e, t) {
      var n = t.instanceParams,
        r = t.routeConflicts,
        o = t.routeParams,
        a = t.routePath;
      e.type === "routeDefinition" &&
        a != null &&
        r != null &&
        W(a) &&
        $(a, o, e.routeDefinition, r[a], n);
    }
    function N(e) {
      return e.some(function (e) {
        return e.serverParamAccesses != null;
      });
    }
    function M(e, t, n, r) {
      if (r != null) {
        var o = { rawPath: e, result: t, routeMatchInfos: n };
        E(o, r);
        for (var a = s.length - 1; a >= 0; a--) w(s[a], o) && s.splice(a, 1);
        s.unshift(o);
      }
    }
    function w(e, t) {
      return (
        e.rawPath === t.rawPath &&
        r("stableStringify")(e.routeMatchInfos) ===
          r("stableStringify")(t.routeMatchInfos)
      );
    }
    function A(e) {
      for (var t of e) {
        var n = t.routeDefinition,
          r = t.routeParams,
          o = t.routePath,
          a = t.routePathConflicts,
          i = t.routeRedirect;
        i != null
          ? W(o) ||
            G(o, i, [{ instanceParams: {}, routeParams: r, routePath: o }])
          : n != null &&
            (W(o)
              ? $(o, r, n, a)
              : V(o, n, [
                  { instanceParams: {}, routeParams: r, routePath: o },
                ]));
      }
    }
    var F = new Map();
    function O(e) {
      var t = F.get(e);
      return (t || ((t = r("getURLPathParser")(e)), F.set(e, t)), t);
    }
    function B(e, t) {
      var n = O(e);
      return n.test(t);
    }
    function W(e) {
      return e.includes("{");
    }
    function q(t, n, a) {
      var i = "",
        l = {},
        s = r("normalizeCometRouterConstUri")(t),
        d = o("ConstUriUtils").getUri(s);
      if (
        (d != null &&
          ((l = Object.fromEntries(d.getQueryParams())), (i = d.getPath())),
        N(a))
      ) {
        M(i, n, a, d);
        return;
      }
      var m = e[i];
      m == null && ((m = e[i] = c(a[0])), P(n, a[0]));
      var p = m;
      a.slice(1).forEach(function (e) {
        var t = p,
          r = t.results,
          o = u(p.routeParams, babelHelpers.extends({}, p.pathParams, l)),
          a = c(e);
        (P(n, e), (r[o] = { routeMatch: a, type: "routeMatch" }), (p = a));
      });
      var _ = u(p.routeParams, babelHelpers.extends({}, p.pathParams, l));
      p.results[_] = n;
    }
    function U(e, t) {
      var n = e;
      if (t && t.size > 0) {
        var r = o("ConstUriUtils").getUri(e);
        (r != null && (r = r.addQueryParams(t)),
          r != null && (n = r.toString()));
      }
      return n;
    }
    function V(e, t, n) {
      if (t.prefetchable !== !1) {
        var r = { routeDefinition: t, type: "routeDefinition" };
        q(e, r, n);
      }
    }
    function H(e, t, n) {
      var r = { routeResolver: t, type: "routeResolver" };
      q(e, r, n);
    }
    function G(e, t, n) {
      if (t.prefetchable !== !1) {
        var r = { routeRedirect: t, type: "routeRedirect" };
        q(e, r, n);
      }
    }
    function z(t) {
      for (var n = new Set(), r = s.length - 1; r >= 0; r--)
        s[r].rawPath.startsWith(t) && s.splice(r, 1);
      if (
        (Object.keys(e).forEach(function (r) {
          if (r.startsWith(t)) {
            var o;
            (n.add((o = e[r]) == null ? void 0 : o.routePath), delete e[r]);
          }
        }),
        n.size > 0)
      )
        for (var o = x.length - 1; o >= 0; o--)
          n.has(x[o].routePath) && x.splice(o, 1);
    }
    var j = null,
      K = {
        dump: j,
        getRoute: D,
        installPaths: A,
        installRedirect: G,
        installRoute: V,
        installRouteResolver: H,
        invalidatePath: z,
      };
    l.default = K;
  },
  98,
);
