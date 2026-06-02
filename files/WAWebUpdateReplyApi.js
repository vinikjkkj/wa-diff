__d(
  "WAWebUpdateReplyApi",
  ["WAWebMsgCollection", "WAWebMsgKey"],
  function (t, n, r, o, a, i, l) {
    async function e(e) {
      for (var t of e.entries()) {
        var n = t[0],
          a = t[1],
          i = o("WAWebMsgCollection").MsgCollection.get(
            r("WAWebMsgKey").fromString(n),
          );
        i != null &&
          (i.replyCount = i.replyCount != null ? i.replyCount + a : a);
      }
    }
    l.updateReplyCount = e;
  },
  98,
);
