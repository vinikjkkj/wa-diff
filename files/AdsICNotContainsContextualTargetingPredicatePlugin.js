__d(
  "AdsICNotContainsContextualTargetingPredicatePlugin",
  ["immutable"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        type: "icContextualTargetingPredicate",
        key: "not_contains",
        matches: function (t, n) {
          return t == null
            ? !0
            : Array.isArray(t)
              ? !r("immutable").List(t).includes(n)
              : !1;
        },
      },
      s = e;
    l.default = s;
  },
  98,
);
