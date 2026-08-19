__d(
  "WASmaxCoexistenceSyncNotificationRPC",
  [
    "WASmaxInCoexistenceSyncNotificationRequest",
    "WASmaxParsingFailure",
    "WASmaxRpcUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o(
        "WASmaxInCoexistenceSyncNotificationRequest",
      ).parseSyncNotificationRequest(e);
      if (!t.success)
        throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(
          o("WASmaxRpcUtils").errorMessageRpcParsing("SyncNotification", {
            Request: t,
          }),
        );
      return { parsedRequest: t.value };
    }
    l.receiveSyncNotificationRPC = e;
  },
  98,
);
