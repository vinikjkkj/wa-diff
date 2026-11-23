__d(
  "WASmaxOutMessagePublishHsmMixin",
  [
    "WASmaxAttrs",
    "WASmaxJsx",
    "WASmaxMixins",
    "WASmaxOutMessagePublishCapabilitiesMixin",
    "WASmaxOutMessagePublishHSMReviewMetadataMixin",
    "WASmaxOutMessagePublishQualityTokenMixin",
    "WAWap",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t,
        n = e.messageTtl,
        r = e.hasHsmV1,
        a = e.hasHsmButtons1,
        i = e.hsmObjective,
        l = e.hSMReviewMetadataMixinArgs,
        s = e.capabilitiesMixinArgs,
        u = e.qualityTokenMixinArgs,
        c = o("WASmaxJsx").smax(
          "message",
          { ttl: (t = o("WASmaxAttrs")).OPTIONAL(o("WAWap").INT, n) },
          o("WASmaxMixins").optionalMerge(
            o("WASmaxOutMessagePublishQualityTokenMixin")
              .mergeQualityTokenMixin,
            o("WASmaxMixins").optionalMerge(
              o("WASmaxOutMessagePublishCapabilitiesMixin")
                .mergeCapabilitiesMixin,
              o(
                "WASmaxOutMessagePublishHSMReviewMetadataMixin",
              ).mergeHSMReviewMetadataMixin(
                o("WASmaxJsx").smax("hsm", {
                  v: t.OPTIONAL_LITERAL("1", r),
                  buttons: t.OPTIONAL_LITERAL("1", a),
                  objective: t.OPTIONAL(o("WAWap").CUSTOM_STRING, i),
                }),
                l,
              ),
              s,
            ),
            u,
          ),
        );
      return c;
    }
    function s(t, n) {
      var r = e(n);
      return o("WASmaxMixins").mergeStanzas(t, r);
    }
    l.mergeHsmMixin = s;
  },
  98,
);
