__d(
  "WASmaxOutStatusPublishAvatarStickerTypeMixin",
  ["WASmaxJsx", "WASmaxMixins"],
  function (t, n, r, o, a, i, l) {
    function e() {
      var e = o("WASmaxJsx").smax("enc", { sticker_type: "avatar" });
      return e;
    }
    function s(t) {
      var n = e();
      return o("WASmaxMixins").mergeStanzas(t, n);
    }
    l.mergeAvatarStickerTypeMixin = s;
  },
  98,
);
