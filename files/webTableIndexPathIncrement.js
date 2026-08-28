__d(
  "webTableIndexPathIncrement",
  ["webTableIndexPath"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = o("webTableIndexPath").getWebTableRawIndexPath(e),
        n = t.length - 1;
      return o("webTableIndexPath").getWebTableIndexPath(
        [].concat(t.slice(0, n), [t[n] + 1]),
      );
    }
    l.default = e;
  },
  98,
);
