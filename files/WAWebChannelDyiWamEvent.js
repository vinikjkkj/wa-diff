__d(
  "WAWebChannelDyiWamEvent",
  ["WAWebWamCodegenUtils", "WAWebWamEnumChannelDyiEventType"],
  function (t, n, r, o, a, i, l) {
    var e = o("WAWebWamCodegenUtils").defineEvents(
      {
        ChannelDyi: [
          4726,
          {
            channelDyiEventType: [
              1,
              o("WAWebWamEnumChannelDyiEventType").CHANNEL_DYI_EVENT_TYPE,
            ],
            unifiedSessionId: [2, o("WAWebWamCodegenUtils").TYPES.STRING],
            updatesTabSessionId: [3, o("WAWebWamCodegenUtils").TYPES.INTEGER],
          },
          [1, 1, 1],
          "regular",
        ],
      },
      { ChannelDyi: [] },
    );
    l.ChannelDyiWamEvent = e;
  },
  98,
);
