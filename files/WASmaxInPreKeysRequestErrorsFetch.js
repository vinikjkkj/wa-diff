__d(
  "WASmaxInPreKeysRequestErrorsFetch",
  [
    "WAResultOrError",
    "WASmaxInPreKeysIQErrorBadRequestMixin",
    "WASmaxInPreKeysIQErrorFallbackClientMixin",
    "WASmaxInPreKeysIQErrorNoValidJIDMixin",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o(
        "WASmaxInPreKeysIQErrorBadRequestMixin",
      ).parseIQErrorBadRequestMixin(e);
      if (t.success)
        return o("WAResultOrError").makeResult({
          name: "IQErrorBadRequest",
          value: t.value,
        });
      var n = o(
        "WASmaxInPreKeysIQErrorNoValidJIDMixin",
      ).parseIQErrorNoValidJIDMixin(e);
      if (n.success)
        return o("WAResultOrError").makeResult({
          name: "IQErrorNoValidJID",
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
            ["IQErrorBadRequest", "IQErrorNoValidJID", "IQErrorFallbackClient"],
            [t, n, r],
          );
    }
    l.parseRequestErrorsFetch = e;
  },
  98,
);
