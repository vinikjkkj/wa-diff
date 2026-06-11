__d(
  "WAWebWhatsNewLogging",
  [
    "WAWebWamEnumWebcWhatsNewActionType",
    "WAWebWamEnumWebcWhatsNewSurfaceType",
    "WAWebWebcWhatsNewImpressionWamEvent",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
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
    function s(e, t) {
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
    function u(e) {
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
    ((l.logModalDismissOverlay = e),
      (l.logModalDismissButton = s),
      (l.logModalImpression = u));
  },
  98,
);
