__d(
  "WAWebChannelDyiWamEvent",
  ["WAWebWamCodegenUtils", "WAWebWamEnumChannelDyiEventType"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e = o("WAWebWamCodegenUtils")).defineEvents(
        {
          ChannelDyi: [
            4726,
            {
              channelDyiEventType: [
                1,
                o("WAWebWamEnumChannelDyiEventType").CHANNEL_DYI_EVENT_TYPE,
              ],
              dedupKey: [4, e.TYPES.INTEGER],
              unifiedSessionId: [2, e.TYPES.STRING],
              updatesTabSessionId: [3, e.TYPES.INTEGER],
            },
            [1, 1, 1],
            "regular",
          ],
        },
        { ChannelDyi: [] },
      );
    l.ChannelDyiWamEvent = s;
  },
  98,
);
