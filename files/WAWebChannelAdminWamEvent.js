__d(
  "WAWebChannelAdminWamEvent",
  [
    "WAWebWamCodegenUtils",
    "WAWebWamEnumAdminFlowType",
    "WAWebWamEnumChannelAdminAction",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e = o("WAWebWamCodegenUtils")).defineEvents(
        {
          ChannelAdmin: [
            4556,
            {
              adminFlowActionSequenceNumber: [1, e.TYPES.INTEGER],
              adminFlowType: [
                2,
                o("WAWebWamEnumAdminFlowType").ADMIN_FLOW_TYPE,
              ],
              channelAdminAction: [
                3,
                o("WAWebWamEnumChannelAdminAction").CHANNEL_ADMIN_ACTION,
              ],
              channelAdminSessionId: [4, e.TYPES.INTEGER],
              unifiedSessionId: [5, e.TYPES.STRING],
              updatesTabSessionId: [6, e.TYPES.INTEGER],
            },
            [1, 1, 1],
            "regular",
          ],
        },
        { ChannelAdmin: [] },
      );
    l.ChannelAdminWamEvent = s;
  },
  98,
);
