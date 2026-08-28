__d(
  "AdsICContainsContextualTargetingPredicatePlugin",
  ["immutable", "isIterable"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        type: "icContextualTargetingPredicate",
        key: "contains",
        matches: function (t, n) {
          return r("isIterable")(t) ? r("immutable").List(t).includes(n) : !1;
        },
      },
      s = e;
    l.default = s;
  },
  98,
);
