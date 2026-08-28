__d(
  "AdsManagerCSABreakdownUtils",
  ["AdsValueGkUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      return o("AdsValueGkUtils").isAccountEligibleForVAR();
    }
    function s(e) {
      return e == null
        ? !1
        : e.some(function (e) {
            return e === "user_persona_id" || e === "user_persona_name";
          });
    }
    ((l.isCSAVARBreakdownEnabled = e), (l.isViewingVARBreakdown = s));
  },
  98,
);
