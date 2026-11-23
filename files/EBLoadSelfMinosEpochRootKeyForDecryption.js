__d(
  "EBLoadSelfMinosEpochRootKeyForDecryption",
  [
    "EBLoadSelfMinosEpochForDecryption",
    "EBMinosEncryptedMekVersion",
    "EBMinosTypes",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    async function e(e) {
      var t = await o(
        "EBLoadSelfMinosEpochForDecryption",
      ).loadSelfMinosEpochForDecryption(
        o("EBMinosTypes").unsafeCastToEpochFbId(e),
        o("EBMinosEncryptedMekVersion").MINOS_ENCRYPTED_MEK_CURRENT_VERSION,
      );
      return t.success ? t.value.exportRootKey : null;
    }
    l.loadSelfMinosEpochRootKeyForDecryption = e;
  },
  98,
);
