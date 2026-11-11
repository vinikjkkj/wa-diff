__d(
  "LSRelayEntryPointQueryPreloader",
  [
    "LSRelaySharedServerRequests",
    "clearTimeout",
    "err",
    "gkx",
    "nullthrows",
    "relay-runtime",
    "setTimeout",
  ],
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
    function m(e, t) {
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
      function m(e) {
        var t;
        e.isDisposed ||
          ((e.isDisposed = !0),
          l(e),
          s(e),
          (t = e.producerSubscription) == null || t.unsubscribe(),
          (e.producerSubscription = null),
          e.subject.complete());
      }
      function p(e) {
        e != null && e.producerSubscription == null && m(e);
      }
      function _(e) {
        var t;
        e.isDisposed ||
          ((e.isDisposed = !0),
          l(e),
          s(e),
          (t = e.producerSubscription) == null || t.unsubscribe(),
          (e.producerSubscription = null));
      }
      function f(e) {
        return e.isDisposed || e.producerSubscription == null
          ? !1
          : (l(e), s(e), !0);
      }
      function g(e, t, n) {
        var r = e.subject.subscribe(t),
          o = function () {
            var t = r;
            t != null &&
              ((r = null),
              t.unsubscribe(),
              e.subject.getObserverCount() === 0 && (m(e), n()));
          };
        return (t.closed && o(), o);
      }
      function h(t, n) {
        var s;
        if (!(t.isDisposed || a(t.queryID, t.variablesKey) !== t)) {
          ((s = t.onLoadDisposable) == null || s.dispose(),
            (t.onLoadDisposable = null));
          var u;
          try {
            u = c(n.operation);
          } catch (e) {
            m(t);
            return;
          }
          if (!u) {
            m(t);
            return;
          }
          var p = d(t.variables, n.params.providedVariables);
          if (p !== t.variablesKey) {
            if ((l(t), a(t.queryID, p) != null)) {
              m(t);
              return;
            }
            ((t.variablesKey = p), i(t));
          }
          var f;
          try {
            if (!r("gkx")("29104")) {
              m(t);
              return;
            }
            var g = o("relay-runtime").__internal.withProvidedVariables(
              t.variables,
              n.params.providedVariables,
              new Map(),
            );
            f = e(n.params, g, { force: !0 });
          } catch (e) {
            (t.subject.error(
              e instanceof Error
                ? e
                : r("err")("Failed to start query execution"),
            ),
              _(t));
            return;
          }
          f.subscribe({
            complete: function () {
              t.subject.complete();
            },
            error: function (n) {
              (t.subject.error(n), _(t));
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
      function y(e, n) {
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
            a(s.queryID, s.variablesKey) === s && m(s);
          })),
          i(s),
          r != null
            ? h(s, r)
            : (s.onLoadDisposable = o(
                "relay-runtime",
              ).PreloadableQueryRegistry.onLoad(e, function (e) {
                h(s, e);
              })),
          {
            dispose: function () {
              a(s.queryID, s.variablesKey) === s && m(s);
            },
          }
        );
      }
      function C(e, t) {
        var o,
          a = (o = e.id) != null ? o : r("nullthrows")(e.cacheID),
          i = n.get(a);
        return i == null ? null : i.get(d(t, e.providedVariables));
      }
      function b(t, n, r, a, i, l, s, u) {
        var c = function () {
          return e(t, n, r, a, i, l, s, u);
        };
        if (t.metadata.operation == null) return (p(C(t, n)), c());
        var d = o("LSRelaySharedServerRequests").canShareResponse(r, a, l, s),
          m = null,
          _ = !1;
        return o("relay-runtime").Observable.create(function (e) {
          var r = m;
          if (r != null && !r.isDisposed)
            return g(r, e, function () {
              m === r && (m = null);
            });
          if (!_) {
            _ = !0;
            var o = C(t, n);
            if (o != null) {
              if (d && f(o))
                return (
                  (m = o),
                  g(o, e, function () {
                    m === o && (m = null);
                  })
                );
              p(o);
            }
          }
          return c().subscribe(e);
        });
      }
      function v(e, t, n, r) {
        if (e.metadata.operation == null) return r();
        var a = !1;
        return o("relay-runtime").Observable.create(function (n) {
          return (a || ((a = !0), p(C(e, t))), r().subscribe(n));
        });
      }
      return {
        execute: b,
        executeWithPreloadedSource: v,
        preloadQueryOnQueryAstLoad: y,
      };
    }
    l.default = m;
  },
  98,
);
