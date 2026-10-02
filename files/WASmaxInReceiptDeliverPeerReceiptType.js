__d(
  "WASmaxInReceiptDeliverPeerReceiptType",
  [
    "WAResultOrError",
    "WASmaxInReceiptDeliverPeerDeliveryMixin",
    "WASmaxInReceiptDeliverPeerErrorMixin",
    "WASmaxInReceiptDeliverPeerPeerRetryMixin",
    "WASmaxInReceiptDeliverPeerReadMixin",
    "WASmaxInReceiptDeliverPeerServerErrorMixin",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o(
        "WASmaxInReceiptDeliverPeerPeerRetryMixin",
      ).parseDeliverPeerPeerRetryMixin(e);
      if (t.success)
        return o("WAResultOrError").makeResult({
          name: "DeliverPeerPeerRetry",
          value: t.value,
        });
      var n = o(
        "WASmaxInReceiptDeliverPeerReadMixin",
      ).parseDeliverPeerReadMixin(e);
      if (n.success)
        return o("WAResultOrError").makeResult({
          name: "DeliverPeerRead",
          value: n.value,
        });
      var r = o(
        "WASmaxInReceiptDeliverPeerServerErrorMixin",
      ).parseDeliverPeerServerErrorMixin(e);
      if (r.success)
        return o("WAResultOrError").makeResult({
          name: "DeliverPeerServerError",
          value: r.value,
        });
      var a = o(
        "WASmaxInReceiptDeliverPeerErrorMixin",
      ).parseDeliverPeerErrorMixin(e);
      if (a.success)
        return o("WAResultOrError").makeResult({
          name: "DeliverPeerError",
          value: a.value,
        });
      var i = o(
        "WASmaxInReceiptDeliverPeerDeliveryMixin",
      ).parseDeliverPeerDeliveryMixin(e);
      return i.success
        ? o("WAResultOrError").makeResult({
            name: "DeliverPeerDelivery",
            value: i.value,
          })
        : o("WASmaxParseUtils").errorMixinDisjunction(
            e,
            ["PeerRetry", "Read", "ServerError", "Error", "Delivery"],
            [t, n, r, a, i],
          );
    }
    l.parseDeliverPeerReceiptType = e;
  },
  98,
);
