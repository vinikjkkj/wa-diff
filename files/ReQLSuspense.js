__d(
  "ReQLSuspense",
  [
    "FBLogger",
    "I64",
    "Promise",
    "PromiseAnnotate",
    "PromiseOrValue",
    "ReQL",
    "ReQLGlobalQueryContext",
    "ReQLSuspenseSupportedContextTracking",
    "SortedAsyncIterable",
    "applyChangesToBPlusTree",
    "createBPlusTreeFromSorted",
    "isPromise",
    "promiseDone",
    "react",
    "shallowEqualI64",
    "useReStore",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c,
      d,
      m,
      p,
      _,
      f = m || (m = o("react")),
      g = f.startTransition,
      h = f.useEffect,
      y = f.useMemo,
      C = f.useState;
    function b() {
      var e =
        (_ || (_ = o("ReQLGlobalQueryContext"))).globalQueryContext
          .withinSupportedContext === !0;
      return e
        ? !0
        : o(
            "ReQLSuspenseSupportedContextTracking",
          ).isWithinReactRenderingContext();
    }
    function v(e, t, n) {
      if (
        (n === !0 &&
          !b() &&
          r("FBLogger")("messenger_web", "reqlsuspense_unsupported_use")
            .blameToPreviousFile()
            .mustfix(
              "Detected use of ReQLSuspense method in unsupported context.\ntoArray/first/firstExn can only be used inside the body of a projection function passed to ReQL map operator.\nFor React rendering contexts, please use appropriate hook (useArray/useFirst/useFirstExn) variants instead.",
            ),
        (s || (s = r("isPromise")))(e))
      )
        throw t != null
          ? (p || (p = o("PromiseAnnotate"))).setDisplayName(e, t)
          : e;
      return e;
    }
    function S(e) {
      var t = [];
      for (var n of e)
        Array.isArray(n) &&
        n.length === 2 &&
        Number.isInteger(n[0]) &&
        Number.isInteger(n[1])
          ? t.push(n[0], n[1])
          : t.push(n, void 0);
      return t;
    }
    function R(e, t) {
      return v(o("SortedAsyncIterable").toArray(e), t, !0).map(function (e) {
        var t = e[0],
          n = e[1];
        return n;
      });
    }
    function L(e, t) {
      return R(o("ReQL").prototype.take.call(e, 1), t)[0];
    }
    function E(e, t) {
      var n = L(e, t);
      if (n == null)
        throw r("FBLogger")("messenger_web").mustfixThrow("expected result");
      return n;
    }
    function k(t, a, i) {
      var l = y(
          function () {
            var e = t();
            return (i != null && (e.uniqueId = i), e);
          },
          a == null ? [t] : S(a),
        ),
        s = y(
          function () {
            return v(o("SortedAsyncIterable").toArray(l)).map(function (e) {
              var t = e[0],
                n = e[1];
              return n;
            });
          },
          [l],
        ),
        d = C([s, l]),
        m = d[0],
        p = d[1],
        _ = (u || (u = r("useReStore")))();
      return (
        h(
          function () {
            var t,
              a = [],
              i = l.subscribe(function (e, t) {
                return void a.push([e, t]);
              });
            function s() {
              if (a.length && t != null) {
                var e = t;
                r("applyChangesToBPlusTree")(e, a) &&
                  p([
                    Array.from(e.entries(), function (e) {
                      return e[1];
                    }),
                    l,
                  ]);
              }
            }
            var u = M(_, s);
            return (
              r("promiseDone")(
                (e || (e = n("Promise"))).resolve(
                  (c || (c = o("PromiseOrValue"))).map(
                    o("SortedAsyncIterable").toArray(l),
                    function (e) {
                      t = r("createBPlusTreeFromSorted")(e, l.direction);
                      var n = t;
                      (r("applyChangesToBPlusTree")(n, a),
                        g(function () {
                          return p(function (e) {
                            var t = Array.from(n.entries(), function (e) {
                              return e[1];
                            });
                            return o("shallowEqualI64").shallowEqualI64(
                              e[0],
                              t,
                            ) && e[1] === l
                              ? e
                              : [t, l];
                          });
                        }));
                    },
                  ),
                ),
              ),
              function () {
                (u(), i());
              }
            );
          },
          [l, _],
        ),
        l === m[1] ? m[0] : s
      );
    }
    function I(t, a, i) {
      var l = y(
          function () {
            var e = t().take(1);
            return (i != null && (e.uniqueId = i), e);
          },
          a == null ? [t] : S(a),
        ),
        s = y(
          function () {
            var e;
            return (e = v(
              l.iterator(o("SortedAsyncIterable").getOrCreateContext(l)).next(),
              i,
            ).value) == null
              ? void 0
              : e[1];
          },
          [l, i],
        ),
        m = C([s, l]),
        p = m[0],
        _ = m[1],
        f = (u || (u = r("useReStore")))();
      return (
        h(
          function () {
            var t,
              a = !1,
              i = l.subscribe(function (e, n) {
                switch (n.operation) {
                  case "delete":
                    t = void 0;
                    break;
                  case "put": {
                    if (t === n.value) return;
                    var r = (d || (d = o("I64"))).cast(t);
                    if (r != null) {
                      var i = (d || (d = o("I64"))).cast(n.value);
                      if (i != null && (d || (d = o("I64"))).equal(r, i))
                        return;
                    }
                  }
                  case "add":
                    t = n.value;
                    break;
                }
                a = !0;
              }),
              s = M(f, function () {
                a && ((a = !1), _([t, l]));
              });
            return (
              r("promiseDone")(
                (e || (e = n("Promise"))).resolve(
                  (c || (c = o("PromiseOrValue"))).map(
                    l
                      .iterator(o("SortedAsyncIterable").getOrCreateContext(l))
                      .next(),
                    function (e) {
                      var n;
                      (g(function () {
                        return _(function (t) {
                          var n, r;
                          return t[0] ===
                            ((n = e.value) == null ? void 0 : n[1]) &&
                            t[1] === l
                            ? t
                            : [(r = e.value) == null ? void 0 : r[1], l];
                        });
                      }),
                        (t = (n = e.value) == null ? void 0 : n[1]));
                    },
                  ),
                ),
              ),
              function () {
                (s(), i());
              }
            );
          },
          [l, f],
        ),
        l === p[1] ? p[0] : s
      );
    }
    function T(e, t, n) {
      var o = I(e, t, n);
      if (o == null)
        throw r("FBLogger")("messenger_web").mustfixThrow("expected result");
      return o;
    }
    function D(e, t, n, r) {
      var a = y(
        function () {
          var t = e();
          return ((t.uniqueId = n), t);
        },
        t == null ? [e] : S(t),
      );
      return y(
        function () {
          return (
            _ || (_ = o("ReQLGlobalQueryContext"))
          ).runFromContextThatHandlesThrownPromise(function () {
            return r(a);
          });
        },
        [a, r],
      );
    }
    function x(e, t) {
      return D(e, t, arguments[2], R);
    }
    function $(e, t) {
      return D(e, t, arguments[2], L);
    }
    function P(e, t) {
      return D(e, t, arguments[2], E);
    }
    var N = new Map();
    function M(e, t) {
      var n = N.get(e);
      if (n == null) {
        var r = new Map();
        ((n = {
          handlers: r,
          unsubscribe: e.subscribeToCommit(function () {
            g(function () {
              return r.forEach(function (e) {
                return e();
              });
            });
          }),
        }),
          N.set(e, n));
      }
      var o = {};
      n.handlers.set(o, t);
      var a = n;
      return function () {
        (a.handlers.delete(o),
          a.handlers.size === 0 && (a.unsubscribe(), N.delete(e)));
      };
    }
    ((l.toArray = R),
      (l.first = L),
      (l.firstExn = E),
      (l.useArray = k),
      (l.useFirst = I),
      (l.useFirstExn = T),
      (l.useArrayWithoutSubscribing = x),
      (l.useFirstWithoutSubscribing = $),
      (l.useFirstExnWithoutSubscribing = P));
  },
  98,
);
