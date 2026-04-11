__d(
  "WASmaxInGroupsNamedSubjectOrUnnamedSubjectFallbackMixinGroup",
  [
    "WAResultOrError",
    "WASmaxInGroupsNamedSubjectMixin",
    "WASmaxInGroupsUnnamedSubjectFallbackMixin",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxInGroupsNamedSubjectMixin").parseNamedSubjectMixin(e);
      if (t.success)
        return o("WAResultOrError").makeResult({
          name: "NamedSubject",
          value: t.value,
        });
      var n = o(
        "WASmaxInGroupsUnnamedSubjectFallbackMixin",
      ).parseUnnamedSubjectFallbackMixin(e);
      return n.success
        ? o("WAResultOrError").makeResult({
            name: "UnnamedSubjectFallback",
            value: n.value,
          })
        : o("WASmaxParseUtils").errorMixinDisjunction(
            e,
            ["NamedSubject", "UnnamedSubjectFallback"],
            [t, n],
          );
    }
    l.parseNamedSubjectOrUnnamedSubjectFallbackMixinGroup = e;
  },
  98,
);
