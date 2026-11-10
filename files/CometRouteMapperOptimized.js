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
      var r = e.instanceParams,
        o = e.routeConflicts,
        a = e.routePath;
      if (a == null)
        return t.getPath() === n
          ? babelHelpers.extends({}, r, t.getQueryData())
          : null;
      var i = _(a),
        l = i.test(t);
      if (l && a.includes("{")) {
        var s = o == null ? void 0 : o[a];
        if (s == null) {
          if (t.getPath() !== n) return null;
        } else if (
          s.some(function (e) {
            return _(e).test(t);
          })
        )
          return null;
      }
      return !l && t.getPath() !== n
        ? null
        : l
          ? babelHelpers.extends({}, t.getQueryData(), i.getParams(t))
          : babelHelpers.extends({}, r, t.getQueryData());
    }
    function g(e, t) {
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
        for (var p of [].concat(R(i)).sort()) if (((m = d(p)), m)) return m.v;
      }
      return JSON.stringify(a);
    }
    function h(e, t) {
      var n = g(e, null);
      return n != null && n === g(e, t);
    }
    function y(e, t) {
      return e.routeMatchInfos.every(function (n) {
        return f(n, t, e.rawPath) != null;
      });
    }
    function C(e, t) {
      return (
        e.routeMatchInfos.length === t.routeMatchInfos.length &&
        e.routeMatchInfos.every(function (e, n) {
          var r,
            o,
            a = t.routeMatchInfos[n],
            i = e.routePath;
          return (
            i === a.routePath &&
            b(e.routeParams, a.routeParams) &&
            v(
              i == null ? null : (r = e.routeConflicts) == null ? void 0 : r[i],
              i == null ? null : (o = a.routeConflicts) == null ? void 0 : o[i],
            ) &&
            S(e, a)
          );
        })
      );
    }
    function b(e, t) {
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
                v(r.legacyNames, o.legacyNames))
            );
          });
    }
    function v(e, t) {
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
    function S(e, t) {
      var n = R(e),
        r = R(t);
      return (
        n.length === r.length &&
        n.every(function (e) {
          return r.includes(e);
        })
      );
    }
    function R(e) {
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
    function L(e) {
      var t,
        n =
          (t = e.routeMatchInfos[e.routeMatchInfos.length - 1]) == null
            ? void 0
            : t.routePath;
      return n == null ? !0 : _(n).regex.test(e.rawPath);
    }
    function E(e, t) {
      return e.result.type === "routeRedirect" && t.has(e.result);
    }
    function k(e, t, n, r) {
      for (var o of t)
        if (!E(o, r)) {
          var a = H(e, o);
          (a && L(o) && !L(e)) ||
            ((a || e.rawPath === o.rawPath) && h(o, n) && V(o));
        }
    }
    function I(e) {
      var t = s.get(e.getPath());
      return t == null ? void 0 : T(t, e);
    }
    function T(e, t) {
      var n = t.getPath(),
        r = null;
      for (var o of e) {
        var a = g(o.sample, t);
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
    function D(e) {
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
    function x() {
      for (var t of e)
        if (
          t.result.type === "routeRedirect" &&
          t.result.routeRedirect.prefetchable !== !1 &&
          D(t.routeMatchInfos) === "dynamic"
        )
          return !0;
      return !1;
    }
    function $(t, n, r, o) {
      if (D(t.routeMatchInfos) === "skip") {
        (P(t, n, o, !0), e.add(t), q(t));
        return;
      }
      var a = U(t, n, r);
      (k(t, a, n, o),
        r &&
          a.forEach(function (e) {
            !E(e, o) &&
              D(e.routeMatchInfos) !== "legacy" &&
              ((t.rawPath === e.rawPath && h(e, n)) || H(t, e)) &&
              V(e);
          }),
        e.add(t),
        q(t));
    }
    function P(e, t, n, r) {
      U(e, t, r).forEach(function (o) {
        var a = H(o, e);
        !E(o, n) &&
          ((r && a && y(o, t)) ||
            ((a || e.rawPath === o.rawPath) && h(o, t))) &&
          V(o);
      });
    }
    function N(e, t, n) {
      var r = t.getQueryData(),
        o = new Set(
          e.routeMatchInfos.map(function (e) {
            return e.routePath;
          }),
        );
      new Set([e.rawPath].concat(M(e))).forEach(function (e) {
        for (var t = z[e]; t != null; ) {
          o.add(t.routePath);
          var a = j(t.routeParams, babelHelpers.extends({}, t.pathParams, r)),
            i = t.results[a];
          if ((i == null ? void 0 : i.type) === "routeMatch") {
            t = i.routeMatch;
            continue;
          }
          (i != null && !n.has(i) && delete t.results[a], (t = null));
        }
      });
      for (var a = le.length - 1; a >= 0; a--)
        o.has(le[a].routePath) && le.splice(a, 1);
    }
    function M(e) {
      var t = e.routeMatchInfos[e.routeMatchInfos.length - 1],
        n = t == null ? void 0 : t.routePath;
      if (n == null) return [e.rawPath];
      if (n.includes("{")) return [];
      var o = r("normalizeCometRouterConstUri")(n);
      return o === e.rawPath ? [e.rawPath] : [e.rawPath, o];
    }
    function w(t, n, r) {
      var o = r;
      return (
        e.forEach(function (e) {
          var n = M(e);
          (e.rawPath.startsWith(t) ||
            n.some(function (e) {
              return e.startsWith(t);
            })) &&
            (o = !0);
        }),
        e.forEach(function (e) {
          var r = M(e),
            a = e.routeMatchInfos.some(function (e) {
              var n;
              return (
                ((n = e.routePath) == null ? void 0 : n.startsWith(t)) === !0
              );
            }),
            i =
              a ||
              (r.length === 0
                ? e.rawPath.startsWith(t) || (!o && n != null && y(e, n))
                : r.some(function (e) {
                    return e.startsWith(t);
                  }));
          i && V(e);
        }),
        o
      );
    }
    function A(e) {
      return (
        s.has(e.getPath()) ||
        O(e).some(function (t) {
          return y(t.sample, e);
        })
      );
    }
    function F(e) {
      var t = e.routeMatchInfos;
      return t.some(function (e) {
        var t = e.routeConflicts,
          n = e.routePath;
        return (
          n == null || (n.includes("{") && (t == null ? void 0 : t[n]) == null)
        );
      });
    }
    function O(e) {
      if (e == null) return [].concat(u, Array.from(c.values()).flat());
      var t = c.get(e.getPath());
      return t == null ? u : [].concat(t, u);
    }
    function B(e, t) {
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
        H(e, t) &&
        C(e, t) &&
        e.routeMatchInfos.every(function (e, n) {
          return (
            (e.serverParamAccesses == null) ==
            (t.routeMatchInfos[n].serverParamAccesses == null)
          );
        })
      );
    }
    function W(e) {
      var t = M(e);
      if (t.length === 0 && !F(e)) return [u];
      var n = t.length === 0 ? c : s;
      return (t.length === 0 ? [e.rawPath] : t).map(function (e) {
        var t = n.get(e);
        return (t == null && ((t = []), n.set(e, t)), t);
      });
    }
    function q(e) {
      d.set(e, ++m);
      var t = g(e, null);
      W(e).forEach(function (n) {
        var r,
          o = n.find(function (t) {
            var n = t.sample;
            return B(n, e);
          });
        (o == null && ((o = { entriesByKey: new Map(), sample: e }), n.push(o)),
          o.entriesByKey.set(
            t,
            [e].concat((r = o.entriesByKey.get(t)) != null ? r : []),
          ));
      });
    }
    function U(e, t, n) {
      var r,
        o = M(e),
        a =
          o.length > 0
            ? [].concat(
                o.flatMap(function (e) {
                  var t;
                  return (t = s.get(e)) != null ? t : [];
                }),
                O(t).filter(function (e) {
                  return y(e.sample, t);
                }),
              )
            : [].concat(
                (r = s.get(t.getPath())) != null ? r : [],
                O(n ? null : t),
              ),
        i = new Set();
      return (
        a.forEach(function (r) {
          var o = r.entriesByKey,
            a = r.sample;
          if (n && H(e, a))
            o.forEach(function (e) {
              return e.forEach(function (e) {
                return i.add(e);
              });
            });
          else {
            var l,
              s = g(a, t);
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
    function V(t) {
      var n;
      if (e.delete(t)) {
        var r = g(t, null);
        (W(t).forEach(function (e) {
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
          M(t).forEach(function (e) {
            var t;
            ((t = s.get(e)) == null ? void 0 : t.length) === 0 && s.delete(e);
          }),
          ((n = c.get(t.rawPath)) == null ? void 0 : n.length) === 0 &&
            c.delete(t.rawPath));
      }
    }
    function H(e, t) {
      return (
        e.routeMatchInfos.length === t.routeMatchInfos.length &&
        e.routeMatchInfos.every(function (e, n) {
          return G(e) === G(t.routeMatchInfos[n]);
        })
      );
    }
    function G(e) {
      var t = e.routePath;
      return t == null || t.includes("{")
        ? t
        : r("normalizeCometRouterConstUri")(t);
    }
    var z = {};
    function j(e, t) {
      return r("stableStringify")(r("buildRouteParams")(e, t, "significant"));
    }
    function K(e) {
      var t = e.instanceParams,
        n = e.routeParams,
        o = e.routePath,
        a = r("buildRouteParams")(n, t, "path");
      return { pathParams: a, results: {}, routeParams: n, routePath: o };
    }
    var Q = new Map();
    function X() {
      Q.clear();
    }
    function Y(e, t, n, o) {
      return r("buildCometRouteFromDefinition")(
        e.hostableView != null || e.cannotBeHosted === !0
          ? e
          : babelHelpers.extends({}, e, { hostableView: e.rootView }),
        t,
        n,
        o,
      );
    }
    function J(e, t, n, a, i, l, s) {
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
        var v = oe(
          (u = (c = m) == null ? void 0 : c.toString()) != null ? u : "",
          s,
        );
        return v != null ? v : !1;
      }
      if (t.type === "routeDefinition") {
        if (t.routeDefinition.prefetchable === !1) return !1;
        var S = babelHelpers.extends({}, a, l);
        return Y(t.routeDefinition, e, r("buildRouteParams")(n, S, null), i);
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
    function Z(e, t, n, r) {
      var o = j(t.routeParams, babelHelpers.extends({}, t.pathParams, n)),
        a = t.results[o];
      return a == null
        ? null
        : a.type === "routeMatch"
          ? Z(e, a.routeMatch, n, r)
          : J(e, a, t.routeParams, t.pathParams, t.routePath, n, r);
    }
    function ee(e, t, n) {
      var o = te(t);
      if (o.length === 0) return null;
      var a = o[0],
        i = [],
        l = [];
      for (var s of o) {
        if (ne(a, s) !== 0) break;
        s.type === "cachedPath" ? l.push(s) : i.push(s.group);
      }
      var u = T(i, t);
      if (u != null) return re(e, u, t, n);
      for (var c of l) {
        var d = c.results,
          m = c.routeParams,
          p = c.routePath,
          f = babelHelpers.extends({}, t.getQueryData(), _(p).getParams(t)),
          g = d[j(m, f)];
        if (g != null)
          return g.prefetchable === !1
            ? !1
            : Y(g, e, r("buildRouteParams")(m, f, null), p);
      }
      return null;
    }
    function te(e) {
      var t = [];
      for (var n of le) {
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
      for (var l of O(e)) {
        var s = l.sample.routeMatchInfos[l.sample.routeMatchInfos.length - 1],
          u = s == null ? void 0 : s.routePath;
        s != null &&
          u != null &&
          y(l.sample, e) &&
          i.push({
            group: l,
            routeParams: s.routeParams,
            routePath: u,
            type: "dynamic",
          });
      }
      return (i.length > 0 && (t.push.apply(t, i), t.sort(ne)), t);
    }
    function ne(e, t) {
      return o("CometRoutePathComparator").compare(
        e.routePath,
        t.routePath,
        e.routeParams,
        t.routeParams,
      );
    }
    function re(e, t, n, o) {
      var a = t.routeMatchInfos[t.routeMatchInfos.length - 1];
      if (a == null) return null;
      var i = f(a, n, t.rawPath);
      return i == null
        ? null
        : J(
            e,
            t.result,
            a.routeParams,
            r("buildRouteParams")(a.routeParams, i, "path"),
            a.routePath,
            n.getQueryData(),
            o,
          );
    }
    function oe(e, t) {
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
      var a = Q.get(n);
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
          (u = I(c)),
          u != null && u.rawPath === i)
        ) {
          var d = re(n, u, c, t);
          return (d !== !1 && d != null && Q.set(n, d), d);
        }
        s = u === null;
      }
      var m = z[i];
      if (m != null) {
        var p = Z(n, m, l, t);
        if (p === !1) return !1;
        if (p != null) return (Q.set(n, p), p);
      }
      if (u != null && c != null) {
        var _ = re(n, u, c, t);
        return (_ !== !1 && _ != null && Q.set(n, _), _);
      }
      if (s) return null;
      if (c != null) {
        var f = ee(n, c, t);
        return (f !== !1 && f != null && Q.set(n, f), f);
      }
      return null;
    }
    function ae(e) {
      return Q.get(r("normalizeCometRouterConstUri")(e));
    }
    function ie(e) {
      var t = oe(e, new Set());
      return t === !1 ? null : t;
    }
    var le = [];
    function se(e, t, n, r, a) {
      if (r != null) {
        var i = le.find(function (t) {
          return t.routePath === e;
        });
        if (i == null) {
          for (var l = 0, s = le.length; l < s; ) {
            var u = Math.floor((l + s) / 2),
              c = o("CometRoutePathComparator").compare(
                le[u].routePath,
                e,
                le[u].routeParams,
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
            le.splice(l, 0, i));
        }
        var d = j(t, a != null ? a : {});
        i.results[d] = n;
      }
    }
    function ue(e, t) {
      var n = t.instanceParams,
        r = t.routeConflicts,
        o = t.routeParams,
        a = t.routePath;
      e.type === "routeDefinition" &&
        a != null &&
        r != null &&
        a.includes("{") &&
        se(a, o, e.routeDefinition, r[a], n);
    }
    function ce(e) {
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
    function de(e, t) {
      var n = !1,
        r = !1;
      return (
        Object.keys(e.results).forEach(function (o) {
          var a = e.results[o];
          if ((a == null ? void 0 : a.type) === "routeMatch") {
            var i = de(a.routeMatch, t);
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
    function me(e, t) {
      var n = new Set();
      e.routeMatchInfos.forEach(function (e) {
        var t = e.routePath;
        t != null && n.add(t);
      });
      var r = new Set([e.rawPath].concat(M(e))),
        o = new Set(n),
        a = !1;
      Object.keys(z).forEach(function (e) {
        var i = z[e];
        if (i != null) {
          var l = ce(i);
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
              (delete z[e], (a = !0));
              return;
            }
            var s = de(i, t);
            ((a = a || s.didRemove), s.hasResults || (delete z[e], (a = !0)));
          }
        }
      });
      for (var i = le.length - 1; i >= 0; i--)
        o.has(le[i].routePath) && (le.splice(i, 1), (a = !0));
      return a;
    }
    function pe(e) {
      var t = o("ConstUriUtils").getUri(r("normalizeCometRouterConstUri")(e));
      return t != null && A(t);
    }
    function _e(e, t) {
      return (t === void 0 && (t = !0), (t && x()) || pe(e));
    }
    function fe(e, t, n, a, i) {
      var l = o("ConstUriUtils").getUri(r("normalizeCometRouterConstUri")(e));
      if (l != null) {
        var s = { rawPath: l.getPath(), result: t, routeMatchInfos: n },
          u = D(n);
        if (!(u === "legacy" && !a)) {
          var c = me(s, i);
          (u === "legacy" && !A(l) && !c) || ($(s, l, !0, i), X());
        }
      }
    }
    function ge(e) {
      var t =
          x() ||
          e.some(function (e) {
            var t = e.routePath;
            return !t.includes("{") && pe(t);
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
              ye(
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
              ? se(i, a, o, l)
              : ye(
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
      e.length > 0 && X();
    }
    function he(e, t, n, a, i) {
      var l = "",
        s = {},
        u = r("normalizeCometRouterConstUri")(e),
        c = o("ConstUriUtils").getUri(u);
      c != null && ((s = c.getQueryData()), (l = c.getPath()));
      var d = D(n);
      if (d !== "legacy") {
        if (c == null) return;
        var m = { rawPath: l, result: t, routeMatchInfos: n };
        (N(m, c, i), $(m, c, !1, i), X());
        return;
      }
      c != null &&
        a &&
        P({ rawPath: l, result: t, routeMatchInfos: n }, c, i, !1);
      var p = z[l];
      p == null && ((p = z[l] = K(n[0])), ue(t, n[0]));
      var _ = p;
      n.slice(1).forEach(function (e) {
        var n = _,
          r = n.results,
          o = j(_.routeParams, babelHelpers.extends({}, _.pathParams, s)),
          a = K(e);
        (ue(t, e), (r[o] = { routeMatch: a, type: "routeMatch" }), (_ = a));
      });
      var f = j(_.routeParams, babelHelpers.extends({}, _.pathParams, s));
      ((_.results[f] = t), X());
    }
    function ye(e, t, n) {
      var r = e.rawUrl,
        o = e.result,
        a = e.routeMatchInfos;
      if (
        (o.type === "routeDefinition" &&
          o.routeDefinition.prefetchable === !1) ||
        (o.type === "routeRedirect" && o.routeRedirect.prefetchable === !1)
      ) {
        fe(r, o, a, t, n);
        return;
      }
      he(r, o, a, t, n);
    }
    function Ce(e) {
      var t =
          e.some(function (e) {
            return D(e.routeMatchInfos) !== "legacy";
          }) ||
          x() ||
          e.some(function (e) {
            return pe(e.rawUrl);
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
                !h(
                  { rawPath: l, result: i, routeMatchInfos: e.routeMatchInfos },
                  s,
                ))) &&
            n.add(i);
        }
      }),
        e.forEach(function (e) {
          return ye(e, t, n);
        }));
    }
    function be(e, t, n) {
      Ce([
        {
          rawUrl: e,
          result: { routeDefinition: t, type: "routeDefinition" },
          routeMatchInfos: n,
        },
      ]);
    }
    function ve(e, t, n) {
      Ce([
        {
          rawUrl: e,
          result: { routeResolver: t, type: "routeResolver" },
          routeMatchInfos: n,
        },
      ]);
    }
    function Se(e, t, n) {
      Ce([
        {
          rawUrl: e,
          redirectUrl: t.url,
          result: { routeRedirect: t, type: "routeRedirect" },
          routeMatchInfos: n,
        },
      ]);
    }
    function Re(e) {
      var t = new Set(),
        n = o("ConstUriUtils").getUri(r("normalizeCometRouterConstUri")(e)),
        a = Object.keys(z).filter(function (t) {
          return t.startsWith(e);
        }),
        i = w(e, n, a.length > 0);
      a.forEach(function (e) {
        var n;
        (t.add((n = z[e]) == null ? void 0 : n.routePath), delete z[e]);
      });
      for (var l = le.length - 1; l >= 0; l--) {
        var s = le[l];
        (t.has(s.routePath) ||
          s.routePath.startsWith(e) ||
          (!i && n != null && _(s.routePath).test(n))) &&
          le.splice(l, 1);
      }
      X();
    }
    var Le = null,
      Ee = {
        dump: Le,
        getCachedRoute: ae,
        getRoute: ie,
        installBatch: Ce,
        installPaths: ge,
        installRedirect: Se,
        installRoute: be,
        installRouteResolver: ve,
        invalidatePath: Re,
        needsDynamicCacheReconciliation: _e,
      };
    l.default = Ee;
  },
  98,
);
