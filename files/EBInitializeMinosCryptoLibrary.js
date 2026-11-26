__d(
  "EBInitializeMinosCryptoLibrary",
  [
    "EBLoadMostRecentSelfMinosEpoch",
    "EBLoadSelfMinosEpochForDecryption",
    "EBMinosCryptoLibrary",
    "EBMinosErrors",
    "EBMinosLoadMessageEncryptionKey",
    "EBMinosLogger",
    "EBMinosSaveNewMessageEncryptionKey",
    "WmiErrorReport",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    async function e(e) {
      var t = e.transportSigningKeypair,
        n = await o("EBMinosCryptoLibrary").createMinosCryptoLibrary({
          io: {
            bulkLoadMessageEncryptionKeysForDecryption: o(
              "EBMinosLoadMessageEncryptionKey",
            ).bulkLoadMessageEncryptionKeysForDecryption,
            loadMessageEncryptionKey: o("EBMinosLoadMessageEncryptionKey")
              .loadMessageEncryptionKey,
            loadMostRecentSelfMinosEpoch: o("EBLoadMostRecentSelfMinosEpoch")
              .loadMostRecentSelfMinosEpoch,
            loadSelfMinosEpochForDecryption: o(
              "EBLoadSelfMinosEpochForDecryption",
            ).loadSelfMinosEpochForDecryption,
            saveNewMessageEncryptionKey: o("EBMinosSaveNewMessageEncryptionKey")
              .saveNewMessageEncryptionKey,
          },
          logger: o("EBMinosLogger").minosLogger,
          transportSigningKeypair: t,
        });
      if (!n.success) {
        o("WmiErrorReport").reportWmiError(
          o("EBMinosErrors").EBMinosErrors.error(
            "crypto_library_init_failed",
            "Failed to create Minos crypto library: %s",
            n.error,
          ),
          { loggerProject: "wmi_minos" },
        );
        return;
      }
      o("EBMinosCryptoLibrary").setMinosCryptoLibrary(n.value);
    }
    l.initializeMinosCryptoLibrary = e;
  },
  98,
);
