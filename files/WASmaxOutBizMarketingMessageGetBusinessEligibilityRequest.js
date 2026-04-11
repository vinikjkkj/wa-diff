__d(
  "WASmaxOutBizMarketingMessageGetBusinessEligibilityRequest",
  [
    "WASmaxAttrs",
    "WASmaxJsx",
    "WASmaxOutBizMarketingMessageHackBaseIQGetRequestMixin",
    "WAWap",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t,
        n = e.featuresMetaVerified,
        r = e.featuresMarketingMessages,
        a = e.featuresGenai,
        i = o(
          "WASmaxOutBizMarketingMessageHackBaseIQGetRequestMixin",
        ).mergeHackBaseIQGetRequestMixin(
          o("WASmaxJsx").smax(
            "iq",
            { xmlns: "w:biz", smax_id: (t = o("WAWap")).INT(139) },
            o("WASmaxJsx").smax("features", {
              meta_verified: o("WASmaxAttrs").OPTIONAL(t.CUSTOM_STRING, n),
              marketing_messages: o("WASmaxAttrs").OPTIONAL(t.CUSTOM_STRING, r),
              genai: o("WASmaxAttrs").OPTIONAL(t.CUSTOM_STRING, a),
            }),
          ),
          e,
        );
      return i;
    }
    l.makeGetBusinessEligibilityRequest = e;
  },
  98,
);
