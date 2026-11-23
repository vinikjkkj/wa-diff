__d(
  "WASmaxOutMessagePublishEncMediaTypeDeprecatedMixin",
  [
    "WASmaxAttrs",
    "WASmaxJsx",
    "WASmaxMixins",
    "WASmaxOutMessagePublishAvatarStickerTypeMixin",
    "WAWap",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.encMediatype,
        n = e.encNativeFlowName,
        r = e.hasAvatarStickerType,
        a = o("WASmaxMixins").optionalMerge(
          o("WASmaxOutMessagePublishAvatarStickerTypeMixin")
            .mergeAvatarStickerTypeMixin,
          o("WASmaxJsx").smax("enc", {
            mediatype: o("WASmaxAttrs").OPTIONAL(o("WAWap").CUSTOM_STRING, t),
            native_flow_name: o("WASmaxAttrs").OPTIONAL(
              o("WAWap").CUSTOM_STRING,
              n,
            ),
          }),
          r,
        );
      return a;
    }
    function s(t, n) {
      var r = e(n);
      return o("WASmaxMixins").mergeStanzas(t, r);
    }
    l.mergeEncMediaTypeDeprecatedMixin = s;
  },
  98,
);
