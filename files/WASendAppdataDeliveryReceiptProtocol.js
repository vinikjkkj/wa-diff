__d(
  "WASendAppdataDeliveryReceiptProtocol",
  ["WASmaxReceiptPublishAppDataPeerDeliveryRPC"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = function (t) {
      var e = t.from,
        n = t.stanzaId;
      return o(
        "WASmaxReceiptPublishAppDataPeerDeliveryRPC",
      ).sendPublishAppDataPeerDeliveryRPC({ receiptTo: e, receiptId: n });
    };
    l.sendAppdataDeliveryReceiptProtocol = e;
  },
  98,
);
