__d(
  "AdsFacebookNotificationsPlacementUtils",
  [
    "AdCampaignDestination",
    "AdsAPIDevicePlatform",
    "AdsAPIObjectives",
    "AdsAPIOptimizationGoals",
    "AdsBwIPlacementUtils",
    "AdsPlacementIneligibilityReason",
    "AdsPlacementsFacebookNotificationPositionPlugin",
    "AdsPromotedObjectTypes",
    "AdsRegulatedCategory",
    "IGAdsSensitiveVerticalsUtils",
    "adsIGLoginPlacementUtils",
    "getFilteredPositionsWithParentEligibleParentPlacementAndSoftOptOut",
    "gkx",
    "immutable",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c = r("immutable").Set([
        (e = r("AdsAPIObjectives")).OUTCOME_SALES,
        e.OUTCOME_LEADS,
        e.OUTCOME_ENGAGEMENT,
        e.LINK_CLICKS,
        e.CONVERSIONS,
        e.WEBSITE_CONVERSIONS,
        e.PRODUCT_CATALOG_SALES,
        e.POST_ENGAGEMENT,
        e.MESSAGES,
        e.LEAD_GENERATION,
      ]),
      d = r("immutable").Set([
        (s = r("AdsAPIOptimizationGoals")).OFFSITE_CONVERSIONS,
        s.LINK_CLICKS,
        s.LANDING_PAGE_VIEWS,
        s.RETURN_ON_AD_SPEND,
        s.LEAD_GENERATION,
        s.QUALITY_LEAD,
        s.REPLIES,
        s.MESSAGING_PURCHASE_CONVERSION,
        s.ONSITE_CONVERSIONS,
        s.CONVERSATIONS,
        s.VALUE,
      ]),
      m = r("immutable").Set([
        (u = r("AdsRegulatedCategory")).EMPLOYMENT,
        u.HOUSING,
        u.CREDIT,
        u.FINANCIAL_PRODUCTS_SERVICES,
        u.ISSUES_ELECTIONS_POLITICS,
        u.SOCIAL_ISSUES,
        u.ELECTIONS_POLITICS,
      ]);
    function p() {
      var e = r("gkx")("6387"),
        t = r("gkx")("14032"),
        n = t
          ? r("IGAdsSensitiveVerticalsUtils").is_pharma_or_sensitive_vertical
          : r("IGAdsSensitiveVerticalsUtils").is_pharma_or_sensitive_vertical ||
            r("IGAdsSensitiveVerticalsUtils").is_luxury_vertical;
      return e && !n;
    }
    function _(e) {
      var t;
      if (!c.includes(e.objective))
        return o("AdsPlacementIneligibilityReason").createObjectiveReason(
          e.objective,
        );
      if (!f(e.optimizationGoal))
        return o(
          "AdsPlacementIneligibilityReason",
        ).createOptimizationGoalReason();
      if (
        !(
          (t = e.spec.device_platforms) != null &&
          t.includes(r("AdsAPIDevicePlatform").MOBILE)
        )
      )
        return o("AdsPlacementIneligibilityReason").createDevicePlatformReason(
          r("AdsAPIDevicePlatform").DESKTOP,
        );
      if (h(e.specialAdCategories))
        return o("AdsPlacementIneligibilityReason").createSACReason();
      if (e.promotedObjectType === r("AdsPromotedObjectTypes").IMAGINATION)
        return o("AdsPlacementIneligibilityReason").createImaginationReason();
      if (e.isReelsTrendingAds === !0)
        return o(
          "AdsPlacementIneligibilityReason",
        ).createReelsTrendingAdsReason();
      var n = o(
        "getFilteredPositionsWithParentEligibleParentPlacementAndSoftOptOut",
      ).getSOOBundleParentIneligibilityReason(
        r("AdsPlacementsFacebookNotificationPositionPlugin"),
        e,
      );
      if (n != null) return n;
      var a = o("AdsBwIPlacementUtils").getIneligibilityReason(e);
      return (
        a ||
        (e.destinationType === r("AdCampaignDestination").INSTAGRAM_LIVE
          ? o("AdsPlacementIneligibilityReason").createInstagramLiveReason()
          : e.destinationType === r("AdCampaignDestination").INSTAGRAM_DIRECT
            ? o("AdsPlacementIneligibilityReason").createInstagramDirectReason(
                e.objective,
              )
            : o(
                  "adsIGLoginPlacementUtils",
                ).getShouldDisableFBPlacementForIGLoginUsers(e.account)
              ? o("AdsPlacementIneligibilityReason").createIGLoginReason()
              : null)
      );
    }
    function f(e) {
      return e != null && d.includes(e);
    }
    function g(e, t) {
      return t.some(function (t) {
        var n;
        return (
          e.size === 1 && ((n = e.get(0)) == null ? void 0 : n.position) === t
        );
      });
    }
    function h(e) {
      return (
        e != null &&
        e.some(function (e) {
          return m.includes(e);
        })
      );
    }
    ((l.ELIGIBLE_OBJECTIVES = c),
      (l.ELIGIBLE_OPTIMIZATION_GOALS = d),
      (l.isAdvertiserEligible = p),
      (l.getMaybeIneligibilityReason = _),
      (l.isIneligibleSoloPlacement = g));
  },
  98,
);
