__d(
  "WAWebRevokeMessageSendWamEvent",
  ["WAWebWamCodegenUtils", "WAWebWamEnumMessageType", "WAWebWamEnumRevokeType"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e = o("WAWebWamCodegenUtils")).defineEvents(
        {
          RevokeMessageSend: [
            3656,
            {
              messageSendResultIsTerminal: [1, e.TYPES.BOOLEAN],
              messageType: [2, o("WAWebWamEnumMessageType").MESSAGE_TYPE],
              resendCount: [3, e.TYPES.INTEGER],
              retryCount: [4, e.TYPES.INTEGER],
              revokeDuration: [5, e.TYPES.INTEGER],
              revokeType: [6, o("WAWebWamEnumRevokeType").REVOKE_TYPE],
            },
            [1, 1, 1],
            "regular",
          ],
        },
        { RevokeMessageSend: [] },
      );
    l.RevokeMessageSendWamEvent = s;
  },
  98,
);
