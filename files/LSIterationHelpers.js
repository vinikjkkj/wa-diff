__d(
  "LSIterationHelpers",
  [
    "FBLogger",
    "LSMaybeSyncIteration",
    "LSSynchronousPromise",
    "ReStoreKeyComparer",
    "ReStoreVaulting",
    "isNativeTask",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = new Set(["messages", "attachments", "reactions"]);
    function c(e) {
      return u.has(e);
    }
    function d(e, t, n) {
      return (
        e && t.name === "pending_tasks" && n != null && r("isNativeTask")(n)
      );
    }
    function m(e) {
      for (var t of Object.keys(e)) e[t] === void 0 && delete e[t];
      return e;
    }
    function p(e, t, n) {
      n === void 0 && (n = "asc");
      var r = e.entries(new WeakMap(), n);
      function a() {
        var e;
        return (
          (e = {}),
          (e[
            typeof Symbol == "function"
              ? Symbol.asyncIterator
              : "@@asyncIterator"
          ] = a),
          (e.next = function () {
            var e = { done: !0 },
              a = 0,
              i = "start",
              l = [],
              u = function (u) {
                for (
                  var r = function () {
                      var e = a,
                        r = t[e] || {},
                        c = r.end,
                        d = r.start,
                        m = u.value[0];
                      if (d && i === "start") {
                        var p = (
                            s || (s = o("ReStoreKeyComparer"))
                          ).compareValue(m[e], d[0]),
                          _ = p * (n === "asc" ? 1 : -1) < d[1];
                        if (_) {
                          if (
                            ((i = "start_verify"),
                            (l = m.slice(0, e)),
                            e === m.length - 1 && p === 0)
                          )
                            return { v: void 0 };
                          var f = [].concat(
                            l,
                            [d[0]],
                            (d[1] && n === "asc") || (!d[1] && n === "desc")
                              ? [(s || (s = o("ReStoreKeyComparer"))).MAX_KEY]
                              : [],
                          );
                          return {
                            v: o("LSMaybeSyncIteration").wrapNextValue(f),
                          };
                        } else i = "check_end";
                      }
                      if (
                        d &&
                        i === "start_verify" &&
                        !l.every(function (e, t) {
                          return (
                            (s || (s = o("ReStoreKeyComparer"))).compareValue(
                              e,
                              m[t],
                            ) === 0
                          );
                        })
                      )
                        return ((a = 0), (i = "start"), { v: void 0 });
                      if (
                        c &&
                        (s || (s = o("ReStoreKeyComparer"))).compareValue(
                          c[0],
                          m[e],
                        ) *
                          (n === "asc" ? 1 : -1) <
                          c[1]
                      )
                        return (
                          (a = 0),
                          (i = "start"),
                          {
                            v: o("LSMaybeSyncIteration").wrapNextValue(
                              [].concat(
                                m.slice(0, e),
                                n === "asc"
                                  ? [
                                      (s || (s = o("ReStoreKeyComparer")))
                                        .MAX_KEY,
                                    ]
                                  : [],
                              ),
                            ),
                          }
                        );
                      (a++, (i = "start"));
                    },
                    c;
                  a < t.length;
                )
                  if (((c = r()), c)) return c.v;
                return ((e = u), o("LSMaybeSyncIteration").STOP_ITERATION);
              };
            return o("LSMaybeSyncIteration")
              .iteratorLoop(r, u)
              .then(function () {
                return e;
              });
          }),
          e
        );
      }
      return a();
    }
    function _(e, t, n, o, a) {
      return {
        delete: function () {
          return n.delete.apply(n, e);
        },
        item: t,
        update: function (l) {
          var i = a && c(o.name) ? { transportKey: "FBBroker" } : {},
            s = babelHelpers.extends({}, t, l, i);
          if (d(a, o, s))
            throw r("FBLogger")("messenger_web").mustfixThrow(
              "cannot insert native task in dynamic mode",
            );
          return n.upsert(e, m(s));
        },
      };
    }
    function f(e, t) {
      var n;
      return (
        (n = {}),
        (n[
          typeof Symbol == "function" ? Symbol.asyncIterator : "@@asyncIterator"
        ] = function () {
          return f(e, t);
        }),
        (n.next = function () {
          var n = { done: !0 },
            r = function (t) {
              return ((n = t), o("LSMaybeSyncIteration").STOP_ITERATION);
            };
          return o("LSMaybeSyncIteration")
            .iteratorLoop(e, r)
            .then(function () {
              if (n.done) return o("LSMaybeSyncIteration").iteratorLoop(t, r);
            })
            .then(function () {
              return n;
            });
        }),
        n
      );
    }
    function g(e, t, n) {
      var r,
        a = [{ done: !0 }, { done: !0 }],
        i = function (t) {
          var e = a[t];
          return ((a[t] = { done: !0 }), e);
        };
      return (
        (r = {}),
        (r[
          typeof Symbol == "function" ? Symbol.asyncIterator : "@@asyncIterator"
        ] = function () {
          return g(e, t, n);
        }),
        (r.next = function () {
          var r = function (t) {
              return function (e) {
                return (
                  t === "a" ? (a[0] = e) : (a[1] = e),
                  o("LSMaybeSyncIteration").STOP_ITERATION
                );
              };
            },
            l = o("LSSynchronousPromise").makeSynchronousPromise();
          return (
            a[0].done &&
              (l = l.then(function () {
                return o("LSMaybeSyncIteration").iteratorLoop(e, r("a"));
              })),
            a[1].done &&
              (l = l.then(function () {
                return o("LSMaybeSyncIteration").iteratorLoop(t, r("b"));
              })),
            l.then(function () {
              if (a[0].done && a[1].done) return { done: !0 };
              if (a[0].done) return i(1);
              if (a[1].done) return i(0);
              var e = (s || (s = o("ReStoreKeyComparer"))).compareKey(
                a[0].value[0],
                a[1].value[0],
              );
              return e === 0 || e * (n === "asc" ? 1 : -1) < 0 ? i(0) : i(1);
            })
          );
        }),
        r
      );
    }
    var h =
      ((e = {}),
      (e[
        typeof Symbol == "function" ? Symbol.asyncIterator : "@@asyncIterator"
      ] = function () {
        return h;
      }),
      (e.next = function () {
        return o("LSSynchronousPromise").makeSynchronousPromise({ done: !0 });
      }),
      e);
    function y(e, t, n, a, i, l, s, u) {
      var m = new Set(),
        y = e.length > 1,
        C = e.length === 1 && e[0][1] == null,
        b = e
          .map(function (e) {
            var s = e[0],
              u = e[1];
            return s.map(function (e) {
              (a.key_lookup === !0 &&
                e.length !== 0 &&
                r("FBLogger")("messenger_web").info(
                  "%s key lookup %s %s",
                  u == null ? "primary" : "index " + u,
                  n.name,
                  JSON.stringify(e) || "",
                ),
                a.table_scan === !0 &&
                  e.length === 0 &&
                  r("FBLogger")("messenger_web").info("table scan %s", n.name));
              var s = e.map(function (e) {
                  return l(e, t);
                }),
                c =
                  s.length ===
                    (u == null ? n.primaryKeyIds : n.indexes[u]).length &&
                  s.every(function (e) {
                    var t = e.end,
                      n = e.start;
                    return n && t && n[0] === t[0] && n[1] === 0 && t[1] === 0;
                  });
              if (c) {
                var d = function () {
                  var e,
                    t = !1;
                  return (
                    (e = {}),
                    (e[
                      typeof Symbol == "function"
                        ? Symbol.asyncIterator
                        : "@@asyncIterator"
                    ] = d),
                    (e.next = function () {
                      var e;
                      if (t)
                        return o("LSSynchronousPromise").makeSynchronousPromise(
                          { done: !0 },
                        );
                      t = !0;
                      var r = s.map(function (e) {
                        var t = e.start;
                        return t[0];
                      });
                      return (e = u == null ? i : i.index(u)).get
                        .apply(e, r)
                        .then(function (e) {
                          if (!e) return { done: !0 };
                          var t = o("ReStoreVaulting").maybeUnvaultDbRow(
                            e,
                            n.name,
                          );
                          return { done: !1, value: [r, t] };
                        });
                    }),
                    e
                  );
                };
                return d();
              }
              return p(u == null ? i : i.index(u), s, t);
            });
          })
          .flat()
          .reduce(function (n, r, o) {
            var a = o === 0 && n == null ? h : n;
            return e.length > 1 ? f(a, r) : g(a, r, t);
          });
      function v() {
        var e;
        return (
          (e = {}),
          (e[
            typeof Symbol == "function"
              ? Symbol.asyncIterator
              : "@@asyncIterator"
          ] = v),
          (e.next = function () {
            var e = !0,
              t,
              a,
              l,
              p,
              f = function (i) {
                e = !1;
                var r = i.value;
                if (
                  ((a = r[0]),
                  (l = r[1]),
                  (t = C
                    ? a
                    : n.primaryKeyIds.map(function (e) {
                        return l[e];
                      })),
                  d(s, n, l))
                ) {
                  ((p = i), (e = !0));
                  return;
                }
                if (
                  c(n.name) &&
                  s &&
                  l != null &&
                  l.transportKey !== "FBBroker"
                ) {
                  ((p = i), (e = !0));
                  return;
                }
                if (y) {
                  var u = JSON.stringify(t);
                  if (m.has(u)) {
                    e = !0;
                    return;
                  }
                  m.add(u);
                }
                return o("LSMaybeSyncIteration").STOP_ITERATION;
              };
            return o("LSMaybeSyncIteration")
              .iteratorLoop(b, f)
              .then(function () {
                if (p != null) {
                  var o = p.value[1].transportKey;
                  r("FBLogger")("messenger_web").warn(
                    'Expected transportKey to equal ("FBBroker") in %s, provided transportKey: %s',
                    u,
                    o,
                  );
                }
                return e || t == null || l == null
                  ? { done: !0 }
                  : { done: !1, value: _(t, l, i, n, s) };
              });
          }),
          (e.return = function () {
            return Promise.resolve({ done: !0, value: void 0 });
          }),
          (e.throw = function (t) {
            return Promise.reject(t);
          }),
          e
        );
      }
      return v();
    }
    ((l.isTranportKeyEnforcedTable = c),
      (l.isNativePendingTaskViolation = d),
      (l.stripUndefinedProperties = m),
      (l.unionIterators = f),
      (l.mergeIterators = g),
      (l.fetch = y));
  },
  98,
);
