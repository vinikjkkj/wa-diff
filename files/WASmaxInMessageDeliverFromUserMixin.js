__d(
  "WASmaxInMessageDeliverFromUserMixin",
  ["WAResultOrError", "WASmaxParseJid", "WASmaxParseUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "message");
      if (!t.success) return t;
      var n = o("WASmaxParseJid").attrDeviceJid(e, "from");
      return n.success ? o("WAResultOrError").makeResult({ from: n.value }) : n;
    }
    l.parseFromUserMixin = e;
  },
  98,
);
