__d(
  "WASmaxOutNewslettersGetNewsletterMessageUpdatesRequest",
  [
    "WASmaxAttrs",
    "WASmaxJsx",
    "WASmaxOutNewslettersMessageUpdatesBeforeOrAfterMixinMixinGroup",
    "WASmaxOutNewslettersNewsletterIQGetRequestMixin",
    "WAWap",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.messageUpdatesCount,
        n = e.messageUpdatesSince,
        r = e.messageUpdatesBeforeOrAfterMixinMixinGroupArgs,
        a = o(
          "WASmaxOutNewslettersNewsletterIQGetRequestMixin",
        ).mergeNewsletterIQGetRequestMixin(
          o("WASmaxJsx").smax(
            "iq",
            null,
            o(
              "WASmaxOutNewslettersMessageUpdatesBeforeOrAfterMixinMixinGroup",
            ).mergeMessageUpdatesBeforeOrAfterMixinMixinGroup(
              o("WASmaxJsx").smax("message_updates", {
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
    l.makeGetNewsletterMessageUpdatesRequest = e;
  },
  98,
);
