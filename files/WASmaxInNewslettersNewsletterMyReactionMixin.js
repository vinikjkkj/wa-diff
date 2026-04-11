__d(
  "WASmaxInNewslettersNewsletterMyReactionMixin",
  ["WAResultOrError", "WASmaxParseUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "message");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(e, "reaction");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").attrString(n.value, "code");
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").attrIntRange(n.value, "t", 0, void 0);
      return a.success
        ? o("WAResultOrError").makeResult({
            reactionCode: r.value,
            reactionT: a.value,
          })
        : a;
    }
    l.parseNewsletterMyReactionMixin = e;
  },
  98,
);
