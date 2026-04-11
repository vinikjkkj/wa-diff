__d(
  "WASmaxInGroupsServerErrors",
  [
    "WAResultOrError",
    "WASmaxInGroupsIQErrorFallbackServerMixin",
    "WASmaxInGroupsIQErrorInternalServerErrorMixin",
    "WASmaxInGroupsIQErrorPartialServerErrorMixin",
    "WASmaxInGroupsIQErrorServiceUnavailableMixin",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o(
        "WASmaxInGroupsIQErrorInternalServerErrorMixin",
      ).parseIQErrorInternalServerErrorMixin(e);
      if (t.success)
        return o("WAResultOrError").makeResult({
          name: "IQErrorInternalServerError",
          value: t.value,
        });
      var n = o(
        "WASmaxInGroupsIQErrorServiceUnavailableMixin",
      ).parseIQErrorServiceUnavailableMixin(e);
      if (n.success)
        return o("WAResultOrError").makeResult({
          name: "IQErrorServiceUnavailable",
          value: n.value,
        });
      var r = o(
        "WASmaxInGroupsIQErrorPartialServerErrorMixin",
      ).parseIQErrorPartialServerErrorMixin(e);
      if (r.success)
        return o("WAResultOrError").makeResult({
          name: "IQErrorPartialServerError",
          value: r.value,
        });
      var a = o(
        "WASmaxInGroupsIQErrorFallbackServerMixin",
      ).parseIQErrorFallbackServerMixin(e);
      return a.success
        ? o("WAResultOrError").makeResult({
            name: "IQErrorFallbackServer",
            value: a.value,
          })
        : o("WASmaxParseUtils").errorMixinDisjunction(
            e,
            [
              "IQErrorInternalServerError",
              "IQErrorServiceUnavailable",
              "IQErrorPartialServerError",
              "IQErrorFallbackServer",
            ],
            [t, n, r, a],
          );
    }
    l.parseServerErrors = e;
  },
  98,
);
