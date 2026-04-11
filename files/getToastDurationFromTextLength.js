__d(
  "getToastDurationFromTextLength",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = 1e4;
    function l(t, n) {
      var r,
        o = (r = n == null ? void 0 : n.getMinimumDurationMs()) != null ? r : e;
      return Math.max(o, t.length * 150);
    }
    i.default = l;
  },
  66,
);
