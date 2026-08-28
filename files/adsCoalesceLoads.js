__d(
  "adsCoalesceLoads",
  ["clearTimeout", "nullthrows", "setTimeout"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 50;
    function s(t, n) {
      var o = n == null ? e : n,
        a = null,
        i = null;
      return function (e) {
        r("clearTimeout")(i);
        var n = a || new Set();
        if (((a = n), n.add(e), n.size === o)) {
          (t(Array.from(n)), (a = null));
          return;
        }
        i = r("setTimeout")(function () {
          (t(Array.from(r("nullthrows")(a))), (a = null));
        }, 0);
      };
    }
    l.default = s;
  },
  98,
);
