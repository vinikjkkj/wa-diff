__d(
  "AdsICIsNotInContextualTargetingPredicatePlugin",
  ["immutable"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        type: "icContextualTargetingPredicate",
        key: "is_not_in",
        matches: function (t, n) {
          return t == null
            ? !0
            : Array.isArray(n)
              ? !r("immutable").List(n).includes(t)
              : !1;
        },
      },
      s = e;
    l.default = s;
  },
  98,
);
