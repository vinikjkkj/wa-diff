__d(
  "WASmaxOutStatusPublishStatusNewsletterMediaPublishMixin",
  [
    "WASmaxAttrs",
    "WASmaxJsx",
    "WASmaxMixins",
    "WASmaxOutStatusPublishStatusNewsletterMediaMixin",
    "WAWap",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.statusMediaId,
        n = o(
          "WASmaxOutStatusPublishStatusNewsletterMediaMixin",
        ).mergeStatusNewsletterMediaMixin(
          o("WASmaxJsx").smax("status", {
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
    l.mergeStatusNewsletterMediaPublishMixin = s;
  },
  98,
);
