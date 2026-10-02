__d(
  "WASmaxInReceiptPeerDeliverAppDataPeerRetryOrDeliverAppDataPeerDeliveryMixinGroup",
  [
    "WAResultOrError",
    "WASmaxInReceiptDeliverAppDataPeerPeerDeliveryMixin",
    "WASmaxInReceiptDeliverAppDataPeerPeerRetryMixin",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o(
        "WASmaxInReceiptDeliverAppDataPeerPeerRetryMixin",
      ).parseDeliverAppDataPeerPeerRetryMixin(e);
      if (t.success)
        return o("WAResultOrError").makeResult({
          name: "DeliverAppDataPeerPeerRetry",
          value: t.value,
        });
      var n = o(
        "WASmaxInReceiptDeliverAppDataPeerPeerDeliveryMixin",
      ).parseDeliverAppDataPeerPeerDeliveryMixin(e);
      return n.success
        ? o("WAResultOrError").makeResult({
            name: "DeliverAppDataPeerPeerDelivery",
            value: n.value,
          })
        : o("WASmaxParseUtils").errorMixinDisjunction(
            e,
            ["PeerRetry", "PeerDelivery"],
            [t, n],
          );
    }
    l.parsePeerDeliverAppDataPeerRetryOrDeliverAppDataPeerDeliveryMixinGroup =
      e;
  },
  98,
);
