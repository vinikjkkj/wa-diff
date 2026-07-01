__d(
  "WASmaxOutPreKeysPQLastResortKeyMixin",
  [
    "WASmaxJsx",
    "WASmaxMixins",
    "WASmaxOutPreKeysKeyIDMixin",
    "WASmaxOutPreKeysPQKeyDataMixin",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t,
        n = e.keyIDMixinArgs,
        r = e.pQKeyDataMixinArgs,
        a = e.signatureElementValue,
        i = (t = o("WASmaxJsx")).smax(
          "smax$any",
          null,
          t.smax(
            "pq_last_resort_key",
            null,
            o("WASmaxOutPreKeysKeyIDMixin").mergeKeyIDMixin(
              t.smax("id", null),
              n,
            ),
            o("WASmaxOutPreKeysPQKeyDataMixin").mergePQKeyDataMixin(
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
    l.mergePQLastResortKeyMixin = s;
  },
  98,
);
