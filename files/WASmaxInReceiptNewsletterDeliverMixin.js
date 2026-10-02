__d(
  "WASmaxInReceiptNewsletterDeliverMixin",
  [
    "WAResultOrError",
    "WASmaxInReceiptStatusClassMixin",
    "WASmaxParseJid",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "receipt");
      if (!t.success) return t;
      var n = o("WASmaxParseJid").attrNewsletterJid(e, "from");
      if (!n.success) return n;
      var r = o("WASmaxParseJid").attrDeviceJid(e, "participant");
      if (!r.success) return r;
      var a = o("WASmaxInReceiptStatusClassMixin").parseStatusClassMixin(e);
      return o("WAResultOrError").makeResult({
        from: n.value,
        participant: r.value,
        statusClassMixin: a.success ? a.value : null,
      });
    }
    l.parseNewsletterDeliverMixin = e;
  },
  98,
);
