__d(
  "toLWIDecimalAmount",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e, t) {
      var n = String(t).length - 1,
        r = e < 0 ? "-" : "",
        o = String(Math.abs(e)).padStart(n + 1, "0");
      return n === 0 ? "" + r + o : "" + r + o.slice(0, -n) + "." + o.slice(-n);
    }
    i.default = e;
  },
  66,
);
