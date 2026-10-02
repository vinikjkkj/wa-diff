__d(
  "WASmaxInMessageDeliverRecipientLatestLIDMixin",
  ["WAResultOrError", "WASmaxParseJid"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseJid").attrLidUserJid(e, "recipient_latest_lid");
      return t.success
        ? o("WAResultOrError").makeResult({ recipientLatestLid: t.value })
        : t;
    }
    l.parseRecipientLatestLIDMixin = e;
  },
  98,
);
