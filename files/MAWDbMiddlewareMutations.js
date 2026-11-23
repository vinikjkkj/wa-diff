__d(
  "MAWDbMiddlewareMutations",
  [
    "MAWDbObjEncryption",
    "MAWVaultDb",
    "MAWVaultDefinitions",
    "gkx",
    "isEncryptionAtRestEnabled",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("gkx")("23909");
    function s(t, n, a) {
      if (!e && !r("isEncryptionAtRestEnabled")()) return t;
      var i = babelHelpers.extends({}, t);
      return (
        (i = o("MAWVaultDb").unvaultDbRow(
          i,
          n,
          o("MAWVaultDefinitions").ARMADILLO_IDB_VAULT_DEFINITIONS,
        )),
        (i = o("MAWDbObjEncryption").encryptDbObj(i, n, a)),
        i
      );
    }
    function u(t, n, r) {
      var a = o("MAWDbObjEncryption").decryptDbObj(
        babelHelpers.extends({}, t),
        n,
        r,
      );
      return e
        ? o("MAWVaultDb").vaultDbRow(
            a,
            n,
            o("MAWVaultDefinitions").ARMADILLO_IDB_VAULT_DEFINITIONS,
          )
        : a;
    }
    ((l.mutateValue = s), (l.getValue = u));
  },
  98,
);
