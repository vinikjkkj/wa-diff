__d(
  "WAWebShareContentUserJourneyWamEvent",
  [
    "WAWebWamCodegenUtils",
    "WAWebWamEnumShareContentUserJourneyAction",
    "WAWebWamEnumShareContentUserJourneyEntryPoint",
    "WAWebWamEnumTsSurface",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e = o("WAWebWamCodegenUtils")).defineEvents(
        {
          ShareContentUserJourney: [
            5734,
            {
              appSessionId: [1, e.TYPES.STRING],
              captionAdded: [12, e.TYPES.BOOLEAN],
              forwardUserJourneyFunnelId: [27, e.TYPES.STRING],
              hasBotImagineImages: [22, e.TYPES.BOOLEAN],
              hasCaptionPrefilled: [21, e.TYPES.BOOLEAN],
              hasFiles: [2, e.TYPES.BOOLEAN],
              hasImages: [3, e.TYPES.BOOLEAN],
              hasLinks: [4, e.TYPES.BOOLEAN],
              hasMusic: [17, e.TYPES.BOOLEAN],
              hasStatusRecipient: [25, e.TYPES.BOOLEAN],
              hasVideo: [5, e.TYPES.BOOLEAN],
              isForwardFlow: [15, e.TYPES.BOOLEAN],
              mediaCount: [6, e.TYPES.INTEGER],
              messageSelectedCount: [16, e.TYPES.INTEGER],
              numberOfRecipients: [7, e.TYPES.INTEGER],
              prefilledCaptionRemoved: [23, e.TYPES.BOOLEAN],
              shareContentUserJourneyAction: [
                8,
                o("WAWebWamEnumShareContentUserJourneyAction")
                  .SHARE_CONTENT_USER_JOURNEY_ACTION,
              ],
              shareContentUserJourneyEntryPoint: [
                24,
                o("WAWebWamEnumShareContentUserJourneyEntryPoint")
                  .SHARE_CONTENT_USER_JOURNEY_ENTRY_POINT,
              ],
              shareContentUserJourneySurfaceEntryPoint: [
                9,
                o("WAWebWamEnumTsSurface").TS_SURFACE,
              ],
              uiSurface: [10, o("WAWebWamEnumTsSurface").TS_SURFACE],
              unifiedSessionId: [14, e.TYPES.STRING],
              userJourneyEventMs: [13, e.TYPES.INTEGER],
              userJourneyFunnelId: [11, e.TYPES.STRING],
            },
            [1, 1, 1],
            "regular",
          ],
        },
        { ShareContentUserJourney: [] },
      );
    l.ShareContentUserJourneyWamEvent = s;
  },
  98,
);
