__d(
  "webTableIndexPath",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = [],
      l = s(e);
    function s(e) {
      return e.join(",");
    }
    function u(e) {
      return e.split(",").map(function (e) {
        return Number(e);
      });
    }
    var c = s([-1]);
    ((i.ROOT_RAW = e),
      (i.ROOT = l),
      (i.getWebTableIndexPath = s),
      (i.getWebTableRawIndexPath = u),
      (i.OUT_OF_BOUNDS = c));
  },
  66,
);
