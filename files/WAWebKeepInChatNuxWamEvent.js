__d(
  "WAWebKeepInChatNuxWamEvent",
  [
    "WAWebWamCodegenUtils",
    "WAWebWamEnumKicNuxActionNameType",
    "WAWebWamEnumTriggerType",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e = o("WAWebWamCodegenUtils")).defineEvents(
        {
          KeepInChatNux: [
            3486,
            {
              chatEphemeralityDuration: [1, e.TYPES.INTEGER],
              dedupKey: [5, e.TYPES.INTEGER],
              kicNuxActionName: [
                2,
                o("WAWebWamEnumKicNuxActionNameType").KIC_NUX_ACTION_NAME_TYPE,
              ],
              threadId: [3, e.TYPES.STRING],
              trigger: [4, o("WAWebWamEnumTriggerType").TRIGGER_TYPE],
            },
            [1, 1, 1],
            "regular",
          ],
        },
        { KeepInChatNux: [] },
      );
    l.KeepInChatNuxWamEvent = s;
  },
  98,
);
