__d(
  "WASmaxOutStatusPublishStatusNewsletterRevokeMixin",
  [
    "WASmaxJsx",
    "WASmaxMixins",
    "WASmaxOutStatusPublishStatusAdminRevokeMixin",
    "WASmaxOutStatusPublishStatusContentTypeTextMixin",
  ],
  function (t, n, r, o, a, i, l) {
    function e() {
      var e = o(
        "WASmaxOutStatusPublishStatusContentTypeTextMixin",
      ).mergeStatusContentTypeTextMixin(
        o(
          "WASmaxOutStatusPublishStatusAdminRevokeMixin",
        ).mergeStatusAdminRevokeMixin(
          o("WASmaxJsx").smax(
            "status",
            null,
            o("WASmaxJsx").smax("plaintext", null),
          ),
        ),
      );
      return e;
    }
    function s(t) {
      var n = e();
      return o("WASmaxMixins").mergeStanzas(t, n);
    }
    l.mergeStatusNewsletterRevokeMixin = s;
  },
  98,
);
