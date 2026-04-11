__d(
  "WAWebSenderKeyExpiredWamEvent",
  [
    "WAWebWamCodegenUtils",
    "WAWebWamEnumExpiryReason",
    "WAWebWamEnumMessageChatType",
    "WAWebWamEnumSizeBucket",
  ],
  function (t, n, r, o, a, i, l) {
    var e = o("WAWebWamCodegenUtils").defineEvents(
      {
        SenderKeyExpired: [
          3130,
          {
            chatType: [1, o("WAWebWamEnumMessageChatType").MESSAGE_CHAT_TYPE],
            deviceSizeBucket: [2, o("WAWebWamEnumSizeBucket").SIZE_BUCKET],
            expiryReason: [3, o("WAWebWamEnumExpiryReason").EXPIRY_REASON],
          },
          [1, 1, 1],
          "regular",
        ],
      },
      { SenderKeyExpired: [] },
    );
    l.SenderKeyExpiredWamEvent = e;
  },
  98,
);
