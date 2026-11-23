__d(
  "MAWHMACKey",
  [
    "MAWCryptoConsts",
    "MAWKeychainUtil",
    "MAWSubtleCrypto",
    "WmiMetadataAppSettingsReader",
    "WmiMetadataAppSettingsWriter",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      var e = o("MAWKeychainUtil").getBufferWithRandomValuesFromLength(
        o("MAWCryptoConsts").HKDF_SEED_LENGTH_IN_BYTES,
      );
      return u(e).then(function (e) {
        return o("MAWSubtleCrypto").MAWSubtleCrypto.exportKey("raw", e);
      });
    }
    async function s() {
      var t = await o(
        "WmiMetadataAppSettingsReader",
      ).getHMACKeyFromMetadataDb();
      return t != null
        ? t
        : o("WmiMetadataAppSettingsWriter").claimHMACKeyInMetadataDb(await e());
    }
    function u(e) {
      return o("MAWSubtleCrypto").MAWSubtleCrypto.importKey(
        "raw",
        e,
        { hash: "SHA-256", name: "HMAC" },
        !0,
        ["sign"],
      );
    }
    ((l.genHMACKey = e), (l.generateAndInsertHMACKey = s));
  },
  98,
);
