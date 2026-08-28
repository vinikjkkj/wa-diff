__d(
  "webTableStandardDataSource",
  ["webTableDataSource"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      var n = e.map(function (e) {
        return { item: e, depth: 0 };
      });
      return r("webTableDataSource")(n, t);
    }
    l.default = e;
  },
  98,
);
