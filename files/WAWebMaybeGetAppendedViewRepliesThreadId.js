__d(
  "WAWebMaybeGetAppendedViewRepliesThreadId",
  [
    "WAWebDBProcessReplyMsgs",
    "WAWebThreadId",
    "WAWebThreadMsgUtils",
    "WAWebThreadUtils",
    "WAWebThreadsGating",
    "WAWebViewRepliesChatUtils",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t;
      if (!o("WAWebThreadsGating").isViewRepliesThreadIdEnabled()) {
        var n;
        return (n = e.threadIds) == null
          ? void 0
          : n.filter(function (e) {
              return e.type !== o("WAWebThreadUtils").ThreadType.ViewAllReplies;
            });
      }
      if (o("WAWebThreadMsgUtils").getMsgViewAllRepliesThread(e) != null)
        return e.threadIds;
      var a = e.quotedMsg;
      if (
        a == null ||
        !o("WAWebViewRepliesChatUtils").isChatSupportedForViewRepliesWid(e.to)
      )
        return e.threadIds;
      var i = o("WAWebThreadMsgUtils").getMsgViewAllRepliesThread(a);
      if (i == null && a.quotedStanzaID != null) return e.threadIds;
      var l;
      if (i != null) l = i.key;
      else if (a.id != null) l = a.id;
      else {
        var s = o("WAWebDBProcessReplyMsgs").createQuotedMsgKey(e);
        if (s === "missing-stanza-id") return e.threadIds;
        l = s;
      }
      var u = r("WAWebThreadId").fromMessage(
          l,
          o("WAWebThreadUtils").ThreadType.ViewAllReplies,
        ),
        c = (t = e.threadIds) != null ? t : [];
      return [].concat(c, [u]);
    }
    l.maybeGetAppendedViewRepliesThreadId = e;
  },
  98,
);
