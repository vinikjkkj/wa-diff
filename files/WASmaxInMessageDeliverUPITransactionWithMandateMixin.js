__d(
  "WASmaxInMessageDeliverUPITransactionWithMandateMixin",
  [
    "WAResultOrError",
    "WASmaxInMessageDeliverUPIMandateBaseMixin",
    "WASmaxInMessageDeliverUPIMandateWithUpdateMixin",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "transaction");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(e, "mandate");
      if (!n.success) return n;
      var r = o(
        "WASmaxInMessageDeliverUPIMandateBaseMixin",
      ).parseUPIMandateBaseMixin(n.value);
      if (!r.success) return r;
      var a = o(
        "WASmaxInMessageDeliverUPIMandateWithUpdateMixin",
      ).parseUPIMandateWithUpdateMixin(n.value);
      return o("WAResultOrError").makeResult({
        mandateUPIMandateBaseMixin: r.value,
        mandateUPIMandateWithUpdateMixin: a.success ? a.value : null,
      });
    }
    l.parseUPITransactionWithMandateMixin = e;
  },
  98,
);
