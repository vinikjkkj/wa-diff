__d(
  "WASmaxInBlocklistsServerErrors",
  [
    "WAResultOrError",
    "WASmaxInBlocklistsIQErrorFeatureNotImplementedMixin",
    "WASmaxInBlocklistsIQErrorInternalServerErrorMixin",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o(
        "WASmaxInBlocklistsIQErrorFeatureNotImplementedMixin",
      ).parseIQErrorFeatureNotImplementedMixin(e);
      if (t.success)
        return o("WAResultOrError").makeResult({
          name: "IQErrorFeatureNotImplemented",
          value: t.value,
        });
      var n = o(
        "WASmaxInBlocklistsIQErrorInternalServerErrorMixin",
      ).parseIQErrorInternalServerErrorMixin(e);
      return n.success
        ? o("WAResultOrError").makeResult({
            name: "IQErrorInternalServerError",
            value: n.value,
          })
        : o("WASmaxParseUtils").errorMixinDisjunction(
            e,
            ["IQErrorFeatureNotImplemented", "IQErrorInternalServerError"],
            [t, n],
          );
    }
    l.parseServerErrors = e;
  },
  98,
);
