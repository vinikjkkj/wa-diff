__d(
  "baseTextWithEntitiesSortRanges",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e) {
      return Array.from(e).sort(function (e, t) {
        return e.offset - t.offset || t.length - e.length;
      });
    }
    i.default = e;
  },
  66,
);
