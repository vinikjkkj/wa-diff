__d(
  "MAWProtocolQueueReceipt",
  [
    "MAWSharedProtocolQueueReceipt",
    "WADbHandlePermitedIdentitiesApi",
    "WAReceiptUtils",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return o("WADbHandlePermitedIdentitiesApi")
        .handlePermitedIdentitiesPerDevice(
          o("WAReceiptUtils").calculateIdentitiesToDelete(e),
        )
        .then(function () {
          return o(
            "MAWSharedProtocolQueueReceipt",
          ).sharedHandleIncomingReceiptStanza(e);
        });
    }
    l.handleIncomingReceiptStanza = e;
  },
  98,
);
