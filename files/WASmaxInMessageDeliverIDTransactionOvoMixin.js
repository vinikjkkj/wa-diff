__d(
  "WASmaxInMessageDeliverIDTransactionOvoMixin",
  ["WAResultOrError", "WASmaxParseUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "transaction");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        e,
        "onboarding-provider",
        "OVO",
      );
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        e,
        "onboarding-provider-id",
        "OVO",
      );
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        e,
        "onboarding-provider-name",
        "OVO",
      );
      return a.success
        ? o("WAResultOrError").makeResult({
            onboardingProvider: n.value,
            onboardingProviderId: r.value,
            onboardingProviderName: a.value,
          })
        : a;
    }
    l.parseIDTransactionOvoMixin = e;
  },
  98,
);
