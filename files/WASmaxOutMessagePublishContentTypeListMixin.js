__d(
  "WASmaxOutMessagePublishContentTypeListMixin",
  [
    "WASmaxJsx",
    "WASmaxMixins",
    "WASmaxOutMessagePublishContentTypeMediaMixin",
    "WASmaxOutMessagePublishEncListMixin",
    "WASmaxOutMessagePublishSingleSelectOrProductListMixinGroup",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.singleSelectOrProductListMixinGroupArgs,
        n = o("WASmaxMixins").optionalMerge(
          o("WASmaxOutMessagePublishSingleSelectOrProductListMixinGroup")
            .mergeSingleSelectOrProductListMixinGroup,
          o(
            "WASmaxOutMessagePublishContentTypeMediaMixin",
          ).mergeContentTypeMediaMixin(
            o("WASmaxJsx").smax(
              "message",
              null,
              o("WASmaxOutMessagePublishEncListMixin").mergeEncListMixin(
                o("WASmaxJsx").smax("enc", null),
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
    l.mergeContentTypeListMixin = s;
  },
  98,
);
