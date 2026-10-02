__d(
  "WASmaxOutReceiptAppDataPeerCategoryMixin",
  ["WASmaxJsx", "WASmaxMixins"],
  function (t, n, r, o, a, i, l) {
    function e() {
      var e = o("WASmaxJsx").smax("receipt", { category: "peer_appdata" });
      return e;
    }
    function s(t) {
      var n = e();
      return o("WASmaxMixins").mergeStanzas(t, n);
    }
    l.mergeAppDataPeerCategoryMixin = s;
  },
  98,
);
