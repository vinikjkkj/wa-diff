__d(
  "AdsICGreaterThanContextualTargetingPredicatePlugin",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
        type: "icContextualTargetingPredicate",
        key: "greater_than",
        matches: function (t, n) {
          return typeof n == "number" && typeof t == "number" && t > n;
        },
      },
      l = e;
    i.default = l;
  },
  66,
);
