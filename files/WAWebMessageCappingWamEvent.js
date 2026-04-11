__d(
  "WAWebMessageCappingWamEvent",
  [
    "WAWebWamCodegenUtils",
    "WAWebWamEnumMessageCappingActionType",
    "WAWebWamEnumSurfaceType",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e = o("WAWebWamCodegenUtils")).defineEvents(
        {
          MessageCapping: [
            6854,
            {
              extraAttributes: [2, e.TYPES.STRING],
              messageCappingActionType: [
                6,
                o("WAWebWamEnumMessageCappingActionType")
                  .MESSAGE_CAPPING_ACTION_TYPE,
              ],
              messageCappingEntryPoint: [
                9,
                o("WAWebWamEnumSurfaceType").SURFACE_TYPE,
              ],
              messageCappingSequence: [7, e.TYPES.INTEGER],
              messageCappingSession: [8, e.TYPES.STRING],
              surface: [4, o("WAWebWamEnumSurfaceType").SURFACE_TYPE],
              userActionTarget: [5, e.TYPES.STRING],
            },
            [1, 1, 1],
            "regular",
          ],
        },
        { MessageCapping: [] },
      );
    l.MessageCappingWamEvent = s;
  },
  98,
);
