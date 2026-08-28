__d(
  "CometRouteMapperOptimized",
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
    var e = new Set(),
      s = new Map(),
      u = [],
      c = new Map();
    function d(e) {
      var t = c.get(e);
      return (t == null && ((t = r("getURLPathParser")(e)), c.set(e, t)), t);
    }
    function m(e, t, n) {
      var o = e.routeConflicts,
        a = e.routeParams,
        i = e.routePath;
      if (i == null) {
        if (t.getPath() !== n) return null;
        var l = babelHelpers.extends({}, e.instanceParams, t.getQueryData());
        return {
          allParams: l,
          pathParams: r("buildRouteParams")(a, l, "path"),
        };
      }
      var s = d(i),
        u = s.test(t);
      if (u && i.includes("{")) {
        var c = o == null ? void 0 : o[i];
        if (c == null) {
          if (t.getPath() !== n) return null;
        } else if (
          c.some(function (e) {
            return d(e).test(t);
          })
        )
          return null;
      }
      if (!u && t.getPath() !== n) return null;
      var m = u ? s.getParams(t) : null,
        p =
          m == null
            ? babelHelpers.extends({}, e.instanceParams, t.getQueryData())
            : babelHelpers.extends({}, t.getQueryData(), m);
      return { allParams: p, pathParams: r("buildRouteParams")(a, p, "path") };
    }
    function p(e, t, n) {
      var o = m(e, t, n);
      if (o == null) return !1;
      var a = o.allParams,
        i = e.instanceParams,
        l = e.routeParams,
        s = e.serverParamAccesses;
      return s != null
        ? s.every(function (e) {
            var t,
              n,
              o = l[e.name];
            if (o == null) return !1;
            var i = r("coerceRouteParam")(
              a[e.name],
              o.coercibleType,
              o.enumType,
            );
            if (i.valid !== !0) return !1;
            var s = r("coerceRouteParam")(e.value, o.coercibleType, o.enumType);
            return (
              r("stableStringify")((t = i.value) != null ? t : o.default) ===
              r("stableStringify")(
                (n = s.valid === !0 ? s.value : e.value) != null
                  ? n
                  : o.default,
              )
            );
          })
        : r("stableStringify")(r("buildRouteParams")(l, a, "significant")) ===
            r("stableStringify")(r("buildRouteParams")(l, i, "significant"));
    }
    function _(e, t) {
      return e.routeMatchInfos.every(function (n) {
        return p(n, t, e.rawPath);
      });
    }
    function f(e, t) {
      return e.routeMatchInfos.every(function (n) {
        return m(n, t, e.rawPath) != null;
      });
    }
    function g(e, t) {
      return (
        e.routeMatchInfos.length === t.routeMatchInfos.length &&
        e.routeMatchInfos.every(function (e, n) {
          var r,
            o,
            a = t.routeMatchInfos[n],
            i = e.routePath;
          return (
            i === a.routePath &&
            h(e.routeParams, a.routeParams) &&
            y(
              i == null ? null : (r = e.routeConflicts) == null ? void 0 : r[i],
              i == null ? null : (o = a.routeConflicts) == null ? void 0 : o[i],
            ) &&
            C(e, a)
          );
        })
      );
    }
    function h(e, t) {
      var n = Object.keys(e);
      return n.length !== Object.keys(t).length
        ? !1
        : n.every(function (n) {
            var r = e[n],
              o = t[n];
            return (
              r === o ||
              (r != null &&
                o != null &&
                r.coercibleType === o.coercibleType &&
                r.default === o.default &&
                r.enumType === o.enumType &&
                r.path === o.path &&
                r.significant === o.significant &&
                y(r.legacyNames, o.legacyNames))
            );
          });
    }
    function y(e, t) {
      return (
        e === t ||
        (e != null &&
          t != null &&
          e.length === t.length &&
          e.every(function (e, n) {
            return e === t[n];
          }))
      );
    }
    function C(e, t) {
      var n = b(e),
        r = b(t);
      return (
        n.length === r.length &&
        n.every(function (e) {
          return r.includes(e);
        })
      );
    }
    function b(e) {
      var t, n;
      return (t =
        (n = e.serverParamAccesses) == null
          ? void 0
          : n.map(function (e) {
              return e.name;
            })) != null
        ? t
        : Object.keys(e.routeParams).filter(function (t) {
            var n;
            return (
              ((n = e.routeParams[t]) == null ? void 0 : n.significant) === !0
            );
          });
    }
    function v(e) {
      var t,
        n =
          (t = e.routeMatchInfos[e.routeMatchInfos.length - 1]) == null
            ? void 0
            : t.routePath;
      return n == null ? !0 : d(n).regex.test(e.rawPath);
    }
    function S(e, t) {
      return e.result.type === "routeRedirect" && t.has(e.result);
    }
    function R(e, t, n, r) {
      for (var o of t)
        if (!S(o, r)) {
          var a = w(e, o);
          (a && v(o) && !v(e)) ||
            (((a && (!g(e, o) || _(o, n))) ||
              (e.rawPath === o.rawPath && _(o, n))) &&
              M(o));
        }
    }
    function L(e) {
      var t = s.get(e.getPath());
      if (t != null) {
        var n = null,
          r = !1;
        for (var o of t)
          if (_(o, e)) {
            var a = o.rawPath === e.getPath();
            (n == null || (a && !r)) && ((n = o), (r = a));
          }
        return n;
      }
    }
    function E(e) {
      var t = !1;
      for (var n of e) {
        var r = n.routeParams,
          o = n.serverParamAccesses;
        if (o != null) {
          t = !0;
          for (var a of o) if (r[a.name] == null) return "skip";
        }
      }
      return t ? "dynamic" : "legacy";
    }
    function k() {
      for (var t of e)
        if (
          t.result.type === "routeRedirect" &&
          t.result.routeRedirect.prefetchable !== !1 &&
          E(t.routeMatchInfos) === "dynamic"
        )
          return !0;
      return !1;
    }
    function I(t, n, r, o) {
      if (E(t.routeMatchInfos) === "skip") {
        (T(t, n, o), e.add(t), P(t));
        return;
      }
      var a = N(t, n);
      (R(t, a, n, o),
        r &&
          a.forEach(function (e) {
            !S(e, o) &&
              E(e.routeMatchInfos) !== "legacy" &&
              ((t.rawPath === e.rawPath && _(e, n)) || w(t, e)) &&
              M(e);
          }),
        e.add(t),
        P(t));
    }
    function T(e, t, n) {
      var r = N(e, t);
      r.forEach(function (r) {
        !S(r, n) &&
          ((w(r, e) && f(r, t)) || (e.rawPath === r.rawPath && _(r, t))) &&
          M(r);
      });
    }
    function D(e) {
      var t = e.routeMatchInfos[e.routeMatchInfos.length - 1],
        n = t == null ? void 0 : t.routePath;
      if (n == null) return [e.rawPath];
      if (n.includes("{")) return [];
      var o = r("normalizeCometRouterConstUri")(n);
      return o === e.rawPath ? [e.rawPath] : [e.rawPath, o];
    }
    function x(t, n, r) {
      var o = r;
      return (
        e.forEach(function (e) {
          var n = D(e);
          (e.rawPath.startsWith(t) ||
            n.some(function (e) {
              return e.startsWith(t);
            })) &&
            (o = !0);
        }),
        e.forEach(function (e) {
          var r = D(e),
            a = e.routeMatchInfos.some(function (e) {
              var n;
              return (
                ((n = e.routePath) == null ? void 0 : n.startsWith(t)) === !0
              );
            }),
            i =
              a ||
              (r.length === 0
                ? e.rawPath.startsWith(t) || (!o && n != null && f(e, n))
                : r.some(function (e) {
                    return e.startsWith(t);
                  }));
          i && M(e);
        }),
        o
      );
    }
    function $(e) {
      return (
        s.has(e.getPath()) ||
        u.some(function (t) {
          return f(t, e);
        })
      );
    }
    function P(e) {
      var t = D(e);
      if (t.length === 0) {
        u.unshift(e);
        return;
      }
      for (var n of t) {
        var r = s.get(n);
        r == null ? s.set(n, [e]) : r.unshift(e);
      }
    }
    function N(e, t) {
      var n,
        r = D(e);
      if (r.length > 0) {
        var o = new Set();
        return (
          r.forEach(function (e) {
            var t;
            (t = s.get(e)) == null ||
              t.forEach(function (e) {
                return o.add(e);
              });
          }),
          u.forEach(function (e) {
            f(e, t) && o.add(e);
          }),
          Array.from(o)
        );
      }
      return [].concat((n = s.get(t.getPath())) != null ? n : [], u);
    }
    function M(t) {
      if (e.delete(t)) {
        var n = D(t);
        if (n.length === 0) {
          var r = u.indexOf(t);
          r !== -1 && u.splice(r, 1);
          return;
        }
        for (var o of n) {
          var a = s.get(o);
          if (a != null) {
            var i = a.indexOf(t);
            (i !== -1 && a.splice(i, 1), a.length === 0 && s.delete(o));
          }
        }
      }
    }
    function w(e, t) {
      return (
        e.routeMatchInfos.length === t.routeMatchInfos.length &&
        e.routeMatchInfos.every(function (e, n) {
          return A(e) === A(t.routeMatchInfos[n]);
        })
      );
    }
    function A(e) {
      var t = e.routePath;
      return t == null || t.includes("{")
        ? t
        : r("normalizeCometRouterConstUri")(t);
    }
    var F = {};
    function O(e, t) {
      return r("stableStringify")(r("buildRouteParams")(e, t, "significant"));
    }
    function B(e) {
      var t = e.instanceParams,
        n = e.routeParams,
        o = e.routePath,
        a = r("buildRouteParams")(n, t, "path");
      return { pathParams: a, results: {}, routeParams: n, routePath: o };
    }
    var W = new Map();
    function q() {
      W.clear();
    }
    function U(e, t, n, a, i, l, s) {
      if (t.type === "routeRedirect") {
        var u,
          c,
          d = t.routeRedirect;
        if (d.prefetchable === !1) return !1;
        if (s.has(t))
          return (
            r("FBLogger")("comet_infra").mustfix(
              "CometRouteMapper encountered a cyclic route redirect",
            ),
            !1
          );
        s.add(t);
        var m = o("ConstUriUtils").getUri(d.url);
        if (d.useCurrentPath === !0 && m != null) {
          var p,
            _ = m.getQueryParams();
          m =
            (p = o("ConstUriUtils").getUri(e)) == null ||
            (p = p.replaceQueryParams(new Map())) == null
              ? void 0
              : p.addQueryParams(_);
        }
        if (d.useCurrentParams === !0 && m != null) {
          var f,
            g = m.getQueryParams();
          m =
            (f = m.addQueryParams(new Map(Object.entries(l)))) == null
              ? void 0
              : f.addQueryParams(g);
        }
        var h = d.currentUrlAdditionalParams,
          y = d.currentUrlParam;
        if (y != null && m != null) {
          var C, b;
          m = m.addQueryParam(
            y,
            h != null &&
              h.size > 0 &&
              (C =
                (b = o("ConstUriUtils").getUri(e)) == null ||
                (b = b.addQueryParams(h)) == null
                  ? void 0
                  : b.toString()) != null
              ? C
              : e,
          );
        }
        m != null && (m = m.removeQueryParams(d.strip));
        var v = K(
          (u = (c = m) == null ? void 0 : c.toString()) != null ? u : "",
          s,
        );
        return v != null ? v : !1;
      }
      if (t.type === "routeDefinition") {
        if (t.routeDefinition.prefetchable === !1) return !1;
        var S = babelHelpers.extends({}, a, l);
        return r("buildCometRouteFromDefinition")(
          t.routeDefinition,
          e,
          r("buildRouteParams")(n, S, null),
          i,
        );
      }
      if (t.type === "routeResolver") {
        var R = t.routeResolver;
        try {
          var L = r("normalizeCometRouterConstUri")(e),
            E = o("ConstUriUtils").getUri(L);
          if (E != null) {
            var k = R.syncResolve(null, E);
            if (k != null && k.type === "route_definition") {
              var I = k.getRoute();
              return I.prefetchable === !1 ? !1 : I;
            }
          }
        } catch (t) {
          var T = r("FBLogger")("comet_infra");
          (t instanceof Error ? T.catching(t) : T).warn(
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
    function V(e, t, n, r) {
      var o = O(t.routeParams, babelHelpers.extends({}, t.pathParams, n)),
        a = t.results[o];
      return a == null
        ? null
        : a.type === "routeMatch"
          ? V(e, a.routeMatch, n, r)
          : U(e, a, t.routeParams, t.pathParams, t.routePath, n, r);
    }
    function H(e, t, n) {
      var o = G(t);
      if (o.length === 0) return null;
      var a = o[0],
        i = null,
        l = !1,
        s = [];
      for (var u of o) {
        if (z(a, u) !== 0) break;
        if (u.type === "cachedPath") s.push(u);
        else {
          if (!_(u.entry, t)) continue;
          var c = u.entry.rawPath === t.getPath();
          (i == null || (c && !l)) && ((i = u), (l = c));
        }
      }
      if (i != null) return j(e, i.entry, t, n);
      for (var m of s) {
        var p = m.results,
          f = m.routeParams,
          g = m.routePath,
          h = babelHelpers.extends({}, t.getQueryData(), d(g).getParams(t)),
          y = p[O(f, h)];
        if (y != null)
          return y.prefetchable === !1
            ? !1
            : r("buildCometRouteFromDefinition")(
                y,
                e,
                r("buildRouteParams")(f, h, null),
                g,
              );
      }
      return null;
    }
    function G(e) {
      var t = [];
      for (var n of Y) {
        var r = n.pathConflicts,
          o = n.routePath,
          a = d(o);
        a.test(e) &&
          !r.some(function (t) {
            return d(t).test(e);
          }) &&
          t.push(n);
      }
      var i = [];
      for (var l of u) {
        var s = l.routeMatchInfos[l.routeMatchInfos.length - 1],
          c = s == null ? void 0 : s.routePath;
        s != null &&
          c != null &&
          f(l, e) &&
          i.push({
            entry: l,
            routeParams: s.routeParams,
            routePath: c,
            type: "dynamic",
          });
      }
      return (i.length > 0 && (t.push.apply(t, i), t.sort(z)), t);
    }
    function z(e, t) {
      return o("CometRoutePathComparator").compare(
        e.routePath,
        t.routePath,
        e.routeParams,
        t.routeParams,
      );
    }
    function j(e, t, n, r) {
      var o = t.routeMatchInfos[t.routeMatchInfos.length - 1];
      if (o == null) return null;
      var a = m(o, n, t.rawPath);
      return a == null
        ? null
        : U(
            e,
            t.result,
            o.routeParams,
            a.pathParams,
            o.routePath,
            n.getQueryData(),
            r,
          );
    }
    function K(e, t) {
      var n = r("normalizeCometRouterConstUri")(e);
      if (t.has(n))
        return (
          r("FBLogger")("comet_infra").mustfix(
            "CometRouteMapper encountered cyclic redirect %s",
            n,
          ),
          null
        );
      t.add(n);
      var a = W.get(n);
      if (a != null) return a;
      var i = "",
        l = {},
        s = !1,
        u,
        c = o("ConstUriUtils").getUri(n);
      if (c != null) {
        if (
          ((l = c.getQueryData()),
          (i = c.getPath()),
          (u = L(c)),
          u != null && u.rawPath === i)
        ) {
          var d = j(n, u, c, t);
          return (d !== !1 && d != null && W.set(n, d), d);
        }
        s = u === null;
      }
      var m = F[i];
      if (m != null) {
        var p = V(n, m, l, t);
        if (p === !1) return !1;
        if (p != null) return (W.set(n, p), p);
      }
      if (u != null && c != null) {
        var _ = j(n, u, c, t);
        return (_ !== !1 && _ != null && W.set(n, _), _);
      }
      if (s) return null;
      if (c != null) {
        var f = H(n, c, t);
        return (f !== !1 && f != null && W.set(n, f), f);
      }
      return null;
    }
    function Q(e) {
      return W.get(r("normalizeCometRouterConstUri")(e));
    }
    function X(e) {
      var t = K(e, new Set());
      return t === !1 ? null : t;
    }
    var Y = [];
    function J(e, t, n, r, a) {
      if (r != null) {
        var i = Y.find(function (t) {
          return t.routePath === e;
        });
        if (i == null) {
          for (var l = 0, s = Y.length; l < s; ) {
            var u = Math.floor((l + s) / 2),
              c = o("CometRoutePathComparator").compare(
                Y[u].routePath,
                e,
                Y[u].routeParams,
                t,
              );
            c < 0 ? (l = u + 1) : (s = u);
          }
          ((i = {
            pathConflicts: r,
            results: {},
            routeParams: t,
            routePath: e,
            type: "cachedPath",
          }),
            Y.splice(l, 0, i));
        }
        var d = O(t, a != null ? a : {});
        i.results[d] = n;
      }
    }
    function Z(e, t) {
      var n = t.instanceParams,
        r = t.routeConflicts,
        o = t.routeParams,
        a = t.routePath;
      e.type === "routeDefinition" &&
        a != null &&
        r != null &&
        a.includes("{") &&
        J(a, o, e.routeDefinition, r[a], n);
    }
    function ee(e) {
      var t = new Set(),
        n = function (r) {
          (r.routePath != null && t.add(r.routePath),
            Object.keys(r.results).forEach(function (e) {
              var t = r.results[e];
              (t == null ? void 0 : t.type) === "routeMatch" && n(t.routeMatch);
            }));
        };
      return (n(e), t);
    }
    function te(e, t) {
      var n = !1,
        r = !1;
      return (
        Object.keys(e.results).forEach(function (o) {
          var a = e.results[o];
          if ((a == null ? void 0 : a.type) === "routeMatch") {
            var i = te(a.routeMatch, t);
            ((n = n || i.didRemove),
              i.hasResults ? (r = !0) : (delete e.results[o], (n = !0)));
          } else
            (a == null ? void 0 : a.type) === "routeRedirect" && t.has(a)
              ? (r = !0)
              : (delete e.results[o], (n = !0));
        }),
        { didRemove: n, hasResults: r }
      );
    }
    function ne(e, t) {
      var n = new Set();
      e.routeMatchInfos.forEach(function (e) {
        var t = e.routePath;
        t != null && n.add(t);
      });
      var r = new Set([e.rawPath].concat(D(e))),
        o = new Set(n),
        a = !1;
      Object.keys(F).forEach(function (e) {
        var i = F[e];
        if (i != null) {
          var l = ee(i);
          if (
            !(
              !r.has(e) &&
              !Array.from(n).some(function (e) {
                return l.has(e);
              })
            )
          ) {
            if (
              (l.forEach(function (e) {
                return o.add(e);
              }),
              t.size === 0)
            ) {
              (delete F[e], (a = !0));
              return;
            }
            var s = te(i, t);
            ((a = a || s.didRemove), s.hasResults || (delete F[e], (a = !0)));
          }
        }
      });
      for (var i = Y.length - 1; i >= 0; i--)
        o.has(Y[i].routePath) && (Y.splice(i, 1), (a = !0));
      return a;
    }
    function re(e) {
      var t = o("ConstUriUtils").getUri(r("normalizeCometRouterConstUri")(e));
      return t != null && $(t);
    }
    function oe(e) {
      return k() || re(e);
    }
    function ae(e, t, n, a, i) {
      var l = o("ConstUriUtils").getUri(r("normalizeCometRouterConstUri")(e));
      if (l != null) {
        var s = { rawPath: l.getPath(), result: t, routeMatchInfos: n },
          u = E(n);
        if (!(u === "legacy" && !a)) {
          var c = ne(s, i);
          (u === "legacy" && !$(l) && !c) || (I(s, l, !0, i), q());
        }
      }
    }
    function ie(e) {
      var t =
          k() ||
          e.some(function (e) {
            var t = e.routePath;
            return !t.includes("{") && re(t);
          }),
        n = new Set();
      for (var r of e) {
        var o = r.routeDefinition,
          a = r.routeParams,
          i = r.routePath,
          l = r.routePathConflicts,
          s = r.routeRedirect;
        if (s != null) {
          if (!i.includes("{")) {
            var u = { routeRedirect: s, type: "routeRedirect" };
            (n.add(u),
              se(
                {
                  rawUrl: i,
                  redirectUrl: s.url,
                  result: u,
                  routeMatchInfos: [
                    { instanceParams: {}, routeParams: a, routePath: i },
                  ],
                },
                t,
                n,
              ));
          }
        } else
          o != null &&
            (i.includes("{")
              ? J(i, a, o, l)
              : se(
                  {
                    rawUrl: i,
                    result: { routeDefinition: o, type: "routeDefinition" },
                    routeMatchInfos: [
                      { instanceParams: {}, routeParams: a, routePath: i },
                    ],
                  },
                  t,
                  n,
                ));
      }
      e.length > 0 && q();
    }
    function le(e, t, n, a, i) {
      var l = "",
        s = {},
        u = r("normalizeCometRouterConstUri")(e),
        c = o("ConstUriUtils").getUri(u);
      c != null && ((s = c.getQueryData()), (l = c.getPath()));
      var d = E(n);
      if (d !== "legacy") {
        if (c == null) return;
        var m = { rawPath: l, result: t, routeMatchInfos: n };
        (ne(m, i), I(m, c, !1, i), q());
        return;
      }
      c != null && a && T({ rawPath: l, result: t, routeMatchInfos: n }, c, i);
      var p = F[l];
      p == null && ((p = F[l] = B(n[0])), Z(t, n[0]));
      var _ = p;
      n.slice(1).forEach(function (e) {
        var n = _,
          r = n.results,
          o = O(_.routeParams, babelHelpers.extends({}, _.pathParams, s)),
          a = B(e);
        (Z(t, e), (r[o] = { routeMatch: a, type: "routeMatch" }), (_ = a));
      });
      var f = O(_.routeParams, babelHelpers.extends({}, _.pathParams, s));
      ((_.results[f] = t), q());
    }
    function se(e, t, n) {
      var r = e.rawUrl,
        o = e.result,
        a = e.routeMatchInfos;
      if (
        (o.type === "routeDefinition" &&
          o.routeDefinition.prefetchable === !1) ||
        (o.type === "routeRedirect" && o.routeRedirect.prefetchable === !1)
      ) {
        ae(r, o, a, t, n);
        return;
      }
      le(r, o, a, t, n);
    }
    function ue(e) {
      var t =
          e.some(function (e) {
            return E(e.routeMatchInfos) !== "legacy";
          }) ||
          k() ||
          e.some(function (e) {
            return re(e.rawUrl);
          }),
        n = new Set();
      (e.forEach(function (e) {
        var t,
          a = e.redirectUrl,
          i = e.result;
        if (!(i.type !== "routeRedirect" || a == null)) {
          var l =
              (t = o("ConstUriUtils").getUri(
                r("normalizeCometRouterConstUri")(e.rawUrl),
              )) == null
                ? void 0
                : t.getPath(),
            s = o("ConstUriUtils").getUri(r("normalizeCometRouterConstUri")(a)),
            u = s == null ? void 0 : s.getPath();
          l != null &&
            u != null &&
            (l !== u ||
              (s != null &&
                !_(
                  { rawPath: l, result: i, routeMatchInfos: e.routeMatchInfos },
                  s,
                ))) &&
            n.add(i);
        }
      }),
        e.forEach(function (e) {
          return se(e, t, n);
        }));
    }
    function ce(e, t, n) {
      ue([
        {
          rawUrl: e,
          result: { routeDefinition: t, type: "routeDefinition" },
          routeMatchInfos: n,
        },
      ]);
    }
    function de(e, t, n) {
      ue([
        {
          rawUrl: e,
          result: { routeResolver: t, type: "routeResolver" },
          routeMatchInfos: n,
        },
      ]);
    }
    function me(e, t, n) {
      ue([
        {
          rawUrl: e,
          redirectUrl: t.url,
          result: { routeRedirect: t, type: "routeRedirect" },
          routeMatchInfos: n,
        },
      ]);
    }
    function pe(e) {
      var t = new Set(),
        n = o("ConstUriUtils").getUri(r("normalizeCometRouterConstUri")(e)),
        a = Object.keys(F).filter(function (t) {
          return t.startsWith(e);
        }),
        i = x(e, n, a.length > 0);
      a.forEach(function (e) {
        var n;
        (t.add((n = F[e]) == null ? void 0 : n.routePath), delete F[e]);
      });
      for (var l = Y.length - 1; l >= 0; l--) {
        var s = Y[l];
        (t.has(s.routePath) ||
          s.routePath.startsWith(e) ||
          (!i && n != null && d(s.routePath).test(n))) &&
          Y.splice(l, 1);
      }
      q();
    }
    var _e = null,
      fe = {
        dump: _e,
        getCachedRoute: Q,
        getRoute: X,
        installBatch: ue,
        installPaths: ie,
        installRedirect: me,
        installRoute: ce,
        installRouteResolver: de,
        invalidatePath: pe,
        needsDynamicCacheReconciliation: oe,
      };
    l.default = fe;
  },
  98,
);
