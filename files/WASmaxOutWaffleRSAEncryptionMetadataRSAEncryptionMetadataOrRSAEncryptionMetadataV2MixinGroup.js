__d(
  "WASmaxOutWaffleRSAEncryptionMetadataRSAEncryptionMetadataOrRSAEncryptionMetadataV2MixinGroup",
  [
    "WASmaxMixinGroupExhaustiveError",
    "WASmaxOutWaffleRSAEncryptionMetadataMixin",
    "WASmaxOutWaffleRSAEncryptionMetadataV2Mixin",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      if (t.rSAEncryptionMetadata)
        return o(
          "WASmaxOutWaffleRSAEncryptionMetadataMixin",
        ).mergeRSAEncryptionMetadataMixin(e, t.rSAEncryptionMetadata);
      if (t.rSAEncryptionMetadataV2)
        return o(
          "WASmaxOutWaffleRSAEncryptionMetadataV2Mixin",
        ).mergeRSAEncryptionMetadataV2Mixin(e, t.rSAEncryptionMetadataV2);
      throw new (o(
        "WASmaxMixinGroupExhaustiveError",
      ).SmaxMixinGroupExhaustiveError)();
    }
    l.mergeRSAEncryptionMetadataRSAEncryptionMetadataOrRSAEncryptionMetadataV2MixinGroup =
      e;
  },
  98,
);
