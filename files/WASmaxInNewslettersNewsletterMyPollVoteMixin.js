__d(
  "WASmaxInNewslettersNewsletterMyPollVoteMixin",
  ["WAResultOrError", "WASmaxParseUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "vote");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").contentBytesRange(e, 32, 32);
      return n.success
        ? o("WAResultOrError").makeResult({ elementValue: n.value })
        : n;
    }
    function s(t) {
      var n = o("WASmaxParseUtils").assertTag(t, "message");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").flattenedChildWithTag(t, "votes");
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").attrIntRange(r.value, "t", 0, void 0);
      if (!a.success) return a;
      var i = o("WASmaxParseUtils").mapChildrenWithTag(
        r.value,
        "vote",
        0,
        1e3,
        e,
      );
      return i.success
        ? o("WAResultOrError").makeResult({
            votesT: a.value,
            votesVote: i.value,
          })
        : i;
    }
    ((l.parseNewsletterMyPollVoteVotesVote = e),
      (l.parseNewsletterMyPollVoteMixin = s));
  },
  98,
);
