__d(
  "CtxBudgetGuidanceLongTermHoldoutUtils",
  ["CtxAdvertiserQeHbtExposureFalcoEvent", "CurrentAdAccount", "gkx"],
  function (t, n, r, o, a, i, l) {
    function e(e, t, n) {
      if ((e === void 0 && (e = !1), s())) {
        var o;
        if (e) {
          var a,
            i = (a = r("gkx")("2103")) != null ? a : !1;
          return (
            r("CtxAdvertiserQeHbtExposureFalcoEvent").log(function () {
              var e;
              return {
                hbt_name: "ctx_budget_guidance_long_term_holdout",
                unit_id: (e = r("CurrentAdAccount").getID()) != null ? e : "",
                feature_name: t,
                condition: i === !0 ? "test" : "control",
                unit_type: "ad_account_id",
                debug_data: { exposure_point: n },
              };
            }),
            i
          );
        }
        return (o = r("gkx")("2535")) != null ? o : !1;
      }
      return !0;
    }
    function s() {
      return !r("gkx")("16910");
    }
    l.isCtxBudgetGuidanceLongTermHoldoutEnabled = e;
  },
  98,
);
