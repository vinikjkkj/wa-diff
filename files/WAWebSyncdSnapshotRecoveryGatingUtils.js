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
      return e()
        ? o("WAWebABProps").getABPropConfigValue(
            "enable_peer_snapshot_recovery",
          )
        : !1;
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
    function d(t, n, r) {
      if (!(r instanceof o("WAWebSyncdError").SyncdFatalError))
        return {
          shouldPerformRecovery: !1,
          reason: o("WAWebWamEnumRecoveryStatusEnum").RECOVERY_STATUS_ENUM
            .NOT_FATAL,
        };
      if (!s())
        return {
          shouldPerformRecovery: !1,
          reason: e()
            ? o("WAWebWamEnumRecoveryStatusEnum").RECOVERY_STATUS_ENUM
                .ABPROP_OFF
            : o("WAWebWamEnumRecoveryStatusEnum").RECOVERY_STATUS_ENUM
                .PRIMARY_UNSUPPORTED,
        };
      if (t === o("WASyncdConst").CollectionName.CriticalBlock)
        return {
          shouldPerformRecovery: !1,
          reason: o("WAWebWamEnumRecoveryStatusEnum").RECOVERY_STATUS_ENUM
            .COLLECTION_UNSUPPORTED,
        };
      var a = o("WAWebABProps").getABPropConfigValue(
        "snapshot_recovery_max_mutations_count_allowed",
      );
      return n > a
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
