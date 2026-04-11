__d(
  "WASmaxOutNewslettersNewsletterStatusRequestIQPayloadMixin",
  [
    "WASmaxJsx",
    "WASmaxMixins",
    "WASmaxOutNewslettersNewsletterStatusRequestPayloadMixin",
    "WASmaxOutNewslettersQueryNewsletterParamsMixin",
    "WASmaxOutNewslettersSelfIQGetRequestMixin",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.queryNewsletterParamsMixinArgs,
        n = e.newsletterStatusRequestPayloadMixinArgs,
        r = o(
          "WASmaxOutNewslettersSelfIQGetRequestMixin",
        ).mergeSelfIQGetRequestMixin(
          o("WASmaxJsx").smax(
            "iq",
            null,
            o(
              "WASmaxOutNewslettersNewsletterStatusRequestPayloadMixin",
            ).mergeNewsletterStatusRequestPayloadMixin(
              o(
                "WASmaxOutNewslettersQueryNewsletterParamsMixin",
              ).mergeQueryNewsletterParamsMixin(
                o("WASmaxJsx").smax("statuses", null),
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
    l.mergeNewsletterStatusRequestIQPayloadMixin = s;
  },
  98,
);
