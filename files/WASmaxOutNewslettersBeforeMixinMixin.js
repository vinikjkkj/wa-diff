__d(
  "WASmaxOutNewslettersBeforeMixinMixin",
  ["WASmaxJsx", "WASmaxMixins", "WAWap"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.messagesBefore,
        n = o("WASmaxJsx").smax("messages", { before: o("WAWap").INT(t) });
      return n;
    }
    function s(t, n) {
      var r = e(n);
      return o("WASmaxMixins").mergeStanzas(t, r);
    }
    l.mergeBeforeMixinMixin = s;
  },
  98,
);
