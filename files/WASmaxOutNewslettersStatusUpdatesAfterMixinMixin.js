__d(
  "WASmaxOutNewslettersStatusUpdatesAfterMixinMixin",
  ["WASmaxJsx", "WASmaxMixins", "WAWap"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.statusUpdatesAfter,
        n = o("WASmaxJsx").smax("status_updates", { after: o("WAWap").INT(t) });
      return n;
    }
    function s(t, n) {
      var r = e(n);
      return o("WASmaxMixins").mergeStanzas(t, r);
    }
    l.mergeStatusUpdatesAfterMixinMixin = s;
  },
  98,
);
