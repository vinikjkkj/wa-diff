__d(
  "WASmaxOutStatusPublishStatusSenderKeyBucketingModeMixin",
  ["WASmaxJsx", "WASmaxMixins", "WAWap"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.statusBucketing,
        n = o("WASmaxJsx").smax("status", {
          bucketing: o("WAWap").CUSTOM_STRING(t),
        });
      return n;
    }
    function s(t, n) {
      var r = e(n);
      return o("WASmaxMixins").mergeStanzas(t, r);
    }
    l.mergeStatusSenderKeyBucketingModeMixin = s;
  },
  98,
);
