__d(
  "WAWebHandleQPPrefetchTimestampNotification",
  [
    "WASmaxPsaResetSmbLastQpPrefetchTimestampRPC",
    "WAWebBizGatingUtils",
    "WAWebWorkerSafeBackendApi",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o(
          "WASmaxPsaResetSmbLastQpPrefetchTimestampRPC",
        ).receiveResetSmbLastQpPrefetchTimestampRPC(e),
        n = t.makeResetSmbLastQpPrefetchTimestampResponseAck,
        r = n();
      return (
        o("WAWebBizGatingUtils").qpGraphQLEnabled() &&
          o("WAWebWorkerSafeBackendApi").workerSafeFireAndForget(
            "fetchQuickPromotionsNow",
          ),
        r
      );
    }
    l.handleQPPrefetchTimestampNotification = e;
  },
  98,
);
