__d(
  "AdsDFOBudgetVOLOHoHUtils",
  [
    "AdsUEditorMessagingDestinationUtils",
    "CtxAdvertiserQeHbtExposureFalcoEvent",
    "CurrentAdAccount",
    "gkx",
    "qex",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return (
        !o("AdsUEditorMessagingDestinationUtils").isMultiDestination(e) &&
        r("gkx")("5210")
      );
    }
    function s(t, n) {
      if (!r("gkx")("8288") || !e(t)) return !1;
      if (!n) return r("gkx")("25388");
      var o = r("gkx")("25488");
      r("qex")._("459");
      var a = r("CurrentAdAccount").getID();
      return (
        a != null &&
          r("CtxAdvertiserQeHbtExposureFalcoEvent").log(function () {
            return {
              condition: o ? "test" : "control",
              feature_name: "vo_lo_dfo_budget_recommendation_non_cbo",
              hbt_name: "ctx_dfo_hoh_h2_2026",
              unit_id: a,
              unit_type: "ad_account_id",
            };
          }),
        o
      );
    }
    ((l.isInDFOBudgetVOLOLaunchSegment = e),
      (l.isVOLOLaunchedInHoHHoldoutSegment = s));
  },
  98,
);
