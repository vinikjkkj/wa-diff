__d(
  "WASmaxOutStatusPublishStatusNewsletterReactionRevokeMixin",
  [
    "WASmaxJsx",
    "WASmaxMixins",
    "WASmaxOutStatusPublishStatusContentTypeReactionMixin",
    "WASmaxOutStatusPublishStatusRevokeMixin",
  ],
  function (t, n, r, o, a, i, l) {
    function e() {
      var e = o(
        "WASmaxOutStatusPublishStatusContentTypeReactionMixin",
      ).mergeStatusContentTypeReactionMixin(
        o("WASmaxOutStatusPublishStatusRevokeMixin").mergeStatusRevokeMixin(
          o("WASmaxJsx").smax(
            "status",
            null,
            o("WASmaxJsx").smax("reaction", null),
          ),
        ),
      );
      return e;
    }
    function s(t) {
      var n = e();
      return o("WASmaxMixins").mergeStanzas(t, n);
    }
    l.mergeStatusNewsletterReactionRevokeMixin = s;
  },
  98,
);
