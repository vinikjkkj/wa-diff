__d(
  "WASmaxOutMessagePublishPayNodeTypeMixin",
  ["WASmaxJsx", "WASmaxMixins", "WAWap"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.payType,
        n = o("WASmaxJsx").smax("pay", { type: o("WAWap").CUSTOM_STRING(t) });
      return n;
    }
    function s(t, n) {
      var r = e(n);
      return o("WASmaxMixins").mergeStanzas(t, r);
    }
    l.mergePayNodeTypeMixin = s;
  },
  98,
);
