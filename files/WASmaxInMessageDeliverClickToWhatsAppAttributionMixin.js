__d(
  "WASmaxInMessageDeliverClickToWhatsAppAttributionMixin",
  ["WAResultOrError", "WASmaxParseUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "ctwa_attribution");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").contentBytesRange(e, 1, 1024);
      return n.success
        ? o("WAResultOrError").makeResult({ elementValue: n.value })
        : n;
    }
    l.parseClickToWhatsAppAttributionMixin = e;
  },
  98,
);
