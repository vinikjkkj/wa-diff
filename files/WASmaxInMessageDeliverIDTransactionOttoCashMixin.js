__d(
  "WASmaxInMessageDeliverIDTransactionOttoCashMixin",
  ["WAResultOrError", "WASmaxParseUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "transaction");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        e,
        "onboarding-provider",
        "OTTO",
      );
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        e,
        "onboarding-provider-id",
        "OTTO",
      );
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        e,
        "onboarding-provider-name",
        "OttoCash",
      );
      return a.success
        ? o("WAResultOrError").makeResult({
            onboardingProvider: n.value,
            onboardingProviderId: r.value,
            onboardingProviderName: a.value,
          })
        : a;
    }
    l.parseIDTransactionOttoCashMixin = e;
  },
  98,
);
