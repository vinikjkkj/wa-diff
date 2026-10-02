__d(
  "WASmaxOutKeyTransparencyLabelOrUserLabelLabelMixinGroup",
  [
    "WASmaxMixinGroupExhaustiveError",
    "WASmaxOutKeyTransparencyLabelMixin",
    "WASmaxOutKeyTransparencyUserLabelMixin",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      if (t.label)
        return o("WASmaxOutKeyTransparencyLabelMixin").mergeLabelMixin(
          e,
          t.label,
        );
      if (t.userLabel)
        return o("WASmaxOutKeyTransparencyUserLabelMixin").mergeUserLabelMixin(
          e,
          t.userLabel,
        );
      throw new (o(
        "WASmaxMixinGroupExhaustiveError",
      ).SmaxMixinGroupExhaustiveError)();
    }
    l.mergeLabelOrUserLabelLabelMixinGroup = e;
  },
  98,
);
