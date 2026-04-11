__d(
  "WASmaxOutMessagePublishNewsletterRevokeMixin",
  [
    "WASmaxJsx",
    "WASmaxMixins",
    "WASmaxOutMessagePublishAdminRevokeMixin",
    "WASmaxOutMessagePublishContentTypeTextMixin",
    "WASmaxOutMessagePublishWAMOSubMixin",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.hasWAMOSub,
        n = o("WASmaxMixins").optionalMerge(
          o("WASmaxOutMessagePublishWAMOSubMixin").mergeWAMOSubMixin,
          o(
            "WASmaxOutMessagePublishContentTypeTextMixin",
          ).mergeContentTypeTextMixin(
            o("WASmaxOutMessagePublishAdminRevokeMixin").mergeAdminRevokeMixin(
              o("WASmaxJsx").smax(
                "message",
                null,
                o("WASmaxJsx").smax("plaintext", null),
              ),
            ),
          ),
          t,
        );
      return n;
    }
    function s(t, n) {
      var r = e(n);
      return o("WASmaxMixins").mergeStanzas(t, r);
    }
    l.mergeNewsletterRevokeMixin = s;
  },
  98,
);
