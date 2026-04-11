__d(
  "WASmaxOutSpamRawMixins",
  [
    "WASmaxMixinGroupExhaustiveError",
    "WASmaxOutSpamRawV2Mixin",
    "WASmaxOutSpamRawV3Mixin",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      if (t.isRawV2) return o("WASmaxOutSpamRawV2Mixin").mergeRawV2Mixin(e);
      if (t.rawV3)
        return o("WASmaxOutSpamRawV3Mixin").mergeRawV3Mixin(e, t.rawV3);
      throw new (o(
        "WASmaxMixinGroupExhaustiveError",
      ).SmaxMixinGroupExhaustiveError)();
    }
    l.mergeRawMixins = e;
  },
  98,
);
