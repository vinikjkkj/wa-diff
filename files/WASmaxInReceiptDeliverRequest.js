__d(
  "WASmaxInReceiptDeliverRequest",
  [
    "WAResultOrError",
    "WASmaxInReceiptDeprecatedEditMixin",
    "WASmaxInReceiptOfflineMixin",
    "WASmaxInReceiptReceiptStyles",
    "WASmaxInReceiptToAgentParticipantMixin",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "receipt");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").attrIntRange(e, "t", 0, void 0);
      if (!n.success) return n;
      var r = o("WASmaxInReceiptOfflineMixin").parseOfflineMixin(e),
        a = o("WASmaxInReceiptDeprecatedEditMixin").parseDeprecatedEditMixin(e),
        i = o(
          "WASmaxInReceiptToAgentParticipantMixin",
        ).parseToAgentParticipantMixin(e),
        l = o("WASmaxInReceiptReceiptStyles").parseReceiptStyles(e);
      return l.success
        ? o("WAResultOrError").makeResult({
            t: n.value,
            offlineMixin: r.success ? r.value : null,
            deprecatedEditMixin: a.success ? a.value : null,
            toAgentParticipantMixin: i.success ? i.value : null,
            receiptStyles: l.value,
          })
        : l;
    }
    l.parseDeliverRequest = e;
  },
  98,
);
