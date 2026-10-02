__d(
  "WASmaxInMessageDeliverIDTransactionGoPayMixin",
  ["WAResultOrError", "WASmaxParseUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "transaction");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        e,
        "onboarding-provider",
        "GO",
      );
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        e,
        "onboarding-provider-id",
        "GO",
      );
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        e,
        "onboarding-provider-name",
        "GoPay",
      );
      return a.success
        ? o("WAResultOrError").makeResult({
            onboardingProvider: n.value,
            onboardingProviderId: r.value,
            onboardingProviderName: a.value,
          })
        : a;
    }
    l.parseIDTransactionGoPayMixin = e;
  },
  98,
);
