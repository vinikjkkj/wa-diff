__d(
  "WAWebSpoilerRevealWamEvent",
  ["WAWebWamCodegenUtils", "WAWebWamEnumMessageChatType"],
  function (t, n, r, o, a, i, l) {
    var e = o("WAWebWamCodegenUtils").defineEvents(
      {
        SpoilerReveal: [
          8208,
          {
            chatType: [1, o("WAWebWamEnumMessageChatType").MESSAGE_CHAT_TYPE],
            dedupKey: [3, o("WAWebWamCodegenUtils").TYPES.INTEGER],
            isOwnMessage: [2, o("WAWebWamCodegenUtils").TYPES.BOOLEAN],
          },
          [1, 1, 1],
          "regular",
        ],
      },
      { SpoilerReveal: [] },
    );
    l.SpoilerRevealWamEvent = e;
  },
  98,
);
