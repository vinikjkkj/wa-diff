__d(
  "WASmaxInPreKeysServerErrors",
  [
    "WAResultOrError",
    "WASmaxInPreKeysIQErrorFallbackServerMixin",
    "WASmaxInPreKeysIQErrorServiceUnavailableMixin",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o(
        "WASmaxInPreKeysIQErrorServiceUnavailableMixin",
      ).parseIQErrorServiceUnavailableMixin(e);
      if (t.success)
        return o("WAResultOrError").makeResult({
          name: "IQErrorServiceUnavailable",
          value: t.value,
        });
      var n = o(
        "WASmaxInPreKeysIQErrorFallbackServerMixin",
      ).parseIQErrorFallbackServerMixin(e);
      return n.success
        ? o("WAResultOrError").makeResult({
            name: "IQErrorFallbackServer",
            value: n.value,
          })
        : o("WASmaxParseUtils").errorMixinDisjunction(
            e,
            ["IQErrorServiceUnavailable", "IQErrorFallbackServer"],
            [t, n],
          );
    }
    l.parseServerErrors = e;
  },
  98,
);
