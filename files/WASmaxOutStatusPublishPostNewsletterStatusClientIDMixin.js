__d(
  "WASmaxOutStatusPublishPostNewsletterStatusClientIDMixin",
  [
    "WASmaxJsx",
    "WASmaxMixins",
    "WASmaxOutStatusPublishNewsletterClientIdContent",
    "WASmaxOutStatusPublishStatusAIContentMetaMixin",
    "WAWap",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.statusId,
        n = e.hasStatusAIContentMeta,
        r = e.newsletterClientIdContentArgs,
        a = o(
          "WASmaxOutStatusPublishNewsletterClientIdContent",
        ).mergeNewsletterClientIdContent(
          o("WASmaxMixins").optionalMerge(
            o("WASmaxOutStatusPublishStatusAIContentMetaMixin")
              .mergeStatusAIContentMetaMixin,
            o("WASmaxJsx").smax("status", { id: o("WAWap").STANZA_ID(t) }),
            n,
          ),
          r,
        );
      return a;
    }
    function s(t, n) {
      var r = e(n);
      return o("WASmaxMixins").mergeStanzas(t, r);
    }
    l.mergePostNewsletterStatusClientIDMixin = s;
  },
  98,
);
