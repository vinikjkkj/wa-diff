__d(
  "WAWebUseContactManagementAvailability",
  [
    "$InternalEnum",
    "WAWebPrimaryFeaturesModel",
    "react-compiler-runtime",
    "useWAWebModelValues",
  ],
  function (t, n, r, o, a, i, l) {
    function e() {
      var e = o("react-compiler-runtime").c(4),
        t;
      e[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((t = [
            "isContactsBackupOn",
            "primaryHasAddressbookPermission",
            "primaryHasAgreedToNativeContactsNux",
          ]),
          (e[0] = t))
        : (t = e[0]);
      var n = o("useWAWebModelValues").useModelValues(
          o("WAWebPrimaryFeaturesModel").PrimaryFeatures,
          t,
        ),
        r = n.isContactsBackupOn,
        a = n.primaryHasAddressbookPermission,
        i = n.primaryHasAgreedToNativeContactsNux,
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
            "isAccountIntegrityStatePending",
            "isAccountIntegrityStateTimelock",
          ]),
          (e[0] = t))
        : (t = e[0]);
      var n = o("useWAWebModelValues").useModelValues(
          o("WAWebPrimaryFeaturesModel").PrimaryFeatures,
          t,
        ),
        r = n.isAccountIntegrityStatePending,
        a = n.isAccountIntegrityStateTimelock;
      return a ? s.TIMELOCK : r ? s.PENDING : s.PASS;
    }
    ((l.useContactManagementAvailability = e),
      (l.AccountIntegrityState = s),
      (l.useAccountIntegrityState = u));
  },
  98,
);
