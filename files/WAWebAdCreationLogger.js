__d(
  "WAWebAdCreationLogger",
  [
    "WAWebLwiScreenWamEvent",
    "WAWebUserPrefsCTWA",
    "WAWebWamEnumLwiAdsContentType",
    "WAWebWamEnumLwiAdsIdentityType",
    "WAWebWamEnumLwiScreenAction",
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
    function u(e, t) {
      new (o("WAWebLwiScreenWamEvent").LwiScreenWamEvent)({
        lwiFlowId: t,
        lwiScreenAction: e,
        lwiScreenReference: o("WAWebWamEnumLwiScreenReference")
          .LWI_SCREEN_REFERENCE.LWI_SCREEN_MEDIA_SELECTION_FLOW,
      }).commit();
    }
    function c(e) {
      var t = e.hasCatalogItemsToPromote,
        n = e.lwiFlowId;
      new (o("WAWebLwiScreenWamEvent").LwiScreenWamEvent)({
        lwiFlowId: n,
        lwiScreenAction: o("WAWebWamEnumLwiScreenAction").LWI_SCREEN_ACTION
          .LWI_ACTION_VIEW,
        lwiScreenReference: o("WAWebWamEnumLwiScreenReference")
          .LWI_SCREEN_REFERENCE.LWI_DIALOG_GALLERY_MEDIA_SOURCE_SELECTOR,
        userHasCatalogItemsToPromote: t != null ? t : void 0,
      }).commit();
    }
    function d(e) {
      var t = e.hasCatalogItemsToPromote,
        n = e.itemCount,
        r = e.lwiFlowId;
      new (o("WAWebLwiScreenWamEvent").LwiScreenWamEvent)({
        adsContentSelected: o("WAWebWamEnumLwiAdsContentType")
          .LWI_ADS_CONTENT_TYPE.LWI_ADS_CONTENT_TYPE_PRODUCT,
        itemCount: n,
        lwiFlowId: r,
        lwiScreenAction: o("WAWebWamEnumLwiScreenAction").LWI_SCREEN_ACTION
          .LWI_ACTION_PRODUCT_SELECTED,
        lwiScreenReference: o("WAWebWamEnumLwiScreenReference")
          .LWI_SCREEN_REFERENCE.LWI_SCREEN_MEDIA_SELECTION_FLOW,
        userHasCatalogItemsToPromote: t,
      }).commit();
    }
    ((l.getLwiAdsIdentityTypeFromActiveAccountInfo = e),
      (l.logLwiAdCreationNuxScreen = s),
      (l.logLwiAdCreationMediaSelectionScreen = u),
      (l.logLwiAdCreationMediaSourceChooserViewed = c),
      (l.logLwiAdCreationCatalogMediaSelected = d));
  },
  98,
);
