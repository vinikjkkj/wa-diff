__d(
  "WASmaxOutMessageDeliverInvalidPeerMessageErrorMixin",
  ["WASmaxJsx", "WASmaxMixins"],
  function (t, n, r, o, a, i, l) {
    function e() {
      var e = o("WASmaxJsx").smax("smax$any", { error: "498" });
      return e;
    }
    function s(t) {
      var n = e();
      return o("WASmaxMixins").mergeStanzas(t, n);
    }
    l.mergeInvalidPeerMessageErrorMixin = s;
  },
  98,
);
