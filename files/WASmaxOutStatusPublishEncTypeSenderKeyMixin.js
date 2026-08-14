__d(
  "WASmaxOutStatusPublishEncTypeSenderKeyMixin",
  [
    "WASmaxJsx",
    "WASmaxMixins",
    "WASmaxOutStatusPublishEncPayloadMixin",
    "WASmaxOutStatusPublishEncSenderKeyBucketMixin",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.encSenderKeyBucketMixinArgs,
        n = o("WASmaxOutStatusPublishEncPayloadMixin").mergeEncPayloadMixin(
          o("WASmaxMixins").optionalMerge(
            o("WASmaxOutStatusPublishEncSenderKeyBucketMixin")
              .mergeEncSenderKeyBucketMixin,
            o("WASmaxJsx").smax("enc", { type: "skmsg" }),
            t,
          ),
          e,
        );
      return n;
    }
    function s(t, n) {
      var r = e(n);
      return o("WASmaxMixins").mergeStanzas(t, r);
    }
    l.mergeEncTypeSenderKeyMixin = s;
  },
  98,
);
