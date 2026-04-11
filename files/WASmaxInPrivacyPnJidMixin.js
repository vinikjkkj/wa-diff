__d(
  "WASmaxInPrivacyPnJidMixin",
  ["WAResultOrError", "WASmaxParseJid"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseJid").attrUserJid(e, "pn_jid");
      return t.success
        ? o("WAResultOrError").makeResult({ pnJid: t.value })
        : t;
    }
    l.parsePnJidMixin = e;
  },
  98,
);
