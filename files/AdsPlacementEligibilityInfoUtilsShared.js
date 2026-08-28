__d(
  "AdsPlacementEligibilityInfoUtilsShared",
  [
    "AdCampaignDestination",
    "AdsAPICampaignRecordUtilsShared",
    "AdsPlacementAPISpecReaderUtilsShared",
    "AdsPromotedObjectUtilsShared",
    "adsConvertAdObjectRecordToPlainJS",
    "isMessageMarketingEnabledFromCampaign",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n, a, i, l, u, c, d, m, p, _, f, g, h) {
      c === void 0 && (c = !1);
      var y = o(
        "AdsPlacementAPISpecReaderUtilsShared",
      ).convertCampaignToPlacementSpec_LEGACY(
        r("adsConvertAdObjectRecordToPlainJS")(e),
      );
      return s(
        r("adsConvertAdObjectRecordToPlainJS")(e),
        t,
        n,
        a,
        i,
        l,
        y,
        u,
        c,
        d,
        m,
        p,
        _,
        f,
        g,
        h,
      );
    }
    function s(e, t, n, r, o, a, i, l, s, c, d, m, p, _, f, g) {
      var h;
      s === void 0 && (s = !1);
      var y = u(e, r, c),
        C = y.containsDCO,
        b = y.containsOffer,
        v = y.destinationType,
        S = y.directInstallDevices,
        R = y.isClickToCallAds,
        L = y.isClickToMPAds,
        E = y.isWhatsAppMarketingMessageEnabled,
        k = y.isWhatsAppMarketingMessagesActiveByDefault,
        I = y.lightWeightSplitTest,
        T = y.optimizationGoal,
        D = y.promotedObject,
        x = y.promotedObjectType,
        $ = y.targetingCustomAudience,
        P = y.targetingGeoLocations,
        N = Array.isArray(e.creative_sequence)
          ? e.creative_sequence
          : (h = e.creative_sequence) == null
            ? void 0
            : h.toArray(),
        M = (N != null ? N : []).length > 0;
      return {
        accountBlockLists: o,
        areBlocklistsLoading: s,
        buyingType: t,
        capabilities: n,
        isClickToMPAds: L,
        objective: r,
        buyWithIntegrationPartner: d,
        buyWithPrimeType: m,
        spec: i,
        objectStoreURL: a,
        promotedPageID: l,
        promotedObjectType: x,
        conversionLocations: e.conversion_locations,
        optimizationGoal: T,
        containsOffer: b,
        containsDCO: C,
        directInstallDevices: S,
        targetingGeoLocations: P,
        targetingCustomAudience: $,
        account: c,
        isClickToCallAds: R,
        destinationType: v,
        lightWeightSplitTest: I,
        smart_promotion_type: p,
        isWhatsAppMarketingMessagesActiveByDefault: k,
        special_ad_categories: _,
        is_opted_into_experiments: f,
        campaign_group_creation_source: g,
        isWhatsAppMarketingMessageEnabled: E,
        promotedObject: D,
        usingAdSequencing: M,
      };
    }
    function u(e, t, n) {
      var a,
        i,
        l,
        s,
        u,
        c,
        d = o("AdsPromotedObjectUtilsShared").getDefaultPromotedObjectType(t),
        m = o("AdsAPICampaignRecordUtilsShared").getPromotedObjectType(
          n,
          t,
          r("adsConvertAdObjectRecordToPlainJS")(e),
          d,
        ),
        p = e.optimization_goal,
        _ = !!((a = e.promoted_object) != null && a.offer_id),
        f = (i = e.is_dynamic_creative_optimization) != null ? i : void 0,
        g = e.destination_type,
        h = e.lightweight_split_test,
        y = !!((l = e.targeting) != null && l.direct_install_devices),
        C = (s = e.targeting) == null ? void 0 : s.geo_locations,
        b = !!((u = e.targeting) != null && u.custom_audiences),
        v = e.destination_type === r("AdCampaignDestination").FACEBOOK,
        S = e.destination_type === r("AdCampaignDestination").PHONE_CALL,
        R = o(
          "AdsAPICampaignRecordUtilsShared",
        ).getIsWhatsAppMarketingMessagesActiveByDefault(e),
        L = o(
          "isMessageMarketingEnabledFromCampaign",
        ).isMessageMarketingEnabledFromCampaign(e),
        E = (c = e.is_ba_skip_delayed_eligible) != null ? c : !0,
        k = e.promoted_object;
      return {
        isClickToMPAds: v,
        promotedObjectType: m,
        optimizationGoal: p,
        containsOffer: _,
        containsDCO: f,
        directInstallDevices: y,
        targetingGeoLocations: C,
        targetingCustomAudience: b,
        isClickToCallAds: S,
        destinationType: g,
        lightWeightSplitTest: h,
        isWhatsAppMarketingMessagesActiveByDefault: R,
        isBaSkipDelayedEligible: E,
        isWhatsAppMarketingMessageEnabled: L,
        promotedObject: k,
      };
    }
    ((l.buildEligibilityInformationFromCampaignSpec = e),
      (l.buildEligibilityInformationFromPlacementSpec = s),
      (l.buildEligibilityInformationFromPlacementSpecClean = u));
  },
  98,
);
