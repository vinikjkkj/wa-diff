__d(
  "WASmaxOutMessagePublishContentTypeMediaSingleMixin",
  [
    "WASmaxJsx",
    "WASmaxMixins",
    "WASmaxOutMessagePublishContentTypeMediaOrMedianotifyMixinGroup",
    "WASmaxOutMessagePublishEncMediaTypeEncMediaTypeOrEncMediaTypeDeprecatedMixinGroup",
    "WASmaxOutMessagePublishSenderContentBindingMixin",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.senderContentBindingMixinArgs,
        n = e.contentTypeMediaOrMedianotifyMixinGroupArgs,
        r = e.encMediaTypeEncMediaTypeOrEncMediaTypeDeprecatedMixinGroupArgs,
        a = o(
          "WASmaxOutMessagePublishContentTypeMediaOrMedianotifyMixinGroup",
        ).mergeContentTypeMediaOrMedianotifyMixinGroup(
          o("WASmaxMixins").optionalMerge(
            o("WASmaxOutMessagePublishSenderContentBindingMixin")
              .mergeSenderContentBindingMixin,
            o("WASmaxJsx").smax(
              "message",
              null,
              o(
                "WASmaxOutMessagePublishEncMediaTypeEncMediaTypeOrEncMediaTypeDeprecatedMixinGroup",
              ).mergeEncMediaTypeEncMediaTypeOrEncMediaTypeDeprecatedMixinGroup(
                o("WASmaxJsx").smax("enc", null),
                r,
              ),
            ),
            t,
          ),
          n,
        );
      return a;
    }
    function s(t, n) {
      var r = e(n);
      return o("WASmaxMixins").mergeStanzas(t, r);
    }
    l.mergeContentTypeMediaSingleMixin = s;
  },
  98,
);
