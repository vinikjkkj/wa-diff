__d(
  "WASmaxOutNewslettersStatusUpdatesBeforeMixinMixin",
  ["WASmaxJsx", "WASmaxMixins", "WAWap"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.statusUpdatesBefore,
        n = o("WASmaxJsx").smax("status_updates", {
          before: o("WAWap").INT(t),
        });
      return n;
    }
    function s(t, n) {
      var r = e(n);
      return o("WASmaxMixins").mergeStanzas(t, r);
    }
    l.mergeStatusUpdatesBeforeMixinMixin = s;
  },
  98,
);
