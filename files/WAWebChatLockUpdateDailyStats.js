__d(
  "WAWebChatLockUpdateDailyStats",
  ["WAWebDailyAggregatedStatsCollection"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      e === void 0 && (e = {});
      var t = o(
        "WAWebDailyAggregatedStatsCollection",
      ).DailyAggregatedStatsCollection.gaddForToday();
      (e.totalFolderChatsCount != null &&
        (t.chatLockFolderChatsCount = e.totalFolderChatsCount),
        e.incFolderOpenCount != null &&
          (t.chatLockFolderOpenCount += e.incFolderOpenCount),
        e.lockFolderHidden != null &&
          (t.chatLockLockFolderHidden = e.lockFolderHidden),
        e.incNewAddChatCount != null &&
          (t.chatLockNewAddChatCount += e.incNewAddChatCount),
        e.incNewRemoveChatCount != null &&
          (t.chatLockNewRemoveChatCount += e.incNewRemoveChatCount),
        e.secretCodeActive != null &&
          (t.chatLockSecretCodeActive = e.secretCodeActive));
    }
    l.updateChatLockDailyStats = e;
  },
  98,
);
