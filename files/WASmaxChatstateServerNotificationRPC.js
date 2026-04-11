__d(
  "WASmaxChatstateServerNotificationRPC",
  [
    "WASmaxInChatstateServerNotificationRequest",
    "WASmaxParsingFailure",
    "WASmaxRpcUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o(
        "WASmaxInChatstateServerNotificationRequest",
      ).parseServerNotificationRequest(e);
      if (!t.success)
        throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(
          o("WASmaxRpcUtils").errorMessageRpcParsing("ServerNotification", {
            Request: t,
          }),
        );
      return { parsedRequest: t.value };
    }
    l.receiveServerNotificationRPC = e;
  },
  98,
);
