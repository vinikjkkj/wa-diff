__d(
  "WAWebSyncdSnapshotRecoveryGatingUtils",
  [
    "WASyncdConst",
    "WAWebABProps",
    "WAWebSyncdError",
    "WAWebUserPrefsIndexedDBStorage",
    "WAWebWamEnumRecoveryStatusEnum",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      return (
        o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get(
          "WAPrimaryDeviceSupportsSyncdRecovery",
        ) === !0
      );
    }
    function s() {
      return e();
    }
    function u(e) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          yield o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.set(
            "WAPrimaryDeviceSupportsSyncdRecovery",
            e,
          );
        })),
        c.apply(this, arguments)
      );
    }
    function d(e, t, n) {
      if (!(n instanceof o("WAWebSyncdError").SyncdFatalError))
        return {
          shouldPerformRecovery: !1,
          reason: o("WAWebWamEnumRecoveryStatusEnum").RECOVERY_STATUS_ENUM
            .NOT_FATAL,
        };
      if (!s())
        return {
          shouldPerformRecovery: !1,
          reason: o("WAWebWamEnumRecoveryStatusEnum").RECOVERY_STATUS_ENUM
            .PRIMARY_UNSUPPORTED,
        };
      if (e === o("WASyncdConst").CollectionName.CriticalBlock)
        return {
          shouldPerformRecovery: !1,
          reason: o("WAWebWamEnumRecoveryStatusEnum").RECOVERY_STATUS_ENUM
            .COLLECTION_UNSUPPORTED,
        };
      var r = o("WAWebABProps").getABPropConfigValue(
        "snapshot_recovery_max_mutations_count_allowed",
      );
      return t > r
        ? {
            shouldPerformRecovery: !1,
            reason: o("WAWebWamEnumRecoveryStatusEnum").RECOVERY_STATUS_ENUM
              .MUTATION_COUNT_TOO_HIGH,
          }
        : { shouldPerformRecovery: !0 };
    }
    ((l.syncdSnapshotRecoveryEnabled = s),
      (l.updatePrimaryDeviceSupportsSyncdRecovery = u),
      (l.shouldPreformSnapshotRecovery = d));
  },
  98,
);
