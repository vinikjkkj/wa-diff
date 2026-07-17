__d(
  "WAWebChatModelUtils",
  ["WAWebMsgGetters", "countWhere"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return r("countWhere")(e.getAllMsgs(), function (e) {
        return (
          !o("WAWebMsgGetters").getIsSentByMe(e) &&
          !o("WAWebMsgGetters").getIsNotification(e)
        );
      });
    }
    l.getSenderMsgCount = e;
  },
  98,
);
