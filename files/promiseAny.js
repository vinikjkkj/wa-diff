__d(
  "promiseAny",
  ["invariant", "AggregateError", "Promise"],
  function (t, n, r, o, a, i, l, s) {
    var e;
    function u(t) {
      return new (e || (e = n("Promise")))(function (r, o) {
        return (e || (e = n("Promise"))).resolve(t).then(o, r);
      });
    }
    function c(t) {
      return (
        t.length !== 0 || s(0, 14837),
        (e || (e = n("Promise"))).all(t.map(u)).then(
          function (e) {
            var t = new (r("AggregateError"))(e);
            throw (t.stack, t);
          },
          function (e) {
            return e;
          },
        )
      );
    }
    l.default = c;
  },
  98,
);
