__d(
  "WAWebPnhRequestRevealActionWamEvent",
  [
    "WAWebWamCodegenUtils",
    "WAWebWamEnumPnhActionType",
    "WAWebWamEnumPnhChatTypeType",
    "WAWebWamEnumPnhEntryPointType",
    "WAWebWamEnumPnhMessageChatParty",
  ],
  function (t, n, r, o, a, i, l) {
    var e = o("WAWebWamCodegenUtils").defineEvents(
      {
        PnhRequestRevealAction: [
          3808,
          {
            pnhAction: [1, o("WAWebWamEnumPnhActionType").PNH_ACTION_TYPE],
            pnhChatParty: [
              2,
              o("WAWebWamEnumPnhMessageChatParty").PNH_MESSAGE_CHAT_PARTY,
            ],
            pnhChatType: [
              3,
              o("WAWebWamEnumPnhChatTypeType").PNH_CHAT_TYPE_TYPE,
            ],
            pnhEntryPoint: [
              4,
              o("WAWebWamEnumPnhEntryPointType").PNH_ENTRY_POINT_TYPE,
            ],
            threadId: [5, o("WAWebWamCodegenUtils").TYPES.STRING],
          },
          [1, 1, 1],
          "regular",
        ],
      },
      { PnhRequestRevealAction: [] },
    );
    l.PnhRequestRevealActionWamEvent = e;
  },
  98,
);
