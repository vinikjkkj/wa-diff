__d(
  "WASmaxInMessageDeliverBotLocaleMixin",
  ["WAResultOrError", "WASmaxParseUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "message");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").attrString(e, "locale");
      return n.success
        ? o("WAResultOrError").makeResult({ locale: n.value })
        : n;
    }
    l.parseBotLocaleMixin = e;
  },
  98,
);
