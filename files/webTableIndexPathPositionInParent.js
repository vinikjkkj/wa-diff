__d(
  "webTableIndexPathPositionInParent",
  ["webTableIndexPath"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      if (e === o("webTableIndexPath").ROOT) return 0;
      var t = o("webTableIndexPath").getWebTableRawIndexPath(e);
      return t[t.length - 1];
    }
    l.default = e;
  },
  98,
);
