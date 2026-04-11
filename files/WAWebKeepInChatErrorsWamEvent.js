__d(
  "WAWebKeepInChatErrorsWamEvent",
  [
    "WAWebWamCodegenUtils",
    "WAWebWamEnumKicActionType",
    "WAWebWamEnumKicErrorCodeType",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e = o("WAWebWamCodegenUtils")).defineEvents(
        {
          KeepInChatErrors: [
            3698,
            {
              canEditDmSettings: [7, e.TYPES.BOOLEAN],
              isAGroup: [2, e.TYPES.BOOLEAN],
              isAdmin: [3, e.TYPES.BOOLEAN],
              kicAction: [4, o("WAWebWamEnumKicActionType").KIC_ACTION_TYPE],
              kicErrorCode: [
                5,
                o("WAWebWamEnumKicErrorCodeType").KIC_ERROR_CODE_TYPE,
              ],
              kicMessageEphemeralityDuration: [6, e.TYPES.INTEGER],
            },
            [1, 1, 1],
            "regular",
          ],
        },
        { KeepInChatErrors: [] },
      );
    l.KeepInChatErrorsWamEvent = s;
  },
  98,
);
