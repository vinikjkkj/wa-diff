__d(
  "WASmaxInReceiptBotIsLIDFlagMixin",
  ["WAResultOrError", "WASmaxParseUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        e,
        "is_lid",
        "true",
      );
      return t.success
        ? o("WAResultOrError").makeResult({ isLid: t.value })
        : t;
    }
    l.parseBotIsLIDFlagMixin = e;
  },
  98,
);
