__d(
  "WAWebChatLockDailyWamEvent",
  ["WAWebWamCodegenUtils"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e = o("WAWebWamCodegenUtils")).defineEvents(
        {
          ChatLockDaily: [
            4214,
            {
              folderChatsCount: [1, e.TYPES.INTEGER],
              folderOpenCount: [2, e.TYPES.INTEGER],
              lockFolderHidden: [5, e.TYPES.BOOLEAN],
              newAddChatCount: [3, e.TYPES.INTEGER],
              newRemoveChatCount: [4, e.TYPES.INTEGER],
              secretCodeActive: [6, e.TYPES.BOOLEAN],
            },
            [1, 1, 1],
            "regular",
          ],
        },
        { ChatLockDaily: [] },
      );
    l.ChatLockDailyWamEvent = s;
  },
  98,
);
