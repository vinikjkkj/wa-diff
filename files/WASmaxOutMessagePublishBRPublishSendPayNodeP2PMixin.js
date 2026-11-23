__d(
  "WASmaxOutMessagePublishBRPublishSendPayNodeP2PMixin",
  ["WASmaxJsx", "WASmaxMixins"],
  function (t, n, r, o, a, i, l) {
    function e() {
      var e = o("WASmaxJsx").smax("pay", { "transaction-type": "p2p" });
      return e;
    }
    function s(t) {
      var n = e();
      return o("WASmaxMixins").mergeStanzas(t, n);
    }
    l.mergeBRPublishSendPayNodeP2PMixin = s;
  },
  98,
);
