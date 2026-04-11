__d(
  "WASmaxOutStatusPublishPostNewsletterStatusClientIDMixin",
  [
    "WASmaxJsx",
    "WASmaxMixins",
    "WASmaxOutStatusPublishNewsletterClientIdContent",
    "WAWap",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.statusId,
        n = e.newsletterClientIdContentArgs,
        r = o(
          "WASmaxOutStatusPublishNewsletterClientIdContent",
        ).mergeNewsletterClientIdContent(
          o("WASmaxJsx").smax("status", { id: o("WAWap").STANZA_ID(t) }),
          n,
        );
      return r;
    }
    function s(t, n) {
      var r = e(n);
      return o("WASmaxMixins").mergeStanzas(t, r);
    }
    l.mergePostNewsletterStatusClientIDMixin = s;
  },
  98,
);
