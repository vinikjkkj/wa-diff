__d(
  "WASmaxOutMessagePublishSenderContentBindingMixin",
  ["WASmaxJsx", "WASmaxMixins"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.senderContentBindingElementValue,
        n = o("WASmaxJsx").smax(
          "message",
          null,
          o("WASmaxJsx").smax("sender_content_binding", null, t),
        );
      return n;
    }
    function s(t, n) {
      var r = e(n);
      return o("WASmaxMixins").mergeStanzas(t, r);
    }
    l.mergeSenderContentBindingMixin = s;
  },
  98,
);
