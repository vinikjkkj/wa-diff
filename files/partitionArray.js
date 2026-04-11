__d(
  "partitionArray",
  [],
  function (t, n, r, o, a, i) {
    function e(e, t, n) {
      var r = [],
        o = [];
      return (
        e.forEach(function (a, i) {
          t.call(n, a, i, e) ? r.push(a) : o.push(a);
        }),
        [r, o]
      );
    }
    i.default = e;
  },
  66,
);
