__d(
  "WAWebWebcMessageSendWamEvent",
  ["WAWebWamCodegenUtils", "WAWebWamEnumMediaType", "WAWebWamEnumMessageType"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e = o("WAWebWamCodegenUtils")).defineEvents(
        {
          WebcMessageSend: [
            2072,
            {
              dedupKey: [5, e.TYPES.INTEGER],
              messageIsForward: [3, e.TYPES.BOOLEAN],
              messageMediaType: [2, o("WAWebWamEnumMediaType").MEDIA_TYPE],
              messageSendT: [4, e.TYPES.TIMER],
              messageType: [1, o("WAWebWamEnumMessageType").MESSAGE_TYPE],
            },
            [1, 1, 1],
            "regular",
          ],
        },
        { WebcMessageSend: [] },
      );
    l.WebcMessageSendWamEvent = s;
  },
  98,
);
