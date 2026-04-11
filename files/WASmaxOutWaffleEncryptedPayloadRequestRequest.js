__d(
  "WASmaxOutWaffleEncryptedPayloadRequestRequest",
  [
    "WASmaxJsx",
    "WASmaxOutWaffleBaseIQGetRequestMixin",
    "WASmaxOutWaffleRSAEncryptionMetadataMixin",
    "WAWap",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t,
        n = e.rSAEncryptionMetadataMixinArgs,
        r = e.timestampElementValue,
        a = e.fbidElementValue,
        i = e.actionElementValue,
        l = o(
          "WASmaxOutWaffleBaseIQGetRequestMixin",
        ).mergeBaseIQGetRequestMixin(
          (t = o("WASmaxJsx")).smax(
            "iq",
            {
              xmlns: "waffle",
              smax_id: o("WAWap").INT(47),
              to: o("WAWap").S_WHATSAPP_NET,
            },
            o(
              "WASmaxOutWaffleRSAEncryptionMetadataMixin",
            ).mergeRSAEncryptionMetadataMixin(
              t.smax("encryption_metadata", null),
              n,
            ),
            t.smax("timestamp", null, o("WAWap").INT(r)),
            t.smax("fbid", null, a),
            t.smax("action", null, i),
          ),
        );
      return l;
    }
    l.makeEncryptedPayloadRequestRequest = e;
  },
  98,
);
