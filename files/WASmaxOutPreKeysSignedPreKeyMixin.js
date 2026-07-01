__d(
  "WASmaxOutPreKeysSignedPreKeyMixin",
  [
    "WASmaxJsx",
    "WASmaxMixins",
    "WASmaxOutPreKeysKeyDataMixin",
    "WASmaxOutPreKeysKeyIDMixin",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t,
        n = e.keyIDMixinArgs,
        r = e.keyDataMixinArgs,
        a = e.signatureElementValue,
        i = (t = o("WASmaxJsx")).smax(
          "smax$any",
          null,
          t.smax(
            "skey",
            null,
            o("WASmaxOutPreKeysKeyIDMixin").mergeKeyIDMixin(
              t.smax("id", null),
              n,
            ),
            o("WASmaxOutPreKeysKeyDataMixin").mergeKeyDataMixin(
              t.smax("value", null),
              r,
            ),
            t.smax("signature", null, a),
          ),
        );
      return i;
    }
    function s(t, n) {
      var r = e(n);
      return o("WASmaxMixins").mergeStanzas(t, r);
    }
    l.mergeSignedPreKeyMixin = s;
  },
  98,
);
