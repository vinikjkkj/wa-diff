__d(
  "WASmaxOutStatusPublishStatusNewsletterReactionMixin",
  [
    "WASmaxJsx",
    "WASmaxMixins",
    "WASmaxOutStatusPublishStatusContentTypeReactionMixin",
    "WAWap",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.reactionCode,
        n = o(
          "WASmaxOutStatusPublishStatusContentTypeReactionMixin",
        ).mergeStatusContentTypeReactionMixin(
          o("WASmaxJsx").smax(
            "status",
            null,
            o("WASmaxJsx").smax("reaction", {
              code: o("WAWap").CUSTOM_STRING(t),
            }),
          ),
        );
      return n;
    }
    function s(t, n) {
      var r = e(n);
      return o("WASmaxMixins").mergeStanzas(t, r);
    }
    l.mergeStatusNewsletterReactionMixin = s;
  },
  98,
);
