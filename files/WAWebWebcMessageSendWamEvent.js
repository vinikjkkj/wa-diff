__d(
  "WAWebWebcMessageSendWamEvent",
  ["WAWebWamCodegenUtils", "WAWebWamEnumMediaType", "WAWebWamEnumMessageType"],
  function (t, n, r, o, a, i, l) {
    var e = o("WAWebWamCodegenUtils").defineEvents(
      {
        WebcMessageSend: [
          2072,
          {
            messageIsForward: [3, o("WAWebWamCodegenUtils").TYPES.BOOLEAN],
            messageMediaType: [2, o("WAWebWamEnumMediaType").MEDIA_TYPE],
            messageSendT: [4, o("WAWebWamCodegenUtils").TYPES.TIMER],
            messageType: [1, o("WAWebWamEnumMessageType").MESSAGE_TYPE],
          },
          [1, 1, 1],
          "regular",
        ],
      },
      { WebcMessageSend: [] },
    );
    l.WebcMessageSendWamEvent = e;
  },
  98,
);
