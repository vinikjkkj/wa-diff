__d(
  "WASmaxOutStatusPublishEncTypeSkmsgMixin",
  ["WASmaxJsx", "WASmaxMixins"],
  function (t, n, r, o, a, i, l) {
    function e() {
      var e = o("WASmaxJsx").smax("enc", { type: "skmsg" });
      return e;
    }
    function s(t) {
      var n = e();
      return o("WASmaxMixins").mergeStanzas(t, n);
    }
    l.mergeEncTypeSkmsgMixin = s;
  },
  98,
);
