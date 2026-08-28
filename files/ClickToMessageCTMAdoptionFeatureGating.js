__d(
  "ClickToMessageCTMAdoptionFeatureGating",
  [
    "AdCampaignDestination",
    "AdsAPIObjectives",
    "AdsAPIOptimizationGoals",
    "AdsBrandAwarenessUtils",
    "AdsDFOBudgetGuidanceUtils",
    "AdsInterfacesLogger",
    "AdsODAXUtils",
    "AdsPERouterHelper",
    "AdsPromotedObjectTypes",
    "AdsUEditorMessagingDestinationUtils",
    "CTXDynamicBudgetNonCBOUtils",
    "CtxBudgetGuidanceLongTermHoldoutUtils",
    "gkx",
    "qex",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return e !== r("AdCampaignDestination").WHATSAPP;
    }
    function s(e) {
      return e ? r("qex")._("1606") === !0 : r("qex")._("1607") === !0;
    }
    function u(e, t) {
      var n = [
        r("AdsAPIObjectives").OUTCOME_ENGAGEMENT,
        r("AdsAPIObjectives").VIDEO_VIEWS,
      ];
      return (
        t != null && n.includes(t) && e === r("AdsPromotedObjectTypes").VIDEO
      );
    }
    function c(e, t) {
      var n = [
          r("AdsAPIObjectives").OUTCOME_AWARENESS,
          r("AdsAPIObjectives").VIDEO_VIEWS,
        ],
        a = o("AdsODAXUtils").AWARENESS_VIDEO_VIEWS_OPTIMIZATION_GOALS;
      return t != null && n.includes(t) && e != null && a.includes(e);
    }
    function d(e, t) {
      return (
        t === r("AdsAPIObjectives").OUTCOME_ENGAGEMENT &&
        (e === r("AdsAPIOptimizationGoals").POST_ENGAGEMENT ||
          e === r("AdsAPIOptimizationGoals").REACH)
      );
    }
    function m(e, t, n, r) {
      return (
        (o("AdsBrandAwarenessUtils").isBrandObjective(t) && e === !0) ||
        u(n, t) ||
        d(r, t)
      );
    }
    function p(e) {
      var t = e ? r("qex")._("1894") : r("qex")._("1895");
      return t !== !0;
    }
    function _(e) {
      return (
        e === r("AdsAPIOptimizationGoals").REPLIES ||
        e === r("AdsAPIOptimizationGoals").CONVERSATIONS ||
        e === r("AdsAPIOptimizationGoals").MESSAGING_PURCHASE_CONVERSION
      );
    }
    function f(e, t, n) {
      if (e) return !1;
      var r = o(
          "AdsUEditorMessagingDestinationUtils",
        ).isClickToMessageAdDestination(t),
        a = _(n),
        i = o("AdsDFOBudgetGuidanceUtils").isEligibleCampaignForDFOSABRZO(t, n);
      return (a && r) || i;
    }
    function g(e) {
      if ((e === void 0 && (e = !0), e)) {
        var t,
          n,
          o,
          a =
            (t =
              (n = r("AdsPERouterHelper").getRouter()) == null ||
              n.getQueryParams == null ||
              (n = n.getQueryParams()) == null
                ? void 0
                : n.package_config_id) != null
              ? t
              : null;
        r("AdsInterfacesLogger").log({
          eventName: "ctx_sabr_budget_experiment_exposure",
          data:
            ((o = {}),
            (o.message = "sabr_zo_creation_packages_shadow"),
            (o.new_value = a),
            (o.is_enabled = !0),
            o),
        });
      }
      return e ? r("qex")._("4884") === !0 : r("qex")._("4885") === !0;
    }
    function h(e, t, n) {
      return (
        e === void 0 && (e = !1),
        t === void 0 && (t = "enableCTXAMSABRZOWithWACombinedBudgetGuidanceQE"),
        n === void 0 && (n = "enableCTXAMSABRZOWithWACombinedBudgetGuidanceQE"),
        o(
          "CtxBudgetGuidanceLongTermHoldoutUtils",
        ).isCtxBudgetGuidanceLongTermHoldoutEnabled(e, t, n)
      );
    }
    function y(e, t, n) {
      return (
        e === void 0 && (e = !0),
        t === void 0 && (t = "CTXCBOBudgetGuidance"),
        n === void 0 && (n = "CTXSABRZOBudgetGuidance"),
        o(
          "CtxBudgetGuidanceLongTermHoldoutUtils",
        ).isCtxBudgetGuidanceLongTermHoldoutEnabled(e, t, n)
      );
    }
    function C(e, t) {
      var n = _(t);
      return e === r("AdsAPIObjectives").OUTCOME_ENGAGEMENT && n;
    }
    function b(e) {
      return e ? r("qex")._("673") === !0 : r("qex")._("689") === !0;
    }
    function v(e, t) {
      var n;
      (e === void 0 && (e = !1), t === void 0 && (t = "default"));
      var o = b(!1);
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
        r("gkx")("5754") ? !0 : b(e)
      );
    }
    function S() {
      return r("gkx")("5754") ? !0 : r("qex")._("1562") === !0;
    }
    function R(e, t, n, r) {
      return (
        t === void 0 && (t = !1),
        n === void 0 && (n = "default"),
        o("AdsDFOBudgetGuidanceUtils").isValueOptimizationGoal(r) ||
        o("AdsDFOBudgetGuidanceUtils").isLeadsOptimizationGoal(r)
          ? !1
          : e
            ? v(t, n)
            : o(
                "CTXDynamicBudgetNonCBOUtils",
              ).enableCTXDynamicBudgetRecommendationNonCBO(t, n)
      );
    }
    ((l.enableDisablementCTXZOGeneralCard = e),
      (l.enableSMCTATrafficWebsite = s),
      (l.isEligibleForCTXL1EngagementVideoViews = u),
      (l.isEligibleForCTXAwarenessVideoViews = c),
      (l.isEligibleForCTXL1EngagementPostEngagement = d),
      (l.enableL1CTXUnifiedCreation = m),
      (l.shouldDefaultMessengerInSalesForMessageCTAMessagingResponsive = p),
      (l.isCTXOptimizationGoal = _),
      (l.eligibleCTXAMSABRZOCombinedBudgetGuidance = f),
      (l.enableCTXAMSABRZOWithWACombinedBudgetGuidanceCreationPackagesQE = g),
      (l.enableCTXAMSABRZOWithWACombinedBudgetGuidanceQE = h),
      (l.enableCTXCBOBudgetGuidanceQE = y),
      (l.eligibleCTXAMCBOBudgetGuidance = C),
      (l.enableCTXDynamicBudgetRecommendationCBO = v),
      (l.isInExperimentCTXDynamicBudgetRecommendationCBO = S),
      (l.isEligibleForCTXDynamicBudgetDefaulting = R));
  },
  98,
);
