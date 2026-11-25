__d(
  "WASmaxReceiptPublishPeerDeliveryRPC",
  [
    "WAComms",
    "WAResultOrError",
    "WASmaxInReceiptPublishSuccessMixin",
    "WASmaxJsx",
    "WASmaxMixins",
    "WASmaxOutReceiptIndividualDeviceMixin",
    "WASmaxOutReceiptSingleMixin",
    "WASmaxParseReference",
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
        return { name: "PublishPeerDeliveryResponseSuccess", value: a.value };
      throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(
        o("WASmaxRpcUtils").errorMessageRpcParsing("PublishPeerDelivery", {
          Success: a,
        }),
      );
    }
    function s(e, t) {
      var n = o("WASmaxParseUtils").assertTag(e, "ack");
      if (!n.success) return n;
      var r = o("WASmaxParseReference").optionalAttrStringFromReference(t, [
        "participant",
      ]);
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").optionalLiteral(
        o("WASmaxParseUtils").attrString,
        e,
        "participant",
        r.value,
      );
      if (!a.success) return a;
      var i = o("WASmaxInReceiptPublishSuccessMixin").parsePublishSuccessMixin(
        e,
        t,
      );
      return i.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends({ hasParticipant: a.value != null }, i.value),
          )
        : i;
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
      var e = o("WASmaxJsx").smax("receipt", { type: "peer_msg" });
      return e;
    }
    function d(e) {
      var t = c();
      return o("WASmaxMixins").mergeStanzas(e, t);
    }
    ((l.sendPublishPeerDeliveryRPC = e),
      (l.parsePublishPeerDeliveryResponseSuccess = s),
      (l.makePublishPeerDeliveryRequest = u));
  },
  98,
);
