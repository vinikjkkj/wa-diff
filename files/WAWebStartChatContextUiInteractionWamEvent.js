__d(
  "WAWebStartChatContextUiInteractionWamEvent",
  [
    "WAWebWamCodegenUtils",
    "WAWebWamEnumStartChatContextEntryPoint",
    "WAWebWamEnumStartChatContextUiAction",
  ],
  function (t, n, r, o, a, i, l) {
    var e = o("WAWebWamCodegenUtils").defineEvents(
      {
        StartChatContextUiInteraction: [
          7022,
          {
            dedupKey: [4, o("WAWebWamCodegenUtils").TYPES.INTEGER],
            isBusiness: [3, o("WAWebWamCodegenUtils").TYPES.BOOLEAN],
            startChatContextEntryPoint: [
              1,
              o("WAWebWamEnumStartChatContextEntryPoint")
                .START_CHAT_CONTEXT_ENTRY_POINT,
            ],
            startChatContextUiAction: [
              2,
              o("WAWebWamEnumStartChatContextUiAction")
                .START_CHAT_CONTEXT_UI_ACTION,
            ],
          },
          [1, 1, 1],
          "regular",
        ],
      },
      { StartChatContextUiInteraction: [] },
    );
    l.StartChatContextUiInteractionWamEvent = e;
  },
  98,
);
