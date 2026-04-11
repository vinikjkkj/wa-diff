__d(
  "WASmaxCoexistenceOffboardingNotificationRPC",
  [
    "WASmaxInCoexistenceOffboardingNotificationRequest",
    "WASmaxParsingFailure",
    "WASmaxRpcUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o(
        "WASmaxInCoexistenceOffboardingNotificationRequest",
      ).parseOffboardingNotificationRequest(e);
      if (!t.success)
        throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(
          o("WASmaxRpcUtils").errorMessageRpcParsing(
            "OffboardingNotification",
            { Request: t },
          ),
        );
      return { parsedRequest: t.value };
    }
    l.receiveOffboardingNotificationRPC = e;
  },
  98,
);
