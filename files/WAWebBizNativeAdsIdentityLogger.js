__d(
  "WAWebBizNativeAdsIdentityLogger",
  ["WAWebLwiScreenWamEvent", "WAWebWamEnumLwiScreenReference"],
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
    ((l.logNuxScreenEvent = e), (l.logManageAdsIdentityEvent = s));
  },
  98,
);
