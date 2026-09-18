__d(
  "WAWebChatLockActionWamEvent",
  [
    "WAWebWamCodegenUtils",
    "WAWebWamEnumActionEntryPoint",
    "WAWebWamEnumAuthType",
    "WAWebWamEnumChatLockActionType",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e = o("WAWebWamCodegenUtils")).defineEvents(
        {
          ChatLockAction: [
            4212,
            {
              actionEntryPoint: [
                3,
                o("WAWebWamEnumActionEntryPoint").ACTION_ENTRY_POINT,
              ],
              actionFolderChatsCount: [4, e.TYPES.INTEGER],
              authType: [5, o("WAWebWamEnumAuthType").AUTH_TYPE],
              chatLockActionType: [
                1,
                o("WAWebWamEnumChatLockActionType").CHAT_LOCK_ACTION_TYPE,
              ],
              chatLockIsGroup: [2, e.TYPES.BOOLEAN],
              dedupKey: [6, e.TYPES.INTEGER],
            },
            [1, 1, 1],
            "regular",
          ],
        },
        { ChatLockAction: [] },
      );
    l.ChatLockActionWamEvent = s;
  },
  98,
);
