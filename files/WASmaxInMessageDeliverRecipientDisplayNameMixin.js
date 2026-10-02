__d(
  "WASmaxInMessageDeliverRecipientDisplayNameMixin",
  ["WAResultOrError", "WASmaxParseUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "message");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").attrString(e, "recipient_display_name");
      return n.success
        ? o("WAResultOrError").makeResult({ recipientDisplayName: n.value })
        : n;
    }
    l.parseRecipientDisplayNameMixin = e;
  },
  98,
);
