__d(
  "getGraphQLEnumSafe",
  ["flipObject", "memoizeByReference"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      if (t == null) return null;
      var n = s(e);
      return Object.prototype.hasOwnProperty.call(n, t) ? n[t] : null;
    }
    var s = r("memoizeByReference")(r("flipObject"));
    l.default = e;
  },
  98,
);
