__d(
  "WAWebGatedChatOpenedWamEvent",
  ["WAWebWamCodegenUtils", "WAWebWamEnumChatGatedReason"],
  function (t, n, r, o, a, i, l) {
    var e = o("WAWebWamCodegenUtils").defineEvents(
      {
        GatedChatOpened: [
          3150,
          {
            chatGatedReason: [
              1,
              o("WAWebWamEnumChatGatedReason").CHAT_GATED_REASON,
            ],
            selfInitiated: [2, o("WAWebWamCodegenUtils").TYPES.BOOLEAN],
          },
          [1, 1, 1],
          "regular",
        ],
      },
      { GatedChatOpened: [] },
    );
    l.GatedChatOpenedWamEvent = e;
  },
  98,
);
