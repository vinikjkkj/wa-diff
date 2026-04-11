__d(
  "sprintf",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e) {
      for (
        var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1;
        r < t;
        r++
      )
        n[r - 1] = arguments[r];
      var o = 0;
      return e.replace(/%s/g, function () {
        return String(n[o++]);
      });
    }
    i.default = e;
  },
  66,
);
