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
        lwiExtras: n != null ? n : void 0,
        lwiFlowId: r,
        previousLwiFlowId: a != null ? a : void 0,
        userHasLinkedFbPage: i != null ? i : void 0,
        waCampaignId: l != null ? l : void 0,
        webFlowType: s != null ? s : void 0,
      }).commit();
    }
    function s(e) {
      var t = e.activeAccountInfoType,
        n = e.hasCreatedAd,
        r = e.hasFacebookPage,
        a = e.lwiEntryPoint,
        i = e.lwiFlowId,
        l = e.sourceAdCreation,
        s = e.usesNativeAds;
      new (o(
        "WAWebCtwaAdCreationAndManagementJourneyWamEvent",
      ).CtwaAdCreationAndManagementJourneyWamEvent)({
        extraAttributes: JSON.stringify({
          active_account_info_type: t,
          event_type: "advertise_ep_routing_decision",
          has_created_ad: n,
          has_facebook_page: r,
          source_ad_creation: l,
          uses_native_ads: s,
        }),
        lwiEntryPoint: a,
        lwiFlowId: i,
        seqId: 0,
        unifiedSessionId: i,
      }).commit();
    }
    function u(e) {
      var t = e.flowID,
        n = e.scenario;
      new (o(
        "WAWebCtwaAdCreationAndManagementJourneyWamEvent",
      ).CtwaAdCreationAndManagementJourneyWamEvent)({
        extraAttributes: JSON.stringify({
          event_type: "scenario_resolved",
          scenario: n,
        }),
        lwiFlowId: t,
        seqId: 1,
        unifiedSessionId: t,
      }).commit();
    }
    ((l.logEntryTap = e),
      (l.logRoutingDecision = s),
      (l.logScenarioResolved = u),
      (l.LWI_ENTRY_POINT = o("WAWebWamEnumLwiEntryPoint").LWI_ENTRY_POINT));
  },
  98,
);
