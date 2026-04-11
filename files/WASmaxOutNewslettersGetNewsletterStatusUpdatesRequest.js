__d(
  "WASmaxOutNewslettersGetNewsletterStatusUpdatesRequest",
  [
    "WASmaxAttrs",
    "WASmaxJsx",
    "WASmaxOutNewslettersNewsletterIQGetRequestMixin",
    "WASmaxOutNewslettersStatusUpdatesBeforeOrAfterMixinMixinGroup",
    "WAWap",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.statusUpdatesCount,
        n = e.statusUpdatesSince,
        r = e.statusUpdatesBeforeOrAfterMixinMixinGroupArgs,
        a = o(
          "WASmaxOutNewslettersNewsletterIQGetRequestMixin",
        ).mergeNewsletterIQGetRequestMixin(
          o("WASmaxJsx").smax(
            "iq",
            null,
            o(
              "WASmaxOutNewslettersStatusUpdatesBeforeOrAfterMixinMixinGroup",
            ).mergeStatusUpdatesBeforeOrAfterMixinMixinGroup(
              o("WASmaxJsx").smax("status_updates", {
                count: o("WAWap").INT(t),
                since: o("WASmaxAttrs").OPTIONAL(o("WAWap").INT, n),
              }),
              r,
            ),
          ),
          e,
        );
      return a;
    }
    l.makeGetNewsletterStatusUpdatesRequest = e;
  },
  98,
);
