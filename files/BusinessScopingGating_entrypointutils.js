__d(
  "BusinessScopingGating.entrypointutils",
  [
    "EligibleForScopingGating.entrypointutils",
    "ScopingBaseGating.entrypointutils",
    "qex",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      return s() ? !0 : u();
    }
    function s() {
      return o("ScopingBaseGating.entrypointutils").checkScopingBase(
        function () {
          var e;
          return (e = r("qex")._("856")) != null ? e : !1;
        },
      );
    }
    function u() {
      return !(
        s() ||
        !o("EligibleForScopingGating.entrypointutils").getIsEligibleForScoping()
      );
    }
    l.getCanSeeBusinessScoping = e;
  },
  98,
);
