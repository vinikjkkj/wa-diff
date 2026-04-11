__d(
  "WASmaxOutNewslettersStatusAfterMixinMixin",
  ["WASmaxJsx", "WASmaxMixins", "WAWap"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.statusesAfter,
        n = o("WASmaxJsx").smax("statuses", { after: o("WAWap").INT(t) });
      return n;
    }
    function s(t, n) {
      var r = e(n);
      return o("WASmaxMixins").mergeStanzas(t, r);
    }
    l.mergeStatusAfterMixinMixin = s;
  },
  98,
);
