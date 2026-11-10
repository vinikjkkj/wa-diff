__d(
  "WASmaxOutBrPaymentSignedChallengeMixin",
  ["WASmaxJsx", "WASmaxMixins", "WAWap"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.accountSignedChallenge,
        n = o("WASmaxJsx").smax("account", {
          signed_challenge: o("WAWap").CUSTOM_STRING(t),
        });
      return n;
    }
    function s(t, n) {
      var r = e(n);
      return o("WASmaxMixins").mergeStanzas(t, r);
    }
    l.mergeSignedChallengeMixin = s;
  },
  98,
);
