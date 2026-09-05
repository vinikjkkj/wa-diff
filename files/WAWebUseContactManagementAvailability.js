__d(
  "WAWebUseContactManagementAvailability",
  [
    "$InternalEnum",
    "WAWebPrimaryFeaturesGetters",
    "react-compiler-runtime",
    "useWAWebPrimaryFeaturesValues",
  ],
  function (t, n, r, o, a, i, l) {
    function e() {
      var e = o("react-compiler-runtime").c(4),
        t;
      e[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((t = [
            o("WAWebPrimaryFeaturesGetters").getIsContactsBackupOn,
            o("WAWebPrimaryFeaturesGetters").getPrimaryHasAddressbookPermission,
            o("WAWebPrimaryFeaturesGetters")
              .getPrimaryHasAgreedToNativeContactsNux,
          ]),
          (e[0] = t))
        : (t = e[0]);
      var n = o("useWAWebPrimaryFeaturesValues").usePrimaryFeaturesValues(t),
        r = n[0],
        a = n[1],
        i = n[2],
        l = r && i,
        s;
      return (
        e[1] !== a || e[2] !== l
          ? ((s = { isNativeContactOn: l, canSyncToAddressbook: a }),
            (e[1] = a),
            (e[2] = l),
            (e[3] = s))
          : (s = e[3]),
        s
      );
    }
    var s = n("$InternalEnum").Mirrored(["PENDING", "TIMELOCK", "PASS"]);
    function u() {
      var e = o("react-compiler-runtime").c(1),
        t;
      e[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((t = [
            o("WAWebPrimaryFeaturesGetters").getIsAccountIntegrityStatePending,
            o("WAWebPrimaryFeaturesGetters").getIsAccountIntegrityStateTimelock,
          ]),
          (e[0] = t))
        : (t = e[0]);
      var n = o("useWAWebPrimaryFeaturesValues").usePrimaryFeaturesValues(t),
        r = n[0],
        a = n[1];
      return a ? s.TIMELOCK : r ? s.PENDING : s.PASS;
    }
    ((l.useContactManagementAvailability = e),
      (l.AccountIntegrityState = s),
      (l.useAccountIntegrityState = u));
  },
  98,
);
