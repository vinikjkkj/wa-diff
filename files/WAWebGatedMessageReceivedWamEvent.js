__d(
  "WAWebGatedMessageReceivedWamEvent",
  ["WAWebWamCodegenUtils", "WAWebWamEnumChatGatedReason"],
  function (t, n, r, o, a, i, l) {
    var e = o("WAWebWamCodegenUtils").defineEvents(
      {
        GatedMessageReceived: [
          3152,
          {
            chatGatedReason: [
              1,
              o("WAWebWamEnumChatGatedReason").CHAT_GATED_REASON,
            ],
          },
          [1, 1, 1],
          "regular",
        ],
      },
      { GatedMessageReceived: [] },
    );
    l.GatedMessageReceivedWamEvent = e;
  },
  98,
);
