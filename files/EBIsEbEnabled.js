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
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e, s;
    function u(t, n) {
      return o("MAWEncryptedBackupUtils")
        .getBackupTenancy(t, n)
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
    function d() {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = yield o(
            "EBMinosCheckWasmFeatureSupport",
          ).checkWasmFeatureSupportAndEBInitJK();
          if (!e)
            return (
              r("FBLogger")("wmi_eb").warn("isEBEnabled: WASM not supported"),
              !1
            );
          var t = yield o("EBDeps").getDeps().getLSDB();
          return u(t.tables);
        })),
        m.apply(this, arguments)
      );
    }
    ((l.isEbEnabledLS = u), (l.isEbEnabledEbSwitch = c), (l.isEBEnabled = d));
  },
  98,
);
