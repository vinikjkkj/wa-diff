__d(
  "WAWebSubmitChatLockDailyStats",
  ["WAWebChatLockDailyWamEvent"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = e.chatLockFolderChatsCount,
        n = e.chatLockFolderOpenCount,
        r = e.chatLockLockFolderHidden,
        a = e.chatLockNewAddChatCount,
        i = e.chatLockNewRemoveChatCount,
        l = e.chatLockSecretCodeActive;
      if (!(t === 0 || n === 0 || a === 0 || i === 0)) {
        var s = new (o("WAWebChatLockDailyWamEvent").ChatLockDailyWamEvent)({
          folderChatsCount: t,
          folderOpenCount: n,
          newAddChatCount: a,
          newRemoveChatCount: i,
        });
        (r != null && s.set({ lockFolderHidden: r }),
          l != null && s.set({ secretCodeActive: l }),
          s.commit());
      }
    }
    l.submitChatLockDailyStats = e;
  },
  98,
);
