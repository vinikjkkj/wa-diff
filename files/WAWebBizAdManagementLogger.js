__d(
  "WAWebBizAdManagementLogger",
  [
    "WAWebLwiEntryTapWamEvent",
    "WAWebLwiScreenWamEvent",
    "WAWebWamEnumLwiAdsIdentityType",
    "WAWebWamEnumLwiEntryPoint",
    "WAWebWamEnumLwiScreenAction",
    "WAWebWamEnumLwiScreenReference",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n) {
      var r = new (o("WAWebLwiEntryTapWamEvent").LwiEntryTapWamEvent)({
        lwiEntryPoint: e,
        lwiFlowId: t,
      });
      (n != null && (r.previousLwiFlowId = n), r.commit());
    }
    function s(e, t, n) {
      var r = new (o("WAWebLwiEntryTapWamEvent").LwiEntryTapWamEvent)({
        lwiEntryPoint: e,
        lwiFlowId: t,
      });
      ((r.previousLwiFlowId = n), r.commit());
    }
    function u(e, t, n, r, a, i) {
      var l = new (o("WAWebLwiScreenWamEvent").LwiScreenWamEvent)({
        lwiScreenReference: e,
        lwiScreenAction: t,
        lwiAdsIdentityType: n,
        lwiFlowId: r,
      });
      (a != null && (l.lwiAdCampaignId = a),
        i != null && (l.lwiExtras = i),
        l.commit());
    }
    ((l.logManageAdsEntryTap = e),
      (l.logAdCreationEntryTap = s),
      (l.logManageAdsScreenAction = u),
      (l.LWI_ADS_IDENTITY_TYPE = o(
        "WAWebWamEnumLwiAdsIdentityType",
      ).LWI_ADS_IDENTITY_TYPE),
      (l.LWI_ENTRY_POINT = o("WAWebWamEnumLwiEntryPoint").LWI_ENTRY_POINT),
      (l.LWI_SCREEN_ACTION = o(
        "WAWebWamEnumLwiScreenAction",
      ).LWI_SCREEN_ACTION),
      (l.LWI_SCREEN_REFERENCE = o(
        "WAWebWamEnumLwiScreenReference",
      ).LWI_SCREEN_REFERENCE));
  },
  98,
);
