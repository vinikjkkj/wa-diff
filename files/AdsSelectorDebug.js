__d(
  "AdsSelectorDebug",
  ["invariant", "LRUKeyedCache", "areEqual", "performanceNow"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u,
      c = 10,
      d = 5,
      m = 10,
      p = 20,
      _ = new WeakMap(),
      f = [],
      g = new Map(),
      h = null,
      y = {
        __trace: !1,
        __options: null,
        startTrace: function () {
          (f.length === 0 || s(0, 3997), (y.__trace = !0));
        },
        stopTrace: function () {
          (f.length === 0 || s(0, 3997), (y.__trace = !1));
        },
        withTrace: function (t, n) {
          var e = y.__options,
            r = y.__trace;
          ((y.__trace = !0),
            (y.__options = n),
            (n == null ? void 0 : n.logTraceStatsIntervalSeconds) != null &&
              h == null &&
              (h = window.setInterval(
                function () {
                  C({ download: !!(n != null && n.downloadTraceStats) });
                },
                Math.max(
                  n == null ? void 0 : n.logTraceStatsIntervalSeconds,
                  10,
                ) * 1e3,
              )));
          try {
            return t();
          } finally {
            ((y.__trace = r), (y.__options = e));
          }
        },
        withTraceSelector: function (t, n) {
          var e = _.get(t);
          if (e) return e;
          var r = function (r) {
            return y.withTrace(function () {
              return t(r);
            }, n);
          };
          return (
            (r.getStores = t.getStores),
            (r.rawSelectFn = t.rawSelectFn),
            (r.isGetStoresPure = t.isGetStoresPure),
            (r.isGetStoresStatic = t.isGetStoresStatic),
            _.set(t, r),
            r
          );
        },
        __traceEnter: function (n) {
          var t;
          y.__trace &&
            (((t = y.__options) == null ? void 0 : t.ignoreAggregatedStats) !==
            !0
              ? (n != null &&
                  !g.has(n) &&
                  g.set(n, {
                    executionCount: 0,
                    totalExecutionTimeMs: 0,
                    totalCacheHitCount: 0,
                    totalCacheMissCount: 0,
                    totalCacheMissCountWithRefInputChange: 0,
                    totalCacheMissCountWithValInputChange: 0,
                    totalSelectorDepsCount: 0,
                  }),
                f.push({
                  name: n,
                  children: [],
                  perfStart: (e || (e = r("performanceNow")))(),
                  aggregatedStats: n != null ? g.get(n) : null,
                }))
              : f.push({
                  name: n,
                  children: [],
                  perfStart: (e || (e = r("performanceNow")))(),
                }));
        },
        __traceInputs: function (t, n, o, a) {
          if (y.__trace) {
            var e = f[f.length - 1];
            if (a) e.inputsCacheHit = !0;
            else {
              e.inputsCacheMiss = {
                lastInputs: n,
                inputs: o,
                changedInputs: [],
                changedInputsDeepEqual: [],
              };
              for (var i = 0; i < t.length; i++) {
                var l = e.children[i];
                if (l != null) {
                  var s = n != null ? n[i] : null,
                    c = o[i];
                  if (n == null || s !== c) {
                    var d,
                      m,
                      p = (u || (u = r("areEqual")))(s, c);
                    ((l.selectorValueChangedAsInput = {
                      prev: s,
                      next: c,
                      deepEqual: p,
                    }),
                      (d = e.inputsCacheMiss) == null ||
                        d.changedInputs.push(i),
                      (m = e.inputsCacheMiss) == null ||
                        m.changedInputsDeepEqual.push(p));
                  }
                }
              }
            }
          }
        },
        __traceProps: function (t, n, o) {
          if (y.__trace) {
            var e = f[f.length - 1],
              a = {
                props: t,
                cache:
                  n instanceof r("LRUKeyedCache")
                    ? n.getCacheSnapshot_DEBUG()
                    : new Map(n),
              };
            o ? (e.propsCacheHit = a) : (e.propsCacheMiss = a);
          }
        },
        __traceCacheSelectorPropsCacheMiss: function (t, n, o) {
          if (y.__trace) {
            var e = f[f.length - 1];
            e.cacheSelectorPropsCacheMiss = {
              props: t,
              cache:
                n instanceof r("LRUKeyedCache")
                  ? n.getCacheSnapshot_DEBUG()
                  : new Map(n),
              cacheClearedByStores: Array.from(o),
            };
          }
        },
        __tracePropsHitAndInputsCacheMiss: function (t, n, o, a, i) {
          if (y.__trace) {
            var e = f[f.length - 1];
            e.propsHitAndInputsCacheMiss = {
              props: t,
              cache:
                n instanceof r("LRUKeyedCache")
                  ? n.getCacheSnapshot_DEBUG()
                  : new Map(n),
            };
          }
        },
        __traceResult: function (n) {
          var t, o;
          if (y.__trace) {
            var a = f.pop();
            if (a != null) {
              a.result = n;
              var i = (e || (e = r("performanceNow")))() - a.perfStart;
              ((a.executionTimeMs = i),
                (a.totalSelectorDepsCount =
                  (t = a.totalSelectorDepsCount) != null ? t : 0),
                P(a) && (a.shouldHighlight = !0));
              var l = a.aggregatedStats;
              if (
                ((o = y.__options) == null
                  ? void 0
                  : o.ignoreAggregatedStats) !== !0 &&
                l != null
              ) {
                var s;
                (l.executionCount++, (l.totalExecutionTimeMs += i));
                var u = N(a);
                if (
                  ((l.totalCacheHitCount += u ? 0 : 1),
                  (l.totalCacheMissCount += u ? 1 : 0),
                  (l.totalSelectorDepsCount =
                    (s = a.totalSelectorDepsCount) != null ? s : 0),
                  u)
                ) {
                  var c,
                    d =
                      (c = a.inputsCacheMiss) == null
                        ? void 0
                        : c.changedInputsDeepEqual;
                  d != null &&
                  d.every(function (e) {
                    return e;
                  })
                    ? (l.totalCacheMissCountWithRefInputChange += 1)
                    : (l.totalCacheMissCountWithValInputChange += 1);
                }
              }
              if (f.length === 0) b(a);
              else {
                var m = f[f.length - 1];
                if (
                  (m.children.push(a),
                  (m.shouldHighlight =
                    m.shouldHighlight === !0 || a.shouldHighlight === !0),
                  m.inputWithResultCount != null &&
                    m.inputCount != null &&
                    m.inputWithResultCount < m.inputCount)
                ) {
                  var p, _;
                  ((m.totalSelectorDepsCount =
                    (p = m.totalSelectorDepsCount) != null ? p : 0),
                    (m.totalSelectorDepsCount +=
                      1 + ((_ = a.totalSelectorDepsCount) != null ? _ : 0)),
                    m.inputWithResultCount++);
                }
              }
            }
          }
        },
        __traceFailure: function (t) {
          if (y.__trace) {
            var e = f.pop();
            if (e != null) {
              for (e.failure = t, e.shouldHighlight = !0; f.length > 0; ) {
                var n = f.pop();
                if (n == null) return;
                ((n.inputFailed = !0),
                  (n.shouldHighlight = !0),
                  e != null && n.children.push(e),
                  (e = n));
              }
              (e != null && b(e), y.stopTrace());
            }
          }
        },
        __traceInputSelectors: function (t) {
          if (y.__trace) {
            var e = f[f.length - 1];
            ((e.inputCount = t.length), (e.inputWithResultCount = 0));
          }
        },
      };
    function C(e) {
      var t = e === void 0 ? {} : e,
        n = t.download,
        r = n === void 0 ? !1 : n,
        o = t.limit,
        a = o === void 0 ? 10 : o,
        i = t.maxCacheHitRate,
        l = i === void 0 ? 1 : i,
        s = Array.from(g.entries())
          .filter(function (e) {
            var t = e[0],
              n = e[1],
              r = n.totalCacheHitCount,
              o = n.totalCacheMissCount,
              a = r + o > 0 ? r / (r + o) : 1;
            return a <= l;
          })
          .map(function (e) {
            var t = e[0],
              n = e[1],
              r = n.executionCount,
              o = n.totalCacheHitCount,
              a = n.totalCacheMissCount,
              i = n.totalCacheMissCountWithRefInputChange,
              l = n.totalCacheMissCountWithValInputChange,
              s = n.totalExecutionTimeMs,
              u = n.totalSelectorDepsCount,
              c = r > 0 ? s / r : 0,
              d = o + a > 0 ? o / (o + a) : 1;
            return {
              name: t,
              executionCount: r,
              avgExecutionTimeMs: c,
              totalExecutionTimeMs: s,
              cacheHitRate: d,
              totalCacheHitCount: o,
              totalCacheMissCount: a,
              totalCacheMissCountWithRefInputChange: i,
              totalCacheMissCountWithValInputChange: l,
              totalSelectorDepsCount: u,
            };
          });
      if (
        (s.sort(function (e, t) {
          return (
            e.cacheHitRate - t.cacheHitRate ||
            t.executionCount - e.executionCount
          );
        }),
        r)
      ) {
        var u = new Blob([JSON.stringify(s, null, 2)], { type: "text/json" }),
          c = URL.createObjectURL(u),
          d = document.createElement("a");
        ((d.href = c),
          (d.download = "ads-selector-debug-trace-stats.json"),
          d.click(),
          URL.revokeObjectURL(c));
      } else {
        var m = Math.min(a, p);
        (console.groupCollapsed(
          "Aggregated AdsSelectorDebug stats (top %d):",
          m,
        ),
          console.table(s.slice(0, m)),
          console.groupEnd());
      }
    }
    function b(e, t) {
      var n, r, o, a, i, l, s, u, c;
      t === void 0 && (t = !0);
      var d = W(e);
      if (
        !(
          ((n = y.__options) == null ? void 0 : n.logFailuresOnly) === !0 &&
          t &&
          !(d.failure != null || d.inputFailed === !0)
        )
      ) {
        if (
          ((r = y.__options) == null ? void 0 : r.logOnlyIfSlowerThanMs) !=
            null &&
          t &&
          d.executionTimeMs != null
        ) {
          var m,
            p = (m = y.__options) == null ? void 0 : m.logOnlyIfSlowerThanMs;
          if (d.executionTimeMs < p) return;
        }
        var _ = (o = y.__options) == null ? void 0 : o.logSelectedSelectors;
        if (
          !(
            t &&
            _ != null &&
            _.length > 0 &&
            _.every(function (e) {
              var t;
              return !((t = d.name) != null && t.includes(e));
            })
          ) &&
          !(
            t &&
            (((a = y.__options) == null ? void 0 : a.logOnlyCacheMiss) === !0 ||
              ((i = y.__options) == null
                ? void 0
                : i.logOnlyCacheMissWithRefInputChange) === !0) &&
            !N(d)
          )
        ) {
          if (
            t &&
            ((l = y.__options) == null
              ? void 0
              : l.logOnlyCacheMissWithRefInputChange) === !0
          ) {
            var f,
              g =
                (f = d.inputsCacheMiss) == null
                  ? void 0
                  : f.changedInputsDeepEqual;
            if (
              g == null ||
              g.every(function (e) {
                return !e;
              })
            )
              return;
          }
          if (
            !(
              t &&
              ((s = y.__options) == null
                ? void 0
                : s.logOnlySelectorsWithDependenciesOver) != null &&
              d.totalSelectorDepsCount != null &&
              d.totalSelectorDepsCount <=
                ((u = y.__options) == null
                  ? void 0
                  : u.logOnlySelectorsWithDependenciesOver)
            )
          ) {
            if (
              t &&
              ((c = y.__options) == null
                ? void 0
                : c.logOnlyIfCacheHitRateBelow) != null
            ) {
              var h = d.aggregatedStats;
              if (h != null) {
                var C,
                  b = h.totalCacheHitCount,
                  P = h.totalCacheMissCount,
                  M = b / (b + P);
                if (
                  M >=
                  ((C = y.__options) == null
                    ? void 0
                    : C.logOnlyIfCacheHitRateBelow)
                )
                  return;
              }
            }
            v(d, function () {
              (S(d),
                R(d),
                d.cacheSelectorPropsCacheMiss ||
                d.propsCacheMiss ||
                d.propsHitAndInputsCacheMiss ||
                d.inputsCacheMiss
                  ? (L(d), E(d), k(d), I(d))
                  : (d.propsCacheHit != null || d.inputsCacheHit === !0) &&
                    (T(d), D(d)),
                x(d),
                $(d));
            });
          }
        }
      }
    }
    function v(e, t) {
      var n = M(e);
      if (e.shouldHighlight === !0) {
        var r;
        (r = console).group.apply(r, n);
      } else {
        var o;
        (o = console).groupCollapsed.apply(o, n);
      }
      (t(), console.groupEnd());
    }
    function S(e) {
      e.failure && e.failure;
    }
    function R(e) {
      e.inputFailed === !0 && e.children.length - 1;
    }
    function L(e) {
      if (e.cacheSelectorPropsCacheMiss) {
        var t = e.cacheSelectorPropsCacheMiss.cacheClearedByStores;
        t.length > 0 ? (t.length, t.join(", ")) : e.cacheSelectorPropsCacheMiss;
      }
    }
    function E(e) {
      e.propsCacheMiss && e.propsCacheMiss;
    }
    function k(e) {
      if (e.propsHitAndInputsCacheMiss)
        var t = e.propsHitAndInputsCacheMiss,
          n = t.cache,
          r = t.props;
    }
    function I(e) {
      e.inputsCacheMiss;
    }
    function T(e) {
      e.propsCacheHit && e.propsCacheHit;
    }
    function D(e) {
      e.inputsCacheHit;
    }
    function x(e) {
      if (e.children.length)
        for (var t = 0; t < e.children.length; t++) b(e.children[t], !1);
    }
    function $(e) {
      var t,
        n = e.thunkTrace;
      n ? b(n, !1) : (t = e.name) != null && t.endsWith("-thunk");
    }
    function P(e) {
      var t,
        n,
        r =
          (t = (n = y.__options) == null ? void 0 : n.highlightSelectors) !=
          null
            ? t
            : [];
      return !!r.some(function (t) {
        var n;
        return (n = e.name) == null ? void 0 : n.includes(t);
      });
    }
    function N(e) {
      var t = e.cacheSelectorPropsCacheMiss != null,
        n =
          e.propsCacheMiss != null ||
          e.propsHitAndInputsCacheMiss != null ||
          e.propsCacheHit != null,
        r = e.inputsCacheMiss != null;
      return r || (!n && t);
    }
    function M(e) {
      var t,
        n,
        r = ["%c%s"],
        o = ["", e.name],
        a = e.failure != null || e.inputFailed === !0,
        i = w(e);
      if (
        ((t = y.__options) == null ? void 0 : t.ignoreAggregatedStats) !== !0
      ) {
        var l = e.aggregatedStats;
        if (l != null) {
          var s = l.executionCount,
            u = l.totalCacheHitCount,
            c = l.totalCacheMissCount,
            d = l.totalExecutionTimeMs,
            m = u / (u + c),
            p = d / s;
          (r.unshift("%c[avg %fms, %f cache hit rate] "),
            o.unshift("color: magenta", p.toFixed(3), m.toFixed(2)));
        }
      }
      (N(e)
        ? (r.unshift("%c[cache miss] "), o.unshift("color: red"))
        : (r.unshift("%c[cache hit] "), o.unshift("color: green")),
        i != null && (r.unshift("%s "), o.unshift(i)));
      var _ = (n = e.totalSelectorDepsCount) != null ? n : 0;
      if ((_ > 0 && (r.push(" %c[%d deps]"), o.push(B(_), _)), a))
        (r.push(" %c[FAILED]"), o.push("color: red"));
      else {
        if (e.executionTimeMs != null) {
          var f = e.executionTimeMs;
          (r.push(" %c%fms"), o.push(O(f), f.toFixed(3)));
        }
        (r.push(
          " %c(returned " + (typeof e.result == "function" ? "%O" : "%o") + ")",
        ),
          o.push("", F(e.result)));
      }
      if (e.selectorValueChangedAsInput != null) {
        var g = e.selectorValueChangedAsInput;
        (r.unshift("%c"), o.unshift("color: green"));
        var h = g.deepEqual;
        (r.push(
          " %c[" + (h ? "INPUT CHANGED REF" : "INPUT CHANGED VALUE") + "]%c %o",
        ),
          o.push("color: white; background-color: red", "", A(g)));
      }
      return [r.join("")].concat(o);
    }
    function w(e) {
      var t, n;
      return e.thunkTrace
        ? String.fromCodePoint(128994)
        : (t = e.name) != null && t.endsWith("-thunk")
          ? String.fromCodePoint(9898)
          : (n = e.name) != null && n.endsWith("-branch")
            ? String.fromCodePoint(128256)
            : e.isBranchConditionSelector === !0
              ? "(?)"
              : null;
    }
    function A(e) {
      return { prev: F(e.prev), next: F(e.next), deepEqual: e.deepEqual };
    }
    function F(e) {
      var t;
      return ((t = y.__options) == null ? void 0 : t.disableToJSCast) === !0
        ? e
        : (typeof e == "object" || typeof e == "function") &&
            e != null &&
            e.toJS instanceof Function
          ? e.toJS()
          : e;
    }
    function O(e) {
      return e >= c
        ? "color: red; font-style: italic"
        : e >= d
          ? "color: orange; font-style: italic"
          : "color: gray; font-style: italic";
    }
    function B(e) {
      return e >= m
        ? "color: orange; font-style: italic"
        : "color: gray; font-style: italic";
    }
    function W(e) {
      var t = [q, U];
      return t.reduce(function (e, t) {
        return t(e);
      }, e);
    }
    function q(e) {
      var t,
        n = (t = e.inputCount) != null ? t : 0;
      if (e.children.length <= n) return e;
      for (
        var r = babelHelpers.extends({}, e, {
            children: e.children.slice(0, n).map(function (e) {
              return babelHelpers.extends({}, e);
            }),
          }),
          o = function () {
            var t = e.children[a],
              n = r.children.find(function (e) {
                var n, r;
                return (
                  (e.name === ((n = t.name) != null ? n : "") + "-thunk" ||
                    e.name ===
                      ((r = t.name) != null ? r : "") +
                        "-wrappedSelector-thunk") &&
                  !e.thunkTrace
                );
              });
            n && (n.thunkTrace = t);
          },
          a = n;
        a < e.children.length;
        a++
      )
        o();
      return r;
    }
    function U(e) {
      var t;
      if (
        (t = e.name) != null &&
        t.endsWith("-branch") &&
        e.children.length === 3
      ) {
        var n = e.children,
          r = n[0],
          o = babelHelpers.arrayLikeToArray(n).slice(1);
        if (r)
          return babelHelpers.extends({}, e, {
            children: [
              babelHelpers.extends({}, r, { isBranchConditionSelector: !0 }),
            ].concat(o),
          });
      }
      return e;
    }
    var V = y;
    l.default = V;
  },
  98,
);
