__d(
  "WAWebDeepLinkMsgSentWamEvent",
  ["WAWebWamCodegenUtils", "WAWebWamEnumDeepLinkAction"],
  function (t, n, r, o, a, i, l) {
    var e = o("WAWebWamCodegenUtils").defineEvents(
      {
        DeepLinkMsgSent: [
          3198,
          {
            deepLinkAction: [
              1,
              o("WAWebWamEnumDeepLinkAction").DEEP_LINK_ACTION,
            ],
            deepLinkSessionId: [2, o("WAWebWamCodegenUtils").TYPES.STRING],
          },
          [1, 1, 1],
          "regular",
        ],
      },
      { DeepLinkMsgSent: [] },
    );
    l.DeepLinkMsgSentWamEvent = e;
  },
  98,
);
