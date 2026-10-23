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
      c = new WeakMap(),
      d = 0,
      m = new Map();
    function p(e) {
      var t = m.get(e);
      return (t == null && ((t = r("getURLPathParser")(e)), m.set(e, t)), t);
    }
    function _(e, t, n) {
      var r = e.instanceParams,
        o = e.routeConflicts,
        a = e.routePath;
      if (a == null)
        return t.getPath() === n
          ? babelHelpers.extends({}, r, t.getQueryData())
          : null;
      var i = p(a),
        l = i.test(t);
      if (l && a.includes("{")) {
        var s = o == null ? void 0 : o[a];
        if (s == null) {
          if (t.getPath() !== n) return null;
        } else if (
          s.some(function (e) {
            return p(e).test(t);
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
    function f(e, t) {
      var n = e.rawPath,
        o = e.routeMatchInfos,
        a = [];
      for (var i of o) {
        var l = i.instanceParams,
          s = i.routeParams,
          u = i.serverParamAccesses,
          c = t == null ? l : _(i, t, n);
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
        for (var p of [].concat(S(i)).sort()) if (((m = d(p)), m)) return m.v;
      }
      return JSON.stringify(a);
    }
    function g(e, t) {
      var n = f(e, null);
      return n != null && n === f(e, t);
    }
    function h(e, t) {
      return e.routeMatchInfos.every(function (n) {
        return _(n, t, e.rawPath) != null;
      });
    }
    function y(e, t) {
      return (
        e.routeMatchInfos.length === t.routeMatchInfos.length &&
        e.routeMatchInfos.every(function (e, n) {
          var r,
            o,
            a = t.routeMatchInfos[n],
            i = e.routePath;
          return (
            i === a.routePath &&
            C(e.routeParams, a.routeParams) &&
            b(
              i == null ? null : (r = e.routeConflicts) == null ? void 0 : r[i],
              i == null ? null : (o = a.routeConflicts) == null ? void 0 : o[i],
            ) &&
            v(e, a)
          );
        })
      );
    }
    function C(e, t) {
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
                b(r.legacyNames, o.legacyNames))
            );
          });
    }
    function b(e, t) {
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
    function v(e, t) {
      var n = S(e),
        r = S(t);
      return (
        n.length === r.length &&
        n.every(function (e) {
          return r.includes(e);
        })
      );
    }
    function S(e) {
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
    function R(e) {
      var t,
        n =
          (t = e.routeMatchInfos[e.routeMatchInfos.length - 1]) == null
            ? void 0
            : t.routePath;
      return n == null ? !0 : p(n).regex.test(e.rawPath);
    }
    function L(e, t) {
      return e.result.type === "routeRedirect" && t.has(e.result);
    }
    function E(e, t, n, r) {
      for (var o of t)
        if (!L(o, r)) {
          var a = W(e, o);
          (a && R(o) && !R(e)) ||
            (((a && (!y(e, o) || g(o, n))) ||
              (e.rawPath === o.rawPath && g(o, n))) &&
              B(o));
        }
    }
    function k(e) {
      var t = s.get(e.getPath());
      return t == null ? void 0 : I(t, e);
    }
    function I(e, t) {
      var n = t.getPath(),
        r = null;
      for (var o of e) {
        var a = f(o.sample, t);
        for (var i of a == null
          ? []
          : (l = o.entriesByKey.get(a)) != null
            ? l
            : []) {
          var l,
            s,
            u,
            d = i.rawPath === n;
          (r == null ||
            (d && r.rawPath !== n) ||
            (d === (r.rawPath === n) &&
              ((s = c.get(i)) != null ? s : 0) >
                ((u = c.get(r)) != null ? u : 0))) &&
            (r = i);
        }
      }
      return r;
    }
    function T(e) {
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
    function D() {
      for (var t of e)
        if (
          t.result.type === "routeRedirect" &&
          t.result.routeRedirect.prefetchable !== !1 &&
          T(t.routeMatchInfos) === "dynamic"
        )
          return !0;
      return !1;
    }
    function x(t, n, r, o) {
      if (T(t.routeMatchInfos) === "skip") {
        ($(t, n, o), e.add(t), F(t));
        return;
      }
      var a = O(t, n, r);
      (E(t, a, n, o),
        r &&
          a.forEach(function (e) {
            !L(e, o) &&
              T(e.routeMatchInfos) !== "legacy" &&
              ((t.rawPath === e.rawPath && g(e, n)) || W(t, e)) &&
              B(e);
          }),
        e.add(t),
        F(t));
    }
    function $(e, t, n) {
      var r = O(e, t, !0);
      r.forEach(function (r) {
        !L(r, n) &&
          ((W(r, e) && h(r, t)) || (e.rawPath === r.rawPath && g(r, t))) &&
          B(r);
      });
    }
    function P(e) {
      var t = e.routeMatchInfos[e.routeMatchInfos.length - 1],
        n = t == null ? void 0 : t.routePath;
      if (n == null) return [e.rawPath];
      if (n.includes("{")) return [];
      var o = r("normalizeCometRouterConstUri")(n);
      return o === e.rawPath ? [e.rawPath] : [e.rawPath, o];
    }
    function N(t, n, r) {
      var o = r;
      return (
        e.forEach(function (e) {
          var n = P(e);
          (e.rawPath.startsWith(t) ||
            n.some(function (e) {
              return e.startsWith(t);
            })) &&
            (o = !0);
        }),
        e.forEach(function (e) {
          var r = P(e),
            a = e.routeMatchInfos.some(function (e) {
              var n;
              return (
                ((n = e.routePath) == null ? void 0 : n.startsWith(t)) === !0
              );
            }),
            i =
              a ||
              (r.length === 0
                ? e.rawPath.startsWith(t) || (!o && n != null && h(e, n))
                : r.some(function (e) {
                    return e.startsWith(t);
                  }));
          i && B(e);
        }),
        o
      );
    }
    function M(e) {
      return (
        s.has(e.getPath()) ||
        u.some(function (t) {
          return h(t.sample, e);
        })
      );
    }
    function w(e, t) {
      var n = function (t) {
        var e = t.rawPath,
          n = t.routeMatchInfos;
        return n.some(function (t) {
          var n = t.routeConflicts,
            r = t.routePath;
          return (
            r == null ||
            !p(r).regex.test(e) ||
            (r.includes("{") && (n == null ? void 0 : n[r]) == null)
          );
        });
      };
      return (
        !n(e) &&
        !n(t) &&
        W(e, t) &&
        y(e, t) &&
        e.routeMatchInfos.every(function (e, n) {
          return (
            (e.serverParamAccesses == null) ==
            (t.routeMatchInfos[n].serverParamAccesses == null)
          );
        })
      );
    }
    function A(e) {
      var t = P(e);
      return t.length === 0
        ? [u]
        : t.map(function (e) {
            var t = s.get(e);
            return (t == null && ((t = []), s.set(e, t)), t);
          });
    }
    function F(e) {
      c.set(e, ++d);
      var t = f(e, null);
      A(e).forEach(function (n) {
        var r,
          o = n.find(function (t) {
            var n = t.sample;
            return w(n, e);
          });
        (o == null && ((o = { entriesByKey: new Map(), sample: e }), n.push(o)),
          o.entriesByKey.set(
            t,
            [e].concat((r = o.entriesByKey.get(t)) != null ? r : []),
          ));
      });
    }
    function O(e, t, n) {
      var r,
        o = P(e),
        a =
          o.length > 0
            ? [].concat(
                o.flatMap(function (e) {
                  var t;
                  return (t = s.get(e)) != null ? t : [];
                }),
                u.filter(function (e) {
                  return h(e.sample, t);
                }),
              )
            : [].concat((r = s.get(t.getPath())) != null ? r : [], u),
        i = new Set();
      return (
        a.forEach(function (r) {
          var o = r.entriesByKey,
            a = r.sample;
          if (W(e, a) && (n || !y(e, a)))
            o.forEach(function (e) {
              return e.forEach(function (e) {
                return i.add(e);
              });
            });
          else {
            var l,
              s = f(a, t);
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
    function B(t) {
      if (e.delete(t)) {
        var n = f(t, null);
        (A(t).forEach(function (e) {
          var r,
            o,
            a = e.findIndex(function (e) {
              var r;
              return (
                ((r = e.entriesByKey.get(n)) == null
                  ? void 0
                  : r.includes(t)) === !0
              );
            }),
            i = e[a];
          if (i != null) {
            var l = ((r = i.entriesByKey.get(n)) != null ? r : []).filter(
              function (e) {
                return e !== t;
              },
            );
            l.length === 0
              ? i.entriesByKey.delete(n)
              : i.entriesByKey.set(n, l);
            var s =
              (o = i.entriesByKey.values().next().value) == null
                ? void 0
                : o[0];
            s == null ? e.splice(a, 1) : (i.sample = s);
          }
        }),
          P(t).forEach(function (e) {
            var t;
            ((t = s.get(e)) == null ? void 0 : t.length) === 0 && s.delete(e);
          }));
      }
    }
    function W(e, t) {
      return (
        e.routeMatchInfos.length === t.routeMatchInfos.length &&
        e.routeMatchInfos.every(function (e, n) {
          return q(e) === q(t.routeMatchInfos[n]);
        })
      );
    }
    function q(e) {
      var t = e.routePath;
      return t == null || t.includes("{")
        ? t
        : r("normalizeCometRouterConstUri")(t);
    }
    var U = {};
    function V(e, t) {
      return r("stableStringify")(r("buildRouteParams")(e, t, "significant"));
    }
    function H(e) {
      var t = e.instanceParams,
        n = e.routeParams,
        o = e.routePath,
        a = r("buildRouteParams")(n, t, "path");
      return { pathParams: a, results: {}, routeParams: n, routePath: o };
    }
    var G = new Map();
    function z() {
      G.clear();
    }
    function j(e, t, n, o) {
      return r("buildCometRouteFromDefinition")(
        e.hostableView != null || e.cannotBeHosted === !0
          ? e
          : babelHelpers.extends({}, e, { hostableView: e.rootView }),
        t,
        n,
        o,
      );
    }
    function K(e, t, n, a, i, l, s) {
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
        var v = ee(
          (u = (c = m) == null ? void 0 : c.toString()) != null ? u : "",
          s,
        );
        return v != null ? v : !1;
      }
      if (t.type === "routeDefinition") {
        if (t.routeDefinition.prefetchable === !1) return !1;
        var S = babelHelpers.extends({}, a, l);
        return j(t.routeDefinition, e, r("buildRouteParams")(n, S, null), i);
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
    function Q(e, t, n, r) {
      var o = V(t.routeParams, babelHelpers.extends({}, t.pathParams, n)),
        a = t.results[o];
      return a == null
        ? null
        : a.type === "routeMatch"
          ? Q(e, a.routeMatch, n, r)
          : K(e, a, t.routeParams, t.pathParams, t.routePath, n, r);
    }
    function X(e, t, n) {
      var o = Y(t);
      if (o.length === 0) return null;
      var a = o[0],
        i = [],
        l = [];
      for (var s of o) {
        if (J(a, s) !== 0) break;
        s.type === "cachedPath" ? l.push(s) : i.push(s.group);
      }
      var u = I(i, t);
      if (u != null) return Z(e, u, t, n);
      for (var c of l) {
        var d = c.results,
          m = c.routeParams,
          _ = c.routePath,
          f = babelHelpers.extends({}, t.getQueryData(), p(_).getParams(t)),
          g = d[V(m, f)];
        if (g != null)
          return g.prefetchable === !1
            ? !1
            : j(g, e, r("buildRouteParams")(m, f, null), _);
      }
      return null;
    }
    function Y(e) {
      var t = [];
      for (var n of re) {
        var r = n.pathConflicts,
          o = n.routePath,
          a = p(o);
        a.test(e) &&
          !r.some(function (t) {
            return p(t).test(e);
          }) &&
          t.push(n);
      }
      var i = [];
      for (var l of u) {
        var s = l.sample.routeMatchInfos[l.sample.routeMatchInfos.length - 1],
          c = s == null ? void 0 : s.routePath;
        s != null &&
          c != null &&
          h(l.sample, e) &&
          i.push({
            group: l,
            routeParams: s.routeParams,
            routePath: c,
            type: "dynamic",
          });
      }
      return (i.length > 0 && (t.push.apply(t, i), t.sort(J)), t);
    }
    function J(e, t) {
      return o("CometRoutePathComparator").compare(
        e.routePath,
        t.routePath,
        e.routeParams,
        t.routeParams,
      );
    }
    function Z(e, t, n, o) {
      var a = t.routeMatchInfos[t.routeMatchInfos.length - 1];
      if (a == null) return null;
      var i = _(a, n, t.rawPath);
      return i == null
        ? null
        : K(
            e,
            t.result,
            a.routeParams,
            r("buildRouteParams")(a.routeParams, i, "path"),
            a.routePath,
            n.getQueryData(),
            o,
          );
    }
    function ee(e, t) {
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
      var a = G.get(n);
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
          (u = k(c)),
          u != null && u.rawPath === i)
        ) {
          var d = Z(n, u, c, t);
          return (d !== !1 && d != null && G.set(n, d), d);
        }
        s = u === null;
      }
      var m = U[i];
      if (m != null) {
        var p = Q(n, m, l, t);
        if (p === !1) return !1;
        if (p != null) return (G.set(n, p), p);
      }
      if (u != null && c != null) {
        var _ = Z(n, u, c, t);
        return (_ !== !1 && _ != null && G.set(n, _), _);
      }
      if (s) return null;
      if (c != null) {
        var f = X(n, c, t);
        return (f !== !1 && f != null && G.set(n, f), f);
      }
      return null;
    }
    function te(e) {
      return G.get(r("normalizeCometRouterConstUri")(e));
    }
    function ne(e) {
      var t = ee(e, new Set());
      return t === !1 ? null : t;
    }
    var re = [];
    function oe(e, t, n, r, a) {
      if (r != null) {
        var i = re.find(function (t) {
          return t.routePath === e;
        });
        if (i == null) {
          for (var l = 0, s = re.length; l < s; ) {
            var u = Math.floor((l + s) / 2),
              c = o("CometRoutePathComparator").compare(
                re[u].routePath,
                e,
                re[u].routeParams,
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
            re.splice(l, 0, i));
        }
        var d = V(t, a != null ? a : {});
        i.results[d] = n;
      }
    }
    function ae(e, t) {
      var n = t.instanceParams,
        r = t.routeConflicts,
        o = t.routeParams,
        a = t.routePath;
      e.type === "routeDefinition" &&
        a != null &&
        r != null &&
        a.includes("{") &&
        oe(a, o, e.routeDefinition, r[a], n);
    }
    function ie(e) {
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
    function le(e, t) {
      var n = !1,
        r = !1;
      return (
        Object.keys(e.results).forEach(function (o) {
          var a = e.results[o];
          if ((a == null ? void 0 : a.type) === "routeMatch") {
            var i = le(a.routeMatch, t);
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
    function se(e, t) {
      var n = new Set();
      e.routeMatchInfos.forEach(function (e) {
        var t = e.routePath;
        t != null && n.add(t);
      });
      var r = new Set([e.rawPath].concat(P(e))),
        o = new Set(n),
        a = !1;
      Object.keys(U).forEach(function (e) {
        var i = U[e];
        if (i != null) {
          var l = ie(i);
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
              (delete U[e], (a = !0));
              return;
            }
            var s = le(i, t);
            ((a = a || s.didRemove), s.hasResults || (delete U[e], (a = !0)));
          }
        }
      });
      for (var i = re.length - 1; i >= 0; i--)
        o.has(re[i].routePath) && (re.splice(i, 1), (a = !0));
      return a;
    }
    function ue(e) {
      var t = o("ConstUriUtils").getUri(r("normalizeCometRouterConstUri")(e));
      return t != null && M(t);
    }
    function ce(e, t) {
      return (t === void 0 && (t = !0), (t && D()) || ue(e));
    }
    function de(e, t, n, a, i) {
      var l = o("ConstUriUtils").getUri(r("normalizeCometRouterConstUri")(e));
      if (l != null) {
        var s = { rawPath: l.getPath(), result: t, routeMatchInfos: n },
          u = T(n);
        if (!(u === "legacy" && !a)) {
          var c = se(s, i);
          (u === "legacy" && !M(l) && !c) || (x(s, l, !0, i), z());
        }
      }
    }
    function me(e) {
      var t =
          D() ||
          e.some(function (e) {
            var t = e.routePath;
            return !t.includes("{") && ue(t);
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
              _e(
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
              ? oe(i, a, o, l)
              : _e(
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
      e.length > 0 && z();
    }
    function pe(e, t, n, a, i) {
      var l = "",
        s = {},
        u = r("normalizeCometRouterConstUri")(e),
        c = o("ConstUriUtils").getUri(u);
      c != null && ((s = c.getQueryData()), (l = c.getPath()));
      var d = T(n);
      if (d !== "legacy") {
        if (c == null) return;
        var m = { rawPath: l, result: t, routeMatchInfos: n };
        (se(m, i), x(m, c, !1, i), z());
        return;
      }
      c != null && a && $({ rawPath: l, result: t, routeMatchInfos: n }, c, i);
      var p = U[l];
      p == null && ((p = U[l] = H(n[0])), ae(t, n[0]));
      var _ = p;
      n.slice(1).forEach(function (e) {
        var n = _,
          r = n.results,
          o = V(_.routeParams, babelHelpers.extends({}, _.pathParams, s)),
          a = H(e);
        (ae(t, e), (r[o] = { routeMatch: a, type: "routeMatch" }), (_ = a));
      });
      var f = V(_.routeParams, babelHelpers.extends({}, _.pathParams, s));
      ((_.results[f] = t), z());
    }
    function _e(e, t, n) {
      var r = e.rawUrl,
        o = e.result,
        a = e.routeMatchInfos;
      if (
        (o.type === "routeDefinition" &&
          o.routeDefinition.prefetchable === !1) ||
        (o.type === "routeRedirect" && o.routeRedirect.prefetchable === !1)
      ) {
        de(r, o, a, t, n);
        return;
      }
      pe(r, o, a, t, n);
    }
    function fe(e) {
      var t =
          e.some(function (e) {
            return T(e.routeMatchInfos) !== "legacy";
          }) ||
          D() ||
          e.some(function (e) {
            return ue(e.rawUrl);
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
                !g(
                  { rawPath: l, result: i, routeMatchInfos: e.routeMatchInfos },
                  s,
                ))) &&
            n.add(i);
        }
      }),
        e.forEach(function (e) {
          return _e(e, t, n);
        }));
    }
    function ge(e, t, n) {
      fe([
        {
          rawUrl: e,
          result: { routeDefinition: t, type: "routeDefinition" },
          routeMatchInfos: n,
        },
      ]);
    }
    function he(e, t, n) {
      fe([
        {
          rawUrl: e,
          result: { routeResolver: t, type: "routeResolver" },
          routeMatchInfos: n,
        },
      ]);
    }
    function ye(e, t, n) {
      fe([
        {
          rawUrl: e,
          redirectUrl: t.url,
          result: { routeRedirect: t, type: "routeRedirect" },
          routeMatchInfos: n,
        },
      ]);
    }
    function Ce(e) {
      var t = new Set(),
        n = o("ConstUriUtils").getUri(r("normalizeCometRouterConstUri")(e)),
        a = Object.keys(U).filter(function (t) {
          return t.startsWith(e);
        }),
        i = N(e, n, a.length > 0);
      a.forEach(function (e) {
        var n;
        (t.add((n = U[e]) == null ? void 0 : n.routePath), delete U[e]);
      });
      for (var l = re.length - 1; l >= 0; l--) {
        var s = re[l];
        (t.has(s.routePath) ||
          s.routePath.startsWith(e) ||
          (!i && n != null && p(s.routePath).test(n))) &&
          re.splice(l, 1);
      }
      z();
    }
    var be = null,
      ve = {
        dump: be,
        getCachedRoute: te,
        getRoute: ne,
        installBatch: fe,
        installPaths: me,
        installRedirect: ye,
        installRoute: ge,
        installRouteResolver: he,
        invalidatePath: Ce,
        needsDynamicCacheReconciliation: ce,
      };
    l.default = ve;
  },
  98,
);
