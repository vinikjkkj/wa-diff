__d(
  "WASmaxOutStatusPublishEncTypeSenderKeyEmptyMixin",
  ["WASmaxJsx", "WASmaxMixins", "WASmaxOutStatusPublishEncTypeSkmsgMixin"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.encElementValue,
        n = o("WASmaxOutStatusPublishEncTypeSkmsgMixin").mergeEncTypeSkmsgMixin(
          o("WASmaxJsx").smax("enc", null, t),
        );
      return n;
    }
    function s(t, n) {
      var r = e(n);
      return o("WASmaxMixins").mergeStanzas(t, r);
    }
    l.mergeEncTypeSenderKeyEmptyMixin = s;
  },
  98,
);
