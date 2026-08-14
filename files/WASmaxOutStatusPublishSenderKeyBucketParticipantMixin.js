__d(
  "WASmaxOutStatusPublishSenderKeyBucketParticipantMixin",
  ["WASmaxJsx", "WASmaxMixins", "WAWap"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.toBucket,
        n = o("WASmaxJsx").smax("to", { bucket: o("WAWap").CUSTOM_STRING(t) });
      return n;
    }
    function s(t, n) {
      var r = e(n);
      return o("WASmaxMixins").mergeStanzas(t, r);
    }
    l.mergeSenderKeyBucketParticipantMixin = s;
  },
  98,
);
