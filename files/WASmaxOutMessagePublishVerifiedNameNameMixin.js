__d(
  "WASmaxOutMessagePublishVerifiedNameNameMixin",
  ["WASmaxJsx", "WASmaxMixins", "WAWap"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.messageVerifiedName,
        n = o("WASmaxJsx").smax("message", {
          verified_name: o("WAWap").CUSTOM_STRING(t),
        });
      return n;
    }
    function s(t, n) {
      var r = e(n);
      return o("WASmaxMixins").mergeStanzas(t, r);
    }
    l.mergeVerifiedNameNameMixin = s;
  },
  98,
);
