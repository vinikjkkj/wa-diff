__d(
  "WAWebChannelDiscoveryVisibilityTrackingWamEvent",
  [
    "WAWebWamCodegenUtils",
    "WAWebWamEnumChannelDirectoryPillSelected",
    "WAWebWamEnumChannelEventUnit",
    "WAWebWamEnumTsSurface",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e = o("WAWebWamCodegenUtils")).defineEvents(
        {
          ChannelDiscoveryVisibilityTracking: [
            5766,
            {
              channelCategoryIndex: [1, e.TYPES.INTEGER],
              channelCategoryName: [2, e.TYPES.STRING],
              channelDirectorySessionId: [3, e.TYPES.INTEGER],
              channelDiscoveryQueryId: [18, e.TYPES.STRING],
              channelDiscoverySearchId: [19, e.TYPES.STRING],
              channelEventUnit: [
                4,
                o("WAWebWamEnumChannelEventUnit").CHANNEL_EVENT_UNIT,
              ],
              channelIndex: [5, e.TYPES.INTEGER],
              cid: [6, e.TYPES.STRING],
              countrySelector: [7, e.TYPES.STRING],
              discoverySurface: [8, o("WAWebWamEnumTsSurface").TS_SURFACE],
              isSubImpression: [16, e.TYPES.BOOLEAN],
              pillSelected: [
                11,
                o("WAWebWamEnumChannelDirectoryPillSelected")
                  .CHANNEL_DIRECTORY_PILL_SELECTED,
              ],
              similarChannelsSessionId: [13, e.TYPES.INTEGER],
              traceIdInt: [20, e.TYPES.INTEGER],
              unifiedSessionId: [14, e.TYPES.STRING],
              updatesTabSessionId: [17, e.TYPES.INTEGER],
            },
            [1, 1, 1],
            "regular",
          ],
        },
        { ChannelDiscoveryVisibilityTracking: [] },
      );
    l.ChannelDiscoveryVisibilityTrackingWamEvent = s;
  },
  98,
);
