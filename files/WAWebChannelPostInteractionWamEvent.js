__d(
  "WAWebChannelPostInteractionWamEvent",
  [
    "WAWebWamCodegenUtils",
    "WAWebWamEnumChannelEntryPoint",
    "WAWebWamEnumChannelPostInteractionType",
    "WAWebWamEnumChannelPostLinkPlacement",
    "WAWebWamEnumChannelUserType",
    "WAWebWamEnumTsSurface",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e = o("WAWebWamCodegenUtils")).defineEvents(
        {
          ChannelPostInteraction: [
            8458,
            {
              channelDirectorySessionId: [1, e.TYPES.INTEGER],
              channelEntryPoint: [
                2,
                o("WAWebWamEnumChannelEntryPoint").CHANNEL_ENTRY_POINT,
              ],
              channelPostInteractionType: [
                3,
                o("WAWebWamEnumChannelPostInteractionType")
                  .CHANNEL_POST_INTERACTION_TYPE,
              ],
              channelPostLinkPlacement: [
                10,
                o("WAWebWamEnumChannelPostLinkPlacement")
                  .CHANNEL_POST_LINK_PLACEMENT,
              ],
              channelUserType: [
                4,
                o("WAWebWamEnumChannelUserType").CHANNEL_USER_TYPE,
              ],
              cid: [5, e.TYPES.STRING],
              dedupKey: [9, e.TYPES.INTEGER],
              discoverySurface: [6, o("WAWebWamEnumTsSurface").TS_SURFACE],
              postId: [7, e.TYPES.STRING],
              updatesTabSessionId: [8, e.TYPES.INTEGER],
            },
            [1, 1, 1],
            "regular",
          ],
        },
        { ChannelPostInteraction: [] },
      );
    l.ChannelPostInteractionWamEvent = s;
  },
  98,
);
