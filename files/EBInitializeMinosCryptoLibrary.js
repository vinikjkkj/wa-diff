__d(
  "EBInitializeMinosCryptoLibrary",
  [
    "EBLoadMostRecentSelfMinosEpoch",
    "EBLoadSelfMinosEpochForDecryption",
    "EBMinosCryptoLibrary",
    "EBMinosLoadMessageEncryptionKey",
    "EBMinosLogger",
    "EBMinosSaveNewMessageEncryptionKey",
    "EBRegisterMinosMessageEncryptionKey",
    "FBLogger",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(e) {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var n = t.transportSigningKeypair,
            a = yield o("EBMinosCryptoLibrary").createMinosCryptoLibrary({
              io: {
                bulkLoadMessageEncryptionKeysForDecryption: o(
                  "EBMinosLoadMessageEncryptionKey",
                ).bulkLoadMessageEncryptionKeysForDecryption,
                loadMessageEncryptionKey: o("EBMinosLoadMessageEncryptionKey")
                  .loadMessageEncryptionKey,
                loadMostRecentSelfMinosEpoch: o(
                  "EBLoadMostRecentSelfMinosEpoch",
                ).loadMostRecentSelfMinosEpoch,
                loadSelfMinosEpochForDecryption: o(
                  "EBLoadSelfMinosEpochForDecryption",
                ).loadSelfMinosEpochForDecryption,
                registerMinosMessageEncryptionKey: o(
                  "EBRegisterMinosMessageEncryptionKey",
                ).registerMinosMessageEncryptionKey,
                saveNewMessageEncryptionKey: o(
                  "EBMinosSaveNewMessageEncryptionKey",
                ).saveNewMessageEncryptionKey,
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
        })),
        u.apply(this, arguments)
      );
    }
    l.initializeMinosCryptoLibrary = s;
  },
  98,
);
