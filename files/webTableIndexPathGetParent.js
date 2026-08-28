__d(
  "webTableIndexPathGetParent",
  ["webTableIndexPath"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = o("webTableIndexPath").getWebTableRawIndexPath(e),
        n = t.slice(0, -1);
      return n.length > 0
        ? o("webTableIndexPath").getWebTableIndexPath(n)
        : o("webTableIndexPath").OUT_OF_BOUNDS;
    }
    l.default = e;
  },
  98,
);
