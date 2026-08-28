__d(
  "getEnumFromString",
  ["memoizeByReference"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = {};
      return (
        Object.values(e).forEach(function (e) {
          t[e] = e;
        }),
        t
      );
    }
    var s = r("memoizeByReference")(e);
    function u(e, t) {
      if (t == null) return null;
      var n = s(e);
      return n[t] != null ? n[t] : null;
    }
    l.default = u;
  },
  98,
);
