__d(
  "WASmaxOutSpamMessageRecipientMixin",
  ["WASmaxJsx", "WASmaxMixins", "WAWap"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.messageTo,
        n = o("WASmaxJsx").smax("message", { to: o("WAWap").JID(t) });
      return n;
    }
    function s(t, n) {
      var r = e(n);
      return o("WASmaxMixins").mergeStanzas(t, r);
    }
    l.mergeMessageRecipientMixin = s;
  },
  98,
);
