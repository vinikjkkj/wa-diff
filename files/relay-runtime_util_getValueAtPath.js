__d(
  "relay-runtime/util/getValueAtPath",
  ["invariant"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      var n = e;
      for (var r of t) {
        if (n == null) return null;
        typeof r == "number"
          ? (Array.isArray(n) || l(0, 14107), (n = n[r]))
          : ((typeof n == "object" && !Array.isArray(n)) || l(0, 14106),
            (n = n[r]));
      }
      return n;
    }
    a.exports = e;
  },
  null,
);
