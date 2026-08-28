__d(
  "ScopingBaseGating.entrypointutils",
  ["EligibleForScopingGating.entrypointutils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return o(
        "EligibleForScopingGating.entrypointutils",
      ).getIsEligibleForScoping()
        ? e()
        : !1;
    }
    l.checkScopingBase = e;
  },
  98,
);
