__d(
  "AdsCreativeEnrollmentDefaultOnUtils",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = new Set(["DEFAULT", "DEFAULT_OFF", "STICKY"]);
    function l(e) {
      return e.hasValueWithoutError() || e.hasError() || !e.isLoading();
    }
    function s(e, t) {
      var n;
      return (n =
        e.features_eligibility_map
          .creative_enrollment_default_on_eligibility) == null
        ? void 0
        : n.get(t);
    }
    function u(e, t) {
      return t !== !1 ? e : { shouldOptIn: !1, optInSource: "DEFAULT_OFF" };
    }
    ((i.GOVERNED_AUTOMATIC_ACTION_TYPES = e),
      (i.isGovernedEligibilitySettled = l),
      (i.getCreativeEnrollmentDefaultOnEligibility = s),
      (i.applyCreativeEnrollmentDefaultOnEligibility = u));
  },
  66,
);
