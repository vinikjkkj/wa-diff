__d(
  "WABase64Modulo",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e, t) {
      for (var n = atob(e), r = 0, o = 0; o < n.length; o++) {
        var a = n.charCodeAt(o),
          i = a >> 4,
          l = a & 15;
        ((r = ((r << 4) + i) % t), (r = ((r << 4) + l) % t));
      }
      return r;
    }
    i.default = e;
  },
  66,
);
