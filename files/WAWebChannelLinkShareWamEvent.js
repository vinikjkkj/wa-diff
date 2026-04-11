__d(
  "WAWebChannelLinkShareWamEvent",
  [
    "WAWebWamCodegenUtils",
    "WAWebWamEnumChannelLinkShareDirection",
    "WAWebWamEnumChannelLinkShareEntryPoint",
    "WAWebWamEnumChannelLinkShareScreen",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e = o("WAWebWamCodegenUtils")).defineEvents(
        {
          ChannelLinkShare: [
            4728,
            {
              channelLinkShareDirection: [
                1,
                o("WAWebWamEnumChannelLinkShareDirection")
                  .CHANNEL_LINK_SHARE_DIRECTION,
              ],
              channelLinkShareEntryPoint: [
                2,
                o("WAWebWamEnumChannelLinkShareEntryPoint")
                  .CHANNEL_LINK_SHARE_ENTRY_POINT,
              ],
              channelLinkShareScreen: [
                4,
                o("WAWebWamEnumChannelLinkShareScreen")
                  .CHANNEL_LINK_SHARE_SCREEN,
              ],
              cid: [3, e.TYPES.STRING],
              unifiedSessionId: [5, e.TYPES.STRING],
              updatesTabSessionId: [6, e.TYPES.INTEGER],
            },
            [1, 1, 1],
            "regular",
          ],
        },
        { ChannelLinkShare: [] },
      );
    l.ChannelLinkShareWamEvent = s;
  },
  98,
);
