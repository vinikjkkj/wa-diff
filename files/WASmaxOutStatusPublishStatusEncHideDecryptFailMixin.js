__d(
  "WASmaxOutStatusPublishStatusEncHideDecryptFailMixin",
  ["WASmaxJsx", "WASmaxMixins"],
  function (t, n, r, o, a, i, l) {
    function e() {
      var e = o("WASmaxJsx").smax("enc", { "decrypt-fail": "hide" });
      return e;
    }
    function s(t) {
      var n = e();
      return o("WASmaxMixins").mergeStanzas(t, n);
    }
    l.mergeStatusEncHideDecryptFailMixin = s;
  },
  98,
);
