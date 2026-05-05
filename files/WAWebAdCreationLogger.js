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
    function s(e, t, n) {
      new (o("WAWebLwiScreenWamEvent").LwiScreenWamEvent)({
        lwiAdsIdentityType: t,
        lwiEventSequenceNumber:
          o("WAWebUserPrefsCTWA").getAndIncrementAdCreationSequenceNumber(),
        lwiFlowId: o("WAWebUserPrefsCTWA").getAdCreationFlowId(),
        lwiIsFbAppInstalled: !1,
        lwiScreenAction: e,
        lwiScreenReference: o("WAWebWamEnumLwiScreenReference")
          .LWI_SCREEN_REFERENCE.LWI_SCREEN_NUX_EDUCATION,
        userHasLinkedFbPage: n,
      }).commit();
    }
    ((l.getLwiAdsIdentityTypeFromActiveAccountInfo = e),
      (l.logLwiAdCreationNuxScreen = s));
  },
  98,
);
