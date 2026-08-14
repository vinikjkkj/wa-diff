__d(
  "createReStoreSubscriptionManager",
  [
    "ExecutionEnvironment",
    "FBLogger",
    "IntervalList",
    "Promise",
    "PromiseOrValue",
    "ReStoreKeyComparer",
    "ReStoreUtils",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
    "isPromise",
    "nullthrows",
    "promiseDone",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e, s, u, c, d;
    function m(t, a, i) {
      var l = new Map(),
        m = new Map();
      function p(e, t) {
        return (d || (d = o("ReStoreKeyComparer"))).compareValue(e, t) === 0;
      }
      function _(e, t, n, r) {
        for (
          var o, a = (o = E.get(e)) != null ? o : [], i = [], l = 0;
          l < t.length;
          l++
        )
          for (var s = t[l], u = 0; u < 32 && s !== 0; u++) {
            if (s & 1) {
              var c = a[(l << 5) + u];
              if (!p(n[c], r[c])) {
                var d;
                i[l] = ((d = i[l]) != null ? d : 0) | (1 << (u % 32));
              }
            }
            s = s >>> 1;
          }
        return i;
      }
      function f(e, t) {
        for (var n = 0; n < Math.max(e.length, t.length); n++)
          if ((e[n] & t[n]) !== 0) return !0;
        return !1;
      }
      function g(e, t, n, o) {
        try {
          var a = e(t, n, o);
          return (u || (u = r("isPromise")))(a)
            ? a.catch(function (e) {
                r("FBLogger")("messenger_web")
                  .catching(e)
                  .mustfix("error in ReStore subscription async handler");
              })
            : a;
        } catch (e) {
          var i = r("getErrorSafe")(e);
          r("FBLogger")("messenger_web")
            .catching(i)
            .mustfix("error in ReStore subscription handlers");
        }
      }
      function h(t, r, a, i, l) {
        var s = Array.from(r(i));
        if (l.operation === "put" && l.prevValue != null) {
          var u = l.prevValue,
            d = [];
          for (var m of s) {
            var p = m[0],
              h = m[1];
            h != null &&
              h.forEach(function (e, t) {
                var n;
                d[t] = ((n = d[t]) != null ? n : 0) | e;
              });
          }
          var y = _(t, d, u, l.value);
          return (c || (c = o("PromiseOrValue"))).all(
            s.map(function (e) {
              var t = e[0],
                n = e[1];
              if (n == null || f(y, n)) return g(t, i, l, a);
            }),
          );
        }
        return (e || (e = n("Promise"))).all(
          s.map(function (e) {
            var t = e[0],
              n = e[1];
            return g(t, i, l, a);
          }),
        );
      }
      function y(e) {
        return r("nullthrows")(
          (l.has(e)
            ? l
            : l.set(e, [
                r("IntervalList")(
                  (d || (d = o("ReStoreKeyComparer"))).compareKey,
                  t.tableNames[e].primaryKeyIds.length,
                ),
                new Map(),
              ])
          ).get(e),
        );
      }
      function C(e, n) {
        var a = y(e),
          i = a[0],
          l = a[1];
        return r("nullthrows")(
          (l.has(n)
            ? l
            : l.set(
                n,
                r("IntervalList")(
                  (d || (d = o("ReStoreKeyComparer"))).compareKey,
                  t.tableNames[e].indexes[n].length,
                ),
              )
          ).get(n),
        );
      }
      function b(e, n, a, i, l, s) {
        var u = function (r, o) {
            return h(n, e.findIntersecting, s, r, o);
          },
          m =
            a == null
              ? void 0
              : o("ReStoreUtils").searchKey(t.tableNames[n], a, l),
          p =
            i == null
              ? void 0
              : o("ReStoreUtils").searchKey(t.tableNames[n], i, l);
        if (p == null && m != null)
          return u(m, { operation: "delete", prevValue: r("nullthrows")(a) });
        if (m == null && p != null)
          return u(p, { operation: "add", value: r("nullthrows")(i) });
        if (m != null && p != null)
          return (d || (d = o("ReStoreKeyComparer"))).compareKey(m, p) === 0
            ? u(m, {
                operation: "put",
                prevValue: r("nullthrows")(a),
                value: r("nullthrows")(i),
              })
            : (c || (c = o("PromiseOrValue"))).map(
                u(m, { operation: "delete", prevValue: r("nullthrows")(a) }),
                function () {
                  return u(p, { operation: "add", value: r("nullthrows")(i) });
                },
              );
      }
      function v(e, t, n, r) {
        var a = y(e),
          i = a[0],
          l = a[1];
        return (c || (c = o("PromiseOrValue"))).map(
          b(i, e, t, n, null, r),
          function () {
            return (c || (c = o("PromiseOrValue"))).all(
              Array.from(l.entries())
                .map(function (o) {
                  var a = o[0],
                    i = o[1];
                  return b(i, e, t, n, a, r);
                })
                .filter(function (e) {
                  return e != null;
                }),
            );
          },
        );
      }
      function S() {
        m.forEach(function (e) {
          return e();
        });
      }
      function R(e, t) {
        function n() {
          var n = new Map();
          try {
            for (var o of e) {
              var i = o[0],
                l = o[1];
              a(t, i) && n.set(i, l);
            }
          } catch (e) {
            var s = r("getErrorSafe")(e);
            r("FBLogger")("messenger_web")
              .catching(s)
              .mustfix("Couldnot format changes to broadcast");
          }
          return Array.from(n);
        }
        if ((s || (s = r("ExecutionEnvironment"))).isInBrowser && i != null) {
          var o = n();
          if (o.length === 0) return;
          i.postMessage(t, o);
        }
      }
      (s || (s = r("ExecutionEnvironment"))).isInBrowser &&
        i != null &&
        i.onEventReceive("notifyTableV2", function (e) {
          r("promiseDone")(
            n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              var t = new WeakMap(),
                n = e.values();
              (yield (c || (c = o("PromiseOrValue"))).loop(function (e) {
                if (e.done) return { action: "break", value: void 0 };
                var r = e.value,
                  a = r[0],
                  i = r[1],
                  l = i.values();
                return (c || (c = o("PromiseOrValue"))).map(
                  c.loop(function (e) {
                    if (e.done) return { action: "break", value: void 0 };
                    var n = e.value,
                      r = n[0],
                      i = n[1];
                    return (c || (c = o("PromiseOrValue"))).map(
                      v(a, r, i, t),
                      function () {
                        return { action: "continue", value: l.next() };
                      },
                    );
                  }, l.next()),
                  function () {
                    return { action: "continue", value: n.next() };
                  },
                );
              }, n.next()),
                S());
            })(),
          );
        });
      var L = new Map(),
        E = new Map();
      function k(e, t) {
        if (t == null) return null;
        var n = L.get(e);
        n == null && ((n = new Map()), L.set(e, n));
        var r = [];
        for (var o of t) {
          var a,
            i = n.get(o);
          if (i == null) {
            ((i = n.size), n.set(o, i));
            var l = E.get(e);
            (l == null && ((l = []), E.set(e, l)), l.push(o));
          }
          var s = i >> 5,
            u = i & 31;
          r[s] = ((a = r[s]) != null ? a : 0) | (1 << u);
        }
        return r;
      }
      return {
        dispose: function () {
          (l.clear(), m.clear());
        },
        notifyCommit: S,
        notifyTableAndIndexSubscribers: v,
        notifyTableV2: R,
        subscribeIndex: function (r, o, a, i, l) {
          var t = C(r, o),
            s = !1,
            u = function (r, o, i) {
              return s ? (e || (e = n("Promise"))).resolve() : g(a, r, o, i);
            },
            c = [u, k(r, l)];
          return (
            t.set(i, c),
            function () {
              ((s = !0), t.delete(c));
            }
          );
        },
        subscribeTable: function (r, o, a, i) {
          var t = y(r),
            l = t[0],
            s = !1,
            u = function (r, a, i) {
              return s ? (e || (e = n("Promise"))).resolve() : g(o, r, a, i);
            },
            c = [u, k(r, i)];
          return (
            l.set(a, c),
            function () {
              ((s = !0), l.delete(c));
            }
          );
        },
        subscribeToCommit: function (t) {
          return (
            m.set(t, t),
            function () {
              m.delete(t);
            }
          );
        },
      };
    }
    l.default = m;
  },
  98,
);
