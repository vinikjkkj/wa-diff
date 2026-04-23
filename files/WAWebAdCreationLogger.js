__d(
  "WAWebAdCreationLogger",
  [
    "WAWebLwiScreenWamEvent",
    "WAWebUserPrefsCTWA",
    "WAWebWamEnumLwiAdsIdentityType",
    "WAWebWamEnumLwiScreenReference",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return e === "not-linked"
        ? o("WAWebWamEnumLwiAdsIdentityType").LWI_ADS_IDENTITY_TYPE.PAGE
        : e.type === "whatsapp"
          ? o("WAWebWamEnumLwiAdsIdentityType").LWI_ADS_IDENTITY_TYPE.WHATSAPP
          : (e.type,
            o("WAWebWamEnumLwiAdsIdentityType").LWI_ADS_IDENTITY_TYPE.PAGE);
    }
    var s = function (t, n, r) {
      new (o("WAWebLwiScreenWamEvent").LwiScreenWamEvent)({
        lwiAdsIdentityType: n,
        lwiEventSequenceNumber:
          o("WAWebUserPrefsCTWA").getAndIncrementAdCreationSequenceNumber(),
        lwiFlowId: o("WAWebUserPrefsCTWA").getAdCreationFlowId(),
        lwiIsFbAppInstalled: !1,
        lwiScreenAction: t,
        lwiScreenReference: o("WAWebWamEnumLwiScreenReference")
          .LWI_SCREEN_REFERENCE.LWI_SCREEN_NUX_EDUCATION,
        userHasLinkedFbPage: r,
      }).commit();
    };
    function u(t, n) {
      var r = t.hasFacebookPage,
        a = e(t);
      new (o("WAWebLwiScreenWamEvent").LwiScreenWamEvent)({
        lwiAdsIdentityType: a,
        lwiScreenReference: o("WAWebWamEnumLwiScreenReference")
          .LWI_SCREEN_REFERENCE.LWI_MANAGE_ADS_TAB,
        lwiScreenAction: n,
        userHasLinkedFbPage: r,
      }).commit();
    }
    ((l.getLwiAdsIdentityTypeFromActiveAccountInfo = e),
      (l.logAdCreationNuxScreen = s),
      (l.logLegacyManageAdsScreenEvent = u));
  },
  98,
);
