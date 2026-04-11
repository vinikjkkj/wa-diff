__d(
  "WAWebKeepInChatPerfWamEvent",
  [
    "WAWebWamCodegenUtils",
    "WAWebWamEnumKicErrorCodeType",
    "WAWebWamEnumKicRequestTypeType",
    "WAWebWamEnumResponseType",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e = o("WAWebWamCodegenUtils")).defineEvents(
        {
          KeepInChatPerf: [
            3488,
            {
              chatEphemeralityDuration: [1, e.TYPES.INTEGER],
              kicErrorCode: [
                2,
                o("WAWebWamEnumKicErrorCodeType").KIC_ERROR_CODE_TYPE,
              ],
              kicMessageEphemeralityDuration: [3, e.TYPES.INTEGER],
              kicRequestType: [
                4,
                o("WAWebWamEnumKicRequestTypeType").KIC_REQUEST_TYPE_TYPE,
              ],
              requestSendTime: [5, e.TYPES.INTEGER],
              response: [6, o("WAWebWamEnumResponseType").RESPONSE_TYPE],
              threadId: [7, e.TYPES.STRING],
            },
            [1, 1, 1],
            "regular",
          ],
        },
        { KeepInChatPerf: [] },
      );
    l.KeepInChatPerfWamEvent = s;
  },
  98,
);
