__d(
  "WASmaxInNewslettersQuestionResponseSenderMixin",
  ["WAResultOrError", "WASmaxParseJid", "WASmaxParseUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "question_response");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(e, "sender");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").flattenedChildWithTag(n.value, "picture");
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").optional(
        o("WASmaxParseJid").attrLidUserJid,
        n.value,
        "lid",
      );
      if (!a.success) return a;
      var i = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        n.value,
        "notify_name",
      );
      if (!i.success) return i;
      var l = o("WASmaxParseUtils").attrString(r.value, "direct_path");
      return l.success
        ? o("WAResultOrError").makeResult({
            senderLid: a.value,
            senderNotifyName: i.value,
            senderPictureDirectPath: l.value,
          })
        : l;
    }
    l.parseQuestionResponseSenderMixin = e;
  },
  98,
);
