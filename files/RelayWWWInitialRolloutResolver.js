__d(
  "RelayWWWInitialRolloutResolver",
  ["RelayLQOperationsDisableWWWInitial"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = new Set(
        r("RelayLQOperationsDisableWWWInitial").disabled_operations,
      );
      return t.has(e);
    }
    l.disableWWWInitial = e;
  },
  98,
);
