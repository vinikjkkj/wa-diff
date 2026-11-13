__d(
  "WAWebBizNativeAdsWamLogger",
  [
    "$InternalEnum",
    "WAWebLwiEntryPointImpressionWamEvent",
    "WAWebLwiScreenWamEvent",
    "WAWebManageAdsEntryPointImpressionWamEvent",
    "WAWebWamEnumLwiEntryPoint",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = n("$InternalEnum")({
      LINKED_ACCOUNTS_NULL: "suppressed_linked_accounts_null",
      LINKED_ACCOUNTS_THREW: "suppressed_linked_accounts_threw",
    });
    function s(e, t) {
      new (o(
        "WAWebLwiEntryPointImpressionWamEvent",
      ).LwiEntryPointImpressionWamEvent)({
        lwiEntryPoint: e,
        userHasLinkedFbPage: t,
      }).commit();
    }
    function u(e, t) {
      new (o(
        "WAWebLwiEntryPointImpressionWamEvent",
      ).LwiEntryPointImpressionWamEvent)({
        lwiEntryPoint: e,
        userHasLinkedFbPage: t != null ? t : void 0,
      }).commit();
    }
    function c(e) {
      new (o(
        "WAWebLwiEntryPointImpressionWamEvent",
      ).LwiEntryPointImpressionWamEvent)({
        lwiEntryPoint: o("WAWebWamEnumLwiEntryPoint").LWI_ENTRY_POINT
          .SMB_HOME_SCREEN_ICON,
        lwiExtras: e,
      }).commit();
    }
    function d(e) {
      new (o(
        "WAWebManageAdsEntryPointImpressionWamEvent",
      ).ManageAdsEntryPointImpressionWamEvent)({
        manageAdsEntryPoint: e,
      }).commit();
    }
    function m(e, t, n, r, a, i, l) {
      new (o("WAWebLwiScreenWamEvent").LwiScreenWamEvent)({
        ctwaAdAccountType: l != null ? l : void 0,
        lwiAdCampaignId: a != null ? a : void 0,
        lwiAdsIdentityType: n,
        lwiExtras: i != null ? i : void 0,
        lwiFlowId: r,
        lwiScreenAction: t,
        lwiScreenReference: e,
      }).commit();
    }
    ((l.AdCreationEntryPointSuppressionReason = e),
      (l.logAdCreationImpression = s),
      (l.logLwiEntryPointImpression = u),
      (l.logAdCreationEntryPointSuppressed = c),
      (l.logManageAdsEntryPointImpression = d),
      (l.logManageAdsScreenAction = m));
  },
  98,
);
