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
      c = new Map(),
      d = new WeakMap(),
      m = 0,
      p = new Map();
    function _(e) {
      var t = p.get(e);
      return (t == null && ((t = r("getURLPathParser")(e)), p.set(e, t)), t);
    }
    function f(e, t, n) {
      var r = e.routeConflicts,
        o = e.routePath;
      if (o == null) return t.getPath() === n ? g(e, t) : null;
      var a = _(o),
        i = a.test(t);
      if (i && o.includes("{")) {
        var l = r == null ? void 0 : r[o];
        if (l == null) {
          if (t.getPath() !== n) return null;
        } else if (
          l.some(function (e) {
            return _(e).test(t);
          })
        )
          return null;
      }
      return !i && t.getPath() !== n
        ? null
        : i
          ? babelHelpers.extends({}, t.getQueryData(), a.getParams(t))
          : g(e, t);
    }
    function g(e, t) {
      var n = e.instanceParams,
        o = e.routeParams;
      return babelHelpers.extends(
        {},
        r("buildRouteParams")(o, n, "path"),
        t.getQueryData(),
      );
    }
    function h(e, t) {
      var n = e.rawPath,
        o = e.routeMatchInfos,
        a = [];
      for (var i of o) {
        var l = i.instanceParams,
          s = i.routeParams,
          u = i.serverParamAccesses,
          c = t == null ? l : f(i, t, n);
        if (c == null) return null;
        if (u == null) {
          a.push(
            r("stableStringify")(r("buildRouteParams")(s, c, "significant")),
          );
          continue;
        }
        var d = function (n) {
            var e = s[n];
            if (e == null) return { v: null };
            var o = new Set(
              (t == null
                ? u
                    .filter(function (e) {
                      return e.name === n;
                    })
                    .map(function (e) {
                      var t = e.value;
                      return t;
                    })
                : [c[n]]
              ).map(function (n) {
                var o,
                  a = r("coerceRouteParam")(n, e.coercibleType, e.enumType);
                return a.valid !== !0 && t != null
                  ? null
                  : r("stableStringify")(
                      (o = a.valid === !0 ? a.value : n) != null
                        ? o
                        : e.default,
                    );
              }),
            );
            if (o.size !== 1 || o.has(null)) return { v: null };
            a.push.apply(a, Array.from(o));
          },
          m;
        for (var p of [].concat(L(i)).sort()) if (((m = d(p)), m)) return m.v;
      }
      return JSON.stringify(a);
    }
    function y(e, t) {
      var n = h(e, null);
      return n != null && n === h(e, t);
    }
    function C(e, t) {
      return e.routeMatchInfos.every(function (n) {
        return f(n, t, e.rawPath) != null;
      });
    }
    function b(e, t) {
      return (
        e.routeMatchInfos.length === t.routeMatchInfos.length &&
        e.routeMatchInfos.every(function (e, n) {
          var r,
            o,
            a = t.routeMatchInfos[n],
            i = e.routePath;
          return (
            i === a.routePath &&
            v(e.routeParams, a.routeParams) &&
            S(
              i == null ? null : (r = e.routeConflicts) == null ? void 0 : r[i],
              i == null ? null : (o = a.routeConflicts) == null ? void 0 : o[i],
            ) &&
            R(e, a)
          );
        })
      );
    }
    function v(e, t) {
      if (e === t) return !0;
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
                S(r.legacyNames, o.legacyNames))
            );
          });
    }
    function S(e, t) {
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
    function R(e, t) {
      var n = L(e),
        r = L(t);
      return (
        n.length === r.length &&
        n.every(function (e) {
          return r.includes(e);
        })
      );
    }
    function L(e) {
      var t = e.serverParamAccesses;
      return t != null
        ? Array.from(
            new Set(
              t.map(function (e) {
                var t = e.name;
                return t;
              }),
            ),
          )
        : Object.keys(e.routeParams).filter(function (t) {
            var n;
            return (
              ((n = e.routeParams[t]) == null ? void 0 : n.significant) === !0
            );
          });
    }
    function E(e) {
      var t,
        n =
          (t = e.routeMatchInfos[e.routeMatchInfos.length - 1]) == null
            ? void 0
            : t.routePath;
      return n == null ? !0 : _(n).regex.test(e.rawPath);
    }
    function k(e, t) {
      return e.result.type === "routeRedirect" && t.has(e.result);
    }
    function I(e, t, n, r) {
      for (var o of t)
        if (!k(o, r)) {
          var a = G(e, o);
          (a && E(o) && !E(e)) ||
            ((a || e.rawPath === o.rawPath) && y(o, n) && H(o));
        }
    }
    function T(e) {
      var t = s.get(e.getPath());
      return t == null ? void 0 : D(t, e);
    }
    function D(e, t) {
      var n = t.getPath(),
        r = null;
      for (var o of e) {
        var a = h(o.sample, t);
        for (var i of a == null
          ? []
          : (l = o.entriesByKey.get(a)) != null
            ? l
            : []) {
          var l,
            s,
            u,
            c = i.rawPath === n;
          (r == null ||
            (c && r.rawPath !== n) ||
            (c === (r.rawPath === n) &&
              ((s = d.get(i)) != null ? s : 0) >
                ((u = d.get(r)) != null ? u : 0))) &&
            (r = i);
        }
      }
      return r;
    }
    function x(e) {
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
    function $() {
      for (var t of e)
        if (
          t.result.type === "routeRedirect" &&
          t.result.routeRedirect.prefetchable !== !1 &&
          x(t.routeMatchInfos) === "dynamic"
        )
          return !0;
      return !1;
    }
    function P(t, n, r, o) {
      if (x(t.routeMatchInfos) === "skip") {
        (N(t, n, o, !0), e.add(t), U(t));
        return;
      }
      var a = V(t, n, r);
      (I(t, a, n, o),
        r &&
          a.forEach(function (e) {
            !k(e, o) &&
              x(e.routeMatchInfos) !== "legacy" &&
              ((t.rawPath === e.rawPath && y(e, n)) || G(t, e)) &&
              H(e);
          }),
        e.add(t),
        U(t));
    }
    function N(e, t, n, r) {
      V(e, t, r).forEach(function (o) {
        var a = G(o, e);
        !k(o, n) &&
          ((r && a && C(o, t)) ||
            ((a || e.rawPath === o.rawPath) && y(o, t))) &&
          H(o);
      });
    }
    function M(e, t, n) {
      var r = t.getQueryData(),
        o = new Set(
          e.routeMatchInfos.map(function (e) {
            return e.routePath;
          }),
        );
      new Set([e.rawPath].concat(w(e))).forEach(function (e) {
        for (var t = j[e]; t != null; ) {
          o.add(t.routePath);
          var a = K(t.routeParams, babelHelpers.extends({}, t.pathParams, r)),
            i = t.results[a];
          if ((i == null ? void 0 : i.type) === "routeMatch") {
            t = i.routeMatch;
            continue;
          }
          (i != null && !n.has(i) && delete t.results[a], (t = null));
        }
      });
      for (var a = se.length - 1; a >= 0; a--)
        o.has(se[a].routePath) && se.splice(a, 1);
    }
    function w(e) {
      var t = e.routeMatchInfos[e.routeMatchInfos.length - 1],
        n = t == null ? void 0 : t.routePath;
      if (n == null) return [e.rawPath];
      if (n.includes("{")) return [];
      var o = r("normalizeCometRouterConstUri")(n);
      return o === e.rawPath ? [e.rawPath] : [e.rawPath, o];
    }
    function A(t, n, r) {
      var o = r;
      return (
        e.forEach(function (e) {
          var n = w(e);
          (e.rawPath.startsWith(t) ||
            n.some(function (e) {
              return e.startsWith(t);
            })) &&
            (o = !0);
        }),
        e.forEach(function (e) {
          var r = w(e),
            a = e.routeMatchInfos.some(function (e) {
              var n;
              return (
                ((n = e.routePath) == null ? void 0 : n.startsWith(t)) === !0
              );
            }),
            i =
              a ||
              (r.length === 0
                ? e.rawPath.startsWith(t) || (!o && n != null && C(e, n))
                : r.some(function (e) {
                    return e.startsWith(t);
                  }));
          i && H(e);
        }),
        o
      );
    }
    function F(e) {
      return (
        s.has(e.getPath()) ||
        B(e).some(function (t) {
          return C(t.sample, e);
        })
      );
    }
    function O(e) {
      var t = e.routeMatchInfos;
      return t.some(function (e) {
        var t = e.routeConflicts,
          n = e.routePath;
        return (
          n == null || (n.includes("{") && (t == null ? void 0 : t[n]) == null)
        );
      });
    }
    function B(e) {
      if (e == null) return [].concat(u, Array.from(c.values()).flat());
      var t = c.get(e.getPath());
      return t == null ? u : [].concat(t, u);
    }
    function W(e, t) {
      var n = function (t) {
        var e = t.rawPath,
          n = t.routeMatchInfos;
        return n.some(function (t) {
          var n = t.routeConflicts,
            r = t.routePath;
          return (
            r == null ||
            !_(r).regex.test(e) ||
            (r.includes("{") && (n == null ? void 0 : n[r]) == null)
          );
        });
      };
      return (
        !n(e) &&
        !n(t) &&
        G(e, t) &&
        b(e, t) &&
        e.routeMatchInfos.every(function (e, n) {
          return (
            (e.serverParamAccesses == null) ==
            (t.routeMatchInfos[n].serverParamAccesses == null)
          );
        })
      );
    }
    function q(e) {
      var t = w(e);
      if (t.length === 0 && !O(e)) return [u];
      var n = t.length === 0 ? c : s;
      return (t.length === 0 ? [e.rawPath] : t).map(function (e) {
        var t = n.get(e);
        return (t == null && ((t = []), n.set(e, t)), t);
      });
    }
    function U(e) {
      d.set(e, ++m);
      var t = h(e, null);
      q(e).forEach(function (n) {
        var r,
          o = n.find(function (t) {
            var n = t.sample;
            return W(n, e);
          });
        (o == null && ((o = { entriesByKey: new Map(), sample: e }), n.push(o)),
          o.entriesByKey.set(
            t,
            [e].concat((r = o.entriesByKey.get(t)) != null ? r : []),
          ));
      });
    }
    function V(e, t, n) {
      var r,
        o = w(e),
        a =
          o.length > 0
            ? [].concat(
                o.flatMap(function (e) {
                  var t;
                  return (t = s.get(e)) != null ? t : [];
                }),
                B(t).filter(function (e) {
                  return C(e.sample, t);
                }),
              )
            : [].concat(
                (r = s.get(t.getPath())) != null ? r : [],
                B(n ? null : t),
              ),
        i = new Set();
      return (
        a.forEach(function (r) {
          var o = r.entriesByKey,
            a = r.sample;
          if (n && G(e, a))
            o.forEach(function (e) {
              return e.forEach(function (e) {
                return i.add(e);
              });
            });
          else {
            var l,
              s = h(a, t);
            (s == null ? [] : (l = o.get(s)) != null ? l : []).forEach(
              function (e) {
                return i.add(e);
              },
            );
          }
        }),
        Array.from(i)
      );
    }
    function H(t) {
      var n;
      if (e.delete(t)) {
        var r = h(t, null);
        (q(t).forEach(function (e) {
          var n,
            o,
            a = e.findIndex(function (e) {
              var n;
              return (
                ((n = e.entriesByKey.get(r)) == null
                  ? void 0
                  : n.includes(t)) === !0
              );
            }),
            i = e[a];
          if (i != null) {
            var l = ((n = i.entriesByKey.get(r)) != null ? n : []).filter(
              function (e) {
                return e !== t;
              },
            );
            l.length === 0
              ? i.entriesByKey.delete(r)
              : i.entriesByKey.set(r, l);
            var s =
              (o = i.entriesByKey.values().next().value) == null
                ? void 0
                : o[0];
            s == null ? e.splice(a, 1) : (i.sample = s);
          }
        }),
          w(t).forEach(function (e) {
            var t;
            ((t = s.get(e)) == null ? void 0 : t.length) === 0 && s.delete(e);
          }),
          ((n = c.get(t.rawPath)) == null ? void 0 : n.length) === 0 &&
            c.delete(t.rawPath));
      }
    }
    function G(e, t) {
      return (
        e.routeMatchInfos.length === t.routeMatchInfos.length &&
        e.routeMatchInfos.every(function (e, n) {
          return z(e) === z(t.routeMatchInfos[n]);
        })
      );
    }
    function z(e) {
      var t = e.routePath;
      return t == null || t.includes("{")
        ? t
        : r("normalizeCometRouterConstUri")(t);
    }
    var j = {};
    function K(e, t) {
      return r("stableStringify")(r("buildRouteParams")(e, t, "significant"));
    }
    function Q(e) {
      var t = e.instanceParams,
        n = e.routeParams,
        o = e.routePath,
        a = r("buildRouteParams")(n, t, "path");
      return { pathParams: a, results: {}, routeParams: n, routePath: o };
    }
    var X = new Map();
    function Y() {
      X.clear();
    }
    function J(e, t, n, o) {
      return r("buildCometRouteFromDefinition")(
        e.hostableView != null || e.cannotBeHosted === !0
          ? e
          : babelHelpers.extends({}, e, { hostableView: e.rootView }),
        t,
        n,
        o,
      );
    }
    function Z(e, t, n, a, i, l, s) {
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
        var v = ae(
          (u = (c = m) == null ? void 0 : c.toString()) != null ? u : "",
          s,
        );
        return v != null ? v : !1;
      }
      if (t.type === "routeDefinition") {
        if (t.routeDefinition.prefetchable === !1) return !1;
        var S = babelHelpers.extends({}, a, l);
        return J(t.routeDefinition, e, r("buildRouteParams")(n, S, null), i);
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
    function ee(e, t, n, r) {
      var o = K(t.routeParams, babelHelpers.extends({}, t.pathParams, n)),
        a = t.results[o];
      return a == null
        ? null
        : a.type === "routeMatch"
          ? ee(e, a.routeMatch, n, r)
          : Z(e, a, t.routeParams, t.pathParams, t.routePath, n, r);
    }
    function te(e, t, n) {
      var o = ne(t);
      if (o.length === 0) return null;
      var a = o[0],
        i = [],
        l = [];
      for (var s of o) {
        if (re(a, s) !== 0) break;
        s.type === "cachedPath" ? l.push(s) : i.push(s.group);
      }
      var u = D(i, t);
      if (u != null) return oe(e, u, t, n);
      for (var c of l) {
        var d = c.results,
          m = c.routeParams,
          p = c.routePath,
          f = babelHelpers.extends({}, t.getQueryData(), _(p).getParams(t)),
          g = d[K(m, f)];
        if (g != null)
          return g.prefetchable === !1
            ? !1
            : J(g, e, r("buildRouteParams")(m, f, null), p);
      }
      return null;
    }
    function ne(e) {
      var t = [];
      for (var n of se) {
        var r = n.pathConflicts,
          o = n.routePath,
          a = _(o);
        a.test(e) &&
          !r.some(function (t) {
            return _(t).test(e);
          }) &&
          t.push(n);
      }
      var i = [];
      for (var l of B(e)) {
        var s = l.sample.routeMatchInfos[l.sample.routeMatchInfos.length - 1],
          u = s == null ? void 0 : s.routePath;
        s != null &&
          u != null &&
          C(l.sample, e) &&
          i.push({
            group: l,
            routeParams: s.routeParams,
            routePath: u,
            type: "dynamic",
          });
      }
      return (i.length > 0 && (t.push.apply(t, i), t.sort(re)), t);
    }
    function re(e, t) {
      return o("CometRoutePathComparator").compare(
        e.routePath,
        t.routePath,
        e.routeParams,
        t.routeParams,
      );
    }
    function oe(e, t, n, o) {
      var a = t.routeMatchInfos[t.routeMatchInfos.length - 1];
      if (a == null) return null;
      var i = f(a, n, t.rawPath);
      return i == null
        ? null
        : Z(
            e,
            t.result,
            a.routeParams,
            r("buildRouteParams")(a.routeParams, i, "path"),
            a.routePath,
            n.getQueryData(),
            o,
          );
    }
    function ae(e, t) {
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
      var a = X.get(n);
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
          (u = T(c)),
          u != null && u.rawPath === i)
        ) {
          var d = oe(n, u, c, t);
          return (d !== !1 && d != null && X.set(n, d), d);
        }
        s = u === null;
      }
      var m = j[i];
      if (m != null) {
        var p = ee(n, m, l, t);
        if (p === !1) return !1;
        if (p != null) return (X.set(n, p), p);
      }
      if (u != null && c != null) {
        var _ = oe(n, u, c, t);
        return (_ !== !1 && _ != null && X.set(n, _), _);
      }
      if (s) return null;
      if (c != null) {
        var f = te(n, c, t);
        return (f !== !1 && f != null && X.set(n, f), f);
      }
      return null;
    }
    function ie(e) {
      return X.get(r("normalizeCometRouterConstUri")(e));
    }
    function le(e) {
      var t = ae(e, new Set());
      return t === !1 ? null : t;
    }
    var se = [];
    function ue(e, t, n, r, a) {
      if (r != null) {
        var i = se.find(function (t) {
          return t.routePath === e;
        });
        if (i == null) {
          for (var l = 0, s = se.length; l < s; ) {
            var u = Math.floor((l + s) / 2),
              c = o("CometRoutePathComparator").compare(
                se[u].routePath,
                e,
                se[u].routeParams,
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
            se.splice(l, 0, i));
        }
        var d = K(t, a != null ? a : {});
        i.results[d] = n;
      }
    }
    function ce(e, t) {
      var n = t.instanceParams,
        r = t.routeConflicts,
        o = t.routeParams,
        a = t.routePath;
      e.type === "routeDefinition" &&
        a != null &&
        r != null &&
        a.includes("{") &&
        ue(a, o, e.routeDefinition, r[a], n);
    }
    function de(e) {
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
    function me(e, t) {
      var n = !1,
        r = !1;
      return (
        Object.keys(e.results).forEach(function (o) {
          var a = e.results[o];
          if ((a == null ? void 0 : a.type) === "routeMatch") {
            var i = me(a.routeMatch, t);
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
    function pe(e, t) {
      var n = new Set();
      e.routeMatchInfos.forEach(function (e) {
        var t = e.routePath;
        t != null && n.add(t);
      });
      var r = new Set([e.rawPath].concat(w(e))),
        o = new Set(n),
        a = !1;
      Object.keys(j).forEach(function (e) {
        var i = j[e];
        if (i != null) {
          var l = de(i);
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
              (delete j[e], (a = !0));
              return;
            }
            var s = me(i, t);
            ((a = a || s.didRemove), s.hasResults || (delete j[e], (a = !0)));
          }
        }
      });
      for (var i = se.length - 1; i >= 0; i--)
        o.has(se[i].routePath) && (se.splice(i, 1), (a = !0));
      return a;
    }
    function _e(e) {
      var t = o("ConstUriUtils").getUri(r("normalizeCometRouterConstUri")(e));
      return t != null && F(t);
    }
    function fe(e, t) {
      return (t === void 0 && (t = !0), (t && $()) || _e(e));
    }
    function ge(e, t, n, a, i) {
      var l = o("ConstUriUtils").getUri(r("normalizeCometRouterConstUri")(e));
      if (l != null) {
        var s = { rawPath: l.getPath(), result: t, routeMatchInfos: n },
          u = x(n);
        if (!(u === "legacy" && !a)) {
          var c = pe(s, i);
          (u === "legacy" && !F(l) && !c) || (P(s, l, !0, i), Y());
        }
      }
    }
    function he(e) {
      var t =
          $() ||
          e.some(function (e) {
            var t = e.routePath;
            return !t.includes("{") && _e(t);
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
              Ce(
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
              ? ue(i, a, o, l)
              : Ce(
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
      e.length > 0 && Y();
    }
    function ye(e, t, n, a, i) {
      var l = "",
        s = {},
        u = r("normalizeCometRouterConstUri")(e),
        c = o("ConstUriUtils").getUri(u);
      c != null && ((s = c.getQueryData()), (l = c.getPath()));
      var d = x(n);
      if (d !== "legacy") {
        if (c == null) return;
        var m = { rawPath: l, result: t, routeMatchInfos: n };
        (M(m, c, i), P(m, c, !1, i), Y());
        return;
      }
      c != null &&
        a &&
        N({ rawPath: l, result: t, routeMatchInfos: n }, c, i, !1);
      var p = j[l];
      p == null && ((p = j[l] = Q(n[0])), ce(t, n[0]));
      var _ = p;
      n.slice(1).forEach(function (e) {
        var n = _,
          r = n.results,
          o = K(_.routeParams, babelHelpers.extends({}, _.pathParams, s)),
          a = Q(e);
        (ce(t, e), (r[o] = { routeMatch: a, type: "routeMatch" }), (_ = a));
      });
      var f = K(_.routeParams, babelHelpers.extends({}, _.pathParams, s));
      ((_.results[f] = t), Y());
    }
    function Ce(e, t, n) {
      var r = e.rawUrl,
        o = e.result,
        a = e.routeMatchInfos;
      if (
        (o.type === "routeDefinition" &&
          o.routeDefinition.prefetchable === !1) ||
        (o.type === "routeRedirect" && o.routeRedirect.prefetchable === !1)
      ) {
        ge(r, o, a, t, n);
        return;
      }
      ye(r, o, a, t, n);
    }
    function be(e) {
      var t =
          e.some(function (e) {
            return x(e.routeMatchInfos) !== "legacy";
          }) ||
          $() ||
          e.some(function (e) {
            return _e(e.rawUrl);
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
                !y(
                  { rawPath: l, result: i, routeMatchInfos: e.routeMatchInfos },
                  s,
                ))) &&
            n.add(i);
        }
      }),
        e.forEach(function (e) {
          return Ce(e, t, n);
        }));
    }
    function ve(e, t, n) {
      be([
        {
          rawUrl: e,
          result: { routeDefinition: t, type: "routeDefinition" },
          routeMatchInfos: n,
        },
      ]);
    }
    function Se(e, t, n) {
      be([
        {
          rawUrl: e,
          result: { routeResolver: t, type: "routeResolver" },
          routeMatchInfos: n,
        },
      ]);
    }
    function Re(e, t, n) {
      be([
        {
          rawUrl: e,
          redirectUrl: t.url,
          result: { routeRedirect: t, type: "routeRedirect" },
          routeMatchInfos: n,
        },
      ]);
    }
    function Le(e) {
      var t = new Set(),
        n = o("ConstUriUtils").getUri(r("normalizeCometRouterConstUri")(e)),
        a = Object.keys(j).filter(function (t) {
          return t.startsWith(e);
        }),
        i = A(e, n, a.length > 0);
      a.forEach(function (e) {
        var n;
        (t.add((n = j[e]) == null ? void 0 : n.routePath), delete j[e]);
      });
      for (var l = se.length - 1; l >= 0; l--) {
        var s = se[l];
        (t.has(s.routePath) ||
          s.routePath.startsWith(e) ||
          (!i && n != null && _(s.routePath).test(n))) &&
          se.splice(l, 1);
      }
      Y();
    }
    var Ee = null,
      ke = {
        dump: Ee,
        getCachedRoute: ie,
        getRoute: le,
        installBatch: be,
        installPaths: he,
        installRedirect: Re,
        installRoute: ve,
        installRouteResolver: Se,
        invalidatePath: Le,
        needsDynamicCacheReconciliation: fe,
      };
    l.default = ke;
  },
  98,
);
