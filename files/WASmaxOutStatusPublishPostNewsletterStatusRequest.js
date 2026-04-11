__d(
  "WASmaxOutStatusPublishPostNewsletterStatusRequest",
  [
    "WASmaxJsx",
    "WASmaxOutStatusPublishClientPostNewsletterStatusAndServerOrPostNewsletterStatusIDMixinGroup",
    "WAWap",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.statusTo,
        n =
          e.clientPostNewsletterStatusAndServerOrPostNewsletterStatusIDMixinGroupArgs,
        r = o(
          "WASmaxOutStatusPublishClientPostNewsletterStatusAndServerOrPostNewsletterStatusIDMixinGroup",
        ).mergeClientPostNewsletterStatusAndServerOrPostNewsletterStatusIDMixinGroup(
          o("WASmaxJsx").smax("status", { to: o("WAWap").JID(t) }),
          n,
        );
      return r;
    }
    l.makePostNewsletterStatusRequest = e;
  },
  98,
);
