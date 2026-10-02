__d(
  "WASmaxInReceiptDeliverAppDataPeerPeerDeliveryMixin",
  ["WASmaxInReceiptAppDataPeerCategoryMixin", "WASmaxParseUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "receipt");
      if (!t.success) return t;
      var n = o(
        "WASmaxInReceiptAppDataPeerCategoryMixin",
      ).parseAppDataPeerCategoryMixin(e);
      return (n.success, n);
    }
    l.parseDeliverAppDataPeerPeerDeliveryMixin = e;
  },
  98,
);
