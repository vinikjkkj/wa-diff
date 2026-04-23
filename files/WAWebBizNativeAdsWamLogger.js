__d(
  "WAWebBizNativeAdsWamLogger",
  [
    "WAWebLwiEntryPointImpressionWamEvent",
    "WAWebLwiScreenWamEvent",
    "WAWebManageAdsEntryPointImpressionWamEvent",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = function (t, n) {
        new (o(
          "WAWebLwiEntryPointImpressionWamEvent",
        ).LwiEntryPointImpressionWamEvent)({
          lwiEntryPoint: t,
          userHasLinkedFbPage: n,
        }).commit();
      },
      s = function (t) {
        new (o(
          "WAWebManageAdsEntryPointImpressionWamEvent",
        ).ManageAdsEntryPointImpressionWamEvent)({
          manageAdsEntryPoint: t,
        }).commit();
      };
    function u(e, t, n, r, a, i) {
      new (o("WAWebLwiScreenWamEvent").LwiScreenWamEvent)({
        lwiScreenReference: e,
        lwiScreenAction: t,
        lwiAdsIdentityType: n,
        lwiFlowId: r,
        lwiAdCampaignId: a != null ? a : void 0,
        lwiExtras: i != null ? i : void 0,
      }).commit();
    }
    ((l.logAdCreationImpression = e),
      (l.logManageAdsEntryPointImpression = s),
      (l.logManageAdsScreenAction = u));
  },
  98,
);
