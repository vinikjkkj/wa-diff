__d(
  "WASmaxInMessageDeliverStatusPushEligibleMixin",
  ["WAResultOrError", "WASmaxParseUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "message");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(e, "meta");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        n.value,
        "push_eligible",
        "true",
      );
      return r.success
        ? o("WAResultOrError").makeResult({ metaPushEligible: r.value })
        : r;
    }
    l.parseStatusPushEligibleMixin = e;
  },
  98,
);
