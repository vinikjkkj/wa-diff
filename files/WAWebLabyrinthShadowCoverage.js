__d(
  "WAWebLabyrinthShadowCoverage",
  ["WAWebChatConstants"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.endOfHistoryTransferType,
        n = e.oldestLocalMsgSec,
        r = e.pairingSec,
        a = e.windowStartSec;
      if (
        o(
          "WAWebChatConstants",
        ).ConversationEndOfHistoryTransferModelPropType.cast(t) ===
        o("WAWebChatConstants").ConversationEndOfHistoryTransferModelPropType
          .COMPLETE_AND_NO_MORE_MESSAGE_REMAIN_ON_PRIMARY
      )
        return a;
      var i = [n, r].filter(function (e) {
        return e != null;
      });
      return i.length === 0 ? null : Math.max(a, Math.min.apply(Math, i));
    }
    l.getLabyrinthShadowCoverageStartSec = e;
  },
  98,
);
