__d(
  "WAWebGroupHistoryStoredHintFillWatcher",
  [
    "WAWebMsgCollection",
    "WAWebMsgType",
    "WAWebRequestGroupHistoryStoredHintFill",
  ],
  function (t, n, r, o, a, i, l) {
    function e() {
      return (
        o("WAWebMsgCollection").MsgCollection.off("add", s),
        o("WAWebMsgCollection").MsgCollection.on("add", s),
        function () {
          o("WAWebMsgCollection").MsgCollection.off("add", s);
        }
      );
    }
    function s(e) {
      e.type === o("WAWebMsgType").MSG_TYPE.GP2 &&
        o(
          "WAWebRequestGroupHistoryStoredHintFill",
        ).requestGroupHistoryStoredHintFills([e]);
    }
    l.startGroupHistoryStoredHintFillWatcher = e;
  },
  98,
);
