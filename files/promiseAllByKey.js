__d(
  "promiseAllByKey",
  ["Promise"],
  function (t, n, r, o, a, i) {
    var e;
    function l(t) {
      var r = Object.keys(t);
      return (e || (e = n("Promise")))
        .all(
          r.map(function (e) {
            return t[e];
          }),
        )
        .then(function (e) {
          var t = {};
          return (
            e.forEach(function (e, n) {
              t[r[n]] = e;
            }),
            t
          );
        });
    }
    i.default = l;
  },
  66,
);
