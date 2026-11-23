__d(
  "WASmaxOutMessagePublishEncTypeIndividualMixin",
  [
    "WASmaxJsx",
    "WASmaxMixins",
    "WASmaxOutMessagePublishEncMediaTypeOrListMixinGroup",
    "WASmaxOutMessagePublishEncPayloadMixin",
    "WASmaxOutMessagePublishEncStateOrSessionTypeMixinGroup",
    "WAWap",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.encType,
        n = e.encStateOrSessionTypeMixinGroupArgs,
        r = e.encMediaTypeOrListMixinGroupArgs,
        a = o("WASmaxMixins").optionalMerge(
          o("WASmaxOutMessagePublishEncMediaTypeOrListMixinGroup")
            .mergeEncMediaTypeOrListMixinGroup,
          o("WASmaxMixins").optionalMerge(
            o("WASmaxOutMessagePublishEncStateOrSessionTypeMixinGroup")
              .mergeEncStateOrSessionTypeMixinGroup,
            o("WASmaxOutMessagePublishEncPayloadMixin").mergeEncPayloadMixin(
              o("WASmaxJsx").smax("enc", { type: o("WAWap").CUSTOM_STRING(t) }),
              e,
            ),
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
    l.mergeEncTypeIndividualMixin = s;
  },
  98,
);
