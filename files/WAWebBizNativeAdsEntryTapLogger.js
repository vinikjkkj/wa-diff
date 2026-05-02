__d(
  "WAWebBizNativeAdsEntryTapLogger",
  [
    "WAWebCtwaAdCreationAndManagementJourneyWamEvent",
    "WAWebLwiEntryTapWamEvent",
    "WAWebWamEnumLwiEntryPoint",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = e.lwiEntryPoint,
        n = e.lwiExtras,
        r = e.lwiFlowId,
        a = e.previousLwiFlowId,
        i = e.userHasLinkedFbPage,
        l = e.waCampaignId,
        s = e.webFlowType;
      new (o("WAWebLwiEntryTapWamEvent").LwiEntryTapWamEvent)({
        lwiEntryPoint: t,
        lwiFlowId: r,
        lwiExtras: n != null ? n : void 0,
        previousLwiFlowId: a != null ? a : void 0,
        userHasLinkedFbPage: i != null ? i : void 0,
        waCampaignId: l != null ? l : void 0,
        webFlowType: s != null ? s : void 0,
      }).commit();
    }
    function s(e) {
      var t = e.activeAccountInfoType,
        n = e.eligibilityFetchAttempted,
        r = e.hasAdvertisedViaLWI,
        a = e.hasCreatedAd,
        i = e.hasEligibilityData,
        l = e.hasFacebookPage,
        s = e.isPageAssetLinked,
        u = e.isPagelessAssetLinked,
        c = e.lifetimeNativeCTWAAdvertiser,
        d = e.lwiEntryPoint,
        m = e.lwiFlowId,
        p = e.sourceAdCreation,
        _ = e.usesNativeAds;
      new (o(
        "WAWebCtwaAdCreationAndManagementJourneyWamEvent",
      ).CtwaAdCreationAndManagementJourneyWamEvent)({
        lwiEntryPoint: d,
        lwiFlowId: m,
        seqId: 0,
        unifiedSessionId: m,
        extraAttributes: JSON.stringify({
          event_type: "advertise_ep_routing_decision",
          uses_native_ads: _,
          lifetime_native_ctwa_advertiser: c,
          is_page_asset_linked: s,
          is_pageless_asset_linked: u,
          has_advertised_via_lwi: r,
          eligibility_fetch_attempted: n,
          has_eligibility_data: i,
          has_facebook_page: l,
          active_account_info_type: t,
          has_created_ad: a,
          source_ad_creation: p,
        }),
      }).commit();
    }
    ((l.logEntryTap = e),
      (l.logRoutingDecision = s),
      (l.LWI_ENTRY_POINT = o("WAWebWamEnumLwiEntryPoint").LWI_ENTRY_POINT));
  },
  98,
);
