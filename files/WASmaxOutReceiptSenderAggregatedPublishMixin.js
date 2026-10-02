__d(
  "WASmaxOutReceiptSenderAggregatedPublishMixin",
  ["WASmaxChildren", "WASmaxJsx", "WASmaxMixins", "WAWap"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.itemId,
        n = o("WASmaxJsx").smax("item", { id: o("WAWap").STANZA_ID(t) });
      return n;
    }
    function s(t) {
      var n = t.itemArgs,
        r = t.receiptId,
        a = o("WASmaxJsx").smax(
          "receipt",
          { id: o("WAWap").STANZA_ID(r) },
          o("WASmaxJsx").smax(
            "list",
            null,
            o("WASmaxChildren").REPEATED_CHILD(e, n, 0, 255),
          ),
        );
      return a;
    }
    function u(e, t) {
      var n = s(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    ((l.makeSenderAggregatedPublishListItem = e),
      (l.mergeSenderAggregatedPublishMixin = u));
  },
  98,
);
