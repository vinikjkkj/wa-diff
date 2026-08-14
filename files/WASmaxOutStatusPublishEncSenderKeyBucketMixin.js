__d(
  "WASmaxOutStatusPublishEncSenderKeyBucketMixin",
  ["WASmaxJsx", "WASmaxMixins", "WAWap"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.encBucket,
        n = o("WASmaxJsx").smax("enc", { bucket: o("WAWap").CUSTOM_STRING(t) });
      return n;
    }
    function s(t, n) {
      var r = e(n);
      return o("WASmaxMixins").mergeStanzas(t, r);
    }
    l.mergeEncSenderKeyBucketMixin = s;
  },
  98,
);
