__d(
  "WASmaxOutNewslettersAfterMixinMixin",
  ["WASmaxJsx", "WASmaxMixins", "WAWap"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.messagesAfter,
        n = o("WASmaxJsx").smax("messages", { after: o("WAWap").INT(t) });
      return n;
    }
    function s(t, n) {
      var r = e(n);
      return o("WASmaxMixins").mergeStanzas(t, r);
    }
    l.mergeAfterMixinMixin = s;
  },
  98,
);
