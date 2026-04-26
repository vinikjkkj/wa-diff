__d(
  "WASmaxOutWaffleGenerateWAEntACUserRequest",
  [
    "WASmaxJsx",
    "WASmaxOutWaffleBaseIQGetRequestMixin",
    "WASmaxOutWaffleRSAEncryptionMetadataMixin",
    "WAWap",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t,
        n,
        r = e.rSAEncryptionMetadataMixinArgs,
        a = e.timestampElementValue,
        i = e.disclosureId,
        l = e.disclosureVersion,
        s = e.disclosureLg,
        u = e.disclosureLc,
        c = o(
          "WASmaxOutWaffleBaseIQGetRequestMixin",
        ).mergeBaseIQGetRequestMixin(
          (t = o("WASmaxJsx")).smax(
            "iq",
            {
              xmlns: "waffle",
              smax_id: (n = o("WAWap")).INT(37),
              to: n.S_WHATSAPP_NET,
            },
            o(
              "WASmaxOutWaffleRSAEncryptionMetadataMixin",
            ).mergeRSAEncryptionMetadataMixin(
              t.smax("encryption_metadata", null),
              r,
            ),
            t.smax("timestamp", null, n.INT(a)),
            t.smax("disclosure", {
              id: n.INT(i),
              version: n.CUSTOM_STRING(l),
              lg: n.CUSTOM_STRING(s),
              lc: n.CUSTOM_STRING(u),
            }),
          ),
        );
      return c;
    }
    l.makeGenerateWAEntACUserRequest = e;
  },
  98,
);
