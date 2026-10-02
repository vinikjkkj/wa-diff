__d(
  "WASmaxInReceiptDeliverMessageAggregatedStyleMixin",
  [
    "WAResultOrError",
    "WASmaxInReceiptEnums",
    "WASmaxInReceiptMessageAggregatedMixin",
    "WASmaxInReceiptMessageAggregatedStyleReceiptType",
    "WASmaxInReceiptRecipientMixin",
    "WASmaxParseJid",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "receipt");
      if (!t.success) return t;
      var n = o("WASmaxParseJid").attrJidEnum(
        e,
        "from",
        o("WASmaxInReceiptEnums").BROADCASTJID_GROUPJID_NEWSLETTERJID_STATUSJID,
      );
      if (!n.success) return n;
      var r = o("WASmaxInReceiptRecipientMixin").parseRecipientMixin(e),
        a = o(
          "WASmaxInReceiptMessageAggregatedMixin",
        ).parseMessageAggregatedMixin(e);
      if (!a.success) return a;
      var i = o(
        "WASmaxInReceiptMessageAggregatedStyleReceiptType",
      ).parseMessageAggregatedStyleReceiptType(e);
      return o("WAResultOrError").makeResult(
        babelHelpers.extends(
          { from: n.value, recipientMixin: r.success ? r.value : null },
          a.value,
          { messageAggregatedStyleReceiptType: i.success ? i.value : null },
        ),
      );
    }
    l.parseDeliverMessageAggregatedStyleMixin = e;
  },
  98,
);
