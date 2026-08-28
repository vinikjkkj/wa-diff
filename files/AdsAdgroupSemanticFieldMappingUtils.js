__d(
  "AdsAdgroupSemanticFieldMappingUtils",
  ["AdsAdgroupSemanticFieldMappings"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      return Object.fromEntries(
        Object.keys(e).map(function (n) {
          return t.includes(n)
            ? [n, e[n]]
            : [n, o("AdsAdgroupSemanticFieldMappings").DEFAULT_ACCESSOR];
        }),
      );
    }
    function s(t, n) {
      var r = t[0],
        o = t[1],
        a = r;
      return (
        a.forEach(function (e, t) {
          n.includes(t) || (a = a.delete(t));
        }),
        [a, e(o, n)]
      );
    }
    ((l.selectFields = e), (l.selectCombinedFields = s));
  },
  98,
);
