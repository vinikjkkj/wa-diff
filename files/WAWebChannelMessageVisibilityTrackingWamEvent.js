__d(
  "WAWebChannelMessageVisibilityTrackingWamEvent",
  ["WAWebWamCodegenUtils", "WAWebWamEnumChannelUserType"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e = o("WAWebWamCodegenUtils")).defineEvents(
        {
          ChannelMessageVisibilityTracking: [
            5998,
            {
              channelUserType: [
                10,
                o("WAWebWamEnumChannelUserType").CHANNEL_USER_TYPE,
              ],
              cid: [1, e.TYPES.STRING],
              containsMusic: [9, e.TYPES.BOOLEAN],
              isStarredPost: [8, e.TYPES.BOOLEAN],
              isVpvImpression: [7, e.TYPES.BOOLEAN],
              postId: [4, e.TYPES.STRING],
              traceIdInt: [11, e.TYPES.INTEGER],
              unifiedSessionId: [6, e.TYPES.STRING],
            },
            [1, 1, 1],
            "regular",
          ],
        },
        { ChannelMessageVisibilityTracking: [] },
      );
    l.ChannelMessageVisibilityTrackingWamEvent = s;
  },
  98,
);
