__d(
  "WAWebChatFolderOpenWamEvent",
  ["WAWebWamCodegenUtils"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e = o("WAWebWamCodegenUtils")).defineEvents(
        {
          ChatFolderOpen: [
            2808,
            {
              activityIndicatorCount: [2, e.TYPES.INTEGER],
              folderType: [1, e.TYPES.STRING],
              hasImportantMessages: [3, e.TYPES.BOOLEAN],
            },
            [1, 1, 1],
            "regular",
          ],
        },
        { ChatFolderOpen: [] },
      );
    l.ChatFolderOpenWamEvent = s;
  },
  98,
);
