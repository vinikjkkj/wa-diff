__d(
  "WASmaxOutMessagePublishMetaHideDecryptionPlaceholderMixin",
  ["WASmaxJsx", "WASmaxMixins"],
  function (t, n, r, o, a, i, l) {
    function e() {
      var e = o("WASmaxJsx").smax(
        "smax$any",
        null,
        o("WASmaxJsx").smax("meta", { "decrypt-fail": "hide" }),
      );
      return e;
    }
    function s(t) {
      var n = e();
      return o("WASmaxMixins").mergeStanzas(t, n);
    }
    l.mergeMetaHideDecryptionPlaceholderMixin = s;
  },
  98,
);
