__d(
  "WASmaxReceiptPublishPeerReadRPC",
  [
    "WAComms",
    "WASmaxInReceiptPublishSuccessMixin",
    "WASmaxJsx",
    "WASmaxMixins",
    "WASmaxOutReceiptIndividualDeviceMixin",
    "WASmaxOutReceiptSingleMixin",
    "WASmaxParseUtils",
    "WASmaxParsingFailure",
    "WASmaxRpcUtils",
  ],
  function (t, n, r, o, a, i, l) {
    async function e(e, t) {
      var n = u(e),
        r = await o("WAComms").sendSmaxStanza(n, t),
        a = s(r, n);
      if (a.success)
        return { name: "PublishPeerReadResponseSuccess", value: a.value };
      throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(
        o("WASmaxRpcUtils").errorMessageRpcParsing("PublishPeerRead", {
          Success: a,
        }),
      );
    }
    function s(e, t) {
      var n = o("WASmaxParseUtils").assertTag(e, "ack");
      if (!n.success) return n;
      var r = o("WASmaxInReceiptPublishSuccessMixin").parsePublishSuccessMixin(
        e,
        t,
      );
      return (r.success, r);
    }
    function u(e) {
      var t = d(
        o("WASmaxOutReceiptSingleMixin").mergeSingleMixin(
          o("WASmaxOutReceiptIndividualDeviceMixin").mergeIndividualDeviceMixin(
            o("WASmaxJsx").smax("receipt", null),
            e,
          ),
          e,
        ),
      );
      return t;
    }
    function c() {
      var e = o("WASmaxJsx").smax("receipt", { type: "hist_sync" });
      return e;
    }
    function d(e) {
      var t = c();
      return o("WASmaxMixins").mergeStanzas(e, t);
    }
    ((l.sendPublishPeerReadRPC = e),
      (l.parsePublishPeerReadResponseSuccess = s),
      (l.makePublishPeerReadRequest = u),
      (l.mergeHistorySyncTypeMixin = d));
  },
  98,
);
