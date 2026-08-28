__d(
  "AdsICIsInContextualTargetingPredicatePlugin",
  ["immutable"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        type: "icContextualTargetingPredicate",
        key: "is_in",
        matches: function (t, n) {
          return Array.isArray(n)
            ? r("immutable").List(n).includes(t)
            : typeof n == "boolean"
              ? t === n
              : !1;
        },
      },
      s = e;
    l.default = s;
  },
  98,
);
