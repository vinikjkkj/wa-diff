__d(
  "WASmaxOutMessagePublishNewsletterRequest",
  [
    "WASmaxJsx",
    "WASmaxOutMessagePublishClientNewsletterAndServerOrNewsletterIDMixinGroup",
    "WAWap",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.messageTo,
        n = e.clientNewsletterAndServerOrNewsletterIDMixinGroupArgs,
        r = o(
          "WASmaxOutMessagePublishClientNewsletterAndServerOrNewsletterIDMixinGroup",
        ).mergeClientNewsletterAndServerOrNewsletterIDMixinGroup(
          o("WASmaxJsx").smax("message", { to: o("WAWap").JID(t) }),
          n,
        );
      return r;
    }
    l.makeNewsletterRequest = e;
  },
  98,
);
