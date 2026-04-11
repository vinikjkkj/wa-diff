__d(
  "WASmaxOutSpamMessageSenderMixin",
  ["WASmaxJsx", "WASmaxMixins", "WAWap"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.messageFrom,
        n = o("WASmaxJsx").smax("message", { from: o("WAWap").JID(t) });
      return n;
    }
    function s(t, n) {
      var r = e(n);
      return o("WASmaxMixins").mergeStanzas(t, r);
    }
    l.mergeMessageSenderMixin = s;
  },
  98,
);
