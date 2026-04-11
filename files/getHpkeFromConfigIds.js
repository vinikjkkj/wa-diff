__d(
  "getHpkeFromConfigIds",
  [
    "AeadAes128Gcm",
    "AeadChaPoly",
    "Hpke",
    "KdfHkdfSha256",
    "KemX25519HkdfSha256",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      switch (e) {
        case o("Hpke").KemID.KemX25519HkdfSha256Id:
          return new (o("KemX25519HkdfSha256").KemX25519HkdfSha256)();
      }
    }
    function s(e) {
      switch (e) {
        case o("Hpke").KdfID.KdfHkdfSha256Id:
          return new (o("KdfHkdfSha256").KdfHkdfSha256)();
      }
    }
    function u(e) {
      switch (e) {
        case o("Hpke").AeadID.AeadAes128GcmId:
          return new (o("AeadAes128Gcm").AeadAes128Gcm)();
        case o("Hpke").AeadID.AeadChaCha20Poly1305Id:
          return new (o("AeadChaPoly").AeadChaPoly)();
      }
    }
    function c(t) {
      var n = t.aeadId,
        r = t.kdfId,
        a = t.kemId;
      return new (o("Hpke").Hpke)(e(a), s(r), u(n));
    }
    l.default = c;
  },
  98,
);
