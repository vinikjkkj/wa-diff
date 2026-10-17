__d(
  "LSRelayEntryPointQueryPreloader",
  ["clearTimeout", "err", "nullthrows", "relay-runtime", "setTimeout"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 3e4,
      s = "__relay_internal__pv__",
      u = {
        clear: r("clearTimeout"),
        schedule: function (n) {
          return r("setTimeout")(n, e);
        },
      };
    function c(e) {
      var t, n;
      return (
        ((t = e.use_exec_time_resolvers) != null
          ? t
          : (n = e.exec_time_resolvers_enabled_provider) == null
            ? void 0
            : n.get()) === !0
      );
    }
    function d(e, t) {
      var n = {},
        r = new Set(t == null ? [] : Object.keys(t));
      return (
        Object.keys(e).forEach(function (t) {
          var o = e[t];
          o !== void 0 && !r.has(t) && !t.startsWith(s) && (n[t] = o);
        }),
        JSON.stringify(o("relay-runtime").stableCopy(n))
      );
    }
    function m(e, t, n, r) {
      return (
        t == null &&
        n == null &&
        r == null &&
        e.poll == null &&
        e.liveConfigId == null &&
        e.onSubscribe == null &&
        e.onPause == null &&
        e.onResume == null &&
        e.metadata == null &&
        e.transactionId == null
      );
    }
    function p(e, t) {
      t === void 0 && (t = u);
      var n = new Map();
      function a(e, t) {
        var r;
        return (r = n.get(e)) == null ? void 0 : r.get(t);
      }
      function i(e) {
        var t = n.get(e.queryID);
        (t == null && ((t = new Map()), n.set(e.queryID, t)),
          t.set(e.variablesKey, e));
      }
      function l(e) {
        var t = n.get(e.queryID);
        t == null ||
          t.get(e.variablesKey) !== e ||
          (t.delete(e.variablesKey), t.size === 0 && n.delete(e.queryID));
      }
      function s(e) {
        var n;
        (e.timeoutID != null && (t.clear(e.timeoutID), (e.timeoutID = null)),
          (n = e.onLoadDisposable) == null || n.dispose(),
          (e.onLoadDisposable = null));
      }
      function p(e) {
        var t;
        e.isDisposed ||
          ((e.isDisposed = !0),
          l(e),
          s(e),
          (t = e.producerSubscription) == null || t.unsubscribe(),
          (e.producerSubscription = null),
          e.subject.complete());
      }
      function _(e) {
        e != null && e.producerSubscription == null && p(e);
      }
      function f(e) {
        var t;
        e.isDisposed ||
          ((e.isDisposed = !0),
          l(e),
          s(e),
          (t = e.producerSubscription) == null || t.unsubscribe(),
          (e.producerSubscription = null));
      }
      function g(e) {
        return e.isDisposed || e.producerSubscription == null
          ? !1
          : (l(e), s(e), !0);
      }
      function h(e, t, n) {
        var r = e.subject.subscribe(t),
          o = function () {
            var t = r;
            t != null &&
              ((r = null),
              t.unsubscribe(),
              e.subject.getObserverCount() === 0 && (p(e), n()));
          };
        return (t.closed && o(), o);
      }
      function y(t, n) {
        var s;
        if (!(t.isDisposed || a(t.queryID, t.variablesKey) !== t)) {
          ((s = t.onLoadDisposable) == null || s.dispose(),
            (t.onLoadDisposable = null));
          var u;
          try {
            u = c(n.operation);
          } catch (e) {
            p(t);
            return;
          }
          if (!u) {
            p(t);
            return;
          }
          var m = d(t.variables, n.params.providedVariables);
          if (m !== t.variablesKey) {
            if ((l(t), a(t.queryID, m) != null)) {
              p(t);
              return;
            }
            ((t.variablesKey = m), i(t));
          }
          var _;
          try {
            var g = o("relay-runtime").__internal.withProvidedVariables(
              t.variables,
              n.params.providedVariables,
              new Map(),
            );
            _ = e(n.params, g, { force: !0 });
          } catch (e) {
            (t.subject.error(
              e instanceof Error
                ? e
                : r("err")("Failed to start query execution"),
            ),
              f(t));
            return;
          }
          _.subscribe({
            complete: function () {
              t.subject.complete();
            },
            error: function (n) {
              (t.subject.error(n), f(t));
            },
            next: function (n) {
              t.subject.next(n);
            },
            start: function (n) {
              ((t.producerSubscription = n), t.isDisposed && n.unsubscribe());
            },
          });
        }
      }
      function C(e, n) {
        var r = o("relay-runtime").PreloadableQueryRegistry.get(e),
          l = d(n, r == null ? void 0 : r.params.providedVariables);
        if (a(e, l) != null) return { dispose: function () {} };
        var s = {
          isDisposed: !1,
          onLoadDisposable: null,
          producerSubscription: null,
          queryID: e,
          subject: new (o("relay-runtime").ReplaySubject)(),
          timeoutID: null,
          variables: babelHelpers.extends({}, n),
          variablesKey: l,
        };
        return (
          (s.timeoutID = t.schedule(function () {
            a(s.queryID, s.variablesKey) === s && p(s);
          })),
          i(s),
          r != null
            ? y(s, r)
            : (s.onLoadDisposable = o(
                "relay-runtime",
              ).PreloadableQueryRegistry.onLoad(e, function (e) {
                y(s, e);
              })),
          {
            dispose: function () {
              a(s.queryID, s.variablesKey) === s && p(s);
            },
          }
        );
      }
      function b(e, t) {
        var o,
          a = (o = e.id) != null ? o : r("nullthrows")(e.cacheID),
          i = n.get(a);
        return i == null ? null : i.get(d(t, e.providedVariables));
      }
      function v(t, n, r, a, i, l, s, u) {
        var c = function () {
          return e(t, n, r, a, i, l, s, u);
        };
        if (t.metadata.operation == null) return (_(b(t, n)), c());
        var d = m(r, a, l, s),
          p = null,
          f = !1;
        return o("relay-runtime").Observable.create(function (e) {
          var r = p;
          if (r != null && !r.isDisposed)
            return h(r, e, function () {
              p === r && (p = null);
            });
          if (!f) {
            f = !0;
            var o = b(t, n);
            if (o != null) {
              if (d && g(o))
                return (
                  (p = o),
                  h(o, e, function () {
                    p === o && (p = null);
                  })
                );
              _(o);
            }
          }
          return c().subscribe(e);
        });
      }
      function S(e, t, n, r) {
        if (e.metadata.operation == null) return r();
        var a = !1;
        return o("relay-runtime").Observable.create(function (n) {
          return (a || ((a = !0), _(b(e, t))), r().subscribe(n));
        });
      }
      return {
        execute: v,
        executeWithPreloadedSource: S,
        preloadQueryOnQueryAstLoad: C,
      };
    }
    l.default = p;
  },
  98,
);
