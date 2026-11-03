__d(
  "createReStoreSubscriptionManager",
  [
    "ExecutionEnvironment",
    "FBLogger",
    "IntervalList",
    "PromiseOrValue",
    "ReStoreKeyComparer",
    "ReStoreUtils",
    "getErrorSafe",
    "isPromise",
    "nullthrows",
    "promiseDone",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e, s, u, c;
    function d(t, n, a) {
      var i = new Map(),
        l = new Map();
      function d(e, t) {
        return (c || (c = o("ReStoreKeyComparer"))).compareValue(e, t) === 0;
      }
      function m(e, t, n, r) {
        for (
          var o, a = (o = R.get(e)) != null ? o : [], i = [], l = 0;
          l < t.length;
          l++
        )
          for (var s = t[l], u = 0; u < 32 && s !== 0; u++) {
            if (s & 1) {
              var c = a[(l << 5) + u];
              if (!d(n[c], r[c])) {
                var m;
                i[l] = ((m = i[l]) != null ? m : 0) | (1 << (u % 32));
              }
            }
            s = s >>> 1;
          }
        return i;
      }
      function p(e, t) {
        for (var n = 0; n < Math.max(e.length, t.length); n++)
          if ((e[n] & t[n]) !== 0) return !0;
        return !1;
      }
      function _(t, n, o, a) {
        try {
          var i = t(n, o, a);
          return (e || (e = r("isPromise")))(i)
            ? i.catch(function (e) {
                r("FBLogger")("messenger_web")
                  .catching(r("getErrorSafe")(e))
                  .mustfix("error in ReStore subscription async handler");
              })
            : i;
        } catch (e) {
          var l = r("getErrorSafe")(e);
          r("FBLogger")("messenger_web")
            .catching(l)
            .mustfix("error in ReStore subscription handlers");
        }
      }
      function f(e, t, n, r, a) {
        var i = Array.from(t(r));
        if (a.operation === "put" && a.prevValue != null) {
          var l = a.prevValue,
            s = [];
          for (var c of i) {
            var d = c[0],
              f = c[1];
            f != null &&
              f.forEach(function (e, t) {
                var n;
                s[t] = ((n = s[t]) != null ? n : 0) | e;
              });
          }
          var g = m(e, s, l, a.value);
          return (u || (u = o("PromiseOrValue"))).all(
            i.map(function (e) {
              var t = e[0],
                o = e[1];
              if (o == null || p(g, o)) return _(t, r, a, n);
            }),
          );
        }
        return Promise.all(
          i.map(function (e) {
            var t = e[0],
              o = e[1];
            return _(t, r, a, n);
          }),
        );
      }
      function g(e) {
        return r("nullthrows")(
          (i.has(e)
            ? i
            : i.set(e, [
                r("IntervalList")(
                  (c || (c = o("ReStoreKeyComparer"))).compareKey,
                  t.tableNames[e].primaryKeyIds.length,
                ),
                new Map(),
              ])
          ).get(e),
        );
      }
      function h(e, n) {
        var a = g(e),
          i = a[0],
          l = a[1];
        return r("nullthrows")(
          (l.has(n)
            ? l
            : l.set(
                n,
                r("IntervalList")(
                  (c || (c = o("ReStoreKeyComparer"))).compareKey,
                  t.tableNames[e].indexes[n].length,
                ),
              )
          ).get(n),
        );
      }
      function y(e, n, a, i, l, s) {
        var d = function (r, o) {
            return f(n, e.findIntersecting, s, r, o);
          },
          m =
            a == null
              ? void 0
              : l == null
                ? o("ReStoreUtils").searchKey(t.tableNames[n], a, null)
                : o("ReStoreUtils").searchKey(t.tableNames[n], a, l),
          p =
            i == null
              ? void 0
              : l == null
                ? o("ReStoreUtils").searchKey(t.tableNames[n], i, null)
                : o("ReStoreUtils").searchKey(t.tableNames[n], i, l);
        if (p == null && m != null)
          return d(m, { operation: "delete", prevValue: r("nullthrows")(a) });
        if (m == null && p != null)
          return d(p, { operation: "add", value: r("nullthrows")(i) });
        if (m != null && p != null)
          return (c || (c = o("ReStoreKeyComparer"))).compareKey(m, p) === 0
            ? d(m, {
                operation: "put",
                prevValue: r("nullthrows")(a),
                value: r("nullthrows")(i),
              })
            : (u || (u = o("PromiseOrValue"))).map(
                d(m, { operation: "delete", prevValue: r("nullthrows")(a) }),
                function () {
                  return d(p, { operation: "add", value: r("nullthrows")(i) });
                },
              );
      }
      function C(e, t, n, r) {
        var a = g(e),
          i = a[0],
          l = a[1];
        return (u || (u = o("PromiseOrValue"))).map(
          y(i, e, t, n, null, r),
          function () {
            return (u || (u = o("PromiseOrValue"))).all(
              Array.from(l.entries())
                .map(function (o) {
                  var a = o[0],
                    i = o[1];
                  return y(i, e, t, n, a, r);
                })
                .filter(function (e) {
                  return e != null;
                }),
            );
          },
        );
      }
      function b() {
        l.forEach(function (e) {
          return e();
        });
      }
      function v(e, t) {
        function o() {
          var o = new Map();
          try {
            for (var a of e) {
              var i = a[0],
                l = a[1];
              n(t, i) && o.set(i, l);
            }
          } catch (e) {
            var s = r("getErrorSafe")(e);
            r("FBLogger")("messenger_web")
              .catching(s)
              .mustfix("Couldnot format changes to broadcast");
          }
          return Array.from(o);
        }
        if ((s || (s = r("ExecutionEnvironment"))).isInBrowser && a != null) {
          var i = o();
          if (i.length === 0) return;
          a.postMessage(t, i);
        }
      }
      (s || (s = r("ExecutionEnvironment"))).isInBrowser &&
        a != null &&
        a.onEventReceive("notifyTableV2", function (e) {
          r("promiseDone")(
            (async function () {
              var t = new WeakMap(),
                n = e.values();
              (await (u || (u = o("PromiseOrValue"))).loop(function (e) {
                if (e.done === !0) return { action: "break", value: void 0 };
                var r = e.value,
                  a = r[0],
                  i = r[1],
                  l = i.values();
                return (u || (u = o("PromiseOrValue"))).map(
                  u.loop(function (e) {
                    if (e.done === !0)
                      return { action: "break", value: void 0 };
                    var n = e.value,
                      r = n[0],
                      i = n[1];
                    return (u || (u = o("PromiseOrValue"))).map(
                      C(a, r, i, t),
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
                b());
            })(),
          );
        });
      var S = new Map(),
        R = new Map();
      function L(e, t) {
        if (t == null) return null;
        var n = S.get(e);
        n == null && ((n = new Map()), S.set(e, n));
        var r = [];
        for (var o of t) {
          var a,
            i = n.get(o);
          if (i == null) {
            ((i = n.size), n.set(o, i));
            var l = R.get(e);
            (l == null && ((l = []), R.set(e, l)), l.push(o));
          }
          var s = i >> 5,
            u = i & 31;
          r[s] = ((a = r[s]) != null ? a : 0) | (1 << u);
        }
        return r;
      }
      return {
        dispose: function () {
          (i.clear(), l.clear());
        },
        notifyCommit: b,
        notifyTableAndIndexSubscribers: C,
        notifyTableV2: v,
        subscribeIndex: function (t, n, r, o, a) {
          var e = h(t, n),
            i = !1,
            l = function (t, n, o) {
              return i ? Promise.resolve() : _(r, t, n, o);
            },
            s = [l, L(t, a)];
          return (
            e.set(o, s),
            function () {
              ((i = !0), e.delete(s));
            }
          );
        },
        subscribeTable: function (t, n, r, o) {
          var e = g(t),
            a = e[0],
            i = !1,
            l = function (t, r, o) {
              return i ? Promise.resolve() : _(n, t, r, o);
            },
            s = [l, L(t, o)];
          return (
            a.set(r, s),
            function () {
              ((i = !0), a.delete(s));
            }
          );
        },
        subscribeToCommit: function (t) {
          return (
            l.set(t, t),
            function () {
              l.delete(t);
            }
          );
        },
      };
    }
    l.default = d;
  },
  98,
);
