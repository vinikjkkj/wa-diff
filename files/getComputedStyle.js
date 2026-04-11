__d(
  "getComputedStyle",
  ["getDefaultViewForNode"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      var n = r("getDefaultViewForNode")(e);
      return n == null ? null : n.getComputedStyle(e, t);
    }
    l.default = e;
  },
  98,
);
