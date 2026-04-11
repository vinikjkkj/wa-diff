__d(
  "WASmaxCoexistenceOnboardingStatusNotificationRPC",
  [
    "WASmaxInCoexistenceOnboardingStatusNotificationRequest",
    "WASmaxParsingFailure",
    "WASmaxRpcUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o(
        "WASmaxInCoexistenceOnboardingStatusNotificationRequest",
      ).parseOnboardingStatusNotificationRequest(e);
      if (!t.success)
        throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(
          o("WASmaxRpcUtils").errorMessageRpcParsing(
            "OnboardingStatusNotification",
            { Request: t },
          ),
        );
      return { parsedRequest: t.value };
    }
    l.receiveOnboardingStatusNotificationRPC = e;
  },
  98,
);
