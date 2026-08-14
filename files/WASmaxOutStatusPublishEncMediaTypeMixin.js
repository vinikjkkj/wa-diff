__d(
  "WASmaxOutStatusPublishEncMediaTypeMixin",
  [
    "WASmaxAttrs",
    "WASmaxJsx",
    "WASmaxMixins",
    "WASmaxOutStatusPublishAvatarStickerTypeMixin",
    "WASmaxOutStatusPublishMediaTypeMixin",
    "WAWap",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.encNativeFlowName,
        n = e.hasAvatarStickerType,
        r = o("WASmaxMixins").optionalMerge(
          o("WASmaxOutStatusPublishAvatarStickerTypeMixin")
            .mergeAvatarStickerTypeMixin,
          o("WASmaxOutStatusPublishMediaTypeMixin").mergeMediaTypeMixin(
            o("WASmaxJsx").smax("enc", {
              native_flow_name: o("WASmaxAttrs").OPTIONAL(
                o("WAWap").CUSTOM_STRING,
                t,
              ),
            }),
            e,
          ),
          n,
        );
      return r;
    }
    function s(t, n) {
      var r = e(n);
      return o("WASmaxMixins").mergeStanzas(t, r);
    }
    l.mergeEncMediaTypeMixin = s;
  },
  98,
);
