__d(
  "WAWebLogCollectionSizesForCrash",
  [
    "WAWebChatCollection",
    "WAWebLogForCrash",
    "WAWebMsgCollection",
    "WAWebSafeCrashAnnotation",
  ],
  function (t, n, r, o, a, i, l) {
    var e = 6e4;
    function s() {
      o("WAWebLogForCrash").onLogForCrashReady(function () {
        (u(), self.setInterval(u, e));
      });
    }
    function u() {
      o("WAWebSafeCrashAnnotation").runCrashAnnotationSafely(
        "wa:pop",
        function () {
          return o("WAWebLogForCrash").logForCrash(
            "wa:pop",
            JSON.stringify({
              chats: o("WAWebChatCollection").ChatCollection.length,
              msgs: o("WAWebMsgCollection").MsgCollection.length,
            }),
          );
        },
      );
    }
    l.initCollectionSizesCrashLogging = s;
  },
  98,
);
