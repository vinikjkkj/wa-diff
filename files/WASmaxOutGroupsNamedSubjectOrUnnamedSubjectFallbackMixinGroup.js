__d(
  "WASmaxOutGroupsNamedSubjectOrUnnamedSubjectFallbackMixinGroup",
  [
    "WASmaxMixinGroupExhaustiveError",
    "WASmaxOutGroupsNamedSubjectMixin",
    "WASmaxOutGroupsUnnamedSubjectFallbackMixin",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      if (t.namedSubject)
        return o("WASmaxOutGroupsNamedSubjectMixin").mergeNamedSubjectMixin(
          e,
          t.namedSubject,
        );
      if (t.unnamedSubjectFallback)
        return o(
          "WASmaxOutGroupsUnnamedSubjectFallbackMixin",
        ).mergeUnnamedSubjectFallbackMixin(e, t.unnamedSubjectFallback);
      throw new (o(
        "WASmaxMixinGroupExhaustiveError",
      ).SmaxMixinGroupExhaustiveError)();
    }
    l.mergeNamedSubjectOrUnnamedSubjectFallbackMixinGroup = e;
  },
  98,
);
