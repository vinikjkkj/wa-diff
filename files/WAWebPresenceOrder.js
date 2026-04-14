__d(
  "WAWebPresenceOrder",
  [],
  function (t, n, r, o, a, i) {
    function e(e, t) {
      var n = new Set(
          t.map(function (e) {
            return e.toString();
          }),
        ),
        r = e.filter(function (e) {
          return n.has(e.toString());
        }),
        o = new Set(
          r.map(function (e) {
            return e.toString();
          }),
        ),
        a = t.filter(function (e) {
          return !o.has(e.toString());
        });
      return [].concat(r, a);
    }
    i.preserveUserOrder = e;
  },
  66,
);
