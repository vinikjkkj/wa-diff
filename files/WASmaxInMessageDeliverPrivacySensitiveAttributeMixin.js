__d(
  "WASmaxInMessageDeliverPrivacySensitiveAttributeMixin",
  ["WAResultOrError", "WASmaxParseUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "message");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        e,
        "privacy_sensitive",
        "1",
      );
      return n.success
        ? o("WAResultOrError").makeResult({ privacySensitive: n.value })
        : n;
    }
    l.parsePrivacySensitiveAttributeMixin = e;
  },
  98,
);
