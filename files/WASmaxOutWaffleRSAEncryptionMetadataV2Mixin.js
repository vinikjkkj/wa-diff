__d(
  "WASmaxOutWaffleRSAEncryptionMetadataV2Mixin",
  ["WASmaxJsx", "WASmaxMixins", "WAWap"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t,
        n = e.encryptedKeyElementValue,
        r = e.encryptedDataElementValue,
        a = e.authTagElementValue,
        i = e.keyIdElementValue,
        l = (t = o("WASmaxJsx")).smax(
          "smax$any",
          { version: "2", algorithm: "rsa4096" },
          t.smax("encrypted_key", null, n),
          t.smax("encrypted_data", null, r),
          t.smax("auth_tag", null, a),
          t.smax("key_id", null, o("WAWap").INT(i)),
        );
      return l;
    }
    function s(t, n) {
      var r = e(n);
      return o("WASmaxMixins").mergeStanzas(t, r);
    }
    l.mergeRSAEncryptionMetadataV2Mixin = s;
  },
  98,
);
