__d(
  "baseTextWithEntitiesAdjustRanges",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e, t, n) {
      return e
        .map(function (e) {
          return babelHelpers.extends({}, e, { offset: e.offset - t });
        })
        .filter(function (e) {
          return e.offset >= 0 && e.offset < n;
        });
    }
    i.default = e;
  },
  66,
);
