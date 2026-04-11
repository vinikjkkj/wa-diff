__d(
  "WAWebSendRevokeMessageWamEvent",
  ["WAWebWamCodegenUtils", "WAWebWamEnumMediaType", "WAWebWamEnumMessageType"],
  function (t, n, r, o, a, i, l) {
    var e = o("WAWebWamCodegenUtils").defineEvents(
      {
        SendRevokeMessage: [
          1348,
          {
            messageMediaType: [2, o("WAWebWamEnumMediaType").MEDIA_TYPE],
            messageType: [1, o("WAWebWamEnumMessageType").MESSAGE_TYPE],
            revokeSendDelay: [3, o("WAWebWamCodegenUtils").TYPES.INTEGER],
          },
          [1, 1, 1],
          "regular",
        ],
      },
      { SendRevokeMessage: [] },
    );
    l.SendRevokeMessageWamEvent = e;
  },
  98,
);
