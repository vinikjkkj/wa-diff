__d(
  "WASmaxOutMessagePublishToContentBindingMixin",
  ["WASmaxJsx", "WASmaxMixins", "WAWap"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.toJid,
        n = e.contentBindingElementValue,
        r = o("WASmaxJsx").smax(
          "to",
          { jid: o("WAWap").JID(t) },
          o("WASmaxJsx").smax("content_binding", null, n),
        );
      return r;
    }
    function s(t, n) {
      var r = e(n);
      return o("WASmaxMixins").mergeStanzas(t, r);
    }
    l.mergeToContentBindingMixin = s;
  },
  98,
);
