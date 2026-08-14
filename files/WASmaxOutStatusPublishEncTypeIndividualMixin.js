__d(
  "WASmaxOutStatusPublishEncTypeIndividualMixin",
  [
    "WASmaxJsx",
    "WASmaxMixins",
    "WASmaxOutStatusPublishEncMediaTypeMixin",
    "WASmaxOutStatusPublishEncPayloadMixin",
    "WASmaxOutStatusPublishEncStateOrSessionTypeMixinGroup",
    "WAWap",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.encType,
        n = e.encMediaTypeMixinArgs,
        r = e.encStateOrSessionTypeMixinGroupArgs,
        a = o("WASmaxMixins").optionalMerge(
          o("WASmaxOutStatusPublishEncStateOrSessionTypeMixinGroup")
            .mergeEncStateOrSessionTypeMixinGroup,
          o("WASmaxOutStatusPublishEncPayloadMixin").mergeEncPayloadMixin(
            o("WASmaxMixins").optionalMerge(
              o("WASmaxOutStatusPublishEncMediaTypeMixin")
                .mergeEncMediaTypeMixin,
              o("WASmaxJsx").smax("enc", { type: o("WAWap").CUSTOM_STRING(t) }),
              n,
            ),
            e,
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
