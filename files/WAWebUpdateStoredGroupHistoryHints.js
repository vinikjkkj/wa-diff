__d(
  "WAWebUpdateStoredGroupHistoryHints",
  ["WAWebGroupHistoryStoredHintGating", "WAWebMsgCollection"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.updates;
      if (
        o("WAWebGroupHistoryStoredHintGating").isGroupHistoryStoredHintEnabled()
      )
        for (var n of t) {
          var r,
            a = n.expectedTimestamp,
            i = n.messageKey,
            l = n.timestamp,
            s = o("WAWebMsgCollection").MsgCollection.get(i);
          s != null &&
            ((r = s.groupHistoryLastCountedMessageTimestamp) != null
              ? r
              : null) === a &&
            s.set({ groupHistoryLastCountedMessageTimestamp: l });
        }
    }
    l.updateStoredGroupHistoryHints = e;
  },
  98,
);
