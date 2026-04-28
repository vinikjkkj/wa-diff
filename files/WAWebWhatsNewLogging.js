__d(
  "WAWebWhatsNewLogging",
  [
    "WAWebWamEnumWebcWhatsNewActionType",
    "WAWebWamEnumWebcWhatsNewSurfaceType",
    "WAWebWebcWhatsNewImpressionWamEvent",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = new (o(
        "WAWebWebcWhatsNewImpressionWamEvent",
      ).WebcWhatsNewImpressionWamEvent)();
      ((t.webcWhatsNewSurface = o(
        "WAWebWamEnumWebcWhatsNewSurfaceType",
      ).WEBC_WHATS_NEW_SURFACE_TYPE.BANNER),
        (t.webcWhatsNewAction = o(
          "WAWebWamEnumWebcWhatsNewActionType",
        ).WEBC_WHATS_NEW_ACTION_TYPE.BANNER_DISMISS),
        (t.webcWhatsNewVariant = e),
        t.commit());
    }
    function s(e) {
      var t = new (o(
        "WAWebWebcWhatsNewImpressionWamEvent",
      ).WebcWhatsNewImpressionWamEvent)();
      ((t.webcWhatsNewSurface = o(
        "WAWebWamEnumWebcWhatsNewSurfaceType",
      ).WEBC_WHATS_NEW_SURFACE_TYPE.BANNER),
        (t.webcWhatsNewAction = o(
          "WAWebWamEnumWebcWhatsNewActionType",
        ).WEBC_WHATS_NEW_ACTION_TYPE.BANNER_CLICK),
        (t.webcWhatsNewVariant = e),
        t.commit());
    }
    function u(e) {
      var t = new (o(
        "WAWebWebcWhatsNewImpressionWamEvent",
      ).WebcWhatsNewImpressionWamEvent)();
      ((t.webcWhatsNewSurface = o(
        "WAWebWamEnumWebcWhatsNewSurfaceType",
      ).WEBC_WHATS_NEW_SURFACE_TYPE.BANNER),
        (t.webcWhatsNewAction = o(
          "WAWebWamEnumWebcWhatsNewActionType",
        ).WEBC_WHATS_NEW_ACTION_TYPE.IMPRESSION),
        (t.webcWhatsNewVariant = e),
        t.commit());
    }
    function c(e, t) {
      var n = new (o(
        "WAWebWebcWhatsNewImpressionWamEvent",
      ).WebcWhatsNewImpressionWamEvent)();
      ((n.webcWhatsNewSurface = o(
        "WAWebWamEnumWebcWhatsNewSurfaceType",
      ).WEBC_WHATS_NEW_SURFACE_TYPE.MODAL),
        (n.webcWhatsNewAction = o(
          "WAWebWamEnumWebcWhatsNewActionType",
        ).WEBC_WHATS_NEW_ACTION_TYPE.DISMISS_OVERLAY),
        (n.webcWhatsNewVariant = e),
        (n.webcWhatsNewTimeSpent = t),
        n.commit());
    }
    function d(e, t) {
      var n = new (o(
        "WAWebWebcWhatsNewImpressionWamEvent",
      ).WebcWhatsNewImpressionWamEvent)();
      ((n.webcWhatsNewSurface = o(
        "WAWebWamEnumWebcWhatsNewSurfaceType",
      ).WEBC_WHATS_NEW_SURFACE_TYPE.MODAL),
        (n.webcWhatsNewAction = o(
          "WAWebWamEnumWebcWhatsNewActionType",
        ).WEBC_WHATS_NEW_ACTION_TYPE.DISMISS_BUTTON),
        (n.webcWhatsNewVariant = e),
        (n.webcWhatsNewTimeSpent = t),
        n.commit());
    }
    function m(e) {
      var t = new (o(
        "WAWebWebcWhatsNewImpressionWamEvent",
      ).WebcWhatsNewImpressionWamEvent)();
      ((t.webcWhatsNewSurface = o(
        "WAWebWamEnumWebcWhatsNewSurfaceType",
      ).WEBC_WHATS_NEW_SURFACE_TYPE.MODAL),
        (t.webcWhatsNewAction = o(
          "WAWebWamEnumWebcWhatsNewActionType",
        ).WEBC_WHATS_NEW_ACTION_TYPE.IMPRESSION),
        (t.webcWhatsNewVariant = e),
        t.commit());
    }
    function p(e) {
      var t = new (o(
        "WAWebWebcWhatsNewImpressionWamEvent",
      ).WebcWhatsNewImpressionWamEvent)();
      ((t.webcWhatsNewSurface = o(
        "WAWebWamEnumWebcWhatsNewSurfaceType",
      ).WEBC_WHATS_NEW_SURFACE_TYPE.LOADING_CAROUSEL),
        (t.webcWhatsNewAction = o(
          "WAWebWamEnumWebcWhatsNewActionType",
        ).WEBC_WHATS_NEW_ACTION_TYPE.IMPRESSION),
        (t.webcWhatsNewVariant = e),
        t.commit());
    }
    ((l.logBannerDismiss = e),
      (l.logBannerClick = s),
      (l.logBannerImpression = u),
      (l.logModalDismissOverlay = c),
      (l.logModalDismissButton = d),
      (l.logModalImpression = m),
      (l.logCarouselImpression = p));
  },
  98,
);
