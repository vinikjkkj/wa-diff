__d(
  "WAWebChannelOpenWamEvent",
  [
    "WAWebWamCodegenUtils",
    "WAWebWamEnumChannelEntryPoint",
    "WAWebWamEnumChannelEntryPointMetadata",
    "WAWebWamEnumChannelUserType",
    "WAWebWamEnumDeeplinkSource",
    "WAWebWamEnumTsSurface",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e = o("WAWebWamCodegenUtils")).defineEvents(
        {
          ChannelOpen: [
            4316,
            {
              channelDirectorySessionId: [8, e.TYPES.INTEGER],
              channelDiscoveryQueryId: [18, e.TYPES.STRING],
              channelDiscoverySearchId: [19, e.TYPES.STRING],
              channelEntryPoint: [
                1,
                o("WAWebWamEnumChannelEntryPoint").CHANNEL_ENTRY_POINT,
              ],
              channelEntryPointMetadata: [
                9,
                o("WAWebWamEnumChannelEntryPointMetadata")
                  .CHANNEL_ENTRY_POINT_METADATA,
              ],
              channelSessionId: [3, e.TYPES.INTEGER],
              channelUserType: [
                4,
                o("WAWebWamEnumChannelUserType").CHANNEL_USER_TYPE,
              ],
              cid: [6, e.TYPES.STRING],
              deeplinkSource: [
                20,
                o("WAWebWamEnumDeeplinkSource").DEEPLINK_SOURCE,
              ],
              discoverySurface: [15, o("WAWebWamEnumTsSurface").TS_SURFACE],
              entryPointMetadata: [12, e.TYPES.STRING],
              hasNetworkConnection: [7, e.TYPES.BOOLEAN],
              isPremium: [14, e.TYPES.BOOLEAN],
              similarChannelsSessionId: [11, e.TYPES.INTEGER],
              traceIdInt: [21, e.TYPES.INTEGER],
              unifiedSessionId: [16, e.TYPES.STRING],
              unreadMessages: [5, e.TYPES.INTEGER],
              unreadPremiumMessages: [13, e.TYPES.INTEGER],
              updatesTabSessionId: [17, e.TYPES.INTEGER],
            },
            [1, 1, 1],
            "regular",
          ],
        },
        { ChannelOpen: [] },
      );
    l.ChannelOpenWamEvent = s;
  },
  98,
);
