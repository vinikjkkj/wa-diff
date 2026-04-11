__d(
  "react-relay/relay-hooks/QueryResource",
  [
    "invariant",
    "Promise",
    "react-relay/relay-hooks/LRUCache",
    "react-relay/relay-hooks/SuspenseResource",
    "relay-runtime",
    "warning",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = n("relay-runtime").isPromise,
      u = 1e3,
      c = "store-or-network",
      d = "store-and-network",
      m = typeof WeakMap == "function";
    function p(e) {
      return e.request.node.params.metadata.live !== void 0;
    }
    function _(e, t, n, r, o) {
      var a = n != null ? n : p(t) ? d : c,
        i = r != null ? r : e.UNSTABLE_getDefaultRenderPolicy(),
        l = a + "-" + i + "-" + t.request.identifier;
      return o != null ? l + "-" + o : l;
    }
    function f(e, t) {
      var n,
        r = {
          __id: e.fragment.dataID,
          __fragments:
            ((n = {}), (n[e.fragment.node.name] = e.request.variables), n),
          __fragmentOwner: e.request,
        };
      return {
        cacheIdentifier: t,
        fragmentNode: e.request.node.fragment,
        fragmentRef: r,
        operation: e,
      };
    }
    var g = 2e5;
    function h(e, t, r, o, a, i) {
      var l = p(t),
        s = o,
        u = a,
        c = new (n("react-relay/relay-hooks/SuspenseResource"))(function (e) {
          var n = e.retain(t);
          return {
            dispose: function () {
              (l && u != null && u.unsubscribe(), n.dispose(), i(d));
            },
          };
        }),
        d = {
          cacheIdentifier: e,
          id: g++,
          processedPayloadsCount: 0,
          operationAvailability: r,
          getValue: function () {
            return s;
          },
          setValue: function (t) {
            s = t;
          },
          setNetworkSubscription: function (t) {
            (l && u != null && u.unsubscribe(), (u = t));
          },
          temporaryRetain: function (t) {
            return c.temporaryRetain(t);
          },
          permanentRetain: function (t) {
            return c.permanentRetain(t);
          },
          releaseTemporaryRetain: function () {
            c.releaseTemporaryRetain();
          },
        };
      return d;
    }
    var y = (function () {
      function t(e) {
        var t = this;
        ((this.$5 = function (e) {
          t.$2.delete(e.cacheIdentifier);
        }),
          (this.$1 = e),
          (this.$2 = n("react-relay/relay-hooks/LRUCache").create(u)));
      }
      var r = t.prototype;
      return (
        (r.prepare = function (t, n, r, o, a, i, l) {
          var e = _(this.$1, t, r, o, i);
          return this.prepareWithIdentifier(e, t, n, r, o, a, l);
        }),
        (r.prepareWithIdentifier = function (t, n, r, o, a, i, l) {
          var e = this.$1,
            u = o != null ? o : p(n) ? d : c,
            m = a != null ? a : e.UNSTABLE_getDefaultRenderPolicy(),
            _ = this.$2.get(t),
            f = null,
            g = _ != null;
          (_ == null &&
            (_ = this.$3(
              t,
              n,
              r,
              u,
              m,
              l,
              babelHelpers.extends({}, i, {
                unsubscribe: function (t) {
                  f != null && f.dispose();
                  var e = i == null ? void 0 : i.unsubscribe;
                  e && e(t);
                },
              }),
            )),
            (f = _.temporaryRetain(e)));
          var h = _.getValue();
          if (s(h))
            throw (
              e.__log({
                name: "suspense.query",
                fetchPolicy: u,
                isPromiseCached: g,
                operation: n,
                queryAvailability: _.operationAvailability,
                renderPolicy: m,
              }),
              h
            );
          if (h instanceof Error) throw h;
          return h;
        }),
        (r.retain = function (t, n) {
          var e = this.$1,
            r = t.cacheIdentifier,
            o = t.operation,
            a = this.$4(r, o, null, t, null),
            i = a.permanentRetain(e);
          return (
            e.__log({
              name: "queryresource.retain",
              profilerContext: n,
              resourceID: a.id,
            }),
            {
              dispose: function () {
                i.dispose();
              },
            }
          );
        }),
        (r.releaseTemporaryRetain = function (t) {
          var e = this.$2.get(t.cacheIdentifier);
          e != null && e.releaseTemporaryRetain();
        }),
        (r.TESTS_ONLY__getCacheEntry = function (t, n, r, o) {
          var e = this.$1,
            a = _(e, t, n, r, o);
          return this.$2.get(a);
        }),
        (r.$4 = function (t, n, r, o, a) {
          var e = this.$2.get(t);
          return (
            e == null && ((e = h(t, n, r, o, a, this.$5)), this.$2.set(t, e)),
            e
          );
        }),
        (r.$3 = function (r, o, a, i, s, u, c) {
          var t = this,
            d = this.$1,
            m = d.check(o),
            _ = m.status,
            g = _ === "available",
            y = g || (s === "partial" && _ !== "stale"),
            C,
            b,
            v = function () {};
          switch (i) {
            case "store-only": {
              ((C = !1), (b = !0));
              break;
            }
            case "store-or-network": {
              ((C = !g), (b = y));
              break;
            }
            case "store-and-network": {
              ((C = !0), (b = y));
              break;
            }
            case "network-only":
            default: {
              ((C = !0), (b = !1));
              break;
            }
          }
          if (b) {
            var S = f(o, r),
              R = h(r, o, m, S, null, this.$5);
            this.$2.set(r, R);
          }
          if (C) {
            var L = f(o, r),
              E;
            a.subscribe({
              start: function (n) {
                E = n;
                var e = t.$2.get(r);
                e && e.setNetworkSubscription(E);
                var a = c == null ? void 0 : c.start;
                if (a) {
                  var i = babelHelpers.extends({}, n, {
                    unsubscribe: function () {
                      p(o) && n.unsubscribe();
                    },
                  });
                  a(i);
                }
              },
              next: function () {
                var e = t.$4(r, o, m, L, E);
                ((e.processedPayloadsCount += 1), e.setValue(L), v());
                var n = c == null ? void 0 : c.next;
                if (n != null) {
                  var a = d.lookup(o.fragment);
                  n(a);
                }
              },
              error: function (a) {
                var e = t.$4(r, o, m, a, E);
                (e.processedPayloadsCount === 0
                  ? e.setValue(a)
                  : n("warning")(
                      !1,
                      "QueryResource: An incremental payload for query `%s` returned an error: `%s`.",
                      o.fragment.node.name,
                      String(a.message),
                    ),
                  v(),
                  (E = null),
                  e.setNetworkSubscription(null));
                var i = c == null ? void 0 : c.error;
                i && i(a);
              },
              complete: function () {
                (v(), (E = null));
                var e = t.$2.get(r);
                e && e.setNetworkSubscription(null);
                var n = c == null ? void 0 : c.complete;
                n && n();
              },
              unsubscribe: c == null ? void 0 : c.unsubscribe,
            });
            var k = this.$2.get(r);
            if (!k) {
              var I = new (e || (e = n("Promise")))(function (e) {
                v = e;
              });
              ((I.displayName = "Relay(" + o.fragment.node.name + ")"),
                (k = h(r, o, m, I, E, this.$5)),
                this.$2.set(r, k));
            }
          } else {
            var T = c == null ? void 0 : c.complete;
            T && T();
          }
          var D = this.$2.get(r);
          return (
            D != null || l(0, 13816),
            d.__log({
              name: "queryresource.fetch",
              resourceID: D.id,
              operation: o,
              profilerContext: u,
              fetchPolicy: i,
              renderPolicy: s,
              queryAvailability: m,
              shouldFetch: C,
            }),
            D
          );
        }),
        t
      );
    })();
    function C(e) {
      return new y(e);
    }
    var b = m ? new WeakMap() : new Map();
    function v(e) {
      var t = b.get(e);
      if (t) return t;
      var n = C(e);
      return (b.set(e, n), n);
    }
    a.exports = {
      createQueryResource: C,
      getQueryResourceForEnvironment: v,
      getQueryCacheIdentifier: _,
    };
  },
  null,
);
