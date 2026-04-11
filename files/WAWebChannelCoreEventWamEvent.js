__d(
  "WAWebChannelCoreEventWamEvent",
  [
    "WAWebWamCodegenUtils",
    "WAWebWamEnumChannelEntryPoint",
    "WAWebWamEnumChannelEntryPointApp",
    "WAWebWamEnumChannelEntryPointMetadata",
    "WAWebWamEnumChannelEventSurface",
    "WAWebWamEnumChannelEventType",
    "WAWebWamEnumChannelEventUnit",
    "WAWebWamEnumTsSurface",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e = o("WAWebWamCodegenUtils")).defineEvents(
        {
          ChannelCoreEvent: [
            4692,
            {
              channelCoreEventSequenceNumber: [8, e.TYPES.INTEGER],
              channelCoreEventType: [
                1,
                o("WAWebWamEnumChannelEventType").CHANNEL_EVENT_TYPE,
              ],
              channelDirectorySessionId: [7, e.TYPES.INTEGER],
              channelDiscoveryQueryId: [15, e.TYPES.STRING],
              channelDiscoverySearchId: [16, e.TYPES.STRING],
              channelEntryPoint: [
                2,
                o("WAWebWamEnumChannelEntryPoint").CHANNEL_ENTRY_POINT,
              ],
              channelEntryPointApp: [
                3,
                o("WAWebWamEnumChannelEntryPointApp").CHANNEL_ENTRY_POINT_APP,
              ],
              channelEntryPointMetadata: [
                10,
                o("WAWebWamEnumChannelEntryPointMetadata")
                  .CHANNEL_ENTRY_POINT_METADATA,
              ],
              channelEventUnit: [
                12,
                o("WAWebWamEnumChannelEventUnit").CHANNEL_EVENT_UNIT,
              ],
              channelRequestMetadata: [19, e.TYPES.STRING],
              cid: [4, e.TYPES.STRING],
              directoryChannelIndex: [9, e.TYPES.INTEGER],
              discoverySurface: [14, o("WAWebWamEnumTsSurface").TS_SURFACE],
              entryPointMetadata: [5, e.TYPES.STRING],
              eventSurface: [
                6,
                o("WAWebWamEnumChannelEventSurface").CHANNEL_EVENT_SURFACE,
              ],
              similarChannelsSessionId: [13, e.TYPES.INTEGER],
              traceIdInt: [20, e.TYPES.INTEGER],
              unifiedSessionId: [17, e.TYPES.STRING],
              updatesTabSessionId: [18, e.TYPES.INTEGER],
            },
            [1, 1, 1],
            "regular",
          ],
        },
        { ChannelCoreEvent: [] },
      );
    l.ChannelCoreEventWamEvent = s;
  },
  98,
);
