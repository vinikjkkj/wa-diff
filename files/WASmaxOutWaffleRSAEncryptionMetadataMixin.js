__d(
  "WASmaxOutWaffleRSAEncryptionMetadataMixin",
  ["WASmaxJsx", "WASmaxMixins"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t,
        n = e.encryptedKeyElementValue,
        r = e.nonceElementValue,
        a = e.encryptedDataElementValue,
        i = e.authTagElementValue,
        l = (t = o("WASmaxJsx")).smax(
          "smax$any",
          { version: "1", algorithm: "rsa2048" },
          t.smax("encrypted_key", null, n),
          t.smax("nonce", null, r),
          t.smax("encrypted_data", null, a),
          t.smax("auth_tag", null, i),
        );
      return l;
    }
    function s(t, n) {
      var r = e(n);
      return o("WASmaxMixins").mergeStanzas(t, r);
    }
    l.mergeRSAEncryptionMetadataMixin = s;
  },
  98,
);
