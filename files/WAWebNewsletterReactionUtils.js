__d(
  "WAWebNewsletterReactionUtils",
  ["WATimeUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t, n;
      return {
        serverTimestamp:
          (t = e.reactionCountMapTs) != null ? t : o("WATimeUtils").unixTime(),
        emojiCountMap: (n = e.reactionCountMap) != null ? n : new Map(),
        parentMsgKey: e.id.toString(),
      };
    }
    function s(e) {
      var t = e.emojiCountMap,
        n = e.parentMsgKey,
        r = e.serverTimestamp;
      if (!(r == null || t == null))
        return {
          serverTimestamp: r,
          emojiCountMap: t,
          parentMsgKey: n.toString(),
        };
    }
    ((l.mapFrontendReactionToBackend = e), (l.mapReactionDataToDbRecord = s));
  },
  98,
);
