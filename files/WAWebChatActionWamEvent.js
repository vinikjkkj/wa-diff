__d(
  "WAWebChatActionWamEvent",
  [
    "WAWebWamCodegenUtils",
    "WAWebWamEnumChatActionChatType",
    "WAWebWamEnumChatActionEntryPoint",
    "WAWebWamEnumChatActionType",
  ],
  function (t, n, r, o, a, i, l) {
    var e = o("WAWebWamCodegenUtils").defineEvents(
      {
        ChatAction: [
          2312,
          {
            chatActionChatType: [
              3,
              o("WAWebWamEnumChatActionChatType").CHAT_ACTION_CHAT_TYPE,
            ],
            chatActionEntryPoint: [
              2,
              o("WAWebWamEnumChatActionEntryPoint").CHAT_ACTION_ENTRY_POINT,
            ],
            chatActionMuteDuration: [4, o("WAWebWamCodegenUtils").TYPES.TIMER],
            chatActionType: [
              1,
              o("WAWebWamEnumChatActionType").CHAT_ACTION_TYPE,
            ],
          },
          [1, 1, 1],
          "regular",
        ],
      },
      { ChatAction: [] },
    );
    l.ChatActionWamEvent = e;
  },
  98,
);
