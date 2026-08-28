__d(
  "hasLabelFilter",
  ["AdsPEFilterFields"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = r("AdsPEFilterFields").SEARCH_BY_LABEL;
      return e.values.some(function (e) {
        return e.field.key === t.key;
      });
    }
    l.default = e;
  },
  98,
);
