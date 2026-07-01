__d(
  "WASmaxInPreKeysRequestErrors",
  [
    "WAResultOrError",
    "WASmaxInPreKeysIQErrorFallbackClientMixin",
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
        "WASmaxInPreKeysIQErrorFallbackClientMixin",
      ).parseIQErrorFallbackClientMixin(e);
      return n.success
        ? o("WAResultOrError").makeResult({
            name: "IQErrorFallbackClient",
            value: n.value,
          })
        : o("WASmaxParseUtils").errorMixinDisjunction(
            e,
            ["IQErrorNotAcceptable", "IQErrorFallbackClient"],
            [t, n],
          );
    }
    l.parseRequestErrors = e;
  },
  98,
);
