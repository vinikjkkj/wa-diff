__d(
  "WAWebHandleQPPrefetchTimestampNotification",
  [
    "WASmaxPsaResetSmbLastQpPrefetchTimestampRPC",
    "WAWebQuickPromotionGating",
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
        o("WAWebQuickPromotionGating").qpGraphQLEnabledSMB() &&
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
