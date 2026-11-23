__d(
  "CTXDynamicBudgetNonCBOUtils",
  ["fbt", "AdsInterfacesLogger", "AdsPERouterHelper", "gkx", "qex"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    function e(e, t) {
      var n;
      (e === void 0 && (e = !1), t === void 0 && (t = "default"));
      var o = r("qex")._("258") === !0;
      return (
        r("AdsInterfacesLogger").log({
          eventName: "ctx_dynamic_budget_exposure_event",
          data:
            ((n = {}),
            (n.new_value = t),
            (n.old_value = o ? "test" : "control"),
            (n.is_active = e),
            n),
        }),
        r("gkx")("5754") ? !0 : e ? r("qex")._("246") === !0 : o
      );
    }
    function u() {
      return r("gkx")("5754") ? !0 : r("qex")._("1518") === !0;
    }
    function c(e) {
      return e ? s._(/*BTDS*/ "") : s._(/*BTDS*/ "");
    }
    function d(e, t) {
      return s._(/*BTDS*/ "", [
        s._param("currentBudget", e),
        s._param("recommendedBudget", t),
      ]);
    }
    function m() {
      return s._(/*BTDS*/ "");
    }
    function p(e) {
      return e === !0 ? s._(/*BTDS*/ "") : s._(/*BTDS*/ "");
    }
    function _(e) {
      return e
        ? "ads_ctx_dynamic_zo_view_in_campaign_group_button"
        : "ads_ctx_dynamic_zo_view_in_campaign_button";
    }
    function f(e) {
      e != null &&
        r("AdsPERouterHelper")
          .getRouteBuilder()
          .section("L3")
          .tray("EDITOR_DRAWER")
          .setTreeNav(!0)
          .clearAllSelectedIDs()
          .selectedIDs([e], "campaign")
          .navigate();
    }
    ((l.enableCTXDynamicBudgetRecommendationNonCBO = e),
      (l.isInExperimentCTXDynamicBudgetRecommendationNonCBO = u),
      (l.getBudgetLowWarningHeading = c),
      (l.getBudgetLowWarningMessage = d),
      (l.getApplyNowButtonText = m),
      (l.getViewInCampaignButtonText = p),
      (l.getSecondaryButtonTestId = _),
      (l.navigateToCampaignGroup = f));
  },
  226,
);
