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
    function e(e, t, n, r, a) {
      var i = new (o("WAWebLwiScreenWamEvent").LwiScreenWamEvent)({
        lwiAdsIdentityType: void 0,
        lwiExtras: JSON.stringify({
          available_account_types: n ? ["FB", "WAA"] : ["FB"],
          has_linked_fb_page: r,
        }),
        lwiScreenAction: e,
        lwiScreenReference: o("WAWebWamEnumLwiScreenReference")
          .LWI_SCREEN_REFERENCE.LWI_NEW_MANAGE_ADS,
      });
      (a != null && (i.lwiFlowId = a), i.commit());
    }
    function s(e) {
      var t = e.accountType,
        n = e.error,
        r = e.hasLinkedFbPage,
        a = e.isWAAEligible,
        i = e.lwiFlowId,
        l = e.targetAccountType,
        s = new (o("WAWebLwiScreenWamEvent").LwiScreenWamEvent)({
          lwiAdsIdentityType:
            l === "WAA"
              ? o("WAWebWamEnumLwiAdsIdentityType").LWI_ADS_IDENTITY_TYPE
                  .WHATSAPP
              : o("WAWebWamEnumLwiAdsIdentityType").LWI_ADS_IDENTITY_TYPE.PAGE,
          lwiExtras: JSON.stringify({
            available_account_types: a ? ["FB", "WAA"] : ["FB"],
            current_account_type: t,
            error_message: n.message,
            error_name: n.name,
            has_linked_fb_page: r,
            target_account_type: l,
          }),
          lwiScreenAction: o("WAWebWamEnumLwiScreenAction").LWI_SCREEN_ACTION
            .LWI_GENERIC_ERROR_SHOWN,
          lwiScreenReference: o("WAWebWamEnumLwiScreenReference")
            .LWI_SCREEN_REFERENCE.LWI_NEW_MANAGE_ADS,
        });
      (i != null && (s.lwiFlowId = i), s.commit());
    }
    ((l.logManageAdsIdentityEvent = e), (l.logIdentityErrorEvent = s));
  },
  98,
);
