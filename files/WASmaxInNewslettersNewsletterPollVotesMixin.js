__d(
  "WASmaxInNewslettersNewsletterPollVotesMixin",
  ["WAResultOrError", "WASmaxParseUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "vote");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").attrIntRange(e, "count", 1, void 0);
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").contentBytesRange(e, 32, 32);
      return r.success
        ? o("WAResultOrError").makeResult({
            count: n.value,
            elementValue: r.value,
          })
        : r;
    }
    function s(t) {
      var n = o("WASmaxParseUtils").assertTag(t, "message");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").flattenedChildWithTag(t, "votes");
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").mapChildrenWithTag(
        r.value,
        "vote",
        0,
        1e3,
        e,
      );
      return a.success
        ? o("WAResultOrError").makeResult({ votesVote: a.value })
        : a;
    }
    ((l.parseNewsletterPollVotesVotesVote = e),
      (l.parseNewsletterPollVotesMixin = s));
  },
  98,
);
