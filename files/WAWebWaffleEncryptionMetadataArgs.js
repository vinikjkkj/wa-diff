__d(
  "WAWebWaffleEncryptionMetadataArgs",
  [],
  function (t, n, r, o, a, i) {
    function e(e) {
      return {
        rSAEncryptionMetadata: {
          authTagElementValue: e.tag,
          encryptedDataElementValue: e.cipherText,
          encryptedKeyElementValue: e.encryptedKey,
          nonceElementValue: e.nonce,
        },
      };
    }
    function l(e) {
      return {
        rSAEncryptionMetadataV2: {
          authTagElementValue: e.tag,
          encryptedDataElementValue: e.cipherText,
          encryptedKeyElementValue: e.encryptedKey,
          keyIdElementValue: e.keyId,
        },
      };
    }
    function s(t) {
      return t.version === 1 ? e(t.params) : l(t.params);
    }
    ((i.waffleV1EncryptionMetadataArgs = e),
      (i.waffleV2EncryptionMetadataArgs = l),
      (i.waffleEncryptionMetadataArgs = s));
  },
  66,
);
