__d(
  "WASmaxOutReceiptMetaModeMixin",
  ["WASmaxJsx", "WASmaxMixins", "WAWap"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.metaMode,
        n = o("WASmaxJsx").smax(
          "receipt",
          null,
          o("WASmaxJsx").smax("meta", { mode: o("WAWap").INT(t) }),
        );
      return n;
    }
    function s(t, n) {
      var r = e(n);
      return o("WASmaxMixins").mergeStanzas(t, r);
    }
    l.mergeMetaModeMixin = s;
  },
  98,
);
