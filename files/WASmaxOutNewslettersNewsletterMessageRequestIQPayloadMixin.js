__d(
  "WASmaxOutNewslettersNewsletterMessageRequestIQPayloadMixin",
  [
    "WASmaxJsx",
    "WASmaxMixins",
    "WASmaxOutNewslettersNewsletterMessageRequestPayloadMixin",
    "WASmaxOutNewslettersQueryNewsletterParamsMixin",
    "WASmaxOutNewslettersSelfIQGetRequestMixin",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.queryNewsletterParamsMixinArgs,
        n = e.newsletterMessageRequestPayloadMixinArgs,
        r = o(
          "WASmaxOutNewslettersSelfIQGetRequestMixin",
        ).mergeSelfIQGetRequestMixin(
          o("WASmaxJsx").smax(
            "iq",
            null,
            o(
              "WASmaxOutNewslettersNewsletterMessageRequestPayloadMixin",
            ).mergeNewsletterMessageRequestPayloadMixin(
              o(
                "WASmaxOutNewslettersQueryNewsletterParamsMixin",
              ).mergeQueryNewsletterParamsMixin(
                o("WASmaxJsx").smax("messages", null),
                t,
              ),
              n,
            ),
          ),
        );
      return r;
    }
    function s(t, n) {
      var r = e(n);
      return o("WASmaxMixins").mergeStanzas(t, r);
    }
    l.mergeNewsletterMessageRequestIQPayloadMixin = s;
  },
  98,
);
