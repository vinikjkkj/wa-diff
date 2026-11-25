__d(
  "LSKeyReturningSprocs",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = new Set([
      "getLatestEpochKeys",
      "getOpenEpochKeys",
      "generateLocalKeys",
    ]);
    function l(t) {
      return e.has(t);
    }
    i.isKeyReturningStoredProcedure = l;
  },
  66,
);
