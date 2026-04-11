__d(
  "WAWebKeepInChatNuxWamEvent",
  [
    "WAWebWamCodegenUtils",
    "WAWebWamEnumKicNuxActionNameType",
    "WAWebWamEnumTriggerType",
  ],
  function (t, n, r, o, a, i, l) {
    var e = o("WAWebWamCodegenUtils").defineEvents(
      {
        KeepInChatNux: [
          3486,
          {
            chatEphemeralityDuration: [
              1,
              o("WAWebWamCodegenUtils").TYPES.INTEGER,
            ],
            kicNuxActionName: [
              2,
              o("WAWebWamEnumKicNuxActionNameType").KIC_NUX_ACTION_NAME_TYPE,
            ],
            threadId: [3, o("WAWebWamCodegenUtils").TYPES.STRING],
            trigger: [4, o("WAWebWamEnumTriggerType").TRIGGER_TYPE],
          },
          [1, 1, 1],
          "regular",
        ],
      },
      { KeepInChatNux: [] },
    );
    l.KeepInChatNuxWamEvent = e;
  },
  98,
);
