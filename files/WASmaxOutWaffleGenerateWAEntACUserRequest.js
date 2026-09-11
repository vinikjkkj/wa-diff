__d(
  "WASmaxOutWaffleGenerateWAEntACUserRequest",
  [
    "WASmaxChildren",
    "WASmaxJsx",
    "WASmaxOutWaffleBaseIQGetRequestMixin",
    "WASmaxOutWaffleRSAEncryptionMetadataRSAEncryptionMetadataOrRSAEncryptionMetadataV2MixinGroup",
    "WAWap",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.sourceElementValue,
        n = o("WASmaxJsx").smax("source", null, o("WAWap").INT(t));
      return n;
    }
    function s(t) {
      var n,
        r,
        a = t.sourceArgs,
        i =
          t.rSAEncryptionMetadataRSAEncryptionMetadataOrRSAEncryptionMetadataV2MixinGroupArgs,
        l = t.timestampElementValue,
        s = t.disclosureId,
        u = t.disclosureVersion,
        c = t.disclosureLg,
        d = t.disclosureLc,
        m = o(
          "WASmaxOutWaffleBaseIQGetRequestMixin",
        ).mergeBaseIQGetRequestMixin(
          (n = o("WASmaxJsx")).smax(
            "iq",
            {
              xmlns: "waffle",
              smax_id: (r = o("WAWap")).INT(37),
              to: r.S_WHATSAPP_NET,
            },
            o(
              "WASmaxOutWaffleRSAEncryptionMetadataRSAEncryptionMetadataOrRSAEncryptionMetadataV2MixinGroup",
            ).mergeRSAEncryptionMetadataRSAEncryptionMetadataOrRSAEncryptionMetadataV2MixinGroup(
              n.smax("encryption_metadata", null),
              i,
            ),
            n.smax("timestamp", null, r.INT(l)),
            n.smax("disclosure", {
              id: r.INT(s),
              version: r.CUSTOM_STRING(u),
              lg: r.CUSTOM_STRING(c),
              lc: r.CUSTOM_STRING(d),
            }),
            o("WASmaxChildren").OPTIONAL_CHILD(e, a),
          ),
        );
      return m;
    }
    ((l.makeGenerateWAEntACUserRequestSource = e),
      (l.makeGenerateWAEntACUserRequest = s));
  },
  98,
);
