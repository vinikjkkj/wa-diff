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
        n,
        r = e.featuresMetaVerified,
        a = e.featuresMarketingMessages,
        i = e.featuresGenai,
        l = e.featuresGenaiImage,
        s = e.featuresMetaOne,
        u = e.featuresBbPro,
        c = o(
          "WASmaxOutBizMarketingMessageHackBaseIQGetRequestMixin",
        ).mergeHackBaseIQGetRequestMixin(
          o("WASmaxJsx").smax(
            "iq",
            { xmlns: "w:biz", smax_id: (t = o("WAWap")).INT(139) },
            o("WASmaxJsx").smax("features", {
              meta_verified: (n = o("WASmaxAttrs")).OPTIONAL(
                t.CUSTOM_STRING,
                r,
              ),
              marketing_messages: n.OPTIONAL(t.CUSTOM_STRING, a),
              genai: n.OPTIONAL(t.CUSTOM_STRING, i),
              genai_image: n.OPTIONAL(t.CUSTOM_STRING, l),
              meta_one: n.OPTIONAL(t.CUSTOM_STRING, s),
              bb_pro: n.OPTIONAL(t.CUSTOM_STRING, u),
            }),
          ),
          e,
        );
      return c;
    }
    l.makeGetBusinessEligibilityRequest = e;
  },
  98,
);
