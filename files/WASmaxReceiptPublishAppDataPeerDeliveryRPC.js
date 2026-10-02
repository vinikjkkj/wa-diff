__d(
  "WASmaxReceiptPublishAppDataPeerDeliveryRPC",
  [
    "WAComms",
    "WASmaxOutReceiptPublishAppDataPeerDeliveryRequest",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = o(
            "WASmaxOutReceiptPublishAppDataPeerDeliveryRequest",
          ).makePublishAppDataPeerDeliveryRequest(e);
          yield o("WAComms").castSmaxStanza(t);
        })),
        s.apply(this, arguments)
      );
    }
    l.sendPublishAppDataPeerDeliveryRPC = e;
  },
  98,
);
