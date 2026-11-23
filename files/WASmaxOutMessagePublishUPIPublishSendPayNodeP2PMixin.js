__d(
  "WASmaxOutMessagePublishUPIPublishSendPayNodeP2PMixin",
  ["WASmaxAttrs", "WASmaxJsx", "WASmaxMixins"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.hasPayTransactionTypeP2P,
        n = o("WASmaxJsx").smax("pay", {
          "transaction-type": o("WASmaxAttrs").OPTIONAL_LITERAL("p2p", t),
        });
      return n;
    }
    function s(t, n) {
      var r = e(n);
      return o("WASmaxMixins").mergeStanzas(t, r);
    }
    l.mergeUPIPublishSendPayNodeP2PMixin = s;
  },
  98,
);
