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
    var u = !1;
    function c(e) {
      if (!u) {
        u = !0;
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
    }
    function d() {
      u = !1;
    }
    function m(e, t) {
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
    function p(e, t) {
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
    function _(e) {
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
    function f(e, t) {
      var n = new (o(
        "WAWebWebcWhatsNewImpressionWamEvent",
      ).WebcWhatsNewImpressionWamEvent)();
      ((n.webcWhatsNewSurface = o(
        "WAWebWamEnumWebcWhatsNewSurfaceType",
      ).WEBC_WHATS_NEW_SURFACE_TYPE.LOADING_CAROUSEL),
        (n.webcWhatsNewAction = o(
          "WAWebWamEnumWebcWhatsNewActionType",
        ).WEBC_WHATS_NEW_ACTION_TYPE.IMPRESSION),
        (n.webcWhatsNewVariant = e),
        (n.webcWhatsNewTimeSpent = t),
        n.commit());
    }
    ((l.logBannerDismiss = e),
      (l.logBannerClick = s),
      (l.logBannerImpression = c),
      (l.resetBannerImpressionGuardForTesting = d),
      (l.logModalDismissOverlay = m),
      (l.logModalDismissButton = p),
      (l.logModalImpression = _),
      (l.logCarouselImpression = f));
  },
  98,
);
