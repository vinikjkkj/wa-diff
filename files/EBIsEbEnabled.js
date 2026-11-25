__d(
  "EBIsEbEnabled",
  [
    "EBDeps",
    "EBMinosCheckWasmFeatureSupport",
    "FBLogger",
    "I64",
    "LSEncryptedBackupsBackupTenancy",
    "LSIntEnum",
    "MAWEBSwitch",
    "MAWEncryptedBackupUtils",
    "WAResultOrError",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e, s;
    function u(t) {
      return o("MAWEncryptedBackupUtils")
        .getBackupTenancy(t)
        .then(function (t) {
          return (
            t != null &&
            (e || (e = o("I64"))).equal(
              t,
              (s || (s = o("LSIntEnum"))).ofNumber(
                r("LSEncryptedBackupsBackupTenancy").PRODUCTION,
              ),
            )
          );
        });
    }
    function c() {
      try {
        return o("WAResultOrError").makeResult(r("MAWEBSwitch").isEnabled());
      } catch (e) {
        return (
          r("FBLogger")("wmi_eb")
            .catching(r("getErrorSafe")(e))
            .mustfix("Failed to check EB enabled"),
          o("WAResultOrError").makeResult(!1)
        );
      }
    }
    async function d() {
      var e = await o(
        "EBMinosCheckWasmFeatureSupport",
      ).checkWasmFeatureSupportAndEBInitJK();
      if (!e)
        return (
          r("FBLogger")("wmi_eb").warn("isEBEnabled: WASM not supported"),
          !1
        );
      var t = await o("EBDeps").getDeps().getLSDB();
      return u(t.tables);
    }
    ((l.isEbEnabledLS = u), (l.isEbEnabledEbSwitch = c), (l.isEBEnabled = d));
  },
  98,
);
