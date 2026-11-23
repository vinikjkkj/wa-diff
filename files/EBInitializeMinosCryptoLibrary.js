__d(
  "EBInitializeMinosCryptoLibrary",
  [
    "EBLoadMostRecentSelfMinosEpoch",
    "EBLoadSelfMinosEpochForDecryption",
    "EBMinosCryptoLibrary",
    "EBMinosLoadMessageEncryptionKey",
    "EBMinosLogger",
    "EBMinosSaveNewMessageEncryptionKey",
    "FBLogger",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    async function s(t) {
      var n = t.transportSigningKeypair,
        a = await o("EBMinosCryptoLibrary").createMinosCryptoLibrary({
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
          transportSigningKeypair: n,
        });
      if (!a.success) {
        r("FBLogger")("wmi_minos").MUSTFIX(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "Failed to create Minos crypto library ",
              "",
            ])),
          a.error,
        );
        return;
      }
      o("EBMinosCryptoLibrary").setMinosCryptoLibrary(a.value);
    }
    l.initializeMinosCryptoLibrary = s;
  },
  98,
);
