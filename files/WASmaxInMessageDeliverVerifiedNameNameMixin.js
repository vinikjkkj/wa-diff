__d(
  "WASmaxInMessageDeliverVerifiedNameNameMixin",
  ["WAResultOrError", "WASmaxParseUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "message");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").attrString(e, "verified_name");
      return n.success
        ? o("WAResultOrError").makeResult({ verifiedName: n.value })
        : n;
    }
    l.parseVerifiedNameNameMixin = e;
  },
  98,
);
