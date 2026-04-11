__d(
  "WASmaxOutNewslettersMessageUpdatesBeforeMixinMixin",
  ["WASmaxJsx", "WASmaxMixins", "WAWap"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.messageUpdatesBefore,
        n = o("WASmaxJsx").smax("message_updates", {
          before: o("WAWap").INT(t),
        });
      return n;
    }
    function s(t, n) {
      var r = e(n);
      return o("WASmaxMixins").mergeStanzas(t, r);
    }
    l.mergeMessageUpdatesBeforeMixinMixin = s;
  },
  98,
);
