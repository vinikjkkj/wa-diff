__d(
  "WAWebChannelProducerInsightsNavigationWamEvent",
  [
    "WAWebWamCodegenUtils",
    "WAWebWamEnumActionTarget",
    "WAWebWamEnumChannelProducerInsightsActionType",
    "WAWebWamEnumChannelProducerInsightsEntryPoint",
    "WAWebWamEnumChannelProducerInsightsSurface",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e = o("WAWebWamCodegenUtils")).defineEvents(
        {
          ChannelProducerInsightsNavigation: [
            5626,
            {
              channelProducerInsightsActionTarget: [
                1,
                o("WAWebWamEnumActionTarget").ACTION_TARGET,
              ],
              channelProducerInsightsActionType: [
                2,
                o("WAWebWamEnumChannelProducerInsightsActionType")
                  .CHANNEL_PRODUCER_INSIGHTS_ACTION_TYPE,
              ],
              channelProducerInsightsEntryPoint: [
                3,
                o("WAWebWamEnumChannelProducerInsightsEntryPoint")
                  .CHANNEL_PRODUCER_INSIGHTS_ENTRY_POINT,
              ],
              channelProducerInsightsSequenceNumber: [4, e.TYPES.INTEGER],
              channelProducerInsightsSurface: [
                5,
                o("WAWebWamEnumChannelProducerInsightsSurface")
                  .CHANNEL_PRODUCER_INSIGHTS_SURFACE,
              ],
              cid: [6, e.TYPES.STRING],
              producerInsightsSessionId: [7, e.TYPES.INTEGER],
              unifiedSessionId: [8, e.TYPES.STRING],
              updatesTabSessionId: [9, e.TYPES.INTEGER],
            },
            [1, 1, 1],
            "regular",
          ],
        },
        { ChannelProducerInsightsNavigation: [] },
      );
    l.ChannelProducerInsightsNavigationWamEvent = s;
  },
  98,
);
