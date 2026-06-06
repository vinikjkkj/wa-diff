__d(
  "WAWebSyncdSnapshotRecoveryGatingUtils",
  [
    "WASyncdConst",
    "WAWebABProps",
    "WAWebSyncdError",
    "WAWebUserPrefsIndexedDBStorage",
    "WAWebWamEnumRecoveryStatusEnum",
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
    async function u(e) {
      await o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.set(
        "WAPrimaryDeviceSupportsSyncdRecovery",
        e,
      );
    }
    function c(e, t, n) {
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
      (l.shouldPreformSnapshotRecovery = c));
  },
  98,
);
