__d(
  "WAWebLogCollectionSizesForCrash",
  [
    "WAWebAICrashAnnotationGate",
    "WAWebChatCollection",
    "WAWebLogForCrash",
    "WAWebMsgCollection",
    "WAWebSafeCrashAnnotation",
  ],
  function (t, n, r, o, a, i, l) {
    var e = 6e4;
    function s() {
      o("WAWebAICrashAnnotationGate").runAICrashAnnotation(
        "wa:pop",
        function () {
          return o("WAWebLogForCrash").onLogForCrashReady(function () {
            return o("WAWebSafeCrashAnnotation").runCrashAnnotationSafely(
              "wa:pop",
              function () {
                (u(), self.setInterval(u, e));
              },
            );
          });
        },
      );
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
    l.annotateCrashWithCollectionSizes = s;
  },
  98,
);
