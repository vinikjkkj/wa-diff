__d(
  "ReQL",
  [
    "BPlusTree",
    "FBLogger",
    "JSONStringifyBigIntSafe",
    "PromiseOrValue",
    "ReQLBounds",
    "ReQLGlobalQueryContext",
    "ReStoreKeyComparer",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c,
      d = { bounds: _, filter: h, getKeyRange: y, map: b, take: L };
    function m(t, n) {
      try {
        var r = (e || (e = o("ReQLGlobalQueryContext"))).globalQueryContext
            .contents,
          a = e.getDependencies(n);
        (a == null &&
          (e || (e = o("ReQLGlobalQueryContext"))).setDependencies(n, []),
          (e.globalQueryContext.contents = n));
        var i, l;
        try {
          ((i = (
            e || (e = o("ReQLGlobalQueryContext"))
          ).runFromContextThatHandlesThrownPromise(t)),
            (l =
              (e || (e = o("ReQLGlobalQueryContext"))).getDependencies(n) ||
              []));
        } finally {
          ((e || (e = o("ReQLGlobalQueryContext"))).setDependencies(n, a),
            (e.globalQueryContext.contents = r));
        }
        return [i, l];
      } catch (e) {
        if (e instanceof Promise)
          return e.then(function () {
            return m(t, n);
          });
        throw e;
      }
    }
    function p() {
      for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
        t[n] = arguments[n];
      return t;
    }
    function _(e) {
      var t = this;
      return Object.setPrototypeOf(
        {
          direction: t.direction,
          iterator: function (r, a) {
            return t.iterator(
              r,
              (s || (s = o("ReQLBounds"))).mergeBounds(e, a),
            );
          },
          keyLength: t.keyLength,
          subscribe: function (r, a) {
            return t.subscribe(
              r,
              (s || (s = o("ReQLBounds"))).mergeBounds(e, a),
            );
          },
        },
        d,
      );
    }
    var f = Object.setPrototypeOf(
      {
        direction: "asc",
        iterator: function () {
          return {
            next: function () {
              return { done: !0 };
            },
          };
        },
        keyLength: 0,
        subscribe: function () {
          return function () {};
        },
      },
      d,
    );
    function g() {
      return f;
    }
    function h(e) {
      var t = this,
        n = new Map();
      return Object.setPrototypeOf(
        {
          direction: t.direction,
          iterator: function (i, l) {
            var a = t.iterator(i, l);
            return {
              next: function (i) {
                return (u || (u = o("PromiseOrValue"))).loop(function (t) {
                  return (u || (u = o("PromiseOrValue"))).map(
                    a.next(t),
                    function (t) {
                      if (t.done) return { action: "break", value: t };
                      var a = t.value,
                        i = a[0],
                        l = a[1];
                      return e(l)
                        ? ((s || (s = o("ReQLBounds"))).forEachMatchingBounds(
                            n,
                            i,
                            function (e) {
                              e.add(r("JSONStringifyBigIntSafe")(i));
                            },
                          ),
                          { action: "break", value: t })
                        : ((s || (s = o("ReQLBounds"))).forEachMatchingBounds(
                            n,
                            i,
                            function (e) {
                              e.delete(r("JSONStringifyBigIntSafe")(i));
                            },
                          ),
                          { action: "continue", value: void 0 });
                    },
                  );
                }, i);
              },
            };
          },
          keyLength: t.keyLength,
          subscribe: function (i, l) {
            var a = {},
              u = new Set();
            n.set(a, [
              (s || (s = o("ReQLBounds"))).extendBounds(l, t.keyLength),
              u,
            ]);
            var c = t.subscribe(function (t, n, o) {
              var a = r("JSONStringifyBigIntSafe")(t);
              if (n.operation === "add" && e(n.value))
                return (u.add(a), i(t, n, o));
              if (n.operation === "put" && e(n.value))
                return u.has(a)
                  ? i(t, n, o)
                  : (u.add(a), i(t, { operation: "add", value: n.value }, o));
              if (n.operation === "put" && u.has(a))
                return (u.delete(a), i(t, { operation: "delete" }, o));
              if (n.operation === "delete" && u.has(a))
                return (u.delete(a), i(t, n, o));
            }, l);
            return function () {
              return (n.delete(a), c());
            };
          },
        },
        d,
      );
    }
    function y() {
      for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
        t[n] = arguments[n];
      var r = this;
      function a(e) {
        return e.gt != null
          ? { gt: [].concat(t, e.gt) }
          : e.gte != null
            ? { gte: [].concat(t, e.gte) }
            : { gte: t };
      }
      function i(e) {
        return e.lt != null
          ? { lt: [].concat(t, e.lt) }
          : e.lte != null
            ? { lte: [].concat(t, e.lte) }
            : { lte: t };
      }
      function l(e) {
        return e == null
          ? { gte: t, lte: t }
          : babelHelpers.extends(
              {},
              e.gte != null || e.gt != null ? a(e) : { gte: t },
              e.lte != null || e.lt != null ? i(e) : { lte: t },
            );
      }
      return Object.setPrototypeOf(
        {
          direction: r.direction,
          iterator: function (n, a) {
            var e = r.iterator(n, l(a));
            return {
              next: function (r) {
                return (u || (u = o("PromiseOrValue"))).map(
                  e.next(r == null ? r : [].concat(t, r)),
                  function (e) {
                    return e.done
                      ? { done: !0 }
                      : {
                          done: !1,
                          value: [e.value[0].slice(t.length), e.value[1]],
                        };
                  },
                );
              },
            };
          },
          keyLength: r.keyLength - t.length,
          subscribe: function (n, o) {
            return r.subscribe(function (e, r, o) {
              return n(e.slice(t.length), r, o);
            }, l(o));
          },
        },
        d,
      );
    }
    function C(e, t) {
      if (e.direction !== t.direction)
        throw r("FBLogger")("messenger_web").mustfixThrow(
          "merge join requires iterables to be sorted in the same direction",
        );
      return Object.setPrototypeOf(
        {
          direction: e.direction,
          iterator: function (a, i) {
            var n = e.iterator(a, i),
              l = t.iterator(a, i),
              s = l.next();
            function d(e) {
              return (u || (u = o("PromiseOrValue"))).map(s, function (t) {
                var n = t.done
                    ? !0
                    : (c || (c = o("ReStoreKeyComparer"))).compareKey(
                        e,
                        t.value[0],
                      ) <= 0,
                  r = n ? t : l.next(e);
                return ((s = r), r);
              });
            }
            return {
              next: function (t) {
                return (u || (u = o("PromiseOrValue"))).map(
                  n.next(t),
                  function (e) {
                    if (e.done) return { done: !0, value: void 0 };
                    var t = e.value,
                      n = t[0];
                    return (u || (u = o("PromiseOrValue"))).map(
                      d(n),
                      function (t) {
                        var n = e.value,
                          a = n[0],
                          i = n[1];
                        if (t.done)
                          return { done: !1, value: [a, [i, void 0]] };
                        var l = t.value,
                          s = l[0],
                          u = l[1],
                          d = (c || (c = o("ReStoreKeyComparer"))).compareKey(
                            a,
                            s,
                          );
                        if (d > 0)
                          throw r("FBLogger")("messenger_web").mustfixThrow(
                            "Right iterable should always be equal to or ahead",
                          );
                        return d < 0
                          ? { done: !1, value: [a, [i, void 0]] }
                          : { done: !1, value: [a, [i, u]] };
                      },
                    );
                  },
                );
              },
            };
          },
          keyLength: Math.max(e.keyLength, t.keyLength),
          subscribe: function (r, a) {
            var n = !0,
              i = e.subscribe(async function (e, a, i) {
                return (u || (u = o("PromiseOrValue"))).map(
                  t.iterator(i, { gte: e, lte: e }).next(),
                  function (t) {
                    var o = t.value;
                    if (n)
                      return r(
                        e,
                        a.operation === "add"
                          ? {
                              operation: "add",
                              value: [a.value, o == null ? void 0 : o[1]],
                            }
                          : a.operation === "put"
                            ? {
                                operation: "put",
                                value: [a.value, o == null ? void 0 : o[1]],
                              }
                            : { operation: "delete" },
                        i,
                      );
                  },
                );
              }, a),
              l = t.subscribe(async function (t, a, i) {
                return (u || (u = o("PromiseOrValue"))).map(
                  e.iterator(i, { gte: t, lte: t }).next(),
                  function (e) {
                    if (!(!n || e.done))
                      return r(
                        t,
                        a.operation === "add"
                          ? { operation: "add", value: [e.value[1], a.value] }
                          : a.operation === "put"
                            ? { operation: "put", value: [e.value[1], a.value] }
                            : { operation: "delete" },
                        i,
                      );
                  },
                );
              }, a);
            return function () {
              ((n = !1), i(), l());
            };
          },
        },
        d,
      );
    }
    function b(e) {
      var t = this,
        n = new Map();
      function a(e, t, n, a, l) {
        var s = r("JSONStringifyBigIntSafe")(n),
          c = e.get(s);
        (c == null && ((c = []), e.set(s, c)),
          c.forEach(function (e) {
            return e();
          }),
          (c.length = 0));
        var d = c;
        l.forEach(function (r) {
          d.push(
            r.subscribe(function (r, l, s) {
              return (u || (u = o("PromiseOrValue"))).map(
                i(e, t, n, a, s),
                function (e) {
                  return t(n, { operation: "put", value: e }, s);
                },
              );
            }),
          );
        });
      }
      function i(t, n, r, i, l) {
        return (u || (u = o("PromiseOrValue"))).map(
          m(function () {
            return e(i);
          }, l),
          function (e) {
            var o = e[0],
              l = e[1];
            return (a(t, n, r, i, l), o);
          },
        );
      }
      function l(e, t) {
        var n,
          o = r("JSONStringifyBigIntSafe")(t);
        if (e.has(o)) {
          var a = (n = e.get(r("JSONStringifyBigIntSafe")(t))) != null ? n : [];
          (a.forEach(function (e) {
            return e();
          }),
            (a.length = 0),
            e.delete(o));
        }
      }
      return Object.setPrototypeOf(
        {
          direction: t.direction,
          iterator: function (i, l) {
            var r = t.iterator(i, l);
            return {
              next: function (l) {
                return (u || (u = o("PromiseOrValue"))).map(
                  r.next(l),
                  function (t) {
                    if (t.done) return t;
                    var r = t.value,
                      l = r[0],
                      c = r[1];
                    return (u || (u = o("PromiseOrValue"))).map(
                      u.map(
                        m(function () {
                          return e(c);
                        }, i),
                        function (e) {
                          var t = e[0],
                            r = e[1];
                          return (
                            (s || (s = o("ReQLBounds"))).forEachMatchingBounds(
                              n,
                              l,
                              function (e) {
                                var t = e[0],
                                  n = e[1];
                                return a(t, n, l, c, r);
                              },
                            ),
                            t
                          );
                        },
                      ),
                      function (e) {
                        return { done: !1, value: [l, e] };
                      },
                    );
                  },
                );
              },
            };
          },
          keyLength: t.keyLength,
          subscribe: function (r, a) {
            var e = {},
              c = new Map();
            n.set(e, [
              (s || (s = o("ReQLBounds"))).extendBounds(a, t.keyLength),
              [c, r],
            ]);
            var d = t.subscribe(function (e, t, n) {
              if (t.operation === "delete") return (l(c, e), r(e, t, n));
              if (t.operation === "add") {
                var a = t.value;
                return (u || (u = o("PromiseOrValue"))).map(
                  i(c, r, e, a, n),
                  function (t) {
                    return r(e, { operation: "add", value: t }, n);
                  },
                );
              } else if (t.operation === "put") {
                var s = t.value;
                return (u || (u = o("PromiseOrValue"))).map(
                  i(c, r, e, s, n),
                  function (t) {
                    return r(e, { operation: "put", value: t }, n);
                  },
                );
              }
            }, a);
            return function () {
              (c.forEach(function (e) {
                e.forEach(function (e) {
                  return e();
                });
              }),
                n.delete(e),
                d());
            };
          },
        },
        d,
      );
    }
    function v(e, t) {
      for (
        var n = S(e, t),
          r = arguments.length,
          o = new Array(r > 2 ? r - 2 : 0),
          a = 2;
        a < r;
        a++
      )
        o[a - 2] = arguments[a];
      return o.reduce(function (e, t) {
        return S(e, t);
      }, n);
    }
    function S(e, t) {
      if (e.direction !== t.direction)
        throw r("FBLogger")("messenger_web").mustfixThrow(
          "union requires iterables to be sorted in the same direction",
        );
      var n = Math.max(e.keyLength, t.keyLength);
      function a(e, t) {
        return t === 0 || e.length === 0 ? [] : e.slice(0, t);
      }
      function i(e) {
        return e.gt != null
          ? { gt: a(e.gt, n) }
          : e.gte != null
            ? { gte: a(e.gte, n) }
            : {};
      }
      function l(e) {
        return e.lt != null
          ? { lt: a(e.lt, n) }
          : e.lte != null
            ? { lte: a(e.lte, n) }
            : {};
      }
      function s(e) {
        if (e != null)
          return babelHelpers.extends(
            {},
            e.gte != null || e.gt != null ? i(e) : {},
            e.lte != null || e.lt != null ? l(e) : {},
          );
      }
      return Object.setPrototypeOf(
        {
          direction: e.direction,
          iterator: function (i, l) {
            var r = e.iterator(i, s(l)),
              d = t.iterator(i, s(l)),
              m = r.next(),
              p = d.next();
            return {
              next: function (i) {
                return (
                  i !== void 0 &&
                    ((m = r.next(a(i, n))), (p = d.next(a(i, n)))),
                  (u || (u = o("PromiseOrValue"))).map(
                    u.all2(m, p),
                    function (t) {
                      var n,
                        a,
                        i = t[0],
                        l = t[1];
                      function s(e, t) {
                        if (e.done) return { done: !0 };
                        var n = {
                          done: !1,
                          value: [[].concat(e.value[0], [t]), e.value[1]],
                        };
                        return (t ? (m = r.next()) : (p = d.next()), n);
                      }
                      if (i.done) return s(l, !1);
                      if (l.done) return s(i, !0);
                      var u = e.direction === "asc" ? [i, l] : [l, i],
                        _ = u[0],
                        f = u[1],
                        g = (c || (c = o("ReStoreKeyComparer"))).compareKey(
                          (n = _.value) == null ? void 0 : n[0],
                          (a = f.value) == null ? void 0 : a[0],
                        );
                      return g < 0 ? s(i, !0) : s(l, !1);
                    },
                  )
                );
              },
            };
          },
          keyLength: n + 1,
          subscribe: function (r, o) {
            var n = e.subscribe(function (e, t, n) {
                return r([].concat(e, [!0]), t, n);
              }, o),
              a = t.subscribe(function (e, t, n) {
                return r([].concat(e, [!1]), t, n);
              }, o);
            return function () {
              (n(), a());
            };
          },
        },
        d,
      );
    }
    function R(e, t) {
      if (e.direction !== t.direction)
        throw r("FBLogger")("messenger_web").mustfixThrow(
          "merge join requires iterables to be sorted in the same direction",
        );
      return Object.setPrototypeOf(
        {
          direction: e.direction,
          iterator: function (r, a) {
            var n = e.iterator(r, a),
              i = t.iterator(r, a);
            function l(e) {
              return (u || (u = o("PromiseOrValue"))).loop(function (e) {
                var t = e[0],
                  r = e[1];
                if (t.done || r.done)
                  return { action: "break", value: { done: !0 } };
                var a = t.value,
                  l = a[0],
                  s = a[1],
                  d = r.value,
                  m = d[0],
                  p = d[1],
                  _ = (c || (c = o("ReStoreKeyComparer"))).compareKey(l, m);
                return _ > 0
                  ? (u || (u = o("PromiseOrValue"))).map(
                      u.all2(t, i.next(l)),
                      function (e) {
                        return { action: "continue", value: e };
                      },
                    )
                  : _ < 0
                    ? (u || (u = o("PromiseOrValue"))).map(
                        u.all2(n.next(m), r),
                        function (e) {
                          return { action: "continue", value: e };
                        },
                      )
                    : {
                        action: "break",
                        value: { done: !1, value: [l, [s, p]] },
                      };
              }, e);
            }
            return {
              next: function (t) {
                return (u || (u = o("PromiseOrValue"))).map(
                  u.all2(n.next(t), i.next(t)),
                  l,
                );
              },
            };
          },
          keyLength: Math.max(e.keyLength, t.keyLength),
          subscribe: function (r, a) {
            var n = !0;
            function i(e, t, a, i, l) {
              return (u || (u = o("PromiseOrValue"))).map(
                e.iterator(l, { gte: a, lte: a }).next(),
                function (e) {
                  if (!(e.done || !n)) {
                    var o = e.value[1],
                      s =
                        i.operation === "add"
                          ? { operation: "add", value: t(i.value, o) }
                          : i.operation === "put"
                            ? { operation: "put", value: t(i.value, o) }
                            : i;
                    return r(a, s, l);
                  }
                },
              );
            }
            var l = e.subscribe(function () {
                for (
                  var e = arguments.length, n = new Array(e), r = 0;
                  r < e;
                  r++
                )
                  n[r] = arguments[r];
                return i.apply(
                  void 0,
                  [
                    t,
                    function (e, t) {
                      return [e, t];
                    },
                  ].concat(n),
                );
              }, a),
              s = t.subscribe(function () {
                for (
                  var t = arguments.length, n = new Array(t), r = 0;
                  r < t;
                  r++
                )
                  n[r] = arguments[r];
                return i.apply(
                  void 0,
                  [
                    e,
                    function (e, t) {
                      return [t, e];
                    },
                  ].concat(n),
                );
              }, a);
            return function () {
              ((n = !1), l(), s());
            };
          },
        },
        d,
      );
    }
    function L(e) {
      var t = this,
        n = new Map();
      return Object.setPrototypeOf(
        {
          direction: t.direction,
          iterator: function (a, i) {
            var r = t.iterator(a, i),
              l = 0;
            return {
              next: function (a) {
                return l >= e
                  ? { done: !0 }
                  : (u || (u = o("PromiseOrValue"))).map(
                      r.next(a),
                      function (t) {
                        return (
                          t.done ||
                            (s || (s = o("ReQLBounds"))).forEachMatchingBounds(
                              n,
                              t.value[0],
                              function (n) {
                                var r = n[0],
                                  o = n[1];
                                o.contents <= e &&
                                  (r.has(t.value[0]) ||
                                    ((o.contents += 1),
                                    r.set(t.value[0], void 0)));
                              },
                            ),
                          (l += 1),
                          t
                        );
                      },
                    );
              },
            };
          },
          keyLength: t.keyLength,
          subscribe: function (i, l) {
            var a = {},
              d = t.direction === "asc" ? 1 : -1,
              m = new (r("BPlusTree"))(function (e, t) {
                return (
                  (c || (c = o("ReStoreKeyComparer"))).compareKey(e, t) * -d
                );
              }),
              p = { contents: 0 };
            n.set(a, [
              (s || (s = o("ReQLBounds"))).extendBounds(l, t.keyLength),
              [m, p],
            ]);
            var _ = t.subscribe(function (r, l, s) {
              var _,
                f = (_ = m.entries().next().value) == null ? void 0 : _[0],
                g =
                  f == null
                    ? !0
                    : (c || (c = o("ReStoreKeyComparer"))).compareKey(r, f) *
                        d <=
                      0;
              if (l.operation === "delete" && g) {
                var h;
                return (
                  p.contents > 0 && (m.delete(r), (h = i(r, l, s))),
                  (u || (u = o("PromiseOrValue"))).map(h, function () {
                    return (u || (u = o("PromiseOrValue"))).map(
                      t
                        .iterator(
                          s,
                          f == null ? void 0 : d === 1 ? { gt: f } : { lt: f },
                        )
                        .next(),
                      function (e) {
                        if (!e.done && n.has(a))
                          return (
                            m.set(e.value[0], void 0),
                            i(
                              e.value[0],
                              { operation: "add", value: e.value[1] },
                              s,
                            )
                          );
                        p.contents > 0 && (p.contents -= 1);
                      },
                    );
                  })
                );
              }
              if (l.operation === "add" && p.contents < e)
                return ((p.contents += 1), m.set(r, void 0), i(r, l, s));
              if (l.operation === "add" && g) {
                var y;
                return (
                  f != null &&
                    (m.delete(f), (y = i(f, { operation: "delete" }, s))),
                  (u || (u = o("PromiseOrValue"))).map(y, function () {
                    return (m.set(r, void 0), i(r, l, s));
                  })
                );
              }
              if (l.operation === "put" && g) return i(r, l, s);
            }, l);
            return function () {
              return (n.delete(a), _());
            };
          },
        },
        d,
      );
    }
    var E = new WeakMap();
    function k(e, t) {
      var n = E.get(e);
      return (
        n != null ||
          ((n = t.reduce(function (t, n, r) {
            return ((t[n] = e[r]), t);
          }, {})),
          E.set(e, n)),
        n
      );
    }
    function I(e, t, n, r, a) {
      if (
        a == null ||
        a.length > e.keyFields.length ||
        a.some(function (t) {
          return e.keyFields.indexOf(t) === -1;
        })
      )
        return e.entries(t, n, r);
      var i = e.keys(t, n, r);
      return {
        next: function (n) {
          return (u || (u = o("PromiseOrValue"))).map(i.next(n), function (t) {
            return t.done
              ? { done: !0 }
              : { done: !1, value: [t.value, k(t.value, e.keyFields)] };
          });
        },
      };
    }
    function T(e, t) {
      return Object.setPrototypeOf(
        {
          direction: "asc",
          iterator: function (r, o) {
            return I(e, r, "asc", o, t);
          },
          keyLength: e.keyFields.length,
          subscribe: function (r, o) {
            return e.subscribe(r, o, t);
          },
        },
        d,
      );
    }
    function D(e, t) {
      return Object.setPrototypeOf(
        {
          direction: "desc",
          iterator: function (r, o) {
            return I(e, r, "desc", o, t);
          },
          keyLength: e.keyFields.length,
          subscribe: function (r, o) {
            return e.subscribe(r, o, t);
          },
        },
        d,
      );
    }
    function x(e) {
      var t = [],
        n = e.iterator(new WeakMap());
      return Promise.resolve(
        (u || (u = o("PromiseOrValue"))).loop(function () {
          return (u || (u = o("PromiseOrValue"))).map(n.next(), function (e) {
            return e.done
              ? { action: "break", value: t }
              : (t.push(e.value[1]), { action: "continue", value: void 0 });
          });
        }),
      );
    }
    async function $(e) {
      var t = e.iterator(new WeakMap()),
        n = await t.next();
      if (!n.done) return n.value[1];
    }
    async function P(e) {
      var t = e.iterator(new WeakMap()),
        n = await t.next();
      if (n.done)
        throw r("FBLogger")("messenger_web").mustfixThrow("expected result");
      return n.value[1];
    }
    function N(e, t) {
      var n = new WeakMap();
      function r(e) {
        return e.gt != null
          ? { gt: e.gt.slice(1) }
          : e.gte != null
            ? { gte: e.gte.slice(1) }
            : {};
      }
      function a(e) {
        return e.lt != null
          ? { lt: e.lt.slice(1) }
          : e.lte != null
            ? { lte: e.lte.slice(1) }
            : {};
      }
      function i(e) {
        if (e != null)
          return babelHelpers.extends(
            {},
            e.gte != null || e.gt != null ? r(e) : {},
            e.lte != null || e.lt != null ? a(e) : {},
          );
      }
      return Object.setPrototypeOf(
        {
          direction: e.direction,
          iterator: function (a, i) {
            var r = {};
            if (i) {
              if (i.gt != null) {
                var l = i.gt,
                  s = (c || (c = o("ReStoreKeyComparer"))).compareValue(
                    t,
                    l[0],
                  );
                if (s === 0) {
                  if (l.length === 1)
                    return {
                      next: function () {
                        return { done: !0 };
                      },
                    };
                  r.gt = l.slice(1);
                } else if (s < 0)
                  return {
                    next: function () {
                      return { done: !0 };
                    },
                  };
              }
              if (i.gte != null) {
                var d = i.gte,
                  m = (c || (c = o("ReStoreKeyComparer"))).compareValue(
                    t,
                    d[0],
                  );
                if (m === 0) r.gte = d.slice(1);
                else if (m < 0)
                  return {
                    next: function () {
                      return { done: !0 };
                    },
                  };
              }
              if (i.lte != null) {
                var p = i.lte,
                  _ = (c || (c = o("ReStoreKeyComparer"))).compareValue(
                    t,
                    p[0],
                  );
                if (_ === 0) p.length !== 1 && (r.lte = p.slice(1));
                else if (_ > 0)
                  return {
                    next: function () {
                      return { done: !0 };
                    },
                  };
              }
              if (i.lt != null) {
                var f = i.lt,
                  g = (c || (c = o("ReStoreKeyComparer"))).compareValue(
                    t,
                    f[0],
                  );
                if (g === 0) {
                  if (f.length === 1)
                    return {
                      next: function () {
                        return { done: !0 };
                      },
                    };
                  r.lt = f.slice(1);
                } else if (g > 0)
                  return {
                    next: function () {
                      return { done: !0 };
                    },
                  };
              }
            }
            var h = e.iterator(a, r);
            return {
              next: function (r) {
                return (u || (u = o("PromiseOrValue"))).map(
                  h.next(r == null ? void 0 : r.slice(1)),
                  function (e) {
                    if (e.done) return { done: !0 };
                    var r = n.get(e.value[0]);
                    return (
                      r == null &&
                        ((r = [t].concat(e.value[0])), n.set(e.value[0], r)),
                      { done: !1, value: [r, e.value[1]] }
                    );
                  },
                );
              },
            };
          },
          keyLength: e.keyLength + 1,
          subscribe: function (o, a) {
            return e.subscribe(function (e, r, a) {
              var i = n.get(e);
              return (
                i == null && ((i = [t].concat(e)), n.set(e, i)),
                o(i, r, a)
              );
            }, i(a));
          },
        },
        d,
      );
    }
    ((l.prototype = d),
      (l.key = p),
      (l.empty = g),
      (l.leftJoin = C),
      (l.union = v),
      (l.mergeJoin = R),
      (l.fromTableAscending = T),
      (l.fromTableDescending = D),
      (l.toArrayAsync = x),
      (l.firstAsync = $),
      (l.firstExnAsync = P),
      (l.prependKey = N));
  },
  98,
);
