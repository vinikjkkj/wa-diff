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
    i.waffleV1EncryptionMetadataArgs = e;
  },
  66,
);
