__d(
  "AdsICNotEqualsContextualTargetingPredicatePlugin",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
        type: "icContextualTargetingPredicate",
        key: "not_equals",
        matches: function (t, n) {
          return t == null
            ? !0
            : typeof n == "number" && typeof t == "number" && t !== n;
        },
      },
      l = e;
    i.default = l;
  },
  66,
);
