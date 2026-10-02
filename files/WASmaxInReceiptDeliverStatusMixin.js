__d(
  "WASmaxInReceiptDeliverStatusMixin",
  ["WAResultOrError", "WASmaxParseJid", "WASmaxParseUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "receipt");
      if (!t.success) return t;
      var n = o("WASmaxParseJid").attrStatusJid(e, "from");
      if (!n.success) return n;
      var r = o("WASmaxParseJid").attrDeviceJid(e, "participant");
      return r.success
        ? o("WAResultOrError").makeResult({
            from: n.value,
            participant: r.value,
          })
        : r;
    }
    l.parseDeliverStatusMixin = e;
  },
  98,
);
