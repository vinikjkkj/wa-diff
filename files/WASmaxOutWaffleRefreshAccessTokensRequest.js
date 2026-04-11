__d(
  "WASmaxOutWaffleRefreshAccessTokensRequest",
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
        i = o(
          "WASmaxOutWaffleBaseIQGetRequestMixin",
        ).mergeBaseIQGetRequestMixin(
          (t = o("WASmaxJsx")).smax(
            "iq",
            {
              xmlns: "waffle",
              smax_id: o("WAWap").INT(46),
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
          ),
        );
      return i;
    }
    l.makeRefreshAccessTokensRequest = e;
  },
  98,
);
