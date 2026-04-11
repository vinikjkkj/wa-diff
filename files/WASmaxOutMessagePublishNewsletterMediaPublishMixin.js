__d(
  "WASmaxOutMessagePublishNewsletterMediaPublishMixin",
  [
    "WASmaxAttrs",
    "WASmaxJsx",
    "WASmaxMixins",
    "WASmaxOutMessagePublishNewsletterMediaMixin",
    "WAWap",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.messageMediaId,
        n = o(
          "WASmaxOutMessagePublishNewsletterMediaMixin",
        ).mergeNewsletterMediaMixin(
          o("WASmaxJsx").smax("message", {
            media_id: o("WASmaxAttrs").OPTIONAL(o("WAWap").CUSTOM_STRING, t),
          }),
          e,
        );
      return n;
    }
    function s(t, n) {
      var r = e(n);
      return o("WASmaxMixins").mergeStanzas(t, r);
    }
    l.mergeNewsletterMediaPublishMixin = s;
  },
  98,
);
