__d(
  "WAWebCVPErrorCodeMapping",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = 0,
      l = [];
    function s(t) {
      if (t == null || t === "") return e;
      for (var n of l) {
        var r = n[0],
          o = n[1];
        if (r.test(t)) return o;
      }
      return e;
    }
    i.default = s;
  },
  66,
);
