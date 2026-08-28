__d(
  "getAccountLevelPlacementExclusionsForObjective",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e, t) {
      var n;
      return t == null
        ? null
        : e == null ||
            (n = e.find(function (e) {
              return String(e == null ? void 0 : e.objective) === String(t);
            })) == null
          ? void 0
          : n.placement_exclusions;
    }
    i.default = e;
  },
  66,
);
