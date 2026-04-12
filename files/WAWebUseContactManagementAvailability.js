__d(
  "WAWebUseContactManagementAvailability",
  ["$InternalEnum", "WAWebPrimaryFeaturesModel", "useWAWebModelValues"],
  function (t, n, r, o, a, i, l) {
    function e() {
      var e = o("useWAWebModelValues").useModelValues(
          o("WAWebPrimaryFeaturesModel").PrimaryFeatures,
          [
            "isContactsBackupOn",
            "primaryHasAddressbookPermission",
            "primaryHasAgreedToNativeContactsNux",
          ],
        ),
        t = e.isContactsBackupOn,
        n = e.primaryHasAddressbookPermission,
        r = e.primaryHasAgreedToNativeContactsNux;
      return { isNativeContactOn: t && r, canSyncToAddressbook: n };
    }
    var s = n("$InternalEnum").Mirrored(["PENDING", "TIMELOCK", "PASS"]);
    function u() {
      var e = o("useWAWebModelValues").useModelValues(
          o("WAWebPrimaryFeaturesModel").PrimaryFeatures,
          ["isAccountIntegrityStatePending", "isAccountIntegrityStateTimelock"],
        ),
        t = e.isAccountIntegrityStatePending,
        n = e.isAccountIntegrityStateTimelock;
      return n ? s.TIMELOCK : t ? s.PENDING : s.PASS;
    }
    ((l.useContactManagementAvailability = e),
      (l.AccountIntegrityState = s),
      (l.useAccountIntegrityState = u));
  },
  98,
);
