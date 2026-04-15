__d(
  "WAWebBizNativeAdsIdentityLogger",
  [
    "WAWebLwiScreenWamEvent",
    "WAWebWamEnumLwiAdsIdentityType",
    "WAWebWamEnumLwiScreenAction",
    "WAWebWamEnumLwiScreenReference",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      new (o("WAWebLwiScreenWamEvent").LwiScreenWamEvent)({
        lwiFlowId: t,
        lwiIsFbAppInstalled: !1,
        lwiScreenAction: e,
        lwiScreenReference: o("WAWebWamEnumLwiScreenReference")
          .LWI_SCREEN_REFERENCE.LWI_SCREEN_NUX_EDUCATION,
      }).commit();
    }
    function s(e, t, n, r, a) {
      var i = new (o("WAWebLwiScreenWamEvent").LwiScreenWamEvent)({
        lwiAdsIdentityType: void 0,
        lwiScreenAction: e,
        lwiScreenReference: o("WAWebWamEnumLwiScreenReference")
          .LWI_SCREEN_REFERENCE.LWI_NEW_MANAGE_ADS,
        lwiExtras: JSON.stringify({
          available_account_types: n ? ["FB", "WAA"] : ["FB"],
          has_linked_fb_page: r,
        }),
      });
      (a != null && (i.lwiFlowId = a), i.commit());
    }
    function u(e, t, n, r, a, i) {
      var l = new (o("WAWebLwiScreenWamEvent").LwiScreenWamEvent)({
        lwiAdsIdentityType:
          t === "WAA"
            ? o("WAWebWamEnumLwiAdsIdentityType").LWI_ADS_IDENTITY_TYPE.WHATSAPP
            : o("WAWebWamEnumLwiAdsIdentityType").LWI_ADS_IDENTITY_TYPE.PAGE,
        lwiScreenAction: o("WAWebWamEnumLwiScreenAction").LWI_SCREEN_ACTION
          .LWI_GENERIC_ERROR_SHOWN,
        lwiScreenReference: o("WAWebWamEnumLwiScreenReference")
          .LWI_SCREEN_REFERENCE.LWI_NEW_MANAGE_ADS,
        lwiExtras: JSON.stringify({
          current_account_type: e,
          target_account_type: t,
          available_account_types: n ? ["FB", "WAA"] : ["FB"],
          has_linked_fb_page: r,
          error_message: a.message,
          error_name: a.name,
        }),
      });
      (i != null && (l.lwiFlowId = i), l.commit());
    }
    ((l.logNuxScreenEvent = e),
      (l.logManageAdsIdentityEvent = s),
      (l.logIdentityErrorEvent = u));
  },
  98,
);
