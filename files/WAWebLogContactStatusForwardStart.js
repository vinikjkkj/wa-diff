__d(
  "WAWebLogContactStatusForwardStart",
  [
    "WAWebShareContentUserJourneyLogger",
    "WAWebStatusGatingUtils",
    "WAWebWamEnumShareContentUserJourneyEntryPoint",
    "WAWebWamEnumTsSurface",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      o("WAWebStatusGatingUtils").isStatusReshareViewerFlowEnabled() &&
        o(
          "WAWebShareContentUserJourneyLogger",
        ).ShareContentUserJourneyLogger.funnelStart({
          entryPoint: o("WAWebWamEnumShareContentUserJourneyEntryPoint")
            .SHARE_CONTENT_USER_JOURNEY_ENTRY_POINT.CONTEXT_MENU,
          forwardUserJourneyFunnelId: null,
          selectedMessages: [e],
          uiSurface: o("WAWebWamEnumTsSurface").TS_SURFACE.STATUS_VIEW,
        });
    }
    l.logContactStatusForwardStart = e;
  },
  98,
);
