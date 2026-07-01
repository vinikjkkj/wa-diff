__d(
  "WASmaxOutPreKeysVerifiedNameMixin",
  ["WASmaxJsx", "WASmaxMixins"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.verifiedNameElementValue,
        n = o("WASmaxJsx").smax(
          "smax$any",
          null,
          o("WASmaxJsx").smax("verified_name", null, t),
        );
      return n;
    }
    function s(t, n) {
      var r = e(n);
      return o("WASmaxMixins").mergeStanzas(t, r);
    }
    l.mergeVerifiedNameMixin = s;
  },
  98,
);
