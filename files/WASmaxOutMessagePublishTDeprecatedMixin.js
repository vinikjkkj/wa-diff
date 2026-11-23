__d(
  "WASmaxOutMessagePublishTDeprecatedMixin",
  ["WASmaxJsx", "WASmaxMixins", "WAWap"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.messageT,
        n = o("WASmaxJsx").smax("message", { t: o("WAWap").INT(t) });
      return n;
    }
    function s(t, n) {
      var r = e(n);
      return o("WASmaxMixins").mergeStanzas(t, r);
    }
    l.mergeTDeprecatedMixin = s;
  },
  98,
);
