__d(
  "WASmaxOutStatusPublishPostNewsletterStatusClientAndServerIDMixin",
  [
    "WASmaxJsx",
    "WASmaxMixins",
    "WASmaxOutStatusPublishStatusNewsletterReactionStatusNewsletterReactionOrStatusNewsletterReactionRevokeMixinGroup",
    "WAWap",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.statusId,
        n = e.statusServerId,
        r =
          e.statusNewsletterReactionStatusNewsletterReactionOrStatusNewsletterReactionRevokeMixinGroupArgs,
        a = o(
          "WASmaxOutStatusPublishStatusNewsletterReactionStatusNewsletterReactionOrStatusNewsletterReactionRevokeMixinGroup",
        ).mergeStatusNewsletterReactionStatusNewsletterReactionOrStatusNewsletterReactionRevokeMixinGroup(
          o("WASmaxJsx").smax("status", {
            id: o("WAWap").STANZA_ID(t),
            server_id: o("WAWap").INT(n),
          }),
          r,
        );
      return a;
    }
    function s(t, n) {
      var r = e(n);
      return o("WASmaxMixins").mergeStanzas(t, r);
    }
    l.mergePostNewsletterStatusClientAndServerIDMixin = s;
  },
  98,
);
