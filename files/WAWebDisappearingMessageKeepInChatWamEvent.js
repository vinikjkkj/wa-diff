__d(
  "WAWebDisappearingMessageKeepInChatWamEvent",
  [
    "WAWebWamCodegenUtils",
    "WAWebWamEnumKicActionNameType",
    "WAWebWamEnumKicActorType",
    "WAWebWamEnumKicEntryPointType",
    "WAWebWamEnumMediaType",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e = o("WAWebWamCodegenUtils")).defineEvents(
        {
          DisappearingMessageKeepInChat: [
            3482,
            {
              canEditDmSettings: [16, e.TYPES.BOOLEAN],
              chatEphemeralityDuration: [1, e.TYPES.INTEGER],
              isAGroup: [2, e.TYPES.BOOLEAN],
              isAdmin: [3, e.TYPES.BOOLEAN],
              keptCount: [15, e.TYPES.INTEGER],
              keptDelta: [4, e.TYPES.INTEGER],
              kicActionName: [
                5,
                o("WAWebWamEnumKicActionNameType").KIC_ACTION_NAME_TYPE,
              ],
              kicActor: [6, o("WAWebWamEnumKicActorType").KIC_ACTOR_TYPE],
              kicEntryPoint: [
                7,
                o("WAWebWamEnumKicEntryPointType").KIC_ENTRY_POINT_TYPE,
              ],
              mediaType: [8, o("WAWebWamEnumMediaType").MEDIA_TYPE],
              messageExpiredOnUnkeep: [9, e.TYPES.BOOLEAN],
              messageExpiryTimer: [10, e.TYPES.INTEGER],
              messagesInFolder: [11, e.TYPES.INTEGER],
              messagesSelected: [12, e.TYPES.INTEGER],
              threadId: [13, e.TYPES.STRING],
            },
            [1, 1, 1],
            "regular",
          ],
        },
        { DisappearingMessageKeepInChat: [] },
      );
    l.DisappearingMessageKeepInChatWamEvent = s;
  },
  98,
);
