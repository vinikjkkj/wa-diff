__d(
  "WAWebMaybeClearChatAiThreads",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e) {
      if (e.id.isBot()) {
        var t;
        (t = e.aiThreads) == null || t.clear();
      }
    }
    i.maybeClearAiThreadsForChat = e;
  },
  66,
);
