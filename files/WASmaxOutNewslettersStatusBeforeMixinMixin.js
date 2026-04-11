__d(
  "WASmaxOutNewslettersStatusBeforeMixinMixin",
  ["WASmaxJsx", "WASmaxMixins", "WAWap"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.statusesBefore,
        n = o("WASmaxJsx").smax("statuses", { before: o("WAWap").INT(t) });
      return n;
    }
    function s(t, n) {
      var r = e(n);
      return o("WASmaxMixins").mergeStanzas(t, r);
    }
    l.mergeStatusBeforeMixinMixin = s;
  },
  98,
);
