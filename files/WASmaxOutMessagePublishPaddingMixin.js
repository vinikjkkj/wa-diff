__d(
  "WASmaxOutMessagePublishPaddingMixin",
  [
    "WASmaxJsx",
    "WASmaxMixins",
    "WASmaxOutMessagePublishAnonPaddingMixin",
    "WASmaxOutMessagePublishWireSizePaddingMixin",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.anonPaddingMixinArgs,
        n = e.wireSizePaddingMixinArgs,
        r = o("WASmaxMixins").optionalMerge(
          o("WASmaxOutMessagePublishWireSizePaddingMixin")
            .mergeWireSizePaddingMixin,
          o("WASmaxMixins").optionalMerge(
            o("WASmaxOutMessagePublishAnonPaddingMixin").mergeAnonPaddingMixin,
            o("WASmaxJsx").smax("message", null),
            t,
          ),
          n,
        );
      return r;
    }
    function s(t, n) {
      var r = e(n);
      return o("WASmaxMixins").mergeStanzas(t, r);
    }
    l.mergePaddingMixin = s;
  },
  98,
);
