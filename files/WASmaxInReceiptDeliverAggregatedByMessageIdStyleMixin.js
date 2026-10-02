__d(
  "WASmaxInReceiptDeliverAggregatedByMessageIdStyleMixin",
  [
    "WAResultOrError",
    "WASmaxInReceiptAggregatedByMessageIdMixin",
    "WASmaxInReceiptEnums",
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
          "WASmaxInReceiptAggregatedByMessageIdMixin",
        ).parseAggregatedByMessageIdMixin(e);
      return a.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends(
              { from: n.value, recipientMixin: r.success ? r.value : null },
              a.value,
            ),
          )
        : a;
    }
    l.parseDeliverAggregatedByMessageIdStyleMixin = e;
  },
  98,
);
