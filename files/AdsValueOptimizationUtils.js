__d(
  "AdsValueOptimizationUtils",
  [
    "fbt",
    "AdCampaignDestination",
    "AdsAPIBidStrategies",
    "AdsAPIObjectives",
    "AdsAPIOptimizationGoals",
    "AdsAccountUtils",
    "AdsAppUrlUtils",
    "AdsCampaignGroupROASUIState",
    "AdsConversionGoalVOStrings",
    "AdsDeliveryOmnichannelUtils",
    "AdsDeliveryVOEligibilityStrings",
    "AdsHelpTrayUIActions",
    "AdsInterfacesLogger",
    "AdsODAXUtils",
    "AdsRecommendationIaaExperimentUtils",
    "AdsRecommendationIapExperimentUtils",
    "AdsValueOptimizationUIState",
    "AppAdsValueOptimizationStrings",
    "FBLogger",
    "IOS14Utils",
    "IsAppAdUtils",
    "getErrorSafe",
    "gkx",
    "isEmpty",
    "isFalsey",
    "isTruthy",
    "qex",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u,
      c,
      d = [
        (u = r("AdsCampaignGroupROASUIState")).ENABLED,
        u.DISABLED_BY_ELIGIBILITY,
        u.DISABLED_BY_CATALOG_ELIGIBILITY,
        u.DISABLED_BY_TRUST_TIER,
      ],
      m = [
        u.DISABLED_BY_CATALOG_ELIGIBILITY,
        u.DISABLED_BY_ELIGIBILITY,
        u.DISABLED_BY_TRUST_TIER,
      ],
      p = [
        (c = r("AdsValueOptimizationUIState")).DISABLED_BY_ELIGIBILITY,
        c.DISABLED_BY_IOS14_ELIGIBILITY,
        c.DISABLED_BY_TRUST_TIER,
      ],
      _ = [].concat(p, [c.ENABLED]);
    function f(e) {
      return e != null && _.includes(e);
    }
    function g(e) {
      return e != null && p.includes(e);
    }
    function h(e, t) {
      return (
        e != null &&
        t &&
        r("AdsAccountUtils").hasCapability(
          e,
          "SHOULD_DEFAULT_VALUE_OPTIMIZATION_FOR_NEKO",
        )
      );
    }
    function y(e, t, n, a) {
      if (
        r("IOS14Utils").isIOS14AdAccount(e) ||
        t !== r("AdsAPIObjectives").APP_INSTALLS ||
        n == null
      )
        return !1;
      var i = n == null ? void 0 : n.includes("AdImpression"),
        l = n == null ? void 0 : n.includes("Purchase"),
        s = i || l;
      if (
        s !== !0 ||
        a === r("AdsAPIBidStrategies").COST_CAP ||
        a === r("AdsAPIBidStrategies").LOWEST_COST_WITH_BID_CAP
      )
        return !1;
      var u =
          o("AdsRecommendationIapExperimentUtils").shouldShowIapPfrByAccount(
            !1,
          ) &&
          o(
            "AdsRecommendationIapExperimentUtils",
          ).shouldShowNestedRecoveryQeByAccount(!1),
        c = o("AdsRecommendationIaaExperimentUtils").shouldShowIaaPfrByAccount(
          !1,
        );
      return (u && l) || (c && i);
    }
    function C() {
      return r("gkx")("8503");
    }
    function b() {
      return r("qex")._("4999") === !0;
    }
    function v() {
      return b()
        ? s._(/*BTDS*/ "Maximize ROAS")
        : s._(/*BTDS*/ "Maximize value of conversions");
    }
    function S() {
      return b()
        ? s._(/*BTDS*/ "About maximizing return on ad spend")
        : s._(/*BTDS*/ "About maximizing for value of conversions");
    }
    function R(e) {
      return (e === void 0 && (e = !1), C());
    }
    function L(e) {
      return r("AdsAccountUtils").hasCapability(
        e,
        "CAN_DEFAULT_ROAS_CF_MIN_ROAS",
      );
    }
    var E = "571188993373447",
      k = "296463804090290",
      I = function (t) {
        (t.preventDefault(),
          t.stopPropagation(),
          o("AdsHelpTrayUIActions").pushCMSIDToHistory(E));
      };
    function T(e, t, n, a, i, l, s) {
      (l === void 0 && (l = !1), s === void 0 && (s = !1));
      var u =
        t &&
        o("AdsODAXUtils").maybeTranslateObjectiveByPromotedObjectType(t, n);
      if (
        (e == null ? void 0 : e.valueOptimizationState) ===
          r("AdsValueOptimizationUIState").DISABLED_BY_ELIGIBILITY ||
        l === !0
      ) {
        if (u === r("AdsAPIObjectives").PRODUCT_CATALOG_SALES)
          return o(
            "AdsConversionGoalVOStrings",
          ).getIneligibleCatalogSaleValueOptimizationHoverCardNew();
        var c = r("IsAppAdUtils").isInAppAdsEligible(
            u,
            null,
            i,
            r("AdsAPIOptimizationGoals").VALUE,
            s,
          ),
          d = r("AdsAppUrlUtils").isItunesURL(i);
        if (d && u === r("AdsAPIObjectives").APP_INSTALLS) {
          var m = r("qex")._("2932") === !0;
          if (m) return D(c);
        }
        return c
          ? o(
              "AppAdsValueOptimizationStrings",
            ).getAppAdsValueOptimizationDisableTooltipContent()
          : o("AdsDeliveryVOEligibilityStrings")
              .PIXEL_INELIGIBLE_VALUE_OPTIMIZATION_HOVER_CARD;
      }
      if (
        (e == null ? void 0 : e.valueOptimizationState) ===
        r("AdsValueOptimizationUIState").DISABLED_BY_IOS14_ELIGIBILITY
      )
        return a === !0
          ? o(
              "AdsConversionGoalVOStrings",
            ).getIOS14IneligibleValueOptimizationHoverCard()
          : o("AdsDeliveryVOEligibilityStrings")
              .IOS14_INELIGIBLE_VALUE_OPTIMIZATION_HOVER_CARD;
    }
    function D(e) {
      return e
        ? o(
            "AppAdsValueOptimizationStrings",
          ).getIAAVOEligibilityTooltipContent()
        : o(
            "AppAdsValueOptimizationStrings",
          ).getIAPVOEligibilityTooltipContent();
    }
    function x(t, n, o, a) {
      return n !== r("AdsAPIObjectives").APP_INSTALLS &&
        n !== r("AdsAPIObjectives").MOBILE_APP_INSTALLS
        ? g(a)
        : t || o == null || (e || (e = r("isEmpty")))(o);
    }
    function $(e, t, n, o, a, i) {
      if (
        (i === void 0 && (i = !0),
        (t == null || e == null || n == null) && r("gkx")("18205"))
      ) {
        var l;
        r("AdsInterfacesLogger").log({
          eventName: "null_params_default_value_optimization_goal",
          data:
            ((l = {}),
            (l.event_source = a),
            (l.campaign_id = e == null ? void 0 : e.campaign_id),
            (l.accountid = t == null ? void 0 : t.account_id),
            (l.campaign_group_id = n == null ? void 0 : n.id),
            l),
        });
      }
      if (
        t == null ||
        e == null ||
        n == null ||
        r("isTruthy")(t.is_tier_0) ||
        r("isTruthy")(t.is_tier_1) ||
        !o ||
        (n == null ? void 0 : n.bid_strategy) ===
          r("AdsAPIBidStrategies").COST_CAP ||
        (n == null ? void 0 : n.bid_strategy) ===
          r("AdsAPIBidStrategies").LOWEST_COST_WITH_BID_CAP
      )
        return !1;
      var s = null;
      if (
        !r("gkx")("18205") &&
        (i ? (s = r("qex")._("3984")) : (s = r("qex")._("282")),
        r("isFalsey")(s))
      )
        return !1;
      var u = r("isTruthy")(s)
        ? "default_value_optimization_goal_gtm4"
        : "default_value_optimization_goal";
      try {
        var c;
        r("AdsInterfacesLogger").log({
          eventName: u,
          data:
            ((c = {}),
            (c.event_source = a),
            (c.campaign_id = e == null ? void 0 : e.campaign_id),
            (c.accountid = t == null ? void 0 : t.account_id),
            c),
        });
      } catch (e) {
        r("FBLogger")("default_value_optimization_goal")
          .catching(r("getErrorSafe")(e))
          .mustfix("Unexpected error on VO defaulting");
      }
      return !0;
    }
    function P() {
      return !0;
    }
    function N(e) {
      var t = new Set([
        r("AdsAPIObjectives").OUTCOME_SALES,
        r("AdsAPIObjectives").PRODUCT_CATALOG_SALES,
      ]);
      return t.has(e)
        ? null
        : s._(
            /*BTDS*/ "This campaign's objective is not eligible for the value optimization goal test.",
          );
    }
    function M(e) {
      var t = e.featureName;
      return s._(
        /*BTDS*/ "We're not able to turn on {feature name} due to your campaign objective.",
        [s._param("feature name", t)],
      );
    }
    var w = function (t) {
        var e = t.campaign;
        if (
          (e == null ? void 0 : e.id) != null &&
          e.optimization_goal !==
            r("AdsAPIOptimizationGoals").OFFSITE_CONVERSIONS
        )
          return { campaignIDs: new Set([e.id]) };
      },
      A = function (t) {
        var e,
          n,
          a,
          i,
          l,
          s,
          u,
          c,
          d = t.campaign;
        if ((d == null ? void 0 : d.id) != null) {
          var m =
              d.destination_type == null ||
              d.destination_type === r("AdCampaignDestination").UNDEFINED,
            p =
              d.destination_type === r("AdCampaignDestination").WEBSITE ||
              (m &&
                (d.promoted_object == null ||
                  (((e = d.promoted_object) == null
                    ? void 0
                    : e.application_id) == null &&
                    ((n = d.promoted_object) == null
                      ? void 0
                      : n.omnichannel_object) == null))),
            _ = {
              destination_type: d.destination_type,
              promoted_object: d.promoted_object
                ? {
                    application_id:
                      (a = d.promoted_object) == null
                        ? void 0
                        : a.application_id,
                    omnichannel_object:
                      (i = d.promoted_object) != null && i.omnichannel_object
                        ? {
                            offline:
                              (l =
                                (s = d.promoted_object) == null ||
                                (s = s.omnichannel_object) == null ||
                                (s = s.offline) == null
                                  ? void 0
                                  : s.toArray().map(function (e) {
                                      return e.toJS();
                                    })) != null
                                ? l
                                : null,
                            onsite:
                              (u =
                                (c = d.promoted_object) == null ||
                                (c = c.omnichannel_object) == null ||
                                (c = c.onsite) == null
                                  ? void 0
                                  : c.toArray().map(function (e) {
                                      return e.toJS();
                                    })) != null
                                ? u
                                : null,
                          }
                        : null,
                  }
                : null,
            },
            f = o(
              "AdsDeliveryOmnichannelUtils",
            ).canUseOmnichannelForWebsiteAndApp(_);
          if (!p && !f) return { campaignIDs: new Set([d.id]) };
        }
      };
    ((l.CAMPAIGN_GROUP_ROAS_SHOWING_STATES = d),
      (l.CAMPAIGN_GROUP_ROAS_DISABLED_STATES = m),
      (l.showVOBasedOnVOUIState = f),
      (l.showVODisabledBasedOnVOUIState = g),
      (l.shouldDefaultValueForMobileAppInstall = h),
      (l.shouldDefaultValueOptimizationForAppInstallsObjective = y),
      (l.isViewThroughDefaultEnabledForVO = C),
      (l.genRenameToROASEnabled = b),
      (l.genValuePerfGoalName = v),
      (l.genValuePerfAboutLinkName = S),
      (l.isViewThroughDefaultEnabledForVOQE = R),
      (l.shouldDefaultValueForProductCatalogSales = L),
      (l.VALUE_OPTIMIZATION_CMSID = E),
      (l.MAXIMIZE_VALUE_OPTIMIZATION_CMSID = k),
      (l.openLearnMoreOnMouseDown = I),
      (l.getValueOptimizationDisabledMessage = T),
      (l.getAppAdsValueOptimizationDisableTooltipContentWithQE = D),
      (l.isValueOptimizationDisabled = x),
      (l.shouldDefaultVOOptimizationGoal = $),
      (l.isVOGoalPFRPCAEnabled = P),
      (l.getInvalidObjectiveErrorForValueOptimizationGoalABTest = N),
      (l.getObjectiveCompatibilityErrorMessageForValueOptimizationGoalABTest =
        M),
      (l.isPerformanceGoalNotEligibleForVoABTest = w),
      (l.isConversionLocationNotEligibleForVoABTest = A));
  },
  226,
);
