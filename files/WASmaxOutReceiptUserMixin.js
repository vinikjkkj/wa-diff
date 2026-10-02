__d(
  "WASmaxOutReceiptUserMixin",
  ["WASmaxJsx", "WASmaxMixins", "WASmaxOutReceiptUserMixins"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.userMixinsArgs,
        n = o("WASmaxOutReceiptUserMixins").mergeUserMixins(
          o("WASmaxJsx").smax("receipt", null),
          t,
        );
      return n;
    }
    function s(t, n) {
      var r = e(n);
      return o("WASmaxMixins").mergeStanzas(t, r);
    }
    l.mergeUserMixin = s;
  },
  98,
);
