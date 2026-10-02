__d(
  "WASmaxInReceiptDeliverAppDataPeerRequest",
  [
    "WAResultOrError",
    "WASmaxInReceiptPeerDeliverAppDataPeerRetryOrDeliverAppDataPeerDeliveryMixinGroup",
    "WASmaxParseJid",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "receipt");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").attrStanzaId(e, "id");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrIntRange,
        e,
        "t",
        1577865600,
        4102473600,
      );
      if (!r.success) return r;
      var a = o("WASmaxParseJid").attrDeviceJid(e, "from");
      if (!a.success) return a;
      var i = o(
        "WASmaxInReceiptPeerDeliverAppDataPeerRetryOrDeliverAppDataPeerDeliveryMixinGroup",
      ).parsePeerDeliverAppDataPeerRetryOrDeliverAppDataPeerDeliveryMixinGroup(
        e,
      );
      return i.success
        ? o("WAResultOrError").makeResult({
            id: n.value,
            t: r.value,
            from: a.value,
            peerDeliverAppDataPeerRetryOrDeliverAppDataPeerDeliveryMixinGroup:
              i.value,
          })
        : i;
    }
    l.parseDeliverAppDataPeerRequest = e;
  },
  98,
);
