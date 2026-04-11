__d(
  "padNumber",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e, t) {
      var n = e.toString();
      return n.length >= t ? n : "0".repeat(t - n.length) + n;
    }
    i.default = e;
  },
  66,
);
