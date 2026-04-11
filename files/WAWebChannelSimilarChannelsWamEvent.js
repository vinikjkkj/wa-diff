__d(
  "WAWebChannelSimilarChannelsWamEvent",
  [
    "WAWebWamCodegenUtils",
    "WAWebWamEnumBannerStatus",
    "WAWebWamEnumBannerStatusReason",
    "WAWebWamEnumChannelEventSurface",
    "WAWebWamEnumChannelUserType",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e = o("WAWebWamCodegenUtils")).defineEvents(
        {
          ChannelSimilarChannels: [
            5202,
            {
              bannerStatus: [1, o("WAWebWamEnumBannerStatus").BANNER_STATUS],
              bannerStatusReason: [
                2,
                o("WAWebWamEnumBannerStatusReason").BANNER_STATUS_REASON,
              ],
              cid: [3, e.TYPES.STRING],
              similarChannelDisplayRank: [4, e.TYPES.INTEGER],
              similarChannelEventSurface: [
                5,
                o("WAWebWamEnumChannelEventSurface").CHANNEL_EVENT_SURFACE,
              ],
              similarChannelId: [6, e.TYPES.STRING],
              similarChannelRank: [7, e.TYPES.INTEGER],
              similarChannelUserType: [
                9,
                o("WAWebWamEnumChannelUserType").CHANNEL_USER_TYPE,
              ],
              similarChannelsSessionId: [10, e.TYPES.INTEGER],
              unifiedSessionId: [11, e.TYPES.STRING],
              updatesTabSessionId: [12, e.TYPES.INTEGER],
            },
            [1, 1, 1],
            "regular",
          ],
        },
        { ChannelSimilarChannels: [] },
      );
    l.ChannelSimilarChannelsWamEvent = s;
  },
  98,
);
