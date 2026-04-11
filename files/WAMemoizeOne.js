__d(
  "WAMemoizeOne",
  ["shallowEqual"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      t === void 0 && (t = r("shallowEqual"));
      var n = null,
        o = function (o) {
          return (
            n == null || !t(n.params, o)
              ? (n = { params: o, result: e.call(this, o) })
              : (n.params = o),
            n.result
          );
        };
      return (
        (o.clear = function () {
          n = null;
        }),
        o
      );
    }
    l.default = e;
  },
  98,
);
