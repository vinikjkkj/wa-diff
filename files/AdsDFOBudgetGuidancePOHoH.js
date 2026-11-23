__d(
  "AdsDFOBudgetGuidancePOHoH",
  ["CtxAdvertiserQeHbtExposureFalcoEvent", "CurrentAdAccount", "gkx", "qex"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      if (!r("gkx")("8288") || !r("gkx")("25382")) return !1;
      if (!e) return r("gkx")("25388");
      var t = r("gkx")("25488");
      r("qex")._("5551");
      var n = r("CurrentAdAccount").getID();
      return (
        n != null &&
          r("CtxAdvertiserQeHbtExposureFalcoEvent").log(function () {
            return {
              condition: t ? "test" : "control",
              feature_name: "po_dfo_budget_recommendation_non_cbo",
              hbt_name: "ctx_dfo_hoh_h2_2026",
              unit_id: n,
              unit_type: "ad_account_id",
            };
          }),
        t
      );
    }
    l.isPOLaunchedInHoHHoldoutSegment = e;
  },
  98,
);
