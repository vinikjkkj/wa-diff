__d(
  "WASmaxOutKeyTransparencyADVKeyMixin",
  ["WASmaxJsx", "WASmaxMixins"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.keyElementValue,
        n = o("WASmaxJsx").smax(
          "smax$any",
          null,
          o("WASmaxJsx").smax("key", null, t),
        );
      return n;
    }
    function s(t, n) {
      var r = e(n);
      return o("WASmaxMixins").mergeStanzas(t, r);
    }
    l.mergeADVKeyMixin = s;
  },
  98,
);
