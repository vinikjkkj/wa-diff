__d(
  "WASmaxInPreKeysRequestErrorsFetchDigest",
  [
    "WAResultOrError",
    "WASmaxInPreKeysIQErrorFallbackClientMixin",
    "WASmaxInPreKeysIQErrorItemNotFoundMixin",
    "WASmaxInPreKeysIQErrorNotAcceptableMixin",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o(
        "WASmaxInPreKeysIQErrorNotAcceptableMixin",
      ).parseIQErrorNotAcceptableMixin(e);
      if (t.success)
        return o("WAResultOrError").makeResult({
          name: "IQErrorNotAcceptable",
          value: t.value,
        });
      var n = o(
        "WASmaxInPreKeysIQErrorItemNotFoundMixin",
      ).parseIQErrorItemNotFoundMixin(e);
      if (n.success)
        return o("WAResultOrError").makeResult({
          name: "IQErrorItemNotFound",
          value: n.value,
        });
      var r = o(
        "WASmaxInPreKeysIQErrorFallbackClientMixin",
      ).parseIQErrorFallbackClientMixin(e);
      return r.success
        ? o("WAResultOrError").makeResult({
            name: "IQErrorFallbackClient",
            value: r.value,
          })
        : o("WASmaxParseUtils").errorMixinDisjunction(
            e,
            [
              "IQErrorNotAcceptable",
              "IQErrorItemNotFound",
              "IQErrorFallbackClient",
            ],
            [t, n, r],
          );
    }
    l.parseRequestErrorsFetchDigest = e;
  },
  98,
);
