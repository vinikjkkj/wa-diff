__d(
  "WAWebChannelOpenFromInviteWamEvent",
  [
    "WAWebWamCodegenUtils",
    "WAWebWamEnumChannelEntryPoint",
    "WAWebWamEnumChannelUserType",
    "WAWebWamEnumTsSurface",
  ],
  function (t, n, r, o, a, i, l) {
    var e = o("WAWebWamCodegenUtils").defineEvents(
      {
        ChannelOpenFromInvite: [
          7134,
          {
            channelEntryPoint: [
              1,
              o("WAWebWamEnumChannelEntryPoint").CHANNEL_ENTRY_POINT,
            ],
            channelUserType: [
              2,
              o("WAWebWamEnumChannelUserType").CHANNEL_USER_TYPE,
            ],
            cid: [4, o("WAWebWamCodegenUtils").TYPES.STRING],
            discoverySurface: [3, o("WAWebWamEnumTsSurface").TS_SURFACE],
          },
          [1, 1, 1],
          "private",
          0,
        ],
      },
      { ChannelOpenFromInvite: [] },
    );
    l.ChannelOpenFromInviteWamEvent = e;
  },
  98,
);
