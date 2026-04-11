__d(
  "WAWebBizCoexOfflineICDCHandledCache",
  ["WAWebBackendEventBus"],
  function (t, n, r, o, a, i, l) {
    var e = new Set();
    function s(t) {
      e.add(t);
    }
    function u(t) {
      e.delete(t);
    }
    function c(t) {
      return e.has(t);
    }
    (o("WAWebBackendEventBus").BackendEventBus.onOfflineDeliveryEnd(
      function () {
        e.clear();
      },
    ),
      (l.addToOfflineBizHostedSenderICDCProcessedCache = s),
      (l.removeFromOfflineBizHostedSenderICDCProcessedCache = u),
      (l.hasOfflineBizHostedSenderICDCProcessedForSender = c));
  },
  98,
);
