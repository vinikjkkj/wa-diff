__d(
  "LSIterationOperations",
  [
    "I64",
    "LSDict",
    "LSMaybeSyncIteration",
    "LSSynchronousPromise",
    "ReStoreKeyComparer",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e, s;
    function u(e, t) {
      var n;
      return (
        (n = {}),
        (n[
          typeof Symbol == "function" ? Symbol.asyncIterator : "@@asyncIterator"
        ] = function () {
          return u(e, t);
        }),
        (n.next = function () {
          var n = { done: !0 },
            r = function (r) {
              return o("LSSynchronousPromise")
                .wrapInSyncPromiseIfNotPromise(t(r.value.item))
                .then(function (e) {
                  if (e)
                    return ((n = r), o("LSMaybeSyncIteration").STOP_ITERATION);
                });
            };
          return o("LSMaybeSyncIteration")
            .iteratorLoop(e, r)
            .then(function () {
              return n;
            });
        }),
        n
      );
    }
    function c(e, t, n) {
      var r,
        a = 0;
      return (
        (r = {}),
        (r[
          typeof Symbol == "function" ? Symbol.asyncIterator : "@@asyncIterator"
        ] = function () {
          return c(e, t, n);
        }),
        (r.next = function () {
          if (a >= n)
            return o("LSSynchronousPromise").makeSynchronousPromise({
              done: !0,
            });
          var r = { done: !0 },
            i = function (n) {
              if (!(a++ < t))
                return ((r = n), o("LSMaybeSyncIteration").STOP_ITERATION);
            };
          return o("LSMaybeSyncIteration")
            .iteratorLoop(e, i)
            .then(function () {
              return r;
            });
        }),
        r
      );
    }
    function d(e, t) {
      return m(e).then(function (e) {
        return e.reduce(
          function (e, n) {
            return e.then(function () {
              return t(n);
            });
          },
          o("LSSynchronousPromise").makeSynchronousPromise(void 0),
        );
      });
    }
    function m(e) {
      var t = [],
        n = function (n) {
          t.push(n.value);
        };
      return o("LSMaybeSyncIteration")
        .iteratorLoop(e, n)
        .then(function () {
          return t;
        });
    }
    function p(t, n, r) {
      var a;
      r === void 0 && (r = []);
      var i = { ASC: 1, DESC: -1 },
        l = function (r, a) {
          for (var t = r.item, l = a.item, s = 0; s < n.length; s++) {
            var u = n[s],
              c = u[0],
              d = t[c],
              m = l[c],
              p = 0;
            if (
              (d == null && m == null
                ? (p = 0)
                : d == null && m != null
                  ? (p = -1)
                  : d != null && m == null
                    ? (p = 1)
                    : (p = (e || (e = o("ReStoreKeyComparer"))).compareValue(
                        d,
                        m,
                      )),
              p !== 0)
            )
              return p * i[n[s][1]];
          }
          return 0;
        },
        s,
        u = [],
        c = [],
        d = function (t) {
          for (var e = [], n = r.length - 1; n >= 0; n--) e.push(t[r[n]]);
          return e;
        },
        m = function () {
          ((c = u), c.sort(l), (u = []));
        };
      return (
        (a = {}),
        (a[
          typeof Symbol == "function" ? Symbol.asyncIterator : "@@asyncIterator"
        ] = function () {
          return p(t, n, r);
        }),
        (a.next = function () {
          if (c.length)
            return o("LSSynchronousPromise").makeSynchronousPromise({
              done: !1,
              value: c.shift(),
            });
          var n = function (n) {
            var t = d(n.value.item);
            if (
              s != null &&
              (e || (e = o("ReStoreKeyComparer"))).compareKey(s, t) !== 0
            )
              return (
                m(),
                u.push(n.value),
                (s = t),
                o("LSMaybeSyncIteration").STOP_ITERATION
              );
            ((s = t), u.push(n.value));
          };
          return o("LSMaybeSyncIteration")
            .iteratorLoop(t, n)
            .then(function () {
              return (
                !c.length && u.length && m(),
                c.length ? { done: !1, value: c.shift() } : { done: !0 }
              );
            });
        }),
        a
      );
    }
    function _(e) {
      var t = 0,
        n = function () {
          t++;
        };
      return o("LSMaybeSyncIteration")
        .iteratorLoop(e, n)
        .then(function () {
          return (s || (s = o("I64"))).of_int32(t);
        });
    }
    function f(e, t) {
      return {
        forEach: function (a) {
          return m(e).then(function (e) {
            var n = e.reduce(function (e, n) {
                var r = n.item[t],
                  o = (e.get(r) || 0) + 1;
                return e.set(r, o);
              }, new (r("LSDict"))()),
              i = o("LSSynchronousPromise").makeSynchronousPromise(void 0),
              l = function () {
                var e = u[0],
                  n = u[1];
                i = i.then(function () {
                  var r;
                  return a(
                    ((r = {}),
                    (r[t] = e),
                    (r.group_count = (s || (s = o("I64"))).of_int32(n)),
                    r),
                  );
                });
              };
            for (var u of n.entries()) l();
            return i;
          });
        },
      };
    }
    ((l.filter = u),
      (l.slice = c),
      (l.forEach = d),
      (l.toArray = m),
      (l.sortBy = p),
      (l.count = _),
      (l.groupBy = f));
  },
  98,
);
