__d(
  "WASmaxOutNewslettersMessageUpdatesAfterMixinMixin",
  ["WASmaxJsx", "WASmaxMixins", "WAWap"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.messageUpdatesAfter,
        n = o("WASmaxJsx").smax("message_updates", {
          after: o("WAWap").INT(t),
        });
      return n;
    }
    function s(t, n) {
      var r = e(n);
      return o("WASmaxMixins").mergeStanzas(t, r);
    }
    l.mergeMessageUpdatesAfterMixinMixin = s;
  },
  98,
);
