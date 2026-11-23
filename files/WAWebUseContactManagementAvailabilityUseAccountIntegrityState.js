__d(
  "WAWebUseContactManagementAvailabilityUseAccountIntegrityState",
  [
    "$InternalEnum",
    "WAWebPrimaryFeaturesGetters",
    "useWAWebPrimaryFeaturesValues",
  ],
  function (t, n, r, o, a, i, l) {
    var e = n("$InternalEnum").Mirrored(["PENDING", "TIMELOCK", "PASS"]);
    function s() {
      var t = o("useWAWebPrimaryFeaturesValues").usePrimaryFeaturesValues([
          o("WAWebPrimaryFeaturesGetters").getIsAccountIntegrityStatePending,
          o("WAWebPrimaryFeaturesGetters").getIsAccountIntegrityStateTimelock,
        ]),
        n = t[0],
        r = t[1];
      return r ? e.TIMELOCK : n ? e.PENDING : e.PASS;
    }
    ((l.AccountIntegrityState = e), (l.useAccountIntegrityState = s));
  },
  98,
);
